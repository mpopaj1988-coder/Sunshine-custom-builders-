import { business } from "@/lib/business";
import { track } from "@/lib/analytics";

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy/95 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <div className="font-display text-lg font-medium text-white md:text-xl">
          {business.name}
        </div>
        <div className="flex items-center gap-3">
          <a
            href={business.landingPhoneHref}
            onClick={() => track("phone_click", { surface: "header" })}
            className="hidden text-sm font-semibold text-gold-light hover:text-gold sm:inline-block"
          >
            {business.landingPhone}
          </a>
          <a
            href="#estimate-form"
            onClick={() => track("estimate_cta_click", { surface: "header" })}
            className="rounded-sm bg-gold px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-navy-dark transition-colors hover:bg-gold-dark md:px-5 md:text-sm"
          >
            Free Estimate
          </a>
        </div>
      </div>
    </header>
  );
}
