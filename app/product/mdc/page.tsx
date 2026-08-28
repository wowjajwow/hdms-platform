import type { Metadata } from "next";
import { ProductHeroSection } from "@/components/product/ProductHeroSection";
import { ProductMdcSection } from "@/components/product/ProductMdcSection";
import { ProductRackStructureSection } from "@/components/product/ProductRackStructureSection";

export const metadata: Metadata = {
  title: "MDC",
  description: "HDMS의 AI 데이터센터 및 모듈러 데이터센터 MDC를 소개합니다.",
};

export default function MdcPage() {
  return (
    <>
      <ProductHeroSection />
      <ProductMdcSection />
      <ProductRackStructureSection />
    </>
  );
}
