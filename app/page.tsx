import { BusinessSection } from "@/components/home/business-section";
import { CompanySection } from "@/components/home/company-section";
import { ContactSection } from "@/components/home/contact-section";
import { HeroSection } from "@/components/home/hero-section";
import { IntegratedInfrastructureSection } from "@/components/home/integrated-infrastructure-section";
import { PowerInfrastructureSection } from "@/components/home/power-infrastructure-section";

export default function HomePage() {
  return (
    <>
      <CompanySection />
      <PowerInfrastructureSection />
      <HeroSection />
      <IntegratedInfrastructureSection />
      <BusinessSection />
      <ContactSection />
    </>
  );
}
