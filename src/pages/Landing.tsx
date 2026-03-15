import { HeroSection } from '@/components/sections/HeroSection';
import { TrustSection } from '@/components/sections/TrustSection';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { MidCTASection } from '@/components/sections/MidCTASection';
import { ValuePropsSection } from '@/components/sections/ValuePropsSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTASection } from '@/components/sections/CTASection';

export default function Landing() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ProductsSection />
      <FeaturesSection />
      <MidCTASection />
      <ValuePropsSection />
      <HowItWorksSection />
      <TestimonialSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
