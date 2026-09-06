import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { blogPosts } from "@/lib/blog";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Loan Guides & Resources",
  description: "Educational articles on personal loans, business loans, documentation and financing options from Bridge Credit.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <Container className="py-12 sm:py-16">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
      <div className="mt-6 max-w-2xl">
        <h1 className="text-4xl font-bold text-navy leading-tight">Loan guides & resources</h1>
        <p className="mt-4 text-[17px] leading-relaxed text-ink/70">
          Practical, plain-language guidance on loans, documentation and financing decisions.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group rounded-2xl border border-line bg-white p-6 hover:shadow-[0_8px_28px_-8px_rgba(11,37,69,0.18)]">
            <p className="text-xs font-semibold uppercase tracking-wide text-gold">{post.category}</p>
            <h2 className="mt-2.5 font-semibold text-navy leading-snug">{post.title}</h2>
            <p className="mt-2 text-[14px] leading-relaxed text-ink/65">{post.excerpt}</p>
            <div className="mt-4 flex items-center justify-between text-[13px] text-ink/45">
              <span>{post.readTime}</span>
              <span className="flex items-center gap-1 font-semibold text-royal">
                Read <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
