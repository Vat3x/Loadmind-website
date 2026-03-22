import { useState } from 'react';
import { MapPin, Bell, History, Navigation, ClipboardList, Smartphone, Monitor, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useRevealChildren } from '@/hooks/useRevealChildren';
import { PageHero } from '@/components/ui/PageHero';
import { StepCard } from '@/components/ui/StepCard';
import { Card } from '@/components/ui/Card';
import { PricingCard } from '@/components/ui/PricingCard';
import { PricingToggle } from '@/components/ui/PricingToggle';

type BillingCycle = 'monthly' | 'annual';

const TRACKING_URL = '/tracker';

const PLANS = [
  {
    nameKey: 'pricing.track.demo.name',
    priceKey: { monthly: 'pricing.track.demo.name', annual: 'pricing.track.demo.name' },
    descKey: 'pricing.track.demo.desc',
    volumeKey: 'pricing.track.demo.volume',
    features: [
      { key: 'pricing.track.feature.realtime', included: true },
      { key: 'pricing.track.feature.shareLink', included: true },
      { key: 'pricing.track.feature.emailNotif', included: false },
      { key: 'pricing.track.feature.reports', included: false },
      { key: 'pricing.track.feature.chat', included: false },
      { key: 'pricing.track.feature.api', included: false },
    ],
    ctaKey: 'pricing.cta.demo',
    ctaHref: '/demo',
    enterprise: true,
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
      { key: 'pricing.track.feature.reports', included: false },
      { key: 'pricing.track.feature.chat', included: false },
      { key: 'pricing.track.feature.api', included: false },
    ],
    ctaKey: 'pricing.cta.start',
    ctaHref: '/tracker',
  },
  {
    nameKey: 'pricing.track.growth.name',
    priceKey: { monthly: 'pricing.track.growth.price.monthly', annual: 'pricing.track.growth.price.annual' },
    descKey: 'pricing.track.growth.desc',
    volumeKey: 'pricing.track.growth.volume',
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
    popular: true,
  },
  {
    nameKey: 'pricing.track.business.name',
    priceKey: { monthly: 'pricing.track.business.price.monthly', annual: 'pricing.track.business.price.annual' },
    descKey: 'pricing.track.business.desc',
    volumeKey: 'pricing.track.business.volume',
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

export default function ProductTracking() {
  const { t } = useLanguage();
  const showcaseRef = useRevealChildren<HTMLElement>();
  const featuresRef = useRevealChildren<HTMLElement>();
  const stepsRef = useRevealChildren<HTMLElement>();
  const [billing, setBilling] = useState<BillingCycle>('monthly');

  const steps = [
    { icon: Smartphone, titleKey: 'howItWorks.tracker.step1.title', descKey: 'howItWorks.tracker.step1.desc' },
    { icon: MapPin, titleKey: 'howItWorks.tracker.step2.title', descKey: 'howItWorks.tracker.step2.desc' },
    { icon: Navigation, titleKey: 'howItWorks.tracker.step3.title', descKey: 'howItWorks.tracker.step3.desc' },
    { icon: Bell, titleKey: 'howItWorks.tracker.step4.title', descKey: 'howItWorks.tracker.step4.desc' },
  ];

  const billingLabels = [t('pricing.billing.monthly'), t('pricing.billing.annual')];
  const periodKey = billing === 'monthly' ? 'pricing.period.monthly' : 'pricing.period.annual';

  return (
    <>
      <PageHero
        title={t('tracking.hero.title')}
        subtitle={t('tracking.hero.subtitle')}
        ctaText={t('tracking.hero.demoCta')}
        ctaHref="/demo"
      />

      {/* App Showcase — Phone Mockups */}
      <section ref={showcaseRef} className="pb-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="reveal mb-4 flex items-center justify-center gap-2 text-emerald-400">
            <Smartphone className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Driver App</span>
            <span className="text-slate-600 mx-2">+</span>
            <Monitor className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Dispatch Dashboard</span>
          </div>
          <h2 className="reveal mb-16 text-center text-2xl font-bold md:text-3xl gradient-text">
            {t('tracking.showcase.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            {/* Screen 1: Home / Live map */}
            <div className="reveal flex flex-col items-center">
              <div className="relative mx-auto w-56 md:w-64 rounded-[2rem] border-2 border-slate-700 bg-slate-900 p-2 shadow-2xl shadow-emerald-500/10">
                <img
                  src="/tracking-home.png"
                  alt="LoadMind Tracker — Home Dashboard"
                  className="w-full rounded-[1.5rem]"
                  loading="lazy"
                />
              </div>
              <p className="mt-4 text-center text-sm font-medium text-slate-300">{t('tracking.showcase.screen1')}</p>
            </div>
            {/* Screen 2: Active route (larger, center) */}
            <div className="reveal flex flex-col items-center">
              <div className="relative mx-auto w-64 md:w-72 rounded-[2rem] border-2 border-emerald-500/30 bg-slate-900 p-2 shadow-2xl shadow-emerald-500/20">
                <img
                  src="/tracking-route.png"
                  alt="LoadMind Tracker — Active Route"
                  className="w-full rounded-[1.5rem]"
                  loading="lazy"
                />
              </div>
              <p className="mt-4 text-center text-sm font-medium text-slate-300">{t('tracking.showcase.screen2')}</p>
            </div>
            {/* Screen 3: In Progress */}
            <div className="reveal flex flex-col items-center">
              <div className="relative mx-auto w-56 md:w-64 rounded-[2rem] border-2 border-slate-700 bg-slate-900 p-2 shadow-2xl shadow-emerald-500/10">
                <img
                  src="/tracking-progress.png"
                  alt="LoadMind Tracker — In Progress"
                  className="w-full rounded-[1.5rem]"
                  loading="lazy"
                />
              </div>
              <p className="mt-4 text-center text-sm font-medium text-slate-300">{t('tracking.showcase.screen3')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Showcase — Browser Frame */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl gradient-text">
            {t('tracking.dashboard.title')}
          </h2>
          <p className="mb-12 text-center text-slate-400 max-w-2xl mx-auto">
            {t('tracking.dashboard.subtitle')}
          </p>

          {/* Main dashboard screenshot in browser frame */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-2 shadow-2xl shadow-emerald-500/10 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-slate-800">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-slate-700" />
                <div className="w-3 h-3 rounded-full bg-slate-700" />
                <div className="w-3 h-3 rounded-full bg-slate-700" />
              </div>
              <div className="flex-1 mx-4">
                <div className="h-6 rounded-full bg-slate-800 max-w-xs mx-auto flex items-center justify-center">
                  <span className="text-[10px] text-slate-500 font-mono">tracking.load-mind.com</span>
                </div>
              </div>
            </div>
            <img
              src="/tracking-dashboard-newtrip.png"
              alt="LoadMind Tracking Dashboard — Create New Trip"
              className="w-full rounded-b-xl"
              loading="lazy"
            />
          </div>

          {/* Two smaller dashboard screenshots */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-2 shadow-xl shadow-emerald-500/10">
              <img
                src="/tracking-dashboard-trips.png"
                alt="Trip Management & Route Map"
                className="w-full rounded-xl"
                loading="lazy"
              />
              <p className="mt-3 text-center text-sm font-medium text-slate-400">{t('tracking.dashboard.screen1')}</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-2 shadow-xl shadow-emerald-500/10">
              <img
                src="/tracking-dashboard-driver.png"
                alt="Driver Management"
                className="w-full rounded-xl"
                loading="lazy"
              />
              <p className="mt-3 text-center text-sm font-medium text-slate-400">{t('tracking.dashboard.screen2')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights — Alternating screenshots */}
      <section ref={featuresRef} className="pb-24">
        <div className="mx-auto max-w-6xl px-4 space-y-20">

          {/* Real-Time Tracking */}
          <div className="reveal grid grid-cols-1 gap-8 md:gap-12 md:grid-cols-2 items-center">
            <div className="rounded-[2rem] border-2 border-slate-700 bg-slate-900 p-2 shadow-2xl shadow-emerald-500/10 mx-auto w-56 md:w-64 order-2 md:order-1">
              <img
                src="/tracking-navigation.png"
                alt="In Progress Navigation"
                className="w-full rounded-[1.5rem]"
                loading="lazy"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600">
                  <Navigation className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white md:text-2xl">
                  {t('tracking.feature.navigation.title')}
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                {t('tracking.feature.navigation.desc')}
              </p>
            </div>
          </div>

          {/* Trip Management */}
          <div className="reveal grid grid-cols-1 gap-8 md:gap-12 md:grid-cols-2 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600">
                  <ClipboardList className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white md:text-2xl">
                  {t('tracking.feature.trips.title')}
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                {t('tracking.feature.trips.desc')}
              </p>
            </div>
            <div className="rounded-[2rem] border-2 border-slate-700 bg-slate-900 p-2 shadow-2xl shadow-blue-500/10 mx-auto w-56 md:w-64">
              <img
                src="/tracking-trips.png"
                alt="Active Trips"
                className="w-full rounded-[1.5rem]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Trip History */}
          <div className="reveal grid grid-cols-1 gap-8 md:gap-12 md:grid-cols-2 items-center">
            <div className="rounded-[2rem] border-2 border-slate-700 bg-slate-900 p-2 shadow-2xl shadow-amber-500/10 mx-auto w-56 md:w-64 order-2 md:order-1">
              <img
                src="/tracking-history.png"
                alt="Trip History"
                className="w-full rounded-[1.5rem]"
                loading="lazy"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600">
                  <History className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white md:text-2xl">
                  {t('tracking.feature.history.title')}
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                {t('tracking.feature.history.desc')}
              </p>
            </div>
          </div>

          {/* ETA Alerts */}
          <div className="reveal grid grid-cols-1 gap-8 md:gap-12 md:grid-cols-2 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600">
                  <Bell className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white md:text-2xl">
                  {t('tracking.feature.eta.title')}
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                {t('tracking.feature.eta.desc')}
              </p>
            </div>
            <div className="flex justify-center">
              <Card className="text-center max-w-xs">
                <Bell className="mx-auto mb-3 h-8 w-8 text-purple-400" />
                <p className="text-sm text-slate-300 font-medium">{t('tracking.feature.eta.card')}</p>
              </Card>
            </div>
          </div>

        </div>
      </section>

      {/* How It Works */}
      <section ref={stepsRef} className="pb-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="reveal mb-12 text-center text-2xl font-bold md:text-3xl gradient-text">
            {t('nav.howItWorks')}
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
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
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
