import { useState, useEffect, useCallback } from 'react';
import { Box, MapPin, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useAuth } from '@/hooks/useAuth';
import { PageHero } from '@/components/ui/PageHero';
import { PricingCard } from '@/components/ui/PricingCard';
import { PricingToggle } from '@/components/ui/PricingToggle';
import { FAQAccordion } from '@/components/ui/FAQAccordion';

type BillingCycle = 'monthly' | 'annual';
type SelectedProduct = '3d' | 'tracking' | null;

interface TierData {
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

// Fallback plans if API is unavailable
const PLANS_3D: TierData[] = [
  {
    nameKey: 'pricing.3d.free.name',
    priceKey: { monthly: 'pricing.3d.free.price.monthly', annual: 'pricing.3d.free.price.annual' },
    descKey: 'pricing.3d.free.desc',
    volumeKey: 'pricing.3d.free.volume',
    features: [
      { key: 'pricing.3d.feature.aiCargo', included: true },
      { key: 'pricing.3d.feature.weightBalance', included: true },
      { key: 'pricing.3d.feature.export', included: true },
      { key: 'pricing.3d.feature.shareLinks', included: true },
      { key: 'pricing.3d.feature.api', included: false },
    ],
    ctaKey: 'pricing.cta.free',
    ctaHref: '/3d',
    noteKey: 'pricing.note.free',
  },
  {
    nameKey: 'pricing.3d.starter.name',
    priceKey: { monthly: 'pricing.3d.starter.price.monthly', annual: 'pricing.3d.starter.price.annual' },
    descKey: 'pricing.3d.starter.desc',
    volumeKey: 'pricing.3d.starter.volume',
    features: [
      { key: 'pricing.3d.feature.aiCargo', included: true },
      { key: 'pricing.3d.feature.weightBalance', included: true },
      { key: 'pricing.3d.feature.export', included: true },
      { key: 'pricing.3d.feature.shareLinks', included: true },
      { key: 'pricing.3d.feature.api', included: true },
    ],
    ctaKey: 'pricing.cta.start',
    ctaHref: '/3d',
  },
  {
    nameKey: 'pricing.3d.pro.name',
    priceKey: { monthly: 'pricing.3d.pro.price.monthly', annual: 'pricing.3d.pro.price.annual' },
    descKey: 'pricing.3d.pro.desc',
    volumeKey: 'pricing.3d.pro.volume',
    features: [
      { key: 'pricing.3d.feature.aiCargo', included: true },
      { key: 'pricing.3d.feature.weightBalance', included: true },
      { key: 'pricing.3d.feature.export', included: true },
      { key: 'pricing.3d.feature.shareLinks', included: true },
      { key: 'pricing.3d.feature.api', included: true },
    ],
    ctaKey: 'pricing.cta.start',
    ctaHref: '/3d',
    popular: true,
  },
  {
    nameKey: 'pricing.3d.enterprise.name',
    priceKey: { monthly: 'pricing.3d.enterprise.name', annual: 'pricing.3d.enterprise.name' },
    descKey: 'pricing.3d.enterprise.desc',
    volumeKey: 'pricing.3d.enterprise.volume',
    features: [
      { key: 'pricing.3d.feature.aiCargo', included: true },
      { key: 'pricing.3d.feature.weightBalance', included: true },
      { key: 'pricing.3d.feature.export', included: true },
      { key: 'pricing.3d.feature.shareLinks', included: true },
      { key: 'pricing.3d.feature.api', included: true },
    ],
    ctaKey: 'pricing.cta.enterprise',
    ctaHref: '/contact',
    enterprise: true,
  },
];

const PLANS_TRACKING: TierData[] = [
  {
    nameKey: 'pricing.track.demo.name',
    priceKey: { monthly: 'pricing.track.demo.name', annual: 'pricing.track.demo.name' },
    descKey: 'pricing.track.demo.desc',
    volumeKey: 'pricing.track.demo.volume',
    features: [
      { key: 'pricing.track.feature.realtime', included: true },
      { key: 'pricing.track.feature.shareLink', included: true },
      { key: 'pricing.track.feature.api', included: true },
    ],
    ctaKey: 'pricing.cta.demo',
    ctaHref: '/demo',
    enterprise: true,
  },
  {
    nameKey: 'pricing.track.starter.name',
    priceKey: { monthly: 'pricing.track.starter.price.monthly', annual: 'pricing.track.starter.price.annual' },
    descKey: 'pricing.track.starter.desc',
    volumeKey: 'pricing.track.starter.volume',
    features: [
      { key: 'pricing.track.feature.realtime', included: true },
      { key: 'pricing.track.feature.shareLink', included: true },
      { key: 'pricing.track.feature.api', included: true },
    ],
    ctaKey: 'pricing.cta.start',
    ctaHref: '/tracker',
  },
  {
    nameKey: 'pricing.track.growth.name',
    priceKey: { monthly: 'pricing.track.growth.price.monthly', annual: 'pricing.track.growth.price.annual' },
    descKey: 'pricing.track.growth.desc',
    volumeKey: 'pricing.track.growth.volume',
    features: [
      { key: 'pricing.track.feature.realtime', included: true },
      { key: 'pricing.track.feature.shareLink', included: true },
      { key: 'pricing.track.feature.api', included: true },
    ],
    ctaKey: 'pricing.cta.start',
    ctaHref: '/tracker',
    popular: true,
  },
  {
    nameKey: 'pricing.track.business.name',
    priceKey: { monthly: 'pricing.track.business.price.monthly', annual: 'pricing.track.business.price.annual' },
    descKey: 'pricing.track.business.desc',
    volumeKey: 'pricing.track.business.volume',
    features: [
      { key: 'pricing.track.feature.realtime', included: true },
      { key: 'pricing.track.feature.shareLink', included: true },
      { key: 'pricing.track.feature.api', included: true },
    ],
    ctaKey: 'pricing.cta.start',
    ctaHref: '/tracker',
  },
  {
    nameKey: 'pricing.track.enterprise.name',
    priceKey: { monthly: 'pricing.track.enterprise.name', annual: 'pricing.track.enterprise.name' },
    descKey: 'pricing.track.enterprise.desc',
    volumeKey: 'pricing.track.enterprise.volume',
    features: [
      { key: 'pricing.track.feature.realtime', included: true },
      { key: 'pricing.track.feature.shareLink', included: true },
      { key: 'pricing.track.feature.api', included: true },
    ],
    ctaKey: 'pricing.cta.enterprise',
    ctaHref: '/contact',
    enterprise: true,
  },
];

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
    planPrice: plan.price,
    apiProduct: plan.product === 'tracker' ? 'tracker' : '3d-planning',
  };
}

