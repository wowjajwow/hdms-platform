import Image from "next/image";

const highlights = [
  { number: "01", title: "표준 모듈 설계", description: "검증된 표준 설계와 공장 사전 제작으로 현장 변수를 줄입니다." },
  { number: "02", title: "유연한 확장성", description: "사업 초기부터 향후 수요 증가까지 필요한 규모만큼 단계적으로 확장합니다." },
  { number: "03", title: "빠른 구축 및 안정성", description: "구축 기간은 단축하고 균일한 품질과 안정적인 운영 성능을 확보합니다." },
];

const specs = [
  { label: "MDC 크기", value: "40ft", detail: "컨테이너형 150kW급 MDC" },
  { label: "전체 전력", value: "150kW", detail: "IT Load + Utility" },
  { label: "IT Load", value: "120kW", detail: "Utility ≤ 25kW" },
  { label: "PUE", value: "1.1—1.25", detail: "고효율 에너지 운영" },
  { label: "냉각 방식", value: "Hybrid", detail: "GPU 수냉식 + NPU 공랭식" },
  { label: "외부 방열", value: "Free Cooling", detail: "외기 활용 · Chiller N+1" },
];

export function ProductMdcSection() {
  return (
    <section className="relative overflow-hidden bg-[#071b45] px-5 py-24 text-white sm:px-8 sm:py-32">
      <div aria-hidden="true" className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_80%_20%,rgba(38,105,235,.55),transparent_30%),radial-gradient(circle_at_10%_75%,rgba(35,74,155,.5),transparent_30%)]" />
      <div aria-hidden="true" className="absolute inset-0 opacity-[.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative mx-auto max-w-[1320px]">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3 text-xs font-bold tracking-[.24em] text-blue-300"><span className="h-px w-9 bg-blue-400" />MODULAR DATA CENTER</div>
            <h2 className="mt-6 text-4xl font-extrabold tracking-[-.05em] sm:text-6xl">HDMS MDC</h2>
          </div>
          <p className="max-w-3xl text-base leading-8 text-blue-100/75 sm:text-lg">
            150kW급 40ft 모듈을 기본 단위로 설계해 필요한 용량과 구축 환경에 따라 유연하게 조합할 수 있습니다. 표준화된 설계와 공장 사전 제작을 통해 구축 기간을 단축하고, 모듈 간 균일한 품질과 안정적인 운영 성능을 확보합니다.
          </p>
        </div>

        <div className="mt-14 grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.06] shadow-[0_40px_100px_-45px_rgba(0,0,0,.8)] backdrop-blur-sm lg:grid-cols-[1.35fr_.65fr]">
          <div className="relative min-h-[360px] overflow-hidden bg-[#eef1f5] sm:min-h-[520px]">
            <Image src="/images/product/mdc-model 01.png" alt="HDMS 40ft 모듈러 데이터센터 외관 모델" fill sizes="(min-width: 1024px) 65vw, 100vw" className="object-contain p-3 sm:p-7" />
            <div className="absolute left-5 top-5 rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-xs font-bold tracking-[.12em] text-[#173b86] shadow-lg backdrop-blur sm:left-8 sm:top-8">40FT · 150KW</div>
          </div>
          <div className="flex flex-col justify-between p-7 sm:p-10">
            <div><p className="text-xs font-bold tracking-[.2em] text-blue-300">MODEL 01 / EXTERIOR</p><h3 className="mt-4 text-2xl font-extrabold sm:text-3xl">현장에 최적화된<br />완성형 모듈 구조</h3><p className="mt-5 text-sm leading-7 text-blue-100/65">단열·방음·항온항습 환경과 유지보수 동선을 하나의 40ft 모듈 안에 효율적으로 구성합니다.</p></div>
            <div className="mt-10 border-t border-white/10 pt-6"><span className="font-mono text-4xl font-semibold text-blue-300">150</span><span className="ml-2 text-sm text-blue-100/60">kW TOTAL POWER</span></div>
          </div>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {highlights.map((item) => <article key={item.number} className="group rounded-2xl border border-white/10 bg-white/[.055] p-7 transition hover:-translate-y-1 hover:border-blue-400/50 hover:bg-white/[.09]"><div className="font-mono text-xs text-blue-400">{item.number}</div><h3 className="mt-7 text-xl font-bold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-blue-100/60">{item.description}</p></article>)}
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-center">
          <div>
            <p className="text-xs font-bold tracking-[.22em] text-blue-300">PERFORMANCE AT A GLANCE</p>
            <h3 className="mt-5 text-3xl font-extrabold tracking-[-.04em] sm:text-5xl">작은 공간에 집약한<br /><span className="text-blue-300">고밀도 AI 인프라</span></h3>
            <p className="mt-6 max-w-lg text-sm leading-7 text-blue-100/65 sm:text-base">GPU 수냉과 NPU 공랭을 결합한 하이브리드 냉각, 외기를 활용한 Free Cooling으로 성능과 에너지 효율을 함께 확보합니다.</p>
            <div className="relative mt-9 aspect-[2/1] overflow-hidden rounded-2xl bg-[#eef1f5]"><Image src="/images/product/mdc-model 02.png" alt="HDMS 모듈러 데이터센터 내부 랙 구성" fill sizes="(min-width: 1024px) 38vw, 100vw" className="object-contain p-3" /></div>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {specs.map((spec) => <div key={spec.label} className="bg-[#0b2253] p-6 sm:p-7"><p className="text-xs font-semibold tracking-[.12em] text-blue-300/75">{spec.label}</p><p className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">{spec.value}</p><p className="mt-2 text-sm text-blue-100/55">{spec.detail}</p></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
