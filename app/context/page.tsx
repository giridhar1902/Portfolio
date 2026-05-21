export default function Context() {
  return (
    <div className="px-4 py-16 space-y-16 max-w-4xl mx-auto">
      <section className="space-y-6 pt-16">
        <h1 className="text-[48px] font-[800] text-text-primary leading-tight tracking-tight font-sans">
          Operator Context
        </h1>
        <p className="font-bold text-text-primary max-w-2xl leading-relaxed text-lg">
          Why I build the way I build.
        </p>
      </section>

      <section>
        <div className="grid md:grid-cols-2 gap-8 border-t border-border-muted pt-8">

          {/* LEFT */}
          <div className="bg-bg-surface p-8 space-y-6 border border-border-muted rounded-none h-full">
            <h2 className="text-[24px] font-[700] font-sans text-text-primary">The Origin</h2>
            <div className="space-y-4 text-text-primary/80 leading-relaxed font-sans text-[16px]">
                <p>
                  Domvio wasn&apos;t a whiteboard idea. It came from watching family members manage rental properties through a mess of WhatsApp messages, missed payments, and no paper trail. The problem was real before the product existed.
                </p>
                <p>
                  No formal engineering background meant one thing: if I couldn&apos;t ship it using AI tools as leverage, it didn&apos;t get built. That constraint became the workflow.
                </p>
                <p>
                  The constraint of having no engineering background forced a different kind of rigor. Every feature had to be justified by landlord behavior, not technical curiosity. That filter — does this remove a real friction point or not — became the only product principle that mattered.
                </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-8 flex flex-col h-full">
            <div className="bg-bg-surface p-8 space-y-4 border border-border-muted rounded-none flex-1">
                <h2 className="text-[24px] font-[700] font-sans text-text-primary">Market Psychology</h2>
                <p className="text-text-primary/80 leading-relaxed font-sans text-[16px]">
                  Execution requires seeing markets without wishful thinking. Understanding where capital actually flows — not where founders hope it flows — is the difference between building real utility and building for a market that doesn&apos;t exist.
                </p>
            </div>
            <div className="bg-bg-surface p-8 space-y-4 border border-border-muted rounded-none flex-1">
                <h2 className="text-[24px] font-[700] font-sans text-text-primary">On Growth</h2>
                <p className="text-text-primary/80 leading-relaxed font-sans text-[16px]">
                  Growth is not a department. It&apos;s the feedback loop between product and distribution. The fastest way to learn what a market wants is to put something in front of it and measure what happens. Then cut what doesn&apos;t move.
                </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
