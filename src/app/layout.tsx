import { Inter } from "next/font/google";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-bg-base text-text-primary min-h-screen flex flex-col`}>
        <Navbar />

        <main className="flex-grow w-full max-w-7xl mx-auto">
          {children}
        </main>

        <footer className="w-full bg-bg-base border-t border-border-base mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 py-6 max-w-7xl mx-auto text-text-primary">
            <div className={`${spaceMono.className} font-bold`}>
              GIRIDHAR REDDY
            </div>
            <div className={`${spaceMono.className} uppercase text-center md:text-left my-4 md:my-0 text-sm`}>
              © 2026. OPTIMIZED FOR EXECUTION.
            </div>
            <div className={`flex space-x-4 ${spaceMono.className} uppercase text-sm`}>
              <a className="text-text-primary underline hover:opacity-80 transition-opacity" href="#">GitHub</a>
              <a className="text-text-primary hover:opacity-80 transition-opacity" href="#">LinkedIn</a>
              <a className="text-text-primary hover:opacity-80 transition-opacity" href="#">Email</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
