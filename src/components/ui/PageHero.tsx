import { Button } from './Button';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function PageHero({ title, subtitle, ctaText, ctaHref }: PageHeroProps) {
  return (
    <section className="relative py-24 text-center bg-slate-950">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="text-4xl font-extrabold md:text-5xl text-white">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-lg text-slate-400 md:text-xl">{subtitle}</p>
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
