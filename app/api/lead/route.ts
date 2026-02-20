import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  // This log should ALWAYS show when route is hit
  console.log("✅ /api/lead hit");

  try {
    const data = await req.json();
    console.log("📩 Lead payload:", data);

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.LEAD_TO_EMAIL;
    const from = process.env.LEAD_FROM_EMAIL;

    console.log("🔐 Env check:", {
      hasKey: Boolean(apiKey),
      to,
      from,
    });

    if (!apiKey) {
      return NextResponse.json(
        { ok: false, error: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }
    if (!to || !from) {
      return NextResponse.json(
        { ok: false, error: "Missing LEAD_TO_EMAIL or LEAD_FROM_EMAIL" },
        { status: 500 }
      );
    }

    const subject = `New lead — ${data?.name ?? "Unknown"} (${data?.persona ?? "?"})`;

    const result = await resend.emails.send({
      from,
      to,
      subject,
      text: `New Lead

Name: ${data?.name ?? ""}
Email: ${data?.email ?? ""}
Phone: ${data?.phone ?? ""}
Persona: ${data?.persona ?? ""}
Timeline: ${data?.timeline ?? ""}
Message: ${data?.message ?? ""}

Source: ${data?.source ?? ""}
Created: ${data?.createdAt ?? ""}
`,
      replyTo: data?.email ? String(data.email) : undefined,
    });

    console.log("✅ Resend result:", result);

    // If resend returns an error, surface it
    if ((result as any)?.error) {
      return NextResponse.json(
        { ok: false, error: (result as any).error },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, id: (result as any)?.data?.id ?? null });
  } catch (e: any) {
    console.error("❌ /api/lead error:", e);
    return NextResponse.json(
      { ok: false, error: e?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
