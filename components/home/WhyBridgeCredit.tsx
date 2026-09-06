import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import { Network, ClipboardList, Workflow, Target, Users, MessageSquare } from "lucide-react";

const points = [
  { icon: Network, title: "Multiple Lending Channels", desc: "Access to banks, PSU banks and NBFCs through a single point of contact." },
  { icon: ClipboardList, title: "Guidance Across Loan Products", desc: "Support understanding personal, business, vehicle, gold and property-backed options." },
  { icon: Workflow, title: "Simplified Loan Process", desc: "We help you organise documentation and understand each step clearly." },
  { icon: Target, title: "Solution-Focused Approach", desc: "Recommendations shaped around your actual requirement and profile." },
  { icon: Users, title: "Professional Assistance", desc: "A dedicated team to answer questions and guide you through the process." },
  { icon: MessageSquare, title: "Transparent Communication", desc: "Clear information at every stage, with no hidden surprises." },
];

export default function WhyBridgeCredit() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading title="Why choose Bridge Credit?" lede="A dedicated partner across your loan journey — not just a single lender's offer." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {points.map(({ icon: Icon, title, desc }) => (
            <Card key={title}>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-paper-blue">
                <Icon className="h-5 w-5 text-royal" />
              </span>
              <h3 className="mt-4 font-semibold text-navy">{title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink/65">{desc}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
