"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation } from "@/data/navigation";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hasSolidBackground = isScrolled || isMobileMenuOpen;

  return (
    <header className="relative w-full">
      <nav
        aria-label="주요 메뉴"
        className={`fixed inset-x-0 top-0 z-50 h-24 border-b transition-all duration-300 ${
          hasSolidBackground
            ? "border-zinc-200/80 bg-white/95 text-zinc-950 shadow-sm backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="flex h-full w-full items-center justify-between px-5 md:px-16">
          <Link href="/" aria-label="HDMS 홈" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src="/logo/HDMS_logo.png"
              alt="HDMS"
              width={160}
              height={36}
              priority
            />
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-lg font-medium leading-7 transition-colors duration-300 ${
                    isScrolled
                      ? "text-zinc-600 hover:text-[#0047ba]"
                      : "text-black hover:text-[#0047ba]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className={`rounded-md p-2 transition-colors md:hidden ${
              hasSolidBackground
                ? "text-black hover:text-[#0047ba]"
                : "text-black hover:text-[#0047ba]"
            }`}
            aria-label={isMobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
          >
            <svg aria-hidden="true" className="size-6 fill-current" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              ) : (
                <path d="M3 18h18v-2H3v2Zm0-5h18v-2H3v2Zm0-7v2h18V6H3Z" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="w-full border-b border-zinc-200 bg-white px-6 py-5 text-zinc-950 shadow-xl md:hidden"
          >
            <ul className="flex flex-col">
              {navigation.map((item) => (
                <li key={item.href} className="border-b border-zinc-100 last:border-0">
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-4 text-lg font-medium transition-colors hover:text-blue-700"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
