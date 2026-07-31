import type { Dictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/types";
import { localePath } from "@/lib/i18n";
import { ButtonLink } from "@/components/ui/Button";
import { Container, SectionLabel } from "@/components/ui/Section";
import { NatureCanvas } from "@/components/ui/NatureCanvas";
import { Enso } from "@/components/ui/Enso";
import { Reveal } from "@/components/ui/Reveal";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden">
      {/* soft nature gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 15% 20%, rgba(63,107,82,0.10), transparent 50%), radial-gradient(ellipse at 85% 15%, rgba(178,141,79,0.10), transparent 45%), radial-gradient(ellipse at 60% 90%, rgba(230,236,221,0.7), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="breathe pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent-soft/70 blur-3xl"
      />
      <div
        aria-hidden
        className="float-slower pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-trust/10 blur-3xl"
      />

      {/* living tech x nature field */}
      <NatureCanvas />

      {/* giant ensō watermark */}
      <Enso
        className="pointer-events-none absolute -right-16 top-1/2 hidden h-[480px] w-[480px] -translate-y-1/2 text-trust/15 lg:block"
        strokeWidth={3}
      />

      {/* vertical Japanese accent */}
      <p
        aria-hidden
        className="tategaki kanji-mark absolute right-6 top-24 hidden text-sm text-trust/50 md:block lg:right-[430px]"
      >
        自然に学び、技術で応える
      </p>

      <Container className="relative py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-3">
              <Enso className="h-9 w-9 text-trust" strokeWidth={9} />
              <SectionLabel>{dict.hero.eyebrow}</SectionLabel>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-ink md:text-5xl md:leading-[1.2]">
              {dict.hero.headline}{" "}
              <span className="text-trust">{dict.hero.headlineAccent}</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 max-w-2xl text-base text-ink-muted md:text-lg">
              {dict.hero.body}
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href={localePath(locale, "/intake")}>
                {dict.hero.primaryCta} →
              </ButtonLink>
              <ButtonLink
                href={localePath(locale, "/#capabilities")}
                variant="secondary"
              >
                {dict.hero.secondaryCta}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Container>

      {/* seigaiha wave transition */}
      <div aria-hidden className="seigaiha h-10 w-full opacity-70" />
    </section>
  );
}
