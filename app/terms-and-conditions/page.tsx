import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions governing the use of the Bridge Credit website and loan assistance services.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsPage() {
  return (
    <Container className="py-12 sm:py-16 max-w-3xl">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]} />
      <h1 className="mt-6 text-4xl font-bold text-navy">Terms & Conditions</h1>
      <p className="mt-3 text-[14px] text-ink/45">Placeholder content — to be reviewed by a qualified professional before production use.</p>

      <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-ink/75">
        <p>
          These terms govern your use of the Bridge Credit website and enquiry services. By using
          this website, you agree to the terms outlined below.
        </p>
        <h2 className="text-xl font-bold text-navy pt-2">Nature of our services</h2>
        <p>
          Bridge Credit is a loan assistance firm. We facilitate access to loan products offered by
          banks, PSU banks and NBFCs. We do not lend money directly and do not guarantee approval,
          interest rate, tenure or loan amount for any application.
        </p>
        <h2 className="text-xl font-bold text-navy pt-2">Accuracy of information</h2>
        <p>
          You are responsible for providing accurate and complete information when submitting an
          enquiry. Inaccurate information may affect a lender&apos;s ability to process your application.
        </p>
        <h2 className="text-xl font-bold text-navy pt-2">No guarantee of outcome</h2>
        <p>
          Loan approval, terms and conditions are determined solely by the respective lending
          institution based on its own policies and your applicant profile.
        </p>
        <h2 className="text-xl font-bold text-navy pt-2">Limitation of liability</h2>
        <p>
          Bridge Credit shall not be liable for any decision made by a lending institution regarding
          your application.
        </p>
        <p className="rounded-xl bg-paper-blue px-4 py-3 text-[13.5px] text-navy/70">
          This is placeholder legal content. Please have this page reviewed and finalised by a
          qualified legal professional before publishing.
        </p>
      </div>
    </Container>
  );
}
