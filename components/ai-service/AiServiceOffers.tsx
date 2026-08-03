import { offerSteps } from "@/components/ai-service/ai-service-data";

export function AiServiceOffers() {
  return (
    <section className="bg-slate-950 px-6 py-24 text-white sm:px-10 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-[1300px] text-center">
        <p className="mx-auto h-1 w-8 bg-blue-500" />
        <h2 className="mt-6 text-4xl font-semibold tracking-normal">Our Offers</h2>
        <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-slate-300">
          클라우드 전환 계획 수립부터 하이브리드·멀티 클라우드 운영까지, HDMS는 AI 서비스 운영 환경에 맞춘 토털 컨설팅 서비스를 제공합니다.
        </p>

        <div className="mt-14 grid gap-4 lg:grid-cols-4">
          {offerSteps.map((step, index) => (
            <div key={step} className="relative flex min-h-28 items-center justify-center bg-black px-6 py-8 text-lg font-semibold text-white ring-1 ring-white/10 lg:[clip-path:polygon(0_0,88%_0,100%_50%,88%_100%,0_100%,10%_50%)]">
              <span className="absolute left-5 top-4 font-mono text-xs text-blue-300">0{index + 1}</span>
              {step}
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-full border-2 border-blue-500 px-8 py-6 text-lg font-semibold text-blue-200">클라우드 네이티브 응용시스템 구축 방법론</div>
          <div className="rounded-full border-2 border-blue-500 px-8 py-6 text-lg font-semibold text-blue-200">프로젝트 관리 방법론</div>
        </div>
      </div>
    </section>
  );
}
