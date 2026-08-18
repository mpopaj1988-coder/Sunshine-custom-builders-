import { Section, Eyebrow } from "@/components/ui/Section";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { bathroomImages } from "@/assets/bathroom/images";

const captions: Record<string, string> = {
  "bathroom-01": "Custom Marble Vanity",
  "bathroom-03": "Freestanding Soaking Tub",
  "bathroom-04": "Double Vanity with Brass Lighting",
  "bathroom-08": "Tub & Shower Combo",
  "bathroom-09": "Navy Vanity with Designer Lighting",
  "bathroom-12": "Modern Walk-In Shower",
};

// Excludes bathroom-07 — that's the hero image, so nothing repeats on the page.
const featuredId = "bathroom-12";
const gridOrder = ["bathroom-09", "bathroom-01", "bathroom-08", "bathroom-03", "bathroom-04"];

const featured = bathroomImages.find((image) => image.id === featuredId)!;
const gridImages = gridOrder.map((id) => bathroomImages.find((image) => image.id === id)!);

function Caption({ id }: { id: string }) {
  return (
    <p className="absolute inset-x-0 bottom-0 rounded-b-sm bg-gradient-to-t from-navy/80 to-transparent px-4 pb-3 pt-8 text-sm font-medium text-white">
      {captions[id]}
    </p>
  );
}

export function BathroomFeaturedProject() {
  return (
    <Section tone="white">
      <div className="max-w-2xl">
        <Eyebrow>Featured Projects</Eyebrow>
        <h2 className="text-3xl md:text-4xl">Recent Tampa Bay Bathroom Renovations</h2>
      </div>

      <div className="relative mt-10">
        <ResponsiveImage
          image={featured}
          sizes="100vw"
          className="aspect-[4/3] w-full rounded-sm object-cover md:aspect-[2/1]"
          loading="eager"
        />
        <Caption id={featured.id} />
      </div>

      <div className="mt-4 grid gap-4 grid-cols-2 md:grid-cols-3">
        {gridImages.map((image) => (
          <div key={image.id} className="relative">
            <ResponsiveImage
              image={image}
              sizes="(min-width: 768px) 33vw, 50vw"
              className="aspect-[4/3] w-full rounded-sm object-cover"
              loading="eager"
            />
            <Caption id={image.id} />
          </div>
        ))}
      </div>
    </Section>
  );
}
