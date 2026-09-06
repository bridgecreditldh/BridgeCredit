import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import { services, getService } from "@/lib/services";
import { site } from "@/lib/site";
import { CheckCircle2, FileCheck2, Users2 } from "lucide-react";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: service.name, description: service.summary },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services.filter((s) => service.related.includes(s.slug));

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.summary,
    provider: { "@type": "Organization", name: site.name },
    areaServed: "IN",
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
      { "@type": "ListItem", position: 3, name: service.name, item: `${site.url}/services/${service.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="bg-white border-b border-line">
        <Container className="py-12 sm:py-16">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.name }]} />
          <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-gold">{service.category}</p>
          <h1 className="mt-2 text-4xl font-bold text-navy leading-tight max-w-2xl">{service.name}</h1>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-ink/70">{service.heroText}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/contact">Get Loan Assistance</Button>
            <Button href="/faq" variant="secondary">Read FAQs</Button>
          </div>
        </Container>
      </section>

      <Container className="py-12 sm:py-16 grid gap-12 lg:grid-cols-[1fr_320px]">
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-navy">What is a {service.name.toLowerCase()}?</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-ink/70">{service.whatItIs}</p>
          </div>

          <div>
            <h2 className="flex items-center gap-2 text-2xl font-bold text-navy">
              <Users2 className="h-5 w-5 text-royal" /> Who it may be suitable for
            </h2>
            <ul className="mt-4 space-y-2.5">
              {service.suitableFor.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[15px] text-ink/75">
                  <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-royal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy">Key features</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {service.keyFeatures.map((f) => (
                <div key={f} className="rounded-xl border border-line bg-white p-4 text-[14.5px] text-ink/75">{f}</div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="flex items-center gap-2 text-2xl font-bold text-navy">
              <FileCheck2 className="h-5 w-5 text-royal" /> Typical documentation
            </h2>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-[15px] text-ink/75">
              {service.documents.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy">Eligibility considerations</h2>
            <ul className="mt-4 space-y-2 text-[15px] text-ink/75">
              {service.eligibility.map((e) => <li key={e}>{e}</li>)}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy">How the process works</h2>
            <ol className="mt-4 space-y-3">
              {service.process.map((step, i) => (
                <li key={step} className="flex gap-3 text-[15px] text-ink/75">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-paper-blue text-[13px] font-semibold text-royal">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy">Frequently asked questions</h2>
            <div className="mt-4">
              <Accordion items={service.faqs} />
            </div>
          </div>

          <div className="rounded-2xl bg-navy px-8 py-10 text-center">
            <h2 className="text-2xl font-bold text-white">Ready to explore your options?</h2>
            <p className="mt-2 text-white/70">Talk to our team about your {service.name.toLowerCase()} requirement.</p>
            <div className="mt-6">
              <Button href="/contact">Get Loan Assistance</Button>
            </div>
          </div>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24 h-fit">
          <div className="rounded-2xl border border-line bg-white p-5">
            <h3 className="font-semibold text-navy">Related solutions</h3>
            <ul className="mt-3 space-y-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/services/${r.slug}`} className="text-[14.5px] text-royal hover:underline">
                    {r.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-dashed border-gold/50 bg-white p-5">
            <p className="text-[13px] leading-relaxed text-ink/60">
              Eligibility, documentation, interest rates, loan amount and other terms may vary by
              lender and applicant profile.
            </p>
          </div>
        </aside>
      </Container>
    </>
  );
}
