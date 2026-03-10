import { useState } from 'react';
import { Truck, Package, LayoutGrid, Share2, MapPin, Wifi, Eye, Send } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useRevealChildren } from '@/hooks/useRevealChildren';

export function HowItWorksSection() {
  const { t } = useLanguage();
  const ref = useRevealChildren<HTMLElement>();
  const [activeTab, setActiveTab] = useState<'planner' | 'tracker'>('planner');

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

  const isPlanner = activeTab === 'planner';
  const steps = isPlanner ? plannerSteps : trackerSteps;

  return (
    <section ref={ref} id="how-it-works" className="relative py-32 bg-slate-50 overflow-hidden z-20">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          {Array.from({ length: 14 }).map((_, i) => (
            <line key={`v${i}`} x1={`${i * 7.7}%`} y1="0%" x2={`${i * 7.7}%`} y2="100%" stroke="#3b82f6" strokeWidth="1" />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={`h${i}`} x1="0%" y1={`${i * 11}%`} x2="100%" y2={`${i * 11}%`} stroke="#3b82f6" strokeWidth="1" />
          ))}
        </svg>
        <div className="absolute -top-20 right-0 h-96 w-96 rounded-full bg-blue-100 blur-[80px] opacity-60" />
        <div className="absolute -bottom-20 left-0 h-96 w-96 rounded-full bg-indigo-100 blur-[80px] opacity-60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="reveal mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            {t('howItWorks.title')}
          </h2>

          {/* Product Tab Toggle */}
          <div className="inline-flex items-center gap-1 rounded-full bg-white border border-slate-200 shadow-sm p-1">
            <button
              onClick={() => setActiveTab('planner')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${isPlanner
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                  : 'text-slate-500 hover:text-slate-900'
                }`}
            >
              <LayoutGrid className="h-4 w-4" />
              3D Planner
            </button>
            <button
              onClick={() => setActiveTab('tracker')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${!isPlanner
                  ? 'bg-teal-600 text-white shadow-md shadow-teal-200'
                  : 'text-slate-500 hover:text-slate-900'
                }`}
            >
              <MapPin className="h-4 w-4" />
              Tracker
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Steps */}
          <div className="relative">
            <div className="absolute left-[28px] top-12 bottom-12 w-px bg-gradient-to-b from-blue-400 via-violet-400 to-pink-400 opacity-30 hidden sm:block" />
            <div className="flex flex-col gap-8">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.titleKey} className={`reveal reveal-delay-${i + 1} group flex gap-6 items-start`}>
                    <div className="relative shrink-0">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-black text-slate-900 shadow border border-slate-100">
                        {i + 1}
                      </span>
                    </div>
                    <div className="pt-1 flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors duration-200">
                        {t(step.titleKey)}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">{t(step.descKey)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Visual — switches on tab */}
          <div className="reveal reveal-delay-4 relative">
            {/* Floating stat badges */}
            {isPlanner ? (
              <>
                <div className="absolute -top-4 -left-4 z-10 rounded-2xl bg-white border border-slate-200 shadow-xl px-4 py-3 flex items-center gap-3">
                  <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shrink-0">
                    <LayoutGrid className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Load Optimization</p>
                    <p className="text-sm font-bold text-slate-900">98.6% Capacity</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 z-10 rounded-2xl bg-white border border-slate-200 shadow-xl px-4 py-3 flex items-center gap-3">
                  <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shrink-0">
                    <Truck className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">DOT Compliance</p>
                    <p className="text-sm font-bold text-slate-900">✓ Scale-Ready</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="absolute -top-4 -left-4 z-10 rounded-2xl bg-white border border-slate-200 shadow-xl px-4 py-3 flex items-center gap-3">
                  <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shrink-0">
                    <Wifi className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Fleet Status</p>
                    <p className="text-sm font-bold text-slate-900">18 Active · 4 Idle</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 z-10 rounded-2xl bg-white border border-slate-200 shadow-xl px-4 py-3 flex items-center gap-3">
                  <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shrink-0">
                    <Send className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Check Calls</p>
                    <p className="text-sm font-bold text-slate-900">↓ 94% Reduced</p>
                  </div>
                </div>
              </>
            )}

            {/* Image — animated crossfade */}
            <div className="relative h-[440px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200/80 group transition-all duration-500">
              <img
                key={activeTab}
                src={isPlanner ? '/how-it-works-visual.png' : '/tracker-visual.png'}
                alt={isPlanner ? 'LoadMind 3D Planner' : 'LoadMind Tracker'}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 animate-fade-in"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${isPlanner ? 'from-blue-600/10' : 'from-teal-600/10'} via-transparent to-indigo-600/10 pointer-events-none transition-all duration-500`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
