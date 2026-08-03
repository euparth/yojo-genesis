import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { IntakeForm } from "@/components/sections/IntakeForm";
import { getDictionary } from "@/content/dictionaries";
import { isLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = getDictionary(raw);
  return {
    title: `${dict.intake.title} | YOJO Genesis`,
    description: dict.intake.body,
  };
}

export default async function IntakePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <Suspense fallback={<div className="py-20 text-center text-ink-muted">…</div>}>
      <IntakeForm locale={locale} dict={dict} />
    </Suspense>
  );
}
