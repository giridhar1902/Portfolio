export default function ArchivePage() {
  const projects = [
    { year: "2024", id: "PRJ-08", title: "Automated Lead Routing via WhatsApp", tags: ["n8n", "WhatsApp API"] },
    { year: "2023", id: "PRJ-07", title: "Internal Dashboard for Sales Analytics", tags: ["React", "Supabase"] },
    { year: "2023", id: "PRJ-06", title: "Content Engine v2", tags: ["Next.js", "GPT-4"] },
    { year: "2022", id: "PRJ-05", title: "Payment Reconciliation Script", tags: ["Python", "Razorpay"] },
    { year: "2022", id: "PRJ-04", title: "Customer Onboarding Flow", tags: ["Typeform", "Zapier"] },
    { year: "2021", id: "PRJ-03", title: "Marketing Site Overhaul", tags: ["Webflow"] },
    { year: "2021", id: "PRJ-02", title: "Email Nurture Sequence", tags: ["Mailchimp"] },
    { year: "2020", id: "PRJ-01", title: "MVP Launch", tags: ["HTML/CSS", "Firebase"] }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="mb-16">
        <h1 className="font-sans font-[800] text-[48px] leading-[1.1] tracking-[-0.02em] mb-4 text-text-primary">
          Execution Archive
        </h1>
        <p className="font-sans font-[400] text-[16px] leading-[1.6] text-text-secondary">
          A chronological ledger of projects,<br />
          automation experiments, and operational builds.
        </p>
      </div>

      <div className="w-full">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 pb-4 border-b border-border-muted font-mono text-[12px] leading-[1.5] uppercase tracking-[0.08em] text-text-secondary">
          <div className="col-span-2">YEAR</div>
          <div className="col-span-2">ID</div>
          <div className="col-span-5">TITLE</div>
          <div className="col-span-3 text-right">TAGS</div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-border-base divide-opacity-20 border-b border-border-muted border-opacity-20">
          {projects.map((project, index) => (
            <div key={index} className="grid grid-cols-12 gap-4 py-4 font-mono text-[14px] leading-[1.5] hover:bg-bg-surface transition-colors">
              <div className="col-span-2 text-text-secondary">{project.year}</div>
              <div className="col-span-2 text-text-secondary">{project.id}</div>
              <div className="col-span-5 text-text-primary font-sans">{project.title}</div>
              <div className="col-span-3 text-right text-text-secondary">{project.tags.join(" / ")}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
