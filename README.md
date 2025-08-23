# Zestly — Data Harvest (React + Tailwind + Framer Motion)

A production-ready landing page for Zestly's “Data Harvest” campaign built with React 18, Tailwind CSS, Vite, and Framer Motion.

You can see the live demo here (React+Vite): https://zestly_landing-page-demo.surge.sh/

Or the Framer newer version: https://satisfied-encounter-308890.framer.app/

## Highlights
- Modern SaaS aesthetic with seasonal harvest accents (greens, oranges, soft yellows)
- Framer Motion animations for entrances, interactions, and hover effects
- Accessible, semantic HTML with ARIA, high contrast, and keyboard friendly
- Ready to import/recreate in Framer with a simple component mapping

## File tree
```
.
├─ index.html
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
├─ vite.config.js
├─ public/
│  ├─ favicon.svg
│  ├─ dashboard-mockup.svg
│  └─ icons/
│     ├─ time.svg
│     ├─ growth.svg
│     ├─ plug.svg
│     ├─ cart.svg
│     ├─ segment.svg
│     ├─ margin.svg
│     ├─ forecast.svg
│     ├─ twitter.svg
│     ├─ linkedin.svg
│     └─ github.svg
└─ src/
   ├─ index.css
   ├─ main.jsx
   ├─ App.jsx
   └─ components/
      ├─ Header.jsx
      ├─ Hero.jsx
      ├─ Differentiators.jsx
      ├─ UseCaseGrid.jsx
      ├─ CTA.jsx
      └─ Footer.jsx
```

## Setup

```bash
npm install
npm run dev
# open the shown localhost URL
```

Mock API (dev only)
- During development, `POST /api/lead` is mocked in `vite.config.js`. Submissions from the Hero form will hit this endpoint and simulate a short delay, returning `{ ok: true }`.
- Replace this with your real endpoint in production or behind a proxy.

Build for production:
```bash
npm run build
npm run preview
```

## Accessibility & SEO
- Landmarks: header, main, section, footer
- Labels and ARIA for nav and toasts
- Keyboard focus rings and sufficient color contrast
- SEO meta tags: title, description, OG in `index.html`

## Framer Export Guide
This project is Framer-compatible. You can recreate the following components in Framer and attach the same animations using Smart Animate or code overrides.

- Header: brand wordmark + nav links + primary CTA. Mobile menu uses height/opacity animation.
- Hero: title, supporting text, email form, CTA, and animated mockup. Use a floating animation for the mockup and a toast overlay on submit.
- Differentiators: three feature cards with hover lift and icon scale.
- UseCaseGrid: four use-case cards with colored badges and hover lift.
- CTA: centered call-to-action card with button hover.
- Footer: product/company links and social icons.

Steps:
1. Export assets from `public/` (favicon, `dashboard-mockup.svg`, icons/) and import into Framer Assets.
2. Create Frames mirroring each component’s structure. Apply Auto Layout spacing similar to Tailwind classes.
3. Animations:
   - Section entrance: fade + slide up (duration ~0.4–0.6s, once per viewport).
   - Hover lift on cards: translateY -6px; buttons: translateY -1px on hover.
   - Floating mockup: y oscillation 0 → -8 → 0 over 6s, repeating.
   - Mobile nav: height from 0 → auto, opacity 0 → 1.
4. Typography & colors: Set text to Inter or system sans. Use palette from `tailwind.config.js` (leaf, harvest, orchard, sand).
5. Export/Publish: Use Framer’s Export/Publish to web. Ensure assets paths are relative or re-linked inside Framer.

Framer delivery checklist:
- [ ] Components mapped: Header, Hero, Differentiators (FeatureCard), UseCaseGrid, CTA, Footer
- [ ] Entrance animations applied with consistent durations
- [ ] Button hover/tap micro-interactions
- [ ] Card hover lift + icon scale
- [ ] Toast behavior in Hero (optional via Overlay/Variant)
- [ ] Mobile nav open/close animation
- [ ] Assets imported and linked
- [ ] SEO fields set in Framer project settings

## Delivery Checklist
- [x] Full React + Tailwind project (Vite)
- [x] Components: App, Header, Hero, Differentiators (FeatureCard), UseCaseGrid, CTA, Footer
- [x] Tailwind config + theme tokens
- [x] README with Framer export steps
- [x] Placeholder assets
- [x] Suggested commits & timeline

## Suggested commit messages
- chore: scaffold Vite + React + Tailwind + Framer Motion
- feat: add seasonal theme tokens and global styles
- feat: implement Header with responsive nav
- feat: implement Hero with email form and animated mockup
- feat: add Differentiators section with feature cards
- feat: add Use Case grid with badges
- feat: add CTA and Footer
- chore: docs for Framer export and README polish

## 72-hour timeline to complete Framer file
- Day 1: Import assets, recreate Header/Hero, set up color tokens and type, wire section entrances.
- Day 2: Build Differentiators and Use Case cards with hover interactions. Implement floating mockup.
- Day 3: Add CTA, Footer, polish accessibility, publish preview, QA responsive.
