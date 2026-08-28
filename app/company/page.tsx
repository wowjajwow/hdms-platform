import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "회사소개",
  description: "50년 이상 축적된 전력설비 기술을 기반으로 AI 인프라의 미래를 설계하는 HDMS를 소개합니다.",
};

const capabilities = [
  { number: "01", title: "Power", description: "변압기와 배전, UPS, ESS를 아우르는 안정적인 전력 인프라" },
  { number: "02", title: "Cooling & MEP", description: "고밀도 AI 데이터센터를 위한 냉각 및 핵심 설비 통합" },
  { number: "03", title: "AI Infrastructure", description: "GPU·NPU 환경에 최적화된 모듈형 데이터센터와 운영 기반" },
  { number: "04", title: "Integrated R&D", description: "전력과 냉각, IT를 하나의 시스템으로 연결하는 통합 연구개발" },
] as const;

const deliverySteps = [
  { number: "01", label: "Discover", title: "요구사항 정의", description: "사업 목적과 부지, 전력 수요, 구축 일정과 확장 계획을 함께 검토합니다." },
  { number: "02", label: "Engineer", title: "통합 설계", description: "전력·냉각·MEP·IT 요소를 하나의 운영 환경으로 설계합니다." },
  { number: "03", label: "Deliver", title: "구축과 검증", description: "설계 의도가 현장에 정확히 구현되도록 구축 과정과 품질을 확인합니다." },
  { number: "04", label: "Evolve", title: "운영과 확장", description: "변화하는 워크로드와 사업 규모에 대응할 수 있는 확장 기반을 마련합니다." },
] as const;

export default function CompanyPage() {
  return (
    <div className="bg-white">
      <section className="relative min-h-[calc(100svh-124px)] overflow-hidden bg-[#06183f] text-white">
        <Image src="/images/home/HDMS회사 16x9.png" alt="HDMS 통합 전력 인프라" fill priority sizes="100vw" className="object-cover object-center opacity-55" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,13,38,0.95)_0%,rgba(3,13,38,0.72)_48%,rgba(3,13,38,0.22)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(3,13,38,0.7)_100%)]" />
        <div className="relative mx-auto flex min-h-[calc(100svh-124px)] max-w-[1500px] items-end px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
          <div className="max-w-5xl">
            <p className="font-mono text-xs font-bold tracking-[0.28em] text-blue-300 sm:text-sm">ABOUT HDMS</p>
            <h1 className="mt-7 text-[clamp(2.6rem,6vw,6.5rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
              Infrastructure,<br />Built to Perform.
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-200 sm:text-xl sm:leading-9">
              복잡한 기술을 하나의 실행 가능한 시스템으로 연결합니다. HDMS는 AI 인프라가 계획을 넘어 실제 현장에서 안정적으로 작동하도록 설계하고 구축합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="font-mono text-xs font-bold tracking-[0.24em] text-[#0d52ce]">WHO WE ARE</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#102163] sm:text-6xl">설비가 아닌<br />운영 환경을 설계합니다</h2>
            </div>
            <div className="border-t border-slate-300 pt-8 text-lg leading-9 text-slate-700 sm:text-xl sm:leading-10">
              <p>AI 데이터센터는 전력, 냉각, 공간과 컴퓨팅 자원이 유기적으로 맞물릴 때 비로소 제 성능을 발휘합니다.</p>
              <p className="mt-6">HDMS는 개별 장비의 공급을 넘어 각 기술이 실제 운영 조건에서 조화롭게 작동하도록 전체 구조를 바라보고 프로젝트를 실행합니다.</p>
            </div>
          </div>

          <div className="mt-20 grid border-y border-slate-200 md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map((item) => (
              <article key={item.number} className="group min-h-72 border-b border-slate-200 p-7 transition-colors hover:bg-blue-50 md:border-r xl:border-b-0 xl:last:border-r-0">
                <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#0d52ce]">{item.number}</span>
                <h3 className="mt-12 text-2xl font-semibold text-[#102163]">{item.title}</h3>
                <p className="mt-5 leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071a3d] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="relative min-h-[360px] overflow-hidden lg:min-h-[520px]">
            <Image src="/images/home/회사1.jpg" alt="HDMS 전력설비 기술 현장" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-blue-950/20" />
          </div>
          <div className="lg:pl-12">
            <p className="font-mono text-xs font-bold tracking-[0.24em] text-blue-300">OUR DIRECTION</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">From Design<br />to Operation.</h2>
            <p className="mt-7 max-w-xl text-lg leading-9 text-slate-300">초기 요구사항을 정확히 정의하고 기술 간 접점을 설계해 구축 이후의 운영과 확장까지 고려합니다. 이것이 HDMS가 프로젝트를 바라보는 방식입니다.</p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-50 px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div aria-hidden="true" className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="relative mx-auto max-w-[1500px]">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold tracking-[0.24em] text-[#0d52ce]">HOW WE WORK</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#102163] sm:text-6xl">하나의 흐름으로 이어지는<br />프로젝트 수행 방식</h2>
            <p className="mt-7 text-lg leading-8 text-slate-600">기획과 설계가 구축 현장에서 단절되지 않도록 프로젝트의 전 과정을 연결합니다.</p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 lg:grid-cols-4">
            {deliverySteps.map((step) => (
              <article key={step.number} className="min-h-80 bg-white p-8">
                <div className="flex items-center justify-between font-mono text-xs font-bold tracking-[0.18em] text-[#0d52ce]"><span>{step.number}</span><span>{step.label}</span></div>
                <h3 className="mt-16 text-2xl font-semibold text-[#102163]">{step.title}</h3>
                <p className="mt-5 leading-7 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-20 grid gap-8 border-t border-slate-300 pt-10 md:grid-cols-3">
            <div><strong className="text-xl text-[#102163]">Operational Stability</strong><p className="mt-3 leading-7 text-slate-600">멈추지 않는 운영을 우선하는 안정성 중심의 접근</p></div>
            <div><strong className="text-xl text-[#102163]">Scalable Architecture</strong><p className="mt-3 leading-7 text-slate-600">수요 변화와 단계적 증설을 고려한 유연한 구조</p></div>
            <div><strong className="text-xl text-[#102163]">Energy Efficiency</strong><p className="mt-3 leading-7 text-slate-600">전력과 냉각의 균형을 고려한 효율적인 운영 기반</p></div>
          </div>
        </div>
      </section>

      <section className="bg-[#0d52ce] px-6 py-20 text-white sm:px-10">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-mono text-xs font-bold tracking-[0.24em] text-blue-200">BUILD WITH HDMS</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">새로운 인프라를 함께 설계하세요.</h2>
          </div>
          <Link href="/contact" className="inline-flex w-fit items-center rounded-full bg-white px-8 py-4 font-semibold text-[#0d52ce] transition hover:bg-slate-100">문의하기</Link>
        </div>
      </section>
    </div>
  );
}
