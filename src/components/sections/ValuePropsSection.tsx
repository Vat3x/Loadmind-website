import { useLanguage } from '@/hooks/useLanguage';
import { useRevealChildren } from '@/hooks/useRevealChildren';
import { ValuePropBadge } from '@/components/ui/ValuePropBadge';

export function ValuePropsSection() {
  const { t } = useLanguage();
  const ref = useRevealChildren<HTMLElement>();

  const props = [
    { metricKey: 'valueProps.speed.metric', labelKey: 'valueProps.speed.label', descKey: 'valueProps.speed.desc' },
    { metricKey: 'valueProps.inspection.metric', labelKey: 'valueProps.inspection.label', descKey: 'valueProps.inspection.desc' },
    { metricKey: 'valueProps.price.metric', labelKey: 'valueProps.price.label', descKey: 'valueProps.price.desc' },
  ];

  return (
    <section ref={ref} className="relative py-20 bg-blue-950/40 border-y border-blue-900/40 z-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
          {props.map((p, i) => (
            <div key={p.metricKey} className={`reveal reveal-delay-${i + 1} value-divider px-10 py-4`}>
              <ValuePropBadge
                metric={t(p.metricKey)}
                label={t(p.labelKey)}
                description={t(p.descKey)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
