"use client";

import Image from "next/image";
import { useEffect } from "react";
import { InfrastructureGalaxy } from "@/components/home/infrastructure-galaxy";


const processors = [
  { name: "CPU", items: ["범용 연산", "순차 처리", "시스템 운영"], featured: false },
  { name: "GPU", items: ["대규모 병렬 연산", "AI 학습", "그래픽 처리"], featured: false },
  { name: "NPU", items: ["AI 추론 전용", "낮은 전력 소비", "고속 AI 서비스"], featured: true },
] as const;

const comparisonRows = [
  ["정의", "범용 중앙 처리 장치", "병렬 연산 가속 장치", "AI 추론 최적화 프로세서"],
  ["개발 목적", "시스템 제어와 일반 연산", "그래픽과 대규모 병렬 처리", "실시간 AI 서비스 처리"],
  ["처리 방식", "순차 처리 중심", "대량 병렬 처리", "신경망 연산 특화"],
  ["주요 역할", "운영 체계와 제어", "학습과 고성능 연산", "Inference 서비스 운영"],
  ["활용 분야", "서버, PC, 제어 시스템", "AI 학습, 그래픽, HPC", "AI 서비스, Edge AI, 데이터센터"],
] as const;

const infrastructure = [
  ["AI Computing", "고성능 AI 추론 환경"],
  ["Power Infrastructure", "안정적인 전력 공급"],
  ["Cooling", "고효율 냉각 시스템"],
  ["Intelligent Monitoring", "실시간 상태 모니터링"],
  ["Enterprise Support", "구축부터 운영까지 기술 지원"],
] as const;

export function NpuSolutionPage() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-npu-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="npu-page relative overflow-hidden bg-[#eef2f8] text-slate-950">
      <div aria-hidden="true" className="npu-fixed-bg fixed inset-0 z-0">
        <div className="absolute left-1/2 top-1/2 size-[1200px] -translate-x-1/2 -translate-y-1/2 sm:size-[1550px] lg:size-[2050px]">
          <InfrastructureGalaxy />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_28%,rgba(255,255,255,0.68),rgba(238,242,248,0.84)_34%,rgba(238,242,248,0.98)_72%),linear-gradient(180deg,rgba(248,250,252,0.94),rgba(238,242,248,0.98))]" />
        <div className="absolute inset-0 opacity-65 [background-image:linear-gradient(to_right,rgba(15,23,42,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:56px_56px]" />
      </div>

      <main className="relative z-10">
        <section className="npu-section npu-hero grid min-h-[100svh] items-center gap-14 px-6 pt-32 md:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:px-16">
          <div data-npu-reveal className="npu-rise max-w-3xl">
            <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight text-[#102163] md:text-7xl">NPU Solution</h1>
            <h2 className="mt-6 text-2xl font-semibold text-slate-800 md:text-3xl">차세대 AI Computing Infrastructure</h2>
            <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
              <p>NPU(Neural Processing Unit)는 AI 추론(Inference)에 최적화된 AI 전용 프로세서입니다.</p>
              <p>HDMS는 NPU 기반 AI Computing Infrastructure를 구축하여 고성능 AI 서비스와 뛰어난 전력 효율을 동시에 제공합니다.</p>
              <p>AI 서비스 운영에 필요한 컴퓨팅 환경을 설계하고 구축하여 안정적인 AI 인프라를 제공합니다.</p>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
            </div>
          </div>

          <div data-npu-reveal className="npu-rise npu-hero-visual">
            <Image src="/images/product/npu/AICHIP_.jpg" alt="NPU 기반 AI Chip 네트워크" fill priority sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover" />
            <div aria-hidden="true" className="npu-network-light" />
          </div>
        </section>

        <section className="npu-section px-6 py-24 md:px-10 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div data-npu-reveal className="npu-rise max-w-3xl">
              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#102163] md:text-5xl">AI 서비스 운영을 위한 전용 컴퓨팅</h2>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {processors.map((processor, index) => (
                <article key={processor.name} data-npu-reveal className={`npu-rise npu-processor ${processor.featured ? "npu-processor--featured" : ""}`} style={{ transitionDelay: `${index * 120}ms` }}>
                  <strong>{processor.name}</strong>
                  <ul>{processor.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>

            <div className="mt-16 grid gap-12 lg:grid-cols-[1.18fr_0.82fr]">
              <div data-npu-reveal className="npu-rise npu-comparison" aria-label="CPU GPU NPU 비교표">
                {comparisonRows.map((row) => (
                  <div key={row[0]} className="npu-comparison-row">
                    {row.map((cell) => <span key={cell}>{cell}</span>)}
                  </div>
                ))}
              </div>
              <div data-npu-reveal className="npu-rise npu-why-copy">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.26em] text-blue-700">Inference First</p>
                <h3>왜 NPU인가?</h3>
                <p>AI 서비스는 학습보다 실제 서비스 운영(Inference)의 비중이 훨씬 높습니다.</p>
                <p>NPU는 AI 추론에 최적화된 구조를 통해 GPU 대비 높은 전력 효율과 빠른 응답 속도를 제공합니다.</p>
                <p>기업은 보다 적은 전력으로 더 많은 AI 서비스를 운영할 수 있습니다.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="npu-section px-6 py-24 md:px-10 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div data-npu-reveal className="npu-rise max-w-4xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.32em] text-blue-700">HDMS NPU Infrastructure</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#102163] md:text-6xl">HDMS AI Computing Infrastructure</h2>
              <p className="mt-7 text-lg leading-8 text-slate-700">HDMS는 NPU 서버 공급을 넘어 AI 데이터센터 구축, 전력 인프라, Cooling, MEP, Network, Monitoring, 운영 지원까지 AI Computing Infrastructure를 통합 제공합니다.</p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {infrastructure.map(([title, copy], index) => (
                <article key={title} data-npu-reveal className="npu-rise npu-infra-item" style={{ transitionDelay: `${index * 90}ms` }}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{title}</strong>
                  <p>{copy}</p>
                </article>
              ))}
            </div>

            <div data-npu-reveal className="npu-rise npu-infra-visual mt-16">
              <Image src="/images/product/npu/severs.jpg" alt="NPU 서버와 AI 데이터센터 인프라" fill sizes="100vw" className="object-cover" />
              <div aria-hidden="true" className="npu-network-line" />
              <div className="relative z-10 max-w-2xl p-6 text-white md:p-10 lg:p-14">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.26em] text-blue-200">Integrated AI Infrastructure</p>
                <h3 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">모든 요소가 하나의 AI Infrastructure로 연결됩니다</h3>
              </div>
            </div>

            <p data-npu-reveal className="npu-rise mx-auto mt-14 max-w-4xl text-center text-xl leading-9 text-slate-700">
              HDMS는 AI Computing Infrastructure의 모든 과정을 설계하고 구축하여 기업의 AI 서비스를 더욱 빠르고 안정적이며 효율적으로 운영할 수 있도록 지원합니다.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}