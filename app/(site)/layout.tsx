import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <main style={{ paddingTop: 74 }}>{children}</main>
      <Footer />
    </div>
  );
}