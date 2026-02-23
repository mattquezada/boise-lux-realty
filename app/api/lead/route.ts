import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

export async function POST(req: Request) {
  try {
    const resend = getResend();
    if (!resend) {
      return NextResponse.json(
        { ok: false, error: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }

    const to = process.env.LEAD_TO_EMAIL;
    const from = process.env.LEAD_FROM_EMAIL;

    if (!to || !from) {
      return NextResponse.json(
        { ok: false, error: "Missing LEAD_TO_EMAIL or LEAD_FROM_EMAIL" },
        { status: 500 }
      );
    }

    const data = await req.json();

    const subject = `New website lead: ${data?.name ?? "Unknown"} — ${data?.persona ?? "Lead"}`;

    const text = `New Lead
Name: ${data?.name ?? ""}
Email: ${data?.email ?? ""}
Phone: ${data?.phone ?? ""}
Buyer/Seller: ${data?.persona ?? ""}
Timeline: ${data?.timeline ?? ""}
Message: ${data?.message ?? ""}

Source: ${data?.source ?? ""}
Created: ${data?.createdAt ?? ""}
`;

    const result = await resend.emails.send({
      from: `Boise Strategy Realty <${from}>`,
      to,
      subject,
      text,
      replyTo: data?.email ? String(data.email) : undefined,
    });

    if ((result as any)?.error) {
      return NextResponse.json(
        { ok: false, error: (result as any).error },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, id: (result as any)?.data?.id ?? null });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}