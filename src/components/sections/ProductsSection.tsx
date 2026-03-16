import { Box, MapPin } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useRevealChildren } from '@/hooks/useRevealChildren';
import { ProductCard } from '@/components/ui/ProductCard';

export function ProductsSection() {
  const { t } = useLanguage();
  const ref = useRevealChildren<HTMLElement>();

  return (
    <section ref={ref} id="products" className="relative overflow-hidden bg-slate-950 py-24 z-20">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="reveal mb-16 text-center text-3xl md:text-5xl font-extrabold text-white">
          {t('products.title')}
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="reveal reveal-delay-1 h-full">
            <ProductCard
              theme="dark"
              icon={Box}
              title={t('products.3dplan.title')}
              description={t('products.3dplan.description')}
              ctaText={t('products.3dplan.cta')}
              ctaHref="/3d"
              imageUrl="/product-3d-plan.png"
            />
          </div>
          <div className="reveal reveal-delay-2 h-full">
            <ProductCard
              theme="dark"
              icon={MapPin}
              title={t('products.tracking.title')}
              description={t('products.tracking.description')}
              ctaText={t('products.tracking.cta')}
              ctaHref="/tracking"
              imageUrl="/product-fleet.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
