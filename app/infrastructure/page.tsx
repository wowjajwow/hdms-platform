import type { Metadata } from "next";
import { IntegratedInfrastructureSection } from "@/components/home/integrated-infrastructure-section";
import { InfrastructureDetailSections } from "@/components/infrastructure/InfrastructureDetailSections";

export const metadata: Metadata = {
  title: "통합 인프라 | HDMS",
  description: "HDMS의 전력, 냉각, MEP, IT 통합 인프라 소개 페이지입니다.",
};

export default function Page() {
  return (
    <>
      <IntegratedInfrastructureSection />
      <InfrastructureDetailSections />
    </>
  );
}