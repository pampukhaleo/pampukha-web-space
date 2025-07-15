
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import WhyAISPASection from '@/components/WhyAISPASection';
import ServicesSection from '@/components/ServicesSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';
import { SEO } from '@/components/SEO/SEO';
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen">
      <SEO
        title={`Leonforge | ${t('hero.title2')} | AI + React + SPA`}
        description={t('hero.description')}
        keywords="веб-разработка, создание сайтов, AI разработка, React SPA, SEO, Google Ads, Украина, современные сайты, web development, website creation"
        ogImage="https://lovable.dev/opengraph-image-p98pqg.png"
        structuredData={[
          { type: 'LocalBusiness' },
          { type: 'Organization' },
          { type: 'WebSite' },
          { type: 'Person' },
          { type: 'Service' },
          { type: 'FAQPage' }
        ]}
      />
      
      <Navbar />
      <HeroSection />
      <AboutSection />

      <section className="py-8 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-6">
            {t('cta.afterServices')}
          </p>
          <CTAButton />
        </div>
      </section>

      <PortfolioSection />
      <WhyAISPASection />
      <ServicesSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
