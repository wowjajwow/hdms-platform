import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <p className="text-sm font-semibold text-zinc-500">CONTACT</p>
      <h2 className="mt-3 text-3xl font-bold">함께할 준비가 되셨나요?</h2>
      <p className="mt-6 text-lg text-zinc-600">프로젝트와 협업에 관한 문의를 기다립니다.</p>
      <Link
        href="/contact"
        className="mt-8 inline-flex rounded-md bg-zinc-950 px-5 py-3 font-medium text-white"
      >
        문의하기
      </Link>
    </section>
  );
}
