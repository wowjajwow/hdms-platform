import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI 인프라",
  description: "전력, 냉각, MEP와 모니터링을 연결하는 HDMS의 지속가능한 AI 인프라 구축 방식을 소개합니다.",
};

const systems = [
  { label: "POWER", title: "안정적인 전력 공급", description: "고밀도 AI 연산 환경의 부하와 이중화 요구를 고려해 전력 공급과 분배 구조를 설계합니다." },
  { label: "COOLING", title: "효율적인 열관리", description: "서버 발열과 랙 밀도에 맞는 냉각 방식을 검토해 안정성과 에너지 효율을 함께 높입니다." },
  { label: "MEP", title: "설비 통합", description: "전기·기계·소방 등 핵심 설비가 하나의 운영 조건 안에서 유기적으로 작동하도록 연결합니다." },
  { label: "MONITORING", title: "데이터 기반 운영", description: "전력과 냉각, 설비 상태를 지속적으로 확인해 이상에 대응하고 운영 효율을 개선합니다." },
] as const;

export default function AiInfrastructurePage() {
  return (
    <div className="bg-[#eef2f8] text-slate-950">
      <section className="relative min-h-[calc(100svh-124px)] overflow-hidden bg-[#030b17] px-6 py-20 text-white sm:px-10 lg:px-16 xl:px-20">
        <Image src="/images/product/esg/datablue.jpg" alt="AI 데이터센터 인프라" fill priority sizes="100vw" className="object-cover opacity-55" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,11,23,0.96),rgba(3,11,23,0.63)_52%,rgba(3,11,23,0.38)),linear-gradient(180deg,transparent_45%,rgba(3,11,23,0.82))]" />
        <div className="relative mx-auto flex min-h-[calc(100svh-284px)] max-w-[1500px] items-end"><div className="max-w-5xl"><p className="font-mono text-xs font-bold tracking-[0.28em] text-blue-300">AI INFRASTRUCTURE</p><h1 className="mt-6 text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.94] tracking-[-0.045em]">Powering Intelligence,<br />Responsibly.</h1><p className="mt-8 max-w-2xl text-lg leading-9 text-slate-200">AI의 성능은 컴퓨팅 장비만으로 완성되지 않습니다. HDMS는 전력, 냉각, MEP와 운영 데이터를 하나의 시스템으로 연결합니다.</p></div></div>
      </section>

      <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32 xl:px-20">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end"><div><p className="font-mono text-xs font-bold tracking-[0.26em] text-blue-700">INTEGRATED SYSTEM</p><h2 className="mt-5 text-4xl font-semibold leading-tight text-[#102163] sm:text-6xl">AI 연산을 지탱하는<br />네 가지 기반</h2></div><p className="max-w-2xl border-t border-slate-300 pt-7 text-lg leading-9 text-slate-600 lg:justify-self-end">각 요소를 개별 설비로 보지 않고 전체 데이터센터의 안정성, 효율과 확장성을 결정하는 하나의 운영 시스템으로 설계합니다.</p></div>
          <div className="mt-16 grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-4">{systems.map((item) => <article key={item.label} className="min-h-80 bg-white p-8"><span className="font-mono text-xs font-bold tracking-[0.2em] text-blue-700">{item.label}</span><h3 className="mt-16 text-2xl font-semibold text-[#102163]">{item.title}</h3><p className="mt-5 leading-8 text-slate-600">{item.description}</p></article>)}</div>
        </div>
      </section>

      <section className="bg-[#071a3d] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32 xl:px-20">
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-2 lg:items-center"><div className="relative min-h-[440px] overflow-hidden lg:min-h-[620px]"><Image src="/images/product/esg/coolerbig.jpg" alt="AI 데이터센터 냉각 설비" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /><div className="absolute inset-0 bg-blue-950/25" /></div><div className="lg:pl-10"><p className="font-mono text-xs font-bold tracking-[0.26em] text-blue-300">ENERGY EFFICIENCY</p><h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">더 많은 연산을<br />더 효율적으로</h2><p className="mt-7 text-lg leading-9 text-slate-300">고밀도 AI 환경에서는 전력 소비와 발열이 함께 증가합니다. 부하 특성에 맞는 전력·냉각 설계와 데이터 기반 운영으로 불필요한 에너지 사용을 줄이고 안정적인 성능을 유지합니다.</p></div></div>
      </section>

      <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32 xl:px-20">
        <div className="mx-auto max-w-[1500px]"><div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center"><div><p className="font-mono text-xs font-bold tracking-[0.26em] text-blue-700">MONITOR & IMPROVE</p><h2 className="mt-5 text-4xl font-semibold leading-tight text-[#102163] sm:text-6xl">구축 이후에도<br />계속 개선되는 운영</h2><p className="mt-7 max-w-xl text-lg leading-9 text-slate-600">전력 사용량, 냉각 상태와 주요 설비 데이터를 확인해 이상을 조기에 발견하고 운영 조건을 지속적으로 개선합니다.</p><Link href="/contact" className="mt-9 inline-flex rounded-full bg-[#0d52ce] px-8 py-4 font-semibold text-white transition hover:bg-[#102163]">AI 인프라 문의</Link></div><div className="relative min-h-[420px] overflow-hidden border border-slate-200 bg-slate-950 lg:min-h-[600px]"><Image src="/images/product/esg/모니터링.jpg" alt="데이터센터 통합 모니터링" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" /><div className="absolute inset-0 bg-blue-950/15" /></div></div></div>
      </section>
    </div>
  );
}
