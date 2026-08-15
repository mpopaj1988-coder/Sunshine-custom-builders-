import { Section, Eyebrow } from "@/components/ui/Section";

const services = [
  {
    title: "Complete Kitchen Renovations",
    description: "Full, ground-up kitchen transformations managed from design through final walkthrough.",
  },
  {
    title: "Custom Cabinetry",
    description: "Cabinetry designed and specified around how you actually use your kitchen.",
  },
  {
    title: "Countertops & Islands",
    description: "Quartz, stone, and waterfall island installations coordinated with your layout.",
  },
  {
    title: "Kitchen Layout Redesign",
    description: "Reworking flow, storage, and function — including opening up the space where structurally possible.",
  },
  {
    title: "Lighting & Electrical Upgrades",
    description: "Pendant, recessed, and under-cabinet lighting coordinated with licensed trade partners.",
  },
  {
    title: "Flooring",
    description: "Wood, tile, and other flooring options installed as part of your full renovation.",
  },
  {
    title: "Backsplashes & Tile",
    description: "Tile selection and installation to finish out the design.",
  },
  {
    title: "Trim & Finish Work",
    description: "The detail work that makes a renovation look complete and professionally finished.",
  },
];

export function Services() {
  return (
    <Section tone="sand">
      <div className="max-w-2xl">
        <Eyebrow>Our Kitchen Remodeling Services</Eyebrow>
        <h2 className="text-3xl md:text-4xl">Everything Your Kitchen Renovation Needs</h2>
        <p className="mt-4 text-navy/70">
          Sunshine Custom Builders acts as your general contractor and project manager,
          coordinating every phase of your kitchen renovation and the licensed trades involved.
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
