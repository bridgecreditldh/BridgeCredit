"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { services } from "@/lib/services";

const resources = [
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
      <div className="container-xl flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          <Link href="/" className="text-[15px] font-medium text-ink/80 hover:text-royal">Home</Link>
          <Link href="/about" className="text-[15px] font-medium text-ink/80 hover:text-royal">About</Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-[15px] font-medium text-ink/80 hover:text-royal"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services <ChevronDown className="h-4 w-4" />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full w-72 rounded-xl border border-line bg-white p-2 shadow-lg">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="block rounded-lg px-3 py-2 text-[14px] text-ink/80 hover:bg-paper-blue hover:text-royal"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/banking-partners" className="text-[15px] font-medium text-ink/80 hover:text-royal">Banking Partners</Link>

          <div
            className="relative"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-[15px] font-medium text-ink/80 hover:text-royal"
              aria-expanded={resourcesOpen}
              onClick={() => setResourcesOpen((v) => !v)}
            >
              Resources <ChevronDown className="h-4 w-4" />
            </button>
            {resourcesOpen && (
              <div className="absolute left-0 top-full w-44 rounded-xl border border-line bg-white p-2 shadow-lg">
                {resources.map((r) => (
                  <Link key={r.href} href={r.href} className="block rounded-lg px-3 py-2 text-[14px] text-ink/80 hover:bg-paper-blue hover:text-royal">
                    {r.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/contact" className="text-[15px] font-medium text-ink/80 hover:text-royal">Contact</Link>
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact" className="rounded-full bg-royal px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-royal-deep">
            Get Loan Assistance
          </Link>
        </div>

        <button
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-line"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-line bg-white">
          <nav className="container-xl flex flex-col py-3" aria-label="Mobile">
            <Link href="/" className="py-2.5 text-[15px] font-medium" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link href="/about" className="py-2.5 text-[15px] font-medium" onClick={() => setMobileOpen(false)}>About</Link>
            <button
              className="flex items-center justify-between py-2.5 text-[15px] font-medium"
              onClick={() => setMobileServicesOpen((v) => !v)}
              aria-expanded={mobileServicesOpen}
            >
              Services <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileServicesOpen && (
              <div className="ml-3 flex flex-col border-l border-line pl-3">
                {services.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="py-2 text-[14px] text-ink/70" onClick={() => setMobileOpen(false)}>
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
            <Link href="/banking-partners" className="py-2.5 text-[15px] font-medium" onClick={() => setMobileOpen(false)}>Banking Partners</Link>
            <Link href="/blog" className="py-2.5 text-[15px] font-medium" onClick={() => setMobileOpen(false)}>Blog</Link>
            <Link href="/faq" className="py-2.5 text-[15px] font-medium" onClick={() => setMobileOpen(false)}>FAQ</Link>
            <Link href="/contact" className="py-2.5 text-[15px] font-medium" onClick={() => setMobileOpen(false)}>Contact</Link>
            <Link href="/contact" className="mt-2 rounded-full bg-royal px-5 py-2.5 text-center text-[14px] font-semibold text-white" onClick={() => setMobileOpen(false)}>
              Get Loan Assistance
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
