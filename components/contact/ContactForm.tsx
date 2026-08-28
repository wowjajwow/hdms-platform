"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

const fieldClass = "mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#0d52ce] focus:ring-4 focus:ring-blue-100";

export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) throw new Error(result.message || "문의 접수에 실패했습니다.");
      form.reset();
      setState("success");
      setMessage("문의가 접수되었습니다. 담당자가 확인 후 연락드리겠습니다.");
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "잠시 후 다시 시도해 주세요.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="text-sm font-semibold text-slate-700">회사명 <span className="text-[#0d52ce]">*</span><input className={fieldClass} name="company" required maxLength={100} autoComplete="organization" placeholder="회사명을 입력해 주세요" /></label>
        <label className="text-sm font-semibold text-slate-700">담당자명 <span className="text-[#0d52ce]">*</span><input className={fieldClass} name="name" required maxLength={50} autoComplete="name" placeholder="성함을 입력해 주세요" /></label>
        <label className="text-sm font-semibold text-slate-700">이메일 <span className="text-[#0d52ce]">*</span><input className={fieldClass} name="email" type="email" required maxLength={200} autoComplete="email" placeholder="name@company.com" /></label>
        <label className="text-sm font-semibold text-slate-700">연락처 <span className="text-[#0d52ce]">*</span><input className={fieldClass} name="phone" type="tel" required maxLength={30} autoComplete="tel" placeholder="010-0000-0000" /></label>
        <label className="text-sm font-semibold text-slate-700 sm:col-span-2">문의 분야 <span className="text-[#0d52ce]">*</span>
          <select className={fieldClass} name="category" required defaultValue="">
            <option value="" disabled>문의 분야를 선택해 주세요</option>
            <option>MDC / 데이터센터</option><option>통합 인프라</option><option>ESG</option><option>NPU</option><option>엔비디아 공급</option><option>AI Service</option><option>Public Cloud</option><option>기타 / 제휴</option>
          </select>
        </label>
        <label className="text-sm font-semibold text-slate-700 sm:col-span-2">문의 제목 <span className="text-[#0d52ce]">*</span><input className={fieldClass} name="subject" required maxLength={150} placeholder="문의 제목을 입력해 주세요" /></label>
        <label className="text-sm font-semibold text-slate-700 sm:col-span-2">문의 내용 <span className="text-[#0d52ce]">*</span><textarea className={`${fieldClass} min-h-48 resize-y`} name="inquiry" required minLength={10} maxLength={5000} placeholder="사업 분야, 일정, 규모 등 문의 내용을 자세히 적어주세요." /></label>
      </div>

      <label className="absolute -left-[9999px]" aria-hidden="true">웹사이트<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-slate-600"><input className="mt-1 size-4 accent-[#0d52ce]" name="privacy" type="checkbox" value="agreed" required /><span><strong className="text-slate-900">[필수]</strong> 문의 답변을 위한 개인정보 수집 및 이용에 동의합니다.</span></label>

      <button type="submit" disabled={state === "submitting"} className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#0d52ce] px-7 py-4 font-semibold text-white transition hover:bg-[#102163] disabled:cursor-wait disabled:opacity-60 sm:w-auto">
        {state === "submitting" ? "접수 중..." : "문의 접수하기"}
      </button>
      {message && <p role="status" className={`mt-5 text-sm font-semibold ${state === "success" ? "text-emerald-700" : "text-red-600"}`}>{message}</p>}
    </form>
  );
}
