import CTAButton from "./CTAButton";

export default function PageHeader({
  title,
  lead,
  kicker = "Boise • Meridian • Eagle • Nampa • Kuna • Treasure Valley",
  primaryHref = "/contact#book",
  primaryLabel = "Book a 15-Minute Strategy Call",
  secondaryHref = "/contact#free-plan",
  secondaryLabel = "Get the Free Buyer/Seller Plan",
}: {
  title: string;
  lead: string;
  kicker?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <header className="pageHeader">
      <div className="container">
        <div className="pageHeaderInner">
          <span className="pageKicker">{kicker}</span>

          <h1 className="pageHeaderTitle">{title}</h1>
          <p className="pageHeaderLead">{lead}</p>

          <div className="btnRow">
            <CTAButton href={primaryHref} variant="primary">
              {primaryLabel}
            </CTAButton>
            <CTAButton href={secondaryHref} variant="secondary">
              {secondaryLabel}
            </CTAButton>
          </div>
        </div>
      </div>
    </header>
  );
}
