import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const variantClass =
    variant === "primary"
      ? "btn btnPrimary"
      : variant === "secondary"
      ? "btn btnSecondary"
      : "btn btnGhost";

  return (
    <Link href={href} className={`${variantClass} ${className}`}>
      {children} <span aria-hidden style={{ opacity: 0.7 }}>→</span>
    </Link>
  );
}
