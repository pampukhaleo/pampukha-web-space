
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
      desktopImage: 'https://leonforge.com/lovable-uploads/843d695e-7086-4611-b3f0-bf18982fdfc3.png',
      mobileImage: 'https://leonforge.com/lovable-uploads/92e41082-6122-4fc2-aa66-93635743b006.png',
      color: 'from-brand-blue/20 to-brand-teal/20',
      pageSpeed: {
        performance: 95,
        accessibility: 100,
        bestPractices: 92,
        seo: 100
      }
    },
    {
      id: 2,
      title: t('portfolio.project2.title'),
      category: t('portfolio.project2.category'),
      description: t('portfolio.project2.description'),
      desktopImage: 'https://leonforge.com/lovable-uploads/843d695e-7086-4611-b3f0-bf18982fdfc3.png',
      mobileImage: 'https://leonforge.com/lovable-uploads/92e41082-6122-4fc2-aa66-93635743b006.png',
      color: 'from-brand-orange/20 to-brand-red/20',
      pageSpeed: {
        performance: 98,
        accessibility: 95,
        bestPractices: 96,
        seo: 100
      }
    },
    {
      id: 3,
      title: t('portfolio.project3.title'),
      category: t('portfolio.project3.category'),
      description: t('portfolio.project3.description'),
      desktopImage: 'https://leonforge.com/lovable-uploads/843d695e-7086-4611-b3f0-bf18982fdfc3.png',
      mobileImage: 'https://leonforge.com/lovable-uploads/92e41082-6122-4fc2-aa66-93635743b006.png',
      color: 'from-brand-purple/20 to-brand-blue/20',
      pageSpeed: {
        performance: 92,
        accessibility: 98,
        bestPractices: 94,
        seo: 100
      }
    },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 50) return 'text-orange-500';
    return 'text-red-500';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 90) return 'bg-green-100 border-green-300';
    if (score >= 50) return 'bg-orange-100 border-orange-300';
    return 'bg-red-100 border-red-300';
  };

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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12" role="list">
          {portfolioItems.map((item, index) => (
            <div key={item.id} className="group relative" role="listitem">
              {/* Device Mockups - вынесены наверх */}
              <div className="flex justify-center items-end gap-8 mb-8">
                {/* Desktop Mockup */}
                <div className="relative">
                  {/* Monitor */}
                  <div className="w-40 h-28 bg-gray-800 rounded-lg border-4 border-gray-700 overflow-hidden transform hover:scale-125 transition-transform duration-300 cursor-pointer">
                    <div className="w-full h-2 bg-gray-600"></div>
                    <div className="w-full h-full bg-white overflow-hidden">
                      <LazyImage
                        src={item.desktopImage}
                        alt={`${item.title} desktop version`}
                        className="w-full h-full object-cover object-top"
                        loading={index === 0 ? "eager" : "lazy"}
                        width={160}
                        height={112}
                      />
                    </div>
                  </div>
                  {/* Stand - касается монитора */}
                  <div className="w-8 h-6 bg-gray-400 rounded-t mx-auto -mt-1"></div>
                  <div className="w-32 h-3 bg-gray-300 rounded-full mx-auto"></div>
                </div>

                {/* Mobile Mockup */}
                <div className="relative transform hover:scale-125 transition-transform duration-300 cursor-pointer">
                  {/* Phone Frame */}
                  <div className="w-20 h-36 bg-gray-800 rounded-lg border-2 border-gray-700 p-1 overflow-hidden">
                    {/* Notch */}
                    <div className="w-10 h-1 bg-gray-700 rounded-full mx-auto mb-1"></div>
                    
                    {/* Screen - исправлена высота для предотвращения выхода за границы */}
                    <div className="w-full h-32 bg-white rounded overflow-hidden">
                      <LazyImage
                        src={item.mobileImage}
                        alt={`${item.title} mobile version`}
                        className="w-full h-full object-cover object-top"
                        loading={index === 0 ? "eager" : "lazy"}
                        width={80}
                        height={128}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card с описанием и метриками */}
              <article className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-border bg-card text-card-foreground p-6">
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`} aria-hidden="true" />

                <div className="relative z-10">
                  {/* PageSpeed Insights Metrics */}
                  <div className="mb-6">
                    <div className="grid grid-cols-4 gap-2">
                      <div className={`flex flex-col items-center p-2 rounded-lg border ${getScoreBgColor(item.pageSpeed.performance)}`}>
                        <div className={`text-lg font-bold ${getScoreColor(item.pageSpeed.performance)}`}>
                          {item.pageSpeed.performance}
                        </div>
                        <div className="text-xs text-muted-foreground text-center">Performance</div>
                      </div>
                      <div className={`flex flex-col items-center p-2 rounded-lg border ${getScoreBgColor(item.pageSpeed.accessibility)}`}>
                        <div className={`text-lg font-bold ${getScoreColor(item.pageSpeed.accessibility)}`}>
                          {item.pageSpeed.accessibility}
                        </div>
                        <div className="text-xs text-muted-foreground text-center">Accessibility</div>
                      </div>
                      <div className={`flex flex-col items-center p-2 rounded-lg border ${getScoreBgColor(item.pageSpeed.bestPractices)}`}>
                        <div className={`text-lg font-bold ${getScoreColor(item.pageSpeed.bestPractices)}`}>
                          {item.pageSpeed.bestPractices}
                        </div>
                        <div className="text-xs text-muted-foreground text-center">Best Practices</div>
                      </div>
                      <div className={`flex flex-col items-center p-2 rounded-lg border ${getScoreBgColor(item.pageSpeed.seo)}`}>
                        <div className={`text-lg font-bold ${getScoreColor(item.pageSpeed.seo)}`}>
                          {item.pageSpeed.seo}
                        </div>
                        <div className="text-xs text-muted-foreground text-center">SEO</div>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>

                  {/* External Link Icon */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true">
                    <ExternalLink size={16} className="text-primary" />
                  </div>
                </div>
              </article>
            </div>
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
