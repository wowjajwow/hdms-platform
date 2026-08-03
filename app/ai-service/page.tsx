import type { Metadata } from "next";
import { AiServicePage } from "@/components/ai-service/AiServicePage";

export const metadata: Metadata = {
  title: "AI Service",
  description: "HDMS AI Service and cloud consulting for AI data center operations.",
};

export default function Page() {
  return <AiServicePage />;
}
