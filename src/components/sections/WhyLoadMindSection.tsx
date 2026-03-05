import { Atom, UserX, DollarSign, Target } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useRevealChildren } from '@/hooks/useRevealChildren';
import { Card } from '@/components/ui/Card';

export function WhyLoadMindSection() {
  const { t } = useLanguage();
  const ref = useRevealChildren<HTMLElement>();

  const reasons = [
    { icon: Atom, titleKey: 'why.physics.title', descKey: 'why.physics.desc' },
    { icon: UserX, titleKey: 'why.noLogin.title', descKey: 'why.noLogin.desc' },
    { icon: DollarSign, titleKey: 'why.affordable.title', descKey: 'why.affordable.desc' },
    { icon: Target, titleKey: 'why.ltl.title', descKey: 'why.ltl.desc' },
  ];

  return (
    <section ref={ref} className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="reveal mb-12 text-center text-2xl font-bold md:text-3xl gradient-text">
          {t('why.title')}
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <div key={r.titleKey} className={`reveal reveal-delay-${i + 1}`}>
              <Card hover>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg icon-gradient">
                    <r.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">{t(r.titleKey)}</h3>
                    <p className="text-sm leading-relaxed text-muted-fg">{t(r.descKey)}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
