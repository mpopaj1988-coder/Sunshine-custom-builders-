import { business } from "@/lib/business";
import { Section, Eyebrow } from "@/components/ui/Section";

interface ServiceAreaProps {
  noun: string;
  compact?: boolean;
  areaDetail?: string;
}

export function ServiceArea({ noun, compact, areaDetail = business.serviceAreaDetail }: ServiceAreaProps) {
  return (
    <Section tone="sand">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Service Area</Eyebrow>
        <h2 className="text-3xl md:text-4xl">Serving Tampa Bay Homeowners</h2>
        <p className="mt-5 text-navy/70">
          {compact ? (
            <>
              Sunshine Custom Builders provides {noun} remodeling services throughout{" "}
              {areaDetail}.
            </>
          ) : (
            <>
              Sunshine Custom Builders provides {noun} remodeling services throughout{" "}
              {areaDetail}. If you're not sure whether your location is within our
              service area, reach out and we'll let you know.
            </>
          )}
        </p>
      </div>
    </Section>
  );
}
