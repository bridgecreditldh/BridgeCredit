import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { disclaimerLong } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Important disclaimer regarding Bridge Credit's role as a loan assistance firm.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <Container className="py-12 sm:py-16 max-w-3xl">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Disclaimer" }]} />
      <h1 className="mt-6 text-4xl font-bold text-navy">Disclaimer</h1>
      <p className="mt-3 text-[14px] text-ink/45">Placeholder content — to be reviewed by a qualified professional before production use.</p>

      <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-ink/75">
        <p>{disclaimerLong}</p>
        <h2 className="text-xl font-bold text-navy pt-2">No guarantee of approval</h2>
        <p>
          Bridge Credit does not guarantee loan approval under any circumstance. Statements on this
          website describing our services should not be interpreted as an assurance of approval,
          rate, tenure or loan amount.
        </p>
        <h2 className="text-xl font-bold text-navy pt-2">Third-party lenders</h2>
        <p>
          All lending decisions rest solely with the respective bank, PSU bank or NBFC. Bridge Credit
          is not responsible for the final terms offered by any lending institution.
        </p>
        <p className="rounded-xl bg-paper-blue px-4 py-3 text-[13.5px] text-navy/70">
          This is placeholder legal content. Please have this page reviewed and finalised by a
          qualified legal professional before publishing.
        </p>
      </div>
    </Container>
  );
}
