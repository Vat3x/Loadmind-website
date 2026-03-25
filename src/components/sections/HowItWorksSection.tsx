import { Truck, Package, LayoutGrid, Share2, Wifi, Eye, Send, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useRevealChildren } from '@/hooks/useRevealChildren';

export function HowItWorksSection() {
  const { t } = useLanguage();
  const ref = useRevealChildren<HTMLElement>();

  const plannerSteps = [
    { icon: Truck, titleKey: 'howItWorks.step1.title', descKey: 'howItWorks.step1.desc', color: 'from-blue-500 to-indigo-500', glow: 'shadow-blue-500/20' },
    { icon: Package, titleKey: 'howItWorks.step2.title', descKey: 'howItWorks.step2.desc', color: 'from-indigo-500 to-violet-500', glow: 'shadow-indigo-500/20' },
    { icon: LayoutGrid, titleKey: 'howItWorks.step3.title', descKey: 'howItWorks.step3.desc', color: 'from-violet-500 to-purple-500', glow: 'shadow-violet-500/20' },
    { icon: Share2, titleKey: 'howItWorks.step4.title', descKey: 'howItWorks.step4.desc', color: 'from-purple-500 to-pink-500', glow: 'shadow-pink-500/20' },
  ];

  const trackerSteps = [
    { icon: Wifi, titleKey: 'howItWorks.tracker.step1.title', descKey: 'howItWorks.tracker.step1.desc', color: 'from-teal-500 to-cyan-500', glow: 'shadow-teal-500/20' },
    { icon: Truck, titleKey: 'howItWorks.tracker.step2.title', descKey: 'howItWorks.tracker.step2.desc', color: 'from-cyan-500 to-sky-500', glow: 'shadow-cyan-500/20' },
    { icon: Eye, titleKey: 'howItWorks.tracker.step3.title', descKey: 'howItWorks.tracker.step3.desc', color: 'from-sky-500 to-blue-500', glow: 'shadow-sky-500/20' },
    { icon: Send, titleKey: 'howItWorks.tracker.step4.title', descKey: 'howItWorks.tracker.step4.desc', color: 'from-blue-500 to-indigo-500', glow: 'shadow-blue-500/20' },
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
                <div
                  className={`flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} shadow-lg ${step.glow} group-hover:scale-110 transition-transform duration-300`}
                  style={{ animation: `icon-float 3s ease-in-out ${i * 0.4}s infinite` }}
                >
                  <Icon className="h-5.5 w-5.5 text-white" />
                </div>
                <span className="absolute -top-2 -right-2 flex h-5.5 w-5.5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-slate-900 shadow">
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
          <h3 className="text-center text-2xl md:text-3xl font-extrabold text-white mb-10">3D Planner</h3>
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
          <h3 className="text-center text-2xl md:text-3xl font-extrabold text-white mb-10">Tracker</h3>
          {renderSteps(trackerSteps)}
        </div>
      </div>
    </section>
  );
}
