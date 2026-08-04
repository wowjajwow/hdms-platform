import type { Metadata } from "next";
import { ProductSubPage } from "@/components/product/ProductSubPage";

export const metadata: Metadata = {
  title: "NPU",
  description: "AI 연산을 위한 NPU 기반 인프라와 공급 역량을 소개합니다.",
};

export default function NpuPage() {
  return (
    <ProductSubPage
      eyebrow="Service Introduction"
      title="NPU"
      description="AI 워크로드에 최적화된 NPU 인프라를 통해 고성능 연산 환경과 효율적인 서비스 운영 기반을 제공합니다."
      points={[
        "AI 추론과 학습 워크로드 대응",
        "고밀도 장비 운용을 고려한 랙 구성",
        "데이터센터 운영 환경에 맞춘 확장성",
      ]}
    />
  );
}
