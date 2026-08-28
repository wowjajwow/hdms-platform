import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "문의하기",
  description: "HDMS Platform의 데이터센터, 인프라 및 AI 서비스에 대해 문의하세요.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-[#071a3d] px-6 py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(37,99,235,0.38),transparent_36%)]" />
        <div className="relative mx-auto max-w-6xl">
          <p className="font-mono text-xs font-bold tracking-[0.24em] text-blue-300">CONTACT HDMS</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">비즈니스의 다음 단계를<br />함께 설계합니다.</h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            데이터센터 구축, 지속가능경영, AI 인프라, NPU, GPU, 클라우드 및 AI 서비스에 대한 문의를 남겨주세요.
            담당자가 내용을 확인한 뒤 입력하신 연락처로 답변드리겠습니다.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[0.72fr_1.28fr] lg:py-28">
        <aside>
          <p className="font-mono text-xs font-bold tracking-[0.2em] text-[#0d52ce]">GET IN TOUCH</p>
          <h2 className="mt-4 text-3xl font-semibold text-[#102163]">문의 내용을<br />남겨주세요.</h2>
          <p className="mt-6 max-w-sm leading-7 text-slate-600">구체적인 사업 분야와 요청 사항을 적어주시면 더 빠르고 정확하게 안내해 드릴 수 있습니다.</p>
          <div className="mt-10 border-t border-slate-200 pt-6 text-sm leading-7 text-slate-500">
            <p className="font-semibold text-slate-900">문의 처리 안내</p>
            <p className="mt-2">접수된 내용은 HDMS 담당자에게 이메일로 전달되며, 답변을 위한 용도로만 사용됩니다.</p>
          </div>
          <div className="mt-8 border-t border-slate-200 pt-6 text-sm leading-7 text-slate-500">
            <p className="font-semibold text-slate-900">HDMS 소재지</p>
            <address className="mt-2 not-italic">{siteConfig.address}</address>
          </div>
        </aside>
        <ContactForm />
      </section>
    </div>
  );
}
