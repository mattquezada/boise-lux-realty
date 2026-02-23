import Link from "next/link";
import type { Metadata } from "next";
import CTAButton from "../../../components/CTAButton";
import { pageMeta } from "../../../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Thank You",
  description:
    "Message received. Book a 15-minute strategy call to map the cleanest next steps for Boise and the Treasure Valley.",
  path: "/thank-you",
});

export default function ThankYouPage() {
  return (
    <main>
      {/* Hero / Confirmation */}
      <section
        className="section"
        style={{
          paddingTop: 56,
          paddingBottom: 56,
          background:
            "radial-gradient(900px 500px at 20% 10%, rgba(191,163,106,0.14), transparent 60%), radial-gradient(900px 500px at 85% 25%, rgba(91,125,166,0.14), transparent 55%), linear-gradient(180deg, rgba(245,246,248,0.85), rgba(255,255,255,1))",
        }}
      >
        <div className="container">
          <div
            className="card cardPad"
            style={{
              maxWidth: 980,
              margin: "0 auto",
              borderRadius: 20,
              boxShadow: "0 20px 60px rgba(15,23,42,0.14)",
              border: "1px solid rgba(15,23,42,0.10)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 0.8fr",
                gap: 18,
                alignItems: "start",
              }}
              className="thankGrid"
            >
              {/* Left */}
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "8px 12px",
                    borderRadius: 999,
                    background: "rgba(15,23,42,0.06)",
                    border: "1px solid rgba(15,23,42,0.08)",
                    fontWeight: 900,
                    color: "rgba(15,23,42,0.85)",
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 999,
                      background: "rgba(191,163,106,0.95)",
                      boxShadow: "0 0 0 4px rgba(191,163,106,0.20)",
                    }}
                  />
                  Message received
                </div>

                <h1 className="h1" style={{ marginTop: 16 }}>
                  You’re all set.
                </h1>

                <p className="p" style={{ marginTop: 10, maxWidth: 56 + "ch" }}>
                  I’ve received your message. The fastest next step is a short
                  strategy call so we can map your plan with clarity—pricing,
                  timing, leverage, and next moves.
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 12,
                    marginTop: 18,
                  }}
                >
                  <CTAButton href="/contact#book" variant="primary">
                    Book a 15-Minute Strategy Call →
                  </CTAButton>

                  <Link href="/" className="btn btnSecondary">
                    Back to Home →
                  </Link>
                </div>

                <div
                  className="small"
                  style={{
                    marginTop: 14,
                    color: "rgba(15,23,42,0.70)",
                    fontWeight: 700,
                  }}
                >
                  Prefer text? Call or text{" "}
                  <a href="tel:12085550123" style={{ fontWeight: 900 }}>
                    (208) 615-2309
                  </a>
                  .
                </div>
              </div>

              {/* Right */}
              <div
                style={{
                  borderRadius: 18,
                  background: "rgba(245,246,248,0.9)",
                  border: "1px solid rgba(15,23,42,0.08)",
                  padding: 16,
                }}
              >
                <div className="h3" style={{ marginBottom: 10 }}>
                  What happens next
                </div>

                <div style={{ display: "grid", gap: 10 }}>
                  <div
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      aria-hidden
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 12,
                        background: "rgba(15,23,42,0.08)",
                        display: "grid",
                        placeItems: "center",
                        fontWeight: 900,
                      }}
                    >
                      1
                    </div>
                    <div>
                      <div style={{ fontWeight: 900 }}>Quick review</div>
                      <div className="small">
                        I’ll review your message and goals.
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <div
                      aria-hidden
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 12,
                        background: "rgba(15,23,42,0.08)",
                        display: "grid",
                        placeItems: "center",
                        fontWeight: 900,
                      }}
                    >
                      2
                    </div>
                    <div>
                      <div style={{ fontWeight: 900 }}>Strategy call</div>
                      <div className="small">
                        We map timeline, leverage points, and next actions.
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <div
                      aria-hidden
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 12,
                        background: "rgba(15,23,42,0.08)",
                        display: "grid",
                        placeItems: "center",
                        fontWeight: 900,
                      }}
                    >
                      3
                    </div>
                    <div>
                      <div style={{ fontWeight: 900 }}>Clear plan</div>
                      <div className="small">
                        You leave with a simple, confident path forward.
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: 14,
                    paddingTop: 14,
                    borderTop: "1px solid rgba(15,23,42,0.10)",
                  }}
                >
                  <div className="small" style={{ fontWeight: 900 }}>
                    Boise • Meridian • Eagle • Nampa • Kuna
                  </div>
                  <div className="small" style={{ marginTop: 4 }}>
                    Representation across the Treasure Valley.
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile: make the grid stack */}
            <style>{`
              @media (max-width: 900px) {
                .thankGrid {
                  grid-template-columns: 1fr !important;
                }
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* Subtle reinforcement */}
      <section className="section" style={{ paddingTop: 28 }}>
        <div className="container" style={{ maxWidth: 980 }}>
          <div
            className="card cardPad"
            style={{
              borderRadius: 20,
              border: "1px solid rgba(15,23,42,0.08)",
              background: "rgba(255,255,255,0.9)",
            }}
          >
            <div className="h2" style={{ fontSize: 28 }}>
              Want the free Relocation Guide too?
            </div>
            <p className="p" style={{ marginTop: 6 }}>
              If you haven’t already, request the free Relocation Guide—built
              around your timeline and priorities.
            </p>
            <div style={{ marginTop: 12 }}>
              <CTAButton href="/2026 Relocation Guide.pdf" variant="secondary">
                Get the Free Relocation Guide →
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
