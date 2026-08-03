import type { Metadata } from "next";
import { ProductHeroSection } from "@/components/product/ProductHeroSection";
import { ProductMdcSection } from "@/components/product/ProductMdcSection";
import { ProductRackStructureSection } from "@/components/product/ProductRackStructureSection";

export const metadata: Metadata = {
  title: "제품 소개",
  description: "HDMS의 AI 데이터센터 및 모듈러 데이터센터 제품을 소개합니다.",
};

export default function ProductPage() {
  return (
    <>
      <ProductHeroSection />
      <ProductMdcSection />
      <ProductRackStructureSection />
    </>
  );
}
