import type { Metadata } from "next";
import ContactForm from "../../../components/ContactForm";
import PageHeader from "../../../components/PageHeader";
import CalendlyEmbed from "../../../components/CalendlyEmbed";
import { pageMeta } from "../../../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Contact",
  description:
    "Book a 15-minute strategy call or request the free buyer/seller plan for Boise and the Treasure Valley.",
  path: "/contact",
});

const CALENDLY = process.env.NEXT_PUBLIC_CALENDLY_URL || "";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Book your strategy call."
        lead="Tell me what you’re trying to accomplish—then we’ll map the cleanest path forward for Boise and the Treasure Valley."
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div id="free-plan">
              <div className="card cardPad" style={{ background: "var(--fog)" }}>
                <h2 className="h2" style={{ fontSize: 30 }}>
                  Get the Free Buyer/Seller Plan
                </h2>
                <p className="p">
                  A simple, high-signal plan tailored to your timeline—what to do
                  first, what to avoid, and how to create leverage.
                </p>
                <p className="small" style={{ marginTop: 10 }}>
                  Fill out the form and I’ll follow up quickly.
                </p>
              </div>

              <div style={{ marginTop: 16 }}>
                <ContactForm />
              </div>

              <div className="card cardPad" style={{ marginTop: 16 }}>
                <div className="h3">Office info</div>
                <p className="p">
                  Boise, Idaho <br />
                  (208) 555-0123 <br />
                  hello@example.com
                </p>
              </div>
            </div>

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
          </div>
        </div>
      </section>
    </>
  );
}