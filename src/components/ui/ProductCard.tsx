import type { LucideIcon } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { Button } from './Button';
import { Badge } from './Badge';

interface ProductCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  ctaText: string;
  ctaHref?: string;
  comingSoon?: boolean;
}

export function ProductCard({ icon: Icon, title, description, ctaText, ctaHref, comingSoon }: ProductCardProps) {
  return (
    <GlassCard className={`flex flex-col ${comingSoon ? 'opacity-70' : ''}`} hover={!comingSoon}>
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg icon-gradient">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        {comingSoon && <Badge variant="coming-soon">Coming Soon</Badge>}
      </div>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-fg">{description}</p>
      <Button
        variant={comingSoon ? 'disabled' : 'secondary'}
        href={ctaHref}
        size="sm"
      >
        {ctaText}
      </Button>
    </GlassCard>
  );
}
