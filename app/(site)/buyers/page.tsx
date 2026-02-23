import type { Metadata } from "next";
import CTASection from "../../../components/CTASection";
import PageHeader from "../../../components/PageHeader";
import TestimonialCard from "../../../components/TestimonialCard";
import { pageMeta } from "../../../lib/seo";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import { CALENDLY } from "../contact/page";

export const metadata: Metadata = pageMeta({
  title: "Buy Smart in the Treasure Valley",
  description:
    "Buy in Boise and the Treasure Valley with a strategy built around comps, terms, and risk management—so you win the right home without overpaying.",
  path: "/buyers",
});

export default function BuyersPage() {
  return (
    <>
      <PageHeader
        title="Buy smart in the Treasure Valley."
        lead="Win the right home with a strategy grounded in comps, terms, and clean execution—so you don’t overpay or second-guess."
        secondaryLabel="Get the Free Relocation Guide"
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
              <h2 className="h2" style={{ fontSize: 30 }}>Buyer challenges we solve</h2>
              <p className="p">
                Most buyers don’t lose because of price—they lose because their offer isn’t structured for certainty.
              </p>

              <ul className="p" style={{ marginTop: 14, paddingLeft: 18 }}>
                <li>Not knowing what a home is really worth (beyond list price)</li>
                <li>Losing to stronger terms—even with a higher offer</li>
                <li>Overpaying out of urgency</li>
                <li>Inspection and appraisal surprises late in escrow</li>
              </ul>
            </div>

            <div className="card cardPad" style={{ background: "var(--fog)" }}>
              <h2 className="h2" style={{ fontSize: 30 }}>Your buying strategy</h2>
              <p className="p">
                We build offers based on reality: comps, seller motivation, inventory trends, and terms that reduce friction.
              </p>

              <div className="grid" style={{ marginTop: 14 }}>
                <div className="card cardPad">
                  <div className="h3">Comps first</div>
                  <p className="p">We anchor decisions in data, not emotion.</p>
                </div>
                <div className="card cardPad">
                  <div className="h3">Terms strategy</div>
                  <p className="p">Win with certainty, not just price.</p>
                </div>
                <div className="card cardPad">
                  <div className="h3">Risk managed</div>
                  <p className="p">Inspection + appraisal planning from day one.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="sectionTight" />

          <div className="card cardPad" style={{ background: "var(--fog)" }}>
            <h2 className="h2">3-step buyer roadmap</h2>
            <div className="grid grid-3" style={{ marginTop: 18 }}>
              <Step n="1" title="Plan" body="Neighborhood fit, budget reality, and must-haves that protect resale value." />
              <Step n="2" title="Compete" body="Tour efficiently. Write offers that win on terms and certainty." />
              <Step n="3" title="Close" body="Inspection and appraisal strategy that protects you without killing good deals." />
            </div>
          </div>

          <div className="sectionTight" />

          {/*

          <div className="grid grid-3" style={{ marginTop: 18 }}>
            <TestimonialCard
              name="Chris & Nina"
              context="Buyer • Boise"
              quote="We stopped second-guessing. The comps and plan made decisions feel obvious."
            />
            <TestimonialCard
              name="Ravi S."
              context="Buyer • Meridian"
              quote="Our terms were the difference. We won without being the highest price."
            />
            <TestimonialCard
              name="Haley G."
              context="Buyer • Kuna"
              quote="Inspection didn’t become a fight. We had a strategy and it stayed smooth."
            />
          </div>*/}
        </div>
      </section>

      {/*<CTASection
        title="Buy with clarity—and a real plan."
        body="Book a 15-minute call and get the roadmap: neighborhoods, financing strength, and an offer strategy that fits the Treasure Valley market."
      />*/}
    </>
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
