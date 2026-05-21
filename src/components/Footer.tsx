import { Inter, Space_Mono } from "next/font/google";

const inter800 = Inter({ subsets: ["latin"], weight: ["800"] });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400"] });

export default function Footer() {
  return (
    <footer className="w-full bg-bg-base border-t border-border-muted mt-16 shadow-none">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 py-6 max-w-7xl mx-auto">
        {/* Left */}
        <div className={`${inter800.className} text-[var(--text-primary)] text-lg`}>
          GIRIDHAR REDDY
        </div>

        {/* Center */}
        <div className={`${spaceMono.className} text-[12px] uppercase text-[var(--text-secondary)] text-center my-4 md:my-0`}>
          © 2026. OPTIMIZED FOR EXECUTION.
        </div>

        {/* Right */}
        <div className={`flex space-x-6 ${spaceMono.className} uppercase text-[12px]`}>
          <a
            className="text-[var(--text-primary)] hover:opacity-80 transition-opacity"
            href="https://github.com/giridhar1902"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
          <a
            className="text-[var(--text-primary)] hover:opacity-80 transition-opacity"
            href="https://linkedin.com/in/giridhar1902" // placeholder
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>
          <a
            className="text-[var(--text-primary)] hover:opacity-80 transition-opacity"
            href="mailto:giridhar123reddy@gmail.com"
          >
            EMAIL
          </a>
        </div>
      </div>
    </footer>
  );
}
