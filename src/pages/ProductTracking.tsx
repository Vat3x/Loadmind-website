import { MapPin, Radio, Bell, History, Plug, ShoppingCart } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function ProductTracking() {
  const { t } = useLanguage();

  const features = [
    { icon: MapPin, titleKey: 'tracking.realtime.title', descKey: 'tracking.realtime.desc' },
    { icon: Plug, titleKey: 'tracking.tms.title', descKey: 'tracking.tms.desc' },
    { icon: Bell, titleKey: 'tracking.eta.title', descKey: 'tracking.eta.desc' },
    { icon: History, titleKey: 'tracking.history.title', descKey: 'tracking.history.desc' },
  ];

  return (
    <>
      <section className="py-20 text-center">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="mt-4 text-3xl font-bold md:text-5xl gradient-text">
            {t('tracking.hero.title')}
          </h1>
          <p className="mt-4 text-lg text-muted-fg md:text-xl">
            {t('tracking.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-12 text-center text-2xl font-bold md:text-3xl gradient-text">
            {t('tracking.features.title')}
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {features.map((f) => (
              <FeatureCard key={f.titleKey} icon={f.icon} title={t(f.titleKey)} description={t(f.descKey)} />
            ))}
          </div>
        </div>
      </section>

      {/* Pre-order */}
      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-4">
          <Card className="text-center p-8 md:p-12 border-primary/20">
            <ShoppingCart className="mx-auto mb-4 h-10 w-10 text-primary" />
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Ready to track your fleet?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-fg">
              LoadMind Tracker gives you real-time GPS visibility integrated directly with your TMS. See your entire fleet on a live map.
            </p>
            <div className="mt-8">
              <Button href="/app" size="lg" external>
                Launch Tracker
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Integration */}
      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-4">
          <Card className="text-center">
            <Radio className="mx-auto mb-4 h-8 w-8 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">{t('tracking.integration.title')}</h3>
            <p className="mt-2 text-sm text-muted-fg">{t('tracking.integration.desc')}</p>
          </Card>
        </div>
      </section>
    </>
  );
}
