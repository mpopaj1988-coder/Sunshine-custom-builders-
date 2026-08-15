import { Section, Eyebrow } from "@/components/ui/Section";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { kitchenImages } from "@/assets/kitchen/images";

export function FeaturedProject() {
  return (
    <Section tone="white">
      <div className="max-w-2xl">
        <Eyebrow>Featured Project</Eyebrow>
        <h2 className="text-3xl md:text-4xl">A Recent Tampa Bay Kitchen Renovation</h2>
        <p className="mt-4 text-navy/70">
          Custom fluted-wood island cabinetry, waterfall quartz countertops, black pendant
          lighting, and wide-plank wood flooring — a full kitchen transformation completed
          for a Tampa Bay homeowner.
        </p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {kitchenImages.map((image, i) => (
          <ResponsiveImage
            key={image.id}
            image={image}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="aspect-[4/3] w-full rounded-sm object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>
    </Section>
  );
}
