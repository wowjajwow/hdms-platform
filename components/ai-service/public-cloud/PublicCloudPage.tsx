import Image from "next/image";
import { challenges, features, offers, policyDrivers } from "@/components/ai-service/public-cloud/public-cloud-data";

export function PublicCloudPage() {
  return (
    <div className="bg-white text-slate-950">
      <section className="relative overflow-hidden bg-slate-950 px-6 pb-24 pt-40 text-white sm:px-10 lg:px-16 xl:px-20">
        <Image
          src="/images/ai-service/connectionai.jpg"
          alt="공공 클라우드 연결 인프라"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-42"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.95)_0%,rgba(2,6,23,0.72)_48%,rgba(2,6,23,0.36)_100%)]" />
        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(to_right,rgba(59,130,246,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.1)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="relative z-10 mx-auto max-w-[1400px]">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">AI Service · Public Cloud</p>
          <h1 className="mt-8 max-w-5xl text-[clamp(2.8rem,6vw,7rem)] font-semibold leading-none tracking-normal">
            공공 클라우드 전환,
            <br />
            컨설팅부터 관리까지
          </h1>
          <p className="mt-8 max-w-4xl text-lg leading-9 text-slate-200">
            공공 기관 및 지자체를 위한 맞춤형 클라우드 전환 설계, 구축, 운영을 지원합니다. 기존 시스템 분석부터 마이그레이션, 관리 서비스, 비용 최적화까지 공공 전담 컨설팅을 제공합니다.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16 xl:px-20">
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative min-h-[360px] overflow-hidden bg-slate-950 shadow-[0_30px_90px_-60px_rgba(15,23,42,0.9)]">
            <Image
              src="/images/ai-service/chipai.jpg"
              alt="공공 클라우드 AI 기술 기반"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/55 to-transparent" />
          </div>
          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
            {policyDrivers.map((item) => (
              <article key={item.title} className="border border-blue-100 bg-blue-50/70 p-7">
                <p className="font-mono text-xs font-bold tracking-[0.22em] text-[#0047ba]">{item.label}</p>
                <h2 className="mt-4 text-2xl font-semibold text-slate-950">{item.title}</h2>
                <p className="mt-4 text-base leading-7 text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24 sm:px-10 lg:px-16 xl:px-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center">
            <p className="mx-auto h-1 w-8 bg-[#0047ba]" />
            <h2 className="mt-6 text-4xl font-semibold tracking-normal">Customer Challenges</h2>
            <p className="mx-auto mt-6 max-w-5xl text-base leading-8 text-slate-700">
              정부는 공공 정보 시스템의 클라우드 전환을 통해 전자정부를 고도화하고 공공 서비스의 디지털화와 주요 공공 데이터 개방을 가속화하고 있습니다.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {challenges.map((challenge) => (
              <article key={challenge.title} className="bg-white p-8 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:ring-blue-100">
                <h3 className="text-2xl font-semibold text-[#0047ba]">{challenge.title}</h3>
                <p className="mt-5 text-base leading-8 text-slate-700">{challenge.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-24 text-white sm:px-10 lg:px-16 xl:px-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="h-1 w-8 bg-blue-400" />
              <h2 className="mt-6 text-4xl font-semibold tracking-normal">Our Offers</h2>
            </div>
            <p className="max-w-5xl text-base leading-8 text-slate-300">
              행정 기관과 지자체를 위한 공공 특화 통합 방법론을 토대로 인프라 및 플랫폼 설계, 시스템 구축, 클라우드 관리, 보안, 비용 최적화 서비스를 제공합니다.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {offers.map((offer, index) => (
              <article key={offer.title} className="border border-white/10 bg-white/[0.04] p-6">
                <p className="font-mono text-xs font-bold text-blue-300">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{offer.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{offer.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 lg:px-16 xl:px-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <p className="h-1 w-8 bg-[#0047ba]" />
              <h2 className="mt-6 text-4xl font-semibold tracking-normal">Key Features</h2>
              <p className="mt-6 max-w-4xl text-base leading-8 text-slate-700">
                공공 클라우드 설계·구축·관리 경험과 AI, 빅데이터 기술 인력을 통해 공공 부문의 디지털 전환을 가속합니다.
              </p>
            </div>
            <div className="relative min-h-[320px] overflow-hidden bg-slate-950">
              <Image
                src="/images/ai-service/keyAi.jpg"
                alt="공공 클라우드 핵심 기능"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 to-transparent" />
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <article key={feature.title} className="bg-slate-50 p-8 ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:bg-blue-50/60 hover:ring-blue-100">
                <h3 className="text-2xl font-semibold text-[#0047ba]">{feature.title}</h3>
                <p className="mt-5 text-base leading-8 text-slate-700">{feature.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
