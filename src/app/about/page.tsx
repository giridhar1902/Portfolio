export default function About() {
  return (
    <div className="px-4 py-16 space-y-16">
      <section className="max-w-4xl space-y-6 pt-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-primary leading-tight tracking-tight">
          Operator Context
        </h1>
      </section>

      <section className="grid md:grid-cols-3 gap-8 border-t border-primary pt-8">
        <div className="md:col-span-1">
            <div className="w-full aspect-square border border-primary bg-surface flex items-center justify-center p-4">
               <div className="w-full h-full border border-primary border-dashed flex items-center justify-center text-sm font-mono text-primary/50">
                   [ IMAGE: GIRIDHAR_HEADSHOT.WEBP ]
               </div>
            </div>
        </div>
        <div className="md:col-span-2 space-y-6 text-lg">
            <p>
                I am a non-technical founder who leverages AI to build functional software. My approach is strictly utilitarian: find a painful workflow, build a minimal solution, and charge for it.
            </p>
            <p>
                Before building products, I worked in operations logistics, where I learned that complex problems usually require simple, robust solutions rather than clever engineering.
            </p>
            <div className="border border-primary p-6 mt-8 space-y-4 bg-surface">
                <h3 className="font-bold border-b border-primary pb-2 font-mono text-sm uppercase">Operating Principles</h3>
                <ul className="list-disc pl-4 space-y-2">
                    <li>Speed over perfection.</li>
                    <li>Function over form.</li>
                    <li>Solve the problem, don&apos;t just write code.</li>
                    <li>If it requires a manual, it&apos;s too complicated.</li>
                </ul>
            </div>
        </div>
      </section>
    </div>
  );
}
