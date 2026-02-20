export default function ProcessSteps() {
  const sellers = [
    {
      title: "Positioning & price strategy",
      body: "We align pricing with market reality and buyer psychology—so you don’t “test the market” and lose momentum.",
    },
    {
      title: "Marketing that creates leverage",
      body: "Professional presentation + targeted distribution designed to drive showings and stronger negotiating posture.",
    },
    {
      title: "Negotiation & clean close",
      body: "Offer strategy, inspection leverage, appraisal risk management—handled calmly and decisively.",
    },
  ];

  const buyers = [
    {
      title: "Clarity on fit & timing",
      body: "Neighborhood guidance (Boise, Meridian, Eagle, Nampa, Kuna) plus a plan that matches your timeline.",
    },
    {
      title: "Win the right home",
      body: "We craft offers that are compelling without being reckless—based on comps, terms, and seller incentives.",
    },
    {
      title: "Protect your downside",
      body: "Inspection approach, repair strategy, appraisal planning, and clear next steps through closing.",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div style={{ maxWidth: 760 }}>
          <h2 className="h2">A simple process—built to reduce risk and increase leverage.</h2>
          <p className="p">Clear steps. Clean communication. Strategy first.</p>
        </div>

        <div className="grid" style={{ marginTop: 26 }}>
          <div className="grid" style={{ gap: 18 }}>
            <Timeline title="For sellers" steps={sellers} />
            <Timeline title="For buyers" steps={buyers} />
          </div>
        </div>

        <style>{`
          @media (min-width: 900px) {
            .grid > .grid { 
              display: grid; 
              grid-template-columns: 1fr 1fr; 
              gap: 22px;
            }
          }
        `}</style>
      </div>
    </section>
  );
}

function Timeline({
  title,
  steps,
}: {
  title: string;
  steps: { title: string; body: string }[];
}) {
  return (
    <div className="timeline">
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 10 }}>
        <div style={{ fontSize: 18, fontWeight: 900, color: "var(--ink-950)" }}>{title}</div>
        <div className="small" style={{ fontWeight: 900 }}>3 steps</div>
      </div>

      <div className="stepRow">
        {steps.map((s, idx) => (
          <div key={s.title} className="stepItem">
            <div className="stepDot">{idx + 1}</div>
            <div>
              <div style={{ fontWeight: 900, color: "rgba(15,23,42,0.92)" }}>{s.title}</div>
              <div className="small" style={{ marginTop: 6, lineHeight: 1.55 }}>
                {s.body}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
