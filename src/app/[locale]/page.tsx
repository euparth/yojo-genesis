import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { WhoThisIsFor } from "@/components/sections/WhoThisIsFor";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";
import { WhatYouGet } from "@/components/sections/WhatYouGet";
import { DiagnosticBand } from "@/components/sections/DiagnosticBand";
import { Capabilities } from "@/components/sections/Capabilities";
import { Security } from "@/components/sections/Security";
import { Cases } from "@/components/sections/Cases";
import { EmbeddedCto } from "@/components/sections/EmbeddedCto";
import { Engagement } from "@/components/sections/Engagement";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { CtaBand } from "@/components/sections/CtaBand";
import { getDictionary } from "@/content/dictionaries";
import { isLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <TrustStrip dict={dict} />
      <Marquee />
      <WhoThisIsFor dict={dict} />
      <DiagnosticBand locale={locale} dict={dict} />
      <HowItWorks dict={dict} />
      <WhatWeBuild dict={dict} />
      <WhatYouGet dict={dict} />
      <Capabilities dict={dict} />
      <Security dict={dict} />
      <Cases locale={locale} dict={dict} />
      <EmbeddedCto locale={locale} dict={dict} />
      <Engagement dict={dict} />
      <AboutPreview locale={locale} dict={dict} />
      <CtaBand locale={locale} dict={dict} />
    </>
  );
}
