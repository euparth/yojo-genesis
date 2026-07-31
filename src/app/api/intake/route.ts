import { mkdir, appendFile, readFile, writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

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

    const dataDir = path.join(process.cwd(), "data");
    await mkdir(dataDir, { recursive: true });
    const filePath = path.join(dataDir, "intake-submissions.json");

    let existing: unknown[] = [];
    try {
      const raw = await readFile(filePath, "utf8");
      existing = JSON.parse(raw) as unknown[];
      if (!Array.isArray(existing)) existing = [];
    } catch {
      existing = [];
    }
    existing.push(record);
    await writeFile(filePath, JSON.stringify(existing, null, 2), "utf8");

    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.INTAKE_TO_EMAIL;

    if (resendKey && toEmail) {
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
        await appendFile(
          path.join(dataDir, "intake-email-errors.log"),
          `${new Date().toISOString()} ${errText}\n`,
        );
      }
    }

    return NextResponse.json({ ok: true, id: record.id });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
