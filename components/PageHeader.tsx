import CTAButton from "./CTAButton";

type Props = {
  title: string;
  lead: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  pillText?: string;
};

export default function PageHeader({
  title,
  lead,
  primaryLabel = "Book a 15-Minute Strategy Call",
  primaryHref = "/contact#book",
  secondaryLabel,
  secondaryHref = "/contact#free-plan",
  imageSrc,
  imageAlt = "Boise and the Treasure Valley",
  pillText = "Boise • Meridian • Eagle • Nampa • Kuna • Treasure Valley",
}: Props) {
  const hasImage = Boolean(imageSrc);

  return (
    <header className={`pageHero ${hasImage ? "" : "noImage"}`}>
      {hasImage && (
        <div className="pageHeroBg">
          <img
            className="pageHeroBgImg"
            src={imageSrc}
            alt={imageAlt}
          />
        </div>
      )}

      <div className="pageHeroOverlay" />
      <div className="glowC"/>
      <div className="pageHeroSoftGlow" />

      <div className="container">
         <div className="heroInner">
          <span className="kicker">
            Boise • Meridian • Eagle • Nampa • Kuna <span className="dot" /> Treasure Valley
          </span>

          <h1 className="pageHeroTitle">{title}</h1>
          <p className="pageHeroLead">{lead}</p>

          <div className="pageHeroCtas">
            <CTAButton href={primaryHref} variant="primary">
              {primaryLabel}
            </CTAButton>

            {secondaryLabel && (
              <CTAButton href={secondaryHref} variant="secondary">
                {secondaryLabel}
              </CTAButton>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}