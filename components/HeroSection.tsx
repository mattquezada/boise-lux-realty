import CTAButton from "./CTAButton";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="heroBg" />
      <div className="heroOverlay" />
      <div className="glowA" />
      <div className="glowB" />

      <div className="container">
        <div className="heroInner">
          <span className="kicker">
            Boise • Meridian • Eagle • Nampa • Kuna <span className="dot" /> Treasure Valley
          </span>

          <h1 className="h1">
            A clear, strategic real estate plan—built for Boise and the Treasure Valley.
          </h1>

          <p className="pLead">
            Whether you’re selling for maximum leverage or buying with confidence,
            you’ll get a straightforward strategy, calm guidance, and sharp negotiation—without the noise.
          </p>

          <div className="btnRow">
            <CTAButton href="/contact#book" variant="primary">
              Book a 15-Minute Strategy Call
            </CTAButton>
            <CTAButton href="/2026 Relocation Guide.pdf" variant="secondary">
              Get the Free Relocation Guide
            </CTAButton>
          </div>

          <div className="heroBadges">
            <div className="badge">
              <div className="badgeTitle">Sellers</div>
              <div className="badgeBody">Pricing + positioning that drives offers</div>
            </div>
            <div className="badge">
              <div className="badgeTitle">Buyers</div>
              <div className="badgeBody">Win the right home without overpaying</div>
            </div>
            <div className="badge">
              <div className="badgeTitle">Relocation</div>
              <div className="badgeBody">Neighborhood fit + timing clarity</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
