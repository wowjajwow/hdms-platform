import { CompanySection } from "@/components/home/company-section";
import { ContactSection } from "@/components/home/contact-section";
import { GroupIntroductionSection } from "@/components/home/group-introduction-section";
import { PowerInfrastructureSection } from "@/components/home/power-infrastructure-section";

export default function HomePage() {
  return (
    <>
      <CompanySection />
      <GroupIntroductionSection />
      <PowerInfrastructureSection />
      <ContactSection />
    </>
  );
}
