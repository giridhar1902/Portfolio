"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";

const inter800 = Inter({ subsets: ["latin"], weight: ["800"] });
const inter400 = Inter({ subsets: ["latin"], weight: ["400"] });
const inter700 = Inter({ subsets: ["latin"], weight: ["700"] });

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();


  // Adjust links exactly as prompt said: Domvio / Stack / Archive / Context / About
  const exactLinks = [
    { name: "Domvio", href: "/" },
    { name: "Stack", href: "/stack" },
    { name: "Archive", href: "/archive" },
    { name: "Context", href: "/context" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      <nav className="w-full top-0 sticky bg-bg-base border-b border-border-muted z-50 shadow-none">
        <div className="flex justify-between items-center w-full px-4 py-2 max-w-7xl mx-auto">
          {/* Left */}
          <div className={`${inter800.className} text-[var(--text-primary)] text-xl tracking-tighter`}>
            <Link href="/">GIRIDHAR REDDY</Link>
          </div>

          {/* Center */}
          <div className="hidden md:flex space-x-6">
            {exactLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`${inter400.className} text-[14px] text-[var(--text-primary)] pb-1 ${
                    isActive ? "border-b-2 border-accent" : "border-b-2 border-transparent"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right */}
          <a
            href="mailto:giridhar123reddy@gmail.com"
            className="hidden md:block bg-[var(--text-primary)] text-white px-4 py-2 rounded-none hover:opacity-90 transition-opacity text-sm"
          >
            Connect
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Menu"
          >
            <span className="block w-6 h-0.5 bg-[var(--text-primary)]"></span>
            <span className="block w-6 h-0.5 bg-[var(--text-primary)]"></span>
            <span className="block w-6 h-0.5 bg-[var(--text-primary)]"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-bg-base z-[100] flex flex-col items-center justify-center">
          <div className="absolute top-4 right-4">
             <button
              className="text-[var(--text-primary)] p-2"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="flex flex-col space-y-8 text-center">
            {exactLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`${inter700.className} text-[32px] text-[var(--text-primary)]`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
