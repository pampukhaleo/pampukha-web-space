
import React from 'react';
import { Command, Globe, Search, Palette, Gauge, CircleDollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const ServicesSection = () => {
  const { t } = useTranslation();
  
  const servicesData = [
    {
      icon: <Globe size={28} className="text-foreground" />,
      title: t('services.service1.title'),
      description: t('services.service1.description'),
    },
    {
      icon: <Command size={28} className="text-foreground" />,
      title: t('services.service2.title'),
      description: t('services.service2.description'),
    },
    {
      icon: <CircleDollarSign size={28} className="text-foreground" />,
      title: t('services.service3.title'),
      description: t('services.service3.description'),
    },
    {
      icon: <Palette size={28} className="text-foreground" />,
      title: t('services.service4.title'),
      description: t('services.service4.description'),
    },
    {
      icon: <Search size={28} className="text-foreground" />,
      title: t('services.service5.title'),
      description: t('services.service5.description'),
    },
    {
      icon: <Gauge size={28} className="text-foreground" />,
      title: t('services.service6.title'),
      description: t('services.service6.description'),
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            {t('services.title1')} <span className="text-primary">{t('services.title2')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('services.description')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          { servicesData.map((service, index) => (
            <div
              key={ index }
              className="flex items-start gap-4 p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-200 bg-card"
            >
              <div className="flex-shrink-0 p-2 rounded-lg bg-muted">{ service.icon }</div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{ service.title }</h3>
                <p className="text-sm text-muted-foreground">{ service.description }</p>
              </div>
            </div>
          )) }
        </div>

        <div className="mt-16 p-8 rounded-lg bg-card border border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold mb-4">{t('services.whyChooseMe')}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                { [
                  t('services.benefit1'),
                  t('services.benefit2'),
                  t('services.benefit3'),
                  t('services.benefit4'),
                ].map((text, i) => (
                  <div key={ i } className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 bg-primary rounded-full"/>
                    <p className="text-sm text-muted-foreground">{ text }</p>
                  </div>
                )) }
              </div>
            </div>
            <div className="text-center">
              <Button
                size="lg"
                className="w-full"
                onClick={ () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }
              >
                {t('services.orderNow')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
