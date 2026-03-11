import { Check } from 'lucide-react';
import { Card } from './Card';
import { Button } from './Button';

interface PricingCardProps {
  planName: string;
  price: string;
  period: string;
  duration: string;
  features: { label: string; included: boolean }[];
  ctaText: string;
  ctaHref: string;
  highlighted?: boolean;
  note?: string;
}

export function PricingCard({
  planName,
  price,
  period,
  duration,
  features,
  ctaText,
  ctaHref,
  highlighted,
  note,
}: PricingCardProps) {
  return (
    <Card className={`flex flex-col ${highlighted ? 'border-primary' : ''}`}>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">{planName}</h3>
        <p className="text-xs text-muted-fg">{duration}</p>
      </div>
      <div className="mb-6">
        <span className="text-4xl font-bold gradient-text">{price}</span>
        <span className="text-muted-fg">{period}</span>
      </div>
      <ul className="mb-8 flex-1 space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <Check className={`h-4 w-4 ${feature.included ? 'text-primary' : 'text-slate-600'}`} />
            <span className={`text-sm ${feature.included ? 'text-foreground' : 'text-slate-600'}`}>
              {feature.label}
            </span>
          </li>
        ))}
      </ul>
      <Button
        variant={highlighted ? 'primary' : 'secondary'}
        href={ctaHref}
        className="w-full"
      >
        {ctaText}
      </Button>
      {note && (
        <p className="mt-3 text-center text-xs text-muted-fg">{note}</p>
      )}
    </Card>
  );
}
