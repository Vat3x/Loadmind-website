import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { PageHero } from '@/components/ui/PageHero';
import { PricingCard } from '@/components/ui/PricingCard';
import { PricingToggle } from '@/components/ui/PricingToggle';
import { FAQAccordion } from '@/components/ui/FAQAccordion';

type BillingCycle = 'monthly' | 'annual';

interface TierData {
  nameKey: string;
  priceKey: { monthly: string; annual: string };
  descKey: string;
  volumeKey: string;
  features: { key: string; included: boolean }[];
  ctaKey: string;
  ctaHref: string;
  popular?: boolean;
  enterprise?: boolean;
  noteKey?: string;
  savingsKey?: string;
}

const PLANS_3D: TierData[] = [
  {
    nameKey: 'pricing.3d.free.name',
    priceKey: { monthly: 'pricing.3d.free.price.monthly', annual: 'pricing.3d.free.price.annual' },
    descKey: 'pricing.3d.free.desc',
    volumeKey: 'pricing.3d.free.volume',
    features: [
      { key: 'pricing.3d.feature.aiCargo', included: true },
      { key: 'pricing.3d.feature.weightBalance', included: true },
      { key: 'pricing.3d.feature.export', included: false },
      { key: 'pricing.3d.feature.shareLinks', included: false },
      { key: 'pricing.3d.feature.prioritySupport', included: false },
      { key: 'pricing.3d.feature.api', included: false },
    ],
    ctaKey: 'pricing.cta.free',
    ctaHref: '/3d',
    noteKey: 'pricing.note.free',
  },
  {
    nameKey: 'pricing.3d.starter.name',
    priceKey: { monthly: 'pricing.3d.starter.price.monthly', annual: 'pricing.3d.starter.price.annual' },
    descKey: 'pricing.3d.starter.desc',
    volumeKey: 'pricing.3d.starter.volume',
    features: [
      { key: 'pricing.3d.feature.aiCargo', included: true },
      { key: 'pricing.3d.feature.weightBalance', included: true },
      { key: 'pricing.3d.feature.export', included: true },
      { key: 'pricing.3d.feature.shareLinks', included: true },
      { key: 'pricing.3d.feature.prioritySupport', included: false },
      { key: 'pricing.3d.feature.api', included: false },
    ],
    ctaKey: 'pricing.cta.start',
    ctaHref: '/3d',
  },
  {
    nameKey: 'pricing.3d.pro.name',
    priceKey: { monthly: 'pricing.3d.pro.price.monthly', annual: 'pricing.3d.pro.price.annual' },
    descKey: 'pricing.3d.pro.desc',
    volumeKey: 'pricing.3d.pro.volume',
    features: [
      { key: 'pricing.3d.feature.aiCargo', included: true },
      { key: 'pricing.3d.feature.weightBalance', included: true },
      { key: 'pricing.3d.feature.export', included: true },
      { key: 'pricing.3d.feature.shareLinks', included: true },
      { key: 'pricing.3d.feature.prioritySupport', included: true },
      { key: 'pricing.3d.feature.api', included: false },
    ],
    ctaKey: 'pricing.cta.start',
    ctaHref: '/3d',
    popular: true,
  },
  {
    nameKey: 'pricing.3d.enterprise.name',
    priceKey: { monthly: 'pricing.3d.enterprise.name', annual: 'pricing.3d.enterprise.name' },
    descKey: 'pricing.3d.enterprise.desc',
    volumeKey: 'pricing.3d.enterprise.volume',
    features: [
      { key: 'pricing.3d.feature.aiCargo', included: true },
      { key: 'pricing.3d.feature.weightBalance', included: true },
      { key: 'pricing.3d.feature.export', included: true },
      { key: 'pricing.3d.feature.shareLinks', included: true },
      { key: 'pricing.3d.feature.prioritySupport', included: true },
      { key: 'pricing.3d.feature.api', included: true },
    ],
    ctaKey: 'pricing.cta.enterprise',
    ctaHref: '/contact',
    enterprise: true,
  },
];

