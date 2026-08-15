import { Section, Eyebrow } from "@/components/ui/Section";

const points = [
  {
    title: "Licensed Florida Contractor",
    description: "Work is performed under Florida Contractor License CRC1335865.",
  },
  {
    title: "A Custom Approach",
    description: "Every kitchen is scoped and designed around your home and how you use it — not a fixed package.",
  },
  {
    title: "High-Quality Finishes",
    description: "Custom cabinetry, stone countertops, and finish work built to last, not the cheapest available materials.",
  },
  {
    title: "Clear Communication",
    description: "You know what's happening at each phase of the project, without chasing down updates.",
  },
  {
    title: "Professional Project Management",
    description: "Sunshine Custom Builders coordinates the trades and schedule so your renovation stays on track.",
  },
  {
    title: "One Company, Start to Finish",
    description: "A single point of contact managing your renovation, instead of juggling separate contractors yourself.",
  },
];

export function WhySunshine() {
  return (
    <Section tone="sand">
      <div className="max-w-2xl">
        <Eyebrow>Why Sunshine Custom Builders</Eyebrow>
        <h2 className="text-3xl md:text-4xl">A Licensed Contractor, Not a Handyman Crew</h2>
      </div>
      <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
        {points.map((point) => (
          <div key={point.title}>
            <h3 className="text-lg font-semibold text-navy">{point.title}</h3>
            <p className="mt-2 text-sm text-navy/60">{point.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
