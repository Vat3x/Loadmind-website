import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="gradient-mesh py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h1 className="text-4xl font-extrabold md:text-6xl lg:text-7xl gradient-text">
          {t('hero.title')}
        </h1>
        <p className="mt-6 text-xl text-muted-fg md:text-2xl">
          {t('hero.subtitle')}
        </p>
        <div className="mt-10">
          <Button href="https://loadmind.app/app" external size="lg">
            {t('hero.cta')}
          </Button>
        </div>
      </div>
    </section>
  );
}
