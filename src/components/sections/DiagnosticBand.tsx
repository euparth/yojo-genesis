import type { Dictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/types";
import { localePath } from "@/lib/i18n";
import { ButtonLink } from "@/components/ui/Button";
import { Container, SectionLabel } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function DiagnosticBand({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const d = dict.diagnosticBand;
  return (
    <section
      id="diagnostic"
      className="relative scroll-mt-24 overflow-hidden border-y border-line bg-pearl py-16 md:py-24"
    >
      <Container className="relative">
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel>{d.eyebrow}</SectionLabel>
            <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-4xl">
              {d.title}
            </h2>
            <p className="mt-4 text-ink-muted">{d.body}</p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {d.doors.map((door, i) => (
            <Reveal key={door.title} delay={i * 100}>
              <article className="card-lift flex h-full flex-col rounded-2xl border border-line bg-bg p-6">
                <p className="kanji-mark text-sm font-semibold tracking-[0.3em] text-gold">
                  0{i + 1}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-ink">{door.title}</h3>
                <p className="mt-2 flex-1 text-sm text-ink-muted">{door.body}</p>
                <ButtonLink
                  href={localePath(locale, door.href)}
                  variant="secondary"
                  className="mt-5 w-full justify-center"
                >
                  {door.cta}
                </ButtonLink>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <div className="mt-8">
            <ButtonLink href={localePath(locale, "/check")}>
              {d.primaryCta} →
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
