import { useLanguage } from '@/hooks/useLanguage';
import { ValuePropBadge } from '@/components/ui/ValuePropBadge';

export function ValuePropsSection() {
  const { t } = useLanguage();

  const props = [
    { metricKey: 'valueProps.speed.metric', labelKey: 'valueProps.speed.label', descKey: 'valueProps.speed.desc' },
    { metricKey: 'valueProps.inspection.metric', labelKey: 'valueProps.inspection.label', descKey: 'valueProps.inspection.desc' },
    { metricKey: 'valueProps.price.metric', labelKey: 'valueProps.price.label', descKey: 'valueProps.price.desc' },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {props.map((p) => (
            <ValuePropBadge
              key={p.metricKey}
              metric={t(p.metricKey)}
              label={t(p.labelKey)}
              description={t(p.descKey)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
