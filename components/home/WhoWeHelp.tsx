import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";

const groups = [
  "Salaried Professionals",
  "Self-Employed Individuals",
  "Business Owners",
  "Professionals",
  "Farmers / Agricultural Applicants",
  "Property Owners",
];

export default function WhoWeHelp() {
  return (
    <section className="py-16 sm:py-20 bg-paper-blue">
      <Container>
        <SectionHeading title="Who we help" lede="Bridge Credit assists a wide range of applicants across our lending network." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <Card key={g} className="flex items-center">
              <p className="font-medium text-navy">{g}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
