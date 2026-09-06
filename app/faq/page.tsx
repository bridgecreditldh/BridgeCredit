import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Accordion from "@/components/ui/Accordion";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers to common questions about Bridge Credit's loan assistance services across personal, business, vehicle and secured loans.",
  alternates: { canonical: "/faq" },
};

const faqCategories = [
  {
    category: "General",
    items: [
      { q: "What does Bridge Credit do?", a: "Bridge Credit is a loan assistance firm that helps customers explore suitable financing options across banks, PSU banks and NBFCs." },
      { q: "Does Bridge Credit lend money directly?", a: "No. We facilitate access to loan products offered by lending institutions; we do not lend directly." },
      { q: "Is there a fee for using Bridge Credit's assistance?", a: "Please get in touch with our team for details relevant to your specific requirement." },
    ],
  },
  {
    category: "Personal Loans",
    items: [
      { q: "Who can apply for a personal loan?", a: "Salaried and self-employed individuals with a documented income can generally be considered, subject to the specific lender's criteria." },
      { q: "Is collateral required for a personal loan?", a: "Personal loans are typically unsecured, though this can vary by lender and loan amount." },
    ],
  },
  {
    category: "Business Loans",
    items: [
      { q: "What documents are needed for a business loan?", a: "Typically business registration proof, KYC documents, bank statements and financial statements or ITR." },
      { q: "Can new businesses apply?", a: "Eligibility often depends on business vintage and other criteria set by the specific lender." },
    ],
  },
  {
    category: "Vehicle Loans",
    items: [
      { q: "Can I finance a used car?", a: "Many lenders offer used-car financing, with terms that differ from new-vehicle loans." },
    ],
  },
  {
    category: "Secured Loans",
    items: [
      { q: "What is a secured loan?", a: "A secured loan is backed by collateral such as property or gold, which the lender can claim if the loan is not repaid." },
      { q: "What is a loan against property?", a: "A facility where you pledge property as collateral to access funds without selling it." },
    ],
  },
  {
    category: "Documentation",
    items: [
      { q: "What documents are commonly required?", a: "Identity proof, address proof, income proof and bank statements are commonly required, with specifics varying by loan type and lender." },
    ],
  },
  {
    category: "Process",
    items: [
      { q: "How does the assistance process work?", a: "Share your requirement, we help you understand suitable options, and you proceed with the application through your chosen lender." },
    ],
  },
];

export default function FAQPage() {
  const allFaqs = faqCategories.flatMap((c) => c.items);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <Container className="py-12 sm:py-16 max-w-3xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
      <h1 className="mt-6 text-4xl font-bold text-navy leading-tight">Frequently asked questions</h1>
      <p className="mt-4 text-[17px] leading-relaxed text-ink/70">
        Common questions about loan assistance at {site.name}, organised by category.
      </p>

      <div className="mt-12 space-y-10">
        {faqCategories.map((cat) => (
          <div key={cat.category}>
            <h2 className="text-xl font-bold text-navy">{cat.category}</h2>
            <div className="mt-4">
              <Accordion items={cat.items} />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
