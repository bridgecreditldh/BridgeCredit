import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import { blogPosts, getPost } from "@/lib/blog";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const relatedServices = services.filter((s) => post.relatedServices.includes(s.slug));

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    publisher: { "@type": "Organization", name: site.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Container className="py-12 sm:py-16 max-w-3xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.title }]} />
        <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-gold">{post.category}</p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-navy leading-tight">{post.title}</h1>
        <p className="mt-3 text-[14px] text-ink/45">{post.readTime}</p>

        <div className="mt-8 space-y-6">
          {post.body.map((section, i) => (
            <div key={i}>
              {section.heading && <h2 className="text-xl font-bold text-navy mb-2.5">{section.heading}</h2>}
              {section.paragraphs.filter(Boolean).map((p, j) => (
                <p key={j} className="text-[16px] leading-relaxed text-ink/75 mb-3">{p}</p>
              ))}
              {section.list && (
                <ul className="list-disc pl-5 space-y-1.5 text-[15px] text-ink/75">
                  {section.list.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>

        {relatedServices.length > 0 && (
          <div className="mt-10 rounded-2xl border border-line bg-paper-blue p-6">
            <h3 className="font-semibold text-navy">Related loan solutions</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {relatedServices.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="rounded-full border border-line bg-white px-4 py-1.5 text-[13.5px] font-medium text-navy hover:border-royal">
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10 rounded-2xl bg-navy px-8 py-10 text-center">
          <h2 className="text-xl font-bold text-white">Have a question about your financing options?</h2>
          <div className="mt-5">
            <Button href="/contact">Get Loan Assistance</Button>
          </div>
        </div>
      </Container>
    </>
  );
}
