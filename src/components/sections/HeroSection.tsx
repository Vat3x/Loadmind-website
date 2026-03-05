import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="hero-gradient pt-16 pb-12 md:pt-20 md:pb-16">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <div
          className="hero-animate"
          style={{ animation: 'fade-in-up 0.7s ease forwards', opacity: 0 }}
        >
          <span className="mb-8 inline-block rounded-full border border-border-accent bg-surface px-4 py-1.5 text-xs font-medium tracking-wider text-muted-fg uppercase">
            {t('hero.badge')}
          </span>
        </div>
        <h1
          className="hero-animate text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl gradient-text"
          style={{ animation: 'fade-in-up 0.7s ease 0.15s forwards', opacity: 0 }}
        >
          {t('hero.title')}
        </h1>
        <p
          className="hero-animate mt-5 text-lg text-muted-fg md:text-xl"
          style={{ animation: 'fade-in-up 0.7s ease 0.3s forwards', opacity: 0 }}
        >
          {t('hero.subtitle')}
        </p>
        <div
          className="hero-animate mt-8"
          style={{ animation: 'fade-in-up 0.7s ease 0.45s forwards', opacity: 0 }}
        >
          <Button href="/app" size="lg">
            {t('hero.cta')}
          </Button>
        </div>
      </div>

      {/* Product Preview */}
      <div
        className="hero-animate mx-auto mt-16 max-w-5xl px-4 md:mt-20"
        style={{ animation: 'fade-in-up 0.8s ease 0.6s forwards', opacity: 0 }}
      >
        <div className="hero-preview-wrapper group relative transition-transform duration-500 hover:scale-[1.02]">
          {/* Gradient border glow */}
          <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-primary/30 via-accent/20 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
          <div className="relative overflow-hidden rounded-xl border border-border/50 bg-surface">
            <img
              src="/hero-3d-preview.png"
              alt="LoadMind 3D Load Planning — truck loading visualization"
              className="w-full transition-transform duration-700 group-hover:scale-[1.03]"
              loading="eager"
            />
            {/* Bottom fade to blend into background */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
          </div>
          {/* Reflection glow beneath */}
          <div className="mx-auto -mt-6 h-8 w-3/4 rounded-b-full bg-primary/5 blur-xl" />
        </div>
      </div>
    </section>
  );
}
