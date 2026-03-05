import { HeroSection } from '@/components/sections/HeroSection';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { ValuePropsSection } from '@/components/sections/ValuePropsSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { WhyLoadMindSection } from '@/components/sections/WhyLoadMindSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTASection } from '@/components/sections/CTASection';

export default function Landing() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <FeaturesSection />
      <ValuePropsSection />
      <HowItWorksSection />
      <TestimonialSection />
      <WhyLoadMindSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
