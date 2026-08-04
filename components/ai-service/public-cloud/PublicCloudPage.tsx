"use client";

import Image from "next/image";
import { useEffect } from "react";

const policyBlocks = [
  ["01", "Public Cloud Readiness", "공공기관의 보안, 규정, 업무 연속성 기준에 맞춰 클라우드 전환 준비도를 진단합니다."],
  ["02", "Migration Roadmap", "업무 중요도와 시스템 의존성을 기준으로 단계별 전환 순서와 실행 계획을 수립합니다."],
  ["03", "Hybrid Governance", "공공 클라우드와 민간 클라우드가 함께 운영되는 환경의 관리 기준을 설계합니다."],
  ["04", "Managed Security", "접근 통제, 데이터 보호, 취약점 점검, 운영 감사까지 관리 가능한 보안 체계를 만듭니다."],
] as const;

const offerCards = [
  { title: "전환 컨설팅", body: "현황 분석, 목표 구조 정의, 예산과 일정에 맞춘 전환 전략을 제공합니다." },
  { title: "구축 및 마이그레이션", body: "서비스 영향도를 낮추는 방식으로 클라우드 환경 구축과 이전을 수행합니다." },
  { title: "운영 관리", body: "모니터링, 장애 대응, 비용 관리, 성능 최적화를 하나의 운영 체계로 연결합니다." },
  { title: "보안 강화", body: "공공 부문 기준에 맞춘 보안 설계와 지속적인 점검 프로세스를 제공합니다." },
  { title: "비용 최적화", body: "사용량과 자원 배치를 분석해 전환 이후 운영 비용을 꾸준히 관리합니다." },
] as const;

const challengeRows = [
  ["Legacy Systems", "기존 시스템의 구조와 연계 관계를 분석해 안전한 전환 범위를 정합니다."],
  ["Compliance", "공공 보안 기준과 업무 규정을 반영한 클라우드 운영 체계를 설계합니다."],
  ["New Workloads", "AI, 빅데이터, IoT 등 신규 서비스를 수용할 수 있는 확장 구조를 준비합니다."],
] as const;

export function PublicCloudPage() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-public-reveal]");
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
    <div className="public-cloud-page relative overflow-hidden bg-[#eef2f8] text-slate-950">
      <div aria-hidden="true" className="public-cloud-fixed-bg fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[#f8fafc]" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-[15%] top-[5%] h-[80%] w-[75%] rounded-full bg-blue-200/40 blur-[140px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 left-[20%] size-[600px] rounded-full bg-cyan-100/60 blur-[140px]" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-[15%] select-none overflow-hidden whitespace-nowrap text-center text-[22vw] font-black leading-none tracking-normal text-slate-900/[0.025]">HDMS</div>
      </div>

      <main className="relative z-10">
        <section className="npu-section grid min-h-[100svh] items-center gap-14 px-6 pt-32 md:px-10 lg:grid-cols-[0.94fr_1.06fr] lg:px-16 xl:px-20">
          <div data-public-reveal className="public-cloud-rise max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.34em] text-blue-700">AI Service · Public Cloud</p>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight text-[#102163] md:text-7xl">
              공공클라우드 전환,
              <br />컨설팅부터 관리까지
            </h1>
            <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-700 md:text-xl md:leading-9">
              HDMS는 공공기관과 지자체의 클라우드 전환을 위해 현황 진단, 구조 설계, 마이그레이션, 보안 및 운영 관리를 통합 지원합니다.
            </p>
          </div>

          <div data-public-reveal className="public-cloud-rise npu-hero-visual">
            <Image src="/images/ai-service/connectionai.jpg" alt="공공클라우드 연결 인프라" fill priority sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover" />
            <div aria-hidden="true" className="npu-network-light" />
          </div>
        </section>

        <section className="npu-section px-6 py-24 md:px-10 lg:px-16 lg:py-32 xl:px-20">
          <div className="mx-auto max-w-7xl">
            <div data-public-reveal className="public-cloud-rise max-w-4xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.32em] text-blue-700">Public Cloud Framework</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#102163] md:text-6xl">정책, 보안, 운영을 각진 블록으로 구조화합니다</h2>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {policyBlocks.map(([label, title, body], index) => (
                <article key={title} data-public-reveal className="public-cloud-rise ai-circuit-card" style={{ transitionDelay: `${index * 90}ms` }}>
                  <span>{label}</span>
                  <strong>{title}</strong>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="npu-section px-6 py-24 md:px-10 lg:px-16 lg:py-32 xl:px-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div data-public-reveal className="public-cloud-rise npu-hero-visual min-h-[420px]">
              <Image src="/images/ai-service/infraimg.jpg" alt="공공클라우드 운영 인프라" fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
              <div aria-hidden="true" className="npu-network-line" />
            </div>
            <div data-public-reveal className="public-cloud-rise">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.32em] text-blue-700">Customer Challenges</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#102163] md:text-6xl">공공 전환 과제를 실행 단위로 나눕니다</h2>
              <div className="mt-10 grid gap-7">
                {challengeRows.map(([title, body]) => (
                  <article key={title} className="public-cloud-line-item">
                    <span>↳</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="public-cloud-invert relative overflow-hidden px-6 py-24 text-white md:px-10 lg:px-16 lg:py-32 xl:px-20">
          <div aria-hidden="true" className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_38%,rgba(0,71,186,0.22),rgba(3,11,23,0.9)_42%,rgba(3,11,23,0.98)),linear-gradient(180deg,rgba(3,11,23,0.96),rgba(3,11,23,0.92))]" />
          <div aria-hidden="true" className="absolute inset-0 z-0 opacity-35 [background-image:linear-gradient(to_right,rgba(96,165,250,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(96,165,250,0.14)_1px,transparent_1px)] [background-size:64px_64px]" />
          <div className="relative z-10 mx-auto max-w-7xl">
            <div data-public-reveal className="public-cloud-rise grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.32em] text-blue-200">Our Offers</p>
                <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">공공 특화 클라우드 서비스</h2>
              </div>
              <p className="text-lg leading-8 text-slate-300">전환 전략부터 구축, 운영, 보안, 비용 최적화까지 공공 서비스 운영에 필요한 항목을 한 흐름으로 제공합니다.</p>
            </div>

            <div data-public-reveal className="public-cloud-rise public-cloud-offer-flow mt-16">
              {offerCards.map((offer, index) => (
                <article key={offer.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{offer.title}</h3>
                  <p>{offer.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

