import { Truck, Package, LayoutGrid, Share2 } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { StepCard } from '@/components/ui/StepCard';

export function HowItWorksSection() {
  const { t } = useLanguage();

  const steps = [
    { icon: Truck, titleKey: 'howItWorks.step1.title', descKey: 'howItWorks.step1.desc' },
    { icon: Package, titleKey: 'howItWorks.step2.title', descKey: 'howItWorks.step2.desc' },
    { icon: LayoutGrid, titleKey: 'howItWorks.step3.title', descKey: 'howItWorks.step3.desc' },
    { icon: Share2, titleKey: 'howItWorks.step4.title', descKey: 'howItWorks.step4.desc' },
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-2xl font-bold md:text-3xl gradient-text">
          {t('howItWorks.title')}
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <StepCard
              key={step.titleKey}
              stepNumber={i + 1}
              icon={step.icon}
              title={t(step.titleKey)}
              description={t(step.descKey)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
