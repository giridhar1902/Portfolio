import Link from "next/link";
import { Check } from "lucide-react";

export default function Home() {
  return (
    <main className="max-w-[1200px] mx-auto p-4 sm:p-8 md:p-16 flex flex-col gap-[64px]">

      {/* HERO SECTION */}
      <section className="flex flex-col gap-6">
        <h1 className="text-[48px] font-[800] leading-[1.1] tracking-[-0.02em] whitespace-pre-line text-text-primary">
          {"Product Builder.\nZero Ad Spend.\n100+ Waitlist."}
        </h1>
        <p className="text-[16px] font-[400] leading-[1.6] text-[#6B6B6B] whitespace-pre-line max-w-[600px]">
          {"Founder of Domvio — a WhatsApp-first rent\ncollection platform. Built the core loop in\n12 weeks using AI-first workflows.\nNo engineering background."}
        </p>
        <div className="flex gap-4 pt-2">
          <Link
            href="/domvio"
            className="bg-[#0A0A0A] text-white px-6 py-3 font-[600] rounded-none hover:bg-black/90 transition-colors"
          >
            See Domvio
          </Link>
          <Link
            href="/stack"
            className="bg-white text-[#0A0A0A] border border-[#0A0A0A] px-6 py-3 font-[600] rounded-none hover:bg-gray-50 transition-colors"
          >
            How I Work
          </Link>
        </div>
      </section>

      {/* FEATURED PROJECT CARD */}
      <section className="bg-[#EDEBE7] border border-border-muted p-8 flex flex-col lg:flex-row gap-12 rounded-none">
        <div className="flex-1 flex flex-col gap-6 relative">
          <div className="flex justify-between items-start">
            <h2 className="text-[32px] font-[700] text-text-primary leading-[1.2]">
              Domvio — WhatsApp-First Rent Collection
            </h2>
            <div className="hidden lg:block absolute top-0 right-0 lg:static font-mono text-[14px] uppercase text-[#2563EB] font-bold">
              PHASE 1: ACTIVE
            </div>
          </div>
          <div className="lg:hidden font-mono text-[14px] uppercase text-[#2563EB] font-bold">
            PHASE 1: ACTIVE
          </div>
          <p className="text-[16px] font-[400] text-text-primary leading-[1.6]">
            Architected remind → collect → receipt loop via<br className="hidden md:block" />
            WhatsApp + UPI in 12 weeks. 100+ landlord waitlist<br className="hidden md:block" />
            secured through zero-CAC organic distribution.
          </p>
          <p className="text-[16px] font-[700] text-text-primary leading-[1.6]">
            Role: Sole founder. Product, frontend, growth,<br className="hidden md:block" />
            and ops. External backend partner for infra.
          </p>
        </div>
        <div className="lg:w-[350px] bg-white border border-border-muted p-4 flex flex-col gap-3 rounded-none shadow-none grayscale">
          <div className="bg-gray-100 p-3 self-start max-w-[85%] rounded-lg rounded-tl-none text-[14px] text-text-primary">
            Hi Rajesh, rent of ₹12,000 for November is due on the 1st.
          </div>
          <div className="bg-gray-100 p-3 self-start max-w-[85%] rounded-lg rounded-tl-none text-[14px] text-text-primary">
            Pay here → [UPI link]
          </div>
          <div className="bg-[#128C7E] text-white p-3 self-end max-w-[85%] rounded-lg rounded-tr-none text-[14px] flex items-center gap-1">
            Payment of ₹12,000 confirmed <Check className="w-4 h-4" />
          </div>
          <div className="mt-2 border border-border-muted bg-white p-3 text-[12px] font-mono text-center flex justify-center items-center gap-1">
            Receipt #0042 — ₹12,000 — Nov 2026 — Paid <Check className="w-3 h-3" />
          </div>
        </div>
      </section>

      {/* STATS ROW */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-0">
        <div className="border border-border-muted p-6 flex flex-col gap-2 rounded-none text-center">
          <div className="text-[64px] font-[800] leading-none text-text-primary">100+</div>
          <div className="font-mono text-[12px] uppercase text-[#6B6B6B]">LANDLORDS WAITLISTED</div>
        </div>
        <div className="border border-border-muted p-6 flex flex-col gap-2 rounded-none text-center md:border-l-0">
          <div className="text-[64px] font-[800] leading-none text-text-primary">12 Weeks</div>
          <div className="font-mono text-[12px] uppercase text-[#6B6B6B]">CORE LOOP SHIPPED</div>
        </div>
        <div className="border border-border-muted p-6 flex flex-col gap-2 rounded-none text-center md:border-l-0">
          <div className="text-[64px] font-[800] leading-none text-text-primary">₹0</div>
          <div className="font-mono text-[12px] uppercase text-[#6B6B6B]">PAID ACQUISITION COST</div>
        </div>
      </section>

      {/* EXECUTION STACK */}
      <section className="flex flex-col gap-6">
        <h2 className="text-[32px] font-[700] text-text-primary leading-[1.2]">Execution Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-bg-surface border border-border-muted p-6 flex flex-col gap-3 rounded-none">
            <h3 className="text-[20px] font-[700] text-text-primary">AI Tooling</h3>
            <p className="text-[16px] text-text-primary">
              Claude Code + Cursor for frontend acceleration and debugging.
            </p>
          </div>
          <div className="bg-bg-surface border border-border-muted p-6 flex flex-col gap-3 rounded-none">
            <h3 className="text-[20px] font-[700] text-text-primary">Pragmatism</h3>
            <p className="text-[16px] text-text-primary">
              High-friction utility over theoretical perfection.
            </p>
          </div>
          <div className="bg-bg-surface border border-border-muted p-6 flex flex-col gap-3 rounded-none">
            <h3 className="text-[20px] font-[700] text-text-primary">Adaptability</h3>
            <p className="text-[16px] text-text-primary">
              AI as senior engineering partner, not autocomplete.
            </p>
          </div>
        </div>
      </section>

      {/* OUTPUT HISTORY */}
      <section className="flex flex-col gap-6">
        <h2 className="text-[32px] font-[700] text-text-primary leading-[1.2]">Output History</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-bg-surface border border-border-muted p-6 flex flex-col gap-3 rounded-none">
            <h3 className="text-[16px] font-[700] text-text-primary">182% Target</h3>
            <p className="text-[16px] text-text-primary">
              Great Learning. Rookie Rockstar Award. First month.
            </p>
          </div>
          <div className="bg-bg-surface border border-border-muted p-6 flex flex-col gap-3 rounded-none">
            <h3 className="text-[16px] font-[700] text-text-primary">Top Revenue</h3>
            <p className="text-[16px] text-text-primary">
              Bhanzu. Promoted in 3 months. Rising Star award.
            </p>
          </div>
          <div className="bg-bg-surface border border-border-muted p-6 flex flex-col gap-3 rounded-none">
            <h3 className="text-[16px] font-[700] text-text-primary">COO</h3>
            <p className="text-[16px] text-text-primary">
              UnRed. Built investor workflows for early-stage startups.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
