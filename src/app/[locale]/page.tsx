import { useTranslations } from 'next-intl';
import { HeroSection } from '@/components/sections/hero';
import { SocialProof } from '@/components/sections/social-proof';
import { WhySection } from '@/components/sections/why-section';
import { PricingSection } from '@/components/sections/pricing';
import { FAQSection } from '@/components/sections/faq';
import { ContactSection } from '@/components/sections/contact';
import { BlogSection } from '@/components/sections/blog';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-background text-foreground">
      <HeroSection />
      <SocialProof />
      <WhySection />
      <PricingSection />
      <FAQSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
}
