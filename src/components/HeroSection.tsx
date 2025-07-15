
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { LazyImage } from '@/components/SEO/LazyImageLoader';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="pt-28 sm:pt-32 lg:pt-36 pb-10 lg:pb-24 px-4 relative overflow-hidden hero-section" role="banner">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <header className="order-2 lg:order-1 z-20 relative text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              {t('hero.title1')} <span className="gradient-text">{t('hero.title2')}</span>{t('hero.title3')}<br />
              {t('hero.title4')}
            </h1>
            <div className="flex flex-col items-center lg:items-start gap-4 mb-4 w-full">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <Badge 
                  variant="default" 
                  className="bg-brand-orange/20 text-brand-orange text-base px-4 py-2 shadow-sm"
                >
                  {t('hero.price')}
                </Badge>
                <Badge 
                  variant="outline" 
                  className="border-brand-blue text-brand-blue text-base px-4 py-2"
                >
                  {t('hero.valueProposition')}
                </Badge>
              </div>
            </div>
            <p className="text-base md:text-xl text-gray-700 mb-6 md:mb-8 max-w-xl">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4" role="group" aria-label="Основные действия">
              <Button
                className="text-base bg-brand-blue hover:bg-brand-blue/90 px-5 py-4 sm:px-6 sm:py-5"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                aria-describedby="hero-cta-description"
              >
                {t('hero.consultation')}
              </Button>
              <Button
                variant="outline"
                className="text-base border-brand-blue text-brand-blue hover:bg-brand-blue/10 px-5 py-4 sm:px-6 sm:py-5"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero.viewWork')}
              </Button>
            </div>
            <span id="hero-cta-description" className="sr-only">
              Нажмите, чтобы перейти к разделу контактов и получить бесплатную консультацию
            </span>
          </header>

          <figure className="order-1 lg:order-2 relative mb-6 lg:mb-0">
            <div className="relative z-10 lg:p-4 flex justify-center lg:justify-end">
              <LazyImage
                src={`${window.location.origin}${import.meta.env.BASE_URL}lovable-uploads/843d695e-7086-4611-b3f0-bf18982fdfc3.png`}
                alt="Веб-разработка и создание современных сайтов - Leonforge"
                className="rounded-2xl shadow-2xl w-full max-w-sm"
                loading="eager"
                priority={true}
                width={400}
                height={300}
              />
            </div>

            <div className="absolute top-0 right-0 w-40 h-40 sm:w-56 sm:h-56 bg-brand-teal/20 rounded-full filter blur-3xl -z-10 animate-pulse" aria-hidden="true"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-56 sm:h-56 bg-brand-orange/20 rounded-full filter blur-3xl -z-10 animate-pulse" aria-hidden="true"></div>
          </figure>
        </div>

        <div className="mt-8 lg:mt-16 flex justify-center">
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="animate-bounce cursor-pointer bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Прокрутить к разделу О нас"
          >
            <ArrowDown className="text-brand-blue" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
