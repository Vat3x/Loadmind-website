import { Box, MapPin } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useRevealChildren } from '@/hooks/useRevealChildren';
import { ProductCard } from '@/components/ui/ProductCard';

export function ProductsSection() {
  const { t } = useLanguage();
  const ref = useRevealChildren<HTMLElement>();

  return (
    <section ref={ref} className="relative overflow-hidden bg-slate-950 py-24 z-20">
      {/* Logistics Imagery: Warehouse/Cargo */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8ed7fc51f7?q=80&w=2600&auto=format&fit=crop')] bg-cover bg-center"
          style={{ opacity: 0.15 }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950"></div>
      </div>

      <div className="relative z-20 mx-auto max-w-5xl px-4">
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
              ctaHref="/app"
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
