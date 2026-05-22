export default function Stack() {
  return (
    <div className="w-full max-w-7xl mx-auto px-medium md:px-generous flex flex-col flex-grow">
      
      {/* Header Section */}
      <header className="py-24">
        <h1 className="font-display-h1 text-display-h1-mobile md:text-display-h1 text-primary mb-medium font-bold">
          Tooling & Leverage
        </h1>
        <p className="font-body-primary text-body-primary text-text-secondary max-w-2xl">
          Optimizing for output velocity. AI models as senior engineering partners — not autocomplete.
        </p>
      </header>

      {/* The Blueprint Grid */}
      <section className="border border-border-muted mb-generous">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Cell 1 */}
          <article className="p-medium md:p-generous border-b md:border-b-0 md:border-r border-border-muted flex flex-col gap-medium bg-bg-base">
            <div className="font-mono-data text-mono-data text-text-secondary uppercase tracking-widest text-xs">
              01 / ORCHESTRATION
            </div>
            <h3 className="font-subheader-h3 text-subheader-h3 text-primary font-semibold">
              AI-First Development
            </h3>
            <p className="font-body-primary text-body-primary text-text-secondary mb-medium flex-grow leading-relaxed">
              Delegating syntax generation and scaffolding to language models. Human effort reserved for architecture, product logic, and judgment calls.
            </p>
            <ul className="font-mono-data text-mono-data text-primary space-y-tight border-t border-border-muted pt-medium text-sm">
              <li>+ Cursor IDE</li>
              <li>+ Claude Code</li>
              <li>+ GitHub</li>
            </ul>
          </article>

          {/* Cell 2 */}
          <article className="p-medium md:p-generous border-b border-border-muted flex flex-col gap-medium bg-bg-base">
            <div className="font-mono-data text-mono-data text-text-secondary uppercase tracking-widest text-xs">
              02 / INTERFACE
            </div>
            <h3 className="font-subheader-h3 text-subheader-h3 text-primary font-semibold">
              Utilitarian Frontend
            </h3>
            <p className="font-body-primary text-body-primary text-text-secondary mb-medium flex-grow leading-relaxed">
              Functional UI built for rapid iteration. Information density and zero-latency interactions over aesthetic polish.
            </p>
            <ul className="font-mono-data text-mono-data text-primary space-y-tight border-t border-border-muted pt-medium text-sm">
              <li>+ React + Vite</li>
              <li>+ Tailwind CSS</li>
              <li>+ Vercel</li>
            </ul>
          </article>

          {/* Cell 3 */}
          <article className="p-medium md:p-generous border-b md:border-b-0 md:border-r border-border-muted flex flex-col gap-medium bg-bg-base">
            <div className="font-mono-data text-mono-data text-text-secondary uppercase tracking-widest text-xs">
              03 / DISTRIBUTION
            </div>
            <h3 className="font-subheader-h3 text-subheader-h3 text-primary font-semibold">
              Zero-Friction Rails
            </h3>
            <p className="font-body-primary text-body-primary text-text-secondary mb-medium flex-grow leading-relaxed">
              Bypassing app-install friction by embedding utility into existing user habits — WhatsApp, UPI, native communication channels.
            </p>
            <ul className="font-mono-data text-mono-data text-primary space-y-tight border-t border-border-muted pt-medium text-sm">
              <li>+ WhatsApp Business API</li>
              <li>+ UPI Gateways</li>
              <li>+ Interakt</li>
            </ul>
          </article>

          {/* Cell 4 */}
          <article className="p-medium md:p-generous flex flex-col gap-medium bg-bg-base">
            <div className="font-mono-data text-mono-data text-text-secondary uppercase tracking-widest text-xs">
              04 / GROWTH SYSTEMS
            </div>
            <h3 className="font-subheader-h3 text-subheader-h3 text-primary font-semibold">
              Research & Distribution
            </h3>
            <p className="font-body-primary text-body-primary text-text-secondary mb-medium flex-grow leading-relaxed">
              Building repeatable research playbooks, organic content systems, and channel experiments. Track what moves numbers, cut what doesn't.
            </p>
            <ul className="font-mono-data text-mono-data text-primary space-y-tight border-t border-border-muted pt-medium text-sm">
              <li>+ LinkedIn organic</li>
              <li>+ Content automation</li>
              <li>+ Analytics workflows</li>
            </ul>
          </article>

        </div>
      </section>
    </div>
  );
}
