import { HeroHome } from '@/components/marketing/HeroHome';
import { ProblemSection } from '@/components/marketing/ProblemSection';
import { Scrollytelling } from '@/components/marketing/Scrollytelling';
import { FourPMedicine } from '@/components/marketing/FourPMedicine';
import { TestimonialCarousel } from '@/components/marketing/TestimonialCarousel';
import { HowItWorksTeaser } from '@/components/marketing/HowItWorksTeaser';
import { FinalCta } from '@/components/marketing/FinalCta';

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <ProblemSection />
      <Scrollytelling />
      <FourPMedicine />
      <TestimonialCarousel />
      <HowItWorksTeaser />
      <FinalCta />
    </>
  );
}
