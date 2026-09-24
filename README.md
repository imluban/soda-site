# Diet Soda — Next.js Website

A full-stack Next.js 14 + TypeScript + Tailwind CSS website converted from the original single-file HTML hero, with a complete multi-page structure.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Global CSS (custom design system) + Tailwind CSS
- **Animation**: GSAP 3 (CDN) + CSS animations
- **3D**: Google `<model-viewer>` web component
- **State**: React Context (FlavorContext)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Hero landing — full 3D interactive hero, flavor switcher |
| `/ingredients` | Ingredient breakdown with cards |
| `/flavors` | Shop page — flavor cards + bundle CTA |
| `/reviews` | Customer reviews grid with star ratings |
| `/about` | Story, stats, team, sustainability, FAQ accordion |
| `/contact` | Contact form + info |
| `/faq` | Standalone FAQ page |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel (one command)

```bash
npx vercel
```

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout (Header, Footer, FlavorProvider)
│   ├── globals.css       # All styles
│   ├── page.tsx          # Home / Hero
│   ├── ingredients/
│   ├── flavors/
│   ├── reviews/
│   ├── about/
│   ├── contact/
│   ├── faq/
│   ├── privacy/
│   ├── terms/
│   └── not-found.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroScene.tsx       # Full 3D hero with GSAP animations
│   │   └── BubblesContainer.tsx
│   └── ui/
│       ├── ModelViewer.tsx     # model-viewer web component wrapper
│       ├── FlavorCard.tsx
│       └── StarRating.tsx
├── hooks/
│   └── useMousePosition.ts
├── lib/
│   ├── constants.ts       # All data (flavors, ingredients, reviews…)
│   └── FlavorContext.tsx  # Global flavor state
└── types/
    └── index.ts
```

## Assets

All 3D models and images are served from:
`https://api.getlayers.ai/storage/v1/object/public/public/assets/soda-14ff8a788d/`

No local asset files needed — everything is remote.
