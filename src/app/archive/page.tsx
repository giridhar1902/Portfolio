export default function Archive() {
  return (
    <div className="px-4 py-16 space-y-16">
      <section className="max-w-4xl space-y-6 pt-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-text-primary leading-tight tracking-tight">
          Execution Ledger
        </h1>
        <p className="text-xl text-text-primary/80 max-w-2xl leading-relaxed">
          A chronological record of shipped experiments and dead ends.
        </p>
      </section>

      <section className="border-t border-border-base pt-8">
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b-2 border-border-base font-mono text-sm">
                        <th className="py-4 pr-4">Year</th>
                        <th className="py-4 pr-4">Project</th>
                        <th className="py-4 pr-4">Description</th>
                        <th className="py-4">Status</th>
                    </tr>
                </thead>
                <tbody className="font-mono text-sm">
                    <tr className="border-b border-border-base/30">
                        <td className="py-4 pr-4">2026</td>
                        <td className="py-4 pr-4 font-bold">Domvio</td>
                        <td className="py-4 pr-4 text-text-primary/80">WhatsApp-first rent collection</td>
                        <td className="py-4"><span className="bg-primary text-white px-2 py-1">Active</span></td>
                    </tr>
                    <tr className="border-b border-border-base/30">
                        <td className="py-4 pr-4">2025</td>
                        <td className="py-4 pr-4 font-bold">ParseBot</td>
                        <td className="py-4 pr-4 text-text-primary/80">Invoice OCR tool for freelancers</td>
                        <td className="py-4"><span className="border border-border-base px-2 py-1">Acquired</span></td>
                    </tr>
                    <tr className="border-b border-border-base/30 text-text-primary/50">
                        <td className="py-4 pr-4">2025</td>
                        <td className="py-4 pr-4 font-bold">LocalLens</td>
                        <td className="py-4 pr-4">Hyper-local newsletter aggregator</td>
                        <td className="py-4"><span className="border border-border-base/30 px-2 py-1">Sunset</span></td>
                    </tr>
                     <tr className="border-b border-border-base/30 text-text-primary/50">
                        <td className="py-4 pr-4">2024</td>
                        <td className="py-4 pr-4 font-bold">TaskGraph</td>
                        <td className="py-4 pr-4">Visual task dependency mapper</td>
                        <td className="py-4"><span className="border border-border-base/30 px-2 py-1">Sunset</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
      </section>
    </div>
  );
}
