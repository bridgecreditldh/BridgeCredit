import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Landmark, Building, Banknote } from "lucide-react";

export const metadata: Metadata = {
  title: "Banking Partners & Lending Network",
  description: "Bridge Credit works as an authorized banking channel partner across banks, PSU banks and NBFCs.",
  alternates: { canonical: "/banking-partners" },
};

const channels = [
  { icon: Landmark, title: "Banks", desc: "Private-sector banks offering a range of retail and business lending products." },
  { icon: Building, title: "PSU Banks", desc: "Public sector banks with lending programmes across personal, business and agricultural finance." },
  { icon: Banknote, title: "NBFCs", desc: "Non-banking financial companies offering flexible lending options across loan categories." },
];

export default function BankingPartnersPage() {
  return (
    <Container className="py-12 sm:py-16">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Banking Partners" }]} />
      <div className="mt-6 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-gold">Authorized Banking Channel Partner</p>
        <h1 className="mt-2 text-4xl font-bold text-navy leading-tight">Our lending network</h1>
        <p className="mt-4 text-[17px] leading-relaxed text-ink/70">
          Bridge Credit works across banking and lending channels including banks, PSU banks and
          NBFCs. Available products and terms depend on the respective lender.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {channels.map(({ icon: Icon, title, desc }) => (
          <Card key={title}>
            <Icon className="h-5 w-5 text-royal" />
            <h3 className="mt-3 font-semibold text-navy">{title}</h3>
            <p className="mt-2 text-[14.5px] leading-relaxed text-ink/65">{desc}</p>
          </Card>
        ))}
      </div>

      <div className="mt-12 max-w-2xl">
        <h2 className="text-2xl font-bold text-navy">How this works for you</h2>
        <p className="mt-3 text-[16px] leading-relaxed text-ink/70">
          Rather than approaching each institution individually, you can share your requirement with
          our team once. We help identify which category of lender — bank, PSU bank or NBFC — may be
          most relevant to your profile and requirement, and guide you through next steps.
        </p>
        <p className="mt-4 text-[14px] text-ink/50">
          Specific partner names are not listed here; categories are shown to reflect the breadth of
          our lending network. Available products and terms are determined by the respective lender.
        </p>
      </div>

      <div className="mt-14 rounded-2xl bg-navy px-8 py-12 text-center">
        <h2 className="text-2xl font-bold text-white">Explore your financing options</h2>
        <div className="mt-6">
          <Button href="/contact">Get Loan Assistance</Button>
        </div>
      </div>
    </Container>
  );
}
