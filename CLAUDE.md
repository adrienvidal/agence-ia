# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Next.js dev server
npm run build     # Production build
npm run start     # Start production server
npm run lint      # ESLint
npm run format    # Prettier
```

There are no tests in this project.

## Architecture

Single-page landing site built with **Next.js 15 App Router** + **React 19** + **TypeScript**.

```
app/
  layout.tsx            # Root HTML shell + global metadata + Google Fonts
  page.tsx              # Home page (section order + per-page metadata)
  globals.css           # Tailwind v4 theme + custom utilities
  robots.ts             # SEO robots.txt
  sitemap.ts            # SEO sitemap.xml
  error.tsx             # Global error boundary
  not-found.tsx         # 404 page
  og/route.tsx          # Dynamic OG image (edge runtime, ImageResponse)
  confidentialite/      # Privacy policy page
  cgu/                  # Terms of service page
  mentions-legales/     # Legal notices page
  cookies/              # Cookie policy page
components/             # Presentational sections (all "use client")
lib/
  data.ts               # All static content (copy, links, project data)
  utils.ts              # cn() helper (clsx + tailwind-merge)
```

Section rendering order in `page.tsx`: `JsonLd → Nav → Hero → ToolsBar → PainSection → ServicesSection → RealisationsSection → ProcessSection → FounderSection → FaqSection → CtaFinal → Footer`.

`RealisationsSection` is conditionally rendered based on the `SHOW_REALISATIONS` boolean flag in `lib/data.ts`.

## Key conventions

**`@/*` path alias** resolves to the project root (`./*`), not `src/`. So `@/components/Nav` → `components/Nav.tsx`.

**All components are `"use client"`** because they use Framer Motion (`motion`, `whileInView`, `AnimatePresence`) and/or `useState`. There are no React Server Components below the page level.

**Tailwind v4** is configured entirely via CSS `@theme` in [app/globals.css](app/globals.css) — there is no `tailwind.config.ts`. Custom utilities (`gradient-text`, `glow`, `grain`, `banner-bg`) are in `@layer utilities`. Colors use oklch.

**Dark-only site** — `<html>` has a hardcoded `class="dark"` with no theme toggle. CSS variables in `:root` are the only color set; there is no `.dark {}` override block.

**Fonts** — Inter (body) and Space Grotesk (headings/display) are loaded via Google Fonts `<link>` tags in `layout.tsx`. Use `font-sans` / `font-display` Tailwind tokens to apply them.

**shadcn/ui** is configured via [components.json](components.json) (style: new-york, no RSC). To add components: `npx shadcn@latest add <component>` — they land in `components/ui/`.

**Static assets** live in `public/`. Client logos are in `public/clients/` (webp/png). On the dark-only site, logos are rendered white via `[filter:brightness(0)_invert(1)]` + `opacity-40`.

**All static content** (copy, URLs, project data, FAQ) lives in [lib/data.ts](lib/data.ts). Edit there first when updating site content. `CALENDLY_URL` is the primary CTA used across multiple components. `SITE_URL` is used for OG and sitemap generation.

Every text visible on the site is exported from `lib/data.ts` — no hardcoded strings in components. Exports are organized by section:

| Export                                                   | Section                                                       |
| -------------------------------------------------------- | ------------------------------------------------------------- |
| `META`                                                   | Page metadata + OpenGraph                                     |
| `NAV` / `NAV_LINKS`                                      | Navigation bar                                                |
| `TOOLS_BAR` / `TOOLS`                                    | Tools marquee                                                 |
| `HERO`                                                   | Hero section (badge, headline, CTA, card stats, client logos) |
| `PAIN_SECTION` / `PAINS`                                 | Diagnostic section                                            |
| `SERVICES_SECTION` / `SERVICES`                          | Services section (three offerings)                            |
| `REALISATIONS_SECTION` / `PROJECTS` / `UPCOMING_PROJECT` | Réalisations section                                          |
| `PROCESS_SECTION` / `PROCESS_STEPS`                      | Process section                                               |
| `FOUNDER_SECTION` / `CLIENTS`                            | Founder section                                               |
| `FAQ_SECTION` / `FAQ`                                    | FAQ section                                                   |
| `CTA_FINAL`                                              | Final CTA section                                             |
| `FOOTER`                                                 | Footer (copyright, links)                                     |
