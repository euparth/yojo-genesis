import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "dark" | "light";

const styles: Record<Variant, string> = {
  primary:
    "bg-trust text-white hover:bg-trust-deep border border-trust shadow-sm active:bg-trust-deep",
  secondary:
    "bg-white text-ink border border-line hover:border-trust hover:text-trust active:bg-pearl",
  ghost: "bg-transparent text-ink border border-transparent hover:text-trust",
  dark: "bg-forest text-white hover:bg-forest-soft border border-forest",
  light: "bg-white text-trust-deep border border-white hover:bg-pearl",
};

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-trust disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  disabled,
  onClick,
  "aria-disabled": ariaDisabled,
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  "aria-disabled"?: boolean;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      aria-disabled={ariaDisabled ?? disabled}
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
