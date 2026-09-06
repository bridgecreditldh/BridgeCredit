import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { services, categories } from "@/lib/services";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Loan & Financial Solutions",
  description: "Explore Bridge Credit's loan and financial solutions across personal, business, property and other financing categories.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <Container className="py-12 sm:py-16">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
      <div className="mt-6 max-w-2xl">
        <h1 className="text-4xl font-bold text-navy leading-tight">Loan & Financial Solutions</h1>
        <p className="mt-4 text-[17px] leading-relaxed text-ink/70">
          Bridge Credit helps you explore financing options across banks, PSU banks and NBFCs.
          Browse by category below to find the loan solution suited to your requirement.
        </p>
      </div>

      <div className="mt-12 space-y-12">
        {categories.map((cat) => (
          <div key={cat}>
            <h2 className="text-xl font-bold text-navy">{cat}</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.filter((s) => s.category === cat).map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group rounded-2xl border border-line bg-white p-6 hover:shadow-[0_8px_28px_-8px_rgba(11,37,69,0.18)]"
                >
                  <h3 className="font-semibold text-navy">{s.name}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ink/65">{s.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-royal">
                    Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
