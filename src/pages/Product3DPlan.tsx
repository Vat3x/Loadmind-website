import { Scale, ShieldCheck, Shapes, Star, FileDown, Zap, Truck, Package, LayoutGrid, Share2 } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { PageHero } from '@/components/ui/PageHero';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { StepCard } from '@/components/ui/StepCard';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function Product3DPlan() {
  const { t } = useLanguage();

  const features = [
    { icon: Scale, titleKey: 'features.weightBalance.title', descKey: 'features.weightBalance.desc' },
    { icon: ShieldCheck, titleKey: 'features.safetyChecks.title', descKey: 'features.safetyChecks.desc' },
    { icon: Shapes, titleKey: 'features.anyShape.title', descKey: 'features.anyShape.desc' },
    { icon: Star, titleKey: 'features.qualityScore.title', descKey: 'features.qualityScore.desc' },
    { icon: FileDown, titleKey: 'features.easyExport.title', descKey: 'features.easyExport.desc' },
    { icon: Zap, titleKey: 'features.instantResults.title', descKey: 'features.instantResults.desc' },
  ];

  const steps = [
    { icon: Truck, titleKey: 'howItWorks.step1.title', descKey: 'howItWorks.step1.desc' },
    { icon: Package, titleKey: 'howItWorks.step2.title', descKey: 'howItWorks.step2.desc' },
    { icon: LayoutGrid, titleKey: 'howItWorks.step3.title', descKey: 'howItWorks.step3.desc' },
    { icon: Share2, titleKey: 'howItWorks.step4.title', descKey: 'howItWorks.step4.desc' },
  ];

  const comparison = [
    { label: '3dplan.comparison.freeTrial', us: '3dplan.comparison.freeTrial.us', them: '3dplan.comparison.freeTrial.them' },
    { label: '3dplan.comparison.login', us: '3dplan.comparison.login.us', them: '3dplan.comparison.login.them' },
    { label: '3dplan.comparison.balance', us: '3dplan.comparison.balance.us', them: '3dplan.comparison.balance.them' },
    { label: '3dplan.comparison.price', us: '3dplan.comparison.price.us', them: '3dplan.comparison.price.them' },
  ];

  return (
    <>
      <PageHero
        title={t('3dplan.hero.title')}
        subtitle={t('3dplan.hero.subtitle')}
        ctaText={t('3dplan.hero.cta')}
        ctaHref="/3dplan"
      />

      {/* Features */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center text-2xl font-bold md:text-3xl gradient-text">
            {t('features.title')}
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <FeatureCard key={f.titleKey} icon={f.icon} title={t(f.titleKey)} description={t(f.descKey)} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center text-2xl font-bold md:text-3xl gradient-text">
            {t('howItWorks.title')}
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <StepCard key={step.titleKey} stepNumber={i + 1} icon={step.icon} title={t(step.titleKey)} description={t(step.descKey)} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl gradient-text">
            {t('3dplan.comparison.title')}
          </h2>
          <Card className="overflow-hidden p-0">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 text-left text-muted-fg font-medium">{t('3dplan.comparison.feature')}</th>
                  <th className="p-4 text-center text-primary font-semibold">{t('3dplan.comparison.loadmind')}</th>
                  <th className="p-4 text-center text-muted-fg font-medium">{t('3dplan.comparison.others')}</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.label} className="border-b border-border last:border-0">
                    <td className="p-4 text-foreground">{t(row.label)}</td>
                    <td className="p-4 text-center text-primary font-medium">{t(row.us)}</td>
                    <td className="p-4 text-center text-muted-fg">{t(row.them)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="pb-20">
        <div className="mx-auto max-w-xl px-4 text-center">
          <Card>
            <p className="text-2xl font-bold gradient-text">{t('3dplan.pricing.label')}</p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button href="/3dplan">{t('3dplan.pricing.cta')}</Button>
              <Button variant="ghost" href="/pricing">{t('3dplan.pricing.link')}</Button>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
