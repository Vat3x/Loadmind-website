import { useState } from 'react';
import { Sparkles, BarChart3, Download, ListOrdered, Truck, Package, LayoutGrid, Share2 } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useRevealChildren } from '@/hooks/useRevealChildren';
import { PageHero } from '@/components/ui/PageHero';
import { StepCard } from '@/components/ui/StepCard';
import { PricingCard } from '@/components/ui/PricingCard';
import { PricingToggle } from '@/components/ui/PricingToggle';

type BillingCycle = 'monthly' | 'annual';

const PLANS = [
  {
    nameKey: 'pricing.3d.free.name',
    priceKey: { monthly: 'pricing.3d.free.price.monthly', annual: 'pricing.3d.free.price.annual' },
    descKey: 'pricing.3d.free.desc',
    volumeKey: 'pricing.3d.free.volume',
    features: [
      { key: 'pricing.3d.feature.aiCargo', included: true },
      { key: 'pricing.3d.feature.weightBalance', included: true },
      { key: 'pricing.3d.feature.export', included: true },
      { key: 'pricing.3d.feature.shareLinks', included: true },
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
      { key: 'pricing.3d.feature.api', included: true },
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
      { key: 'pricing.3d.feature.api', included: true },
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
      { key: 'pricing.3d.feature.api', included: true },
    ],
    ctaKey: 'pricing.cta.enterprise',
    ctaHref: '/contact',
    enterprise: true,
  },
];

export default function Product3DPlan() {
  const { t } = useLanguage();
  const showcaseRef = useRevealChildren<HTMLElement>();
  const featuresRef = useRevealChildren<HTMLElement>();
  const stepsRef = useRevealChildren<HTMLElement>();
  const [billing, setBilling] = useState<BillingCycle>('monthly');

  const steps = [
    { icon: Truck, titleKey: 'howItWorks.step1.title', descKey: 'howItWorks.step1.desc' },
    { icon: Package, titleKey: 'howItWorks.step2.title', descKey: 'howItWorks.step2.desc' },
    { icon: LayoutGrid, titleKey: 'howItWorks.step3.title', descKey: 'howItWorks.step3.desc' },
    { icon: Share2, titleKey: 'howItWorks.step4.title', descKey: 'howItWorks.step4.desc' },
  ];

  const billingLabels = [t('pricing.billing.monthly'), t('pricing.billing.annual')];
  const periodKey = billing === 'monthly' ? 'pricing.period.monthly' : 'pricing.period.annual';

  return (
    <>
      <PageHero
        title={t('3dplan.hero.title')}
        subtitle={t('3dplan.hero.subtitle')}
        ctaText={t('3dplan.hero.cta')}
        ctaHref="/3d"
      />

      {/* App Showcase */}
      <section ref={showcaseRef} className="pb-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="reveal mb-4 text-center text-2xl font-bold md:text-3xl gradient-text">
            {t('3dplan.showcase.title')}
          </h2>
          <p className="reveal mb-12 text-center text-slate-400 max-w-2xl mx-auto">
            {t('3dplan.showcase.subtitle')}
          </p>

          {/* Main screenshot in browser frame */}
          <div className="reveal rounded-2xl border border-slate-800 bg-slate-900/60 p-2 shadow-2xl shadow-blue-500/10">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-slate-800">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-slate-700" />
                <div className="w-3 h-3 rounded-full bg-slate-700" />
                <div className="w-3 h-3 rounded-full bg-slate-700" />
              </div>
              <div className="flex-1 mx-4">
                <div className="h-6 rounded-full bg-slate-800 max-w-xs mx-auto flex items-center justify-center">
                  <span className="text-[10px] text-slate-500 font-mono">load-mind.com/3d</span>
                </div>
              </div>
            </div>
            <img
              src="/3d-main-view.webp"
              alt="LoadMind 3D Load Planner"
              className="w-full rounded-b-xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section ref={featuresRef} className="pb-24">
        <div className="mx-auto max-w-6xl px-4 space-y-20">

          {/* AI Cargo Input */}
          <div className="reveal grid grid-cols-1 gap-8 md:gap-12 md:grid-cols-2 items-center">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-3 shadow-xl shadow-purple-500/10 order-2 md:order-1">
              <img
                src="/3d-ai-input.webp"
                alt="AI Cargo Input"
                className="w-full rounded-xl"
                loading="lazy"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white md:text-2xl">
                  {t('3dplan.feature.ai.title')}
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                {t('3dplan.feature.ai.desc')}
              </p>
            </div>
          </div>

          {/* Optimization & Metrics */}
          <div className="reveal grid grid-cols-1 gap-8 md:gap-12 md:grid-cols-2 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white md:text-2xl">
                  {t('3dplan.feature.optimization.title')}
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                {t('3dplan.feature.optimization.desc')}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-2 shadow-xl shadow-blue-500/10">
                <img
                  src="/3d-optimization.webp"
                  alt="Optimization Complete"
                  className="w-full rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-2 shadow-xl shadow-blue-500/10">
                <img
                  src="/3d-metrics.webp"
                  alt="Advanced Metrics"
                  className="w-full rounded-xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Loading Order */}
          <div className="reveal grid grid-cols-1 gap-8 md:gap-12 md:grid-cols-2 items-center">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-3 shadow-xl shadow-amber-500/10 order-2 md:order-1">
              <img
                src="/3d-loading-order.webp"
                alt="Loading Order"
                className="w-full rounded-xl"
                loading="lazy"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600">
                  <ListOrdered className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white md:text-2xl">
                  {t('3dplan.feature.loadingOrder.title')}
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                {t('3dplan.feature.loadingOrder.desc')}
              </p>
            </div>
          </div>

          {/* Export & Share */}
          <div className="reveal grid grid-cols-1 gap-8 md:gap-12 md:grid-cols-2 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600">
                  <Download className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white md:text-2xl">
                  {t('3dplan.feature.export.title')}
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                {t('3dplan.feature.export.desc')}
              </p>
            </div>
            <div className="flex justify-center rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl shadow-emerald-500/10">
              <img
                src="/3d-export.webp"
                alt="Export Load Plan"
                className="w-auto max-h-80 rounded-xl"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </section>

      {/* How It Works */}
      <section ref={stepsRef} className="pb-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="reveal mb-12 text-center text-2xl font-bold md:text-3xl gradient-text">
            {t('howItWorks.title')}
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step.titleKey} className="reveal">
                <StepCard stepNumber={i + 1} icon={step.icon} title={t(step.titleKey)} description={t(step.descKey)} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl gradient-text">
            {t('pricing.title')}
          </h2>
          <div className="flex justify-center mb-8">
            <PricingToggle
              labels={billingLabels}
              activeIndex={billing === 'monthly' ? 0 : 1}
              onChange={(i) => setBilling(i === 0 ? 'monthly' : 'annual')}
              size="sm"
              badge={{ index: 1, text: t('pricing.billing.save') }}
            />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PLANS.map((tier, i) => (
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
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
