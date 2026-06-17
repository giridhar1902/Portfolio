import Image from "next/image";

interface FeatureCardProps {
  step: string;
  subtitle: string;
  imageAlt: string;
  imageSrc: string;
  title: string;
  description: string;
}

export function FeatureCard({
  step,
  subtitle,
  imageAlt,
  imageSrc,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="border border-primary bg-bg-base flex flex-col h-full">
      <div className="border-b border-primary p-tight bg-surface-container font-mono-data text-mono-data text-xs font-bold uppercase tracking-wider flex justify-between">
        <span>{step}</span>
        <span className="text-surface-tint">{subtitle}</span>
      </div>
      <div className="p-medium flex justify-center items-center bg-surface-container-low flex-grow border-b border-primary">
        <div className="relative w-full max-w-[240px] aspect-[9/19.5] border border-primary overflow-hidden bg-background shadow-sm">
          <Image
            alt={imageAlt}
            className="object-cover w-full h-full filter grayscale contrast-110"
            src={imageSrc}
            width={240}
            height={520}
            unoptimized
          />
        </div>
      </div>
      <div className="p-medium flex flex-col gap-tight bg-bg-base">
        <h3 className="font-subheader-h3 text-subheader-h3 text-primary font-bold">{title}</h3>
        <p className="font-body-primary text-body-primary text-on-surface text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
