import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/Button';

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="hero-gradient py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-bold md:text-4xl gradient-text">
          {t('cta.title')}
        </h2>
        <p className="mt-4 text-lg text-muted-fg">
          {t('cta.subtitle')}
        </p>
        <div className="mt-8">
          <Button href="/3dplan" size="lg">
            {t('cta.button')}
          </Button>
        </div>
      </div>
    </section>
  );
}
