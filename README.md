# Clayvio Cafe Website

A production-ready website for **Clayvio Cafe** — a cozy cafe in Sopore serving chai, coffee, and community.

## Project Overview

This is a modern, responsive website built with Next.js that showcases the cafe's warm, cozy atmosphere. The design is inspired by the cafe's actual interior — warm cream walls, dark chocolate furniture, wood-slat ceilings, and golden pendant lighting.

## Tech Stack

- **Next.js 15** — React framework with App Router
- **TypeScript** — Type-safe development
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Scroll-driven animations
- **Lucide React** — Lightweight icons
- **Next.js Image** — Optimized image delivery

## Folder Structure

```
├── app/
│   ├── (public)/
│   │   ├── page.tsx          # Home page
│   │   ├── menu/page.tsx     # Menu page
│   │   ├── about/page.tsx    # About page
│   │   └── contact/page.tsx  # Contact page
│   ├── layout.tsx            # Root layout with fonts & SEO
│   ├── globals.css           # Global styles & design system
│   ├── sitemap.ts            # SEO sitemap
│   ├── robots.ts             # Robots configuration
│   └── icon.svg              # Favicon
├── components/
│   ├── animations/
│   │   ├── FadeIn.tsx        # Fade-in reveal animation
│   │   ├── ParallaxImage.tsx # Scroll parallax image
│   │   ├── ScrollReveal.tsx  # Scroll-triggered reveal
│   │   ├── HorizontalScroll.tsx # Horizontal scroll strip
│   │   └── StickyStory.tsx   # Sticky storytelling section
│   └── layout/
│       ├── Header.tsx        # Sticky navigation with mobile menu
│       └── Footer.tsx        # Footer with contact info
├── lib/
│   ├── constants.ts          # Cafe info
│   ├── menu-data.ts          # Menu items & prices
│   └── utils.ts              # Helper functions
└── package.json
```

## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create environment file:**
   ```bash
   cp .env.example .env.local
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_SITE_URL` | The public URL of the site | `http://localhost:3000` |

## Production Build

```bash
npm run build
npm start
```

## Vercel Deployment

1. Push the project to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and click **New Project**.
3. Import your repository.
4. Add the environment variable `NEXT_PUBLIC_SITE_URL` with your production URL.
5. Click **Deploy**.

Vercel will automatically detect Next.js and build the project.

## Updating Menu Items

All menu data is stored in `lib/menu-data.ts`. To update:

1. Open `lib/menu-data.ts`
2. Find the category and item you want to change
3. Update the name, price, or variant as needed
4. Save the file — the changes will appear automatically

## Updating Cafe Information

All cafe details (location, contact, Instagram) are in `lib/constants.ts`.

## Design System

The design system is defined in `tailwind.config.ts` and `app/globals.css`:

- **Colors:** Warm ivory/parchment, deep espresso, clay/terracotta, warm brass, muted olive
- **Fonts:** Cormorant Garamond (display), Manrope (body), Caveat (script accent)
- **Shadows:** Warm, soft shadows instead of harsh dark ones
- **Texture:** Subtle paper grain overlay
- **Animations:** Framer Motion scroll-driven reveals, parallax, sticky storytelling

## License

© Clayvio Cafe. All rights reserved.