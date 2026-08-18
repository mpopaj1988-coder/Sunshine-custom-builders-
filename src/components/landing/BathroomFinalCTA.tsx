import { business } from "@/lib/business";
import { track } from "@/lib/analytics";

interface BathroomFinalCTAProps {
  heading: string;
}

export function BathroomFinalCTA({ heading }: BathroomFinalCTAProps) {
  return (
    <section id="final-cta" className="bg-navy text-white">
      <div className="mx-auto max-w-2xl px-6 py-16 text-center md:py-24">
        <h2 className="text-3xl text-white md:text-4xl">{heading}</h2>
        <p className="mt-4 text-white/75">
          Call or text Sunshine Custom Builders for a free, no-pressure consultation. Tell us
          about your project and we'll talk through scope, timeline, and next steps &mdash; no
          form to fill out.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={business.bathroomPhoneHref}
            onClick={() => track("phone_click", { surface: "final_cta" })}
            className="inline-flex items-center justify-center rounded-sm bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-wide text-navy-dark transition-colors hover:bg-gold-dark"
          >
            Call {business.bathroomPhone}
          </a>
          <a
            href={business.bathroomSmsHref}
            onClick={() => track("text_click", { surface: "final_cta" })}
            className="inline-flex items-center justify-center rounded-sm border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
          >
            Text {business.bathroomPhone}
          </a>
        </div>

        <p className="mt-6 text-xs uppercase tracking-wide text-white/40">
          Licensed Florida Contractor &middot; {business.license} &middot; Projects Starting at{" "}
          {business.minProjectLabel}
        </p>
      </div>
    </section>
  );
}
