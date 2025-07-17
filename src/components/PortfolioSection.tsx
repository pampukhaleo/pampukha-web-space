import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LazyImage } from '@/components/SEO/LazyImageLoader';
import { useTranslation } from 'react-i18next';
import ProjectPopup from '@/components/portfolio/ProjectPopup';

const PortfolioSection = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  const portfolioItems = [
    {
      id: 1,
      title: t('portfolio.project1.title'),
      category: t('portfolio.project1.category'),
      description: t('portfolio.project1.description'),
      desktopImage: 'https://leonforge.com/lovable-uploads/843d695e-7086-4611-b3f0-bf18982fdfc3.png',
      mobileImage: 'https://leonforge.com/lovable-uploads/92e41082-6122-4fc2-aa66-93635743b006.png',
      liveUrl: 'https://example.com',
      color: 'from-brand-blue/20 to-brand-teal/20'
    },
    {
      id: 2,
      title: t('portfolio.project2.title'),
      category: t('portfolio.project2.category'),
      description: t('portfolio.project2.description'),
      desktopImage: 'https://leonforge.com/lovable-uploads/843d695e-7086-4611-b3f0-bf18982fdfc3.png',
      mobileImage: 'https://leonforge.com/lovable-uploads/92e41082-6122-4fc2-aa66-93635743b006.png',
      liveUrl: 'https://google.com',
      color: 'from-brand-orange/20 to-brand-red/20'
    },
    {
      id: 3,
      title: t('portfolio.project3.title'),
      category: t('portfolio.project3.category'),
      description: t('portfolio.project3.description'),
      desktopImage: 'https://leonforge.com/lovable-uploads/843d695e-7086-4611-b3f0-bf18982fdfc3.png',
      mobileImage: 'https://leonforge.com/lovable-uploads/92e41082-6122-4fc2-aa66-93635743b006.png',
      liveUrl: 'https://github.com',
      color: 'from-brand-purple/20 to-brand-blue/20'
    },
  ];

  const openProjectPopup = (project: any) => {
    setSelectedProject(project);
    setIsPopupOpen(true);
  };

  const closeProjectPopup = () => {
    setIsPopupOpen(false);
    setSelectedProject(null);
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-20" role="list">
          {portfolioItems.map((item, index) => {
            const isLastOdd =
              portfolioItems.length % 2 === 1 &&
              index === portfolioItems.length - 1;

            return (

            <div key={item.id}
                 role="listitem"
                 className={`group relative ${isLastOdd ? 'lg:col-span-2' : ''}`}
            >
              {/* Device Mockups - оптимизированные размеры */}
              <div className="flex justify-center items-center gap-5 mb-12">
                {/* Desktop Mockup - оптимизированный размер */}
                <div className="relative">
                  {/* Monitor - средний размер */}
                  <div 
                    className="w-72 h-48 bg-gray-800 rounded-lg border-4 border-gray-700 overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg"
                    onClick={() => openProjectPopup(item)}
                  >
                    <div className="w-full h-2 bg-gray-600"></div>
                    <div className="w-full h-44 bg-white overflow-hidden">
                      <LazyImage
                        src={item.desktopImage}
                        alt={`${item.title} desktop version`}
                        className="w-full h-full object-cover object-top"
                        loading={index === 0 ? "eager" : "lazy"}
                        width={288}
                        height={176}
                      />
                    </div>
                  </div>
                  {/* Stand */}
                  <div className="w-12 h-8 bg-gray-400 rounded-t mx-auto -mt-1"></div>
                  <div className="w-44 h-4 bg-gray-300 rounded-full mx-auto"></div>
                </div>

                {/* Mobile Mockup - оптимизированный размер */}
                <div 
                  className="relative transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => openProjectPopup(item)}
                >
                  {/* Phone Frame - средний размер */}
                  <div className="w-36 h-64 bg-gray-800 rounded-xl border-2 border-gray-700 p-3 overflow-hidden shadow-lg">
                    {/* Notch */}
                    <div className="w-16 h-1.5 bg-gray-700 rounded-full mx-auto mb-3"></div>
                    
                    {/* Screen - оптимизированный размер */}
                    <div className="w-full h-58 bg-white rounded overflow-hidden">
                      <LazyImage
                        src={item.mobileImage}
                        alt={`${item.title} mobile version`}
                        className="w-full h-full object-cover object-top"
                        loading={index === 0 ? "eager" : "lazy"}
                        width={144}
                        height={224}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card с описанием */}
              <article 
                className=" max-w-3xl w-full mx-auto relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-border bg-card text-card-foreground p-6 cursor-pointer"
                onClick={() => openProjectPopup(item)}
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`} aria-hidden="true" />

                <div className="relative z-10">
                  {/* Project Info */}
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full mb-4">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>

                  {/* External Link Icon */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true">
                    <ExternalLink size={16} className="text-primary" />
                  </div>
                </div>
              </article>
            </div>
          )})}
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

      {/* Project Popup */}
      {selectedProject && (
        <ProjectPopup
          isOpen={isPopupOpen}
          onClose={closeProjectPopup}
          project={selectedProject}
        />
      )}
    </section>
  );
};

export default PortfolioSection;
