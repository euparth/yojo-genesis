import type { Dictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/types";
import { localePath } from "@/lib/i18n";
import { ButtonLink } from "@/components/ui/Button";
import { Container, SectionLabel } from "@/components/ui/Section";
import { NatureCanvas } from "@/components/ui/NatureCanvas";
import { Enso } from "@/components/ui/Enso";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="relative isolate overflow-hidden">
      {/* soft nature gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 15% 20%, rgba(63,107,82,0.10), transparent 50%), radial-gradient(ellipse at 85% 15%, rgba(178,141,79,0.10), transparent 45%), radial-gradient(ellipse at 60% 90%, rgba(230,236,221,0.7), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="breathe pointer-events-none absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-accent-soft/70 blur-3xl md:h-96 md:w-96"
      />
      <div
        aria-hidden
        className="float-slower pointer-events-none absolute -left-32 bottom-0 -z-10 hidden h-80 w-80 rounded-full bg-trust/10 blur-3xl sm:block"
      />

      {/* living tech x nature field — desktop only (iOS canvas can blank the layer) */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
        <NatureCanvas />
      </div>

      {/* giant ensō watermark */}
      <Enso
        className="pointer-events-none absolute -right-16 top-1/2 -z-10 hidden h-[480px] w-[480px] -translate-y-1/2 text-trust/15 lg:block"
        strokeWidth={3}
      />

      {/* vertical Japanese accent — md+ only */}
      <p
        aria-hidden
        className="tategaki kanji-mark absolute right-6 top-24 -z-10 hidden text-sm text-trust/50 md:block lg:right-[430px]"
      >
        自然に学び、技術で応える
      </p>

      {/* Hero copy is NEVER behind opacity:0 — critical for mobile Safari */}
      <Container className="relative z-10 py-14 sm:py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <Enso className="h-9 w-9 shrink-0 text-trust" strokeWidth={9} />
            <SectionLabel>{dict.hero.eyebrow}</SectionLabel>
          </div>
          <h1 className="mt-4 text-[1.75rem] font-semibold leading-snug tracking-tight text-ink sm:text-3xl md:text-5xl md:leading-[1.2]">
            {dict.hero.headline}{" "}
            <span className="text-trust">{dict.hero.headlineAccent}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-muted sm:mt-7 sm:text-base md:text-lg">
            {dict.hero.body}
          </p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center">
            <ButtonLink
              href={localePath(locale, "/intake")}
              className="w-full justify-center sm:w-auto"
            >
              {dict.hero.primaryCta} →
            </ButtonLink>
            <ButtonLink
              href={localePath(locale, "/#what-we-build")}
              variant="secondary"
              className="w-full justify-center sm:w-auto"
            >
              {dict.hero.secondaryCta}
            </ButtonLink>
          </div>
        </div>
      </Container>

      {/* seigaiha wave transition */}
      <div aria-hidden className="seigaiha relative z-10 h-10 w-full opacity-70" />
    </section>
  );
}
