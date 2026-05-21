export default function WritingPage() {
  const articles = [
    { date: "Oct 24", title: "Building Software without Engineers", readTime: "5 min" },
    { date: "Sep 24", title: "The WhatsApp Distribution Advantage", readTime: "8 min" },
    { date: "Aug 24", title: "Why I Stopped Using Redux", readTime: "4 min" },
    { date: "Jul 24", title: "Automating Customer Support with LLMs", readTime: "12 min" },
    { date: "Jun 24", title: "Design Systems for Solo Founders", readTime: "6 min" }
  ];

  return (
    <div className="max-w-3xl mx-auto p-8">
      <div className="mb-16">
        <h1 className="font-sans font-[800] text-[48px] leading-[1.1] tracking-[-0.02em] mb-4 text-text-primary">
          Writing
        </h1>
        <p className="font-sans font-[400] text-[16px] leading-[1.6] text-text-secondary">
          Thoughts on product engineering, distribution,<br />
          and operating as a team of one.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {articles.map((article, index) => (
          <article key={index} className="group cursor-pointer">
            <div className="flex items-baseline justify-between mb-2">
              <h2 className="font-sans font-[700] text-[32px] leading-[1.2] tracking-[-0.01em] text-text-primary group-hover:underline">
                {article.title}
              </h2>
            </div>
            <div className="flex items-center gap-4 font-mono text-[12px] leading-[1.5] uppercase tracking-[0.08em] text-text-secondary">
              <span>{article.date}</span>
              <span>—</span>
              <span>{article.readTime}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
