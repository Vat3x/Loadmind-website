import type { LucideIcon } from 'lucide-react';
import { Check } from 'lucide-react';
import { Button } from './Button';

interface ProductCardProps {
  icon: LucideIcon;
  title: string;
  problem: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref?: string;
  theme?: 'dark' | 'light';
  imageUrl?: string;
  iconBg?: string;
  reverse?: boolean;
}

export function ProductCard({ icon: Icon, title, problem, description, features, ctaText, ctaHref, theme = 'dark', imageUrl, iconBg, reverse = false }: ProductCardProps) {
  const isDark = theme === 'dark';

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${reverse ? 'md:[direction:rtl]' : ''}`}>
      {/* Image */}
      {imageUrl && (
        <div className={`aspect-[4/3] w-full overflow-hidden rounded-2xl relative group ${reverse ? 'md:[direction:ltr]' : ''}`}>
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-slate-950/50' : 'from-slate-100/50'} to-transparent`} />
        </div>
      )}

      {/* Content */}
      <div className={`flex flex-col ${reverse ? 'md:[direction:ltr]' : ''}`}>
        {/* Problem hook */}
        <p className={`mb-4 text-lg md:text-xl font-semibold italic ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
          {problem}
        </p>

        {/* Title + icon */}
        <div className="mb-3 flex items-center gap-3">
          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${iconBg || (isDark ? 'bg-slate-800' : 'bg-blue-100')}`}>
            <Icon className="h-5 w-5 text-white" />
          </div>
          <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
        </div>

        {/* Description */}
        <p className={`mb-5 text-sm md:text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{description}</p>

        {/* Feature bullets */}
        <ul className="mb-6 space-y-2.5">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-2.5">
              <Check className={`h-4 w-4 shrink-0 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
              <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{f}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div>
          <Button theme={theme} variant="secondary" href={ctaHref}>
            {ctaText}
          </Button>
        </div>
      </div>
    </div>
  );
}
