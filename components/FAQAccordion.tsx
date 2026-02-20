"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What’s the first step if I’m buying in the Treasure Valley?",
    a: "A short strategy call to align timeline, financing readiness, and neighborhood fit. You’ll leave with a clear plan and next steps—no pressure.",
  },
  {
    q: "How do you price a home in Boise without leaving money on the table?",
    a: "We use comp analysis, demand indicators, and buyer psychology. Pricing is a strategy—not a guess—especially in shifting micro-markets.",
  },
  {
    q: "Do you help with relocation decisions across Boise, Meridian, and Eagle?",
    a: "Yes. We map commute, lifestyle priorities, and resale fundamentals—then build a search plan that fits your timing.",
  },
  {
    q: "How do you handle multiple-offer situations?",
    a: "We lead with a terms-first strategy: price, contingencies, timelines, and seller certainty. The goal is winning the right home without regret.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section">
      <div className="container">
        <div style={{ maxWidth: 760 }}>
          <h2 className="h2">Questions buyers and sellers ask before making a move</h2>
          <p className="p">If you’re wondering it, you’re not alone.</p>
        </div>

        <div className="grid" style={{ marginTop: 22, gap: 12 }}>
          {faqs.map((f, idx) => {
            const isOpen = open === idx;
            return (
              <button
                key={f.q}
                type="button"
                className="faqBtn"
                onClick={() => setOpen(isOpen ? null : idx)}
                aria-expanded={isOpen}
              >
                <div className="faqQ">
                  <span>{f.q}</span>
                  <span style={{ color: "rgba(15,23,42,0.55)" }}>{isOpen ? "–" : "+"}</span>
                </div>
                {isOpen && <div className="faqA">{f.a}</div>}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
