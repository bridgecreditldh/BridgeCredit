import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export default function Button({ href, children, variant = "primary", className = "" }: Props) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold transition-colors duration-150";
  const styles = {
    primary: "bg-royal text-white hover:bg-royal-deep",
    secondary: "bg-white text-navy border border-line hover:border-royal",
    ghost: "text-navy hover:text-royal",
  };
  const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  if (isExternal) {
    return (
      <a href={href} className={`${base} ${styles[variant]} ${className}`}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
