"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ContactForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = e.currentTarget;

    const payload = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value,
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement)?.value,
      persona: (form.elements.namedItem("persona") as HTMLSelectElement)?.value,
      timeline: (form.elements.namedItem("timeline") as HTMLSelectElement)?.value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)?.value,
      source: "contact-form",
      createdAt: new Date().toISOString(),
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json().catch(() => null);

      if (!res.ok || !json?.ok) {
        const msg =
          json?.error?.message ||
          json?.error ||
          "Lead submission failed (check server logs).";
        throw new Error(msg);
      }

      router.push("/thank-you");
    } catch (err: any) {
      setError(err?.message ?? "Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <form className="card cardPad form" onSubmit={onSubmit}>
      <div className="field">
        <label className="label">Name</label>
        <input name="name" className="input" required />
      </div>

      <div className="field">
        <label className="label">Email</label>
        <input name="email" type="email" className="input" required />
      </div>

      <div className="field">
        <label className="label">Phone</label>
        <input name="phone" className="input" required />
      </div>

      <div className="field">
        <label className="label">Buyer or Seller</label>
        <select name="persona" className="select" defaultValue="Buyer">
          <option>Buyer</option>
          <option>Seller</option>
          <option>Both</option>
        </select>
      </div>

      <div className="field">
        <label className="label">Timeline</label>
        <select name="timeline" className="select" defaultValue="0–3 months">
          <option>0–3 months</option>
          <option>3–6 months</option>
          <option>6–12 months</option>
          <option>Just exploring</option>
        </select>
      </div>

      <div className="field">
        <label className="label">Message</label>
        <textarea name="message" className="textarea" />
      </div>

      {error && (
        <div className="small" style={{ color: "rgba(180,40,40,0.95)", fontWeight: 900 }}>
          {error}
        </div>
      )}

      <button
        type="submit"
        className="btn btnPrimary"
        disabled={loading}
        style={{ width: "100%", opacity: loading ? 0.75 : 1 }}
      >
        {loading ? "Sending..." : "Send Message & Book"} →
      </button>
    </form>
  );
}
