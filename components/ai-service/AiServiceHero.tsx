import Image from "next/image";

export function AiServiceHero() {
  return (
    <section className="relative min-h-[720px] overflow-hidden bg-black pt-24 text-white">
      <Image
        src="/images/ai-service/chipai.jpg"
        alt="AI 클라우드 관제와 컨설팅을 위한 모니터링 화면"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-82"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.72)_42%,rgba(0,0,0,0.32)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_42%,rgba(0,71,186,0.28),transparent_32%),radial-gradient(circle_at_70%_38%,rgba(0,71,186,0.18),transparent_36%)]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(720px-6rem)] max-w-[1500px] flex-col justify-center px-6 py-24 sm:px-10 lg:px-16 xl:px-20">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">
          AI Service · Cloud Consulting
        </p>
        <h1 className="mt-8 bg-gradient-to-r from-blue-400 via-blue-400 to-blue-300 bg-clip-text text-[clamp(3rem,6vw,7rem)] font-semibold leading-none tracking-normal text-transparent">
          AI Service
        </h1>
        <div className="mt-8 max-w-3xl space-y-3 text-lg font-medium leading-9 text-white sm:text-xl">
          <p>Cloud First.</p>
          <p>고객의 AI 운영 환경에 최적화된 클라우드 전환과 운영 혁신의 방향을 제시합니다.</p>
        </div>
      </div>
    </section>
  );
}
