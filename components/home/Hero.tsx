import Container from "../ui/Container";
import Button from "../ui/Button";
import { Landmark } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#eef2fb_0%,#ffffff_55%)]" />
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24 items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-[13px] font-medium text-navy">
            <Landmark className="h-3.5 w-3.5 text-gold" />
            Banking Channel Partner — Banks · PSU Banks · NBFCs
          </p>
          <h1 className="mt-6 text-4xl sm:text-5xl font-bold leading-[1.08] text-navy">
            Loan solutions designed around your needs
          </h1>
          <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-ink/70">
            From personal and business finance to vehicle, gold and property-backed loans,
            Bridge Credit helps you explore suitable financing options through a trusted
            lending network.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Get Loan Assistance</Button>
            <Button href="/services" variant="secondary">Explore Loan Solutions</Button>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-line bg-white p-7 shadow-[0_30px_60px_-25px_rgba(11,37,69,0.25)]">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">Lending network</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {["Banks", "PSU Banks", "NBFCs", "Secured & Unsecured"].map((item) => (
                <div key={item} className="rounded-xl bg-paper-blue px-4 py-4 text-center text-[14px] font-medium text-navy">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-xl border border-dashed border-gold/50 bg-white px-4 py-3.5">
              <p className="text-[13px] text-ink/60">
                <span className="font-semibold text-navy">9 loan categories</span> — from personal
                loans to loan against property, guided by a dedicated team.
              </p>
            </div>
          </div>
          <div className="absolute -right-4 -bottom-4 -z-10 h-28 w-28 rounded-full bg-royal/10 blur-2xl" aria-hidden="true" />
        </div>
      </Container>
    </section>
  );
}