const PLANS_TRACKING: TierData[] = [
  {
    nameKey: 'pricing.track.free.name',
    priceKey: { monthly: 'pricing.track.free.price.monthly', annual: 'pricing.track.free.price.annual' },
    descKey: 'pricing.track.free.desc',
    volumeKey: 'pricing.track.free.volume',
    features: [
      { key: 'pricing.track.feature.realtime', included: true },
      { key: 'pricing.track.feature.shareLink', included: true },
      { key: 'pricing.track.feature.emailNotif', included: false },
      { key: 'pricing.track.feature.reports', included: false },
      { key: 'pricing.track.feature.chat', included: false },
      { key: 'pricing.track.feature.api', included: false },
    ],
    ctaKey: 'pricing.cta.free',
    ctaHref: '/tracker',
    noteKey: 'pricing.note.free',
  },
  {
    nameKey: 'pricing.track.starter.name',
    priceKey: { monthly: 'pricing.track.starter.price.monthly', annual: 'pricing.track.starter.price.annual' },
    descKey: 'pricing.track.starter.desc',
    volumeKey: 'pricing.track.starter.volume',
    features: [
      { key: 'pricing.track.feature.realtime', included: true },
      { key: 'pricing.track.feature.shareLink', included: true },
      { key: 'pricing.track.feature.emailNotif', included: true },
      { key: 'pricing.track.feature.reports', included: true },
      { key: 'pricing.track.feature.chat', included: false },
      { key: 'pricing.track.feature.api', included: false },
    ],
    ctaKey: 'pricing.cta.start',
    ctaHref: '/tracker',
  },
  {
    nameKey: 'pricing.track.pro.name',
    priceKey: { monthly: 'pricing.track.pro.price.monthly', annual: 'pricing.track.pro.price.annual' },
    descKey: 'pricing.track.pro.desc',
    volumeKey: 'pricing.track.pro.volume',
    features: [
      { key: 'pricing.track.feature.realtime', included: true },
      { key: 'pricing.track.feature.shareLink', included: true },
      { key: 'pricing.track.feature.emailNotif', included: true },
      { key: 'pricing.track.feature.reports', included: true },
      { key: 'pricing.track.feature.chat', included: true },
      { key: 'pricing.track.feature.api', included: false },
    ],
    ctaKey: 'pricing.cta.start',
    ctaHref: '/tracker',
    popular: true,
  },
  {
    nameKey: 'pricing.track.enterprise.name',
    priceKey: { monthly: 'pricing.track.enterprise.name', annual: 'pricing.track.enterprise.name' },
    descKey: 'pricing.track.enterprise.desc',
    volumeKey: 'pricing.track.enterprise.volume',
    features: [
      { key: 'pricing.track.feature.realtime', included: true },
      { key: 'pricing.track.feature.shareLink', included: true },
      { key: 'pricing.track.feature.emailNotif', included: true },
      { key: 'pricing.track.feature.reports', included: true },
      { key: 'pricing.track.feature.chat', included: true },
      { key: 'pricing.track.feature.api', included: true },
    ],
    ctaKey: 'pricing.cta.enterprise',
    ctaHref: '/contact',
    enterprise: true,
  },
];

const PLANS_ALL: TierData[] = [
  {
    nameKey: 'pricing.all.free.name',
    priceKey: { monthly: 'pricing.all.free.price.monthly', annual: 'pricing.all.free.price.annual' },
    descKey: 'pricing.all.free.desc',
    volumeKey: 'pricing.all.free.volume',
    features: [
      { key: 'pricing.all.feature.3dPlanner', included: true },
      { key: 'pricing.all.feature.tracking', included: true },
      { key: 'pricing.all.feature.export', included: false },
      { key: 'pricing.all.feature.prioritySupport', included: false },
      { key: 'pricing.all.feature.api', included: false },
      { key: 'pricing.all.feature.dedicated', included: false },
    ],
    ctaKey: 'pricing.cta.free',
    ctaHref: '/3d',
    noteKey: 'pricing.note.free',
  },
  {
    nameKey: 'pricing.all.starter.name',
    priceKey: { monthly: 'pricing.all.starter.price.monthly', annual: 'pricing.all.starter.price.annual' },
    descKey: 'pricing.all.starter.desc',
    volumeKey: 'pricing.all.starter.volume',
    features: [
      { key: 'pricing.all.feature.3dPlanner', included: true },
      { key: 'pricing.all.feature.tracking', included: true },
      { key: 'pricing.all.feature.export', included: true },
      { key: 'pricing.all.feature.prioritySupport', included: false },
      { key: 'pricing.all.feature.api', included: false },
      { key: 'pricing.all.feature.dedicated', included: false },
    ],
    ctaKey: 'pricing.cta.start',
    ctaHref: '/3d',
    savingsKey: 'pricing.all.starter.savings',
  },
  {
    nameKey: 'pricing.all.pro.name',
    priceKey: { monthly: 'pricing.all.pro.price.monthly', annual: 'pricing.all.pro.price.annual' },
    descKey: 'pricing.all.pro.desc',
    volumeKey: 'pricing.all.pro.volume',
    features: [
      { key: 'pricing.all.feature.3dPlanner', included: true },
      { key: 'pricing.all.feature.tracking', included: true },
      { key: 'pricing.all.feature.export', included: true },
      { key: 'pricing.all.feature.prioritySupport', included: true },
      { key: 'pricing.all.feature.api', included: false },
      { key: 'pricing.all.feature.dedicated', included: false },
    ],
    ctaKey: 'pricing.cta.start',
    ctaHref: '/3d',
    popular: true,
    savingsKey: 'pricing.all.pro.savings',
  },
  {
    nameKey: 'pricing.all.enterprise.name',
    priceKey: { monthly: 'pricing.all.enterprise.name', annual: 'pricing.all.enterprise.name' },
    descKey: 'pricing.all.enterprise.desc',
    volumeKey: 'pricing.all.enterprise.volume',
    features: [
      { key: 'pricing.all.feature.3dPlanner', included: true },
      { key: 'pricing.all.feature.tracking', included: true },
      { key: 'pricing.all.feature.export', included: true },
      { key: 'pricing.all.feature.prioritySupport', included: true },
      { key: 'pricing.all.feature.api', included: true },
      { key: 'pricing.all.feature.dedicated', included: true },
    ],
    ctaKey: 'pricing.cta.enterprise',
    ctaHref: '/contact',
    enterprise: true,
  },
];

