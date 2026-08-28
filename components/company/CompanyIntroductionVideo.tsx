"use client";

import { useEffect, useRef } from "react";

export function CompanyIntroductionVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const desktop = window.matchMedia("(min-width: 768px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && desktop.matches && !reducedMotion.matches) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.55 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#030b17] px-4 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-10 grid gap-5 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="font-mono text-xs font-bold tracking-[0.26em] text-blue-300">INTRODUCTION FILM</p>
            <h2 className="mt-5 text-3xl font-semibold sm:text-5xl">기술을 연결해 미래를 구축합니다.</h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-300 lg:justify-self-end">
            전력 설비에서 데이터센터와 AI 인프라까지, 서로 다른 전문 기술을 하나의 실행 가능한 시스템으로 완성하는 HDMS의 방향을 담았습니다.
          </p>
        </div>

        <div className="relative overflow-hidden border border-white/15 bg-black shadow-[0_32px_100px_rgba(0,0,0,0.42)]">
          <video
            ref={videoRef}
            className="block aspect-video w-full object-cover"
            controls
            muted
            playsInline
            preload="metadata"
            poster="/images/home/HDMS회사 16x9.png"
            aria-label="HDMS 회사소개 영상"
          >
            <source src="/video/Introduction.mp4" type="video/mp4" />
            브라우저에서 영상을 재생할 수 없습니다.
          </video>
        </div>
        <p className="mt-4 text-sm text-slate-500 md:hidden">재생 버튼을 눌러 회사소개 영상을 확인해 주세요.</p>
      </div>
    </section>
  );
}
