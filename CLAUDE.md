# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start development server at localhost:3000
pnpm build        # Build for production
pnpm lint         # Run ESLint
```

## Tech Stack

- **Next.js 16.1.1** with App Router (React 19)
- **Tailwind CSS v4** with OKLCH color space
- **shadcn/ui** components (Base UI variant) in `components/ui/`
- **Fonts**: Geist Sans, Geist Mono, Caveat (handwriting)

## Architecture

This is a "2025 Life Wrapped" single-page scrollable experience showcasing photos and memories throughout the year.

### Component Structure

**Wrapped Components** (`components/wrapped/`):
- `layout/` - Page structure: `WrappedPage`, `Hero`, `Footer`, `Section`
- `moments/` - Content blocks: `FeatureMoment` (editorial image+text), `PolaroidCluster`, `TextInterlude`
- `decorative/` - Visual elements: `Polaroid` (photo with film frame aesthetic)
- `typography/` - Text animations: `TextReveal` (staggered word-by-word fade-in), `FadeIn`
- `media/` - `OptimizedImage` (Next.js Image with blur placeholder)
- `data/types.ts` - `MediaItem` type for photo/video entries

### Key Patterns

**Scroll Animations**: `useScrollAnimation` hook (`lib/hooks/`) uses Intersection Observer to trigger CSS transitions when elements enter viewport.

**Image Loading**: All images use blur placeholders via Next.js Image optimization. Images stored in `/public/2025/` with naming pattern `YYYY-MM-DD-HH-MM-SS.jpg`.

**Content Data**: Photo metadata defined as `MediaItem[]` arrays at the top of `app/page.tsx`, organized by month. Each item has:
- `path` - Image path relative to `/public/`
- `label` - Short 2-3 word caption for polaroids
- `hint` - Longer description for alt text

### CSS Theme

Custom wrapped colors in `globals.css`:
- `--wrapped-cream`, `--wrapped-warm` - Background tones
- `--wrapped-shadow`, `--wrapped-film` - Polaroid effects

Uses OKLCH color space throughout for perceptually uniform color.

## Path Aliases

`@/*` maps to project root (e.g., `@/components/ui/button`).
