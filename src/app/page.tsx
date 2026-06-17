import Link from "next/link";
import Image from "next/image";

function OutputHistoryCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="border border-primary p-medium bg-bg-surface flex flex-col justify-between min-h-[160px]">
      <p className="font-body-primary text-body-primary font-bold text-primary">
        {title}
      </p>
      <div className="mt-auto pt-medium">
        <p className="font-body-secondary text-body-secondary text-on-surface-variant">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto px-medium py-generous space-y-generous flex flex-col flex-1">
      
      {/* Hero Section */}
      <section className="max-w-4xl space-y-medium pt-generous flex flex-col items-start">
        <h1 className="font-display-h1 text-display-h1-mobile md:text-display-h1 text-primary tracking-tighter">
          Product Builder.<br />Zero Ad Spend.<br />100+ Waitlist.
        </h1>
        <p className="font-subheader-h3 text-subheader-h3 text-on-surface-variant max-w-2xl leading-relaxed">
          Founder of Domvio — a WhatsApp-first rent collection platform. Built the core loop in 12 weeks using AI-first workflows. No engineering background.
        </p>
        <div className="flex flex-wrap gap-tight pt-tight">
          <Link
            href="/domvio"
            className="bg-primary text-on-primary px-medium py-tight font-body-primary text-body-primary font-bold hover:bg-surface-tint border border-primary transition-colors inline-block"
          >
            See Domvio
          </Link>
          <Link
            href="/stack"
            className="bg-transparent text-primary px-medium py-tight font-body-primary text-body-primary font-bold hover:bg-surface-container transition-colors border border-primary transition-colors inline-block"
          >
            How I Work
          </Link>
        </div>
      </section>

      {/* Featured Project */}
      <section className="border border-primary p-medium space-y-medium bg-bg-surface">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-border-muted pb-tight gap-2">
          <h2 className="font-header-h2 text-header-h2 text-primary">
            Domvio — WhatsApp-First Rent Collection
          </h2>
          <span className="font-mono-data text-mono-data bg-primary text-on-primary px-tight py-1 inline-block uppercase text-xs tracking-wider">
            PHASE 1: ACTIVE
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-medium items-center">
          <div className="space-y-medium">
            <p className="font-body-primary text-body-primary">
              Architected remind → collect → receipt loop via WhatsApp + UPI in 12 weeks. 100+ landlord waitlist secured through zero-CAC organic distribution.
            </p>
            <p className="font-body-primary text-body-primary font-bold border-l-2 border-primary pl-tight">
              Role: Sole founder. Product, frontend, growth, and ops. External backend partner for infra.
            </p>
          </div>
          <div className="w-full h-64 bg-surface-container border border-primary flex items-center justify-center relative overflow-hidden group">
            <Image
              alt="Wireframe rendering of a WhatsApp chat interface showing a rent reminder and UPI payment link on a minimal smartphone mockup."
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 transition-opacity"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFjnyhb-Xlj6pNgH9t9cnE8hU6ZVt2mTROCSPhPWFuZc4dcqb7Rb8aL43NjGGhZ0EPAdh5LfY3ghOqoiKQobpCWsk-N-5s6OJC9DGFJ9ik3QZzdLVEi6OfwXgVFzyaultKPK2Sza58PXEVInDrJXKat4wrnlOMbnCGdhDN-gvgaJaziIZstmz3l6GKbXeWnWgh7wxAYXhqFLExvALlx5I6O-2sPRWhIOZ4cGwEzFPD44TyDUOqIO7er9bjSsaLpmCexBcWWVaKFm0"
              width={600}
              height={300}
              unoptimized
            />
            <div className="relative z-10 bg-bg-base border border-primary p-tight font-mono-data text-mono-data text-xs select-none">
              WIRE_FRAME_V1.1
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-medium">
        <div className="border border-primary p-medium flex flex-col items-center justify-center bg-bg-base hover:bg-surface-container transition-colors">
          <div className="font-display-h1 text-display-h1-mobile md:text-display-h1 text-primary">100+</div>
          <div className="font-mono-data text-mono-data text-on-surface-variant uppercase mt-tight tracking-widest text-xs">
            Landlords Waitlisted
          </div>
        </div>
        <div className="border border-primary p-medium flex flex-col items-center justify-center bg-bg-base hover:bg-surface-container transition-colors">
          <div className="font-display-h1 text-display-h1-mobile md:text-display-h1 text-primary">12</div>
          <div className="font-mono-data text-mono-data text-on-surface-variant uppercase mt-tight tracking-widest text-xs">
            Weeks Core Loop Shipped
          </div>
        </div>
        <div className="border border-primary p-medium flex flex-col items-center justify-center bg-bg-base hover:bg-surface-container transition-colors">
          <div className="font-display-h1 text-display-h1-mobile md:text-display-h1 text-primary">₹0</div>
          <div className="font-mono-data text-mono-data text-on-surface-variant uppercase mt-tight tracking-widest text-xs">
            Paid Acquisition
          </div>
        </div>
      </section>

      {/* Execution Stack */}
      <section className="space-y-medium">
        <h2 className="font-header-h2 text-header-h2 text-primary border-b border-primary pb-tight">
          Execution Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-medium">
          <div className="border border-primary p-medium bg-bg-base hover:-translate-y-1 transition-transform duration-200">
            <h3 className="font-subheader-h3 text-subheader-h3 mb-tight text-primary">
              AI Tooling
            </h3>
            <p className="font-body-secondary text-body-secondary text-on-surface-variant">
              Claude Code + Cursor for frontend acceleration and debugging.
            </p>
          </div>
          <div className="border border-primary p-medium bg-bg-base hover:-translate-y-1 transition-transform duration-200">
            <h3 className="font-subheader-h3 text-subheader-h3 mb-tight text-primary">
              Pragmatism
            </h3>
            <p className="font-body-secondary text-body-secondary text-on-surface-variant">
              High-friction utility over theoretical perfection.
            </p>
          </div>
          <div className="border border-primary p-medium bg-bg-base hover:-translate-y-1 transition-transform duration-200">
            <h3 className="font-subheader-h3 text-subheader-h3 mb-tight text-primary">
              Adaptability
            </h3>
            <p className="font-body-secondary text-body-secondary text-on-surface-variant">
              AI as senior engineering partner, not autocomplete.
            </p>
          </div>
        </div>
      </section>

      {/* Output History */}
      <section className="space-y-medium">
        <h2 className="font-header-h2 text-header-h2 text-primary border-b border-primary pb-tight">
          Output History
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-medium">
          <OutputHistoryCard
            title="182% Target"
            description="Great Learning. Rookie Rockstar Award. First month."
          />
          <OutputHistoryCard
            title="Top Revenue"
            description="Bhanzu. Promoted in 3 months. Rising Star award."
          />
          <OutputHistoryCard
            title="COO"
            description="UnRed. Built investor workflows for early-stage startups."
          />
        </div>
      </section>
    </div>
  );
}
