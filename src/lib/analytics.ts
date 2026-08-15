/**
 * Thin wrapper around GA4 / Google Ads gtag.js.
 *
 * GA4 measurement IDs aren't secret (every GA4 site exposes them in its page
 * source), so the real one is baked in as a default below. Override it with
 * VITE_GA_MEASUREMENT_ID if you ever need a different property (e.g. a
 * staging site). VITE_GOOGLE_ADS_ID stays opt-in for once a Google Ads
 * account exists and gets linked. See README for setup notes.
 */

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const DEFAULT_GA_ID = "G-7SF9KSH92Z"; // Sunshine Custom Builders GA4 property

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
