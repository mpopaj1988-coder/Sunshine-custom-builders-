import { business } from "@/lib/business";

const items = [
  { label: business.name, sub: "Licensed General Contractor" },
  { label: business.license, sub: "Florida Contractor License" },
  { label: "Tampa Bay & Pinellas County", sub: "Local Service Area" },
  { label: "Custom Remodeling", sub: "Not a Handyman Service" },
];

export function TrustBar() {
  return (
    <div className="border-y border-navy/10 bg-white">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-6 px-6 py-8 text-center md:grid-cols-4 md:gap-4">
        {items.map((item) => (
          <div key={item.label}>
            <p className="font-display text-lg text-navy md:text-xl">{item.label}</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-navy/50">{item.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
