
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { LazyImage } from '@/components/SEO/LazyImageLoader';
import { useTranslation } from 'react-i18next';
import { useAnalytics } from '@/components/SEO/Analytics';

const HeroSection = () => {
  const { t } = useTranslation();
  const { trackCTAClick } = useAnalytics();
  
  return (
    <section className="pt-32 lg:pt-40 pb-16 lg:pb-32 px-4 relative overflow-hidden" role="banner">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <header className="order-2 lg:order-1 z-20 relative text-center lg:text-left">
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 leading-tight max-w-4xl">
              {t('hero.title1')} <span className="text-primary">{t('hero.title2')}</span>{t('hero.title3')}<br />
              {t('hero.title4')}
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" role="group" aria-label="Основные действия">
              <Button
                size="lg"
                className="text-base px-8 transition-all duration-200"
                onClick={() => {
                  trackCTAClick(t('hero.consultation'), 'hero_section');
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                aria-describedby="hero-cta-description"
              >
                {t('hero.consultation')}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 transition-all duration-200"
                onClick={() => {
                  trackCTAClick(t('hero.viewWork'), 'hero_section');
                  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('hero.viewWork')}
              </Button>
            </div>
            <span id="hero-cta-description" className="sr-only">
              Нажмите, чтобы перейти к разделу контактов и получить бесплатную консультацию
            </span>
          </header>

          <figure className="order-1 lg:order-2 relative hidden lg:block">
            <div className="relative z-10 flex justify-center lg:justify-end">
              <LazyImage
                src="/leonforge_logo.png"
                alt="Веб-разработка и создание современных сайтов - Leonforge"
                fetchPriority="high"
                className="rounded-2xl w-full max-w-lg transition-transform duration-200"
                loading="eager"
                priority={true}
                width={500}
                height={400}
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
