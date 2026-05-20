"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-primary min-h-screen flex flex-col`}>
        <nav className="w-full top-0 sticky bg-background border-b border-primary z-50">
          <div className="flex justify-between items-center w-full px-4 py-2 max-w-7xl mx-auto">
            <div className="text-xl font-bold tracking-tighter text-primary">
              <Link href="/">GIRIDHAR REDDY</Link>
            </div>
            <div className="hidden md:flex space-x-4">
              <Link className="text-primary font-bold border-b-2 border-transparent hover:border-primary pb-1" href="/">Projects</Link>
              <Link className="text-primary font-bold border-b-2 border-transparent hover:border-primary pb-1" href="/stack">Stack</Link>
              <Link className="text-primary font-bold border-b-2 border-transparent hover:border-primary pb-1" href="/archive">Archive</Link>
              <Link className="text-primary font-bold border-b-2 border-transparent hover:border-primary pb-1" href="/about">About</Link>
            </div>
            <button className="hidden md:block bg-primary text-white px-4 py-2 font-bold hover:bg-surface hover:text-primary transition-colors border border-primary">
              Connect
            </button>
            <button
              className="md:hidden text-primary font-bold tracking-widest uppercase border border-primary px-2 py-1"
              onClick={() => setIsMenuOpen(true)}
            >
              [ MENU ]
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-background z-[100] flex flex-col">
            <div className="flex justify-end p-4 border-b border-primary">
               <button
                className="text-primary font-bold tracking-widest uppercase border border-primary px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                [ CLOSE ]
              </button>
            </div>
            <div className="flex flex-col flex-grow">
              <Link href="/" className="text-4xl font-extrabold text-primary border-b border-primary p-6" onClick={() => setIsMenuOpen(false)}>PROJECTS</Link>
              <Link href="/stack" className="text-4xl font-extrabold text-primary border-b border-primary p-6" onClick={() => setIsMenuOpen(false)}>STACK</Link>
              <Link href="/archive" className="text-4xl font-extrabold text-primary border-b border-primary p-6" onClick={() => setIsMenuOpen(false)}>ARCHIVE</Link>
              <Link href="/about" className="text-4xl font-extrabold text-primary border-b border-primary p-6" onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
            </div>
          </div>
        )}

        <main className="flex-grow w-full max-w-7xl mx-auto">
          {children}
        </main>

        <footer className="w-full bg-background border-t border-primary mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 py-6 max-w-7xl mx-auto text-primary">
            <div className="font-mono font-bold">
              GIRIDHAR REDDY
            </div>
            <div className="font-mono uppercase text-center md:text-left my-4 md:my-0 text-sm">
              © 2026. OPTIMIZED FOR EXECUTION.
            </div>
            <div className="flex space-x-4 font-mono uppercase text-sm">
              <a className="text-primary underline hover:opacity-80 transition-opacity" href="#">GitHub</a>
              <a className="text-primary hover:opacity-80 transition-opacity" href="#">LinkedIn</a>
              <a className="text-primary hover:opacity-80 transition-opacity" href="#">Email</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
