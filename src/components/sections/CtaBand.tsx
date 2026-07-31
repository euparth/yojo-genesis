import type { Dictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/types";
import { localePath } from "@/lib/i18n";
import { ButtonLink } from "@/components/ui/Button";
import { Container, SectionLabel } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Enso } from "@/components/ui/Enso";

export function CtaBand({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden bg-forest py-16 text-white md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 20%, rgba(63,107,82,0.35), transparent 55%), radial-gradient(ellipse at 85% 80%, rgba(178,141,79,0.18), transparent 50%)",
        }}
      />
      <div aria-hidden className="seigaiha-dark absolute inset-x-0 bottom-0 h-10 opacity-40" />
      <Enso
        className="breathe pointer-events-none absolute right-8 top-1/2 hidden h-72 w-72 -translate-y-1/2 text-gold/20 lg:block"
        strokeWidth={3}
        animated={false}
      />
      <Container className="relative">
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel>
              <span className="text-gold">{dict.ctaBand.eyebrow}</span>
            </SectionLabel>
            <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
              {dict.ctaBand.title}
            </h2>
            <p className="mt-4 text-white/75">{dict.ctaBand.body}</p>
            <div className="mt-9">
              <ButtonLink
                href={localePath(locale, "/intake")}
                variant="light"
                className="w-full justify-center sm:w-auto"
              >
                {dict.ctaBand.button} →
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
