
import React from 'react';
import { Command, Globe, Search, Palette, Gauge, CircleDollarSign } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from 'react-i18next';

const ServicesSection = () => {
  const { t } = useTranslation();
  
  const servicesData = [
    {
      icon: <Globe size={36} className="text-brand-blue" />,
      title: t('services.service1.title'),
      description: t('services.service1.description'),
      color: 'bg-brand-blue/10',
    },
    {
      icon: <Command size={36} className="text-brand-teal" />,
      title: t('services.service2.title'),
      description: t('services.service2.description'),
      color: 'bg-brand-teal/10',
    },
    {
      icon: <CircleDollarSign size={36} className="text-brand-orange" />,
      title: t('services.service3.title'),
      description: t('services.service3.description'),
      color: 'bg-brand-orange/10',
    },
    {
      icon: <Palette size={36} className="text-brand-purple" />,
      title: t('services.service4.title'),
      description: t('services.service4.description'),
      color: 'bg-brand-purple/10',
    },
    {
      icon: <Search size={36} className="text-brand-red" />,
      title: t('services.service5.title'),
      description: t('services.service5.description'),
      color: 'bg-brand-red/10',
    },
    {
      icon: <Gauge size={36} className="text-brand-yellow" />,
      title: t('services.service6.title'),
      description: t('services.service6.description'),
      color: 'bg-brand-yellow/10',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('services.title1')} <span className="gradient-text">{t('services.title2')}</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('services.description')}
          </p>
          <div className="flex justify-center mt-6">
            <Badge 
              variant="default" 
              className="bg-brand-blue/10 text-brand-blue text-base px-4 py-2"
            >
              {t('services.package')}
            </Badge>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          { servicesData.map((service, index) => (
            <div
              key={ index }
              className={ `flex items-start gap-4 p-6 rounded-2xl border border-border shadow-md hover:shadow-lg transition-shadow bg-card text-card-foreground ${ service.color }` }
            >
              <div className="flex-shrink-0">{ service.icon }</div>
              <div>
                <h3 className="text-xl font-bold mb-2">{ service.title }</h3>
                <p className="text-muted-foreground">{ service.description }</p>
              </div>
            </div>
          )) }
        </div>

        <div
          className="mt-16 p-8 rounded-2xl bg-background text-foreground shadow-xl transition-colors border border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">{t('services.whyChooseMe')}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                { [
                  t('services.benefit1'),
                  t('services.benefit2'),
                  t('services.benefit3'),
                  t('services.benefit4'),
                  t('services.benefit5'),
                ].map((text, i) => (
                  <div key={ i } className="flex items-center">
                    <div className="h-2 w-2 bg-muted-foreground rounded-full mr-3"/>
                    <p className="text-muted-foreground">{ text }</p>
                  </div>
                )) }
              </div>
            </div>
            <div className="text-center">
              <button
                className="w-full py-4 px-8 bg-primary text-primary-foreground rounded-xl font-bold transition-transform hover:scale-105"
                onClick={ () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }
              >
                {t('services.orderNow')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
