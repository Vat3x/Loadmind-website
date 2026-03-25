import { Box, MapPin, Sparkles, Zap } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useRevealChildren } from '@/hooks/useRevealChildren';

const badges = [
  { icon: Box, key: 'trust.noCard' },
  { icon: MapPin, key: 'trust.cancel' },
  { icon: Sparkles, key: 'trust.freeTrial' },
  { icon: Zap, key: 'trust.support' },
] as const;

export function TrustSection() {
  const { t } = useLanguage();
  const ref = useRevealChildren<HTMLElement>();

  return (
    <section ref={ref} className="relative bg-blue-950/40 border-y border-blue-900/40 py-8 z-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {badges.map((b, i) => (
            <div
              key={b.key}
              className={`reveal reveal-delay-${i + 1} flex items-center justify-center gap-3`}
            >
              <b.icon className="h-6 w-6 text-emerald-400 shrink-0" strokeWidth={1.5} />
              <span className="text-sm font-semibold text-white">{t(b.key)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
