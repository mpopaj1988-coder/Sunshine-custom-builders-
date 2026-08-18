import { business } from "@/lib/business";
import { track } from "@/lib/analytics";
import { bathroomImages } from "@/assets/bathroom/images";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";

export function BathroomHero() {
  // The vanity + large glass shower wet-room shot — used here only; the gallery below features
  // the other photos so nothing repeats on the page.
  const image = bathroomImages.find((img) => img.id === "bathroom-07")!;

  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="mx-auto grid max-w-content gap-10 px-6 py-14 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">
            Tampa Bay Bathroom Remodeling
          </p>
          <h1 className="font-display text-4xl leading-tight md:text-5xl lg:text-[3.25rem]">
            Bathroom Remodeling in Tampa Bay
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/75 md:text-lg">
            Beautiful, professionally managed bathroom renovations designed around your home and
            your vision.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={business.bathroomPhoneHref}
              onClick={() => track("phone_click", { surface: "hero" })}
              className="inline-flex items-center justify-center rounded-sm bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-navy-dark transition-colors hover:bg-gold-dark"
            >
              Get Your Free Estimate
            </a>
            <a
              href={business.bathroomPhoneHref}
              onClick={() => track("phone_click", { surface: "hero_secondary" })}
              className="inline-flex items-center justify-center rounded-sm border border-white/30 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
            >
              Call {business.bathroomPhone}
            </a>
          </div>

          <p className="mt-5 text-xs uppercase tracking-wide text-white/40">
            Licensed Florida Contractor &middot; {business.license} &middot; Free, No-Pressure
            Consultation
          </p>
        </div>

        <div className="relative">
          <ResponsiveImage
            image={image}
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="aspect-[4/3] w-full rounded-sm object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
