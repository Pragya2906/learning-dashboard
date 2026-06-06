# Student Dashboard

A futuristic student learning dashboard built as part of a Frontend Intern Challenge.

**Live Demo:** [(https://learning-dashboard-liart-nine.vercel.app/)]

---

## Tech Stack

- **Next.js 16 (App Router)** — Server Components, file-based routing
- **Supabase** — PostgreSQL database, server-side client via `@supabase/ssr`
- **Tailwind CSS** — Utility-first styling with custom design tokens
- **Framer Motion** — Spring-physics animations, staggered reveals, layoutId transitions
- **Lucide React** — Icon system

---

## Architecture Decisions

### Server vs Client Component Split

`app/page.js` is a **Server Component** that fetches course data directly from Supabase on the server before rendering. This means:
- Zero client-side waterfall
- No loading flash for course data
- Supabase credentials never exposed to the browser

`CourseCard`, `HeroTile`, `ActivityTile`, `Sidebar` are **Client Components** because they own animations, hover states, and interactivity which require browser APIs.

`MotionGrid` is a thin Client Component wrapper that drives the staggered entrance animation — isolating the `'use client'` boundary so the rest of the tree stays server-rendered.

### Why page.js fetches instead of a separate Server Component

Initially `CoursesGrid` was a dedicated async Server Component. However, Next.js 16 with Turbopack had a module resolution issue where importing `next/headers` transitively through a client component tree caused errors. Moving the fetch to `page.js` (the root Server Component) and passing data as props is the correct pattern — it keeps the data fetching at the top of the tree and eliminates boundary issues.

### Suspense & Streaming

Skeleton loaders are shown while data loads, matching the final layout exactly so there are no jarring layout shifts when real content appears.

### Animation Architecture

All Bento tiles share `containerVariants` and `tileVariants` from `lib/variants.js`. The parent `MotionGrid` drives staggered entrance via `staggerChildren: 0.12` — individual tiles inherit from the parent rather than defining their own `initial`/`animate`, which is the correct Framer Motion orchestration pattern.

All hover states use `transform: scale()` exclusively — no layout-triggering properties — so there are zero layout shifts during interaction.

### Sidebar Micro-interactions

The active nav highlight uses Framer Motion's `layoutId` — a single shared element animates between nav items using spring physics, giving a natural snapping feel without any manual position calculations.

---

## Running Locally

```bash
npm install
npm run dev
```
