# Sunshine Custom Builders — Kitchen Remodeling Landing Page

A dedicated landing page for paid Google Ads traffic, built for **Sunshine Custom Builders**
(Florida Contractor License CRC1335865), targeting homeowners searching for kitchen remodeling
in Tampa Bay.

- **Live route for ads:** `/kitchen-remodeling`
- **Stack:** Vite + React + TypeScript + Tailwind CSS (a plain static-buildable React app —
  works on almost any host, including Hostinger, Cloudflare Pages, Netlify, or Vercel)
- `/` is a minimal placeholder — this repo currently only builds out the ad landing page, not
  a full replacement for the existing sunshinecustom.homes site.

## Before you turn on ad spend — 3 things to connect

This page was built without access to the live sunshinecustom.homes site or its existing
tools (network access to that domain was blocked in the build environment), so a few things
are intentionally **placeholders** you need to wire up:

### 1. Where form submissions go (required)
Right now, submitting the form does **not** send the lead anywhere — it just logs a warning to
the browser console. You need a destination. The easiest no-backend options:
- [Web3Forms](https://web3forms.com) (free, just an access key)
- [Formspree](https://formspree.io)
- A Zapier "Catch Hook" webhook (sends leads into email, a spreadsheet, or a CRM)

Once you have an endpoint URL, set it as an environment variable when you build/deploy:
```
VITE_LEAD_ENDPOINT=https://your-endpoint-here
```

### 2. Google Ads / GA4 conversion tracking (required for ad spend to be measurable)
No analytics ID is hard-coded. Set one or both of these env vars and the page will load
`gtag.js` and fire events automatically — nothing loads or fires until you set them:
```
VITE_GA_MEASUREMENT_ID=G-XXXXXXX     # GA4 measurement ID
VITE_GOOGLE_ADS_ID=AW-XXXXXXXXX      # Google Ads conversion ID, if different from GA4
```
Events already wired up and ready to report as conversions in Google Ads:
| Event | Fires when |
|---|---|
| `phone_click` | Someone taps/clicks a "Call 248-766-2957" link (header, hero, footer, mobile bar, final CTA) |
| `estimate_cta_click` | Someone clicks a "Request a Free Estimate" button |
| `form_submit` | The lead form is successfully submitted |

If the existing sunshinecustom.homes site already has GTM/GA4/Google Ads installed, use
**those same IDs** here rather than creating new ones — that keeps all traffic in one account.

### 3. Brand assets (cosmetic, not blocking)
No logo or verified brand colors were available, so the page uses a placeholder navy/gold
palette (`tailwind.config.ts`) and the business name as text in place of a logo. Swap in the
real logo/colors whenever you have them.

## Local development
```bash
npm install
npm run dev              # http://localhost:5173/kitchen-remodeling
```

## Build & preview
```bash
npm run build             # outputs static files to dist/
npm run preview           # serve the production build locally
```

`npm run build` runs a full TypeScript check before building — the build will fail if there are
type errors.

## Adding more project photos
Full-resolution source photos go in `src/assets/kitchen/source/` (git-ignored — this folder
stays local, only the optimized output is committed). Then run:
```bash
npm run optimize-images
```
This generates compressed `.jpg` and `.webp` versions at 800px and 1600px wide into
`src/assets/kitchen/`, which is what actually ships to the site.

## Deploying
Since this builds to plain static files (`dist/`), you can host it almost anywhere:
- **Hostinger**: upload the contents of `dist/` to your hosting file manager
- **Cloudflare Pages / Netlify / Vercel**: connect this repo, build command `npm run build`,
  output directory `dist`

Whichever host you use, set the environment variables from above (`VITE_LEAD_ENDPOINT`,
`VITE_GA_MEASUREMENT_ID`, `VITE_GOOGLE_ADS_ID`) in that host's project settings before
building for production — they're baked in at build time, not read at runtime.
