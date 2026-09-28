# Diet Soda — Next.js Website

A full-stack Next.js 14 + TypeScript + Tailwind CSS website.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Global CSS + Tailwind CSS
- **Animation**: GSAP 3 + CSS animations
- **3D**: Google `<model-viewer>` web component
- **State**: React Context (FlavorContext)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Hero — full 3D interactive hero, flavor switcher |
| `/ingredients` | Ingredient breakdown with cards |
| `/flavors` | Shop page — flavor cards + bundle CTA |
| `/reviews` | Customer reviews grid |
| `/about` | Story, stats, team, sustainability, FAQ |
| `/contact` | Contact form |
| `/faq` | Standalone FAQ |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

## Getting Started

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy to Vercel (recommended)

**Option A — Vercel Dashboard:**
1. Go to [vercel.com](https://vercel.com) → **New Project**
2. Import your GitHub repo
3. Framework auto-detects as **Next.js**
4. Click **Deploy** ✓

**Option B — CLI:**
```bash
npm i -g vercel
vercel login
vercel --prod
```

## ⚠️ Why GitHub Pages shows the README

GitHub Pages only serves static files. Next.js App Router requires a Node.js server.
**Solution**: deploy to **Vercel** (free, made by the Next.js team) or Netlify instead.

## Project Structure

```
src/
├── app/               # Pages (App Router)
├── components/
│   ├── layout/        # Header, Footer
│   ├── sections/      # HeroScene, BubblesContainer
│   └── ui/            # ModelViewer, FlavorCard, StarRating
├── hooks/             # useMousePosition
├── lib/               # constants.ts, FlavorContext.tsx
└── types/             # TypeScript types
```
