import { business } from "@/lib/business";
import { track } from "@/lib/analytics";
import { LeadForm } from "@/components/landing/LeadForm";

export function FinalCTA() {
  return (
    <section id="estimate-form" className="bg-navy text-white">
      <div className="mx-auto grid max-w-content gap-10 px-6 py-16 md:grid-cols-2 md:items-start md:py-24">
        <div>
          <h2 className="text-3xl text-white md:text-4xl">Ready to Remodel Your Kitchen?</h2>
          <p className="mt-4 max-w-md text-white/75">
            Request a free, no-pressure consultation with Sunshine Custom Builders. Tell us about
            your project and we'll follow up to talk through scope, timeline, and next steps.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#estimate-form-fields"
              onClick={() => track("estimate_cta_click", { surface: "final_cta" })}
              className="inline-flex items-center justify-center rounded-sm bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-navy-dark transition-colors hover:bg-gold-dark"
            >
              Request a Free Estimate
            </a>
            <a
              href={business.landingPhoneHref}
              onClick={() => track("phone_click", { surface: "final_cta" })}
              className="inline-flex items-center justify-center rounded-sm border border-white/30 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
            >
              Call {business.landingPhone}
            </a>
          </div>
        </div>

        <div id="estimate-form-fields">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
