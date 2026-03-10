import { Truck, Package, LayoutGrid, Share2 } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useRevealChildren } from '@/hooks/useRevealChildren';
import { StepCard } from '@/components/ui/StepCard';

export function HowItWorksSection() {
  const { t } = useLanguage();
  const ref = useRevealChildren<HTMLElement>();

  const steps = [
    { icon: Truck, titleKey: 'howItWorks.step1.title', descKey: 'howItWorks.step1.desc' },
    { icon: Package, titleKey: 'howItWorks.step2.title', descKey: 'howItWorks.step2.desc' },
    { icon: LayoutGrid, titleKey: 'howItWorks.step3.title', descKey: 'howItWorks.step3.desc' },
    { icon: Share2, titleKey: 'howItWorks.step4.title', descKey: 'howItWorks.step4.desc' },
  ];

  return (
    <section ref={ref} id="how-it-works" className="py-32 bg-slate-50 relative z-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="reveal mb-20 text-center text-3xl md:text-5xl font-extrabold text-slate-900">
          {t('howItWorks.title')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
            {steps.map((step, i) => (
              <div key={step.titleKey} className={`reveal reveal-delay-${i + 1} h-full`}>
                <StepCard
                  theme="light"
                  stepNumber={i + 1}
                  icon={step.icon}
                  title={t(step.titleKey)}
                  description={t(step.descKey)}
                />
              </div>
            ))}
          </div>

          {/* Right Column: Concept Image */}
          <div className="reveal reveal-delay-4 relative h-[400px] lg:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200/60 group">
            <img
              src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2000&auto=format&fit=crop"
              alt="Logistics Technology Operations"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Subtle inner gradient overlay of the image */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
