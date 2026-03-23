import { Check, X } from 'lucide-react';
import { Card } from './Card';
import { Button } from './Button';
import { Badge } from './Badge';

interface PricingCardProps {
  planName: string;
  price: string;
  period: string;
  volume: string;
  description: string;
  features: { label: string; included: boolean }[];
  ctaText: string;
  ctaHref: string;
  popular?: boolean;
  enterprise?: boolean;
  note?: string;
  savings?: string;
  onCtaClick?: () => void;
}

export function PricingCard({
  planName,
  price,
  period,
  volume,
  description,
  features,
  ctaText,
  ctaHref,
  popular,
  enterprise,
  note,
  savings,
  onCtaClick,
}: PricingCardProps) {
  return (
    <Card
      className={`relative flex flex-col ${
        popular
          ? 'border-primary shadow-lg shadow-primary/10'
          : enterprise
            ? 'border-border-accent border-dashed'
            : ''
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge variant="default">Popular</Badge>
        </div>
      )}

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">{planName}</h3>
        <p className="mt-1 text-xs text-muted-fg">{description}</p>
      </div>

      <div className="mb-2">
        {enterprise ? (
          <span className="text-3xl font-bold text-foreground">Custom</span>
        ) : (
          <>
            <span className="text-4xl font-bold gradient-text">{price}</span>
            <span className="text-muted-fg">{period}</span>
          </>
        )}
      </div>

      <p className="mb-6 text-sm font-medium text-slate-200">{volume}</p>

      {savings && (
        <p className="mb-4 text-xs font-semibold text-emerald-400">
          {savings}
        </p>
      )}

      <ul className="mb-8 flex-1 space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            {feature.included ? (
              <Check className="h-4 w-4 shrink-0 text-primary" />
            ) : (
              <X className="h-4 w-4 shrink-0 text-slate-600" />
            )}
            <span
              className={`text-sm ${
                feature.included ? 'text-foreground' : 'text-slate-600'
              }`}
            >
              {feature.label}
            </span>
          </li>
        ))}
      </ul>

      <Button
        variant={popular ? 'primary' : enterprise ? 'ghost' : 'secondary'}
        href={onCtaClick ? undefined : ctaHref}
        onClick={onCtaClick}
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
