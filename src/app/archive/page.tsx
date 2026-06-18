const ledger = [
    {
      year: "2026",
      project: "Domvio Core Loop",
      type: "WhatsApp + UPI Product",
      status: "Active",
    },
    {
      year: "2026",
      project: "Domvio Growth Engine",
      type: "Organic LinkedIn + WhatsApp Channel",
      status: "Active",
    },
    {
      year: "2025",
      project: "AI Startup Research Pipeline",
      type: "Automated Scraping & Structuring",
      status: "Archived",
    },
    {
      year: "2025",
      project: "Investor Due Diligence CRM",
      type: "Notion API + Ops Workflow",
      status: "Archived",
    },
    {
      year: "2024",
      project: "Lead Generation Automations",
      type: "US EdTech Outreach",
      status: "Archived",
    },
  ];

export default function Archive() {


  return (
    <div className="w-full max-w-7xl mx-auto px-medium md:px-generous flex flex-col flex-grow">
      
      {/* Header Section */}
      <section className="py-24">
        <h1 className="font-display-h1-mobile md:font-display-h1 text-display-h1-mobile md:text-display-h1 text-primary mb-tight font-bold">
          Execution Archive
        </h1>
        <p className="font-body-primary text-body-primary text-text-secondary max-w-2xl">
          A chronological ledger of projects, automation experiments, and operational builds.
        </p>
      </section>

      {/* Data Table Section */}
      <section className="pb-generous">
        <div className="w-full border-y border-primary">
          
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-tight py-tight border-b border-border-muted bg-surface-container-low px-tight font-mono-data text-mono-data text-text-secondary uppercase tracking-widest text-xs hidden md:grid">
            <div className="col-span-2">YEAR</div>
            <div className="col-span-5 text-primary">PROJECT</div>
            <div className="col-span-4">TYPE</div>
            <div className="col-span-1 text-right">STATUS</div>
          </div>

          {/* Table Rows */}
          {ledger.map((item, index) => {
            const isActive = item.status === "Active";
            return (
              <div 
                key={index} 
                className="grid grid-cols-12 gap-tight py-medium border-b border-border-muted hover:bg-surface-container-lowest transition-colors px-tight items-start md:items-center last:border-b-0"
              >
                <div className="col-span-12 md:col-span-2 font-mono-data text-mono-data text-text-secondary text-sm">
                  {item.year}
                </div>
                <div className="col-span-12 md:col-span-5 font-body-primary text-body-primary font-semibold text-primary">
                  {item.project}
                  {/* Status visible on mobile only */}
                  <span className={`inline-block md:hidden ml-2 font-mono-data text-xs uppercase tracking-wider ${
                    isActive ? "text-secondary font-bold" : "text-text-secondary"
                  }`}>
                    • {item.status}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-4 font-mono-data text-mono-data text-text-secondary text-sm">
                  {item.type}
                </div>
                <div className={`col-span-12 md:col-span-1 font-mono-data text-mono-data text-right text-sm hidden md:block ${
                  isActive ? "text-secondary font-bold" : "text-text-secondary"
                }`}>
                  {item.status}
                </div>
              </div>
            );
          })}

        </div>
      </section>

    </div>
  );
}
