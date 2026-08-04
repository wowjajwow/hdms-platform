type ProductSubPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
};

export function ProductSubPage({ eyebrow, title, description, points }: ProductSubPageProps) {
  return (
    <section className="min-h-screen bg-white pt-32 text-zinc-950">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-16 md:px-10 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0047ba]">{eyebrow}</p>
          <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">{title}</h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600 md:text-xl">{description}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {points.map((point) => (
            <article key={point} className="border border-zinc-200 bg-zinc-50 p-6">
              <p className="text-base font-semibold leading-7 text-zinc-800">{point}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
