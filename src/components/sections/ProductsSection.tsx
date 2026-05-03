import { Box, MapPin } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useRevealChildren } from '@/hooks/useRevealChildren';
import { ProductCard } from '@/components/ui/ProductCard';

export function ProductsSection() {
  const { t } = useLanguage();
  const ref = useRevealChildren<HTMLElement>();

  return (
    <section ref={ref} id="products" className="relative overflow-hidden bg-slate-950 py-24 z-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="reveal mb-20 text-center text-3xl md:text-5xl font-extrabold text-white">
          {t('products.title')}
        </h2>
        <div className="space-y-20 md:space-y-28">
          <div className="reveal reveal-delay-1">
            <ProductCard
              theme="dark"
              icon={MapPin}
              iconBg="bg-gradient-to-br from-emerald-500 to-teal-600 shadow-emerald-500/30 shadow-lg"
              title={t('products.tracking.title')}
              problem={t('products.tracking.problem')}
              description={t('products.tracking.description')}
              features={[
                t('products.tracking.feature1'),
                t('products.tracking.feature2'),
                t('products.tracking.feature3'),
              ]}
              ctaText={t('products.tracking.cta')}
              ctaHref="/tracking"
              imageUrl="/product-tracking-problem.png"
            />
          </div>
          <div className="reveal reveal-delay-2">
            <ProductCard
              theme="dark"
              icon={Box}
              iconBg="bg-gradient-to-br from-blue-500 to-indigo-600 shadow-blue-500/30 shadow-lg"
              title={t('products.3dplan.title')}
              problem={t('products.3dplan.problem')}
              description={t('products.3dplan.description')}
              features={[
                t('products.3dplan.feature1'),
                t('products.3dplan.feature2'),
                t('products.3dplan.feature3'),
                t('products.3dplan.feature4'),
                t('products.3dplan.feature5'),
              ]}
              ctaText={t('products.3dplan.cta')}
              ctaHref="/3d-plan"
              imageUrl="/product-3d-problem.png"
              reverse
            />
          </div>
        </div>
      </div>
    </section>
  );
}
