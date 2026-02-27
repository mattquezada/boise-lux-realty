import type { Metadata } from "next";
import PageHeader from "../../../components/PageHeader";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import { pageMeta } from "../../../lib/seo";
import { getCalendlyUrl } from "../../../lib/calendly";

export const metadata: Metadata = pageMeta({
  title: "Contact",
  description:
    "Book a 30-minute strategy call for Boise and the Treasure Valley. Download the relocation guide and schedule a call.",
  path: "/contact",
});

const CALENDLY = getCalendlyUrl();

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Book your strategy call."
        lead="Pick a time that works. This is the fastest way to get a clear plan for Boise and the Treasure Valley."
        secondaryLabel="Get the Free Relocation Guide"
        imageSrc="/hero-boise-contact.jpg"
      />

      <section className="section">
        <div className="container">
          {/* 1) Relocation guide */}
          <div
            id="free-plan"
            className="card cardPad"
            style={{ background: "var(--fog)" }}
          >
            <h2 className="h2" style={{ fontSize: 30, marginBottom: 6 }}>
              Get the Free Relocation Guide
            </h2>
            <p className="p" style={{ marginTop: 0 }}>
              A simple guide for moving to Boise and the Treasure Valley—what to do
              first, what to avoid, and how to time the move.
            </p>

            <div style={{ marginTop: 14 }}>
              <a
                href="/2026 Relocation Guide.pdf"
                download
                className="btn btnSecondary"
              >
                Download the Relocation Guide →
              </a>
            </div>
          </div>

          {/* 2) Calendly */}
          <div
            id="book"
            className="card cardPad"
            style={{ marginTop: 18, background: "var(--fog)" }}
          >
            <h2 className="h2" style={{ fontSize: 30, marginBottom: 6 }}>
              Booking calendar
            </h2>
            <p className="p" style={{ marginTop: 0 }}>
              Pick a time that works. This is the fastest way to get a clear plan.
            </p>

            <div className="calFrame">
              {CALENDLY ? (
                <CalendlyEmbed url={CALENDLY} height={860} />
              ) : (
                <div className="card" style={{ marginTop: 16, padding: 18 }}>
                  <div className="h3">Calendly not configured</div>
                  <p className="p">
                    Add <code>NEXT_PUBLIC_CALENDLY_URL</code> to{" "}
                    <code>.env.local</code>.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* 3) Office info */}
          <div className="card cardPad" style={{ marginTop: 18 }}>
            <div className="h3" style={{ marginBottom: 8 }}>
              Office info
            </div>
            <p className="p" style={{ margin: 0 }}>
              Boise Premier Real Estate <br />
              13827 W Meadowdale Dr, Boise, ID 83713 <br />
              <a href="tel:12086152309" style={{ fontWeight: 900 }}>
                (208) 615-2309
              </a>
              <br />
              <a
                href="mailto:realtorlogancorral@gmail.com"
                style={{ fontWeight: 900 }}
              >
                realtorlogancorral@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}