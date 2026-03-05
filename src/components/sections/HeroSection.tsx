import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="hero-gradient flex min-h-[85vh] items-center py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <div
          className="hero-animate"
          style={{ animation: 'fade-in-up 0.7s ease forwards', opacity: 0 }}
        >
          <span className="mb-6 inline-block rounded-full border border-border-accent bg-surface px-4 py-1.5 text-xs font-medium tracking-wider text-muted-fg uppercase">
            {t('hero.badge') || 'Dispatch SaaS Platform'}
          </span>
        </div>
        <h1
          className="hero-animate text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl gradient-text"
          style={{ animation: 'fade-in-up 0.7s ease 0.15s forwards', opacity: 0 }}
        >
          {t('hero.title')}
        </h1>
        <p
          className="hero-animate mt-6 text-xl text-muted-fg md:text-2xl"
          style={{ animation: 'fade-in-up 0.7s ease 0.3s forwards', opacity: 0 }}
        >
          {t('hero.subtitle')}
        </p>
        <div
          className="hero-animate mt-10"
          style={{ animation: 'fade-in-up 0.7s ease 0.45s forwards', opacity: 0 }}
        >
          <Button href="/app" size="lg">
            {t('hero.cta')}
          </Button>
        </div>
      </div>
    </section>
  );
}
