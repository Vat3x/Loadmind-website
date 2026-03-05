import type { LucideIcon } from 'lucide-react';
import { Card } from './Card';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card hover>
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl icon-gradient">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-fg">{description}</p>
    </Card>
  );
}
