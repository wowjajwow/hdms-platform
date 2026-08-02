import { BusinessSection } from "@/components/home/business-section";
import { ContactSection } from "@/components/home/contact-section";
import { HeroSection } from "@/components/home/hero-section";
import { IntegratedInfrastructureSection } from "@/components/home/integrated-infrastructure-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntegratedInfrastructureSection />
      <BusinessSection />
      <ContactSection />
    </>
  );
}
