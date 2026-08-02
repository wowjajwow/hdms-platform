import { InfrastructureGalaxy } from "@/components/home/infrastructure-galaxy";

export function IntegratedInfrastructureSection() {
  return (
    <section
      id="infrastructure"
      className="relative flex min-h-[850px] w-full scroll-mt-24 items-center justify-center overflow-hidden border-b border-slate-200 bg-slate-50 px-6 py-24 text-center sm:min-h-screen"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgba(147,197,253,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(147,197,253,0.22)_1px,transparent_1px)] [background-size:48px_48px]"
      />

      <div className="absolute left-1/2 top-1/2 z-0 size-[950px] -translate-x-1/2 -translate-y-1/2 sm:size-[1350px] lg:size-[1750px]">
        <InfrastructureGalaxy />
      </div>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center">
        <div className="inline-flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.25em] text-blue-600 sm:text-sm">
          <span className="h-px w-8 bg-blue-300" />
          <span>02 — Integrated Infrastructure</span>
          <span className="h-px w-8 bg-blue-300" />
        </div>

        <h2 className="mt-7 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
          One Heritage.
          <br />
          <span className="bg-gradient-to-br from-[#0d52ce] via-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Integrated Infrastructure.
          </span>
        </h2>

        <div className="mt-8 max-w-2xl text-base font-normal leading-relaxed text-slate-600 sm:text-lg md:text-xl md:leading-relaxed">
          <p>
            변압기 한 대의 품질이 전체 전력설비의 안정성을 좌우하듯,
            <br className="hidden sm:inline" /> 데이터센터의 안정성 역시 전력과 냉각 인프라에 대한 깊은 이해에서 시작됩니다.
          </p>
          <p className="mt-2">
            <span className="font-semibold text-slate-900">HDMS</span>는
            <span className="font-semibold text-blue-700"> 50년 이상 축적된 전력설비 기술</span>을 기반으로
            변압기, ESS, 냉각 시스템, 통합연구개발을 통해
            <strong className="font-bold text-blue-600"> AI 토탈 전력 인프라 솔루션</strong>을 제공합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
