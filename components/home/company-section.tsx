"use client";

import { useRef, useState } from "react";

export function CompanySection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  const replayVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    setIsVideoEnded(false);
    video.currentTime = 0;
    void video.play();
  };

  return (
    <section
      id="company"
      aria-labelledby="company-hero-title"
      className="relative scroll-mt-24 bg-white p-3 pt-0 transition-[padding] duration-[1100ms] ease-[cubic-bezier(0.76,0,0.24,1)] sm:p-5 sm:pt-0 lg:px-7"
      style={isVideoEnded ? { padding: 0 } : undefined}
    >
      <div
        className="relative min-h-[calc(100svh-116px)] overflow-hidden rounded-[22px] bg-slate-950 transition-[border-radius] duration-[1100ms] ease-[cubic-bezier(0.76,0,0.24,1)] sm:min-h-[calc(100svh-144px)] sm:rounded-[30px]"
        style={isVideoEnded ? { borderRadius: 0 } : undefined}
      >
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover object-center"
          poster="/images/home/home-hero.png"
          autoPlay
          muted
          playsInline
          preload="metadata"
          onEnded={() => setIsVideoEnded(true)}
          aria-hidden="true"
        >
          <source src="/video/HDMS%20MDC.mp4" type="video/mp4" />
        </video>

        <div
          role="img"
          aria-label="HDMS 모듈형 데이터센터 설계와 구축 이미지"
          aria-hidden={!isVideoEnded}
          className="absolute inset-0 overflow-hidden"
        >
          <span
            className="absolute inset-0 block bg-cover bg-center bg-no-repeat transition-transform duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform [clip-path:polygon(0_0,50.15%_0,50.15%_100%,0_100%)]"
            style={{
              backgroundImage: "url('/images/home/HDMS%ED%9A%8C%EC%82%AC%2016x9.png')",
              transform: isVideoEnded ? "translate3d(0,0,0)" : "translate3d(-100%,0,0)",
            }}
          />
          <span
            className="absolute inset-0 block bg-cover bg-center bg-no-repeat transition-transform duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform [clip-path:polygon(49.85%_0,100%_0,100%_100%,49.85%_100%)]"
            style={{
              backgroundImage: "url('/images/home/HDMS%ED%9A%8C%EC%82%AC%2016x9.png')",
              transform: isVideoEnded ? "translate3d(0,0,0)" : "translate3d(100%,0,0)",
            }}
          />
          <span
            aria-hidden="true"
            className={`company-shutter-impact absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white ${
              isVideoEnded ? "is-active" : ""
            }`}
          />
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.04)_24%,rgba(2,6,23,0.16)_56%,rgba(2,6,23,0.88)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.3)_0%,transparent_50%)]"
        />

        <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-10 text-white sm:px-10 sm:pb-14 lg:px-[clamp(3rem,6vw,7rem)] lg:pb-[clamp(3.5rem,8vh,7rem)]">
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-blue-100 sm:text-sm">
            POWERING THE FUTURE
          </p>
          <h1
            id="company-hero-title"
            className="max-w-5xl text-[clamp(1.8rem,3.15vw,3.5rem)] font-semibold leading-[1.18] tracking-[-0.04em] text-white lg:whitespace-nowrap"
          >
            반세기의 전력 기술로 미래를 설계합니다
          </h1>
        </div>

        <button
          type="button"
          onClick={replayVideo}
          aria-label="영상 다시보기"
          aria-hidden={!isVideoEnded}
          tabIndex={isVideoEnded ? 0 : -1}
          className={`absolute right-6 top-6 z-20 grid size-12 place-items-center rounded-full border border-white/30 bg-slate-950/55 text-white shadow-lg backdrop-blur-md transition duration-500 hover:rotate-[-30deg] hover:bg-[#0646a5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:bottom-9 sm:right-9 sm:top-auto ${
            isVideoEnded ? "scale-100 opacity-100" : "pointer-events-none scale-75 opacity-0"
          }`}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-none stroke-current" strokeWidth="2">
            <path d="M4 12a8 8 0 1 0 2.34-5.66L4 8.67" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 4v4.67h4.67" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
