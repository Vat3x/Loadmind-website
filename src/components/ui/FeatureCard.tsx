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
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800">
        <Icon className="h-6 w-6 text-blue-400" />
      </div>
      <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-400">{description}</p>
    </Card>
  );
}
