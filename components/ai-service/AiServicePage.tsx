import { AiServiceArchitecture } from "@/components/ai-service/AiServiceArchitecture";
import { AiServiceHero } from "@/components/ai-service/AiServiceHero";
import { AiServiceKeyFeatures } from "@/components/ai-service/AiServiceKeyFeatures";
import { AiServiceMethodology } from "@/components/ai-service/AiServiceMethodology";
import { AiServiceOffers } from "@/components/ai-service/AiServiceOffers";
import { AiServiceOverview } from "@/components/ai-service/AiServiceOverview";

export function AiServicePage() {
  return (
    <div className="bg-white text-slate-950">
      <AiServiceHero />
      <AiServiceOverview />
      <AiServiceOffers />
      <AiServiceArchitecture />
      <AiServiceMethodology />
      <AiServiceKeyFeatures />
    </div>
  );
}
