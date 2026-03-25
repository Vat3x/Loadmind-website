import { Button } from './Button';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export function PageHero({ title, subtitle, ctaText, ctaHref, secondaryCtaText, secondaryCtaHref }: PageHeroProps) {
  return (
    <section className="relative py-24 text-center bg-blue-950/40 border-b border-blue-900/40">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="text-4xl font-extrabold md:text-5xl text-white">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-lg text-slate-400 md:text-xl">{subtitle}</p>
        )}
        {ctaText && ctaHref && (
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={ctaHref} size="lg">{ctaText}</Button>
            {secondaryCtaText && secondaryCtaHref && (
              <Button href={secondaryCtaHref} size="lg" variant="secondary">{secondaryCtaText}</Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
