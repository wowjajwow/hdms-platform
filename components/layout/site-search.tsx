"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { findSearchPages, recommendedKeywords, searchPages } from "@/data/site-search";

export function SiteSearch({ onOpen }: { onOpen: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const hasQuery = query.trim().length > 0;
  const results = hasQuery ? findSearchPages(query) : searchPages.slice(0, 4);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [isOpen]);

  function close() { dialogRef.current?.close(); }

  return (
    <>
      <button ref={triggerRef} type="button" aria-label="사이트 검색 열기" aria-haspopup="dialog" aria-expanded={isOpen} aria-controls="site-search" onClick={() => {
        onOpen();
        setQuery("");
        setIsOpen(true);
        dialogRef.current?.showModal();
        inputRef.current?.focus();
      }} className="grid size-11 place-items-center rounded-full bg-zinc-100 text-zinc-950 transition-colors hover:bg-blue-50 hover:text-[#0646a5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0646a5]">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-none stroke-current" strokeWidth="1.8"><circle cx="10.8" cy="10.8" r="6.6" /><path d="m16 16 4.2 4.2" /></svg>
      </button>
      <dialog ref={dialogRef} id="site-search" aria-labelledby="site-search-title" onClose={() => {
        setIsOpen(false);
        triggerRef.current?.focus();
      }} onClick={(event) => { if (event.target === event.currentTarget) close(); }} className="site-search-dialog fixed inset-x-0 bottom-0 top-[104px] m-0 h-[calc(100dvh-104px)] max-h-none w-full max-w-none overflow-y-auto border-0 bg-transparent p-0 text-zinc-950 md:top-[124px] md:h-[calc(100dvh-124px)]">
        <div className="site-search-panel border-t border-zinc-100 bg-white px-5 pb-10 pt-7 shadow-xl md:px-10 md:pb-12 md:pt-9">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div><p className="text-[11px] font-bold tracking-[0.2em] text-[#0646a5]">EXPLORE HDMS</p><h2 id="site-search-title" className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">무엇을 찾고 계신가요?</h2></div>
              <button type="button" onClick={close} aria-label="검색 닫기" className="grid size-11 shrink-0 place-items-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-950"><svg aria-hidden="true" viewBox="0 0 24 24" className="size-6 fill-none stroke-current" strokeWidth="1.5"><path d="m6 6 12 12M6 18 18 6" /></svg></button>
            </div>
            <label htmlFor="site-search-input" className="sr-only">검색어</label>
            <div className="border-b-2 border-[#0646a5] pb-3 focus-within:ring-2 focus-within:ring-blue-100">
              <input ref={inputRef} id="site-search-input" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="서비스나 키워드를 입력하세요" autoComplete="off" className="w-full min-w-0 bg-transparent px-2 py-2 text-lg outline-none placeholder:text-zinc-400 md:text-2xl" />
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-2"><span className="mr-2 text-xs text-zinc-500">추천 키워드</span>{recommendedKeywords.map((keyword) => <button key={keyword} type="button" onClick={() => { setQuery(keyword); inputRef.current?.focus(); }} className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-[#0646a5] transition-colors hover:bg-blue-100">{keyword}</button>)}</div>
            <p role="status" aria-live="polite" aria-atomic="true" className="mb-3 mt-8 text-sm font-semibold text-zinc-500">{hasQuery ? `검색 결과 ${results.length}건` : "주요 페이지 바로가기"}</p>
            {results.length > 0 ? (
              <ul className="grid gap-2 sm:grid-cols-2">{results.map((page) => <li key={page.href}><Link href={page.href} onClick={close} className="group flex h-full items-center justify-between gap-4 rounded-xl border border-zinc-100 px-5 py-4 transition-colors hover:border-blue-200 hover:bg-blue-50 focus-visible:outline-[#0646a5]"><div><h3 className="font-semibold group-hover:text-[#0646a5]">{page.title}</h3><p className="mt-1 text-sm leading-6 text-zinc-500">{page.description}</p></div><span aria-hidden="true" className="text-[#0646a5] transition-transform group-hover:translate-x-1">↗</span></Link></li>)}</ul>
            ) : (
              <div className="rounded-xl bg-zinc-50 px-5 py-10 text-center"><p className="font-semibold">찾으시는 정보가 없나요?</p><p className="mt-2 text-sm text-zinc-500">다른 키워드로 검색하거나 도입 상담을 남겨주세요.</p><Link href="/contact" onClick={close} className="mt-5 inline-block rounded-full bg-[#0646a5] px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800">문의하기</Link></div>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}
