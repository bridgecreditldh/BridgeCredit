import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const steps = [
  { n: "01", title: "Tell us your requirement", desc: "Share the type of financing you need and a few details about your profile." },
  { n: "02", title: "Understand your profile", desc: "Our team reviews your requirement to understand what may be suitable." },
  { n: "03", title: "Explore suitable options", desc: "We help you compare relevant options across our lending network." },
  { n: "04", title: "Move forward with the application", desc: "You proceed with the lender of your choice, with guidance from our team." },
];

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading title="How it works" lede="A straightforward process, with no guarantee of approval implied at any stage." />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.n} className="relative pl-1">
              <span className="text-sm font-bold text-gold">{step.n}</span>
              <h3 className="mt-2 font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink/65">{step.desc}</p>
              {i < steps.length - 1 && (
                <span className="hidden lg:block absolute top-2 -right-4 h-px w-8 bg-line" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
