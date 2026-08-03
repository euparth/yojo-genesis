import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BottleneckCheck } from "@/components/sections/BottleneckCheck";
import { getCheckContent, type CheckPath } from "@/content/check";
import { isLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const content = getCheckContent(raw);
  return {
    title: `${content.metaTitle} | YOJO Genesis`,
    description: content.metaDescription,
  };
}

export default async function CheckPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ path?: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const sp = await searchParams;
  const initial =
    sp.path === "a" || sp.path === "b" || sp.path === "c"
      ? (sp.path as CheckPath)
      : null;

  return <BottleneckCheck locale={locale} initialPath={initial} />;
}
