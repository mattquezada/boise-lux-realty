import type { Metadata } from "next";
import CTASection from "../../../components/CTASection";
import PageHeader from "../../../components/PageHeader";
import { pageMeta } from "../../../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About",
  description:
    "Meet your Boise and Treasure Valley real estate advisor. Calm strategy, clean execution, and confident negotiation.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Strategy you can feel calm about."
        lead="I help buyers and sellers make smart moves in Boise and the Treasure Valley by focusing on what actually matters: market signal, leverage, and clean execution."
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {/* Photo block */}
            <div className="card cardPad" style={{ background: "var(--fog)" }}>
              <div
                className="card"
                style={{
                  overflow: "hidden",
                  borderRadius: 22,
                  border: "1px solid rgba(15,23,42,0.10)",
                }}
              >
                <div
                  style={{
                    aspectRatio: "4 / 5",
                    background: "linear-gradient(135deg, rgba(191,163,106,0.18), rgba(91,125,166,0.12))",
                    position: "relative",
                  }}
                >
                  {/* Replace src with your real headshot in /public */}
                  <img
                    src="/agent.jpg"
                    alt="Professional photo"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      opacity: 0.98,
                    }}
                  />
                </div>
              </div>

              <div className="small" style={{ marginTop: 12 }}>
                Professional photo placeholder (swap /public/agent.jpg)
              </div>

              <div className="card cardPad" style={{ marginTop: 14 }}>
                <div className="h3">Differentiation</div>
                <p className="p">
                  You’ll get a clear plan, clean communication, and negotiation that stays calm—even when the market isn’t.
                </p>
              </div>
            </div>

            {/* Content block */}
            <div>
              <div className="card cardPad">
                <div className="h3">My story</div>
                <p className="p">
                  I built my practice around high-signal guidance—clear pricing, thoughtful negotiation,
                  and proactive risk management. Clients don’t need pressure; they need a plan.
                </p>
              </div>

              <div className="card cardPad" style={{ marginTop: 18, background: "var(--fog)" }}>
                <div className="h3">Why Boise</div>
                <p className="p">
                  Boise is a set of micro-markets, not a single headline. I help clients align lifestyle fit with
                  resale fundamentals—especially across Boise, Meridian, Eagle, Nampa, and Kuna.
                </p>
              </div>

              <div className="grid" style={{ marginTop: 18 }}>
                <div className="card cardPad">
                  <div className="h3">Values</div>
                  <p className="p">Clarity &gt; hype. Strategy &gt; guesswork. Crisp, honest communication.</p>
                </div>

                <div className="card cardPad">
                  <div className="h3">How I work</div>
                  <p className="p">
                    We’ll make decisions with comps, terms, and timing—then execute with professionalism and speed.
                  </p>
                </div>
              </div>

              <div className="card cardPad" style={{ marginTop: 18 }}>
                <div className="h3">Local focus</div>
                <p className="p">
                  If you’re moving within the Treasure Valley, the right plan depends on neighborhood demand, inventory,
                  and how buyers behave in that micro-market. That’s where strategy pays off.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Let’s map your next move."
        body="Book a 15-minute strategy call and leave with a clear plan for buying or selling in Boise and the Treasure Valley."
      />
    </>
  );
}
