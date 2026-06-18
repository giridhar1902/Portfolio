"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Domvio", path: "/domvio" },
    { name: "Stack", path: "/stack" },
    { name: "Archive", path: "/archive" },
    { name: "Context", path: "/context" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="w-full sticky top-0 bg-background border-b border-primary z-50">
      <div className="flex justify-between items-center w-full px-medium md:px-generous py-tight max-w-7xl mx-auto h-16">
        <Link 
          href="/" 
          className="font-header-h2 text-header-h2 font-black tracking-tighter text-primary uppercase select-none hover:opacity-80 transition-opacity"
        >
          GIRIDHAR REDDY
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-medium font-body-secondary text-body-secondary">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`transition-colors duration-200 py-tight px-2 hover:bg-surface-container ${
                  isActive
                    ? "text-secondary font-bold border-b-2 border-secondary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <a
            href="mailto:giridhar123reddy@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-on-primary font-mono-data text-mono-data px-medium py-tight hover:bg-surface-tint border border-primary transition-colors inline-block"
          >
            Connect
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary p-2 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
            ) : (
              <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-primary bg-background px-medium py-tight flex flex-col space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                onClick={() => setIsOpen(false)}
                href={item.path}
                className={`block py-2 px-4 transition-colors font-body-primary ${
                  isActive
                    ? "text-secondary font-bold border-l-4 border-secondary bg-surface-container"
                    : "text-on-surface-variant hover:bg-surface-container hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <a
            href="mailto:giridhar123reddy@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-primary text-on-primary font-mono-data text-mono-data py-2 hover:bg-surface-tint border border-primary mt-2"
          >
            Connect
          </a>
        </div>
      )}
    </nav>
  );
}
