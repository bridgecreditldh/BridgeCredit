import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import WhyBridgeCredit from "@/components/home/WhyBridgeCredit";
import LoanSolutions from "@/components/home/LoanSolutions";
import HowItWorks from "@/components/home/HowItWorks";
import WhoWeHelp from "@/components/home/WhoWeHelp";
import CategoryFeature from "@/components/home/CategoryFeature";
import FAQPreview from "@/components/home/FAQPreview";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <WhyBridgeCredit />
      <LoanSolutions />
      <HowItWorks />
      <WhoWeHelp />
      <CategoryFeature />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}
