import { Quote } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card } from '@/components/ui/Card';

export function TestimonialSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="mb-12 text-center text-2xl font-bold md:text-3xl gradient-text">
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
