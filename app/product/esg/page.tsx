import type { Metadata } from "next";
import { EsgPage } from "@/components/product/esg/EsgPage";

export const metadata: Metadata = {
  title: "ESG",
  description: "HDMS가 전력, 냉각, MEP, AI 인프라 기술로 실현하는 지속가능한 데이터센터 ESG 전략을 소개합니다.",
};

export default function Page() {
  return <EsgPage />;
}
