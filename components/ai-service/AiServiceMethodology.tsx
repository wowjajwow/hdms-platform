import { projectFlow } from "@/components/ai-service/ai-service-data";

export function AiServiceMethodology() {
  return (
    <section className="bg-slate-50 px-6 py-24 sm:px-10 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-[1280px] text-center">
        <p className="text-base leading-8 text-slate-700">
          HDMS는 산업의 특성과 프로젝트 규모, 난이도를 고려해 검증된 통합 방법론을 적용합니다.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-5 text-white">
          <div className="flex size-28 items-center justify-center rounded-full bg-blue-600 text-2xl font-semibold">PM</div>
          <span className="text-5xl font-light text-blue-600">+</span>
          <div className="flex size-28 items-center justify-center rounded-full bg-blue-600 text-2xl font-semibold">PMO</div>
          <span className="text-5xl font-light text-blue-600">+</span>
          <div className="flex size-28 items-center justify-center rounded-full bg-blue-600 text-2xl font-semibold">고객</div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {projectFlow.map((flow) => (
            <article key={flow.title} className="bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="rounded-full bg-black px-6 py-4 text-lg font-semibold text-white">{flow.title}</h3>
              <div className="mt-5 space-y-3">
                {flow.items.map((item) => (
                  <p key={item} className="rounded-full border border-slate-200 px-5 py-4 text-slate-700">{item}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
