import type { Dictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/types";
import { localePath } from "@/lib/i18n";
import { ButtonLink } from "@/components/ui/Button";
import { Container, SectionLabel } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Enso } from "@/components/ui/Enso";

export function AboutPreview({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section className="bg-bg py-16 md:py-24">
      <Container>
        <Reveal>
          <div className="grid overflow-hidden rounded-3xl border border-line lg:grid-cols-2">
            <div className="relative overflow-hidden bg-forest p-8 text-white md:p-12">
              <Enso
                className="float-slow pointer-events-none absolute -bottom-16 -right-14 h-64 w-64 text-gold/15"
                strokeWidth={3}
                animated={false}
              />
              <p
                aria-hidden
                className="tategaki kanji-mark absolute right-8 top-8 hidden text-xs text-gold/40 md:block"
              >
                温故知新
              </p>
              <SectionLabel>
                <span className="text-gold">{dict.aboutPreview.eyebrow}</span>
              </SectionLabel>
              <h2 className="relative text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
                {dict.aboutPreview.title}
              </h2>
            </div>
            <div className="flex flex-col justify-center bg-pearl/50 p-8 md:p-12">
              <p className="leading-relaxed text-ink-muted">
                {dict.aboutPreview.body}
              </p>
              <div className="mt-7">
                <ButtonLink
                  href={localePath(locale, "/company")}
                  variant="secondary"
                >
                  {dict.aboutPreview.link} →
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
