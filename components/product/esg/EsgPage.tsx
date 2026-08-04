"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const esgCards = [
  {
    title: "친환경 인프라",
    label: "Environment",
    copy: "전력, 냉각, MEP 기술을 결합해 에너지 사용과 탄소 배출을 줄이는 AI 데이터센터 기반을 설계합니다.",
    tone: "green",
  },
  {
    title: "안전한 운영",
    label: "Social",
    copy: "24시간 관제와 전문 엔지니어링으로 안정적인 AI 서비스 운영 환경과 데이터 보호 체계를 지원합니다.",
    tone: "blue",
  },
  {
    title: "책임 있는 경영",
    label: "Governance",
    copy: "품질관리, 정보보안, 프로젝트 관리 체계를 통해 신뢰할 수 있는 인프라 협력 모델을 구축합니다.",
    tone: "cyan",
  },
] as const;

const pillars = [
  {
    kicker: "Environment",
    title: "친환경 AI 데이터센터를 위한 인프라 효율화",
    image: "/images/product/esg/coolerbig.jpg",
    alt: "AI 데이터센터 냉각 설비",
    body: "고효율 전력 시스템과 친환경 냉각 기술을 기반으로 PUE를 최적화하고 에너지 절감, 탄소배출 저감을 동시에 추구합니다.",
    points: ["고효율 전력 시스템", "친환경 냉각 기술", "에너지 절감", "탄소배출 저감", "PUE 최적화"],
    color: "green",
  },
  {
    kicker: "Social",
    title: "안정적인 AI 인프라 운영과 기술 지원",
    image: "/images/product/esg/monitorings.jpg",
    alt: "데이터센터 관제센터 모니터링 화면",
    body: "AI 인프라가 멈추지 않도록 24시간 운영, 데이터 보호, 전문 기술 지원, 안전한 운영 환경을 하나의 운영 체계로 연결합니다.",
    points: ["안정적인 AI 인프라", "24시간 운영", "데이터 보호", "전문 기술 지원", "안전한 운영 환경"],
    color: "blue",
  },
  {
    kicker: "Governance",
    title: "신뢰 가능한 구축과 운영을 위한 관리 체계",
    image: "/images/product/esg/프로젝트관리.jpg",
    alt: "데이터센터 프로젝트 관리 회의",
    body: "품질관리와 정보보안, 윤리경영, 프로젝트 관리 체계를 통해 글로벌 협력까지 확장 가능한 책임 있는 운영 기준을 만듭니다.",
    points: ["품질관리", "정보보안", "윤리경영", "프로젝트 관리 체계", "글로벌 협력"],
    color: "cyan",
  },
] as const;

const legacy = ["높은 전력 사용", "높은 냉각 비용", "높은 탄소 배출", "낮은 운영 효율"];
const hdms = ["Power", "Cooling", "MEP", "Monitoring", "GPU / NPU", "친환경 운영", "에너지 절감", "운영 효율 향상", "탄소 저감"];
const process = ["Power", "Cooling", "MEP", "Monitoring", "AI Infrastructure", "Green Data Center"];
const metrics = [
  { value: 50, suffix: "+", label: "Years" },
  { value: 24, suffix: " / 7", label: "Monitoring" },
  { value: 100, suffix: "%", label: "AI Infrastructure" },
  { value: 3, suffix: " Pillars", label: "ESG Technology" },
];

