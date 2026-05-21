"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full top-0 sticky bg-bg-base border-b border-border-base z-50">
        <div className="flex justify-between items-center w-full px-4 py-2 max-w-7xl mx-auto">
          <div className="text-xl font-bold tracking-tighter text-text-primary">
            <Link href="/">GIRIDHAR REDDY</Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link className="text-text-primary font-bold border-b-2 border-transparent hover:border-border-base pb-1" href="/">Projects</Link>
            <Link className="text-text-primary font-bold border-b-2 border-transparent hover:border-border-base pb-1" href="/stack">Stack</Link>
            <Link className="text-text-primary font-bold border-b-2 border-transparent hover:border-border-base pb-1" href="/archive">Archive</Link>
            <Link className="text-text-primary font-bold border-b-2 border-transparent hover:border-border-base pb-1" href="/about">About</Link>
          </div>
          <button className="hidden md:block bg-text-primary text-bg-base px-4 py-2 font-bold hover:bg-bg-surface hover:text-text-primary transition-colors border border-border-base">
            Connect
          </button>
          <button
            className="md:hidden text-text-primary font-bold tracking-widest uppercase border border-border-base px-2 py-1"
            onClick={() => setIsMenuOpen(true)}
          >
            [ MENU ]
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-[100] flex flex-col">
          <div className="flex justify-end p-4 border-b border-border-base">
             <button
              className="text-text-primary font-bold tracking-widest uppercase border border-border-base px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              [ CLOSE ]
            </button>
          </div>
          <div className="flex flex-col flex-grow">
            <Link href="/" className="text-4xl font-extrabold text-text-primary border-b border-border-base p-6" onClick={() => setIsMenuOpen(false)}>PROJECTS</Link>
            <Link href="/stack" className="text-4xl font-extrabold text-text-primary border-b border-border-base p-6" onClick={() => setIsMenuOpen(false)}>STACK</Link>
            <Link href="/archive" className="text-4xl font-extrabold text-text-primary border-b border-border-base p-6" onClick={() => setIsMenuOpen(false)}>ARCHIVE</Link>
            <Link href="/about" className="text-4xl font-extrabold text-text-primary border-b border-border-base p-6" onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
          </div>
        </div>
      )}
    </>
  );
}
