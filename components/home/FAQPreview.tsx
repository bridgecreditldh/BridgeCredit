import Link from "next/link";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Accordion from "../ui/Accordion";

const faqs = [
  { q: "What types of loans does Bridge Credit assist with?", a: "We assist with personal, business, car, agricultural, gold, loan against property, OD/working capital, secured and unsecured loans." },
  { q: "Does Bridge Credit provide loans directly?", a: "No. We are a loan assistance firm that helps you explore options across banks, PSU banks and NBFCs. Lending decisions rest with the respective institution." },
  { q: "What documents may be required?", a: "This varies by loan type and lender, but generally includes identity proof, address proof, income proof and bank statements." },
  { q: "How does the loan assistance process work?", a: "We understand your requirement, help you explore suitable lenders, and support you through documentation and the application process." },
  { q: "Can self-employed individuals apply?", a: "Yes, subject to the specific lender's documentation and eligibility criteria." },
  { q: "What is a secured loan?", a: "A secured loan is backed by collateral such as property or gold, which the lender can claim if the loan isn't repaid as agreed." },
];

export default function FAQPreview() {
  return (
    <section className="py-16 sm:py-20 bg-paper-blue">
      <Container className="max-w-3xl">
        <SectionHeading title="Frequently asked questions" align="left" />
        <div className="mt-8">
          <Accordion items={faqs} />
        </div>
        <Link href="/faq" className="mt-6 inline-block font-semibold text-royal hover:underline">
          View All FAQs →
        </Link>
      </Container>
    </section>
  );
}
