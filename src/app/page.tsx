export default function Home() {
  return (
    <div className="px-4 py-16 space-y-16">
      {/* Hero Section */}
      <section className="max-w-4xl space-y-6 pt-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-primary leading-tight tracking-tight">
          Product Builder.<br />Zero Ad Spend.<br />100+ Waitlist.
        </h1>
        <p className="text-xl text-primary/80 max-w-2xl leading-relaxed">
          Founder of Domvio — a WhatsApp-first rent collection platform. Built the core loop in 12 weeks using AI-first workflows. No engineering background.
        </p>
        <div className="flex gap-4 pt-4">
          <button className="bg-primary text-white px-6 py-3 font-bold border border-primary hover:bg-surface hover:text-primary transition-colors">
            See Domvio
          </button>
          <button className="bg-transparent text-primary px-6 py-3 font-bold border border-primary hover:bg-surface transition-colors">
            How I Work
          </button>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-primary pt-8">
        <div className="border border-primary p-4">
          <div className="text-sm font-mono uppercase mb-2">ARR</div>
          <div className="text-3xl font-bold">$12k</div>
        </div>
        <div className="border border-primary p-4">
          <div className="text-sm font-mono uppercase mb-2">Users</div>
          <div className="text-3xl font-bold">140+</div>
        </div>
        <div className="border border-primary p-4">
          <div className="text-sm font-mono uppercase mb-2">Build Time</div>
          <div className="text-3xl font-bold">12 Wks</div>
        </div>
        <div className="border border-primary p-4">
          <div className="text-sm font-mono uppercase mb-2">Status</div>
          <div className="text-3xl font-bold">Live</div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="border-t border-primary pt-16 mt-16">
        <h2 className="text-3xl font-bold mb-8">Case Study: Domvio</h2>
        <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
                <h3 className="text-xl font-bold">The Problem</h3>
                <p className="text-primary/80">Landlords manage 5-20 units using chaotic WhatsApp groups and scattered UPI screenshots. No system of record.</p>

                <h3 className="text-xl font-bold">The Solution</h3>
                <p className="text-primary/80">A WhatsApp bot that acts as a property manager. It sends automated rent reminders, collects UPI payments, and auto-generates receipts without the user ever leaving WhatsApp.</p>
            </div>
            <div className="border border-primary bg-surface p-8 flex items-center justify-center">
                <div className="border border-primary bg-white w-full max-w-sm h-96 flex flex-col p-4 shadow-none">
                    <div className="font-mono text-sm border-b border-primary pb-2 mb-4">WhatsApp Demo</div>
                    <div className="space-y-4">
                        <div className="bg-surface border border-primary p-2 mr-12 text-sm">Hi Rajesh, rent of ₹12,000 for November is due on the 1st.</div>
                        <div className="bg-surface border border-primary p-2 mr-12 text-sm">Pay here → [UPI link]</div>
                        <div className="bg-primary text-white border border-primary p-2 ml-12 text-sm text-right">Payment of ₹12,000 confirmed ✓</div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
