import type { Dictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/types";
import { localePath } from "@/lib/i18n";
import { ButtonLink } from "@/components/ui/Button";
import { Container, SectionLabel } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function EmbeddedCto({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const d = dict.founderPartnership;
  return (
    <section
      id="founder-cto"
      className="relative scroll-mt-24 overflow-hidden py-16 md:py-24"
    >
      <div
        aria-hidden
        className="float-slow pointer-events-none absolute -right-16 top-10 h-72 w-72 rounded-full bg-accent-soft/70 blur-3xl"
      />
      <Container className="relative">
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel>{d.eyebrow}</SectionLabel>
            <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-4xl">
              {d.title}
            </h2>
            <p className="mt-4 text-ink-muted">{d.body}</p>
            <p className="mt-3 text-sm font-medium text-trust">{d.selectivity}</p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {d.proof.map((item, i) => (
            <Reveal key={item} delay={i * 80}>
              <p className="rounded-2xl border border-line bg-pearl px-5 py-4 text-sm text-ink">
                {item}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href={localePath(locale, "/check?path=c")}>
              {d.primaryCta} →
            </ButtonLink>
            <ButtonLink
              href={localePath(locale, "/intake?from=check&path=c")}
              variant="secondary"
            >
              {d.secondaryCta}
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
