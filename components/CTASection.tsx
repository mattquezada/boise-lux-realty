import CTAButton from "./CTAButton";

export default function CTASection({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <section className="ctaSection">
      <div className="container">
        <div className="ctaPanel">
          <div style={{ maxWidth: 760 }}>
            <h2 className="h2" style={{ color: "#fff" }}>
              {title}
            </h2>
            <p style={{ marginTop: 12, color: "rgba(255,255,255,0.80)", lineHeight: 1.65 }}>
              {body}
            </p>

            <div className="btnRow">
              <CTAButton href="/contact#book" variant="primary">
                Book a 15-Minute Strategy Call
              </CTAButton>
              <CTAButton href="/contact#free-plan" variant="secondary">
                Get the Free Buyer/Seller Plan
              </CTAButton>
            </div>

            <div className="ctaFine">
              High-signal guidance. Clear next steps. No pushy scripts.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
