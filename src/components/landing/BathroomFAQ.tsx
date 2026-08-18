import { business } from "@/lib/business";
import { Section, Eyebrow } from "@/components/ui/Section";

const faqs = [
  {
    question: "How much does a bathroom remodel cost?",
    answer: `Cost depends on your project's scope — layout, vanities, showers, and finishes. Projects start at ${business.minProjectLabel}; a free consultation gets you an accurate range.`,
  },
  {
    question: "What is the minimum project size?",
    answer: `We take on bathroom renovations starting at ${business.minProjectLabel} — complete renovations, not small repairs.`,
  },
  {
    question: "Do you handle tub-to-shower conversions?",
    answer: "Yes. Tub-to-shower conversions and walk-in shower installations are among our most requested bathroom projects.",
  },
  {
    question: "Do you handle the entire bathroom renovation?",
    answer: "Yes. We act as your general contractor, managing every phase and every licensed trade involved.",
  },
  {
    question: "Do you provide free estimates?",
    answer: `Yes. Consultations are free and no-pressure. Call ${business.bathroomPhone} to request one.`,
  },
  {
    question: "Do you remodel master bathrooms?",
    answer: "Yes. Master bathroom remodels are one of our most common projects, from full renovations to walk-in shower conversions.",
  },
  {
    question: "Do you handle permits?",
    answer: "As your licensed general contractor, we manage the permitting process required for your project as part of our project management.",
  },
  {
    question: "How long does a bathroom remodel take?",
    answer: "It depends on scope, material lead times, and permitting. We'll give you an estimated timeline during the design and scope phase.",
  },
  {
    question: "Can you help with design and material selections?",
    answer: "Yes. Vanities, tile, fixtures, and finishes are all part of the design and scope phase.",
  },
  {
    question: "What areas do you serve?",
    answer: `We serve ${business.bathroomServiceAreaDetail}.`,
  },
  {
    question: "How do I request an estimate?",
    answer: `Call ${business.bathroomPhone}. Reaching out requests a consultation and does not guarantee a quote — final pricing is determined after we understand the full scope of your project.`,
  },
];

export function BathroomFAQ() {
  return (
    <Section tone="white">
      <div className="max-w-2xl">
        <Eyebrow>Frequently Asked Questions</Eyebrow>
        <h2 className="text-3xl md:text-4xl">Bathroom Remodeling Questions, Answered</h2>
      </div>
      <div className="mt-10 divide-y divide-navy/10 border-t border-navy/10">
        {faqs.map((faq) => (
          <details key={faq.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between text-left text-base font-semibold text-navy marker:content-none">
              {faq.question}
              <span className="ml-4 shrink-0 text-xl text-gold-dark transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 max-w-3xl text-sm text-navy/65">{faq.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
