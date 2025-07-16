
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LazyImage } from '@/components/SEO/LazyImageLoader';
import { useTranslation } from 'react-i18next';

const PortfolioSection = () => {
  const { t } = useTranslation();
  
  const portfolioItems = [
    {
      id: 1,
      title: t('portfolio.project1.title'),
      category: t('portfolio.project1.category'),
      description: t('portfolio.project1.description'),
      image: 'https://leonforge.com/lovable-uploads/de7b20fa-92c3-40c7-a0ae-65a24b565e47.png',
      color: 'from-brand-blue/20 to-brand-teal/20',
    },
    {
      id: 2,
      title: t('portfolio.project2.title'),
      category: t('portfolio.project2.category'),
      description: t('portfolio.project2.description'),
      image: 'https://leonforge.com/lovable-uploads/86b7cf5d-0df5-43a4-bdc1-11e628046549.png',
      color: 'from-brand-orange/20 to-brand-red/20',
    },
    {
      id: 3,
      title: t('portfolio.project3.title'),
      category: t('portfolio.project3.category'),
      description: t('portfolio.project3.description'),
      image: 'https://leonforge.com/lovable-uploads/79663af5-95cf-4efe-87d0-0c991bff6be3.png',
      color: 'from-brand-purple/20 to-brand-blue/20',
    },
  ];

  return (
    <section id="portfolio" className="py-16 md:py-24 px-4" role="main">
      <div className="container mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('portfolio.title1')} <span className="gradient-text">{t('portfolio.title2')}</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('portfolio.description')}
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
          {portfolioItems.map((item, index) => (
            <article
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-border bg-card text-card-foreground"
              role="listitem"
            >
              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} aria-hidden="true" />

              <div className="relative z-10">
                <figure>
                  <LazyImage
                    src={item.image}
                    alt={`${item.title} - ${item.description}`}
                    className="w-full h-64 object-cover rounded-t-2xl"
                    loading={index === 0 ? "eager" : "lazy"}
                    width={400}
                    height={256}
                  />
                </figure>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="inline-block px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full mb-2">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                    <div className="bg-muted p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true">
                      <ExternalLink size={16} className="text-primary" />
                    </div>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="border-brand-blue text-brand-blue hover:bg-brand-blue/10"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('portfolio.orderSimilar')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
