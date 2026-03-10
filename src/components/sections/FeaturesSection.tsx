import { Scale, ShieldCheck, Shapes, Star, FileDown, Zap } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useRevealChildren } from '@/hooks/useRevealChildren';
import { FeatureCard } from '@/components/ui/FeatureCard';

export function FeaturesSection() {
  const { t } = useLanguage();
  const ref = useRevealChildren<HTMLElement>();

  const features = [
    { icon: Scale, titleKey: 'features.weightBalance.title', descKey: 'features.weightBalance.desc' },
    { icon: ShieldCheck, titleKey: 'features.safetyChecks.title', descKey: 'features.safetyChecks.desc' },
    { icon: Shapes, titleKey: 'features.anyShape.title', descKey: 'features.anyShape.desc' },
    { icon: Star, titleKey: 'features.qualityScore.title', descKey: 'features.qualityScore.desc' },
    { icon: FileDown, titleKey: 'features.easyExport.title', descKey: 'features.easyExport.desc' },
    { icon: Zap, titleKey: 'features.instantResults.title', descKey: 'features.instantResults.desc' },
  ];

  return (
    <section ref={ref} id="features" className="relative py-24 bg-slate-950 z-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="reveal mb-16 text-center text-3xl md:text-5xl font-extrabold text-white">
          {t('features.title')}
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={f.titleKey} className={`reveal reveal-delay-${i + 1} h-full`}>
              <FeatureCard
                icon={f.icon}
                title={t(f.titleKey)}
                description={t(f.descKey)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
