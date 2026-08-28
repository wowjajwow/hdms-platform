import Image from "next/image";

const detailSections = [
  {
    kicker: "01 / POWER HERITAGE",
    title: "전력설비 기술에서 시작한 안정성",
    image: "/images/home/company-hdms-bg.png",
    accentImage: "/images/ai-service/infraimg.jpg",
    summary:
      "변압기 한 대의 품질이 전체 전력설비의 안정성을 좌우하듯, AI 데이터센터의 안정성도 전력 인프라를 얼마나 깊게 이해하느냐에서 시작됩니다.",
    details: [
      "HDMS는 50년 이상 축적된 전력설비 기술을 기반으로 변압기, 배전, UPS, ESS를 데이터센터 운영 조건에 맞게 설계합니다.",
      "고밀도 연산 부하, 순간 전력 변동, 장애 상황을 고려해 안정적인 전력 품질과 연속 운영 구조를 제공합니다.",
      "전력 분배와 모니터링 체계를 함께 구성해 AI 운영 환경의 리스크를 낮추고 에너지 효율을 높입니다.",
    ],
    points: ["변압기", "배전 시스템", "UPS", "ESS", "전력 모니터링"],
  },
  {
    kicker: "02 / MODULAR AI DC",
    title: "빠르게 구축하고 유연하게 확장되는 AI 인프라",
    image: "/images/ai-service/automatical.jpg",
    accentImage: "/images/ai-service/matical.jpg",
    summary:
      "전력, 냉각, MEP, IT를 하나의 모듈형 구조로 결합해 AI 데이터센터를 빠르게 배치하고 단계적으로 확장할 수 있습니다.",
    details: [
      "표준 모듈을 기반으로 구축 기간을 단축하고, 필요한 규모만큼 증설할 수 있는 데이터센터 환경을 제공합니다.",
      "냉각 시스템과 MEP 요소를 전력 인프라와 함께 설계해 고밀도 서버 운영에 적합한 환경을 만듭니다.",
      "통합연구개발 역량을 통해 현장 조건, 운영 목표, 에너지 효율을 반영한 토탈 AI 전력 인프라 솔루션을 완성합니다.",
    ],
    points: ["모듈형 배치", "냉각 최적화", "MEP 통합", "AI 고밀도 운영", "단계별 확장"],
  },
];

export function InfrastructureDetailSections() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] px-5 py-24 text-slate-950 sm:px-8 lg:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[#f8fafc]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-[15%] top-[5%] h-[80%] w-[75%] rounded-full bg-blue-200/40 blur-[140px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 left-[20%] size-[600px] rounded-full bg-cyan-100/60 blur-[140px]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-[15%] select-none overflow-hidden whitespace-nowrap text-center text-[22vw] font-black leading-none tracking-normal text-slate-900/[0.025]">HDMS</div>

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.32em] text-blue-700">Core Capabilities</p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#102163] sm:text-6xl">
            전력 기술부터
            <span className="block">모듈형 AI 데이터센터까지</span>
          </h2>
          <div className="mt-7 text-base leading-8 text-slate-700 sm:text-lg">
            <p>
              검증된 전력 공급 역량과 빠르게 구축하고 유연하게 확장할 수 있는 모듈형 데이터센터 기술로 AI 인프라의 핵심 기반을 완성합니다.
            </p>
          </div>
        </div>

        <div className="mt-16 space-y-10 lg:space-y-14">
          {detailSections.map((section) => (
            <article
              key={section.title}
              tabIndex={0}
              className="group relative min-h-[720px] overflow-hidden border border-slate-200 bg-white shadow-[0_28px_90px_rgba(15,23,42,0.16)] outline-none transition-transform duration-500 hover:-translate-y-1 focus-visible:-translate-y-1 sm:min-h-[780px] lg:min-h-[820px]"
            >
              <div className="absolute right-0 top-0 h-[58%] w-full overflow-hidden sm:h-[62%] lg:h-[70%] lg:w-[74%]">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 74vw"
                  className="object-cover object-center transition duration-700 group-hover:scale-105 group-hover:brightness-75 group-hover:blur-[2px] group-focus-visible:scale-105 group-focus-visible:brightness-75 group-focus-visible:blur-[2px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 to-transparent" />
              </div>

              <div className="absolute inset-0 bg-[#f8fafc] [clip-path:polygon(0_0,34%_0,82%_100%,0_100%)] lg:[clip-path:polygon(0_0,38%_0,72%_100%,0_100%)]" />
              <div className="absolute bottom-0 right-0 h-[34%] w-[42%] bg-[#e4e9f2] [clip-path:polygon(100%_0,100%_100%,0_100%)]" />
              <div className="absolute inset-0 border border-white/60" />

              <div className="absolute bottom-10 left-7 z-10 max-w-[78%] transition-all duration-500 group-hover:-translate-y-3 group-focus-visible:-translate-y-3 sm:bottom-14 sm:left-12 lg:max-w-[42%]">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-blue-700">{section.kicker}</p>
                <h3 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#102163] sm:text-6xl lg:text-7xl">
                  {section.title}
                </h3>
                <p className="mt-6 max-w-xl text-base font-medium leading-8 text-slate-700 sm:text-lg">
                  {section.summary}
                </p>
              </div>

              <div className="absolute inset-x-5 bottom-5 z-20 translate-y-8 border border-blue-100/70 bg-white/92 p-5 opacity-0 shadow-[0_18px_60px_rgba(15,23,42,0.18)] backdrop-blur-md transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 max-md:translate-y-0 max-md:opacity-100 sm:inset-x-auto sm:bottom-10 sm:right-10 sm:w-[54%] sm:p-7 lg:w-[50%]">
                <div className="grid gap-6 lg:grid-cols-[1fr_180px]">
                  <div>
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.26em] text-blue-700">Detail</p>
                    <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
                      {section.details.map((detail) => (
                        <p key={detail}>{detail}</p>
                      ))}
                    </div>
                  </div>
                  <div className="relative hidden min-h-48 overflow-hidden border border-slate-200 bg-slate-100 lg:block">
                    <Image src={section.accentImage} alt={`${section.title} 보조 이미지`} fill sizes="180px" className="object-cover" />
                    <div className="absolute inset-0 bg-blue-950/10" />
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
