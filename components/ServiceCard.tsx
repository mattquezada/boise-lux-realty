import CTAButton from "./CTAButton";

export default function ServiceCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <div className="card cardPad hoverLift">
      <h3 style={{ margin: 0, fontSize: 18, fontWeight: 900, color: "var(--ink-950)" }}>
        {title}
      </h3>
      <p className="p">{description}</p>
      <div style={{ marginTop: 18 }}>
        <CTAButton href={href} variant="ghost">
          Explore
        </CTAButton>
      </div>
    </div>
  );
}
