export default function Archive() {
  return (
    <div className="px-4 py-16 space-y-16 max-w-4xl mx-auto">
      <section className="space-y-6 pt-16">
        <h1 className="text-[48px] font-[800] text-text-primary leading-tight tracking-tight font-sans">
          Execution Archive
        </h1>
        <p className="text-[16px] text-[#6B6B6B] font-[400] max-w-2xl leading-relaxed font-sans">
          A chronological ledger of projects, automation experiments, and operational builds.
        </p>
      </section>

      <section>
        <div className="w-full">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-border-muted font-mono text-[12px] text-[#6B6B6B] uppercase">
                        <th className="py-4 pr-4 font-normal">YEAR</th>
                        <th className="py-4 pr-4 font-normal">PROJECT</th>
                        <th className="py-4 pr-4 font-normal">TYPE</th>
                        <th className="py-4 font-normal">STATUS</th>
                    </tr>
                </thead>
                <tbody className="font-sans text-[16px] text-[#6B6B6B] font-[400]">
                    <tr className="border-b border-border-muted">
                        <td className="py-4 pr-4">2026</td>
                        <td className="py-4 pr-4 font-[600] text-[#0A0A0A]">Domvio Core Loop</td>
                        <td className="py-4 pr-4">WhatsApp + UPI Product</td>
                        <td className="py-4 text-[#2563EB]">Active</td>
                    </tr>
                    <tr className="border-b border-border-muted">
                        <td className="py-4 pr-4">2026</td>
                        <td className="py-4 pr-4 font-[600] text-[#0A0A0A]">Domvio Growth Engine</td>
                        <td className="py-4 pr-4">Organic LinkedIn + WhatsApp Channel</td>
                        <td className="py-4 text-[#2563EB]">Active</td>
                    </tr>
                    <tr className="border-b border-border-muted">
                        <td className="py-4 pr-4">2025</td>
                        <td className="py-4 pr-4 font-[600] text-[#0A0A0A]">AI Startup Research Pipeline</td>
                        <td className="py-4 pr-4">Automated Scraping & Structuring</td>
                        <td className="py-4">Archived</td>
                    </tr>
                     <tr className="border-b border-border-muted">
                        <td className="py-4 pr-4">2025</td>
                        <td className="py-4 pr-4 font-[600] text-[#0A0A0A]">Investor Due Diligence CRM</td>
                        <td className="py-4 pr-4">Notion API + Ops Workflow</td>
                        <td className="py-4">Archived</td>
                    </tr>
                    <tr className="border-b border-border-muted">
                        <td className="py-4 pr-4">2024</td>
                        <td className="py-4 pr-4 font-[600] text-[#0A0A0A]">Lead Generation Automations</td>
                        <td className="py-4 pr-4">US EdTech Outreach</td>
                        <td className="py-4">Archived</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </section>
    </div>
  );
}
