import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerGrid">
          <div>
            <div className="brandTitle" style={{ fontSize: 20 }}>
              Boise Strategy Realty
            </div>
            <p className="p">
              Strategic representation for buyers and sellers across Boise and
              the Treasure Valley—built around clarity, leverage, and calm
              execution.
            </p>
          </div>

          <div>
            <div style={{ fontWeight: 900, marginBottom: 10 }}>Explore</div>
            <div className="grid" style={{ gap: 10 }}>
              <Link className="muted" href="/sellers">Sellers</Link>
              <Link className="muted" href="/buyers">Buyers</Link>
              <Link className="muted" href="/about">About</Link>
              <Link className="muted" href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 900, marginBottom: 10 }}>Office</div>
            <div className="muted" style={{ lineHeight: 1.7 }}>
              Office info placeholder
              <br />
              Boise, ID
              <br />
              (208) 555-0123
            </div>
            <div className="small" style={{ marginTop: 14 }}>
              © {new Date().getFullYear()} Boise Strategy Realty. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
