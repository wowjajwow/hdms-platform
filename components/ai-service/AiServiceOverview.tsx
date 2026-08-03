import Image from "next/image";
import { challengeCards } from "@/components/ai-service/ai-service-data";

export function AiServiceOverview() {
  return (
    <>
      <section className="px-6 py-20 sm:px-10 lg:px-16 xl:px-20">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-[#0047ba]">
              Consulting Methodology
            </p>
            <h2 className="mt-5 text-[clamp(2rem,3.6vw,4.5rem)] font-semibold leading-tight tracking-normal text-slate-950">
              클라우드 전환을 넘어
              <br />
              AI 운영 체계까지
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-slate-700 sm:text-lg sm:leading-9">
            <p>
              HDMS는 공공, 금융, 제조, 서비스 등 다양한 엔터프라이즈의 클라우드 전환 경험과 AI 데이터센터 인프라 역량을 바탕으로 고객의 클라우드 혁신을 위한 통합 방법론을 제공합니다.
            </p>
            <p>
              클라우드 도입 Assessment, 컨설팅, 마이그레이션, 운영 및 클라우드 네이티브 시스템 개발까지 AI 서비스 운영에 필요한 전략과 실행 방안을 수립합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-10 lg:px-16 xl:px-20">
        <div className="mx-auto grid max-w-[1280px] gap-7 md:grid-cols-3">
          {challengeCards.map((card, index) => (
            <article key={card.title} className="group overflow-hidden bg-white shadow-[0_28px_90px_-62px_rgba(15,23,42,0.75)] ring-1 ring-slate-200">
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-950">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
                <span className="absolute left-5 top-5 font-mono text-xs font-bold tracking-[0.2em] text-blue-100">
                  0{index + 1}
                </span>
              </div>
              <div className="p-7">
                <h2 className="text-xl font-semibold text-slate-950">{card.title}</h2>
                <p className="mt-4 text-base leading-8 text-slate-700">{card.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
