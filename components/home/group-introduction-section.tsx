import Image from "next/image";

const historyItems = [
  {
    year: "1972",
    title: "동미전기공업 설립",
    description: "변압기 및 전력설비 사업의 시작",
    image: "/images/home/변압기1.jpg",
  },
  {
    year: "50+ Years",
    title: "전력설비 기술 축적",
    description: "산업 현장에서 검증된 전력 인프라 노하우",
    image: "/images/home/회사1.jpg",
  },
  {
    year: "Manufacturing",
    title: "수직적 통합",
    description: "초고압 변압기, ESS, 냉각기 등 MEP 핵심 요소 생산",
    image: "/images/home/변압기2.jpg",
  },
  {
    year: "HDMS",
    title: "토탈 AI 전력 인프라",
    description: "핵심 기술 통합을 통한 AI 인프라 사업 확장",
    image: "/images/home/container-mdc-r.png",
  },
];

const groupCompanies = [
  { name: "동미전기공업", role: "변압기", mark: "01" },
  { name: "에스씨에스", role: "냉각·열관리시스템", mark: "02" },
  { name: "동미전기뉴펙토리", role: "초고압·특수 변압기", mark: "03" },
  { name: "유비넷시스", role: "ESS", mark: "04" },
  { name: "R&D센터", role: "통합연구개발", mark: "05" },
];

export function GroupIntroductionSection() {
  return (
    <section
      id="group-introduction"
      className="relative overflow-hidden bg-white px-6 py-24 text-slate-950 sm:px-10 lg:px-16 xl:px-20"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:64px_64px]"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_70%_20%,rgba(0,71,186,0.12),transparent_38%)]"
      />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="text-sm font-extrabold tracking-tight text-[#243f9e]">
              Company introduction
            </p>
            <h2 className="mt-8 max-w-3xl border-l-4 border-[#243f9e] pl-4 text-[clamp(2rem,3.6vw,4.5rem)] font-semibold leading-[1.05] tracking-normal">
              One Heritage.
              <br />
              Integrated Infrastructure.
            </h2>
          </div>
          <div className="max-w-3xl text-base leading-8 text-slate-700 sm:text-lg sm:leading-9">
            <p>
              변압기 한 대의 품질이 전체 전력설비의 안정성을 좌우하듯, 데이터센터의 안정성 역시 전력과 냉각 인프라에 대한 깊은 이해에서 시작됩니다.
            </p>
            <p className="mt-4">
              HDMS는 50년 이상 축적된 전력설비 기술을 기반으로 초고압 변압기, ESS, 냉각 시스템, 통합연구개발을 결합해 AI 토탈 전력 인프라 솔루션을 제공합니다.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex items-center gap-3">
            <span className="h-6 w-1 bg-[#243f9e]" />
            <h3 className="text-2xl font-semibold tracking-normal sm:text-3xl">HDMS History</h3>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {historyItems.map((item) => (
              <article key={item.year} className="group overflow-hidden border border-slate-200 bg-slate-50">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#243f9e]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 25vw, 100vw"
                    className="object-cover opacity-70 grayscale transition duration-500 group-hover:scale-105 group-hover:opacity-90 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-[#243f9e]/35 mix-blend-multiply" />
                  <p className="absolute left-4 top-4 text-2xl font-black tracking-tight text-white">
                    {item.year}
                  </p>
                </div>
                <div className="p-5 text-center">
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="flex items-center gap-3">
            <span className="h-6 w-1 bg-[#243f9e]" />
            <h3 className="text-2xl font-semibold tracking-normal sm:text-3xl">
              그룹 계열사 현황 <span className="text-slate-500">(Integrated Group)</span>
            </h3>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {groupCompanies.map((company) => (
              <article key={company.name} className="relative text-center">
                <div className="mx-auto flex size-28 items-center justify-center rounded-full bg-[#152a6b] text-white shadow-[0_18px_50px_-25px_rgba(21,42,107,0.8)]">
                  <span className="font-mono text-2xl font-bold tracking-[0.1em]">{company.mark}</span>
                </div>
                <h4 className="mt-5 text-base font-semibold">{company.name}</h4>
                <p className="mt-1 text-sm text-slate-500">[{company.role}]</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20 overflow-hidden bg-[#06183f] text-white">
          <div className="grid lg:grid-cols-[1fr_0.78fr]">
            <div className="px-8 py-12 sm:px-12 lg:py-16">
              <p className="text-2xl font-light leading-10 text-blue-100 sm:text-3xl sm:leading-[3rem]">
                HDMS는 새롭게 시작되었지만,
                <br />
                그 기술의 뿌리는
              </p>
              <p className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
                50년 이상 축적되어 왔습니다.
              </p>
            </div>
            <div className="relative min-h-[260px] overflow-hidden">
              <Image
                src="/images/home/HDMS회사.png"
                alt="HDMS 그룹 기술 기반 이미지"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#06183f] via-[#06183f]/35 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
