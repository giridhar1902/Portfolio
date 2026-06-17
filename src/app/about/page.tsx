import Image from "next/image";

export default function About() {
  return (
    <div className="w-full max-w-7xl mx-auto px-medium py-generous flex flex-col gap-generous flex-grow">
      
      {/* Header Section */}
      <header className="flex flex-col gap-tight border-b border-primary pb-medium">
        <h1 className="font-display-h1-mobile md:font-display-h1 text-display-h1-mobile md:text-display-h1 text-primary font-bold">
          Giridhar Reddy
        </h1>
        <p className="font-subheader-h3 text-subheader-h3 text-on-surface-variant max-w-2xl leading-relaxed">
          Founder. Product Builder. AI-Native Operator.
        </p>
      </header>

      {/* Two Column Layout */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-medium md:gap-generous items-start">
        
        {/* Left Column: Portrait & Caption */}
        <div className="col-span-1 md:col-span-5 flex flex-col gap-tight">
          <div className="w-full aspect-[4/5] bg-surface-container-highest border border-primary relative overflow-hidden">
            <Image
              alt="A stark, high-contrast black and white portrait photograph of Giridhar Reddy."
              className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-multiply opacity-90"
              src="/profile.jpg"
              width={500}
              height={625}
              priority
            />
          </div>
          <div className="font-mono-data text-mono-data text-on-surface-variant flex justify-between border-b border-border-muted pb-1 text-sm">
            <span>Bengaluru, India.</span>
            <span>2026.</span>
          </div>
        </div>

        {/* Right Column: Narrative Text */}
        <div className="col-span-1 md:col-span-7 flex flex-col gap-medium pt-tight">
          <p className="font-body-primary text-body-primary text-primary leading-relaxed max-w-prose text-lg">
            I&apos;m a founder building Domvio — a WhatsApp-first rent collection platform for small landlords in India. Mechanical engineering graduate who never wrote a line of code before AI tools made that irrelevant.
          </p>
          <div className="w-full h-px bg-border-muted"></div>
          <p className="font-body-primary text-body-primary text-primary leading-relaxed max-w-prose text-lg">
            Before Domvio: COO at a startup consultancy, top revenue at two US-facing sales orgs, and enough failed experiments to know what actually moves numbers.
          </p>
          <div className="w-full h-px bg-border-muted"></div>
          <p className="font-body-primary text-body-primary text-primary leading-relaxed max-w-prose font-bold text-lg">
            I care about one thing: does it remove real friction for a real person. If yes, ship it. If not, cut it.
          </p>
        </div>

      </section>

      {/* Connect Section */}
      <section className="border-t border-primary pt-generous mt-medium flex flex-col items-center md:items-start text-center md:text-left gap-medium bg-bg-surface p-medium md:p-generous border-b border-primary">
        <h2 className="font-header-h2 text-header-h2 text-primary font-bold">
          Work With Me
        </h2>
        <p className="font-body-primary text-body-primary text-on-surface-variant max-w-2xl">
          Open to founding growth and AI-native operator roles at early-stage startups.
        </p>
        <div className="flex flex-col sm:flex-row gap-tight mt-tight w-full sm:w-auto">
          <a
            href="https://domvio.in"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-on-primary font-body-primary text-body-primary px-medium py-tight font-bold hover:bg-surface-tint border border-primary transition-colors text-center w-full sm:w-auto inline-block"
          >
            Visit Domvio
          </a>
          <a
            href="https://www.linkedin.com/in/giridhar-reddy-s/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface-container-lowest text-primary font-body-primary text-body-primary px-medium py-tight font-bold hover:bg-surface-container-highest border border-primary transition-colors text-center w-full sm:w-auto inline-block"
          >
            LinkedIn
          </a>
        </div>
      </section>

    </div>
  );
}
