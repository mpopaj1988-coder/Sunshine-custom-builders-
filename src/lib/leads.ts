export interface LeadFormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  project: string;
  budget: string;
  timeframe: string;
}

// Web3Forms access keys are designed to be used from the browser (like a GA4
// measurement ID) — see https://web3forms.com. Get one for free at
// web3forms.com and drop it in here, or override via VITE_WEB3FORMS_ACCESS_KEY.
const DEFAULT_WEB3FORMS_ACCESS_KEY = "5d7df423-b082-49c3-8af1-2b12ea6a3b92";

const ACCESS_KEY =
  (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined) || DEFAULT_WEB3FORMS_ACCESS_KEY;

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

/**
 * Submits a lead via Web3Forms, which emails it straight to the address the
 * access key is registered to — no backend required. No-ops (with a console
 * warning) until an access key is configured. See README for setup.
 */
export async function submitLead(data: LeadFormData): Promise<{ ok: boolean }> {
  if (!ACCESS_KEY) {
    console.warn(
      "[leads] No Web3Forms access key configured — lead was not sent anywhere. " +
        "See README.md for how to connect a real destination.",
      data,
    );
    return { ok: false };
  }

  try {
    const res = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        subject: "New Kitchen Remodeling Lead — Sunshine Custom Builders",
        from_name: "sunshinecustom.homes",
        ...data,
      }),
    });

    const result = await res.json();
    return { ok: res.ok && result.success === true };
  } catch (error) {
    console.error("[leads] Failed to submit lead to Web3Forms:", error);
    return { ok: false };
  }
}
