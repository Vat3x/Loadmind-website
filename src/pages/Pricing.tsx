import { useLanguage } from '@/hooks/useLanguage';
import { PageHero } from '@/components/ui/PageHero';
import { PricingCard } from '@/components/ui/PricingCard';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export default function Pricing() {
  const { t } = useLanguage();

  const sharedFeatures = [
    'pricing.feature.unlimitedLoads',
    'pricing.feature.weightBalancing',
    'pricing.feature.export',
    'pricing.feature.shareableLinks',
    'pricing.feature.prioritySupport',
  ];

  const freeFeatures = sharedFeatures.map((key, i) => ({
    label: t(key),
    included: i < 4,
  }));

  const proFeatures = sharedFeatures.map((key) => ({
    label: t(key),
    included: true,
  }));

  const pricingFAQ = [
    { question: t('pricing.faq.q1'), answer: t('pricing.faq.a1') },
    { question: t('pricing.faq.q2'), answer: t('pricing.faq.a2') },
    { question: t('pricing.faq.q3'), answer: t('pricing.faq.a3') },
  ];

  return (
    <>
      <PageHero title={t('pricing.title')} subtitle={t('pricing.subtitle')} />

      {/* 3D Plan Pricing */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-4">
          <h3 className="mb-8 text-center text-xl font-bold text-foreground">
            {t('pricing.3dplan.title')}
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <PricingCard
              planName={t('pricing.free.name')}
              price={t('pricing.free.price')}
              period={t('pricing.free.period')}
              duration={t('pricing.free.duration')}
              features={freeFeatures}
              ctaText={t('pricing.free.cta')}
              ctaHref="/3dplan"
              note={t('pricing.free.note')}
            />
            <PricingCard
              planName={t('pricing.pro.name')}
              price={t('pricing.pro.price')}
              period={t('pricing.pro.period')}
              duration={t('pricing.pro.duration')}
              features={proFeatures}
              ctaText={t('pricing.pro.cta')}
              ctaHref="/3dplan"
              highlighted
            />
          </div>
        </div>
      </section>

      {/* Tracking Pricing */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center justify-center gap-3 mb-8">
            <h3 className="text-xl font-bold text-foreground">
              {t('pricing.tracking.title')}
            </h3>
            <Badge variant="coming-soon">{t('common.comingSoon')}</Badge>
          </div>
          <Card className="text-center">
            <p className="text-muted-fg">{t('pricing.tracking.desc')}</p>
          </Card>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-4">
          <h3 className="mb-8 text-center text-xl font-bold text-foreground">FAQ</h3>
          <FAQAccordion items={pricingFAQ} />
        </div>
      </section>
    </>
  );
}
