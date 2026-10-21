# Abdullahi Ahmad — portfolio

A React 18 / Vite portfolio focused on AI research, retrieval-augmented generation, and practical machine learning. The redesign keeps the home route and SmartFin case study, with an ivory, ink, and slate-blue visual system. React Router is updated to the patched 7.x line; Node 20 or later is required for tooling.

## Develop and validate

```sh
npm ci
npm run dev
npm run build
npm run check
npm run preview
```

Development runs at http://localhost:3000. The production preview normally runs at http://localhost:4173. Build output is in `dist/`.

`npm run check` validates server-rendered page structure, navigation targets, static assets, and GitHub Pages route recovery. Run it after building. It does not replace browser accessibility or responsive-layout testing. The former ESLint script referenced an uninstalled dependency; it has been replaced with this runnable check.

## Deployment paths

The default asset and router base is `/`, preserving the original configuration. Set the following build-time variables for GitHub Pages **project hosting**:

```dotenv
VITE_BASE_PATH=/aahmad.github.io/
VITE_SITE_URL=https://abdull6771.github.io/aahmad.github.io/
```

For a custom domain or user site, use `VITE_BASE_PATH=/` and set `VITE_SITE_URL` to that site's full public URL. Put local values in the ignored `.env.local` file or configure them in the hosting build environment. Rebuild after changing them.

Deploy the contents of `dist/`. The generated `404.html` redirects deep links back to the app and safely restores their path, query, and fragment. Hosts with rewrite support should serve `index.html` for application routes. Source changes have not been published.

## Structure

- `src/pages/Home.jsx` composes selected work, experience, background, credentials, research, teaching, writing, and contact.
- `src/pages/SmartFinCase.jsx` owns the established `/case-study-smartfin` case-study route.
- `src/components/` contains the shared navigation, content sections, system diagrams, and footer.
- `src/styles/App.css` contains design tokens and responsive styles; the mobile navigation breakpoint is 900px.
- `public/Abdullahi_Ahmad_Curriculum_Vitae.pdf` is a byte-for-byte copy of the supplied four-page CV. All download actions use `import.meta.env.BASE_URL`; the original Windows path is never shipped as a link. The previous résumé asset is retained only for existing external bookmarks.
- `src/data/profile.js` centralizes contact and CV download details; `src/data/projects.js` holds the CV-backed project content and previously verified public work.
- `public/` also contains the favicon and optimized portrait sizes. The original portrait is retained.
- `docs/content-review.md` records factual sources, verified destinations, and remaining content questions.

System diagrams are labeled architectural illustrations, not product screenshots. The 88.3% network-model and 92.3% VGG16 figures are explicitly CV-reported, with missing evaluation details acknowledged. Expandable project and manuscript summaries use native disclosure elements, and writing links point to previously verified articles. Accepted, forthcoming, and in-preparation research are labeled separately.

## Interaction and accessibility

The site has a skip link, route/fragment focus handling, visible focus states, an Escape-dismissible mobile menu, and reduced-motion styles. Contact uses a real `mailto:` link and clipboard API feedback for success and failure; there is no form backend or simulated submission. Navigation, About, Contact, and the no-JavaScript fallback all download the supplied CV.

Fonts use the system sans-serif stack with Georgia accents, so reading does not depend on a third-party font service. Images include intrinsic dimensions and responsive WebP sources. A no-JavaScript fallback provides contact and résumé links.

## Verification status

Production builds and structural/routing checks pass at both root and project-subdirectory bases. All CV links and the no-JavaScript fallback use the supplied PDF, whose public, built, and HTTP-served bytes match the original. GitHub and dashboard destinations return HTTP 200; LinkedIn and Medium block automated requests. Responsive source/font-metric review covered 320px, 360px, 768px, and 1440px. The browser-control service exposes no browser, so visual checks and live keyboard/clipboard interaction testing remain outstanding. Before release, check these viewport widths, direct case-study reload, mobile-menu keyboard behavior, copy-email success/failure, and browser back navigation.

© Abdullahi Ahmad. All rights reserved.
