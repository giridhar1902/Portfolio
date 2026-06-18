import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-primary mt-generous">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-medium md:px-generous py-medium max-w-7xl mx-auto text-primary">
        <div className="font-mono-data text-mono-data font-bold uppercase tracking-widest mb-medium md:mb-0">
          GIRIDHAR REDDY
        </div>
        <div className="font-mono-data text-mono-data uppercase text-center md:text-left mb-medium md:mb-0 text-text-secondary">
          © 2026. OPTIMIZED FOR EXECUTION.
        </div>
        <div className="flex space-x-medium font-mono-data text-mono-data uppercase">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:text-secondary opacity-80 hover:opacity-100 transition-opacity"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/giridhar-reddy-s/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:text-secondary opacity-80 hover:opacity-100 transition-opacity"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:giridhar123reddy@gmail.com"
            className="text-primary underline hover:text-secondary opacity-80 hover:opacity-100 transition-opacity"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
