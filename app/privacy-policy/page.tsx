import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Bridge Credit's privacy policy covering how enquiry information is collected and used.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <Container className="py-12 sm:py-16 max-w-3xl">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      <h1 className="mt-6 text-4xl font-bold text-navy">Privacy Policy</h1>
      <p className="mt-3 text-[14px] text-ink/45">Placeholder content — to be reviewed by a qualified professional before production use.</p>

      <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-ink/75">
        <p>
          Bridge Credit (&quot;we&quot;, &quot;us&quot;) is a loan assistance and financial services firm. This policy
          describes, at a general level, how enquiry information submitted through this website may
          be collected, used and shared as part of helping you explore financing options.
        </p>
        <h2 className="text-xl font-bold text-navy pt-2">Information we collect</h2>
        <p>
          When you submit an enquiry, we may collect information such as your name, phone number,
          email address, loan requirement and employment type, as provided by you through our
          contact form.
        </p>
        <h2 className="text-xl font-bold text-navy pt-2">How information is used</h2>
        <p>
          Information collected is used to understand your requirement, respond to your enquiry, and
          where relevant, connect you with suitable lending institutions. We do not sell your
          personal information.
        </p>
        <h2 className="text-xl font-bold text-navy pt-2">Sharing with lenders</h2>
        <p>
          With your consent, relevant details may be shared with banks, PSU banks or NBFCs to
          facilitate your loan enquiry. Each lender&apos;s own privacy practices will apply to information
          shared with them.
        </p>
        <h2 className="text-xl font-bold text-navy pt-2">Contact</h2>
        <p>
          For questions about this policy, please reach out via our Contact page.
        </p>
        <p className="rounded-xl bg-paper-blue px-4 py-3 text-[13.5px] text-navy/70">
          This is placeholder legal content. Please have this page reviewed and finalised by a
          qualified legal professional, tailored to your actual data practices and applicable law,
          before publishing.
        </p>
      </div>
    </Container>
  );
}