export function EsgPage() {
  useEffect(() => {
    const revealTargets = document.querySelectorAll<HTMLElement>("[data-esg-reveal]");
    const countTargets = document.querySelectorAll<HTMLElement>("[data-count-to]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          target.classList.add("is-visible");

          const countTo = target.dataset.countTo;
          if (countTo && !target.dataset.counted) {
            target.dataset.counted = "true";
            animateCount(target, Number(countTo));
          }
        });
      },
      { threshold: 0.22, rootMargin: "0px 0px -8% 0px" },
    );

    revealTargets.forEach((target) => observer.observe(target));
    countTargets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#030b17] text-white">
      <section className="esg-hero relative flex min-h-[100svh] items-center overflow-hidden pt-24">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-70"
          src="/images/product/esg/esgmedia.mp4"
          poster="/images/product/esg/mediafirstimg.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,11,23,0.92),rgba(3,11,23,0.48)_48%,rgba(3,11,23,0.78)),radial-gradient(circle_at_68%_42%,rgba(29,78,216,0.28),transparent_34%)]" />
        <div aria-hidden="true" className="esg-led-field absolute inset-0" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 md:px-10">
          <div className="max-w-4xl">
            <p className="esg-hero-copy text-sm font-bold uppercase tracking-[0.24em] text-emerald-300">HDMS ESG Infrastructure</p>
            <h1 className="esg-hero-copy mt-7 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">지속가능한 AI 인프라 구축</h1>
            <p className="esg-hero-copy mt-7 max-w-3xl text-lg leading-8 text-slate-200 md:text-2xl md:leading-10">
              HDMS는 전력, 냉각, MEP, AI 인프라 기술을 기반으로<br className="hidden md:block" /> 친환경 데이터센터 구축을 지원합니다.
            </p>
            <Link href="#esg-overview" className="esg-light-button esg-hero-copy mt-10 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-emerald-300/70 hover:bg-white/[0.16]">
              ESG 가치 보기
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="esg-overview" className="relative overflow-hidden bg-[#07111f] px-6 py-24 md:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div data-esg-reveal className="esg-reveal max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-300">ESG Approach</p>
            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">기술로 실현하는 ESG</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {esgCards.map((card, index) => (
              <article key={card.label} data-esg-reveal className={`esg-reveal esg-card esg-card--${card.tone}`} style={{ transitionDelay: `${index * 140}ms` }}>
                <div className="esg-orbit-icon"><span>{index + 1}</span></div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">{card.label}</p>
                <h3 className="mt-4 text-2xl font-bold">{card.title}</h3>
                <p className="mt-5 text-base leading-7 text-slate-300">{card.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {pillars.map((pillar, index) => (
        <section key={pillar.kicker} className="relative overflow-hidden bg-[#030b17] px-6 py-24 md:px-10 lg:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <div data-esg-reveal className={`esg-reveal esg-image-panel esg-image-panel--${pillar.color} ${index % 2 ? "lg:order-2" : ""}`}>
              <Image src={pillar.image} alt={pillar.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              <div aria-hidden="true" className="esg-monitor-glow" />
            </div>
            <div data-esg-reveal className="esg-reveal">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">{pillar.kicker}</p>
              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl">{pillar.title}</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">{pillar.body}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {pillar.points.map((point) => (
                  <div key={point} className="flex items-center gap-3 border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-100">
                    <span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(52,211,153,0.8)]" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="relative overflow-hidden bg-[#07111f] px-6 py-24 md:px-10 lg:py-32">
        <div data-esg-reveal className="esg-reveal mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-300">HDMS ESG Value</p>
          <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">데이터센터의 운영 기준을 바꿉니다</h2>
          <div className="esg-transform mt-14 grid gap-8 lg:grid-cols-[1fr_120px_1.2fr]">
            <div className="esg-compare-panel">
              <h3>기존 데이터센터</h3>
              {legacy.map((item) => <p key={item}>{item}</p>)}
            </div>
            <div className="esg-energy-bridge" aria-hidden="true"><span /></div>
            <div className="esg-compare-panel esg-compare-panel--active">
              <h3>HDMS AI 인프라</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {hdms.map((item) => <p key={item}>{item}</p>)}
              </div>
              <div className="esg-live-chart" aria-hidden="true"><span /><span /><span /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#030b17] px-6 py-24 md:px-10 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <div data-esg-reveal className="esg-reveal text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">Build Process</p>
            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">인프라 구축 프로세스</h2>
          </div>
          <div data-esg-reveal className="esg-reveal esg-process mt-16">
            {process.map((step) => <div key={step} className="esg-process-step">{step}</div>)}
          </div>
        </div>
      </section>

      <section className="bg-[#07111f] px-6 py-24 md:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} data-esg-reveal className="esg-reveal esg-metric">
              <strong><span data-count-to={metric.value}>0</span>{metric.suffix}</strong>
              <p>{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="esg-vision relative flex min-h-[86svh] items-center overflow-hidden px-6 py-24 md:px-10">
        <Image src="/images/product/esg/datablue.jpg" alt="빛으로 연결되는 미래형 AI 데이터센터 도시" fill sizes="100vw" className="object-cover opacity-[0.62]" />
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,11,23,0.94),rgba(3,11,23,0.42),rgba(3,11,23,0.86))]" />
        <div aria-hidden="true" className="esg-city-lines absolute inset-0" />
        <div data-esg-reveal className="esg-reveal relative z-10 mx-auto w-full max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-emerald-300">Vision</p>
          <h2 className="mt-6 max-w-4xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            Building Sustainable AI Infrastructure<br />for Tomorrow
          </h2>
        </div>
      </section>
    </div>
  );
}

function animateCount(target: HTMLElement, end: number) {
  const duration = 1400;
  const startTime = performance.now();

  const tick = (now: number) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    target.textContent = String(Math.round(end * eased));
    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}
