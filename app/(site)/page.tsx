import type { Metadata } from "next";
import HeroSection from "../../components/HeroSection";
import StatsBar from "../../components/StatsBar";
import ServiceCard from "../../components/ServiceCard";
import ProcessSteps from "../../components/ProcessSteps";
import TestimonialCard from "../../components/TestimonialCard";
import FAQAccordion from "../../components/FAQAccordion";
import CTASection from "../../components/CTASection";
import { pageMeta } from "../../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Boise Real Estate Agent for Buyers & Sellers",
  description:
    "Strategic representation for Boise and the Treasure Valley. Book a 15-minute call and get a clear buyer or seller plan.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 760 }}>
            <h2 className="h2">Strategy for the move you’re making—right now.</h2>
            <p className="p">
              Choose the path that fits. Each one starts with a short call and a clear plan.
            </p>
          </div>

          <div className="grid grid-3" style={{ marginTop: 22 }}>
            <ServiceCard
              title="Sell Your Home"
              description="Pricing, presentation, and negotiation designed to protect your downside and maximize your leverage."
              href="/sellers"
            />
            <ServiceCard
              title="Buy in Treasure Valley"
              description="A smart offer strategy built from comps, terms, and seller motivation—so you win without overreaching."
              href="/buyers"
            />
            <ServiceCard
              title="Relocate to Boise"
              description="Neighborhood guidance across Boise, Meridian, Eagle, Nampa, and Kuna—aligned to lifestyle and timing."
              href="/contact#free-plan"
            />
          </div>
        </div>
      </section>

      <ProcessSteps />

      <section className="section fog">
        <div className="container">
          <div style={{ maxWidth: 760 }}>
            <h2 className="h2">Clients choose calm strategy over chaos.</h2>
            <p className="p">
              The goal is the same every time: clarity, leverage, and a clean closing.
            </p>
          </div>

          <div className="grid grid-3" style={{ marginTop: 22 }}>
            <TestimonialCard
              name="Alyssa M."
              context="Seller • Meridian"
              quote="We had a clear plan from day one. Pricing made sense, the marketing looked premium, and negotiations felt controlled—not stressful."
            />
            <TestimonialCard
              name="Jordan & Kim R."
              context="Buyer • Boise"
              quote="We won the home we actually wanted. The offer strategy was smart—strong enough to win without pushing us into regret."
            />
            <TestimonialCard
              name="Derek S."
              context="Relocation • Eagle"
              quote="The neighborhood breakdown saved us weeks. We narrowed fast, toured efficiently, and felt confident about the long-term decision."
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "start" }}>
            <div>
              <h2 className="h2">Boise & Treasure Valley moves are won in the details.</h2>
              <p className="p">
                The market here isn’t one market—it’s a set of neighborhoods with different demand curves,
                inventory patterns, and buyer expectations. Boise, Meridian, Eagle, Nampa, and Kuna each move differently.
              </p>
              <p className="p">
                You don’t need more noise—you need the right signals: pricing bands that attract action,
                terms that reduce risk, and timing that protects your leverage.
              </p>

              <div className="card cardPad" style={{ marginTop: 18, background: "var(--fog)" }}>
                <div style={{ fontWeight: 900, color: "var(--ink-950)" }}>
                  Want a tailored plan?
                </div>
                <div className="p" style={{ marginTop: 6 }}>
                  Book a short call and get a clear next-step roadmap.
                </div>

                <div className="btnRow">
                  <a className="btn btnPrimary" href="/contact#book">
                    Book a 15-Minute Strategy Call <span aria-hidden style={{ opacity: 0.7 }}>→</span>
                  </a>
                  <a className="btn btnSecondary" href="/contact#free-plan">
                    Get the Free Plan <span aria-hidden style={{ opacity: 0.7 }}>→</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="card cardPad" style={{ background: "var(--fog)" }}>
              <div style={{ fontWeight: 900, color: "rgba(15,23,42,0.86)" }}>
                Neighborhood snapshots (placeholder)
              </div>
              <ul className="p" style={{ marginTop: 14, paddingLeft: 18 }}>
                <li><strong>Boise:</strong> walkability pockets, micro-markets.</li>
                <li><strong>Meridian:</strong> inventory shifts quickly.</li>
                <li><strong>Eagle:</strong> premium positioning matters.</li>
                <li><strong>Nampa:</strong> terms + inspection strategy are key.</li>
                <li><strong>Kuna:</strong> timing can create leverage.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion />

      <CTASection
        title="Book a short call. Leave with a clear plan."
        body="In 15 minutes we’ll align your timeline, priorities, and market reality—then map the next steps that make sense for Boise and the Treasure Valley."
      />
    </>
  );
}
