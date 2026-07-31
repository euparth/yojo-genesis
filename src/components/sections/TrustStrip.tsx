import type { Dictionary } from "@/content/dictionaries";
import { Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const kanji = ["速", "定", "有", "地"];

export function TrustStrip({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-b border-line bg-bg">
      <Container className="py-12 md:py-14">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {dict.trust.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <div className="group relative pl-5">
                <span
                  aria-hidden
                  className="kanji-mark absolute -top-4 right-0 text-5xl text-trust/10 transition-colors duration-500 group-hover:text-trust/25"
                >
                  {kanji[i]}
                </span>
                <span className="grow-line absolute left-0 top-1 h-[calc(100%-0.5rem)] w-px bg-gold" />
                <p className="text-xl font-semibold text-ink">{item.title}</p>
                <p className="mt-1.5 text-sm text-ink-muted">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
