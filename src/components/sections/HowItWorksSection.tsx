import { Truck, Package, LayoutGrid, Share2, Wifi, Eye, Send, MapPin } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useRevealChildren } from '@/hooks/useRevealChildren';

export function HowItWorksSection() {
  const { t } = useLanguage();
  const ref = useRevealChildren<HTMLElement>();

  const plannerSteps = [
    { icon: Truck, titleKey: 'howItWorks.step1.title', descKey: 'howItWorks.step1.desc', color: 'from-blue-500 to-indigo-500' },
    { icon: Package, titleKey: 'howItWorks.step2.title', descKey: 'howItWorks.step2.desc', color: 'from-indigo-500 to-violet-500' },
    { icon: LayoutGrid, titleKey: 'howItWorks.step3.title', descKey: 'howItWorks.step3.desc', color: 'from-violet-500 to-purple-500' },
    { icon: Share2, titleKey: 'howItWorks.step4.title', descKey: 'howItWorks.step4.desc', color: 'from-purple-500 to-pink-500' },
  ];

  const trackerSteps = [
    { icon: Wifi, titleKey: 'howItWorks.tracker.step1.title', descKey: 'howItWorks.tracker.step1.desc', color: 'from-teal-500 to-cyan-500' },
    { icon: Truck, titleKey: 'howItWorks.tracker.step2.title', descKey: 'howItWorks.tracker.step2.desc', color: 'from-cyan-500 to-sky-500' },
    { icon: Eye, titleKey: 'howItWorks.tracker.step3.title', descKey: 'howItWorks.tracker.step3.desc', color: 'from-sky-500 to-blue-500' },
    { icon: Send, titleKey: 'howItWorks.tracker.step4.title', descKey: 'howItWorks.tracker.step4.desc', color: 'from-blue-500 to-indigo-500' },
  ];

  return (
    <section ref={ref} id="how-it-works" className="relative py-32 bg-slate-50 overflow-hidden z-20">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          {Array.from({ length: 14 }).map((_, i) => (
            <line key={`v${i}`} x1={`${i * 7.7}%`} y1="0%" x2={`${i * 7.7}%`} y2="100%" stroke="#3b82f6" strokeWidth="1" />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={`h${i}`} x1="0%" y1={`${i * 11}%`} x2="100%" y2={`${i * 11}%`} stroke="#3b82f6" strokeWidth="1" />
          ))}
        </svg>
        <div className="absolute -top-20 right-0 h-96 w-96 rounded-full bg-blue-100 blur-[80px] opacity-50" />
        <div className="absolute -bottom-20 left-0 h-96 w-96 rounded-full bg-teal-100 blur-[80px] opacity-50" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="reveal mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            {t('howItWorks.title')}
          </h2>
        </div>

        {/* Two-column product layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* ── 3D Planner Column ── */}
          <div className="reveal flex flex-col gap-6">
            {/* Product header */}
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-md">
                <LayoutGrid className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">LoadMind</p>
                <h3 className="text-xl font-bold text-slate-900">3D Planner</h3>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-52 rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 group mb-2">
              <img
                src="/how-it-works-visual.png"
                alt="LoadMind 3D Planner"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-indigo-600/10" />
              {/* Floating badge */}
              <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-xl bg-white/90 backdrop-blur-sm border border-slate-200 shadow px-3 py-1.5">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-900">98.6% Capacity</span>
              </div>
            </div>

            {/* Steps */}
            <div className="flex flex-col gap-5 relative">
              <div className="absolute left-[22px] top-8 bottom-8 w-px bg-gradient-to-b from-blue-400 to-pink-400 opacity-20 hidden sm:block" />
              {plannerSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.titleKey} className={`reveal reveal-delay-${i + 1} group flex gap-4 items-start`}>
                    <div className="relative shrink-0">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} shadow group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[9px] font-black text-slate-900 shadow border border-slate-100">
                        {i + 1}
                      </span>
                    </div>
                    <div className="pt-0.5">
                      <h4 className="text-base font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">{t(step.titleKey)}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{t(step.descKey)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Vertical divider — desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-32 bottom-12 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent" />

          {/* ── Tracker Column ── */}
          <div className="reveal flex flex-col gap-6">
            {/* Product header */}
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 shadow-md">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">LoadMind</p>
                <h3 className="text-xl font-bold text-slate-900">Tracker</h3>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-52 rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 group mb-2">
              <img
                src="/tracker-visual.png"
                alt="LoadMind Tracker"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 via-transparent to-cyan-600/10" />
              {/* Floating badge */}
              <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-xl bg-white/90 backdrop-blur-sm border border-slate-200 shadow px-3 py-1.5">
                <div className="h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-900">18 Active · 4 Idle</span>
              </div>
            </div>

            {/* Steps */}
            <div className="flex flex-col gap-5 relative">
              <div className="absolute left-[22px] top-8 bottom-8 w-px bg-gradient-to-b from-teal-400 to-indigo-400 opacity-20 hidden sm:block" />
              {trackerSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.titleKey} className={`reveal reveal-delay-${i + 1} group flex gap-4 items-start`}>
                    <div className="relative shrink-0">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} shadow group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[9px] font-black text-slate-900 shadow border border-slate-100">
                        {i + 1}
                      </span>
                    </div>
                    <div className="pt-0.5">
                      <h4 className="text-base font-bold text-slate-900 mb-1 group-hover:text-teal-700 transition-colors">{t(step.titleKey)}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{t(step.descKey)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
