import { SEO } from '@/components/SEO';
import { MapPin, Bell, History, Navigation, ClipboardList, Smartphone, Monitor } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useRevealChildren } from '@/hooks/useRevealChildren';
import { StepCard } from '@/components/ui/StepCard';
import { Card } from '@/components/ui/Card';
// import { ProductPricing, type TierData } from '@/components/sections/ProductPricing';

/* const FALLBACK_PLANS: TierData[] = [
  {
    nameKey: 'pricing.track.demo.name',
    priceKey: { monthly: 'pricing.track.demo.name', annual: 'pricing.track.demo.name' },
    descKey: 'pricing.track.demo.desc',
    volumeKey: 'pricing.track.demo.volume',
    features: [
      { key: 'pricing.track.feature.realtime', included: true },
      { key: 'pricing.track.feature.shareLink', included: true },
      { key: 'pricing.track.feature.api', included: true },
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
      { key: 'pricing.track.feature.api', included: true },
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
      { key: 'pricing.track.feature.api', included: true },
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
      { key: 'pricing.track.feature.api', included: true },
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
      { key: 'pricing.track.feature.api', included: true },
    ],
    ctaKey: 'pricing.cta.enterprise',
    ctaHref: '/contact',
    enterprise: true,
  },
]; */

export default function ProductTracking() {
  const { t } = useLanguage();
  const showcaseRef = useRevealChildren<HTMLElement>();
  const featuresRef = useRevealChildren<HTMLElement>();
  const stepsRef = useRevealChildren<HTMLElement>();

  const steps = [
    { icon: Smartphone, titleKey: 'howItWorks.tracker.step1.title', descKey: 'howItWorks.tracker.step1.desc' },
    { icon: MapPin, titleKey: 'howItWorks.tracker.step2.title', descKey: 'howItWorks.tracker.step2.desc' },
    { icon: Navigation, titleKey: 'howItWorks.tracker.step3.title', descKey: 'howItWorks.tracker.step3.desc' },
    { icon: Bell, titleKey: 'howItWorks.tracker.step4.title', descKey: 'howItWorks.tracker.step4.desc' },
  ];

  return (
    <>
      <SEO
        title="Real-Time Fleet Tracking"
        description="Track drivers in real time. Share live tracking links, monitor ETAs, and manage your fleet from one dashboard."
        canonical="/tracking"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'LoadMind Tracking',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web, Android, iOS',
          url: 'https://load-mind.com/tracking',
          offers: { '@type': 'Offer', price: '39', priceCurrency: 'USD' },
          description: 'Real-time fleet tracking for LTL dispatchers. Share live tracking links, monitor ETAs.',
        }}
      />
      {/* App Showcase — Phone Mockups */}
      <section ref={showcaseRef} className="pt-28 pb-28">
        <div className="mx-auto max-w-5xl px-4">
          <h1 className="reveal mb-6 text-center text-4xl font-extrabold md:text-5xl text-white">
            {t('tracking.hero.title')}
          </h1>
          <p className="reveal mb-8 text-center text-lg text-slate-400 max-w-2xl mx-auto">
            {t('tracking.hero.subtitle')}
          </p>
          <div className="reveal mb-16 flex justify-center">
            <a
              href="/demo"
              className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 hover:opacity-90 transition-opacity"
            >
              {t('tracking.hero.demoCta')}
            </a>
          </div>
          <div className="reveal mb-10 flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-emerald-400">
              <Smartphone className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Driver App</span>
            </div>
            <span className="text-slate-600 text-sm">+</span>
            <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-emerald-400">
              <Monitor className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Dispatch Dashboard</span>
            </div>
          </div>
          <h2 className="reveal mb-16 text-center text-2xl font-bold md:text-3xl gradient-text">
            {t('tracking.showcase.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            {/* Screen 1: Home / Live map */}
            <div className="reveal flex flex-col items-center">
              <div className="relative mx-auto w-56 md:w-64 rounded-[2rem] border-2 border-slate-700 bg-slate-900 p-2 shadow-2xl shadow-emerald-500/10">
                <img
                  src="/tracking-home.webp"
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
                  src="/tracking-route.webp"
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
                  src="/tracking-progress.webp"
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
              src="/tracking-dashboard-newtrip.webp"
              alt="LoadMind Tracking Dashboard — Create New Trip"
              className="w-full rounded-b-xl"
              loading="lazy"
            />
          </div>

          {/* Two smaller dashboard screenshots */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-2 shadow-xl shadow-emerald-500/10">
              <img
                src="/tracking-dashboard-trips.webp"
                alt="Trip Management & Route Map"
                className="w-full rounded-xl"
                loading="lazy"
              />
              <p className="mt-3 text-center text-sm font-medium text-slate-400">{t('tracking.dashboard.screen1')}</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-2 shadow-xl shadow-emerald-500/10">
              <img
                src="/tracking-dashboard-driver.webp"
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
                src="/tracking-navigation.webp"
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
                src="/tracking-trips.webp"
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
                src="/tracking-history.webp"
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

      {/* <ProductPricing product="tracking" apiProduct="tracker" fallbackPlans={FALLBACK_PLANS} /> */}

      {/* Bottom Demo CTA */}
      <section className="pb-28 pt-4">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">
            See LoadMind in action — in 15 minutes.
          </h2>
          <p className="mb-8 text-lg text-slate-400 leading-relaxed">
            We'll show you exactly how to replace your current tracking tool, set up your first trip, and get your drivers on the app — live, on a call with you.
          </p>
          <a
            href="/demo"
            className="inline-block rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-500/20 hover:opacity-90 transition-opacity"
          >
            Book a Free Demo
          </a>
          <p className="mt-5 text-sm text-slate-500">
            No commitment. No credit card. Just 15 minutes.
          </p>
        </div>
      </section>
    </>
  );
}
