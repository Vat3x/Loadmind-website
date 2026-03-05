import { Box, MapPin } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useRevealChildren } from '@/hooks/useRevealChildren';
import { ProductCard } from '@/components/ui/ProductCard';

export function ProductsSection() {
  const { t } = useLanguage();
  const ref = useRevealChildren<HTMLElement>();

  return (
    <section ref={ref} className="section-alt py-24">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="reveal mb-12 text-center text-2xl font-bold md:text-3xl gradient-text">
          {t('products.title')}
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="reveal reveal-delay-1">
            <ProductCard
              icon={Box}
              title={t('products.3dplan.title')}
              description={t('products.3dplan.description')}
              ctaText={t('products.3dplan.cta')}
              ctaHref="/app"
            />
          </div>
          <div className="reveal reveal-delay-2">
            <ProductCard
              icon={MapPin}
              title={t('products.tracking.title')}
              description={t('products.tracking.description')}
              ctaText={t('products.tracking.cta')}
              comingSoon
            />
          </div>
        </div>
      </div>
    </section>
  );
}
