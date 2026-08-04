"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/data/navigation";

const businessLinks = [
  { label: "HDMS", href: "/" },
  { label: "인프라 부문", href: "/infrastructure" },
  { label: "클라우드 부문", href: "/ai-service/public-cloud" },
  { label: "AI 부문", href: "/ai-service" },
] as const;

function SearchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-none stroke-current" strokeWidth="1.8">
      <circle cx="10.8" cy="10.8" r="6.6" />
      <path d="m16 16 4.2 4.2" />
    </svg>
  );
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="relative h-[104px] w-full md:h-[124px]">
      <nav aria-label="주요 메뉴" className="fixed inset-x-0 top-0 z-50 bg-white shadow-[0_1px_0_rgba(0,0,0,0.08)]">
        <div className="h-9 bg-[#0646a5] text-white md:h-10">
          <div className="mx-auto flex h-full max-w-[1760px] items-center justify-between px-5 md:px-10">
            <ul className="hidden h-full items-center gap-9 md:flex">
              {businessLinks.map((item) => (
                <li key={item.href} className="flex h-full items-center">
                  <Link href={item.href} className="text-[13px] font-semibold transition-opacity hover:opacity-75">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/" className="text-xs font-bold tracking-[0.08em] md:hidden">
              HDMS PLATFORM
            </Link>
            <div className="ml-auto flex items-center gap-7 text-xs font-semibold md:text-[13px]">
              <button type="button" className="transition-opacity hover:opacity-75">KOR</button>
              <button type="button" className="hidden items-center gap-2 transition-opacity hover:opacity-75 md:flex">
                GLOBAL NETWORK
                <svg aria-hidden="true" viewBox="0 0 12 8" className="h-2 w-3 fill-none stroke-current" strokeWidth="1.5">
                  <path d="m1 1 5 5 5-5" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="h-[68px] md:h-[84px]">
          <div className="mx-auto flex h-full max-w-[1760px] items-center px-5 md:px-10">
            <Link href="/" aria-label="HDMS 홈" onClick={closeMobileMenu} className="shrink-0">
              <Image src="/logo/HDMS_logo.png" alt="HDMS" width={160} height={36} priority className="h-auto w-[112px] md:w-[150px]" />
            </Link>

            <ul className="mx-auto hidden h-full items-center gap-[clamp(2rem,4.2vw,5.5rem)] md:flex">
              {navigation.map((item) => (
                <li key={item.href} className="group relative flex h-full items-center">
                  <Link href={item.href} className="text-[17px] font-semibold text-zinc-900 transition-colors hover:text-[#0646a5]">
                    {item.label}
                  </Link>
                  {"children" in item && (
                    <div className="invisible absolute left-1/2 top-full min-w-48 -translate-x-1/2 translate-y-2 border border-zinc-200 bg-white py-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} className="block whitespace-nowrap px-5 py-3 text-sm font-semibold text-zinc-700 hover:bg-blue-50 hover:text-[#0646a5]">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <div className="ml-auto hidden shrink-0 items-center gap-3 md:flex">
              <Link href="/#contact" className="rounded-full bg-zinc-100 px-7 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-[#0646a5] hover:text-white">
                CONTACT US
              </Link>
              <Link href="/product" aria-label="검색" className="grid size-11 place-items-center rounded-full bg-zinc-100 text-zinc-950 transition-colors hover:bg-zinc-200">
                <SearchIcon />
              </Link>
            </div>

            <button type="button" className="ml-auto grid size-10 place-items-center text-zinc-950 md:hidden" aria-label={isMobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"} aria-expanded={isMobileMenuOpen} aria-controls="mobile-navigation" onClick={() => setIsMobileMenuOpen((open) => !open)}>
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6 fill-current">
                {isMobileMenuOpen ? <path d="m18.3 4.3-6.3 6.3-6.3-6.3-1.4 1.4 6.3 6.3-6.3 6.3 1.4 1.4 6.3-6.3 6.3 6.3 1.4-1.4-6.3-6.3 6.3-6.3z" /> : <path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />}
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div id="mobile-navigation" className="border-t border-zinc-100 bg-white px-5 pb-6 shadow-xl md:hidden">
            <ul>
              {navigation.map((item) => (
                <li key={item.href} className="border-b border-zinc-100">
                  <Link href={item.href} onClick={closeMobileMenu} className="block py-4 text-base font-semibold text-zinc-900">{item.label}</Link>
                  {"children" in item && <div className="-mt-2 pb-3 pl-4">{item.children.map((child) => <Link key={child.href} href={child.href} onClick={closeMobileMenu} className="block py-2 text-sm text-zinc-500">{child.label}</Link>)}</div>}
                </li>
              ))}
            </ul>
            <Link href="/#contact" onClick={closeMobileMenu} className="mt-5 block rounded-full bg-[#0646a5] py-3 text-center text-sm font-semibold text-white">CONTACT US</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
