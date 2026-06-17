export default function OutputHistoryCard({ title, description }: { title: string, description: string }) {
  return (
    <div className="border border-primary p-medium bg-bg-surface flex flex-col justify-between min-h-[160px]">
      <p className="font-body-primary text-body-primary font-bold text-primary">
        {title}
      </p>
      <div className="mt-auto pt-medium">
        <p className="font-body-secondary text-body-secondary text-on-surface-variant">
          {description}
        </p>
      </div>
    </div>
  );
}
