export default function Context() {
  return (
    <div className="w-full max-w-7xl mx-auto px-medium md:px-generous flex flex-col flex-grow">
      
      {/* Header Section */}
      <header className="py-24 border-b border-primary">
        <h1 className="font-display-h1 text-display-h1-mobile md:text-display-h1 text-primary mb-tight font-bold">
          Operator Context
        </h1>
        <p className="font-subheader-h3 text-subheader-h3 text-primary font-bold max-w-3xl">
          Why I build the way I build.
        </p>
      </header>

      {/* Split-Pane Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Column */}
        <section className="p-medium md:p-generous border-b md:border-b-0 md:border-r border-primary flex-1">
          <h2 className="font-header-h2 text-header-h2 text-primary mb-medium">
            The Origin
          </h2>
          <div className="font-body-primary text-body-primary text-primary space-y-medium leading-relaxed">
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
        </section>

        {/* Right Column */}
        <section className="flex flex-col">
          
          {/* Block 1 */}
          <article className="p-medium md:p-generous border-b border-primary flex-1">
            <h3 className="font-subheader-h3 text-subheader-h3 text-primary mb-tight">
              Market Psychology
            </h3>
            <p className="font-body-primary text-body-primary text-primary leading-relaxed">
              Execution requires seeing markets without wishful thinking. Understanding where capital actually flows — not where founders hope it flows — is the difference between building real utility and building for a market that doesn&apos;t exist.
            </p>
          </article>

          {/* Block 2 */}
          <article className="p-medium md:p-generous flex-1">
            <h3 className="font-subheader-h3 text-subheader-h3 text-primary mb-tight">
              On Growth
            </h3>
            <p className="font-body-primary text-body-primary text-primary leading-relaxed">
              Growth is not a department. It&apos;s the feedback loop between product and distribution. The fastest way to learn what a market wants is to put something in front of it and measure what happens. Then cut what doesn&apos;t move.
            </p>
          </article>

        </section>

      </div>
    </div>
  );
}
