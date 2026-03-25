import { SEO } from '@/components/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustSection } from '@/components/sections/TrustSection';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { ValuePropsSection } from '@/components/sections/ValuePropsSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTASection } from '@/components/sections/CTASection';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LoadMind',
  url: 'https://load-mind.com',
  email: 'team@load-mind.com',
  description: '3D load planning and real-time tracking for LTL dispatchers.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tbilisi',
    addressCountry: 'GE',
  },
};

export default function Landing() {
  return (
    <>
      <SEO
        title="LoadMind — Dispatch Tools That Work"
        description="3D load planning and real-time tracking for LTL dispatchers. Balance weight, check safety, export plans. Free to start."
        canonical="/"
        jsonLd={organizationSchema}
      />
      <HeroSection />
      <TrustSection />
      <ProductsSection />
      <ValuePropsSection />
      <HowItWorksSection />
      <TestimonialSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
