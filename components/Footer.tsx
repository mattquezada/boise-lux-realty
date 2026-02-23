import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerGrid">
          <div>
            <div className="brandTitle" style={{ fontSize: 20 }}>
              Boise Premier Real Estate
            </div>
            <p className="p">
              Strategic representation for buyers and sellers across Boise and
              the Treasure Valley—built around clarity, leverage, and calm
              execution.
            </p>
          </div>

          {/*<div>
            <div style={{ fontWeight: 900, marginBottom: 10 }}>Explore</div>
            <div className="grid" style={{ gap: 10 }}>
              <Link className="muted" href="/sellers">Sellers</Link>
              <Link className="muted" href="/buyers">Buyers</Link>
              <Link className="muted" href="/about">About</Link>
              <Link className="muted" href="/contact">Contact</Link>
            </div>
          </div>*/}

          <div>
            <div style={{ fontWeight: 900, marginBottom: 10 }}>Office</div>
            <div className="muted" style={{ lineHeight: 1.7 }}>
              Boise Premier Real Estate
              <br />
              13827 W Meadowdale Dr, Boise, ID 83713
              <br />
              (208) 615-2309
              <br />
              realtorlogancorral@gmail.com
            </div>
            <div className="small" style={{ marginTop: 14 }}>
              © {new Date().getFullYear()} Boise Premier Real Estate. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
