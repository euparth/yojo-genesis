const words = [
  ["調和", "Harmony"],
  ["精密", "Precision"],
  ["自律", "Autonomy"],
  ["持続", "Sustainability"],
  ["職人", "Craft"],
  ["現場", "Genba"],
  ["改善", "Kaizen"],
  ["信頼", "Trust"],
];

export function Marquee() {
  const row = (
    <>
      {words.map(([kanji, en]) => (
        <span
          key={kanji}
          className="mx-8 inline-flex items-baseline gap-3 whitespace-nowrap"
        >
          <span className="kanji-mark text-2xl text-trust/70">{kanji}</span>
          <span className="text-xs uppercase tracking-[0.25em] text-ink-muted/70">
            {en}
          </span>
          <span aria-hidden className="ml-8 text-gold/60">
            ・
          </span>
        </span>
      ))}
    </>
  );

  return (
    <div
      className="relative overflow-x-hidden overflow-y-hidden border-b border-line bg-pearl/60 py-4"
      aria-hidden
    >
      <div className="marquee-track">
        {row}
        {row}
      </div>
    </div>
  );
}
