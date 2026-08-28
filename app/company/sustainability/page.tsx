import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "환경 & 사회 & 체계",
  description: "환경 효율, 안전과 상생, 책임 있는 운영 체계를 중심으로 한 HDMS의 지속가능경영 방향을 소개합니다.",
};

const pillars = [
  { key: "E", label: "Environment", title: "환경을 고려한 기술", description: "에너지 효율 향상과 자원 사용 최적화를 인프라 설계와 운영의 중요한 기준으로 삼습니다.", items: ["에너지 효율", "온실가스 저감 방향", "자원순환과 폐기물 관리", "환경 리스크 사전 검토"] },
  { key: "S", label: "Society", title: "사람과 함께하는 성장", description: "안전한 일터와 책임 있는 협력 관계를 통해 고객, 구성원, 파트너와 지속 가능한 가치를 만듭니다.", items: ["안전·보건", "인권과 다양성 존중", "협력사 상생", "기술과 역량의 공유"] },
  { key: "S", label: "System", title: "책임을 실행하는 체계", description: "윤리, 정보보안, 품질과 리스크 관리를 사업 과정에 연결해 책임 있는 의사결정의 기반을 마련합니다.", items: ["윤리와 준법", "정보보안", "품질 관리", "리스크 점검과 개선"] },
] as const;

const principles = [
  { number: "01", title: "사업과 연결", description: "지속가능성을 별도 활동이 아닌 설계, 조달, 구축과 운영의 판단 기준으로 반영합니다." },
  { number: "02", title: "중요 이슈 중심", description: "환경과 사회에 미치는 영향, 사업에 미치는 위험과 기회를 함께 살펴 우선순위를 정합니다." },
  { number: "03", title: "실행과 점검", description: "방향을 세우는 데 그치지 않고 현장에서 적용 가능한 과제로 구체화하고 지속적으로 점검합니다." },
  { number: "04", title: "함께 만드는 변화", description: "구성원과 고객, 협력사가 각자의 역할을 이해하고 참여할 수 있는 협업 기반을 지향합니다." },
] as const;

export default function SustainabilityPage() {
  return (
    <div className="bg-[#eef2f8] text-slate-950">
      <section className="relative flex min-h-[calc(100svh-124px)] items-end overflow-hidden bg-[#030b17] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-24">
        <video className="absolute inset-0 size-full object-cover opacity-58" src="/images/product/esg/esgmedia.mp4" poster="/images/product/esg/mediafirstimg.jpg" autoPlay muted loop playsInline preload="metadata" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,11,23,0.96),rgba(7,26,61,0.68)_52%,rgba(7,26,61,0.32)),linear-gradient(180deg,transparent_45%,rgba(3,11,23,0.84))]" />
        <div className="relative mx-auto w-full max-w-[1500px]">
          <p className="font-mono text-xs font-bold tracking-[0.28em] text-blue-300">SUSTAINABLE HDMS</p>
          <h1 className="mt-6 max-w-5xl text-[clamp(2.8rem,6vw,6.5rem)] font-semibold leading-[0.98] tracking-[-0.04em]">환경을 생각하고,<br />사람과 함께 성장하며,<br />책임 있게 실행합니다.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-200">HDMS는 지속가능성을 선언이 아닌 사업의 기준으로 바라봅니다. 기술의 효율, 안전한 관계, 책임 있는 운영 체계를 연결해 더 나은 인프라를 만들어갑니다.</p>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div><p className="font-mono text-xs font-bold tracking-[0.26em] text-blue-700">STRATEGY FRAMEWORK</p><h2 className="mt-5 text-4xl font-semibold leading-tight text-[#102163] sm:text-5xl">지속가능한 성장을 위한<br />세 가지 실행 축</h2></div>
            <p className="max-w-2xl border-t border-slate-300 pt-7 text-lg leading-9 text-slate-600 lg:justify-self-end">환경과 사회에 대한 책임을 사업 운영 체계 안에서 함께 다룰 때 지속가능성은 실제 변화로 이어집니다.</p>
          </div>
          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.label} className="group flex min-h-[520px] flex-col border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(13,82,206,0.14)]">
                <div className="flex items-center justify-between"><span className="text-6xl font-semibold text-[#0d52ce]">{pillar.key}</span><span className="font-mono text-xs font-bold tracking-[0.2em] text-blue-700">{pillar.label}</span></div>
                <h3 className="mt-14 text-3xl font-semibold text-[#102163]">{pillar.title}</h3>
                <p className="mt-5 leading-8 text-slate-600">{pillar.description}</p>
                <ul className="mt-auto space-y-3 border-t border-slate-200 pt-7 text-sm font-semibold text-slate-700">{pillar.items.map((item) => <li key={item} className="flex gap-3"><span className="text-[#0d52ce]">↗</span>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071a3d] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative min-h-[460px] overflow-hidden lg:min-h-[650px]"><Image src="/images/product/esg/회의.jpg" alt="협업을 통해 지속가능한 방향을 논의하는 모습" fill sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover" /><div className="absolute inset-0 bg-blue-950/20" /></div>
          <div className="lg:pl-10"><p className="font-mono text-xs font-bold tracking-[0.26em] text-blue-300">OUR APPROACH</p><h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">방향을 세우고<br />실행으로 증명합니다</h2><p className="mt-7 text-lg leading-9 text-slate-300">중요한 이슈를 파악하고, 사업 과정에 반영하고, 결과를 점검하는 흐름을 통해 지속가능경영의 실행력을 높여갑니다.</p></div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="max-w-3xl"><p className="font-mono text-xs font-bold tracking-[0.26em] text-blue-700">OPERATING PRINCIPLES</p><h2 className="mt-5 text-4xl font-semibold leading-tight text-[#102163] sm:text-6xl">지속가능성을 일하는 방식으로</h2></div>
          <div className="mt-16 border-t border-slate-300">{principles.map((item) => <article key={item.number} className="grid gap-5 border-b border-slate-200 py-8 md:grid-cols-[90px_0.65fr_1.35fr] md:items-center"><span className="font-mono text-xs font-bold text-blue-700">{item.number}</span><h3 className="text-2xl font-semibold text-[#102163]">{item.title}</h3><p className="leading-8 text-slate-600">{item.description}</p></article>)}</div>
        </div>
      </section>
    </div>
  );
}
