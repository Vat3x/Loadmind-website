import { useLanguage } from '@/hooks/useLanguage';
import { useReveal } from '@/hooks/useReveal';
import { Button } from '@/components/ui/Button';

export function CTASection() {
  const { t } = useLanguage();
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="reveal relative overflow-hidden bg-slate-950 py-32 z-20">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-20 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/8 blur-[140px]" />
        <div className="absolute -bottom-20 right-1/4 h-[500px] w-[500px] rounded-full bg-indigo-600/8 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(2,6,23,0.9)_100%)]" />
      </div>

      <div className="relative z-20 mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-4xl font-extrabold md:text-5xl text-white">
          {t('cta.title')}
        </h2>
        <p className="mt-6 text-xl leading-relaxed text-slate-400">
          {t('cta.subtitle')}
        </p>
        <div className="mt-12">
          <Button theme="dark" variant="primary" href="/app" size="lg">
            {t('cta.button')}
          </Button>
        </div>
      </div>
    </section>
  );
}
