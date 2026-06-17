import React from 'react';

interface ExecutionStackCardProps {
  title: string;
  description: string;
}

export function ExecutionStackCard({ title, description }: ExecutionStackCardProps) {
  return (
    <div className="border border-primary p-medium bg-bg-base hover:-translate-y-1 transition-transform duration-200">
      <h3 className="font-subheader-h3 text-subheader-h3 mb-tight text-primary">
        {title}
      </h3>
      <p className="font-body-secondary text-body-secondary text-on-surface-variant">
        {description}
      </p>
    </div>
  );
}
