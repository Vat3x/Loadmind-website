import { Scale, ShieldCheck, Shapes, Star, FileDown, Zap } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { FeatureCard } from '@/components/ui/FeatureCard';

export function FeaturesSection() {
  const { t } = useLanguage();

  const features = [
    { icon: Scale, titleKey: 'features.weightBalance.title', descKey: 'features.weightBalance.desc' },
    { icon: ShieldCheck, titleKey: 'features.safetyChecks.title', descKey: 'features.safetyChecks.desc' },
    { icon: Shapes, titleKey: 'features.anyShape.title', descKey: 'features.anyShape.desc' },
    { icon: Star, titleKey: 'features.qualityScore.title', descKey: 'features.qualityScore.desc' },
    { icon: FileDown, titleKey: 'features.easyExport.title', descKey: 'features.easyExport.desc' },
    { icon: Zap, titleKey: 'features.instantResults.title', descKey: 'features.instantResults.desc' },
  ];

  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-2xl font-bold md:text-3xl gradient-text">
          {t('features.title')}
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <FeatureCard
              key={f.titleKey}
              icon={f.icon}
              title={t(f.titleKey)}
              description={t(f.descKey)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
