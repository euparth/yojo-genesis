import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { companyFacts, leadership } from "@/content/company";
import { getDictionary } from "@/content/dictionaries";
import { isLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/types";
import { Container, SectionLabel } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { localePath } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = getDictionary(raw);
  return {
    title: `${dict.companyPage.title} | YOJO Genesis`,
    description: dict.companyPage.intro,
  };
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const lead = leadership[locale];

  return (
    <Container className="py-14 md:py-20">
      <div className="max-w-2xl">
        <SectionLabel>{dict.companyPage.eyebrow}</SectionLabel>
        <h1 className="text-3xl font-semibold tracking-tight text-ink md:text-5xl">
          {dict.companyPage.title}
        </h1>
        <p className="mt-4 text-ink-muted">{dict.companyPage.intro}</p>
        <p className="mt-2 text-xs text-ink-muted">{dict.companyPage.note}</p>
      </div>

      <section className="mt-12">
        <h2 className="text-lg font-semibold text-ink">
          {dict.companyPage.factsTitle}
        </h2>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-line bg-bg">
          <table className="w-full min-w-[18rem] text-left text-sm">
            <tbody>
              {companyFacts.map((fact) => (
                <tr key={fact.label.ja} className="border-b border-line last:border-0">
                  <th className="w-[34%] bg-pearl px-3 py-3 align-top font-medium text-ink sm:px-4 md:w-[36%] md:px-5">
                    {fact.label[locale]}
                  </th>
                  <td className="px-3 py-3 text-ink-muted sm:px-4 md:px-5">
                    {fact.value[locale]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-lg font-semibold text-ink">{lead.title}</h2>
        <p className="mt-2 text-sm text-ink-muted">{lead.subtitle}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {lead.items.map((item) => (
            <article
              key={item.role}
              className="card-lift rounded-2xl border border-line bg-pearl/40 p-5"
            >
              <h3 className="font-semibold text-ink">{item.role}</h3>
              <p className="mt-2 text-sm text-ink-muted">{item.focus}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-12">
        <ButtonLink href={localePath(locale, "/intake")}>
          {dict.nav.intake} →
        </ButtonLink>
      </div>
    </Container>
  );
}
