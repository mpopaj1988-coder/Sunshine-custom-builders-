import { Section, Eyebrow } from "@/components/ui/Section";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { bathroomImages } from "@/assets/bathroom/images";

const captions: Record<string, string> = {
  "bathroom-12": "Modern Walk-In Shower",
  "bathroom-09": "Navy Vanity with Designer Lighting",
  "bathroom-08": "Tub & Shower Combo",
  "bathroom-03": "Freestanding Soaking Tub",
};

// The strongest, most visually distinct finished shots — kept intentionally short so
// the section reads as one tight portfolio rather than a long, repetitive gallery.
// Excludes bathroom-07 (hero image) and bathroom-10/11 (the before/after pair below)
// so nothing repeats on the page.
const featuredId = "bathroom-12";
const gridOrder = ["bathroom-09", "bathroom-08", "bathroom-03"];
const classicBeforeId = "bathroom-10";
const classicAfterId = "bathroom-11";
const beforeAfterId = "bathroom-14";

const featured = bathroomImages.find((image) => image.id === featuredId)!;
const gridImages = gridOrder.map((id) => bathroomImages.find((image) => image.id === id)!);
const classicBefore = bathroomImages.find((image) => image.id === classicBeforeId)!;
const classicAfter = bathroomImages.find((image) => image.id === classicAfterId)!;
const beforeAfter = bathroomImages.find((image) => image.id === beforeAfterId)!;

function Caption({ id }: { id: string }) {
  return (
    <p className="absolute inset-x-0 bottom-0 rounded-b-sm bg-gradient-to-t from-navy/80 to-transparent px-4 pb-3 pt-8 text-sm font-medium text-white">
      {captions[id]}
    </p>
  );
}

export function BathroomOurWork() {
  return (
    <Section tone="white">
      <div className="max-w-2xl">
        <Eyebrow>Our Work</Eyebrow>
        <h2 className="text-3xl md:text-4xl">Real Bathroom Transformations in Tampa Bay</h2>
        <p className="mt-4 text-navy/70">
          See the quality of our work&mdash;from the renovation process to the finished result.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 md:gap-6">
        <div className="relative">
          <ResponsiveImage
            image={classicBefore}
            sizes="(min-width: 768px) 50vw, 50vw"
            className="aspect-[4/3] w-full rounded-sm object-cover"
            loading="eager"
          />
          <span className="absolute left-3 top-3 rounded-sm bg-navy px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            Before
          </span>
        </div>
        <div className="relative">
          <ResponsiveImage
            image={classicAfter}
            sizes="(min-width: 768px) 50vw, 50vw"
            className="aspect-[4/3] w-full rounded-sm object-cover"
            loading="eager"
          />
          <span className="absolute left-3 top-3 rounded-sm bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy-dark">
            After
          </span>
        </div>
      </div>

      <div className="relative mt-14">
        <ResponsiveImage
          image={featured}
          sizes="100vw"
          className="aspect-[4/3] w-full rounded-sm object-cover md:aspect-[2/1]"
          loading="eager"
        />
        <Caption id={featured.id} />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {gridImages.map((image) => (
          <div key={image.id} className="relative">
            <ResponsiveImage
              image={image}
              sizes="(min-width: 640px) 33vw, 100vw"
              className="aspect-[4/3] w-full rounded-sm object-cover"
              loading="eager"
            />
            <Caption id={image.id} />
          </div>
        ))}
      </div>

      <div className="mt-14 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
          See the Transformation
        </p>
        <ResponsiveImage
          image={beforeAfter}
          sizes="(min-width: 768px) 576px, 100vw"
          className="mx-auto mt-4 block w-full max-w-xl rounded-sm"
          loading="eager"
        />
      </div>
    </Section>
  );
}
