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
  },
  {
    eyebrow: "03 / CONTROL & MONITOR",
    title: "전력 분배와 실시간 모니터링",
    button: "MONITOR",
    image: "/images/home/monitors.jpg",
    imageAlt: "AI 데이터센터 서버랙과 전력 모니터링 환경",
    description:
      "전력 인프라는 공급만으로 완성되지 않습니다. 부하 흐름과 설비 상태를 실시간으로 파악해야 안정적인 AI 운영이 가능합니다.",
    detail:
      "HDMS는 전력 분배, 계통 구성, 모니터링 체계를 함께 설계해 운영자가 전력 상태를 명확히 판단하고 빠르게 대응할 수 있게 합니다.",
  },
];

export function PowerInfrastructureSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [wipeKey, setWipeKey] = useState(0);
  const [cycleKey, setCycleKey] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const activeSlide = activeIndex === null ? null : powerInfrastructureSlides[activeIndex];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.35 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const timer = window.setTimeout(() => {
      const nextIndex = activeIndex === null ? 0 : (activeIndex + 1) % powerInfrastructureSlides.length;
      setWipeKey((key) => key + 1);
      setActiveIndex(nextIndex);
    }, activeIndex === null ? 1200 : 7000);

    return () => window.clearTimeout(timer);
  }, [activeIndex, cycleKey, isInView]);

  const selectSlide = (index: number) => {
    setWipeKey((key) => key + 1);
    setActiveIndex(index);
    setCycleKey((key) => key + 1);
  };

  return (
    <section
      ref={sectionRef}
      id="power-infrastructure"
      className="relative flex min-h-screen items-center overflow-hidden bg-black px-6 py-20 text-white sm:px-10 lg:px-16 xl:px-20"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(250,204,21,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(250,204,21,0.08)_1px,transparent_1px)] [background-size:76px_76px]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col justify-center">
        <div className="relative min-h-[650px] overflow-hidden border border-white/10 bg-black sm:min-h-[760px] lg:min-h-[780px]">
          <AnimatePresence mode="wait" initial={false}>
            {activeSlide ? (
              <motion.article
                key={activeSlide.button}
                className="absolute inset-0 grid grid-rows-[42%_58%] overflow-hidden bg-slate-950"
                initial={{ scale: 0.96, y: 18 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 16 }}
                transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className="relative overflow-hidden"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.52, duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={activeSlide.image}
                    alt={activeSlide.imageAlt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-black/10" />

                </motion.div>

                <motion.div
                  className="flex flex-col justify-start px-7 pb-10 pt-8 sm:px-10 sm:pb-32 sm:pt-10 lg:px-14 lg:pb-36 lg:pt-11"
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.62, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >

                  <h3 className="text-[clamp(2rem,4.2vw,4rem)] font-semibold leading-tight tracking-normal text-white">
                    {activeSlide.title}
                  </h3>
                  <p className="mt-5 max-w-4xl text-base leading-8 text-zinc-200 sm:text-lg sm:leading-8">
                    {activeSlide.description}
                  </p>
                  <p className="mt-3 max-w-4xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
                    {activeSlide.detail}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">

                  </div>
                </motion.div>

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
                className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center md:pb-24"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >

                <h2 className="text-[clamp(3rem,6vw,6rem)] font-semibold leading-none tracking-normal text-white">
                  전력 인프라
                </h2>
                <p className="mt-9 max-w-xl text-sm leading-7 text-zinc-400">
                  AI 데이터센터는 대규모 연산을 안정적으로 수행하기 위해 고신뢰성 전력 인프라가 필요합니다.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="absolute inset-x-0 bottom-10 z-40 hidden items-center justify-center gap-8 px-6 md:flex">
            {powerInfrastructureSlides.map((slide, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={slide.button}
                  type="button"
                  onClick={() => selectSlide(index)}
                  aria-pressed={isActive}
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
        <div className="mt-5 flex gap-3 overflow-x-auto pb-2 md:hidden" aria-label="전력 인프라 모바일 세부 영역 선택">
          {powerInfrastructureSlides.map((slide, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={slide.button}
                type="button"
                onClick={() => selectSlide(index)}
                aria-pressed={isActive}
                className={`min-w-25 border px-5 py-3 font-mono text-[11px] font-bold tracking-[0.18em] transition-all duration-300 ${
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
    </section>
  );
}
