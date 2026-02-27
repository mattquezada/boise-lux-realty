import type { Metadata } from "next";
import PageHeader from "../../../components/PageHeader";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import { pageMeta } from "../../../lib/seo";
import { getCalendlyUrl } from "../../../lib/calendly";

export const metadata: Metadata = pageMeta({
  title: "Sell Your Home in Boise for Maximum Value",
  description:
    "Sell in Boise and the Treasure Valley with a pricing and marketing strategy designed to create leverage and protect your outcome.",
  path: "/sellers",
});

const CALENDLY = getCalendlyUrl();

export default function SellersPage() {
  return (
    <>
      <PageHeader
        title="Sell your home in Boise for maximum value."
        lead="Selling well isn’t about hype—it’s about positioning. We combine market signal, premium presentation, and negotiation clarity to protect your net."
        secondaryLabel="Get the Free Relocation Guide"
        imageSrc="/hero-boise-seller.jpg"
      />

      <div id="book">
        <div className="card cardPad" style={{ background: "var(--fog)" }}>
          <h2 className="h2" style={{ fontSize: 30 }}>
            Booking calendar
          </h2>
          <p className="p">
            Pick a time that works. This is the fastest way to get a clear plan.
          </p>

          {CALENDLY ? (
            <CalendlyEmbed url={CALENDLY} height={720} />
          ) : (
            <div className="card" style={{ marginTop: 16, padding: 18 }}>
              <div className="h3">Calendly not configured</div>
              <p className="p">
                Add <code>NEXT_PUBLIC_CALENDLY_URL</code> to <code>.env.local</code>.
              </p>
            </div>
          )}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div className="card cardPad">
              <h2 className="h2" style={{ fontSize: 30 }}>
                Seller pain points we solve
              </h2>
              <p className="p">
                Most missed outcomes come from pricing drift, weak presentation, or avoidable
                surprises in escrow.
              </p>

              <ul className="p" style={{ marginTop: 14, paddingLeft: 18 }}>
                <li>Overpricing that causes stale listings and price cuts</li>
                <li>Underpricing that leaves money on the table</li>
                <li>Weak presentation that reduces buyer urgency</li>
                <li>Inspection and appraisal surprises late in the game</li>
              </ul>
            </div>

            <div className="card cardPad" style={{ background: "var(--fog)" }}>
              <h2 className="h2" style={{ fontSize: 30 }}>
                The strategy
              </h2>
              <p className="p">
                We don’t list and hope. We build leverage with pricing grounded in comps and
                demand, marketing that elevates perceived value, and negotiation that protects
                your net.
              </p>

              <div className="grid" style={{ marginTop: 14 }}>
                <Pill title="Pricing" body="Signal-based pricing that drives action." />
                <Pill title="Marketing" body="Premium assets + targeted distribution." />
                <Pill title="Negotiation" body="Terms strategy to reduce risk and raise net." />
              </div>
            </div>
          </div>

          <div className="sectionTight" />

          <div className="card cardPad" style={{ background: "var(--fog)" }}>
            <h2 className="h2">3-step selling system</h2>
            <div className="grid grid-3" style={{ marginTop: 18 }}>
              <Step n="1" title="Position" body="Pricing plan + prep priorities that matter." />
              <Step n="2" title="Launch" body="Presentation + distribution engineered for urgency." />
              <Step n="3" title="Close" body="Offer strategy, inspections, appraisal, clean closing." />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Pill({ title, body }: { title: string; body: string }) {
  return (
    <div className="card cardPad hoverLift">
      <div className="h3">{title}</div>
      <p className="p">{body}</p>
    </div>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="card cardPad hoverLift">
      <div className="small" style={{ fontWeight: 900, letterSpacing: "0.02em" }}>
        STEP {n}
      </div>
      <div className="h3" style={{ marginTop: 8 }}>
        {title}
      </div>
      <p className="p">{body}</p>
    </div>
  );
}