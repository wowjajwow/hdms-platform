import { businesses } from "@/data/businesses";

export function BusinessSection() {
  return (
    <section id="business" className="bg-zinc-100 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold text-zinc-500">OUR BUSINESS</p>
        <h2 className="mt-3 text-3xl font-bold">사업 영역</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {businesses.map((business) => (
            <article key={business.title} className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">{business.title}</h3>
              <p className="mt-4 leading-7 text-zinc-600">{business.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
