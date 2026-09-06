import Container from "../ui/Container";

const items = ["Banks", "PSU Banks", "NBFCs", "Multiple Loan Solutions", "Professional Assistance"];

export default function TrustStrip() {
  return (
    <div className="border-y border-line bg-paper-blue">
      <Container className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5">
        {items.map((item) => (
          <span key={item} className="text-[13.5px] font-semibold uppercase tracking-wide text-navy/70">
            {item}
          </span>
        ))}
      </Container>
    </div>
  );
}
