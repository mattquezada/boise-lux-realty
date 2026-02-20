"use client";

import { useEffect } from "react";

export default function CalendlyEmbed({
  url,
  height = 720,
}: {
  url: string;
  height?: number;
}) {
  useEffect(() => {
    // load Calendly script once
    const existing = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    if (existing) return;

    const s = document.createElement("script");
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <div
      className="card"
      style={{
        marginTop: 16,
        borderRadius: 18,
        overflow: "hidden",
        border: "1px solid rgba(15,23,42,0.10)",
      }}
    >
      <div
        className="calendly-inline-widget"
        data-url={url}
        style={{ minWidth: "320px", height }}
      />
    </div>
  );
}
