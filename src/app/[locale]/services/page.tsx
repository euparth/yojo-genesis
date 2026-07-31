import { redirect } from "next/navigation";

/** Phase B stub — dedicated services page. */
export default async function ServicesStub({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/#capabilities`);
}
