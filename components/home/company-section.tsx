import { CompanyEnergyRing } from "@/components/home/CompanyEnergyRing";
import Image from "next/image";

export function CompanySection() {
  return (
    <section
      id="company"
      className="relative min-h-screen scroll-mt-24 overflow-hidden border-b border-slate-900 bg-slate-950 text-white"
    >
      <div className="company-image-stage absolute inset-0">
        <Image
          src="/images/home/company-hdms-bg.png"
          alt="도심 루프탑 위의 HDMS 모듈형 데이터센터 인프라"
          fill
          sizes="100vw"
          className="company-rebuild-image object-cover object-center"
          priority
        />
        <CompanyEnergyRing />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.9)_0%,rgba(2,6,23,0.72)_40%,rgba(2,6,23,0.26)_72%,rgba(2,6,23,0.12)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1600px] flex-col justify-center px-6 py-28 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-4xl">
          <div className="company-text-rise company-text-rise--1 mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-blue-300" />
            <p className="text-xs font-semibold tracking-[0.28em] text-blue-200 sm:text-sm">
              COMPANY
            </p>
          </div>

          <h2 className="overflow-hidden text-[clamp(1.85rem,3vw,3.45rem)] font-semibold leading-[1.12] tracking-normal text-white lg:whitespace-nowrap">
            <span className="company-text-rise company-text-rise--2 block">
              반세기의 전력 기술 
            </span>
          </h2>

          <div className="mt-7 max-w-2xl space-y-4 text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
            <p className="company-text-rise company-text-rise--3">
              <span className="font-semibold text-white">HDMS</span>는 동미전기공업의 제조 역량과
              전력설비 경험을 기반으로 설립된 토탈 AI 전력 인프라 기업입니다.
            </p>
            <p className="company-text-rise company-text-rise--4">
              변압기와 전력설비에서 출발한 50년의 기술을 전력, 냉각, MEP, 모듈형
              데이터센터와 결합해 AI 및 고밀도 컴퓨팅 환경에 최적화된 인프라를 제공합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
