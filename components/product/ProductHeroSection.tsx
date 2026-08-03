import Image from "next/image";
import Link from "next/link";

export function ProductHeroSection() {
  return (
    <section className="relative flex min-h-[100svh] w-full items-center overflow-hidden border-b border-slate-200 bg-[#f8fafc] pt-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-[15%] top-[5%] h-[80%] w-[75%] rounded-full bg-blue-200/40 blur-[140px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 left-[20%] size-[600px] rounded-full bg-cyan-100/60 blur-[140px]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-[15%] select-none overflow-hidden whitespace-nowrap text-center text-[22vw] font-black leading-none tracking-[-0.08em] text-slate-900/[0.025]">HDMS</div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col px-6 py-16 sm:px-10 lg:min-h-[820px] lg:justify-center lg:px-16 lg:py-20 xl:px-20">
        <div className="hero-copy relative z-20 max-w-xl lg:-top-14 xl:max-w-2xl">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-10 bg-[#0047ba]" />
            <p className="text-xs font-bold tracking-[0.24em] text-[#0047ba] sm:text-sm">HDMS INTEGRATED INFRASTRUCTURE</p>
          </div>

          <h1 className="text-[clamp(2.25rem,3.2vw,2.75rem)] font-extrabold leading-[1.05] tracking-[-0.045em] text-slate-950">
            <span className="sm:whitespace-nowrap">50 Years of Power Expertise,</span><br />
            <span className="sm:whitespace-nowrap">Engineered for the AI Era.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">반세기의 전력 기술로 AI 데이터센터의 미래를 설계합니다.</p>

          <div className="mt-9">
            <Link href="/#infrastructure" className="group inline-flex items-center gap-4 rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_-12px_rgba(15,23,42,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0047ba] hover:shadow-[0_16px_35px_-12px_rgba(0,71,186,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0047ba] focus-visible:ring-offset-2 sm:text-base">
              HDMS 알아보기
              <svg aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" /></svg>
            </Link>
          </div>
        </div>

        <div className="hero-product relative z-10 mt-10 min-h-[300px] w-full sm:min-h-[430px] lg:absolute lg:-right-[10%] lg:bottom-[4%] lg:mt-0 lg:h-[78%] lg:w-[76%] xl:-right-[8%] xl:w-[72%]">
          <div aria-hidden="true" className="absolute bottom-[7%] left-[8%] h-[7%] w-[80%] rounded-[100%] bg-slate-950/20 blur-2xl" />
          <Image src="/images/home/container-mdc-r.png" alt="HDMS 컨테이너형 모듈러 데이터센터" fill priority sizes="(min-width: 1024px) 72vw, 100vw" className="origin-center scale-[1.08] object-contain object-center drop-shadow-[0_30px_35px_rgba(15,23,42,0.18)] mix-blend-multiply lg:origin-bottom-right lg:scale-[1.18] lg:object-right-bottom" />
        </div>

        <p className="absolute bottom-8 left-16 hidden text-[10px] font-semibold tracking-[0.2em] text-slate-400 lg:block xl:left-20">MODULAR DATA CENTER SOLUTIONS</p>
      </div>
    </section>
  );
}
