import type { LucideIcon } from 'lucide-react';

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export function StepCard({ stepNumber, title, description, icon: Icon }: StepCardProps) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl icon-gradient">
        <Icon className="h-7 w-7 text-white" />
      </div>
      <div className="mb-2 text-xs font-medium uppercase tracking-widest text-warm">
        Step {stepNumber}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-fg">{description}</p>
    </div>
  );
}
