import type { Metadata } from "next";
import { PublicCloudPage } from "@/components/ai-service/public-cloud/PublicCloudPage";

export const metadata: Metadata = {
  title: "공공 클라우드",
  description: "공공기관과 지자체를 위한 HDMS 공공 클라우드 전환 컨설팅 서비스입니다.",
};

export default function Page() {
  return <PublicCloudPage />;
}