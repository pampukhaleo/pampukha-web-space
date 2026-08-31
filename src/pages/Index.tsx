
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import WhyAISPASection from '@/components/WhyAISPASection';
import ServicesSection from '@/components/ServicesSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ProcessSection from '@/components/ProcessSection';
import GuaranteeSection from '@/components/GuaranteeSection';
import CTAButton from '@/components/CTAButton';
import LangLayout from '@/components/LangLayout';
import { SEO } from '@/components/SEO/SEO';
import { Button } from '@/components/ui/button';
import { SERVICES } from '@/data/services';
import { PRICING_PLANS } from '@/data/pricing';
import { UI } from '@/data/ui-copy';
import {
  DEFAULT_LANG,
  homePath,
  LANGS,
  pricingPath,
  servicePath,
  type Lang,
} from '@/lib/i18n-routes';
import { useTranslation } from 'react-i18next';

const META: Record<Lang, { title: string; description: string; keywords: string }> = {
  uk: {
    title: 'Створення сайтів під ключ | SEO та реклама — Leonforge',
    description:
      'Сучасні сайти під ключ: кілька варіантів дизайну, SEO-оптимізація та реклама Google і Facebook. Готовий сайт за 3–5 днів від $300.',
    keywords:
      'створення сайтів, розробка сайтів, сайт під ключ, лендінг, інтернет-магазин, SEO, Google Ads, Facebook Ads, Київ',
  },
  en: {
    title: 'Website development, SEO and ads setup — Leonforge',
    description:
      'Modern business websites: several design options, SEO optimisation and Google/Facebook ads setup. Live in 3–5 days from $300.',
    keywords: 'website development, landing page, online store, SEO, Google Ads, Facebook Ads',
  },
  pl: {
    title: 'Tworzenie stron internetowych, SEO i reklama — Leonforge',
    description:
      'Nowoczesne strony dla firm: kilka wariantów projektu, optymalizacja SEO oraz reklama Google i Facebook. Start w 3–5 dni od $300.',
    keywords: 'tworzenie stron internetowych, landing page, sklep internetowy, SEO, Google Ads, Facebook Ads',
  },
};

const Index = ({ lang = DEFAULT_LANG }: { lang?: Lang }) => {
  const { t } = useTranslation();
  const ui = UI[lang];
  const meta = META[lang];

  const altPaths = Object.fromEntries(LANGS.map((l) => [l, homePath(l)])) as Record<Lang, string>;

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
    <LangLayout lang={lang} altPaths={altPaths}>
      <div className="min-h-screen">
        <SEO
          title={meta.title}
          description={meta.description}
          keywords={meta.keywords}
          canonical={homePath(lang)}
          altPaths={altPaths}
          ogImage="https://leonforge.com/leonforge_logo.png"
          structuredData={[
            { type: 'LocalBusiness' },
            { type: 'Organization' },
            { type: 'WebSite' },
            { type: 'Person' },
            { type: 'Service' },
            { type: 'FAQPage' },
            { type: 'ItemList', data: portfolioProjects }
          ]}
        />

        <Navbar />

        <main>
          <HeroSection />

          {/* Stats */}
          <section className="border-y border-border bg-muted/30 px-4 py-8" aria-label={ui.heroBadge}>
            <div className="container mx-auto grid max-w-4xl grid-cols-2 gap-6 text-center md:grid-cols-4">
              {ui.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl md:text-3xl font-semibold text-foreground">{stat.value}</p>
                  <p className="mt-1 text-xs md:text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          <AboutSection />

          {/* Service hub — internal links to dedicated pages */}
          <section className="px-4 py-12 md:py-16" id="service-pages">
            <div className="container mx-auto max-w-5xl">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">{ui.servicesTitle}</h2>
              <p className="mb-10 text-muted-foreground max-w-2xl">{ui.servicesLead}</p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {SERVICES.map((service) => {
                  const c = service.content[lang];
                  return (
                    <Link
                      key={service.id}
                      to={servicePath(lang, service.slug[lang])}
                      className="group flex flex-col rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40"
                    >
                      <h3 className="mb-2 font-medium text-foreground">{c.cardTitle}</h3>
                      <p className="mb-4 flex-1 text-sm text-muted-foreground leading-relaxed">
                        {c.cardText}
                      </p>
                      <span className="text-sm text-muted-foreground">{c.priceLabel}</span>
                      <span className="mt-3 inline-flex items-center gap-1 text-sm text-primary">
                        {c.navLabel}
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="py-8 px-4 bg-muted/30 border-y border-border" role="complementary">
            <div className="container mx-auto text-center">
              <p className="text-lg text-muted-foreground mb-6">{t('cta.afterServices')}</p>
              <CTAButton />
            </div>
          </section>

          <ProcessSection />
          <PortfolioSection />
          <WhyAISPASection />
          <ServicesSection />

          {/* Pricing teaser */}
          <section className="px-4 py-12 md:py-16 border-t border-border">
            <div className="container mx-auto max-w-5xl">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">{ui.pricingTeaserTitle}</h2>
              <p className="mb-10 text-muted-foreground max-w-2xl">{ui.pricingTeaserLead}</p>
              <div className="grid gap-4 md:grid-cols-3">
                {PRICING_PLANS.map((plan) => {
                  const p = plan.content[lang];
                  return (
                    <div
                      key={plan.id}
                      className={`rounded-lg border bg-card p-5 ${plan.featured ? 'border-primary' : 'border-border'}`}
                    >
                      <h3 className="font-medium text-foreground">{p.name}</h3>
                      <p className="mt-2 text-2xl font-semibold text-foreground">{p.price}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
                    </div>
                  );
                })}
              </div>
              <Button asChild variant="outline" className="mt-8">
                <Link to={pricingPath(lang)}>{ui.seeAllPricing}</Link>
              </Button>
            </div>
          </section>

          <GuaranteeSection />
          <FAQSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </LangLayout>
  );
};

export default Index;
