export interface LeadFormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  project: string;
  budget: string;
  timeframe: string;
}

/**
 * Submits a lead to VITE_LEAD_ENDPOINT (e.g. a Web3Forms/Formspree access-key
 * URL, a Zapier webhook, or a Supabase edge function). No endpoint is
 * configured out of the box — see README for wiring this up before running
 * paid traffic to this page.
 */
export async function submitLead(data: LeadFormData): Promise<{ ok: boolean }> {
  const endpoint = import.meta.env.VITE_LEAD_ENDPOINT as string | undefined;

  if (!endpoint) {
    console.warn(
      "[leads] VITE_LEAD_ENDPOINT is not set — lead was not sent anywhere. " +
        "See README.md for how to connect a real destination.",
      data,
    );
    return { ok: false };
  }

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return { ok: res.ok };
}
