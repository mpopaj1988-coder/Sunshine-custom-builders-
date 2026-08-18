import { business } from "@/lib/business";
import { track } from "@/lib/analytics";

interface LandingHeaderProps {
  ctaHref?: string;
  ctaLabel?: string;
  ctaEvent?: string;
  phone?: string;
  phoneHref?: string;
}

export function LandingHeader({
  ctaHref = "#estimate-form",
  ctaLabel = "Free Estimate",
  ctaEvent = "estimate_cta_click",
  phone = business.landingPhone,
  phoneHref = business.landingPhoneHref,
}: LandingHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy/95 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <div className="font-display text-lg font-medium text-white md:text-xl">
          {business.name}
        </div>
        <div className="flex items-center gap-3">
          <a
            href={phoneHref}
            onClick={() => track("phone_click", { surface: "header" })}
            className="hidden text-sm font-semibold text-gold-light hover:text-gold sm:inline-block"
          >
            {phone}
          </a>
          <a
            href={ctaHref}
            onClick={() => track(ctaEvent, { surface: "header" })}
            className="rounded-sm bg-gold px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-navy-dark transition-colors hover:bg-gold-dark md:px-5 md:text-sm"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
