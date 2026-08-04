"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { InfrastructureGalaxy } from "@/components/home/infrastructure-galaxy";

const cards = [
  {
    label: "Environment",
    title: "친환경 인프라",
    image: "/images/product/esg/coolerbig.jpg",
    alt: "AI 데이터센터 냉각 설비",
    copy: "전력, 냉각, MEP 기술을 통합해 AI 데이터센터의 에너지 효율과 PUE를 최적화합니다.",
    points: ["고효율 전력 시스템", "친환경 냉각", "에너지 절감", "탄소배출 저감"],
  },
  {
    label: "Social",
    title: "안전한 운영",
    image: "/images/product/esg/monitorings.jpg",
    alt: "데이터센터 관제센터 모니터링 화면",
    copy: "24시간 관제와 전문 엔지니어링을 통해 안정적인 AI 인프라 운영 환경을 제공합니다.",
    points: ["24시간 운영", "데이터 보호", "전문 기술 지원", "안전한 운영 환경"],
  },
  {
    label: "Governance",
    title: "책임 있는 경영",
    image: "/images/product/esg/프로젝트관리.jpg",
    alt: "데이터센터 프로젝트 관리 회의",
    copy: "품질관리, 정보보안, 프로젝트 관리 체계를 기반으로 신뢰 가능한 인프라 협력을 구축합니다.",
    points: ["품질관리", "정보보안", "윤리경영", "글로벌 협력"],
  },
] as const;

const valueFlow = ["Power", "Cooling", "MEP", "Monitoring", "GPU / NPU", "Green Data Center"];
const processSteps = ["Power", "Cooling", "MEP", "Monitoring", "AI Infrastructure", "Green Data Center"];

