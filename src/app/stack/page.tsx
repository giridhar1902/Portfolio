export default function Stack() {
  return (
    <div className="px-4 py-16 space-y-16">
      <section className="max-w-4xl space-y-6 pt-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-primary leading-tight tracking-tight">
          Stack & Tooling
        </h1>
        <p className="text-xl text-primary/80 max-w-2xl leading-relaxed">
          The pragmatic tools I use to build and ship products fast.
        </p>
      </section>

      <section className="border-t border-primary pt-8">
         <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-primary p-6 space-y-4">
                <h2 className="text-2xl font-bold border-b border-primary pb-2">Frontend</h2>
                <ul className="space-y-2 font-mono text-sm">
                    <li>Next.js (App Router)</li>
                    <li>Tailwind CSS</li>
                    <li>Framer Motion (Sparingly)</li>
                    <li>Lucide Icons</li>
                </ul>
            </div>
            <div className="border border-primary p-6 space-y-4">
                <h2 className="text-2xl font-bold border-b border-primary pb-2">Backend & Database</h2>
                <ul className="space-y-2 font-mono text-sm">
                    <li>Supabase (PostgreSQL)</li>
                    <li>Prisma ORM</li>
                    <li>Next.js API Routes</li>
                </ul>
            </div>
             <div className="border border-primary p-6 space-y-4">
                <h2 className="text-2xl font-bold border-b border-primary pb-2">AI Workflow</h2>
                <ul className="space-y-2 font-mono text-sm">
                    <li>Cursor (Primary IDE)</li>
                    <li>Claude 3.5 Sonnet (Architecture)</li>
                    <li>GPT-4o (Quick scripts)</li>
                </ul>
            </div>
            <div className="border border-primary p-6 space-y-4">
                <h2 className="text-2xl font-bold border-b border-primary pb-2">Deploy & Ops</h2>
                <ul className="space-y-2 font-mono text-sm">
                    <li>Vercel (Hosting)</li>
                    <li>PostHog (Analytics)</li>
                    <li>Sentry (Error tracking)</li>
                </ul>
            </div>
         </div>
      </section>
    </div>
  );
}
