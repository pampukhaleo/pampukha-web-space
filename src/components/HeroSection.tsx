
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
    <section className="pt-32 lg:pt-40 pb-16 lg:pb-32 px-4 relative overflow-hidden hero-section" role="banner">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <header className="order-2 lg:order-1 z-20 relative text-center lg:text-left">
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight max-w-4xl">
              {t('hero.title1')} <span className="gradient-text">{t('hero.title2')}</span>{t('hero.title3')}<br />
              {t('hero.title4')}
            </h1>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <Badge 
                variant="default" 
                className="bg-brand-orange/20 text-brand-orange text-lg px-6 py-3 shadow-sm"
              >
                {t('hero.price')}
              </Badge>
              <Badge 
                variant="outline" 
                className="border-brand-blue text-brand-blue text-lg px-6 py-3"
              >
                {t('hero.valueProposition')}
              </Badge>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" role="group" aria-label="Основные действия">
              <Button
                size="lg"
                className="text-lg bg-brand-blue hover:bg-brand-blue/90 px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
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
                className="text-lg border-brand-blue text-brand-blue hover:bg-brand-blue/10 px-8 py-6 transition-all duration-300"
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

          <figure className="order-1 lg:order-2 relative">
            <div className="relative z-10 flex justify-center lg:justify-end">
              <div className="relative">
                <LazyImage
                  src="/leonforge_logo.png"
                  alt="Веб-разработка и создание современных сайтов - Leonforge"
                  fetchPriority="high"
                  className="rounded-3xl shadow-2xl w-full max-w-lg transform hover:scale-105 transition-transform duration-300"
                  loading="eager"
                  priority={true}
                  width={500}
                  height={400}
                />
                
                {/* Декоративные элементы */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-teal/30 rounded-full filter blur-xl animate-pulse" aria-hidden="true"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-orange/30 rounded-full filter blur-xl animate-pulse" aria-hidden="true"></div>
              </div>
            </div>

            {/* Фоновые декоративные элементы */}
            <div className="absolute top-1/4 right-0 w-72 h-72 bg-brand-teal/10 rounded-full filter blur-3xl -z-10" aria-hidden="true"></div>
            <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-brand-blue/10 rounded-full filter blur-3xl -z-10" aria-hidden="true"></div>
          </figure>
        </div>

        <div className="mt-16 lg:mt-24 flex justify-center">
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="group animate-bounce cursor-pointer bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white border border-gray-200"
            aria-label="Прокрутить к разделу О нас"
          >
            <ArrowDown className="text-brand-blue group-hover:text-brand-blue/80 transition-colors" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
