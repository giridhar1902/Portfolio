export default function Domvio() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-[24px] py-16 md:py-[128px]">
      <div className="flex flex-col gap-[64px] md:gap-[128px]">

        {/* Header Section */}
        <section className="flex flex-col gap-6 items-start">
          <p className="font-mono text-[12px] uppercase text-[#6B6B6B]">
            CASE STUDY — 2026
          </p>
          <div className="flex flex-col gap-4">
            <h1 className="font-sans font-[800] text-[48px] leading-tight">
              Domvio
            </h1>
            <p className="font-sans font-[600] text-[24px] leading-snug">
              WhatsApp-First Rent Collection for<br/>
              Indian Small Landlords
            </p>
          </div>
          <div className="font-mono text-[12px] uppercase text-[#2563EB] border border-[#2563EB] px-2 py-1">
            PHASE 1 — ACTIVE
          </div>
        </section>

        {/* Stats Row */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 border-y border-[#0A0A0A] py-8">
          <div className="flex flex-col gap-2">
            <p className="font-sans font-[800] text-[32px]">100+</p>
            <p className="font-sans text-[14px] text-[#6B6B6B]">Landlords Waitlisted</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-sans font-[800] text-[32px]">12 Weeks</p>
            <p className="font-sans text-[14px] text-[#6B6B6B]">Core Loop Built</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-sans font-[800] text-[32px]">₹0</p>
            <p className="font-sans text-[14px] text-[#6B6B6B]">Paid Acquisition Cost</p>
          </div>
        </section>

        {/* The Problem */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-[24px]">
          <div className="md:col-span-4">
            <h2 className="font-sans font-[800] text-[24px]">The Problem</h2>
          </div>
          <div className="md:col-span-8">
            <p className="font-sans text-[16px] leading-relaxed">
              Small landlords in India manage 2–10 properties each. Rent collection happens over WhatsApp. Reminders are manual. Receipts don't exist. Payment confirmation is a screenshot. This is the operational baseline for millions of landlords.
            </p>
          </div>
        </section>

        {/* The Core Loop */}
        <section className="flex flex-col gap-[32px]">
          <h2 className="font-sans font-[800] text-[24px]">The Core Loop</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { num: "01", title: "REMIND", desc: "Automated WhatsApp reminder sent on schedule" },
              { num: "02", title: "COLLECT", desc: "UPI payment link in the same thread" },
              { num: "03", title: "RECEIPT", desc: "Auto-generated receipt sent on confirmation" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-4 border border-[#0A0A0A] bg-[#EDEBE7] p-[24px]">
                <p className="font-mono text-[12px] uppercase">{item.num} / {item.title}</p>
                <p className="font-sans text-[16px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How 100 Landlords Found It */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-[24px]">
          <div className="md:col-span-4">
            <h2 className="font-sans font-[800] text-[24px]">How 100 Landlords Found It</h2>
          </div>
          <div className="md:col-span-8">
            <p className="font-sans text-[16px] leading-relaxed">
              Zero paid acquisition. Built a LinkedIn content system documenting the build in public. WhatsApp Channel for direct audience. Organic only. 100+ waitlist before Phase 1 launch.
            </p>
          </div>
        </section>

        {/* What It's Built On */}
        <section className="flex flex-col gap-[32px]">
          <h2 className="font-sans font-[800] text-[24px]">What It's Built On</h2>
          <div className="border border-[#0A0A0A] bg-[#EDEBE7] p-[24px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="flex flex-col gap-2 font-mono text-[14px]">
                <li>React 19 + Vite</li>
                <li>NestJS + Prisma</li>
                <li>Supabase</li>
                <li>Railway + Vercel</li>
              </ul>
              <ul className="flex flex-col gap-2 font-mono text-[14px]">
                <li>WhatsApp Business API</li>
                <li>Interakt</li>
                <li>Razorpay UPI</li>
                <li>Claude API</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What the Waitlist Taught Me */}
        <section className="flex flex-col gap-[32px]">
          <div className="flex flex-col gap-2">
            <h2 className="font-sans font-[800] text-[24px]">What the Waitlist Taught Me</h2>
            <p className="font-sans text-[16px] text-[#6B6B6B]">
              Observations from 0 to 100+ landlords with no paid acquisition.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                num: "01",
                label: "CHANNEL",
                title: "LinkedIn Outperformed Everything",
                body: "One post — 'Everyone told me to build an app. You can't run a SaaS on WhatsApp.' — hit 15,751 impressions and reached 9,928 members organically. 105 reactions, 103 profile visits, 8 new followers. Zero paid reach. Specificity of pain > breadth of reach."
              },
              {
                num: "02",
                label: "MESSAGING",
                title: "Features Don't Convert. Friction Does.",
                body: "Posts about WhatsApp reminders and UPI got traction. Posts about the product got ignored. Landlords don't care about software. They care about not chasing tenants for rent."
              },
              {
                num: "03",
                label: "TIMING",
                title: "Distribution Before Product",
                body: "The waitlist was built before Phase 1 was complete. Starting distribution early meant the first version launched into an audience that had already self-selected. No launch cold start."
              },
              {
                num: "04",
                label: "ITERATION",
                title: "Engagement Tells You What to Build",
                body: "Comments and DMs on LinkedIn posts became the clearest signal for what the product needed. Two features added to the roadmap came directly from landlord responses to content."
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-4 border border-[#D4D0C8] bg-[#EDEBE7] p-[24px] rounded-none">
                <p className="font-mono text-[12px] uppercase">{item.num} / {item.label}</p>
                <div className="flex flex-col gap-2">
                  <h3 className="font-sans font-[800] text-[18px]">{item.title}</h3>
                  <p className="font-sans text-[14px] leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
