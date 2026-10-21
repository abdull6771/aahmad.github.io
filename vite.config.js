import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

function normalizeBase(value) {
  const base = value || "/";
  if (!base.startsWith("/") || /[?#:\\\s"'<>]|\/\//.test(base) || /(^|\/)\.{1,2}(\/|$)/.test(base)) {
    throw new Error("VITE_BASE_PATH must be a local path, such as / or /aahmad.github.io/.");
  }
  return base.endsWith("/") ? base : `${base}/`;
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, projectRoot, "VITE_");
  const base = normalizeBase(env.VITE_BASE_PATH);
  const siteUrl = new URL(env.VITE_SITE_URL || "https://abdull6771.github.io/aahmad.github.io/");
  if (!["https:", "http:"].includes(siteUrl.protocol) || siteUrl.username || siteUrl.password) {
    throw new Error("VITE_SITE_URL must be an absolute HTTP(S) URL.");
  }
  siteUrl.search = "";
  siteUrl.hash = "";
  if (!siteUrl.pathname.endsWith("/")) siteUrl.pathname += "/";

  let outputDirectory;
  return {
    base,
    define: { "import.meta.env.VITE_SITE_URL": JSON.stringify(siteUrl.href) },
    plugins: [
      react(),
      {
        name: "portfolio-deployment-metadata",
        configResolved(config) {
          outputDirectory = path.resolve(config.root, config.build.outDir);
        },
        transformIndexHtml(html) {
          return html.replaceAll("__SITE_URL__", siteUrl.href);
        },
        writeBundle() {
          const fallback = readFileSync(path.join(projectRoot, "public/404.html"), "utf8");
          writeFileSync(path.join(outputDirectory, "404.html"), fallback.replaceAll("__BASE_PATH__", base));
        },
      },
    ],
    server: { port: 3000 },
  };
});