function PricingGrid({
  plans,
  billing,
  t,
  onPaygClick,
  onPlanClick,
}: {
  plans: TierData[];
  billing: BillingCycle;
  t: (key: string) => string;
  onPaygClick?: () => void;
  onPlanClick?: (planId: string, planName: string, price: number, product: string) => void;
}) {
  const periodKey = billing === 'monthly' ? 'pricing.period.monthly' : 'pricing.period.annual';

  return (
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
                  ? onPaygClick
                  : (tier.planId && tier.planPrice && tier.planPrice > 0 && !tier.enterprise && onPlanClick)
                    ? () => onPlanClick(tier.planId!, tier.nameKey, tier.planPrice!, tier.apiProduct || '3d-planning')
                    : undefined
              }
            />
          </div>
        );
      })}
    </div>
  );
}

const PRODUCTS = [
  {
    id: '3d' as const,
    apiProduct: '3d-planning',
    icon: Box,
    titleKey: 'pricing.tab.3dplan',
    descKey: 'products.3dplan.description',
    startingPrice: '$0',
    gradient: 'from-blue-500 to-indigo-600',
    glow: 'shadow-blue-500/20',
    borderActive: 'border-blue-500/60',
    fallbackPlans: PLANS_3D,
  },
  {
    id: 'tracking' as const,
    apiProduct: 'tracker',
    icon: MapPin,
    titleKey: 'pricing.tab.tracking',
    descKey: 'products.tracking.description',
    startingPrice: '$0',
    gradient: 'from-emerald-500 to-teal-600',
    glow: 'shadow-emerald-500/20',
    borderActive: 'border-emerald-500/60',
    fallbackPlans: PLANS_TRACKING,
  },
];

