# Wellsphere General Dealers website

Company website for Wellsphere General Dealers, Lusaka, Zambia. Built with Next.js (App Router), TypeScript and plain CSS, deployed to Vercel.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home: introduction, seven service divisions, healthcare focus, team, call to action |
| `/about` | Background, mission, vision, objectives, values, leadership team |
| `/services` | Full detail for all seven divisions and healthcare |
| `/projects` | Projects and experience (placeholders until client supplies projects) |
| `/company-profile` | PDF download, company facts, certificates |
| `/contact` | Phone, WhatsApp, email, location, quotation request form |

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Scripts

- `npm run dev`: local development server
- `npm run build`: production build (run before every deploy)
- `npm run typecheck`: TypeScript check without emitting files
- `npm run lint`: ESLint

## Where content lives

- `lib/site.ts`: company facts, phone numbers, services, team. Edit here, not in the pages.
- `app/globals.css`: design tokens (`:root`), type, components, motion and responsive rules.
- `public/images/`: logo, hero and team photos. Replace the logo with a transparent PNG or SVG when available.
- `public/downloads/`: the company profile PDF.

## Motion

Animations are CSS keyframes plus one `Reveal` component that animates elements once when they enter the viewport. Everything is switched off under `prefers-reduced-motion`, and content stays visible without JavaScript.

## Quotation requests

The form posts to `app/api/quote/route.ts`, which validates the request and forwards it as JSON to `QUOTE_WEBHOOK_URL`. Until that variable is set, the form reports that delivery is not configured. Connect it to an email or CRM automation before launch.

## Security

Security headers (HSTS, a content security policy, frame and referrer policies) are set in `next.config.mjs`. Serve the site over HTTPS only; Vercel provides this on every deployment.

## Deployment

Deploy to Vercel with the project's Git repository connected. Set `NEXT_PUBLIC_SITE_URL` and `QUOTE_WEBHOOK_URL` in the Vercel project settings for Production and Preview.
