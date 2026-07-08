# Personal Branding Website — Design Spec (chapter1)

**Date:** 2026-07-07 · **Status:** Approved by Ahmet
**Content source:** `chapter1/profile.md` (verified against current CV)

## Goal

A single-page personal branding website for Ahmet Karakoyun that reads as
"real engineer" to a recruiter within 10 seconds. Chapter 1 homework deliverable;
must also be portfolio-quality.

## Approach (approved)

Pure static site — HTML + CSS + vanilla JS. No frameworks, no build step,
no external CDNs (works offline, deploys as-is to GitHub Pages).

## Files

```
chapter1/
  index.html      single page
  css/style.css   all styles
  js/main.js      typing animation, scroll reveal, active-nav highlight
  profile.md      content source (already present)
  docs/           this spec
```

## Visual system — "dark developer"

- Background: near-black navy (≈ #0a0e14); panels one step lighter.
- Accent: terminal green/cyan; gold accent reserved for 1st-place badges.
- Typography: monospace for headings/labels/terminal chrome (system stack:
  Cascadia Code → SF Mono → JetBrains Mono fallbacks); readable sans-serif for body.
- Contrast: WCAG AA minimum. `prefers-reduced-motion` honored.

## Page flow (single scroll)

1. **Hero** — terminal window: typed `> whoami` animation → name, tagline
   ("Backend & AI-Powered Systems"), co-founder @ Feza-Co, two 1st-place chips.
2. **Who I Am** — narrative from profile.md §1.
3. **Skills** — grouped badge grid (Languages / Backend / Frontend / AI-Data /
   Databases / Tools / Engineering).
4. **Projects** — 6 cards: LunaPath 🏆, HealthAI 🏆, Raw2Value (5th/honorable),
   Hayat Ağı, Meydan, Test Courthouse. Award badge + tech tags per card.
5. **Experience** — vertical timeline: Feza-Co co-founder (2026–),
   Presidency intern (Jun 2026–, "current"), SGK intern (Jul 2025).
6. **My Future Goal** — closing narrative.
7. **Contact** — email, GitHub, LinkedIn, feza-co.dev. No phone number
   (spam risk on a public page). No GPA.

## Interaction

- Sticky top nav with active-section highlight (IntersectionObserver).
- Sections fade/slide in on scroll (IntersectionObserver, reduced-motion safe).
- Hero typing animation (vanilla JS, types once).
- Card hover: lift + accent border.

## Verification

Open via Playwright, screenshot desktop + mobile widths, check console for errors.

## Out of scope

Multi-page routing, blog, CMS, analytics, contact form (mailto link only).
