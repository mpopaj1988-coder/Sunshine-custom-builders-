import type { PropsWithChildren, HTMLAttributes } from "react";

type SectionProps = PropsWithChildren<
  HTMLAttributes<HTMLElement> & {
    tone?: "sand" | "white" | "navy";
    id?: string;
  }
>;

const toneClasses = {
  sand: "bg-sand text-navy",
  white: "bg-white text-navy",
  navy: "bg-navy text-white",
};

export function Section({ children, tone = "white", className = "", id, ...rest }: SectionProps) {
  return (
    <section id={id} className={`${toneClasses[tone]} ${className}`} {...rest}>
      <div className="mx-auto max-w-content px-6 py-16 md:py-24">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: PropsWithChildren) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">{children}</p>
  );
}
