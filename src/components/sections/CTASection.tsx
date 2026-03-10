import { useLanguage } from '@/hooks/useLanguage';
import { useReveal } from '@/hooks/useReveal';
import { Button } from '@/components/ui/Button';

export function CTASection() {
  const { t } = useLanguage();
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="reveal relative overflow-hidden bg-slate-950 py-32 z-20">
      {/* Background Layer Stack */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Logistics Imagery: Fleet/Terminal */}
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2600&auto=format&fit=crop')] bg-cover bg-center"
          style={{ opacity: 0.35 }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/60 to-slate-950/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80"></div>
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-blue-500/20 blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-cyan-400/20 blur-[100px]"></div>
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
