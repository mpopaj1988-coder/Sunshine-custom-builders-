import { Section, Eyebrow } from "@/components/ui/Section";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { bathroomImages } from "@/assets/bathroom/images";

const before = bathroomImages.find((image) => image.id === "bathroom-10")!;
const after = bathroomImages.find((image) => image.id === "bathroom-11")!;

const gallery: { id: string; title: string; description: string }[] = [
  {
    id: "bathroom-13",
    title: "Custom Bathroom Remodel",
    description: "New vanity, custom shower, detailed tilework and refined finishes.",
  },
];

const galleryImages = gallery.map((item) => ({
  ...item,
  image: bathroomImages.find((image) => image.id === item.id)!,
}));

export function BathroomOurWork() {
  return (
    <Section tone="sand">
      <div className="max-w-2xl">
        <Eyebrow>Our Work</Eyebrow>
        <h2 className="text-3xl md:text-4xl">Real Transformations. Real Results.</h2>
        <p className="mt-4 text-navy/70">
          See the difference professional bathroom remodeling can make&mdash;from the initial
          construction to the finished space.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 md:gap-6">
        <div className="relative">
          <ResponsiveImage
            image={before}
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
            image={after}
            sizes="(min-width: 768px) 50vw, 50vw"
            className="aspect-[4/3] w-full rounded-sm object-cover"
            loading="eager"
          />
          <span className="absolute left-3 top-3 rounded-sm bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy-dark">
            After
          </span>
        </div>
      </div>

      <h3 className="mt-14 text-2xl md:text-3xl">Recent Bathroom Remodeling Projects</h3>

      <div
        className={
          galleryImages.length === 1
            ? "mt-6 max-w-md"
            : "mt-6 grid grid-cols-1 gap-6 md:grid-cols-3"
        }
      >
        {galleryImages.map(({ id, title, description, image }) => (
          <div key={id}>
            <ResponsiveImage
              image={image}
              sizes="(min-width: 768px) 50vw, 50vw"
              className="aspect-[4/3] w-full rounded-sm object-cover"
              loading="eager"
            />
            <p className="mt-3 text-sm font-semibold text-navy">{title}</p>
            <p className="mt-1 text-sm text-navy/65">{description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
