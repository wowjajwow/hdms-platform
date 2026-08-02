import React, { useState, useEffect } from 'react';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Stations', href: '#stations' },
  { label: 'Satellites', href: '#satellites' },
  { label: 'Updates', href: '#updates' },
  { label: 'About us', href: '#about' },
  { label: 'Shop', href: '#shop' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="relative w-full">
      {}
      <nav
        id="global-nav"
        className={`fixed top-0 left-0 w-full z-50 h-20 transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-[#c5c6ca]/20 shadow-sm text-[#1b1c1c]'
            : 'bg-transparent border-transparent text-white'
        }`}
      >
        {/* Full width container without max-width restriction */}
        <div className="flex justify-between items-center px-5 md:px-[64px] w-full h-full">
          {/* Logo (Left side) */}
          <a
            href="#"
            id="nav-logo"
            className={`font-['Hanken_Grotesk',sans-serif] text-[24px] font-bold tracking-tighter transition-colors duration-300 ${
              isScrolled ? 'text-[#000101]' : 'text-white'
            }`}
          >
            VAST
          </a>

          {}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-['Hanken_Grotesk',sans-serif] text-[16px] font-medium leading-[24px] transition-colors duration-300 ${
                  isScrolled
                    ? 'text-[#5d5f5f] hover:text-[#000101]'
                    : 'text-[#c6c6c9] hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-md transition-colors duration-300 focus:outline-none ${
              isScrolled ? 'text-[#000101]' : 'text-white'
            }`}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                />
              )}
            </svg>
          </button>
        </div>

        {}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white text-[#1b1c1c] border-b border-[#c5c6ca]/20 px-6 py-6 shadow-xl w-full">
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-[#1b1c1c] hover:text-black transition-colors py-2 border-b border-gray-100 font-['Hanken_Grotesk',sans-serif]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default function App() {
  return (
    <div className="min-h-[180vh] bg-[#0d0f12] text-white font-sans antialiased">
      <Header />
      <div className="pt-32 text-center text-gray-500 font-mono text-sm">
        [Scroll down to test full-width header background & color transitions]
      </div>
    </div>
  );
}