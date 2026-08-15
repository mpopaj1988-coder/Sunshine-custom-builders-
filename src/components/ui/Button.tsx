import { forwardRef } from "react";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 text-sm font-semibold tracking-wide uppercase transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary: "bg-gold text-navy-dark hover:bg-gold-dark",
  secondary: "bg-navy text-white hover:bg-navy-light",
  outline: "border border-white/40 text-white hover:bg-white/10",
  "outline-navy": "border border-navy text-navy hover:bg-navy hover:text-white",
};

type Variant = keyof typeof variants;

interface CommonProps {
  variant?: Variant;
  className?: string;
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className = "", ...props }, ref) => (
    <button ref={ref} className={`${base} ${variants[variant]} ${className}`} {...props} />
  ),
);
Button.displayName = "Button";

type LinkButtonProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ variant = "primary", className = "", ...props }, ref) => (
    <a ref={ref} className={`${base} ${variants[variant]} ${className}`} {...props} />
  ),
);
LinkButton.displayName = "LinkButton";
