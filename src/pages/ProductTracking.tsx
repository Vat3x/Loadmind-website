import { MapPin, Radio, Bell, History, Plug, ArrowRight, Smartphone, Monitor } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useReveal } from '@/hooks/useReveal';
import { useRevealChildren } from '@/hooks/useRevealChildren';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const TRACKING_URL = 'https://tracking.loadmind.app';

export default function ProductTracking() {
  const { t } = useLanguage();
  const heroRef = useReveal<HTMLElement>();
  const showcaseRef = useRevealChildren<HTMLElement>();
  const stepsRef = useRevealChildren<HTMLElement>();
  const featuresRef = useRevealChildren<HTMLElement>();
  const ctaRef = useReveal<HTMLElement>();

  const features = [
    { icon: MapPin, titleKey: 'tracking.realtime.title', descKey: 'tracking.realtime.desc' },
    { icon: Plug, titleKey: 'tracking.tms.title', descKey: 'tracking.tms.desc' },
    { icon: Bell, titleKey: 'tracking.eta.title', descKey: 'tracking.eta.desc' },
    { icon: History, titleKey: 'tracking.history.title', descKey: 'tracking.history.desc' },
  ];

  const steps = [
    { num: '1', titleKey: 'howItWorks.tracker.step1.title', descKey: 'howItWorks.tracker.step1.desc' },
    { num: '2', titleKey: 'howItWorks.tracker.step2.title', descKey: 'howItWorks.tracker.step2.desc' },
    { num: '3', titleKey: 'howItWorks.tracker.step3.title', descKey: 'howItWorks.tracker.step3.desc' },
    { num: '4', titleKey: 'howItWorks.tracker.step4.title', descKey: 'howItWorks.tracker.step4.desc' },
  ];

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative overflow-hidden bg-slate-950 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />
          <div className="absolute -bottom-32 right-1/4 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[140px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <h1 className="reveal text-4xl font-extrabold md:text-6xl gradient-text">
            {t('tracking.hero.title')}
          </h1>
          <p className="reveal mt-6 text-lg text-slate-400 md:text-xl max-w-2xl mx-auto">
            {t('tracking.hero.subtitle')}
          </p>
          <div className="reveal mt-10">
            <Button href={TRACKING_URL} size="lg" external>
              {t('tracking.hero.cta')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Showcase — Driver App Screenshots */}
      <section ref={showcaseRef} className="py-24 bg-slate-950 border-t border-slate-800/50">
        <div className="mx-auto max-w-5xl px-4">
          <div className="reveal mb-4 flex items-center justify-center gap-2 text-blue-400">
            <Smartphone className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Driver App</span>
            <span className="text-slate-600 mx-2">+</span>
            <Monitor className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Dispatch Dashboard</span>
          </div>
          <h2 className="reveal mb-16 text-center text-3xl md:text-4xl font-extrabold text-white">
            {t('tracking.showcase.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            {/* Screen 1: Home / Live map */}
            <div className="reveal flex flex-col items-center">
              <div className="relative mx-auto w-56 md:w-64 rounded-[2rem] border-2 border-slate-700 bg-slate-900 p-2 shadow-2xl shadow-blue-500/10">
                <img
                  src="/tracking-mobile-home.jpg"
                  alt="LoadMind Tracker — Live Map"
                  className="w-full rounded-[1.5rem]"
                />
              </div>
              <p className="mt-4 text-center text-sm font-medium text-slate-300">{t('tracking.showcase.screen1')}</p>
            </div>
            {/* Screen 2: Active route (larger, center) */}
            <div className="reveal flex flex-col items-center">
              <div className="relative mx-auto w-64 md:w-72 rounded-[2rem] border-2 border-blue-500/30 bg-slate-900 p-2 shadow-2xl shadow-blue-500/20">
                <img
                  src="/tracking-mobile-route.jpg"
                  alt="LoadMind Tracker — Active Route"
                  className="w-full rounded-[1.5rem]"
                />
              </div>
              <p className="mt-4 text-center text-sm font-medium text-slate-300">{t('tracking.showcase.screen2')}</p>
            </div>
            {/* Screen 3: In Progress */}
            <div className="reveal flex flex-col items-center">
              <div className="relative mx-auto w-56 md:w-64 rounded-[2rem] border-2 border-slate-700 bg-slate-900 p-2 shadow-2xl shadow-blue-500/10">
                <img
                  src="/tracking-mobile-progress.jpg"
                  alt="LoadMind Tracker — In Progress"
                  className="w-full rounded-[1.5rem]"
                />
              </div>
              <p className="mt-4 text-center text-sm font-medium text-slate-300">{t('tracking.showcase.screen3')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section ref={stepsRef} className="py-24 bg-slate-950">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="reveal mb-16 text-center text-3xl md:text-4xl font-extrabold text-white">
            {t('nav.howItWorks')}
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {steps.map((step) => (
              <div key={step.num} className="reveal">
                <Card className="relative pl-16">
                  <div className="absolute left-5 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{t(step.titleKey)}</h3>
                  <p className="mt-2 text-sm text-slate-400">{t(step.descKey)}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} className="py-24 bg-slate-950 border-t border-slate-800/50">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="reveal mb-12 text-center text-3xl md:text-4xl font-extrabold text-white">
            {t('tracking.features.title')}
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {features.map((f) => (
              <div key={f.titleKey} className="reveal">
                <FeatureCard icon={f.icon} title={t(f.titleKey)} description={t(f.descKey)} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="pb-12 bg-slate-950">
        <div className="mx-auto max-w-3xl px-4">
          <Card className="text-center">
            <Radio className="mx-auto mb-4 h-8 w-8 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">{t('tracking.integration.title')}</h3>
            <p className="mt-2 text-sm text-muted-fg">{t('tracking.integration.desc')}</p>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="py-24 bg-slate-950">
        <div className="mx-auto max-w-3xl px-4">
          <Card className="reveal text-center p-8 md:p-12 border-blue-500/20">
            <MapPin className="mx-auto mb-4 h-10 w-10 text-blue-400" />
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              {t('tracking.cta.title')}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-slate-400">
              {t('tracking.cta.desc')}
            </p>
            <div className="mt-8">
              <Button href={TRACKING_URL} size="lg" external>
                {t('tracking.cta.button')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
