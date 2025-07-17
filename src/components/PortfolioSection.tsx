
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
      desktopImage: '/expertisedesktop.png',
      mobileImage: '/expertisemobile.png',
      liveUrl: 'https://expertise.com.ua/',
      color: 'from-brand-blue/20 to-brand-teal/20'
    },
    {
      id: 2,
      title: t('portfolio.project2.title'),
      category: t('portfolio.project2.category'),
      description: t('portfolio.project2.description'),
      desktopImage: 'https://leonforge.com/lovable-uploads/843d695e-7086-4611-b3f0-bf18982fdfc3.png',
      mobileImage: 'https://leonforge.com/lovable-uploads/92e41082-6122-4fc2-aa66-93635743b006.png',
      liveUrl: 'https://pampukha.pl/',
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
              {/* 3D Device Mockups */}
              <div className="flex justify-center items-end gap-8 mb-12 perspective-1000">
                {/* MacBook Mockup */}
                <div className="relative transform-gpu group-hover:scale-105 transition-transform duration-500">
                  {/* MacBook Base */}
                  <div className="relative">
                    {/* Screen */}
                    <div 
                      className="w-80 h-52 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-lg border border-gray-600 overflow-hidden transform rotate-x-12 cursor-pointer shadow-2xl"
                      style={{
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                      }}
                      onClick={() => openProjectPopup(item)}
                    >
                      {/* Camera notch */}
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-700 rounded-full border border-gray-600"></div>
                      
                      {/* Screen content */}
                      <div className="w-full h-full bg-white mt-4 rounded-sm overflow-hidden">
                        <LazyImage
                          src={item.desktopImage}
                          alt={`${item.title} desktop version`}
                          className="w-full h-full object-cover object-top"
                          loading={index === 0 ? "eager" : "lazy"}
                          width={320}
                          height={200}
                        />
                      </div>
                    </div>
                    
                    {/* MacBook Base/Keyboard */}
                    <div 
                      className="w-80 h-6 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 rounded-b-lg -mt-1 transform rotate-x-45"
                      style={{
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                      }}
                    >
                      {/* Keyboard details */}
                      <div className="flex justify-center mt-1">
                        <div className="w-40 h-1 bg-gray-600 rounded-full opacity-60"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* iPhone Mockup */}
                <div 
                  className="relative transform-gpu group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                  onClick={() => openProjectPopup(item)}
                >
                  {/* Phone Shadow */}
                  <div 
                    className="absolute inset-0 bg-black/20 rounded-3xl transform translate-y-2 translate-x-1 blur-md"
                    style={{ filter: 'blur(8px)' }}
                  ></div>
                  
                  {/* Phone Body */}
                  <div 
                    className="relative w-40 h-80 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl p-2 border border-gray-600"
                    style={{
                      boxShadow: '0 20px 40px -8px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    {/* Dynamic Island */}
                    <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-black rounded-full border border-gray-700"></div>
                    
                    {/* Screen */}
                    <div className="w-full h-full bg-white rounded-2xl mt-8 overflow-hidden">
                      <LazyImage
                        src={item.mobileImage}
                        alt={`${item.title} mobile version`}
                        className="w-full h-full object-cover object-top"
                        loading={index === 0 ? "eager" : "lazy"}
                        width={144}
                        height={288}
                      />
                    </div>
                    
                    {/* Side buttons */}
                    <div className="absolute left-0 top-20 w-1 h-8 bg-gradient-to-b from-gray-600 to-gray-700 rounded-l-sm"></div>
                    <div className="absolute left-0 top-32 w-1 h-12 bg-gradient-to-b from-gray-600 to-gray-700 rounded-l-sm"></div>
                    <div className="absolute right-0 top-28 w-1 h-16 bg-gradient-to-b from-gray-600 to-gray-700 rounded-r-sm"></div>
                  </div>
                </div>
              </div>

              {/* Project Card */}
              <article 
                className="max-w-3xl w-full mx-auto relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-border bg-card text-card-foreground p-6 cursor-pointer"
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
