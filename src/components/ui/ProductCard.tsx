import type { LucideIcon } from 'lucide-react';
import { Card } from './Card';
import { Button } from './Button';
import { Badge } from './Badge';

interface ProductCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  ctaText: string;
  ctaHref?: string;
  comingSoon?: boolean;
  theme?: 'dark' | 'light';
  imageUrl?: string;
}

export function ProductCard({ icon: Icon, title, description, ctaText, ctaHref, comingSoon, theme = 'dark', imageUrl }: ProductCardProps) {
  const isDark = theme === 'dark';

  return (
    <Card theme={theme} className={`flex flex-col h-full ${comingSoon ? 'opacity-70' : ''}`} hover={!comingSoon}>
      {imageUrl && (
        <div className="mb-6 h-48 w-full overflow-hidden rounded-2xl relative group-hover:shadow-lg transition-all">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-slate-900/80' : 'from-slate-100/80'} to-transparent opacity-60`}></div>
        </div>
      )}

      <div className="mb-4 flex items-center gap-4">
        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${isDark ? 'bg-slate-800' : 'bg-blue-100'}`}>
          <Icon className={`h-6 w-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
        </div>
        <div>
          <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
          {comingSoon && <Badge variant="coming-soon">Coming Soon</Badge>}
        </div>
      </div>
      <p className={`mb-8 flex-1 text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{description}</p>
      <div className="mt-auto">
        <Button
          theme={theme}
          variant={comingSoon ? 'disabled' : 'secondary'}
          href={ctaHref}
        >
          {ctaText}
        </Button>
      </div>
    </Card>
  );
}
