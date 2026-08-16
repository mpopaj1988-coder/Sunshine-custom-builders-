import { Section, Eyebrow } from "@/components/ui/Section";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { bathroomImages } from "@/assets/bathroom/images";

export function BathroomFeaturedProject() {
  return (
    <Section tone="white">
      <div className="max-w-2xl">
        <Eyebrow>Featured Projects</Eyebrow>
        <h2 className="text-3xl md:text-4xl">Recent Pinellas County Bathroom Renovations</h2>
        <p className="mt-4 text-navy/70">
          Custom vanities, walk-in showers, freestanding tubs, and natural stone finishes —
          complete bathroom transformations completed for Tampa Bay homeowners.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {bathroomImages.map((image, i) => (
          <ResponsiveImage
            key={image.id}
            image={image}
            sizes="(min-width: 640px) 50vw, 100vw"
            className="aspect-[4/3] w-full rounded-sm object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>
    </Section>
  );
}