const ALL_PLANS = [PLANS_3D, PLANS_TRACKING, PLANS_ALL];

export default function Pricing() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  const [billing, setBilling] = useState<BillingCycle>('monthly');

  const tabLabels = [
    t('pricing.tab.3dplan'),
    t('pricing.tab.tracking'),
    t('pricing.tab.allinone'),
  ];

  const billingLabels = [
    t('pricing.billing.monthly'),
    t('pricing.billing.annual'),
  ];

  const plans = ALL_PLANS[activeTab];
  const periodKey = billing === 'monthly' ? 'pricing.period.monthly' : 'pricing.period.annual';

  const pricingFAQ = [
    { question: t('pricing.faq.q1'), answer: t('pricing.faq.a1') },
    { question: t('pricing.faq.q2'), answer: t('pricing.faq.a2') },
    { question: t('pricing.faq.q3'), answer: t('pricing.faq.a3') },
    { question: t('pricing.faq.q4'), answer: t('pricing.faq.a4') },
    { question: t('pricing.faq.q5'), answer: t('pricing.faq.a5') },
  ];

  return (
    <>
      <PageHero title={t('pricing.title')} subtitle={t('pricing.subtitle')} />

      {/* Toggles */}
      <section className="pb-8 pt-4">
        <div className="mx-auto max-w-6xl px-4 flex flex-col items-center gap-4">
          <PricingToggle
            labels={tabLabels}
            activeIndex={activeTab}
            onChange={setActiveTab}
          />
          <PricingToggle
            labels={billingLabels}
            activeIndex={billing === 'monthly' ? 0 : 1}
            onChange={(i) => setBilling(i === 0 ? 'monthly' : 'annual')}
            size="sm"
            badge={{ index: 1, text: t('pricing.billing.save') }}
          />
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <div
            key={activeTab}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 animate-[fade-in-up_0.4s_ease_both]"
          >
            {plans.map((tier, i) => {
              const savingsAmount = tier.savingsKey ? t(tier.savingsKey) : undefined;
              const savingsText = savingsAmount
                ? t('pricing.savings').replace('{amount}', savingsAmount)
                : undefined;

              return (
                <div
                  key={i}
                  style={{ animationDelay: `${i * 80}ms` }}
                  className="animate-[fade-in-up_0.4s_ease_both]"
                >
                  <PricingCard
                    planName={t(tier.nameKey)}
                    price={tier.enterprise ? '' : t(tier.priceKey[billing])}
                    period={tier.enterprise ? '' : t(periodKey)}
                    volume={t(tier.volumeKey)}
                    description={t(tier.descKey)}
                    features={tier.features.map((f) => ({
                      label: t(f.key),
                      included: f.included,
                    }))}
                    ctaText={t(tier.ctaKey)}
                    ctaHref={tier.ctaHref}
                    popular={tier.popular}
                    enterprise={tier.enterprise}
                    note={tier.noteKey ? t(tier.noteKey) : undefined}
                    savings={savingsText}
                  />
                </div>
              );
            })}
          </div>
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
