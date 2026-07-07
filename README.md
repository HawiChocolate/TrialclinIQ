# TrialCliniq

A warm, modern landing page for TrialCliniq's patient portal — appointments,
prescriptions, and vitals in one place. Built with Next.js 15 (App Router),
React 19, and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.



## Stack notes

- **Styling**: Tailwind v4, with design tokens (colors, radius, brand navy)
  defined in `src/app/globals.css` using `oklch()` throughout for consistency.
- **Fonts**: Instrument Serif (display) and Plus Jakarta Sans (body), both
  self-hosted via `next/font/google` in `src/app/layout.tsx` — no third-party
  font request at runtime.
- **UI components**: `src/components/ui/*` is a full shadcn/ui + Radix set,
  installed as scaffolding for the real product (dialogs, forms, tables,
  etc.) once the portal itself is built. The current landing page doesn't
  use most of it yet.
- **Animated stats**: `src/components/stats.tsx` uses an `IntersectionObserver`
  to count up when scrolled into view; the numbers themselves live in
  `src/lib/mock-data.ts`.

## Project structure

```
src/
  app/
    page.tsx        # the landing page
    layout.tsx       # root layout, fonts, metadata
    globals.css      # design tokens + Tailwind config
  components/
    stats.tsx        # animated stat counters
    ui/              # shadcn/ui components (scaffolding for the portal)
  lib/
    mock-data.ts     # placeholder content (stats, etc.)
    utils.ts
public/
  trialcliniq-logo.png
  favicon.ico
```