export default function Pricing() {
  const { t } = useLanguage();
  const { user } = useAuth();
  const [billing, setBilling] = useState<BillingCycle>('monthly');
  const [selected, setSelected] = useState<SelectedProduct>(null);
  const [apiPlans, setApiPlans] = useState<Record<string, TierData[]>>({});
  const [apiLoaded, setApiLoaded] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE}/api/public/plans`)
      .then((res) => res.json())
      .then((plans: ApiPlan[]) => {
        const grouped: Record<string, TierData[]> = {};

        const plansByProduct: Record<string, ApiPlan[]> = {};
        for (const p of plans) {
          if (!plansByProduct[p.product]) plansByProduct[p.product] = [];
          plansByProduct[p.product].push(p);
        }

        for (const [product, productPlans] of Object.entries(plansByProduct)) {
          const productType = product === 'tracker' ? 'tracking' : '3d';
          grouped[product] = productPlans
            .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
            .map((p) => apiPlanToTier(p, productType));
        }

        setApiPlans(grouped);
        setApiLoaded(true);
      })
      .catch(() => {
        // Silently fall back to hardcoded plans
      });
  }, []);

  const billingLabels = [
    t('pricing.billing.monthly'),
    t('pricing.billing.annual'),
  ];

  const handlePlanCheckout = useCallback(async (planId: string, planName: string, _price: number, product: string) => {
    // Tracker plans → straight to tracker registration
    if (product === 'tracker') {
      window.location.href = `/tracker/register?plan=${planName.toLowerCase()}`;
      return;
    }

    // 3D Planning plans → Flitt checkout
    if (!user) {
      window.location.href = '/login?redirect=/pricing';
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
          product,
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
  }, [user]);

  const handlePaygCheckout = useCallback(async () => {
    if (!user) {
      window.location.href = '/login?redirect=/pricing';
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
  }, [user]);

  const pricingFAQ = [
    { question: t('pricing.faq.q1'), answer: t('pricing.faq.a1') },
    { question: t('pricing.faq.q2'), answer: t('pricing.faq.a2') },
    { question: t('pricing.faq.q3'), answer: t('pricing.faq.a3') },
    { question: t('pricing.faq.q4'), answer: t('pricing.faq.a4') },
    { question: t('pricing.faq.q5'), answer: t('pricing.faq.a5') },
  ];

  return (
    <>
      <PageHero title={t('pricing.title')} subtitle={t('pricing.subtitle')} />

      {/* Product Cards */}
      <section className="pb-20 pt-4">
        <div className="mx-auto max-w-7xl px-4 space-y-12">
          {PRODUCTS.map((product) => {
            const Icon = product.icon;
            const isOpen = selected === product.id;
            const dynamicPlans = apiLoaded ? apiPlans[product.apiProduct] : undefined;
            const plans = dynamicPlans && dynamicPlans.length > 0 ? dynamicPlans : product.fallbackPlans;

            return (
              <div key={product.id}>
                {/* Product selector card */}
                <div className="mx-auto max-w-4xl">
                  <button
                    onClick={() => setSelected(isOpen ? null : product.id)}
                    className={`w-full rounded-2xl border p-6 md:p-8 text-left transition-all duration-300 cursor-pointer group ${
                      isOpen
                        ? `bg-slate-900/80 ${product.borderActive} shadow-lg ${product.glow}`
                        : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${product.gradient} shadow-lg ${product.glow}`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-white md:text-2xl">
                            {t(product.titleKey)}
                          </h2>
                          <p className="mt-1 text-sm text-slate-400 line-clamp-1">
                            {t(product.descKey)}
                          </p>
                        </div>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </div>
                  </button>
                </div>

                {/* Expandable: billing toggle + pricing grid */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 mt-8' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="flex justify-center mb-8">
                      <PricingToggle
                        labels={billingLabels}
                        activeIndex={billing === 'monthly' ? 0 : 1}
                        onChange={(i) => setBilling(i === 0 ? 'monthly' : 'annual')}
                        size="sm"
                        badge={{ index: 1, text: t('pricing.billing.save') }}
                      />
                    </div>
                    <PricingGrid plans={plans} billing={billing} t={t} onPaygClick={product.id === '3d' ? handlePaygCheckout : undefined} onPlanClick={handlePlanCheckout} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-4">
          <h3 className="mb-8 text-center text-xl font-bold text-foreground">FAQ</h3>
          <FAQAccordion items={pricingFAQ} />
        </div>
      </section>
    </>
  );
}
