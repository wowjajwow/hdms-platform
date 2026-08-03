"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const powerInfrastructureSlides = [
  {
    eyebrow: "01 / TRANSFORM & DISTRIBUTE",
    title: "변압기와 배전 시스템",
    button: "TRANSFORM",
    image: "/images/home/변압기1.jpg",
    imageAlt: "데이터센터 전력 인프라를 위한 변압기 설비",
    description:
      "AI 데이터센터는 고밀도 연산 장비에 안정적인 전력을 공급하기 위해 신뢰성 높은 변압기와 수배전 체계가 필요합니다.",
    detail:
      "HDMS는 부하 특성, 증설 계획, 이중화 구성을 고려해 변압기와 배전 시스템을 데이터센터 환경에 맞게 설계합니다.",
    items: ["변압기", "배전 시스템"],
  },
  {
    eyebrow: "02 / BACKUP & STORAGE",
    title: "UPS와 ESS 기반 전력 안정화",
    button: "STABILIZE",
    image: "/images/home/변압기2.jpg",
    imageAlt: "전력 안정화를 위한 수배전 및 백업 전력 설비",
    description:
      "순간적인 전압 변동과 정전은 AI 운영의 연속성을 위협합니다. UPS와 ESS는 데이터센터의 무중단 운영을 지탱하는 핵심 장비입니다.",
    detail:
      "HDMS는 UPS, ESS, 비상 전원 연계를 통합해 장애 상황에서도 연산 환경이 안정적으로 유지되도록 전력 백업 구조를 구축합니다.",
    items: ["UPS", "ESS"],
  },
  {
    eyebrow: "03 / CONTROL & MONITOR",
    title: "전력 분배와 실시간 모니터링",
    button: "MONITOR",
    image: "/images/home/Rack #1.png",
    imageAlt: "AI 데이터센터 서버랙과 전력 모니터링 환경",
    description:
      "전력 인프라는 공급만으로 완성되지 않습니다. 부하 흐름과 설비 상태를 실시간으로 파악해야 안정적인 AI 운영이 가능합니다.",
    detail:
      "HDMS는 전력 분배, 계통 구성, 모니터링 체계를 함께 설계해 운영자가 전력 상태를 명확히 판단하고 빠르게 대응할 수 있게 합니다.",
    items: ["전력 분배", "전력 모니터링"],
  },
];

export function PowerInfrastructureSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [wipeKey, setWipeKey] = useState(0);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeSlide = activeIndex === null ? null : powerInfrastructureSlides[activeIndex];
  const activeDisplayIndex = activeIndex === null ? 0 : activeIndex + 1;

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  const openSlide = (index: number) => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
    setWipeKey((key) => key + 1);
    setActiveIndex(index);

    resetTimer.current = setTimeout(() => {
      setActiveIndex(null);
    }, 5000);
  };

  return (
    <section
      id="power-infrastructure"
      className="relative overflow-hidden bg-black px-6 py-24 text-white sm:px-10 lg:px-16 xl:px-20"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(250,204,21,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(250,204,21,0.08)_1px,transparent_1px)] [background-size:76px_76px]"
      />

      <div className="relative z-10 mx-auto flex min-h-[720px] max-w-[1600px] flex-col justify-center">
        <div className="relative min-h-[650px] overflow-hidden border border-white/10 bg-black">
          <AnimatePresence mode="wait" initial={false}>
            {activeSlide ? (
              <motion.article
                key={activeSlide.button}
                className="absolute inset-0 grid grid-rows-[46%_54%] overflow-hidden bg-slate-950"
                initial={{ opacity: 0, scale: 0.86, y: 28 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 16 }}
                transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={activeSlide.image}
                    alt={activeSlide.imageAlt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-black/10" />
                  <p className="absolute left-6 top-6 font-mono text-xs font-bold tracking-[0.28em] text-amber-200 sm:left-8 sm:top-8">
                    {activeSlide.eyebrow}
                  </p>
                </div>

                <div className="flex flex-col justify-center px-7 py-8 sm:px-10 lg:px-14">
                  <p className="font-mono text-xs font-bold tracking-[0.22em] text-amber-300">
                    {String(activeDisplayIndex).padStart(2, "0")} / 03
                  </p>
                  <h3 className="mt-5 text-[clamp(2.2rem,5vw,4.5rem)] font-semibold leading-tight tracking-normal text-white">
                    {activeSlide.title}
                  </h3>
                  <p className="mt-6 max-w-5xl text-base leading-8 text-zinc-200 sm:text-lg sm:leading-9">
                    {activeSlide.description}
                  </p>
                  <p className="mt-4 max-w-5xl text-base leading-8 text-zinc-400 sm:text-lg sm:leading-9">
                    {activeSlide.detail}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {activeSlide.items.map((item) => (
                      <span
                        key={item}
                        className="border border-amber-300/30 bg-amber-300/[0.08] px-4 py-2 text-xs font-bold text-amber-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.div
                  key={wipeKey}
                  className="power-detail-wipe absolute inset-y-0 -left-[25%] z-30 w-[150%] bg-amber-300"
                  initial={{ x: "-110%", skewX: -12 }}
                  animate={{ x: "110%", skewX: -12 }}
                  transition={{ duration: 0.72, ease: [0.65, 0, 0.35, 1] }}
                />
              </motion.article>
            ) : (
              <motion.div
                key="power-menu"
                className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-mono text-xs font-bold tracking-[0.35em] text-amber-300">
                  06 / POWER INFRASTRUCTURE
                </p>
                <h2 className="mt-12 text-[clamp(3rem,6vw,6rem)] font-semibold leading-none tracking-normal text-white">
                  전력 인프라
                </h2>
                <p className="mt-9 max-w-xl text-sm leading-7 text-zinc-400">
                  AI 데이터센터는 대규모 연산을 안정적으로 수행하기 위해 고신뢰성 전력 인프라가 필요합니다.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="absolute inset-x-0 bottom-10 z-40 flex flex-col items-center justify-center gap-3 px-6 sm:flex-row sm:gap-8">
            {powerInfrastructureSlides.map((slide, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={slide.button}
                  type="button"
                  onClick={() => openSlide(index)}
                  className={`min-w-40 border px-7 py-4 font-mono text-xs font-bold tracking-[0.22em] transition-all duration-300 ${
                    isActive
                      ? "border-amber-300 bg-amber-300 text-black"
                      : "border-white/25 bg-black/45 text-zinc-200 backdrop-blur-sm hover:border-amber-300 hover:bg-amber-300 hover:text-black"
                  }`}
                >
                  {slide.button}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
