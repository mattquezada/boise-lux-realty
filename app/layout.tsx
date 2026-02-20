import "./globals.css";
import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Boise Real Estate Strategy | Treasure Valley Buyers & Sellers",
    template: "%s | Boise Real Estate Strategy",
  },
  description:
    "Modern, data-driven representation for buyers and sellers in Boise and the Treasure Valley. Book a 15-minute strategy call and get a clear plan.",
  keywords: [
    "Boise real estate agent",
    "Treasure Valley homes",
    "Buy home in Boise",
    "Sell home in Boise",
    "Meridian real estate",
    "Eagle Idaho homes",
  ],
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
