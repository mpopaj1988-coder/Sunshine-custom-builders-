import { business } from "@/lib/business";
import { track } from "@/lib/analytics";

export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-navy/10 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.08)] md:hidden">
      <a
        href={business.landingPhoneHref}
        onClick={() => track("phone_click", { surface: "mobile_sticky_bar" })}
        className="flex flex-1 items-center justify-center gap-2 border-r border-navy/10 py-4 text-sm font-semibold text-navy"
      >
        Call {business.landingPhone}
      </a>
      <a
        href="#estimate-form"
        onClick={() => track("estimate_cta_click", { surface: "mobile_sticky_bar" })}
        className="flex flex-1 items-center justify-center bg-gold py-4 text-sm font-semibold uppercase tracking-wide text-navy-dark"
      >
        Free Estimate
      </a>
    </div>
  );
}
