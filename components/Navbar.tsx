"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import CTAButton from "./CTAButton";

const navItems = [
  { href: "/sellers", label: "Sellers" },
  { href: "/buyers", label: "Buyers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ESC to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <header className={`navWrap ${scrolled ? "navScrolled" : "navTransparent"}`}>
        <div className="container">
          <div className="navInner">
            <Link href="/" className="brand" onClick={() => setOpen(false)}>
              <span className="brandTitle">Boise Strategy Realty</span>
              <span className="brandSub">Treasure Valley</span>
            </Link>

            <nav className="navLinks" aria-label="Primary">
              {navItems.map((i) => (
                <Link key={i.href} href={i.href} className="navLink">
                  {i.label}
                </Link>
              ))}
            </nav>

            <div className="navCtas">
              <CTAButton href="/contact#free-plan" variant="secondary">
                Get the Free Plan
              </CTAButton>
              <CTAButton href="/contact#book" variant="primary">
                Book a 15-Minute Call
              </CTAButton>
            </div>

            <button
              type="button"
              className="burger"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-drawer"
              onClick={() => setOpen(true)}
            >
              <span className="burgerLines" aria-hidden>
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`drawerOverlay ${open ? "drawerOverlayOpen" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      {/* Drawer */}
      <aside
        id="mobile-drawer"
        className={`drawerPanel ${open ? "drawerPanelOpen" : ""}`}
        aria-hidden={!open}
        aria-label="Mobile navigation"
      >
        <div className="drawerHeader">
          <div className="drawerTitle">
            <div className="drawerBrand">Boise Strategy Realty</div>
            <div className="drawerSub">Treasure Valley</div>
          </div>

          <button
            type="button"
            className="drawerClose"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            {/* simple X */}
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="rgba(11,15,20,0.86)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="drawerBody">
          <nav className="drawerNav">
            {navItems.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="drawerLink"
                onClick={() => setOpen(false)}
              >
                <span>{i.label}</span>
                <span aria-hidden style={{ opacity: 0.55 }}></span>
              </Link>
            ))}
          </nav>

          <div className="drawerDivider" />

          <div className="drawerCtas">
            <CTAButton href="/contact#book" variant="primary" className="">
              Book a 15-Minute Call
            </CTAButton>
            <CTAButton href="/contact#free-plan" variant="secondary" className="">
              Get the Free Plan
            </CTAButton>
          </div>

          <div className="small" style={{ marginTop: 14 }}>
            Calm strategy. Clear steps. Clean execution.
          </div>
        </div>
      </aside>
    </>
  );
}
