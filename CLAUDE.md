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

## Architecture

Single-page landing site built with **Next.js 15 App Router** + **React 19** + **TypeScript**.

```
app/              # Next.js App Router
  layout.tsx      # Root HTML shell + global metadata
  page.tsx        # Home page + per-page metadata via generateMetadata
  globals.css     # Tailwind v4 theme + custom utilities
  not-found.tsx   # 404
  error.tsx       # Error boundary ("use client")
components/       # Presentational components (all "use client")
lib/
  data.ts         # All static content (copy, links, project data)
  utils.ts        # cn() helper (clsx + tailwind-merge)
```

## Key conventions

**`@/*` path alias** resolves to the project root (`./*`), not `src/`. So `@/components/Nav` → `components/Nav.tsx`.

**All components are `"use client"`** because they use Framer Motion (`motion`, `whileInView`, `AnimatePresence`) and/or `useState`. There are no React Server Components below the page level.

**Tailwind v4** is configured entirely via CSS `@theme` in [app/globals.css](app/globals.css) — there is no `tailwind.config.ts`. Custom utilities (`gradient-text`, `glow`, `grain`, `banner-bg`) are in `@layer utilities`. Colors use oklch.

**shadcn/ui** is configured via [components.json](components.json) (style: new-york, no RSC). To add components: `npx shadcn@latest add <component>` — they land in `components/ui/`.

**All static content** (copy, URLs, project data, FAQ) lives in [lib/data.ts](lib/data.ts). Edit there first when updating site content.
