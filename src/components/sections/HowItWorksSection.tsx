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
    <section ref={ref} id="how-it-works" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="reveal mb-12 text-center text-2xl font-bold md:text-3xl gradient-text">
          {t('howItWorks.title')}
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.titleKey} className={`reveal reveal-delay-${i + 1} ${i < steps.length - 1 ? 'step-connector' : ''}`}>
              <StepCard
                stepNumber={i + 1}
                icon={step.icon}
                title={t(step.titleKey)}
                description={t(step.descKey)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
