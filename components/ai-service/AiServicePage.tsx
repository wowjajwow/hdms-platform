"use client";

import Image from "next/image";
import { useEffect } from "react";
import { InfrastructureGalaxy } from "@/components/home/infrastructure-galaxy";

const strategyCards = [
  {
    title: "Cloud Strategy",
    body: "AI 서비스 목표, 데이터 흐름, 보안 요구사항을 함께 정리해 클라우드 전환 로드맵을 설계합니다.",
    image: "/images/ai-service/connectionai.jpg",
  },
  {
    title: "Assessment & Migration",
    body: "기존 시스템을 진단하고 비용, 성능, 안정성을 기준으로 단계별 마이그레이션 방안을 수립합니다.",
    image: "/images/home/migrationimg.jpg",
  },
  {
    title: "Cloud Native Operation",
    body: "컨테이너, DevOps, 모니터링 체계를 기반으로 AI 서비스 운영 환경을 안정적으로 고도화합니다.",
    image: "/images/home/cloudimg.jpg",
  },
] as const;

const capabilityCards = [
  ["01", "AI Workload Ready", "추론, 분석, 자동화 워크로드가 안정적으로 동작하도록 컴퓨팅과 운영 구조를 함께 설계합니다."],
  ["02", "Hybrid Cloud", "공공, 금융, 제조 환경에 맞춰 온프레미스와 클라우드 자원을 유연하게 연결합니다."],
  ["03", "Data Center Insight", "전력, 냉각, 네트워크, 보안까지 실제 인프라 운영 관점에서 AI 서비스를 검토합니다."],
  ["04", "Managed Operation", "서비스 전환 후 운영, 관제, 비용 최적화까지 지속 가능한 관리 체계를 제공합니다."],
] as const;

const processSteps = ["Discover", "Design", "Migrate", "Operate"] as const;

export function AiServicePage() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-ai-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="ai-service-page relative overflow-hidden bg-[#eef2f8] text-slate-950">
      <div aria-hidden="true" className="ai-service-fixed-bg fixed inset-0 z-0">
        <div className="absolute left-1/2 top-1/2 size-[1100px] -translate-x-1/2 -translate-y-1/2 opacity-80 sm:size-[1450px] lg:size-[1900px]">
          <InfrastructureGalaxy density="low" interactive={false} />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_28%,rgba(255,255,255,0.66),rgba(238,242,248,0.86)_34%,rgba(238,242,248,0.98)_72%),linear-gradient(180deg,rgba(248,250,252,0.95),rgba(238,242,248,0.98))]" />
        <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgba(15,23,42,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:56px_56px]" />
      </div>

      <main className="relative z-10">
        <section className="npu-section grid min-h-[100svh] items-center gap-14 px-6 pt-32 md:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:px-16 xl:px-20">
          <div data-ai-reveal className="ai-service-rise max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.34em] text-blue-700">AI Service · Cloud Consulting</p>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight text-[#102163] md:text-7xl">AI Service</h1>
            <h2 className="mt-6 text-2xl font-semibold text-slate-800 md:text-3xl">클라우드 기반 AI 운영 환경 설계</h2>
            <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
              <p>HDMS는 AI 서비스가 실제 운영 환경에서 안정적으로 동작하도록 클라우드 전환, 데이터센터 인프라, 운영 체계를 하나로 연결합니다.</p>
              <p>컴퓨팅 자원, 전력, 냉각, 네트워크, 보안을 함께 검토해 빠르게 도입하고 오래 운영할 수 있는 AI 서비스 기반을 만듭니다.</p>
            </div>
          </div>

          <div data-ai-reveal className="ai-service-rise npu-hero-visual">
            <Image src="/images/ai-service/chipai.jpg" alt="AI 서비스 운영을 위한 클라우드 인프라" fill priority sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover" />
            <div aria-hidden="true" className="npu-network-light" />
          </div>
        </section>

        <section className="npu-section px-6 py-24 md:px-10 lg:px-16 lg:py-32 xl:px-20">
          <div className="mx-auto max-w-7xl">
            <div data-ai-reveal className="ai-service-rise max-w-4xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.32em] text-blue-700">AI Operating Blocks</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#102163] md:text-6xl">각진 AI 블록으로 정리한 서비스 전환 구조</h2>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {capabilityCards.map(([label, title, body], index) => (
                <article key={title} data-ai-reveal className="ai-service-rise ai-circuit-card" style={{ transitionDelay: `${index * 90}ms` }}>
                  <span>{label}</span>
                  <strong>{title}</strong>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="npu-section px-6 py-24 md:px-10 lg:px-16 lg:py-32 xl:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div data-ai-reveal className="ai-service-rise">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.32em] text-blue-700">Methodology</p>
                <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#102163] md:text-6xl">전환부터 운영까지 한 흐름으로 설계합니다</h2>
              </div>
              <p data-ai-reveal className="ai-service-rise text-lg leading-8 text-slate-700">전략 수립, 시스템 진단, 마이그레이션, 운영 최적화를 분리하지 않고 하나의 서비스 운영 관점에서 연결합니다.</p>
            </div>

            <div data-ai-reveal className="ai-service-rise ai-service-flow mt-16">
              {processSteps.map((step, index) => (
                <div key={step}>
                  <span>0{index + 1}</span>
                  <strong>{step}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="npu-section px-6 py-24 md:px-10 lg:px-16 lg:py-32 xl:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {strategyCards.map((item, index) => (
                <article key={item.title} data-ai-reveal className="ai-service-rise ai-service-image-line" style={{ transitionDelay: `${index * 110}ms` }}>
                  <div className="relative min-h-[310px] overflow-hidden">
                    <Image src={item.image} alt={item.title} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" />
                  </div>
                  <span>0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
