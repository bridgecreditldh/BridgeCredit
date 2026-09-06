import Container from "../ui/Container";
import Button from "../ui/Button";

export default function CategoryFeature() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gold">Built around your requirement</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy leading-tight">
            From everyday needs to business growth
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-ink/70">
            Whether it&apos;s a personal expense, a growing business, a vehicle purchase or an asset-backed
            requirement, Bridge Credit helps you find the financing route that fits — by connecting you
            to the right lenders across our network of banks, PSU banks and NBFCs.
          </p>
          <div className="mt-6">
            <Button href="/services">View All Loan Solutions</Button>
          </div>
        </div>
        <div className="rounded-3xl border border-line bg-paper-blue p-8">
          <div className="grid grid-cols-2 gap-3">
            {["Personal", "Business", "Vehicle", "Property & Gold"].map((cat) => (
              <div key={cat} className="rounded-xl bg-white border border-line px-4 py-6 text-center">
                <p className="font-semibold text-navy text-[15px]">{cat}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
