function FlowPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_30px_-18px_rgba(0,71,186,0.9)]">
      {children}
    </span>
  );
}

export function AiServiceArchitecture() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 sm:px-10 lg:px-16 xl:px-20">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-70 [background-image:linear-gradient(to_right,rgba(124,58,237,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] [background-size:64px_64px]"
      />

      <div className="relative z-10 mx-auto max-w-[1280px] text-center">
        <p className="mx-auto h-1 w-8 bg-blue-600" />
        <h2 className="mt-6 text-4xl font-semibold tracking-normal">Cloud Native Architecture</h2>
        <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-slate-600">
          AI 서비스가 빠르게 배포되고 안정적으로 운영될 수 있도록 CI/CD, 컨테이너, 마이크로서비스, DevOps 체계를 통합합니다.
        </p>

        <div className="relative mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 hidden size-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-slate-950 bg-white text-center shadow-[0_20px_70px_-45px_rgba(15,23,42,0.9)] lg:flex">
            <div>
              <p className="text-2xl font-semibold leading-tight text-slate-950">CLOUD</p>
              <p className="text-2xl font-semibold leading-tight text-slate-950">NATIVE</p>
            </div>
            <span className="absolute -right-3 top-10 size-0 border-y-[9px] border-l-[16px] border-y-transparent border-l-blue-600" />
            <span className="absolute -left-3 bottom-10 size-0 border-y-[9px] border-r-[16px] border-y-transparent border-r-blue-600" />
          </div>

          <article className="min-h-[300px] rounded-[2rem] bg-black p-7 text-left text-white shadow-[0_28px_90px_-60px_rgba(15,23,42,0.95)]">
            <h3 className="text-2xl font-semibold text-blue-400">CI / CD</h3>
            <div className="mt-8 grid gap-5 sm:grid-cols-[0.72fr_1fr_1fr] sm:items-stretch">
              <div className="rounded-2xl bg-blue-600 p-4 text-center">
                <div className="space-y-3">
                  {['Build', 'Test', 'Merge'].map((item) => (
                    <div key={item} className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center rounded-2xl bg-blue-600/95 p-5 text-center text-base font-semibold leading-6">
                자동 릴리즈
                <br />
                Repository 반영
              </div>
              <div className="flex items-center justify-center rounded-2xl bg-blue-600/95 p-5 text-center text-base font-semibold leading-6">
                운영 환경
                <br />
                자동 배포
              </div>
            </div>
          </article>

          <article className="min-h-[300px] rounded-[2rem] bg-black p-7 text-left text-white shadow-[0_28px_90px_-60px_rgba(15,23,42,0.95)]">
            <h3 className="text-2xl font-semibold text-blue-400">Containers</h3>
            <div className="mt-8 grid gap-3">
              <div className="grid gap-3 sm:grid-cols-3">
                {['APP1', 'APP2', 'APP3'].map((app) => (
                  <div key={app} className="overflow-hidden rounded-2xl bg-blue-600 text-center text-sm font-semibold text-black">
                    <div className="py-2">{app}</div>
                    <div className="border-t border-black/20 bg-blue-400 py-2">Bin / Libs</div>
                  </div>
                ))}
              </div>
              {['Container Engine', 'Container System', 'Infrastructure'].map((layer) => (
                <div key={layer} className="rounded-full border border-blue-500 px-5 py-3 text-center text-sm text-blue-100">
                  {layer}
                </div>
              ))}
            </div>
          </article>

          <article className="min-h-[300px] rounded-[2rem] bg-black p-7 text-left text-white shadow-[0_28px_90px_-60px_rgba(15,23,42,0.95)]">
            <h3 className="text-2xl font-semibold text-blue-400">Microservice</h3>
            <div className="mt-8 grid gap-5 sm:grid-cols-[0.72fr_1fr] sm:items-center">
              <div className="rounded-2xl bg-blue-600 p-6 text-center text-lg font-semibold text-black">
                API
                <br />
                Gateway
              </div>
              <div className="space-y-3">
                {['Service 1', 'Service 2', 'Service 3'].map((service) => (
                  <div key={service} className="flex items-center gap-3">
                    <div className="flex-1 rounded-full border border-blue-500 px-5 py-3 text-center text-sm text-blue-100">
                      {service}
                    </div>
                    <div className="size-8 rounded-full border border-blue-400" />
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="min-h-[300px] rounded-[2rem] bg-black p-7 text-left text-white shadow-[0_28px_90px_-60px_rgba(15,23,42,0.95)]">
            <h3 className="text-2xl font-semibold text-blue-400">DevOps</h3>
            <div className="mt-8 flex min-h-48 items-center justify-center">
              <div className="relative flex w-full max-w-md items-center justify-between">
                <div className="flex size-28 items-center justify-center rounded-full bg-white text-2xl font-semibold text-black">
                  Dev
                </div>
                <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rotate-[-28deg] bg-blue-600 px-7 py-3 text-sm font-bold text-black">
                  RELEASE
                </div>
                <div className="flex size-28 items-center justify-center rounded-full bg-blue-600 text-2xl font-semibold text-black">
                  Ops
                </div>
              </div>
            </div>
            <div className="mt-2 flex flex-wrap justify-center gap-2">
              {['CODE', 'BUILD', 'TEST', 'PLAN', 'DEPLOY', 'MONITOR'].map((item) => (
                <FlowPill key={item}>{item}</FlowPill>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
