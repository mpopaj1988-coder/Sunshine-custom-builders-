import { business } from "@/lib/business";
import { track } from "@/lib/analytics";
import { kitchenImages } from "@/assets/kitchen/images";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";

export function Hero() {
  const image = kitchenImages[0];

  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        className="mx-auto grid max-w-content gap-6 px-6 py-10 [grid-template-areas:'heading'_'photo'_'body'] md:grid-cols-2 md:items-center md:gap-10 md:py-24 md:[grid-template-areas:'heading_photo'_'body_photo']"
      >
        <div style={{ gridArea: "heading" }}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">
            Tampa Bay Kitchen Remodeling
          </p>
          <h1 className="font-display text-4xl leading-tight md:text-5xl lg:text-[3.25rem]">
            Custom Kitchen Renovations Built by a Licensed Florida Contractor
          </h1>
        </div>

        <div className="relative" style={{ gridArea: "photo" }}>
          <ResponsiveImage
            image={image}
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="aspect-[16/10] w-full rounded-sm object-cover shadow-2xl md:aspect-[4/3]"
          />
        </div>

        <div style={{ gridArea: "body" }}>
          <p className="max-w-xl text-base text-white/75 md:text-lg">
            Sunshine Custom Builders plans and manages complete kitchen transformations for
            homeowners across Tampa Bay &mdash; from custom cabinetry to full layout redesigns,
            professionally managed from design and permitting through construction and final
            completion.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-sm border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-medium text-gold-light">
            Projects Starting at {business.minProjectLabel}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#estimate-form"
              onClick={() => track("estimate_cta_click", { surface: "hero" })}
              className="inline-flex items-center justify-center rounded-sm bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-navy-dark transition-colors hover:bg-gold-dark"
            >
              Request a Free Estimate
            </a>
            <a
              href={business.landingPhoneHref}
              onClick={() => track("phone_click", { surface: "hero" })}
              className="inline-flex items-center justify-center rounded-sm border border-white/30 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
            >
              Call {business.landingPhone}
            </a>
          </div>

          <p className="mt-5 text-xs uppercase tracking-wide text-white/40">
            Licensed Florida Contractor &middot; {business.license} &middot; Free, No-Pressure
            Consultation
          </p>
        </div>
      </div>
    </section>
  );
}
