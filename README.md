# Revivified Beauty website

A one-page site for Revivified Beauty, the aesthetic and beauty salon at 32 Peter Mokaba Street, Potchefstroom.
Built with React, Vite and TypeScript, animated with GSAP, using components from React Bits and designed with the
Taste Skill (`.agents/skills/design-taste-frontend`).

## Run it

```bash
npm install
npm run dev
```

`npm run build` writes the static site to `dist/`, ready for any static host.

## Deploy

Every push to `main` builds the site and publishes it to GitHub Pages at
https://ystervarkies.github.io/Revivified/ (`.github/workflows/deploy.yml`). The workflow sets `BASE_PATH` to
`/Revivified/`; locally it stays `/`. Files in `public/` are referenced through `asset()` in `src/lib/asset.ts` so they
follow the base path. With a custom domain, drop `BASE_PATH` from the workflow.

## Where things live

| Path | What it holds |
| --- | --- |
| `src/data/site.ts` | Every fact and line of copy: contact details, treatments, courses, products, reviews. Edit content here. |
| `src/sections/` | One component and stylesheet per section, in page order (Hero, Intro, TreatmentMenu, Academy, Boutique, DressHire, WomanOnTheMove, Retail, Reviews, Visit, Footer). |
| `src/components/` | React Bits components, installed with `npx shadcn@latest add @react-bits/<Name>-TS-CSS`: SplitText, ScrollReveal, StaggeredMenu, Magnet, FlowingMenu, CountUp, TiltedCard. Their decorative glare, shadows, dividers and numbering are switched off to match the house style. |
| `src/styles/global.css` | Colour and type tokens, buttons, links. |
| `public/images/` | Photographs, cropped from the salon's own pictures on revivifiedbeauty.mypixieset.com. |
| `public/fonts/` | Playfair Display and Jost, self-hosted (SIL Open Font Licence). |

## What the page does

- The hero opens a window onto the salon lounge that grows to full screen as you scroll (GSAP ScrollTrigger).
- The treatment menu is the one interactive tool: tick treatments and the site writes a WhatsApp booking message to
  071 359 4956. The photograph beside the menu changes as each group scrolls past.
- Every booking button goes to revivified.booksy.com.
- Reduced-motion users get the finished page with no travel.

## Check before launch

- Treatment descriptions were written from the salon's flyers and site; confirm the wording, especially Massage,
  Slimming and Acne treatment.
- Prices and opening hours are not on the page; the site points to Booksy for both.
- Three atmosphere photographs are from Unsplash and are credited in the footer: leaves with water droplets (John
  French), water lily (Schicka) and calla lily (Marta Pawlik). Swap them for the salon's own
  photos when available.
- Reviews are the eleven from the current testimonials page, shown without names.
- Product photographs (Monteil, Kalahari, Pure Smile, Thoclor, Lovella, GHD, Ella Carlé, Woman on the Move) are the brand images already
  used on the current site.
