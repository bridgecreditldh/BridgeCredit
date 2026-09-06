import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { ShieldCheck, Handshake, Layers, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Bridge Credit is a loan assistance firm helping customers explore financing options across banks, PSU banks and NBFCs.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <Container className="py-12 sm:py-16">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <div className="mt-6 max-w-2xl">
        <h1 className="text-4xl font-bold text-navy leading-tight">About Bridge Credit</h1>
        <p className="mt-4 text-[17px] leading-relaxed text-ink/70">
          A professional loan assistance firm helping customers navigate financing options across
          a trusted lending network.
        </p>
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-navy">Who we are</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/70">
            Bridge Credit operates as an authorized banking channel partner, helping individuals and
            businesses explore suitable loan options across banks, PSU banks and NBFCs. We work
            across personal, business, vehicle, gold, property-backed and working capital financing.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-navy">What we do</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/70">
            We help customers understand their requirement, guide them toward lenders whose products
            may be a fit for their profile, and support them through documentation and the
            application process — without guaranteeing approval, rate or amount.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-navy">Our approach</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Handshake, title: "Solution-focused", desc: "We match your requirement to the most relevant lending route." },
            { icon: Layers, title: "Multiple channels", desc: "A single point of contact across banks, PSU banks and NBFCs." },
            { icon: MessageCircle, title: "Clear communication", desc: "Straightforward guidance at every stage of your enquiry." },
            { icon: ShieldCheck, title: "No unsupported claims", desc: "We never guarantee approval, rate or loan amount." },
          ].map(({ icon: Icon, title, desc }) => (
            <Card key={title}>
              <Icon className="h-5 w-5 text-royal" />
              <h3 className="mt-3 font-semibold text-navy">{title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink/65">{desc}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-navy">Our lending network</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/70">
            We work across banks, PSU banks and NBFCs. Available products, rates and terms vary by
            institution and applicant profile — we help you understand which route may be the right
            fit for your specific situation.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-navy">Our commitment</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/70">
            We are committed to transparent communication, careful guidance, and helping you make an
            informed decision — never to guaranteeing outcomes that depend on a lender&apos;s own policies.
          </p>
        </div>
      </div>

      <div className="mt-16 rounded-2xl bg-navy px-8 py-12 text-center">
        <h2 className="text-2xl font-bold text-white">Have a financing requirement in mind?</h2>
        <div className="mt-6">
          <Button href="/contact">Get Loan Assistance</Button>
        </div>
      </div>
    </Container>
  );
}
