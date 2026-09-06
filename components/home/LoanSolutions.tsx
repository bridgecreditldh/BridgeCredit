import Link from "next/link";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { services } from "@/lib/services";
import {
  Wallet, Briefcase, Car, Wheat, Gem, Building2, PiggyBank, ShieldCheck, FileText, ArrowRight,
} from "lucide-react";

const icons: Record<string, typeof Wallet> = {
  "personal-loan": Wallet,
  "business-loan": Briefcase,
  "car-loan": Car,
  "agricultural-loan": Wheat,
  "gold-loan": Gem,
  "loan-against-property": Building2,
  "od-working-capital": PiggyBank,
  "secured-loans": ShieldCheck,
  "unsecured-loans": FileText,
};

export default function LoanSolutions() {
  return (
    <section className="py-16 sm:py-20 bg-paper-blue">
      <Container>
        <SectionHeading title="Financial solutions for every need" lede="Explore the loan categories we assist with across our lending network." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = icons[s.slug] ?? Wallet;
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-[0_8px_28px_-8px_rgba(11,37,69,0.18)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-paper-blue">
                  <Icon className="h-5 w-5 text-royal" />
                </span>
                <h3 className="mt-4 font-semibold text-navy">{s.name}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink/65">{s.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-royal">
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
