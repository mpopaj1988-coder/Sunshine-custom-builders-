import { Section, Eyebrow } from "@/components/ui/Section";

interface ProcessProps {
  noun: string;
  headingNoun: string;
}

const buildSteps = (noun: string) => [
  {
    number: "01",
    title: "Consultation",
    description: "We talk through your goals, your space, and your budget range to see if we're a fit.",
  },
  {
    number: "02",
    title: "Design & Scope",
    description: "We define the layout, materials, and full scope of work before construction begins.",
  },
  {
    number: "03",
    title: "Construction",
    description: "Our team manages the trades and schedule while keeping you informed at each phase.",
  },
  {
    number: "04",
    title: "Final Walkthrough",
    description: `We walk the finished ${noun} with you to confirm everything meets expectations.`,
  },
];

export function Process({ noun, headingNoun }: ProcessProps) {
  const steps = buildSteps(noun);
  return (
    <Section tone="white">
      <div className="max-w-2xl">
        <Eyebrow>Our Process</Eyebrow>
        <h2 className="text-3xl md:text-4xl">A Straightforward Path to Your New {headingNoun}</h2>
      </div>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <div key={step.number}>
            <p className="font-display text-3xl text-gold-dark">{step.number}</p>
            <h3 className="mt-2 text-lg font-semibold text-navy">{step.title}</h3>
            <p className="mt-2 text-sm text-navy/60">{step.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
