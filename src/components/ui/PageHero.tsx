import { Button } from './Button';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function PageHero({ title, subtitle, ctaText, ctaHref }: PageHeroProps) {
  return (
    <section className="py-20 text-center">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="text-3xl font-bold md:text-5xl gradient-text">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-lg text-muted-fg md:text-xl">{subtitle}</p>
        )}
        {ctaText && ctaHref && (
          <div className="mt-8">
            <Button href={ctaHref} size="lg">{ctaText}</Button>
          </div>
        )}
      </div>
    </section>
  );
}
