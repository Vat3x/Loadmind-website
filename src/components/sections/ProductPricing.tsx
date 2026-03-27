import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useAuth } from '@/hooks/useAuth';
import { PricingCard } from '@/components/ui/PricingCard';
import { PricingToggle } from '@/components/ui/PricingToggle';

type BillingCycle = 'monthly' | 'annual';

export interface TierData {
  nameKey: string;
  priceKey: { monthly: string; annual: string };
  descKey: string;
  volumeKey: string;
  features: { key: string; included: boolean }[];
  ctaKey: string;
  ctaHref: string;
  popular?: boolean;
  enterprise?: boolean;
  noteKey?: string;
  fromApi?: boolean;
  isPayg?: boolean;
  planId?: string;
  planPrice?: number;
  apiProduct?: string;
}

interface ApiPlan {
  id: string;
  product: string;
  name: string;
  price: number | null;
  yearlyPrice?: number | null;
  priceLabel?: string | null;
  interval: string;
  limit: string;
  features: string[];
  popular?: boolean;
  order: number;
}

const API_BASE = 'https://admin-panel-be9fc.web.app';

function apiPlanToTier(plan: ApiPlan, productType: '3d' | 'tracking'): TierData {
  const isEnterprise = plan.price === null && plan.name.toLowerCase() === 'enterprise';
  const hasPriceLabel = plan.price === null && !isEnterprise;

  const monthlyPrice = plan.price !== null
    ? `$${plan.price}`
    : hasPriceLabel
      ? (plan.priceLabel || '')
      : '';
  const annualPrice = plan.yearlyPrice != null
    ? `$${Math.round(plan.yearlyPrice / 12)}`
    : monthlyPrice;

  const ctaHref = isEnterprise
    ? '/contact'
    : productType === '3d'
      ? '/3d'
      : plan.name.toLowerCase() === 'demo'
        ? '/demo'
        : '/tracker';

  const ctaKey = isEnterprise
    ? 'pricing.cta.enterprise'
    : plan.price === 0
      ? 'pricing.cta.free'
      : 'pricing.cta.start';

  return {
    nameKey: plan.name,
    priceKey: { monthly: monthlyPrice, annual: annualPrice },
    descKey: plan.limit,
    volumeKey: plan.limit,
    features: plan.features.map((f) => ({ key: f, included: true })),
    ctaKey,
    ctaHref,
    popular: plan.popular,
    enterprise: isEnterprise,
    isPayg: hasPriceLabel,
    noteKey: plan.price === 0 && !isEnterprise ? 'pricing.note.free' : undefined,
    fromApi: true,
    planId: plan.id,
    planPrice: plan.price ?? undefined,
    apiProduct: plan.product === 'tracker' ? 'tracker' : '3d-planning',
  };
}

interface ProductPricingProps {
  product: '3d' | 'tracking';
  apiProduct: string;
  fallbackPlans: TierData[];
}

export function ProductPricing({ product, apiProduct, fallbackPlans }: ProductPricingProps) {
  const { t } = useLanguage();
  const { user } = useAuth();
  const [billing, setBilling] = useState<BillingCycle>('monthly');
  const [plans, setPlans] = useState<TierData[]>(fallbackPlans);

  useEffect(() => {
    fetch(`${API_BASE}/api/public/plans`)
      .then((res) => res.json())
      .then((allPlans: ApiPlan[]) => {
        const productPlans = allPlans
          .filter((p) => p.product === apiProduct)
          .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
          .map((p) => apiPlanToTier(p, product));
        if (productPlans.length > 0) setPlans(productPlans);
      })
      .catch(() => {});
  }, [apiProduct, product]);

  const billingLabels = [t('pricing.billing.monthly'), t('pricing.billing.annual')];
  const periodKey = billing === 'monthly' ? 'pricing.period.monthly' : 'pricing.period.annual';

  const handlePlanCheckout = useCallback(async (planId: string, planName: string, _price: number, planProduct: string) => {
    if (planProduct === 'tracker') {
      window.location.href = `https://load-mind.com/tracker/register?plan=${planName.toLowerCase()}`;
      return;
    }
    if (!user) {
      window.location.href = `/login?redirect=/${product === '3d' ? '3d-plan' : 'tracking'}`;
      return;
    }
    try {
      const res = await fetch(`${API_BASE}/api/public/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.id,
          email: user.email,
          planId,
          product: planProduct,
          billing,
          returnUrl: `${window.location.origin}/checkout/return?plan=${planName.toLowerCase()}`,
        }),
      });
      const data = await res.json();
      if (data.checkout_url) {
        window.location.href = data.checkout_url;
      } else {
        alert(data.message || 'Failed to start checkout');
      }
    } catch {
      alert('Failed to start checkout. Please try again.');
    }
  }, [user, billing, product]);

  const handlePaygCheckout = useCallback(async () => {
    if (!user) {
      window.location.href = `/login?redirect=/${product === '3d' ? '3d-plan' : 'tracking'}`;
      return;
    }
    try {
      const res = await fetch(`${API_BASE}/api/public/payg/create-checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, email: user.email, returnUrl: `${window.location.origin}/checkout/return` }),
      });
      const data = await res.json();
      if (data.checkout_url) {
        window.location.href = data.checkout_url;
      } else {
        alert(data.message || 'Failed to start checkout');
      }
    } catch {
      alert('Failed to start checkout. Please try again.');
    }
  }, [user, product]);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl gradient-text">
          {t('pricing.title')}
        </h2>
        <div className="flex justify-center mb-10">
          <PricingToggle
            labels={billingLabels}
            activeIndex={billing === 'monthly' ? 0 : 1}
            onChange={(i) => setBilling(i === 0 ? 'monthly' : 'annual')}
            size="sm"
            badge={{ index: 1, text: t('pricing.billing.save') }}
          />
        </div>
        <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${plans.length > 4 ? 'lg:grid-cols-5 lg:gap-4' : 'lg:grid-cols-4'}`}>
          {plans.map((tier, i) => {
            const isApi = tier.fromApi;
            const planName = isApi ? tier.nameKey : t(tier.nameKey);
            const price = tier.enterprise ? '' : (isApi ? tier.priceKey[billing] : t(tier.priceKey[billing]));
            const period = tier.enterprise ? '' : t(periodKey);
            const volume = isApi ? tier.volumeKey : t(tier.volumeKey);
            const description = isApi ? tier.descKey : t(tier.descKey);
            const features = tier.features.map((f) => ({
              label: isApi ? f.key : t(f.key),
              included: f.included,
            }));
            const ctaText = t(tier.ctaKey);
            const note = tier.noteKey ? t(tier.noteKey) : undefined;

            return (
              <div
                key={i}
                style={{ animationDelay: `${i * 80}ms` }}
                className="animate-[fade-in-up_0.4s_ease_both]"
              >
                <PricingCard
                  planName={planName}
                  price={price}
                  period={period}
                  volume={volume}
                  description={description}
                  features={features}
                  ctaText={ctaText}
                  ctaHref={tier.ctaHref}
                  popular={tier.popular}
                  enterprise={tier.enterprise}
                  note={note}
                  onCtaClick={
                    tier.isPayg
                      ? handlePaygCheckout
                      : (tier.planId && tier.planPrice && tier.planPrice > 0 && !tier.enterprise)
                        ? () => handlePlanCheckout(tier.planId!, tier.nameKey, tier.planPrice!, tier.apiProduct || '3d-planning')
                        : undefined
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
