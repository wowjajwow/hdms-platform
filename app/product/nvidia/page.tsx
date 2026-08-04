import type { Metadata } from "next";
import { ProductSubPage } from "@/components/product/ProductSubPage";

export const metadata: Metadata = {
  title: "엔비디아 공급",
  description: "HDMS의 엔비디아 기반 AI 인프라 공급과 구축 역량을 소개합니다.",
};

export default function NvidiaPage() {
  return (
    <ProductSubPage
      eyebrow="Service Introduction"
      title="엔비디아 공급"
      description="GPU 기반 AI 인프라 도입부터 데이터센터 환경에 맞춘 공급, 구축, 운영 연계를 지원합니다."
      points={[
        "GPU 서버 및 AI 인프라 공급 연계",
        "전력과 냉각을 고려한 구축 계획",
        "AI 서비스 운영에 필요한 확장형 구성",
      ]}
    />
  );
}
