# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

VAYAANA Interiors — a marketing/portfolio site (Vite + React + TypeScript + shadcn/ui) for an interior design studio in Hyderabad. No backend; all content is static/hardcoded in page components.

## Commands

```bash
npm run dev          # start dev server (http://localhost:8080)
npm run build        # production build to dist/ (also copies index.html -> dist/404.html for SPA routing on static hosts)
npm run build:dev    # development-mode build
npm run lint         # eslint .
npm run test         # vitest run (single run)
npm run test:watch   # vitest watch mode
npm run preview      # preview the production build
npm run deploy       # build + publish dist/ to gh-pages (GitHub Pages)
```

Run a single test file: `npx vitest run src/test/example.test.ts`

Playwright is configured (`playwright.config.ts`, baseURL `http://localhost:8080`) but there is no test script wired up in package.json — run via `npx playwright test` against a running dev server if needed.

Package manager: both `bun.lock`/`bun.lockb` and `package-lock.json` are present; npm scripts are the ones actually used (`npm run dev`, etc).

## Architecture

- **Routing**: `src/App.tsx` defines all routes with `react-router-dom` (`BrowserRouter`, `basename={import.meta.env.BASE_URL}`). `Navbar` and `Footer` are rendered once outside `<Routes>` so they persist across all pages. New routes must be added above the catch-all `*` → `NotFound` route.
- **Pages** (`src/pages/`): one file per route — `HomePage`, `PortfolioPage`, `ProjectDetailPage`, `ServicesPage`, `AboutPage`, `ContactPage`, `NotFound`. `Index.tsx` is a legacy Lovable-scaffold entry that just re-exports `HomePage` — not part of the route table.
- **Portfolio data model**: project content (images, story, scope, style, highlights) lives as a hardcoded array in `src/pages/PortfolioPage.tsx` and is exported (`export { projects }`) for reuse — `ProjectDetailPage.tsx` imports it directly and looks up by `id` via `useParams`. There is no CMS/API; adding a project means editing that array and dropping images in `src/assets/`.
- **Contact form** (`src/pages/ContactPage.tsx`): submits directly to FormSubmit (`https://formsubmit.co/ajax/...`) via `fetch`/`FormData` — no backend route, no server-side validation beyond FormSubmit's own handling.
- **Supabase env vars** exist in `.env.local` (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`) but are currently unused anywhere in `src/` — leftover scaffolding, not wired to any client.
- **Scroll-reveal animation**: `useReveal` (duplicated inline in `ContactPage.tsx` and `ProjectDetailPage.tsx`, and also as a shared hook at `src/hooks/useReveal.ts`) uses `IntersectionObserver` to add an `in-view` class to elements with `.reveal` / `.reveal-left` / `.reveal-right` classes, driving CSS transitions defined in `src/index.css`.
- **UI components** (`src/components/ui/`): shadcn/ui primitives (Radix-based), generated via the shadcn CLI — configured in `components.json` (aliases: `@/components`, `@/lib`, `@/hooks`, `@/components/ui`, baseColor `slate`, no RSC). Treat these as generated/vendor code; prefer composing them over editing internals.
- **Styling**: Tailwind (`tailwind.config.ts`) with CSS variable-driven theme colors (`hsl(var(--foreground))` etc., defined in `src/index.css`), plus custom `serif` (Cormorant Garamond) / `sans` (DM Sans) font families and a `gold` accent color used throughout for editorial-style dividers/accents.
- **Path alias**: `@/*` → `src/*` (configured in `vite.config.ts`, `vitest.config.ts`, and `tsconfig.json` — keep these in sync if it ever changes).
- **Testing**: Vitest + Testing Library + jsdom (`vitest.config.ts`, `src/test/setup.ts` stubs `window.matchMedia`). Only a placeholder test currently exists (`src/test/example.test.ts`).
