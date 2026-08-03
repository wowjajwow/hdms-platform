import Image from "next/image";
import { keyFeatures } from "@/components/ai-service/ai-service-data";

export function AiServiceKeyFeatures() {
  return (
    <section className="px-6 py-24 sm:px-10 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="relative min-h-[360px] overflow-hidden bg-slate-950 shadow-[0_32px_90px_-60px_rgba(15,23,42,0.9)]">
            <Image
              src="/images/ai-service/keyAi.jpg"
              alt="AI 기반 클라우드 서비스 핵심 기능"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-blue-950/20" />
          </div>

          <div>
            <p className="h-1 w-8 bg-[#0047ba]" />
            <h2 className="mt-6 text-[clamp(2.2rem,4vw,4.5rem)] font-semibold leading-tight tracking-normal">
              Key Features
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              검증된 방법론과 AI 인프라 이해를 결합해 클라우드 전환과 멀티 클라우드 전략 수립을 돕습니다. 전환 계획, 운영 안정화, 비용 최적화까지 하나의 흐름으로 연결합니다.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {keyFeatures.map((feature) => (
            <article key={feature.title} className="bg-slate-50 p-8 ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:bg-blue-50/60 hover:ring-blue-100">
              <h3 className="text-2xl font-semibold text-[#0047ba]">{feature.title}</h3>
              <p className="mt-6 text-base leading-8 text-slate-700">{feature.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
