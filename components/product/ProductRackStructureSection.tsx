"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const rackGroups = [
  {
    range: "RACK 01",
    title: "GPU · Storage",
    power: "19.1 kW",
    items: ["NVIDIA GPU Server", "Cloud:IA Storage Server", "SCS CDU", "Etrenne Network"],
  },
  {
    range: "RACK 02—03",
    title: "NPU Compute",
    power: "21.2—24.2 kW",
    items: ["FuriosaAI NPU Appliance", "FuriosaAI NPU Server", "Rebellions NPU Appliance", "Etrenne Network"],
  },
  {
    range: "RACK 04—05",
    title: "Platform · Security",
    power: "6.7—7.1 kW",
    items: ["Cloud:IA Compute", "Management · Monitoring", "DCIM · Storage", "Firewall · IPS · WAF"],
  },
  {
    range: "RACK 06",
    title: "NPU Expansion",
    power: "21.2 kW",
    items: ["FuriosaAI NPU Server", "FuriosaAI NPU Appliance", "Etrenne Network", "확장형 AI 추론 자원"],
  },
];

export function ProductRackStructureSection() {
  const [isRackDetailOpen, setIsRackDetailOpen] = useState(false);

  useEffect(() => {
    if (!isRackDetailOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsRackDetailOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isRackDetailOpen]);

  return (
    <section className="overflow-hidden bg-[#f4f7fb] px-5 py-24 text-slate-950 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-7 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3 text-xs font-bold tracking-[.24em] text-[#0754d6]"><span className="h-px w-9 bg-blue-500" />RACK ARCHITECTURE</div>
            <h2 className="mt-6 text-4xl font-extrabold tracking-[-.05em] sm:text-6xl">하나의 모듈,<br /><span className="text-[#0754d6]">완성된 랙 구조</span></h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-600 lg:justify-self-end sm:text-lg">GPU·NPU 연산 자원부터 스토리지, 네트워크, 보안과 통합 관제까지 6개 랙에 목적별로 구성합니다. 워크로드와 운영 규모에 맞춰 각 랙의 역할과 밀도를 유연하게 설계합니다.</p>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_35px_90px_-45px_rgba(15,40,90,.28)] sm:p-7 lg:p-10">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#073886] via-[#0d62de] to-cyan-400" />
          <div className="relative aspect-[1016/571] min-h-[280px] w-full">
            <Image src="/images/product/mdc-ract-structure.png" alt="HDMS MDC 6개 랙 구성도: GPU, NPU, 스토리지, 플랫폼, 보안 및 관리 시스템" fill sizes="(min-width: 1400px) 1240px, 94vw" className="object-contain" />
          </div>
          <div className="flex items-center justify-between border-t border-slate-100 px-2 pb-1 pt-5 text-[11px] font-semibold tracking-[.13em] text-slate-400 sm:px-3"><span>HDMS MDC · REFERENCE ARCHITECTURE</span><span>6 RACKS / 42U</span></div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rackGroups.map((rack, index) => {
            const content = <>
              <div className="flex items-start justify-between gap-3"><p className="font-mono text-xs font-bold tracking-[.12em] text-blue-600">{rack.range}</p><span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold text-blue-700">{rack.power}</span></div>
              <h3 className="mt-6 text-xl font-extrabold tracking-tight">{rack.title}</h3>
              <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
                {rack.items.map((item) => <li key={item} className="flex gap-2.5 text-xs leading-5 text-slate-600"><span className="mt-2 size-1 shrink-0 rounded-full bg-blue-500" />{item}</li>)}
              </ul>
              {index === 0 && <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-blue-600">실제 구성 보기 <span aria-hidden="true">→</span></span>}
            </>;
            const className = "group rounded-2xl border border-slate-200 bg-white p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_22px_50px_-30px_rgba(0,71,186,.35)]";

            return index === 0 ? (
              <button key={rack.range} type="button" onClick={() => setIsRackDetailOpen(true)} className={`${className} cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2`} aria-haspopup="dialog">{content}</button>
            ) : (
              <article key={rack.range} className={className}>{content}</article>
            );
          })}
        </div>

        <div className="mt-12 grid overflow-hidden rounded-2xl bg-[#08245b] text-white sm:grid-cols-3">
          <div className="p-7 sm:p-8"><p className="text-3xl font-extrabold text-blue-300">6 Racks</p><p className="mt-2 text-sm text-blue-100/60">컴퓨팅·플랫폼 기능 분리 구성</p></div>
          <div className="border-white/10 p-7 sm:border-l sm:p-8"><p className="text-3xl font-extrabold text-blue-300">42U</p><p className="mt-2 text-sm text-blue-100/60">표준 랙 단위의 높은 호환성</p></div>
          <div className="border-white/10 p-7 sm:border-l sm:p-8"><p className="text-3xl font-extrabold text-blue-300">GPU + NPU</p><p className="mt-2 text-sm text-blue-100/60">학습과 추론을 아우르는 하이브리드 구성</p></div>
        </div>
      </div>

      {isRackDetailOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setIsRackDetailOpen(false); }}>
          <div role="dialog" aria-modal="true" aria-labelledby="rack-detail-title" className="relative grid max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[1.75rem] bg-white shadow-2xl lg:grid-cols-[.9fr_1.1fr]">
            <button type="button" onClick={() => setIsRackDetailOpen(false)} className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-xl text-slate-500 shadow-sm transition hover:bg-slate-100 hover:text-slate-950" aria-label="랙 상세 닫기">×</button>

            <div className="relative min-h-[430px] bg-[#f4f6f8] sm:min-h-[600px] lg:min-h-[680px]">
              <Image src="/images/product/Rack.png" alt="HDMS RACK 01 GPU 및 스토리지 실제 구성" fill sizes="(min-width: 1024px) 45vw, 92vw" className="object-contain p-8 sm:p-12" />
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-12 lg:p-14">
              <p className="text-xs font-bold tracking-[.2em] text-blue-600">REFERENCE RACK · 19.1 kW</p>
              <h2 id="rack-detail-title" className="mt-4 text-3xl font-extrabold tracking-[-.04em] text-slate-950 sm:text-4xl">RACK 01<br /><span className="text-blue-600">GPU &amp; Storage</span></h2>
              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">AI 학습을 위한 GPU 연산과 고속 스토리지, 네트워크 및 수냉 장치를 하나의 표준 42U 랙에 통합한 기준 구성입니다.</p>

              <dl className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
                <div className="grid grid-cols-[120px_1fr] gap-4 py-4"><dt className="text-xs font-bold text-slate-400">NETWORK</dt><dd className="text-sm font-semibold text-slate-800">Etrenne 5320 · 48P</dd></div>
                <div className="grid grid-cols-[120px_1fr] gap-4 py-4"><dt className="text-xs font-bold text-slate-400">STORAGE</dt><dd className="text-sm font-semibold text-slate-800">Cloud:IA Storage Server</dd></div>
                <div className="grid grid-cols-[120px_1fr] gap-4 py-4"><dt className="text-xs font-bold text-slate-400">COMPUTE</dt><dd className="text-sm font-semibold text-slate-800">NVIDIA GPU Server</dd></div>
                <div className="grid grid-cols-[120px_1fr] gap-4 py-4"><dt className="text-xs font-bold text-slate-400">COOLING</dt><dd className="text-sm font-semibold text-slate-800">SCS · CDU 수냉 시스템</dd></div>
              </dl>

              <p className="mt-6 text-xs leading-5 text-slate-400">* 실제 장비와 배치는 고객 워크로드 및 구축 환경에 따라 최적화됩니다.</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
