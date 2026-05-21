export default function Stack() {
  return (
    <div className="px-4 py-16 space-y-16 max-w-4xl mx-auto">
      <section className="space-y-6 pt-16">
        <h1 className="text-[48px] font-[800] text-text-primary leading-tight tracking-tight font-sans">
          Tooling & Leverage
        </h1>
        <p className="text-xl text-text-primary max-w-2xl leading-relaxed">
          Optimizing for output velocity. AI models as senior engineering partners — not autocomplete.
        </p>
      </section>

      <section>
        <div className="grid md:grid-cols-2 gap-0 border border-border-muted border-b-0 border-r-0">

          <div className="bg-bg-surface p-8 space-y-4 border-r border-b border-border-muted rounded-none">
            <div className="font-mono text-[12px] uppercase text-[#6B6B6B]">
              01 / ORCHESTRATION
            </div>
            <h2 className="text-2xl font-bold font-sans text-text-primary">AI-First Development</h2>
            <p className="text-text-primary/80 leading-relaxed">
              Delegating syntax generation and scaffolding to language models. Human effort reserved for architecture, product logic, and judgment calls.
            </p>
            <div className="pt-4 font-mono text-sm text-[#6B6B6B] space-y-1">
              <div>+ Cursor IDE</div>
              <div>+ Claude Code</div>
              <div>+ GitHub</div>
            </div>
          </div>

          <div className="bg-bg-surface p-8 space-y-4 border-r border-b border-border-muted rounded-none">
            <div className="font-mono text-[12px] uppercase text-[#6B6B6B]">
              02 / INTERFACE
            </div>
            <h2 className="text-2xl font-bold font-sans text-text-primary">Utilitarian Frontend</h2>
            <p className="text-text-primary/80 leading-relaxed">
              Functional UI built for rapid iteration. Information density and zero-latency interactions over aesthetic polish.
            </p>
            <div className="pt-4 font-mono text-sm text-[#6B6B6B] space-y-1">
              <div>+ React + Vite</div>
              <div>+ Tailwind CSS</div>
              <div>+ Vercel</div>
            </div>
          </div>

          <div className="bg-bg-surface p-8 space-y-4 border-r border-b border-border-muted rounded-none">
            <div className="font-mono text-[12px] uppercase text-[#6B6B6B]">
              03 / DISTRIBUTION
            </div>
            <h2 className="text-2xl font-bold font-sans text-text-primary">Zero-Friction Rails</h2>
            <p className="text-text-primary/80 leading-relaxed">
              Bypassing app-install friction by embedding utility into existing user habits — WhatsApp, UPI, native communication channels.
            </p>
            <div className="pt-4 font-mono text-sm text-[#6B6B6B] space-y-1">
              <div>+ WhatsApp Business API</div>
              <div>+ UPI Gateways</div>
              <div>+ Interakt</div>
            </div>
          </div>

          <div className="bg-bg-surface p-8 space-y-4 border-r border-b border-border-muted rounded-none">
            <div className="font-mono text-[12px] uppercase text-[#6B6B6B]">
              04 / GROWTH SYSTEMS
            </div>
            <h2 className="text-2xl font-bold font-sans text-text-primary">Research & Distribution</h2>
            <p className="text-text-primary/80 leading-relaxed">
              Building repeatable research playbooks, organic content systems, and channel experiments. Track what moves numbers, cut what doesn&apos;t.
            </p>
            <div className="pt-4 font-mono text-sm text-[#6B6B6B] space-y-1">
              <div>+ LinkedIn organic</div>
              <div>+ Content automation</div>
              <div>+ Analytics workflows</div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
