export default function TestimonialCard({
  name,
  quote,
  context,
}: {
  name: string;
  quote: string;
  context: string;
}) {
  return (
    <div className="card cardPad hoverLift">
      <div className="stars" aria-hidden>★★★★★</div>
      <p className="p" style={{ color: "rgba(15,23,42,0.82)" }}>
        “{quote}”
      </p>
      <div style={{ marginTop: 14, fontWeight: 900, color: "var(--ink-950)" }}>{name}</div>
      <div className="small">{context}</div>
    </div>
  );
}
