import { useEffect, useState } from "react";
import { business } from "@/lib/business";
import { track } from "@/lib/analytics";

/**
 * Persistent Call/Text CTA for the Bathroom page.
 *
 * Deliberately Bathroom-only rather than a restyle of the shared MobileStickyBar,
 * which the Kitchen page still uses with its own (white/gold, "Free Estimate")
 * styling and phone number.
 *
 * Hides itself once the final CTA section scrolls into view so the visitor never
 * sees two competing Call/Text CTAs stacked on top of each other.
 */
export function BathroomStickyCTA() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const finalCta = document.getElementById("final-cta");
    if (!finalCta) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(finalCta);
    return () => observer.disconnect();
  }, []);

  const callProps = {
    href: business.bathroomPhoneHref,
    onClick: () => track("phone_click", { surface: "sticky_cta" }),
  };
  const textProps = {
    href: business.bathroomSmsHref,
    onClick: () => track("text_click", { surface: "sticky_cta" }),
  };

  return (
    <>
      {/* Mobile — compact bottom bar, respects the iPhone home-indicator inset */}
      <div
        aria-hidden={hidden}
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy shadow-[0_-4px_16px_rgba(8,21,34,0.28)] transition-transform duration-300 md:hidden ${
          hidden ? "translate-y-full" : "translate-y-0"
        }`}
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="flex gap-2 px-3 py-2.5">
          <a
            {...callProps}
            className="flex flex-1 items-center justify-center rounded-sm bg-gold px-2 py-3 text-[13px] font-semibold uppercase tracking-wide text-navy-dark"
          >
            Call {business.bathroomPhone}
          </a>
          <a
            {...textProps}
            className="flex flex-1 items-center justify-center rounded-sm border border-white/35 px-2 py-3 text-[13px] font-semibold uppercase tracking-wide text-white"
          >
            Text {business.bathroomPhone}
          </a>
        </div>
      </div>

      {/* Desktop — small anchored card, kept subtle since the sticky header already
          carries the phone number and a Text Us button */}
      <div
        aria-hidden={hidden}
        className={`fixed bottom-6 right-6 z-40 hidden overflow-hidden rounded-sm border border-white/10 bg-navy shadow-[0_8px_28px_rgba(8,21,34,0.35)] transition-all duration-300 md:block ${
          hidden ? "pointer-events-none translate-y-3 opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="pr-1">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
              Free Consultation
            </p>
            <p className="text-sm font-semibold text-white">{business.bathroomPhone}</p>
          </div>
          <a
            {...callProps}
            className="rounded-sm bg-gold px-4 py-2 text-xs font-semibold uppercase tracking-wide text-navy-dark transition-colors hover:bg-gold-dark"
          >
            Call
          </a>
          <a
            {...textProps}
            className="rounded-sm border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
          >
            Text
          </a>
        </div>
      </div>
    </>
  );
}
