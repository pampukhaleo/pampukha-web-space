
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
      color: 'from-brand-blue/30 to-brand-teal/30'
    },
    {
      id: 2,
      title: t('portfolio.project2.title'),
      category: t('portfolio.project2.category'),
      description: t('portfolio.project2.description'),
      desktopImage: 'https://leonforge.com/lovable-uploads/843d695e-7086-4611-b3f0-bf18982fdfc3.png',
      mobileImage: 'https://leonforge.com/lovable-uploads/92e41082-6122-4fc2-aa66-93635743b006.png',
      liveUrl: 'https://pampukha.pl/',
      color: 'from-brand-orange/30 to-brand-red/30'
    },
    {
      id: 3,
      title: t('portfolio.project3.title'),
      category: t('portfolio.project3.category'),
      description: t('portfolio.project3.description'),
      desktopImage: 'https://leonforge.com/lovable-uploads/843d695e-7086-4611-b3f0-bf18982fdfc3.png',
      mobileImage: 'https://leonforge.com/lovable-uploads/92e41082-6122-4fc2-aa66-93635743b006.png',
      liveUrl: 'https://github.com',
      color: 'from-brand-purple/30 to-brand-blue/30'
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
    <section id="portfolio" className="py-16 md:py-24 px-4 relative" role="main">
      {/* Background with glassmorphism effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 backdrop-blur-3xl" />
      
      <div className="container mx-auto relative z-10">
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
              {/* Glassmorphism Device Mockups */}
              <div className="flex justify-center items-end gap-8 mb-12">
                {/* Desktop Glass Mockup */}
                <div className="relative transform-gpu group-hover:scale-105 transition-all duration-500">
                  <div 
                    className="w-80 h-52 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 overflow-hidden cursor-pointer shadow-2xl hover:shadow-3xl transition-all duration-500 hover:bg-white/25"
                    onClick={() => openProjectPopup(item)}
                    style={{
                      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.3)'
                    }}
                  >
                    {/* Glass bezel with gradient */}
                    <div className="h-8 bg-gradient-to-r from-white/30 via-white/20 to-white/30 backdrop-blur-sm border-b border-white/20 flex items-center justify-center">
                      <div className="flex gap-2">
                        <div className="w-2 h-2 bg-red-400/60 rounded-full backdrop-blur-sm"></div>
                        <div className="w-2 h-2 bg-yellow-400/60 rounded-full backdrop-blur-sm"></div>
                        <div className="w-2 h-2 bg-green-400/60 rounded-full backdrop-blur-sm"></div>
                      </div>
                    </div>
                    
                    {/* Screen with glass overlay */}
                    <div className="relative w-full h-full bg-white/10 backdrop-blur-sm overflow-hidden -mt-8">
                      <LazyImage
                        src={item.desktopImage}
                        alt={`${item.title} desktop version`}
                        className="w-full h-full object-cover object-top"
                        loading={index === 0 ? "eager" : "lazy"}
                        width={320}
                        height={200}
                      />
                      {/* Glass overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Mobile Glass Mockup */}
                <div 
                  className="relative transform-gpu group-hover:scale-105 transition-all duration-500 cursor-pointer"
                  onClick={() => openProjectPopup(item)}
                >
                  {/* Phone Glass Body */}
                  <div 
                    className="w-36 h-72 bg-gradient-to-br from-white/25 via-white/15 to-white/20 backdrop-blur-lg rounded-[2rem] border border-white/40 overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:bg-white/30"
                    style={{
                      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.4)'
                    }}
                  >
                    {/* Dynamic Island glass effect */}
                    <div className="h-10 bg-gradient-to-b from-white/40 to-white/20 backdrop-blur-md flex items-center justify-center border-b border-white/20">
                      <div className="w-16 h-2 bg-black/40 backdrop-blur-sm rounded-full border border-white/30"></div>
                    </div>
                    
                    {/* Screen with glass overlay */}
                    <div className="relative w-full h-full bg-white/10 backdrop-blur-sm overflow-hidden -mt-10 rounded-b-[2rem]">
                      <LazyImage
                        src={item.mobileImage}
                        alt={`${item.title} mobile version`}
                        className="w-full h-full object-cover object-top"
                        loading={index === 0 ? "eager" : "lazy"}
                        width={144}
                        height={288}
                      />
                      {/* Glass overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 pointer-events-none rounded-b-[2rem]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Glass Card */}
              <article 
                className="max-w-3xl w-full mx-auto relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 hover:-translate-y-2 bg-white/20 backdrop-blur-md border border-white/30 p-6"
                onClick={() => openProjectPopup(item)}
                style={{
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.3)'
                }}
              >
                {/* Glass gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl backdrop-blur-sm`} aria-hidden="true" />

                <div className="relative z-10">
                  {/* Project Info with glass effect */}
                  <div className="text-center">
                    <span className="inline-block px-4 py-2 text-xs bg-white/30 backdrop-blur-sm text-gray-700 rounded-full mb-4 border border-white/40">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 drop-shadow-sm">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed drop-shadow-sm">{item.description}</p>
                  </div>

                  {/* Glass external link indicator */}
                  <div className="absolute top-4 right-4 bg-white/40 backdrop-blur-md p-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 border border-white/50" aria-hidden="true">
                    <ExternalLink size={16} className="text-gray-700" />
                  </div>
                </div>
              </article>
            </div>
          )})}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="border-brand-blue/50 text-brand-blue bg-white/20 backdrop-blur-md hover:bg-brand-blue/20 transition-all duration-300 border-2"
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
