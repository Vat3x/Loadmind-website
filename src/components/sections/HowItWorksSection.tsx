import { Truck, Package, LayoutGrid, Share2, Wifi, Eye, Send, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useRevealChildren } from '@/hooks/useRevealChildren';

export function HowItWorksSection() {
  const { t } = useLanguage();
  const ref = useRevealChildren<HTMLElement>();

  const plannerSteps = [
    { icon: Truck, titleKey: 'howItWorks.step1.title', descKey: 'howItWorks.step1.desc', iconColor: 'text-blue-400' },
    { icon: Package, titleKey: 'howItWorks.step2.title', descKey: 'howItWorks.step2.desc', iconColor: 'text-emerald-400' },
    { icon: LayoutGrid, titleKey: 'howItWorks.step3.title', descKey: 'howItWorks.step3.desc', iconColor: 'text-violet-400' },
    { icon: Share2, titleKey: 'howItWorks.step4.title', descKey: 'howItWorks.step4.desc', iconColor: 'text-orange-400' },
  ];

  const trackerSteps = [
    { icon: Wifi, titleKey: 'howItWorks.tracker.step1.title', descKey: 'howItWorks.tracker.step1.desc', iconColor: 'text-teal-400' },
    { icon: Truck, titleKey: 'howItWorks.tracker.step2.title', descKey: 'howItWorks.tracker.step2.desc', iconColor: 'text-blue-400' },
    { icon: Eye, titleKey: 'howItWorks.tracker.step3.title', descKey: 'howItWorks.tracker.step3.desc', iconColor: 'text-purple-400' },
    { icon: Send, titleKey: 'howItWorks.tracker.step4.title', descKey: 'howItWorks.tracker.step4.desc', iconColor: 'text-amber-400' },
  ];

  const renderSteps = (steps: typeof plannerSteps) => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-3">
      {steps.map((step, i) => {
        const Icon = step.icon;
        return (
          <div key={step.titleKey} className="relative flex">
            {/* Connector arrow — between cards, desktop only */}
            {i < steps.length - 1 && (
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 hidden md:block">
                <ChevronRight className="h-4 w-4 text-slate-500" />
              </div>
            )}
            <div className={`reveal reveal-delay-${i + 1} group flex-1 rounded-2xl bg-slate-900 border border-slate-700 p-5 text-center transition-all duration-300 hover:border-slate-600 hover:-translate-y-1`}>
              <div className="relative mx-auto mb-4 w-fit">
                <Icon
                  className={`h-10 w-10 ${step.iconColor} group-hover:scale-110 transition-transform duration-300`}
                  strokeWidth={1.5}
                  style={{ animation: `icon-float 3s ease-in-out ${i * 0.4}s infinite` }}
                />
                <span className="absolute -top-2 -right-3 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-slate-900 shadow">
                  {i + 1}
                </span>
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">{t(step.titleKey)}</h4>
              <p className="text-sm text-slate-300 leading-relaxed">{t(step.descKey)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <section ref={ref} id="how-it-works" className="relative py-32 bg-background overflow-hidden z-20">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 right-0 h-96 w-96 rounded-full bg-blue-500/5 blur-[80px]" />
        <div className="absolute -bottom-20 left-0 h-96 w-96 rounded-full bg-teal-500/5 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="reveal mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold gradient-text leading-tight">
            {t('howItWorks.title')}
          </h2>
        </div>

        {/* 3D Planner */}
        <div className="reveal mb-20">
          <h3 className="text-center text-2xl md:text-3xl font-bold text-white mb-10">{t('howItWorks.plannerTitle')}</h3>
          {renderSteps(plannerSteps)}
        </div>

        {/* Divider */}
        <div className="mb-20 flex items-center gap-4">
          <div className="flex-1 border-t border-slate-700" />
          <div className="h-2 w-2 rounded-full bg-slate-600" />
          <div className="flex-1 border-t border-slate-700" />
        </div>

        {/* Tracker */}
        <div className="reveal">
          <h3 className="text-center text-2xl md:text-3xl font-bold text-white mb-10">{t('howItWorks.trackerTitle')}</h3>
          {renderSteps(trackerSteps)}
        </div>
      </div>
    </section>
  );
}
