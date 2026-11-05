import Link from "next/link";

const proof = [
  { value: "100+", label: "Landlords waitlisted, ₹0 paid" },
  { value: "12", label: "Weeks to ship the core loop" },
  { value: "2", label: "Personas, one onboarding flow" },
];

const capabilities = [
  {
    tag: "01 / OWN THE EXPERIENCE",
    title: "End-to-end UX ownership",
    body: "I designed Domvio's whole surface myself: sign-in, the onboarding split between landlords and tenants, the WhatsApp loop and receipts. Every screen has a reason it exists.",
  },
  {
    tag: "02 / HUNT FRICTION",
    title: "Onboarding & drop-off",
    body: "I audit flows step by step: where people stall, where the copy contradicts the product, where a field isn't needed. I started with my own product.",
    href: "/onboarding",
    cta: "Read the audit",
  },
  {
    tag: "03 / SHIP THE SIMPLEST THING",
    title: "Taste over feature count",
    body: "Domvio has no app. Everyone said build one. Landlords already live in WhatsApp, so the product lives there too. Cutting scope is a product decision, not a compromise.",
    href: "/domvio",
    cta: "See the case study",
  },
  {
    tag: "04 / AI-NATIVE BY DEFAULT",
    title: "Prototype, don't just spec",
    body: "Mechanical engineer, no coding background, shipped a working product with Claude Code and Cursor. I can turn a PRD into a clickable prototype before review.",
    href: "/process",
    cta: "How I work",
  },
];

export default function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto px-medium py-generous space-y-generous flex flex-col flex-1">
      {/* Hero */}
      <section className="max-w-4xl space-y-medium pt-generous flex flex-col items-start">
        <div className="font-mono-data text-mono-data uppercase text-surface-tint tracking-widest text-xs">
          Product Manager · 0→1 · SMB products
        </div>
        <h1 className="font-display-h1 text-display-h1-mobile md:text-display-h1 text-primary tracking-tighter">
          I turn messy workflows
          <br />
          into simple products
          <br />
          small businesses actually use.
        </h1>
        <p className="font-subheader-h3 text-subheader-h3 text-on-surface-variant max-w-2xl leading-relaxed">
          I founded Domvio and ran it as its PM. It handles rent collection for India&apos;s small landlords over WhatsApp. I owned the roadmap, the UX, onboarding, product marketing and distribution.
        </p>
        <div className="flex flex-wrap gap-tight pt-tight">
          <Link
            href="/onboarding"
            className="bg-primary text-on-primary px-medium py-tight font-body-primary text-body-primary font-bold hover:bg-surface-tint border border-primary transition-colors inline-block"
          >
            Onboarding Audit
          </Link>
          <Link
            href="/domvio"
            className="bg-transparent text-primary px-medium py-tight font-body-primary text-body-primary font-bold hover:bg-surface-container border border-primary transition-colors inline-block"
          >
            Domvio Case Study
          </Link>
        </div>
      </section>

      {/* Proof row */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-medium">
        {proof.map((p) => (
          <div
            key={p.label}
            className="border border-primary p-medium flex flex-col items-center justify-center bg-bg-base text-center"
          >
            <div className="font-display-h1 text-display-h1-mobile md:text-display-h1 text-primary">{p.value}</div>
            <div className="font-mono-data text-mono-data text-on-surface-variant uppercase mt-tight tracking-widest text-xs">
              {p.label}
            </div>
          </div>
        ))}
      </section>

      {/* What I bring */}
      <section className="space-y-medium">
        <h2 className="font-header-h2 text-header-h2 text-primary border-b border-primary pb-tight">
          What I Bring to a Product Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-medium">
          {capabilities.map((c) => (
            <article key={c.tag} className="border border-primary p-medium bg-bg-base flex flex-col gap-tight">
              <div className="font-mono-data text-mono-data text-surface-tint uppercase tracking-widest text-xs">
                {c.tag}
              </div>
              <h3 className="font-subheader-h3 text-subheader-h3 text-primary">{c.title}</h3>
              <p className="font-body-primary text-body-primary text-on-surface-variant leading-relaxed flex-grow">
                {c.body}
              </p>
              {c.href && (
                <Link
                  href={c.href}
                  className="font-mono-data text-mono-data text-xs uppercase tracking-widest text-primary underline hover:text-secondary pt-tight self-start"
                >
                  {c.cta} →
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Customer-facing history */}
      <section className="space-y-medium">
        <h2 className="font-header-h2 text-header-h2 text-primary border-b border-primary pb-tight">
          Years in Front of Customers
        </h2>
        <p className="font-body-primary text-body-primary text-on-surface-variant max-w-3xl">
          Before product, I spent years in sales and operations: closing customers, hearing objections, and building workflows for operators. That is where my customer-first instinct comes from.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-medium">
          <div className="border border-primary p-medium bg-bg-surface flex flex-col justify-between min-h-[160px]">
            <p className="font-body-primary text-body-primary font-bold text-primary">COO · UnRed</p>
            <p className="font-body-secondary text-body-secondary text-on-surface-variant pt-medium">
              Designed investor and due-diligence workflows for early-stage startups.
            </p>
          </div>
          <div className="border border-primary p-medium bg-bg-surface flex flex-col justify-between min-h-[160px]">
            <p className="font-body-primary text-body-primary font-bold text-primary">Top Revenue · Bhanzu</p>
            <p className="font-body-secondary text-body-secondary text-on-surface-variant pt-medium">
              Promoted in 3 months. Rising Star award.
            </p>
          </div>
          <div className="border border-primary p-medium bg-bg-surface flex flex-col justify-between min-h-[160px]">
            <p className="font-body-primary text-body-primary font-bold text-primary">182% of Target · Great Learning</p>
            <p className="font-body-secondary text-body-secondary text-on-surface-variant pt-medium">
              Rookie Rockstar Award in my first month.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
