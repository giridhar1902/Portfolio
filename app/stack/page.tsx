export default function StackPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="mb-16">
        <h1 className="font-sans font-[800] text-[48px] leading-[1.1] tracking-[-0.02em] mb-4 text-text-primary">
          Tooling & Leverage
        </h1>
        <p className="font-sans font-[400] text-[16px] leading-[1.6] max-w-2xl text-text-secondary">
          Optimizing for output velocity. AI<br />
          models as senior engineering partners —<br />
          not autocomplete.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-border-muted">

        {/* Card 01 */}
        <div className="p-8 border-b border-r border-border-muted bg-bg-surface">
          <div className="font-mono text-[12px] leading-[1.5] uppercase tracking-[0.08em] text-text-secondary mb-4">
            Card 01 / ORCHESTRATION
          </div>
          <h2 className="font-sans font-[700] text-[32px] leading-[1.2] tracking-[-0.01em] text-text-primary mb-4">
            AI-First Development
          </h2>
          <p className="font-sans font-[400] text-[16px] leading-[1.6] mb-8 text-text-primary">
            Delegating syntax generation and<br />
            scaffolding to language models. Human effort<br />
            reserved for architecture, product logic,<br />
            and judgment calls.
          </p>
          <div className="font-mono font-[400] text-[14px] leading-[1.5] text-text-primary">
            + Cursor IDE / + Claude Code / + GitHub
          </div>
        </div>

        {/* Card 02 */}
        <div className="p-8 border-b border-r border-border-muted bg-bg-surface">
          <div className="font-mono text-[12px] leading-[1.5] uppercase tracking-[0.08em] text-text-secondary mb-4">
            Card 02 / INTERFACE
          </div>
          <h2 className="font-sans font-[700] text-[32px] leading-[1.2] tracking-[-0.01em] text-text-primary mb-4">
            Utilitarian Frontend
          </h2>
          <p className="font-sans font-[400] text-[16px] leading-[1.6] mb-8 text-text-primary">
            Functional UI built for rapid iteration.<br />
            Information density and zero-latency interactions<br />
            over aesthetic polish.
          </p>
          <div className="font-mono font-[400] text-[14px] leading-[1.5] text-text-primary">
            + React + Vite / + Tailwind CSS / + Vercel
          </div>
        </div>

        {/* Card 03 */}
        <div className="p-8 border-b border-r border-border-muted bg-bg-surface">
          <div className="font-mono text-[12px] leading-[1.5] uppercase tracking-[0.08em] text-text-secondary mb-4">
            Card 03 / DISTRIBUTION
          </div>
          <h2 className="font-sans font-[700] text-[32px] leading-[1.2] tracking-[-0.01em] text-text-primary mb-4">
            Zero-Friction Rails
          </h2>
          <p className="font-sans font-[400] text-[16px] leading-[1.6] mb-8 text-text-primary">
            Bypassing app-install friction by embedding<br />
            utility into existing user habits — WhatsApp,<br />
            UPI, native communication channels.
          </p>
          <div className="font-mono font-[400] text-[14px] leading-[1.5] text-text-primary">
            + WhatsApp Business API / + UPI Gateways<br />
            / + Interakt
          </div>
        </div>

        {/* Card 04 */}
        <div className="p-8 border-b border-r border-border-muted bg-bg-surface">
          <div className="font-mono text-[12px] leading-[1.5] uppercase tracking-[0.08em] text-text-secondary mb-4">
            Card 04 / GROWTH SYSTEMS
          </div>
          <h2 className="font-sans font-[700] text-[32px] leading-[1.2] tracking-[-0.01em] text-text-primary mb-4">
            Research & Distribution
          </h2>
          <p className="font-sans font-[400] text-[16px] leading-[1.6] mb-8 text-text-primary">
            Building repeatable research playbooks,<br />
            organic content systems, and channel experiments.<br />
            Track what moves numbers, cut what doesn&#39;t.
          </p>
          <div className="font-mono font-[400] text-[14px] leading-[1.5] text-text-primary">
            + LinkedIn organic / + Content automation<br />
            / + Analytics workflows
          </div>
        </div>

      </div>
    </div>
  )
}
