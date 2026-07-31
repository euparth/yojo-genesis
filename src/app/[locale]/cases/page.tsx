import { redirect } from "next/navigation";

/** Phase B stub — dedicated cases page. */
export default async function CasesStub({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/#cases`);
}
