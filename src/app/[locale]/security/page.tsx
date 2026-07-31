import { redirect } from "next/navigation";

/** Phase B stub — dedicated security page. */
export default async function SecurityStub({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/#security`);
}
