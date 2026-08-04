import type { Metadata } from "next";
import { ProductSubPage } from "@/components/product/ProductSubPage";

export const metadata: Metadata = {
  title: "ESG",
  description: "HDMS의 지속 가능한 데이터센터 인프라와 ESG 운영 방향을 소개합니다.",
};

export default function EsgPage() {
  return (
    <ProductSubPage
      eyebrow="Service Introduction"
      title="ESG"
      description="에너지 효율, 안정적인 전력 운용, 지속 가능한 인프라 구축을 중심으로 HDMS의 ESG 가치를 실현합니다."
      points={[
        "고효율 전력 설비 기반의 에너지 절감",
        "운영 안정성을 고려한 인프라 설계",
        "지속 가능한 AI 데이터센터 환경 구축",
      ]}
    />
  );
}
