import { business } from "@/lib/business";
import { Section } from "@/components/ui/Section";

interface WhoThisIsForProps {
  noun: string;
}

export function WhoThisIsFor({ noun }: WhoThisIsForProps) {
  return (
    <Section tone="navy">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl text-white md:text-4xl">Is This the Right Fit for Your Project?</h2>
        <p className="mt-5 text-lg text-white/80">
          This is for homeowners planning a substantial {noun} renovation, not small handyman
          repairs. Sunshine Custom Builders takes on complete {noun} renovations and larger
          residential remodeling projects.
        </p>
        <p className="mt-5 inline-block rounded-sm border border-gold/40 bg-gold/10 px-5 py-2.5 text-sm font-semibold text-gold-light">
          Projects Starting at {business.minProjectLabel}
        </p>
      </div>
    </Section>
  );
}
