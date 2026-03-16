import { useLanguage } from '@/hooks/useLanguage';
import { useReveal } from '@/hooks/useReveal';
import { Button } from '@/components/ui/Button';

export function MidCTASection() {
  const { t } = useLanguage();
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="reveal relative bg-slate-950 py-16 z-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="rounded-2xl border border-slate-800 bg-gradient-to-r from-blue-600/5 via-indigo-600/5 to-blue-600/5 px-8 py-10 text-center md:px-16">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            {t('midCta.title')}
          </h2>
          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <Button theme="dark" variant="primary" href="/3d" size="md">
              {t('midCta.tryFree')}
            </Button>
            <Button theme="dark" variant="secondary" href="/contact" size="md">
              {t('midCta.contact')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
