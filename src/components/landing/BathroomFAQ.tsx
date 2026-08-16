import { business } from "@/lib/business";
import { Section, Eyebrow } from "@/components/ui/Section";

const faqs = [
  {
    question: "How much does a bathroom remodel cost?",
    answer: `Cost depends entirely on the scope of your project — layout changes, vanities, showers, and finishes all affect the total. Sunshine Custom Builders takes on bathroom projects starting at ${business.minProjectLabel}. A consultation is the best way to get an accurate range for your specific bathroom.`,
  },
  {
    question: "What is the minimum project size?",
    answer: `We take on bathroom renovations starting at ${business.minProjectLabel}. This lets us focus on complete renovations and larger remodeling projects rather than small repairs.`,
  },
  {
    question: "Do you handle tub-to-shower conversions?",
    answer: "Yes. Tub-to-shower conversions and walk-in shower installations are among our most requested bathroom projects.",
  },
  {
    question: "Do you handle permits?",
    answer: "As your licensed general contractor, we manage the permitting process required for your project as part of our project management.",
  },
  {
    question: "How long does a bathroom remodel take?",
    answer: "Timelines vary based on the scope of the renovation, material lead times, and permitting. We'll walk you through an estimated timeline for your specific project during the design and scope phase.",
  },
  {
    question: "Can you help with design and material selections?",
    answer: "Yes. Design and material selection — vanities, tile, fixtures, and finishes — are part of the design and scope phase of our process.",
  },
  {
    question: "What areas do you serve?",
    answer: `We serve ${business.serviceAreaDetail}.`,
  },
  {
    question: "How do I request an estimate?",
    answer: `Fill out the form on this page or call ${business.landingPhone}. Submitting the form requests a consultation and does not guarantee a quote — final pricing is determined after we understand the full scope of your project.`,
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
