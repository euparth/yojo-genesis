import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "dark" | "light";

const styles: Record<Variant, string> = {
  primary:
    "bg-trust text-white hover:bg-trust-deep border border-trust shadow-sm",
  secondary:
    "bg-white text-ink border border-line hover:border-trust hover:text-trust",
  ghost: "bg-transparent text-ink border border-transparent hover:text-trust",
  dark: "bg-forest text-white hover:bg-forest-soft border border-forest",
  light: "bg-white text-trust-deep border border-white hover:bg-pearl",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${styles[variant]} ${className}`}
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
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors disabled:opacity-60 ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
