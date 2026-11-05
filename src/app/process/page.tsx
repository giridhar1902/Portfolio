const steps = [
  {
    tag: "01 / BECOME THE POWER USER",
    title: "Use every corner of the product",
    body: "Before I form an opinion, I go through the whole product myself: the dashboard, every feature, every empty state, every settings page. I sketch a map of how the modules connect and mark where they don't.",
    output: ["Surface-area map", "Module connection graph", "List of open questions"],
  },
  {
    tag: "02 / FIND THE FRICTION",
    title: "Data first, then the customer's own words",
    body: "Drop-off by funnel step tells me where people struggle. Session replays, support threads and customer conversations tell me why. If a gap shows up in only one of those sources, it's a hypothesis, not a finding.",
    output: ["Funnel by step", "Friction log", "Severity × reach ranking"],
  },
  {
    tag: "03 / SPEC TO BE BUILT",
    title: "PRDs that survive without me in the room",
    body: "Problem, who it affects and how we know, the smallest solution, what is out of scope, edge cases, success metric. Each one ships with a clickable prototype so review is about the decision, not about picturing the screen.",
    output: ["PRD", "Clickable prototype", "Tickets with acceptance criteria"],
  },
  {
    tag: "04 / VERIFY WHAT SHIPPED",
    title: "Spec vs staging vs production",
    body: "I walk the spec, staging and production side by side. Copy drift, missing states and quiet regressions get caught before customers find them.",
    output: ["Release checklist", "Regression notes"],
  },
  {
    tag: "05 / EXPLAIN IT",
    title: "Onboarding, product pages, in-app education",
    body: "A feature people can't find doesn't exist. I write the onboarding step, the in-app tooltip and the marketing page for it, all in the language customers used to describe the problem.",
    output: ["Onboarding copy", "Feature page", "Launch post"],
  },
];

const tools = [
  { group: "Prototype & build", items: ["Claude Code", "Cursor", "React + Tailwind", "Vercel"] },
  { group: "Measure", items: ["Funnel events", "Session replays", "Customer DMs & calls"] },
  { group: "Distribute", items: ["WhatsApp Business API", "LinkedIn content system", "WhatsApp Channel"] },
];

export default function Process() {
  return (
    <div className="w-full max-w-7xl mx-auto px-medium md:px-generous flex flex-col flex-grow">
      <header className="py-24 border-b border-primary">
        <div className="font-mono-data text-mono-data uppercase text-surface-tint tracking-widest text-xs mb-medium">
          How I Work
        </div>
        <h1 className="font-display-h1 text-display-h1-mobile md:text-display-h1 text-primary mb-medium font-bold">
          From &quot;something feels off&quot; to shipped.
        </h1>
        <p className="font-body-primary text-body-primary text-text-secondary max-w-2xl">
          The loop I run on any product surface. It works for one onboarding screen and for a whole module.
        </p>
      </header>

      <section className="flex flex-col border-b border-primary mb-generous">
        {steps.map((s) => (
          <article
            key={s.tag}
            className="grid grid-cols-1 md:grid-cols-12 gap-medium py-generous border-b border-border-muted last:border-b-0"
          >
            <div className="md:col-span-4 flex flex-col gap-tight">
              <div className="font-mono-data text-mono-data text-text-secondary uppercase tracking-widest text-xs">
                {s.tag}
              </div>
              <h2 className="font-subheader-h3 text-subheader-h3 text-primary font-semibold">{s.title}</h2>
            </div>
            <p className="md:col-span-5 font-body-primary text-body-primary text-on-surface-variant leading-relaxed">
              {s.body}
            </p>
            <ul className="md:col-span-3 font-mono-data text-mono-data text-primary space-y-tight text-sm md:border-l md:border-border-muted md:pl-medium">
              {s.output.map((o) => (
                <li key={o}>+ {o}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="mb-generous flex flex-col gap-medium">
        <h2 className="font-header-h2 text-header-h2 text-primary border-b border-primary pb-tight">Toolkit</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-medium">
          {tools.map((t) => (
            <div key={t.group} className="border border-primary p-medium bg-bg-base flex flex-col gap-tight">
              <div className="font-mono-data text-mono-data text-text-secondary uppercase tracking-widest text-xs">
                {t.group}
              </div>
              <ul className="font-mono-data text-mono-data text-primary space-y-tight text-sm">
                {t.items.map((i) => (
                  <li key={i}>+ {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
