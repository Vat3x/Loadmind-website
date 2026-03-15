import { CreditCard, X, Gift, Headphones } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useRevealChildren } from '@/hooks/useRevealChildren';

const badges = [
  { icon: CreditCard, key: 'trust.noCard' },
  { icon: X, key: 'trust.cancel' },
  { icon: Gift, key: 'trust.freeTrial' },
  { icon: Headphones, key: 'trust.support' },
] as const;

export function TrustSection() {
  const { t } = useLanguage();
  const ref = useRevealChildren<HTMLElement>();

  return (
    <section ref={ref} className="relative bg-slate-950 border-y border-slate-800/50 py-8 z-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {badges.map((b, i) => (
            <div
              key={b.key}
              className={`reveal reveal-delay-${i + 1} flex items-center justify-center gap-3`}
            >
              <b.icon className="h-5 w-5 text-blue-400 shrink-0" />
              <span className="text-sm font-medium text-slate-300">{t(b.key)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
