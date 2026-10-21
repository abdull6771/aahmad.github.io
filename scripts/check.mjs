/** Repeatable structural and routing checks. This file is never shipped to the browser. */
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";
import { build } from "esbuild";

const root = fileURLToPath(new URL("../", import.meta.url));
const require = createRequire(path.join(root, "package.json"));
const read = (file) => readFileSync(path.join(root, file), "utf8");
const assertFile = (file) => assert.ok(existsSync(path.join(root, file)), `Missing file: ${file}`);

assert.ok(existsSync(path.join(root, "dist/index.html")) && existsSync(path.join(root, "dist/404.html")), "Run npm run build before checking the portfolio.");
const builtIndex = read("dist/index.html");
const builtFallback = read("dist/404.html");
const base = builtFallback.match(/var base = "([^"\n]+)";/)?.[1];
const cvFilename = "Abdullahi_Ahmad_Curriculum_Vitae.pdf";
const suppliedCv = readFileSync(path.join(root, cvFilename));
assert.equal(suppliedCv.subarray(0, 5).toString(), "%PDF-", "Supplied CV is not a PDF");
assert.deepEqual(readFileSync(path.join(root, "public", cvFilename)), suppliedCv, "Public CV must match the supplied PDF exactly");
assert.deepEqual(readFileSync(path.join(root, "dist", cvFilename)), suppliedCv, "Production CV must match the supplied PDF exactly");
assert.ok(base?.startsWith("/") && base.endsWith("/"), "Build output has no valid deployment base");
assert.ok(!/__SITE_URL__|__BASE_PATH__|%BASE_URL%/.test(builtIndex + builtFallback), "Build placeholders were not replaced");

function executeCommonJs(source, context = {}) {
  const module = { exports: {} };
  vm.runInNewContext(source, { module, exports: module.exports, require, console, ...context });
  return module.exports;
}

const rendered = await build({
  stdin: {
    contents: `
      import React from "react";
      import { renderToStaticMarkup } from "react-dom/server";
      import { StaticRouter } from "react-router-dom";
      import Navbar from "./src/components/Navbar.jsx";
      import Home from "./src/pages/Home.jsx";
      import SmartFinCase from "./src/pages/SmartFinCase.jsx";
      const pages = { "/": Home, "/case-study-smartfin": SmartFinCase };
      export const html = Object.fromEntries(Object.entries(pages).map(([route, Page]) => [route,
        renderToStaticMarkup(<StaticRouter basename={${JSON.stringify(base)}} location={${JSON.stringify(base)} + route.slice(1)}>
          <a href="#main-content" className="skip-link">Skip to content</a><Navbar /><Page />
        </StaticRouter>)
      ]));`,
    loader: "jsx",
    resolveDir: root,
    sourcefile: "portfolio-structural-check.jsx",
  },
  bundle: true,
  write: false,
  format: "cjs",
  platform: "node",
  packages: "external",
  define: { "import.meta.env.BASE_URL": JSON.stringify(base) },
});
const { html } = executeCommonJs(rendered.outputFiles[0].text);

function decodeHtml(value = "") {
  const entities = { amp: "&", quot: '"', apos: "'", lt: "<", gt: ">" };
  return value.replace(/&(#x[0-9a-f]+|#\d+|amp|quot|apos|lt|gt);/gi, (_, entity) => {
    if (entity[0] !== "#") return entities[entity.toLowerCase()];
    return String.fromCodePoint(entity[1].toLowerCase() === "x" ? parseInt(entity.slice(2), 16) : Number(entity.slice(1)));
  });
}

