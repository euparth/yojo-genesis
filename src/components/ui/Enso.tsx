/** Ensō — the Zen brush circle. Draws itself on mount. */
export function Enso({
  className = "",
  animated = true,
  strokeWidth = 5,
}: {
  className?: string;
  animated?: boolean;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M 96 42 A 46 46 0 1 0 104 68"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        className={animated ? "enso-draw" : undefined}
        style={
          animated
            ? undefined
            : { strokeDasharray: 320, strokeDashoffset: 26 }
        }
      />
    </svg>
  );
}
