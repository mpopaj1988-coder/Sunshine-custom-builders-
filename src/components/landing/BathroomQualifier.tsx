import { business } from "@/lib/business";

export function BathroomQualifier() {
  return (
    <div className="border-y border-navy/10 bg-sand">
      <div className="mx-auto max-w-2xl px-6 py-8 text-center">
        <h2 className="font-display text-2xl text-navy md:text-3xl">
          Complete Bathroom Remodeling Projects Starting at {business.minProjectLabel}
        </h2>
        <p className="mt-3 text-sm text-navy/70 md:text-base">
          Every project is customized based on the size, materials, layout, and scope of work.
          Request an estimate to discuss your project.
        </p>
      </div>
    </div>
  );
}
