import type { Metadata } from "next";
import CTASection from "../../../components/CTASection";
import PageHeader from "../../../components/PageHeader";
import TestimonialCard from "../../../components/TestimonialCard";
import { pageMeta } from "../../../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Sell Your Home in Boise for Maximum Value",
  description:
    "Sell in Boise and the Treasure Valley with a pricing and marketing strategy designed to create leverage and protect your outcome.",
  path: "/sellers",
});

export default function SellersPage() {
  return (
    <>
      <PageHeader
        title="Sell your home in Boise for maximum value."
        lead="Selling well isn’t about hype—it’s about positioning. We combine market signal, premium presentation, and negotiation clarity to protect your net."
        secondaryLabel="Get the Free Seller Plan"
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div className="card cardPad">
              <h2 className="h2" style={{ fontSize: 30 }}>Seller pain points we solve</h2>
              <p className="p">
                Most missed outcomes come from pricing drift, weak presentation, or avoidable surprises in escrow.
              </p>

              <ul className="p" style={{ marginTop: 14, paddingLeft: 18 }}>
                <li>Overpricing that causes stale listings and price cuts</li>
                <li>Underpricing that leaves money on the table</li>
                <li>Weak presentation that reduces buyer urgency</li>
                <li>Inspection and appraisal surprises late in the game</li>
              </ul>
            </div>

            <div className="card cardPad" style={{ background: "var(--fog)" }}>
              <h2 className="h2" style={{ fontSize: 30 }}>The strategy</h2>
              <p className="p">
                We don’t list and hope. We build leverage with pricing grounded in comps and demand,
                marketing that elevates perceived value, and negotiation that protects your net.
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

          <div className="sectionTight" />

          <div className="maxText">
            <h2 className="h2">Seller results that feel controlled—not chaotic</h2>
            <p className="p">The goal: clean execution and strong net outcome.</p>
          </div>

          <div className="grid grid-3" style={{ marginTop: 18 }}>
            <TestimonialCard
              name="Monica T."
              context="Seller • Boise"
              quote="The pricing strategy was clear. We got strong activity early and negotiations stayed calm."
            />
            <TestimonialCard
              name="Ethan P."
              context="Seller • Eagle"
              quote="Presentation was premium. We felt proud of how it was marketed—and the net result showed it."
            />
            <TestimonialCard
              name="Samantha L."
              context="Seller • Meridian"
              quote="Inspection didn’t derail the deal because we had a plan. Communication was crisp the whole way."
            />
          </div>

          <div id="book" className="sectionTight" />

          <div className="card cardPad" style={{ background: "var(--fog)" }}>
            <h2 className="h2" style={{ fontSize: 30 }}>Booking section placeholder</h2>
            <p className="p">Embed Calendly (or your booking tool) here.</p>
            <div
              className="card"
              style={{
                marginTop: 16,
                height: 320,
                borderRadius: 18,
                display: "grid",
                placeItems: "center",
                color: "rgba(15,23,42,0.55)",
              }}
            >
              Calendar embed placeholder
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Sell with leverage—and a calm plan."
        body="If you’re considering a move in Boise or the Treasure Valley, book a 15-minute call. You’ll get clear pricing guidance and next steps."
      />
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
      <div className="small" style={{ fontWeight: 900, letterSpacing: "0.02em" }}>STEP {n}</div>
      <div className="h3" style={{ marginTop: 8 }}>{title}</div>
      <p className="p">{body}</p>
    </div>
  );
}
