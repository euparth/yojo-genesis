import { NextResponse } from "next/server";
import { appendJsonRecord, appendLogLine } from "@/lib/submissions";

type IntakeBody = {
  locale?: string;
  situations?: string[];
  brief?: string;
  fileName?: string | null;
  name?: string;
  company?: string;
  email?: string;
  contact?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as IntakeBody;
    const email = body.email?.trim() ?? "";
    const name = body.name?.trim() ?? "";
    const company = body.company?.trim() ?? "";
    const brief = body.brief?.trim() ?? "";

    if (
      !email ||
      !name ||
      !company ||
      brief.length < 20 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const record = {
      id: crypto.randomUUID(),
      receivedAt: new Date().toISOString(),
      locale: body.locale ?? "ja",
      situations: body.situations ?? [],
      brief,
      fileName: body.fileName ?? null,
      name,
      company,
      email,
      contact: body.contact ?? "",
    };

    try {
      await appendJsonRecord("intake-submissions.json", record);
    } catch (err) {
      await appendLogLine(
        "intake-store-errors.log",
        `${new Date().toISOString()} ${String(err)}\n`,
      );
    }

    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.INTAKE_TO_EMAIL;

    if (resendKey && toEmail) {
      try {
        const emailRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "YOJO Genesis Intake <onboarding@resend.dev>",
            to: [toEmail],
            subject: `[YOJO Intake] ${company} — ${name}`,
            text: [
              `Company: ${company}`,
              `Name: ${name}`,
              `Email: ${email}`,
              `Contact preference: ${record.contact}`,
              `Locale: ${record.locale}`,
              `Situations: ${record.situations.join(", ")}`,
              `File: ${record.fileName ?? "none"}`,
              "",
              "Brief:",
              brief,
            ].join("\n"),
          }),
        });

        if (!emailRes.ok) {
          const errText = await emailRes.text();
          await appendLogLine(
            "intake-email-errors.log",
            `${new Date().toISOString()} ${errText}\n`,
          );
        }
      } catch (err) {
        await appendLogLine(
          "intake-email-errors.log",
          `${new Date().toISOString()} ${String(err)}\n`,
        );
      }
    }

    return NextResponse.json({ ok: true, id: record.id });
  } catch (err) {
    return NextResponse.json(
      { error: "Server error", detail: String(err) },
      { status: 500 },
    );
  }
}
