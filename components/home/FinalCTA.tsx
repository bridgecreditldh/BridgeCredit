import Container from "../ui/Container";
import Button from "../ui/Button";
import { phoneHref, whatsappHref } from "@/lib/site";

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="rounded-3xl bg-navy px-8 py-14 text-center sm:px-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Let&apos;s find the right financing route for you
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-[16px] text-white/70">
            Tell us what you need and our team can help you understand the available loan options.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact">Get Loan Assistance</Button>
            <Button href={phoneHref()} variant="secondary" className="!bg-transparent !text-white !border-white/25 hover:!border-white/60">
              Call Us
            </Button>
            <Button href={whatsappHref()} variant="secondary" className="!bg-transparent !text-white !border-white/25 hover:!border-white/60">
              WhatsApp Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
