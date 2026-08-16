import { Section, Eyebrow } from "@/components/ui/Section";

const services = [
  {
    title: "Complete Bathroom Renovations",
    description: "Full, ground-up bathroom transformations managed from design through final walkthrough.",
  },
  {
    title: "Master Bathroom Remodeling",
    description: "Full master bath renovations, from layout changes to finish selections.",
  },
  {
    title: "Custom Vanities",
    description: "Vanities designed and specified around how you actually use your bathroom.",
  },
  {
    title: "Walk-In Showers & Tub Conversions",
    description: "Tub-to-shower conversions and walk-in shower installations built to last.",
  },
  {
    title: "Bathroom Layout Redesign",
    description: "Reworking flow and storage — including reconfiguring the space where structurally possible.",
  },
  {
    title: "Lighting & Electrical Upgrades",
    description: "Vanity lighting, recessed fixtures, and exhaust upgrades coordinated with licensed trade partners.",
  },
  {
    title: "Flooring",
    description: "Tile and other flooring options installed as part of your full renovation.",
  },
  {
    title: "Custom Tile & Showers",
    description: "Tile selection and installation for showers, floors, and accent walls.",
  },
  {
    title: "Trim & Finish Work",
    description: "The detail work that makes a renovation look complete and professionally finished.",
  },
];

export function BathroomServices() {
  return (
    <Section tone="sand">
      <div className="max-w-2xl">
        <Eyebrow>Our Bathroom Remodeling Services</Eyebrow>
        <h2 className="text-3xl md:text-4xl">Everything Your Bathroom Renovation Needs</h2>
        <p className="mt-4 text-navy/70">
          Sunshine Custom Builders acts as your general contractor and project manager,
          coordinating every phase of your bathroom renovation and the licensed trades involved.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div key={service.title} className="border border-navy/10 bg-white p-6">
            <h3 className="text-lg font-semibold text-navy">{service.title}</h3>
            <p className="mt-2 text-sm text-navy/60">{service.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