// A small tokenizer for React's generated HTML; no browser or HTML parsing dependency is required.
function elements(markup) {
  return [...markup.matchAll(/<([a-z][a-z\d-]*)\b((?:"[^"]*"|'[^']*'|[^'">])*)>/gi)].map((match) => {
    const attributes = {};
    for (const attribute of match[2].matchAll(/([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g)) {
      attributes[attribute[1].toLowerCase()] = decodeHtml(attribute[2] ?? attribute[3] ?? attribute[4] ?? "");
    }
    return { tag: match[1].toLowerCase(), attributes };
  });
}

const parsedPages = Object.fromEntries(Object.entries(html).map(([route, markup]) => {
  const tags = elements(markup);
  return [route, { tags, ids: new Set(tags.map(({ attributes }) => attributes.id).filter(Boolean)) }];
}));
const origin = "https://portfolio.test";
const normalizedRoute = (pathname) => `/${pathname.slice(base.length)}`.replace(/\/+$/, "") || "/";

function checkLocalAsset(url, directory = "public") {
  const parsed = new URL(url, origin + base);
  assert.equal(parsed.origin, origin, `Unexpected external asset: ${url}`);
  assert.ok(parsed.pathname.startsWith(base), `Asset escaped deployment base: ${url}`);
  const relative = decodeURIComponent(parsed.pathname.slice(base.length));
  const resolved = path.resolve(root, directory, relative);
  assert.ok(resolved.startsWith(path.resolve(root, directory) + path.sep), `Invalid asset path: ${url}`);
  assertFile(path.relative(root, resolved));
  assert.ok(readFileSync(resolved).length > 0, `Empty asset: ${url}`);
  return resolved;
}

let checkedLinks = 0;
let checkedImages = 0;
for (const [route, page] of Object.entries(parsedPages)) {
  const { tags, ids } = page;
  const idAttributes = tags.map(({ attributes }) => attributes.id).filter(Boolean);
  assert.equal(ids.size, idAttributes.length, `${route}: duplicate element IDs`);
  assert.equal(tags.filter(({ tag }) => tag === "main").length, 1, `${route}: expected one main landmark`);
  assert.equal(tags.filter(({ tag }) => tag === "h1").length, 1, `${route}: expected one h1`);
  assert.ok(tags.some(({ tag, attributes }) => tag === "main" && attributes.id === "main-content" && attributes.tabindex === "-1"), `${route}: main must be a focusable skip-link target`);

  for (const { tag, attributes } of tags) {
    for (const attribute of ["aria-labelledby", "aria-describedby", "aria-controls"]) {
      for (const id of (attributes[attribute] || "").split(/\s+/).filter(Boolean)) {
        assert.ok(ids.has(id), `${route}: ${attribute} points to missing #${id}`);
      }
    }
    if (tag === "button") assert.equal(attributes.type, "button", `${route}: button needs an explicit type`);
    if (tag === "a") {
      checkedLinks++;
      const href = attributes.href;
      assert.ok(href && href.trim() !== "#", `${route}: empty or placeholder link`);
      assert.ok(!/^(javascript:|data:)|example\.com|your[_-]?username|your[_-]?repo(?:sitory)?(?:[/?#]|$)/i.test(href), `${route}: placeholder or unsafe link ${href}`);
      if (href.startsWith("mailto:")) {
        assert.match(href, /^mailto:[^@\s]+@[^@\s]+\.[^@\s]+$/, `${route}: invalid email link`);
        continue;
      }
      const target = new URL(href, origin + base + route.slice(1));
      if (target.origin !== origin) {
        assert.equal(target.protocol, "https:", `${route}: external link must use HTTPS`);
        if (attributes.target === "_blank") {
          assert.match(attributes.rel || "", /\bnoopener\b/, `${route}: new-tab link needs noopener`);
          assert.match(attributes.rel || "", /\bnoreferrer\b/, `${route}: new-tab link needs noreferrer`);
        }
        continue;
      }
      assert.ok(target.pathname.startsWith(base), `${route}: link escaped deployment base: ${href}`);
      const destination = parsedPages[normalizedRoute(target.pathname)];
      if (destination) {
        if (target.hash) assert.ok(destination.ids.has(decodeURIComponent(target.hash.slice(1))), `${route}: missing target ${href}`);
      } else {
        const file = checkLocalAsset(target.href);
        if ("download" in attributes && file.endsWith(".pdf")) {
          assert.equal(path.basename(file), cvFilename, "Download links must point to the current CV");
          assert.equal(attributes.download, cvFilename, "CV download filename must preserve capitalization");
          assert.deepEqual(readFileSync(file), suppliedCv, "CV download must serve the supplied PDF");
        }
      }
    }
    if (tag === "img") {
      checkedImages++;
      assert.ok(attributes.alt?.trim(), `${route}: image needs meaningful alternative text`);
      assert.ok(Number(attributes.width) > 0 && Number(attributes.height) > 0, `${route}: image needs intrinsic dimensions`);
      checkLocalAsset(attributes.src);
      if (attributes.srcset) {
        assert.ok(attributes.sizes, `${route}: responsive image needs sizes`);
        for (const candidate of attributes.srcset.split(",")) checkLocalAsset(candidate.trim().split(/\s+/)[0]);
      }
    }
  }
}
for (const { tag, attributes } of elements(builtIndex)) {
  if (tag === "script" && attributes.src) checkLocalAsset(attributes.src, "dist");
  if (tag === "link" && ["stylesheet", "icon"].includes(attributes.rel)) checkLocalAsset(attributes.href, "dist");
  if (tag === "a" && "download" in attributes) {
    const file = checkLocalAsset(attributes.href, "dist");
    assert.equal(path.basename(file), cvFilename, "No-JavaScript download must use the current CV");
    assert.deepEqual(readFileSync(file), suppliedCv, "No-JavaScript download must serve the supplied PDF");
  }
}
assert.ok(!/[A-Za-z]:\\(?:Users|Windows)\\/.test(Object.values(html).join("") + builtIndex), "A local Windows path leaked into the website");
console.log("PASS: every CV download uses the current filename and deployment base; public and built PDFs match the supplied source byte for byte.");
console.log(`PASS: ${Object.keys(html).length} rendered pages, semantic landmarks, IDs, ARIA references, ${checkedLinks} links, ${checkedImages} image, and production assets (base ${base}).`);

function inlineScript(markup) {
  const result = markup.match(/<script>([\s\S]*?)<\/script>/);
  assert.ok(result, "Missing route-recovery inline script");
  return result[1];
}
const fallbackScript = inlineScript(builtFallback);
const recoveryScript = inlineScript(builtIndex);

function recover(route) {
  const landing = new URL(base, origin);
  landing.searchParams.set("__portfolio_route", route);
  let restored;
  vm.runInNewContext(recoveryScript, {
    URL, URLSearchParams,
    window: { location: landing, history: { replaceState: (_state, _title, value) => { restored = value; } } },
  });
  return restored;
}

for (const route of ["case-study-smartfin?source=portfolio&note=a%26b#approach-title", "missing-page?x=%23%26#with%20spaces"]) {
  const requested = new URL(base + route, origin);
  let redirected;
  vm.runInNewContext(fallbackScript, {
    URL,
    window: { location: { origin, pathname: requested.pathname, search: requested.search, hash: requested.hash, replace: value => { redirected = value; } } },
    document: { getElementById: () => ({ href: "" }) },
  });
  assert.ok(redirected?.startsWith(base + "?__portfolio_route="), "404 did not redirect within the deployment base");
  const encodedRoute = new URL(redirected, origin).searchParams.get("__portfolio_route");
  assert.equal(recover(encodedRoute), requested.pathname + requested.search + requested.hash, "404 recovery lost route/query/fragment");
}
for (const unsafe of ["https://evil.test/", "//evil.test/", "/\\evil.test/", "javascript:alert(1)"]) {
  assert.equal(recover(unsafe), undefined, `Recovery accepted an external/invalid route: ${unsafe}`);
}
if (base !== "/") assert.equal(recover("/outside-base/"), undefined, "Recovery escaped the deployment base");
let rootRedirect = false;
vm.runInNewContext(fallbackScript, {
  URL,
  window: { location: { origin, pathname: base, search: "", hash: "", replace: () => { rootRedirect = true; } } },
  document: { getElementById: () => ({ href: "" }) },
});
assert.equal(rootRedirect, false, "404 fallback loops when served at the deployment root");
console.log("PASS: built 404 recovery preserves route/query/fragment, rejects external destinations, and avoids root loops.");

// Exercise the actual RouteEffects function with a small hook/DOM harness. This tests
// effect replay and navigation logic, not browser layout, keyboard events, or rendering.
const routeBundle = await build({
  stdin: { contents: 'export { RouteEffects } from "./src/App.jsx";', resolveDir: root, loader: "jsx" },
  bundle: true,
  write: false,
  format: "cjs",
  platform: "node",
  loader: { ".css": "empty" },
  define: { "import.meta.env.BASE_URL": JSON.stringify(base), "import.meta.env.VITE_SITE_URL": JSON.stringify(origin + base) },
  plugins: [{
    name: "route-effect-test-harness",
    setup(builder) {
      builder.onLoad({ filter: /[\\/]src[\\/]App\.jsx$/ }, () => ({ contents: read("src/App.jsx") + "\nexport { RouteEffects };", loader: "jsx" }));
      builder.onResolve({ filter: /^(react|react-router-dom)$/ }, args => ({ path: args.path, namespace: "test-hooks" }));
      builder.onLoad({ filter: /.*/, namespace: "test-hooks" }, args => ({ contents: args.path === "react" ? `
        const hooks = globalThis.__routeHarness;
        export const useRef = initial => {
          const index = hooks.cursor++;
          if (!hooks.refs[index]) hooks.refs[index] = { current: initial };
          return hooks.refs[index];
        };
        export const useEffect = effect => hooks.effects.push(effect);
        export const useLayoutEffect = effect => hooks.layouts.push(effect);
        export const useState = initial => [initial, () => {}];
        export default { createElement: () => null };
      ` : `
        export const useLocation = () => globalThis.__routeHarness.location;
        export const useNavigationType = () => globalThis.__routeHarness.navigationType;
        export const BrowserRouter = () => null;
        export const Link = () => null;
        export const Route = () => null;
        export const Routes = () => null;
      ` }));
    },
  }],
});

const harness = { refs: [], cursor: 0, effects: [], layouts: [], location: { key: "initial", pathname: "/", hash: "" }, navigationType: "POP" };
const calls = [];
const frames = new Map();
const listeners = new Map();
const metadata = new Map();
let frameId = 0;
const targetElement = id => ({
  hasAttribute: () => true,
  focus: options => calls.push(["focus", id, options.preventScroll]),
  scrollIntoView: () => calls.push(["target-scroll", id]),
});
const targets = { "main-content": targetElement("main-content"), projects: targetElement("projects") };
const windowMock = {
  history: { scrollRestoration: "auto" }, scrollX: 0, scrollY: 0,
  requestAnimationFrame: callback => { frames.set(++frameId, callback); return frameId; },
  cancelAnimationFrame: id => frames.delete(id),
  addEventListener: (name, callback) => listeners.set(name, callback),
  removeEventListener: name => listeners.delete(name),
  scrollTo: ({ top, left }) => { windowMock.scrollY = top; windowMock.scrollX = left; calls.push(["scroll", top]); },
};
const documentMock = {
  title: "",
  getElementById: id => targets[id],
  querySelector: selector => metadata.get(selector),
  createElement: tag => ({ tag, attributes: {}, setAttribute(name, value) { this.attributes[name] = value; } }),
  head: { appendChild(element) {
    const selector = element.tag === "link" ? 'link[rel="canonical"]' : `meta[${element.attributes.name ? "name" : "property"}="${element.attributes.name || element.attributes.property}"]`;
    metadata.set(selector, element);
  } },
};
const { RouteEffects } = executeCommonJs(routeBundle.outputFiles[0].text, { __routeHarness: harness, window: windowMock, document: documentMock, URL });
function renderEffects() {
  harness.cursor = 0;
  harness.effects = [];
  harness.layouts = [];
  RouteEffects();
}
function flushFrames() {
  const pending = [...frames.values()];
  frames.clear();
  pending.forEach(callback => callback());
}
function navigate(pathname, hash, key, navigationType = "PUSH") {
  calls.length = 0;
  harness.location = { pathname, hash, key };
  harness.navigationType = navigationType;
  renderEffects();
  harness.layouts[0]();
  flushFrames();
  harness.effects[1]();
}

renderEffects();
const stopTracking = harness.effects[0]();
const cancelInitialFrame = harness.layouts[0]();
cancelInitialFrame();
harness.layouts[0]();
flushFrames();
assert.ok(!calls.some(([type]) => type === "focus"), "StrictMode effect replay incorrectly focuses the initial page");
navigate("/", "#projects", "work");
assert.ok(calls.some(([type, id]) => type === "target-scroll" && id === "projects"), "Hash navigation did not scroll to the section");
assert.ok(calls.some(([type, id]) => type === "focus" && id === "projects"), "Hash navigation did not focus the section");
windowMock.scrollY = 640;
listeners.get("scroll")();
navigate("/case-study-smartfin/", "", "case");
assert.ok(calls.some(([type, top]) => type === "scroll" && top === 0), "Page navigation did not reset scroll");
assert.ok(calls.some(([type, id]) => type === "focus" && id === "main-content"), "Page navigation did not focus main");
assert.equal(documentMock.title, "SmartFin Analytics — Abdullahi Ahmad", "Trailing slash lost route metadata");
assert.equal(metadata.get('meta[name="robots"]').attributes.content, "index, follow", "Trailing slash incorrectly marked noindex");
assert.equal(metadata.get('link[rel="canonical"]').href, origin + base + "case-study-smartfin", "Canonical did not normalize trailing slash");
navigate("/", "#projects", "work", "POP");
assert.ok(calls.some(([type, top]) => type === "scroll" && top === 640), "Back navigation did not restore saved scroll");
navigate("/missing", "#%E0%A4%A", "missing");
assert.equal(metadata.get('meta[name="robots"]').attributes.content, "noindex, follow", "Unknown route was not marked noindex");
navigate("/https://evil.test", "", "malformed-path");
assert.equal(new URL(metadata.get('link[rel="canonical"]').href).origin, origin, "A malformed path escaped the canonical site origin");
stopTracking();
assert.equal(windowMock.history.scrollRestoration, "auto", "Scroll tracking cleanup did not restore browser behavior");
console.log("PASS: actual route effects handle StrictMode replay, hash focus, page navigation, history restoration, malformed fragments, and trailing-slash metadata.");
console.log("These checks do not replace browser review: viewport layout, keyboard/touch behavior, clipboard permissions, or external service availability remain unverified here.");
