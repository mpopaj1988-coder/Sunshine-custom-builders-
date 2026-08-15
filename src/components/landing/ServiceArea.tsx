import { business } from "@/lib/business";
import { Section, Eyebrow } from "@/components/ui/Section";

export function ServiceArea() {
  return (
    <Section tone="sand">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Service Area</Eyebrow>
        <h2 className="text-3xl md:text-4xl">Serving Tampa Bay Homeowners</h2>
        <p className="mt-5 text-navy/70">
          Sunshine Custom Builders provides kitchen remodeling services throughout{" "}
          {business.serviceAreaDetail}. If you're not sure whether your location is within our
          service area, reach out and we'll let you know.
        </p>
      </div>
    </Section>
  );
}
