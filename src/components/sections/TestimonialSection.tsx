import { Quote } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useReveal } from '@/hooks/useReveal';
import { Card } from '@/components/ui/Card';

export function TestimonialSection() {
  const { t } = useLanguage();
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="reveal relative py-24 bg-blue-950/40 border-y border-blue-900/40 z-20">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="mb-12 text-center text-3xl md:text-4xl font-extrabold text-white">
          {t('testimonial.title')}
        </h2>
        <Card className="text-center">
          <Quote className="mx-auto mb-4 h-8 w-8 text-primary/40" />
          <blockquote className="text-lg italic leading-relaxed text-foreground md:text-xl">
            {t('testimonial.quote')}
          </blockquote>
          <p className="mt-4 text-sm text-muted-fg">{t('testimonial.author')}</p>
        </Card>
      </div>
    </section>
  );
}
