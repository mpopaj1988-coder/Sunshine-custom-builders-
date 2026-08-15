# Sunshine Custom Builders — Kitchen Remodeling Landing Page

A dedicated landing page for paid Google Ads traffic, built for **Sunshine Custom Builders**
(Florida Contractor License CRC1335865), targeting homeowners searching for kitchen remodeling
in Tampa Bay.

- **Live route for ads:** `/kitchen-remodeling`
- **Stack:** Vite + React + TypeScript + Tailwind CSS (a plain static-buildable React app —
  works on almost any host, including Hostinger, Cloudflare Pages, Netlify, or Vercel)
- `/` is a minimal placeholder — this repo currently only builds out the ad landing page, not
  a full replacement for the existing sunshinecustom.homes site.

## Before you turn on ad spend — 2 things left to connect

This page was built without access to the live sunshinecustom.homes site or its existing
tools (network access to that domain was blocked in the build environment), so a couple
things are still **placeholders** you need to wire up:

### 1. Where form submissions go (required — not done yet)
Right now, submitting the form does **not** send the lead anywhere — it just logs a warning to
the browser console. The site is wired up for [Web3Forms](https://web3forms.com) (free, emails
you the lead directly, no backend or account login needed):

1. Go to web3forms.com, enter the email you want leads sent to, click **Create Access Key**
2. Confirm via the email it sends you
3. Copy the access key it shows you and either:
   - Paste it into `DEFAULT_WEB3FORMS_ACCESS_KEY` in `src/lib/leads.ts`, or
   - Set it as an env var at build time: `VITE_WEB3FORMS_ACCESS_KEY=your-key-here`

### 2. GA4 is connected — Google Ads is the next step
GA4 measurement ID `G-7SF9KSH92Z` is already wired into `src/lib/analytics.ts` and live in
every build, so page views and these events are already being recorded in your GA4 property:

| Event | Fires when |
|---|---|
| `phone_click` | Someone taps/clicks a "Call 727-460-6100" link (header, hero, footer, mobile bar, final CTA) |
| `estimate_cta_click` | Someone clicks a "Request a Free Estimate" button |
| `form_submit` | The lead form is successfully submitted |

To make these count as **conversions in Google Ads** (so ad spend actually optimizes toward
leads), two things still need doing in the Google UI — no code changes needed for either:
1. In GA4 (**Admin → Events**), mark `form_submit` (and optionally `phone_click`,
   `estimate_cta_click`) as a **key event**.
2. Create your Google Ads account, then **link it to this GA4 property** (Google Ads →
   Tools → Linked accounts → Google Analytics) and import the key event as a conversion action.

If a Google Ads account already exists and gets its own separate conversion ID
(`AW-XXXXXXXXX`) later, set it as `VITE_GOOGLE_ADS_ID` and it'll load automatically too.

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
