
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
import { Breadcrumbs } from '@/components/SEO/Breadcrumbs';
import { useTranslation } from 'react-i18next';
import { useAnalytics } from '@/components/SEO/Analytics';

const Index = () => {
  const { t } = useTranslation();
  useAnalytics(); // Initialize Web Vitals tracking
  
  // Portfolio data for structured data
  const portfolioProjects = [
    {
      title: t('portfolio.project2.title'),
      description: t('portfolio.project2.description'),
      url: 'https://leonforge.com/portfolio/expertise',
      image: 'https://leonforge.com/expertisedesktop.png'
    },
    {
      title: t('portfolio.project3.title'),
      description: t('portfolio.project3.description'),
      url: 'https://leonforge.com/portfolio/pampukha-pl',
      image: 'https://leonforge.com/pampukhapldesktop.png'
    },
    {
      title: t('portfolio.project4.title'),
      description: t('portfolio.project4.description'),
      url: 'https://lemonshine.pl/',
      image: 'https://leonforge.com/Screenshot_6.png'
    },
    {
      title: t('portfolio.project5.title'),
      description: t('portfolio.project5.description'),
      url: 'https://spotlessprohome.co.uk/',
      image: 'https://leonforge.com/Screenshot_7.png'
    },
    {
      title: t('portfolio.project6.title'),
      description: t('portfolio.project6.description'),
      url: 'https://laserbeauty-studio.de/',
      image: 'https://leonforge.com/Screenshot_8.png'
    }
  ];
  
  return (
    <div className="min-h-screen">
      <SEO
        title={`Створення сайтів на React у Києві | Leonforge | Веб-розробка під ключ`}
        description="Професійна веб-розробка та створення сайтів на React у Києві. Швидкі SPA-рішення під ключ з SEO-оптимізацією та інтеграцією маркетингових інструментів. Від 300$."
        keywords="створення сайтів, розробка сайтів, веб-розробка, створення сайтів Київ, розробка сайтів Київ, React SPA, SPA розробка, замовити сайт, веб-розробка під ключ, SEO, Google Ads"
        ogImage="https://leonforge.com/leonforge_logo.png"
        structuredData={[
          { type: 'LocalBusiness' },
          { type: 'Organization' },
          { type: 'WebSite' },
          { type: 'Person' },
          { type: 'Service' },
          { type: 'FAQPage' },
          { type: 'BreadcrumbList' },
          { type: 'ItemList', data: portfolioProjects }
        ]}
      />
      
      <Navbar />
      
      <main>
        <div className="container mx-auto px-4">
          <Breadcrumbs />
        </div>
        
        <HeroSection />
        <AboutSection />

        <section className="py-8 px-4 bg-muted/30" role="complementary" aria-label="Призыв к действию">
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