export function EsgPage() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-esg-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.22, rootMargin: "0px 0px -10% 0px" },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#eef2f8] text-slate-950">
      <section className="esg-hero relative flex min-h-[100svh] items-center overflow-hidden bg-[#030b17] pt-24 text-white">
        <video
          className="esg-hero-video absolute inset-0 h-full w-full object-cover opacity-70"
          src="/images/product/esg/esgmedia.mp4"
          poster="/images/product/esg/mediafirstimg.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,11,23,0.92),rgba(3,11,23,0.48)_48%,rgba(3,11,23,0.78)),radial-gradient(circle_at_68%_44%,rgba(29,78,216,0.22),transparent_34%)]" />
        <div aria-hidden="true" className="esg-led-field absolute inset-0" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 md:px-10">
          <div className="max-w-4xl">
            <p className="esg-hero-copy text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">HDMS ESG Infrastructure</p>
            <h1 className="esg-hero-copy mt-7 text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">지속가능한 AI 인프라 구축</h1>
            <p className="esg-hero-copy mt-7 max-w-3xl text-lg leading-8 text-slate-200 md:text-2xl md:leading-10">
              HDMS는 전력, 냉각, MEP, AI 인프라 기술을 기반으로<br className="hidden md:block" /> 친환경 데이터센터 구축을 지원합니다.
            </p>
            <Link href="#esg-showcase" className="esg-light-button esg-hero-copy mt-10 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-blue-200/70 hover:bg-white/[0.16]">
              ESG 가치 보기
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="esg-showcase" className="esg-showcase relative min-h-[112svh] overflow-hidden px-6 py-24 text-white md:px-10 lg:py-28">
        <div aria-hidden="true" className="esg-showcase-galaxy absolute left-1/2 top-1/2 z-0 size-[1150px] -translate-x-1/2 -translate-y-1/2 sm:size-[1450px] lg:size-[1900px]">
          <InfrastructureGalaxy />
        </div>
        <div aria-hidden="true" className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_34%,rgba(255,255,255,0.72),rgba(238,242,248,0.78)_30%,rgba(238,242,248,0.96)_66%),linear-gradient(180deg,rgba(238,242,248,0.94),rgba(248,250,252,0.98))]" />
        <div aria-hidden="true" className="absolute inset-0 z-0 opacity-70 [background-image:linear-gradient(to_right,rgba(15,23,42,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:56px_56px]" />

        <div className="relative z-10 mx-auto flex min-h-[calc(112svh-12rem)] w-full max-w-7xl flex-col justify-between text-slate-950">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.32em] text-blue-700">ESG Technology</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#102163] md:text-6xl">기술로 실현하는 지속가능성</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              HDMS의 ESG는 선언이 아니라 전력, 냉각, MEP, 모니터링, AI 인프라가 하나로 연결되는 구축 방식입니다.
            </p>
          </div>

          <div className="esg-card-stage mt-16 grid gap-5 lg:grid-cols-3">
            {cards.map((card) => (
              <article key={card.label} className="esg-pull-card group" tabIndex={0}>
                <Image src={card.image} alt={card.alt} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" />
                <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,11,23,0.08),rgba(3,11,23,0.34)_42%,rgba(3,11,23,0.9))]" />
                <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white md:p-7">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-blue-100/85">{card.label}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">{card.title}</h3>
                  <div className="esg-pull-card__detail">
                    <p className="mt-5 text-base leading-7 text-slate-100/90">{card.copy}</p>
                    <ul className="mt-5 grid gap-2">
                      {card.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="esg-value-strip mt-10">
            <div>
              <p>HDMS AI 인프라</p>
              <strong>Power · Cooling · MEP 기반의 Green Data Center</strong>
            </div>
            <div className="esg-value-flow" aria-label="HDMS ESG 인프라 구축 흐름">
              {valueFlow.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="esg-process-section relative overflow-hidden bg-[#eef2f8] px-6 py-24 md:px-10 lg:py-32">
        <div aria-hidden="true" className="esg-process-galaxy absolute left-1/2 top-1/2 z-0 size-[1100px] -translate-x-1/2 -translate-y-1/2 sm:size-[1450px] lg:size-[1850px]">
          <InfrastructureGalaxy />
        </div>
        <div aria-hidden="true" className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,0.58),rgba(238,242,248,0.82)_34%,rgba(238,242,248,0.98)_72%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div data-esg-reveal className="esg-rise-up max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.32em] text-blue-700">Build Process</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#102163] md:text-6xl">인프라 구축 프로세스</h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              HDMS는 전력 인프라에서 냉각, MEP, 모니터링, AI 인프라까지 하나의 흐름으로 설계해 친환경 데이터센터 구축을 완성합니다.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <article data-esg-reveal className="esg-rise-up esg-process-media">
              <Image src="/images/product/esg/전기탑.jpg" alt="전력 인프라 이미지" fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
            </article>
            <article data-esg-reveal className="esg-rise-up esg-process-copy">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.26em] text-blue-700">Power to AI</p>
              <h3>전력부터 AI 인프라까지 연결되는 구축 체계</h3>
              <p>
                고밀도 AI 연산 환경은 안정적인 전력 공급과 냉각, MEP 통합 설계가 함께 움직일 때 지속가능해집니다. HDMS는 각 단계를 분리하지 않고 운영 효율과 에너지 절감 관점에서 연결합니다.
              </p>
            </article>
            <article data-esg-reveal className="esg-rise-up esg-process-copy lg:order-3">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.26em] text-blue-700">Monitoring to Green</p>
              <h3>모니터링 기반의 Green Data Center 운영</h3>
              <p>
                구축 이후에는 모니터링과 운영 데이터가 효율 개선의 기준이 됩니다. 전력, 냉각, 장비 상태를 지속적으로 확인해 안정성과 친환경 운영 목표를 함께 관리합니다.
              </p>
            </article>
            <article data-esg-reveal className="esg-rise-up esg-process-media lg:order-4">
              <Image src="/images/product/esg/모니터링.jpg" alt="데이터센터 모니터링 이미지" fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
            </article>
          </div>

          <div data-esg-reveal className="esg-rise-up esg-process-line mt-20" aria-label="인프라 구축 프로세스">
            {processSteps.map((step) => (
              <div key={step} className="esg-process-node">
                <span />
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}