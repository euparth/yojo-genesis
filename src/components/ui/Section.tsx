export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-trust uppercase">
      {children}
    </p>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl section-pad ${className}`}>
      {children}
    </div>
  );
}
