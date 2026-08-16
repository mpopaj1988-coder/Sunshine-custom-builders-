/**
 * Thin wrapper around GA4 / Google Ads gtag.js.
 *
 * GA4 measurement IDs aren't secret (every GA4 site exposes them in its page
 * source), so the real one is baked in as a default below. This is the same
 * property that already tracks sunshinecustom.homes and is already linked to
 * Google Ads — deliberately not a separate property, so landing-page events
 * land in the same place as the rest of the site's analytics instead of
 * fragmenting across two properties. Override with VITE_GA_MEASUREMENT_ID
 * only for something like a staging site. VITE_GOOGLE_ADS_ID stays opt-in
 * for a standalone Ads conversion ID if one is ever needed separately from
 * the GA4-imported conversions. See README for setup notes.
 */

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const DEFAULT_GA_ID = "G-BDPQYZ2BM4"; // Sunshine Custom Builders GA4 property (sunshinecustom.homes)

const GA_ID = (import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined) || DEFAULT_GA_ID;
const ADS_ID = import.meta.env.VITE_GOOGLE_ADS_ID as string | undefined;

let initialized = false;

export function initAnalytics() {
  if (initialized || typeof document === "undefined") return;
  const id = GA_ID || ADS_ID;
  if (!id) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID || id);
  if (ADS_ID && ADS_ID !== GA_ID) {
    window.gtag("config", ADS_ID);
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);

  initialized = true;
}

/** Fire a GA4 event. No-ops safely if analytics hasn't been configured. */
export function track(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params);
}
