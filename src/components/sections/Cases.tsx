import type { Dictionary } from "@/content/dictionaries";
import { portfolio } from "@/content/portfolio";
import type { Locale } from "@/lib/types";
import { Container, SectionLabel } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Cases({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section id="cases" className="scroll-mt-24 bg-bg py-16 md:py-24">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <SectionLabel>{dict.cases.eyebrow}</SectionLabel>
              <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-4xl">
                {dict.cases.title}
              </h2>
              <p className="mt-4 text-ink-muted">{dict.cases.body}</p>
            </div>
            <a
              href="https://devpilot.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-sweep text-sm font-medium text-trust"
            >
              {dict.cases.cta} →
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.map((item, i) => (
            <Reveal key={item.id} delay={(i % 4) * 100}>
              <article className="card-lift group h-full rounded-2xl border border-line bg-pearl/60 p-6 hover:border-trust/40 hover:bg-bg">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs text-ink-muted">{item.vertical}</p>
                  <span className="flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-0.5 text-[11px] font-medium text-trust-deep">
                    {item.status === "live" && (
                      <span
                        aria-hidden
                        className="pulse-dot h-1.5 w-1.5 rounded-full bg-trust text-trust"
                      />
                    )}
                    {dict.cases.status[item.status]}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink">
                  {item.name}
                </h3>
                <p className="mt-1 text-xs text-gold">{item.highlight}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {item.enterpriseAngle[locale]}
                </p>
                <span
                  aria-hidden
                  className="mt-5 block h-px w-8 bg-gold/60 transition-all duration-500 group-hover:w-full"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
