import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GPU 인프라",
  description: "고성능 AI 워크로드를 위한 HDMS GPU 컴퓨팅 및 데이터센터 인프라 구축 역량을 소개합니다.",
};

const workloads = [
  { number: "01", title: "AI Training", description: "대규모 데이터와 반복 연산이 필요한 모델 학습을 위한 고밀도 병렬 컴퓨팅 환경" },
  { number: "02", title: "AI Inference", description: "서비스 응답 속도와 처리량을 고려한 안정적인 AI 추론 운영 기반" },
  { number: "03", title: "Simulation & Analytics", description: "시뮬레이션, 렌더링, 데이터 분석 등 연산 집약형 업무를 위한 가속 환경" },
] as const;

const infrastructure = [
  { label: "COMPUTE", title: "GPU Server", description: "워크로드와 확장 계획을 기준으로 컴퓨팅 밀도와 서버 구성을 검토합니다." },
  { label: "NETWORK", title: "High-speed Fabric", description: "노드 간 데이터 이동과 스토리지 연결에서 병목을 줄이는 네트워크 구조를 설계합니다." },
  { label: "POWER", title: "Stable Power", description: "고밀도 랙의 전력 수요와 이중화 조건을 반영해 안정적인 전력 공급 체계를 구성합니다." },
  { label: "COOLING", title: "Thermal Management", description: "발열량과 랙 배치를 고려해 공랭·수랭을 포함한 냉각 방식을 검토합니다." },
] as const;

const process = ["워크로드 및 목표 성능 분석", "서버·네트워크·스토리지 구성", "전력과 냉각 용량 검토", "구축·검증 및 확장 계획 수립"] as const;

export default function GpuPage() {
  return (
    <div className="overflow-hidden bg-[#f8fafc] text-slate-950">
      <section className="relative min-h-[calc(100svh-124px)] bg-[#030b17] px-6 py-20 text-white sm:px-10 lg:px-16 xl:px-20">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(37,99,235,0.34),transparent_33%),linear-gradient(135deg,#030b17,#071a3d)]" />
        <div aria-hidden="true" className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(96,165,250,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(96,165,250,0.14)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="relative mx-auto grid min-h-[calc(100svh-284px)] max-w-[1500px] items-center gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative z-10 max-w-3xl">
            <p className="font-mono text-xs font-bold tracking-[0.3em] text-blue-300">GPU INFRASTRUCTURE</p>
            <h1 className="mt-6 text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.9] tracking-[-0.05em]">Accelerate<br />Everything.</h1>
            <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-300">GPU의 연산 성능이 실제 서비스 성과로 이어지도록 서버부터 네트워크, 전력과 냉각까지 하나의 인프라로 설계합니다.</p>
          </div>
          <div className="relative min-h-[420px] lg:min-h-[680px]">
            <div className="absolute inset-0 rounded-full bg-blue-500/15 blur-[100px]" />
            <Image src="/images/product/Rack model 01.png" alt="HDMS GPU 컴퓨팅 랙 모델" fill priority sizes="(min-width: 1024px) 58vw, 100vw" className="object-contain drop-shadow-[0_40px_55px_rgba(0,0,0,0.5)]" />
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32 xl:px-20">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-bold tracking-[0.26em] text-[#0d52ce]">GPU WORKLOADS</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#102163] sm:text-6xl">연산 성능을<br />비즈니스 속도로</h2>
            </div>
            <p className="max-w-2xl border-t border-slate-300 pt-7 text-lg leading-9 text-slate-600 lg:justify-self-end">GPU는 여러 연산을 동시에 처리하는 병렬 구조를 기반으로 AI 학습과 추론, 시뮬레이션과 분석 업무를 가속합니다. 중요한 것은 장비 한 대가 아니라 전체 워크로드가 안정적으로 흐르는 환경입니다.</p>
          </div>
          <div className="mt-16 grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-3">
            {workloads.map((item) => (
              <article key={item.number} className="min-h-72 bg-white p-8 transition-colors hover:bg-blue-50">
                <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#0d52ce]">{item.number}</span>
                <h3 className="mt-14 text-2xl font-semibold text-[#102163]">{item.title}</h3>
                <p className="mt-5 leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071a3d] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32 xl:px-20">
        <div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="relative min-h-[480px] overflow-hidden border border-white/15 bg-[#030b17] lg:min-h-[680px]">
            <Image src="/images/product/Rack.png" alt="GPU 서버와 스토리지를 포함한 랙 구성" fill sizes="(min-width: 1024px) 46vw, 100vw" className="object-contain p-10 sm:p-16" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.12),transparent_55%)]" />
          </div>
          <div>
            <p className="font-mono text-xs font-bold tracking-[0.26em] text-blue-300">BUILT AS A SYSTEM</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">GPU를 넘어<br />인프라 전체를 봅니다</h2>
            <p className="mt-7 max-w-2xl text-lg leading-9 text-slate-300">고성능 GPU 환경은 컴퓨팅, 네트워크, 전력과 냉각이 균형을 이룰 때 안정적인 성능을 유지할 수 있습니다.</p>
            <div className="mt-12 grid gap-7 sm:grid-cols-2">
              {infrastructure.map((item) => (
                <article key={item.label} className="border-t border-white/20 pt-5">
                  <span className="font-mono text-[11px] font-bold tracking-[0.22em] text-blue-300">{item.label}</span>
                  <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32 xl:px-20">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="font-mono text-xs font-bold tracking-[0.26em] text-[#0d52ce]">DEPLOYMENT APPROACH</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#102163] sm:text-6xl">도입부터 확장까지<br />하나의 계획으로</h2>
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">현재 필요한 성능과 앞으로의 확장을 함께 고려해 과도하거나 부족하지 않은 GPU 인프라 구축 방향을 수립합니다.</p>
            </div>
            <ol className="border-t border-slate-300">
              {process.map((item, index) => (
                <li key={item} className="grid grid-cols-[56px_1fr] items-center border-b border-slate-200 py-7 sm:grid-cols-[90px_1fr]">
                  <span className="font-mono text-xs font-bold text-[#0d52ce]">0{index + 1}</span>
                  <strong className="text-xl font-semibold text-[#102163] sm:text-2xl">{item}</strong>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-20 flex flex-col gap-7 bg-[#0d52ce] p-8 text-white sm:p-12 lg:flex-row lg:items-center lg:justify-between">
            <div><p className="font-mono text-xs font-bold tracking-[0.22em] text-blue-200">GPU PROJECT</p><h2 className="mt-4 text-3xl font-semibold sm:text-4xl">GPU 인프라 도입을 함께 검토하세요.</h2></div>
            <Link href="/contact" className="inline-flex w-fit rounded-full bg-white px-8 py-4 font-semibold text-[#0d52ce] transition hover:bg-slate-100">GPU 도입 문의</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
