import type { Metadata } from "next";
import { NpuSolutionPage } from "@/components/product/npu/NpuSolutionPage";

export const metadata: Metadata = {
  title: "NPU Solution",
  description: "HDMS가 제공하는 NPU 기반 AI Computing Infrastructure와 기업형 AI 인프라 서비스를 소개합니다.",
};

export default function Page() {
  return <NpuSolutionPage />;
}