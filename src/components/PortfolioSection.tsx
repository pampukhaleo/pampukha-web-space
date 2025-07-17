
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
              {/* Minimalist Device Mockups */}
              <div className="flex justify-center items-end gap-8 mb-12">
                {/* Desktop Mockup - Ultra thin bezels */}
                <div className="relative transform-gpu group-hover:scale-105 transition-all duration-300">
                  <div 
                    className="w-80 h-52 bg-white rounded-lg border border-gray-200/50 overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300"
                    onClick={() => openProjectPopup(item)}
                  >
                    {/* Minimal top bezel with subtle dot */}
                    <div className="h-6 bg-gray-50/80 border-b border-gray-100/50 flex items-center justify-center">
                      <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                    </div>
                    
                    {/* Screen content */}
                    <div className="w-full h-full bg-white overflow-hidden -mt-6">
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
                </div>

                {/* Mobile Mockup - Modern phone proportions */}
                <div 
                  className="relative transform-gpu group-hover:scale-105 transition-all duration-300 cursor-pointer"
                  onClick={() => openProjectPopup(item)}
                >
                  {/* Phone Body - Minimal design */}
                  <div 
                    className="w-36 h-72 bg-white rounded-[1.5rem] border border-gray-200/60 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    {/* Minimal notch area */}
                    <div className="h-8 bg-gray-50/60 flex items-center justify-center">
                      <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
                    </div>
                    
                    {/* Screen */}
                    <div className="w-full h-full bg-white overflow-hidden -mt-8 rounded-b-[1.5rem]">
                      <LazyImage
                        src={item.mobileImage}
                        alt={`${item.title} mobile version`}
                        className="w-full h-full object-cover object-top"
                        loading={index === 0 ? "eager" : "lazy"}
                        width={144}
                        height={288}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Card - Clean minimal design */}
              <article 
                className="max-w-3xl w-full mx-auto relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100 bg-white p-6 cursor-pointer"
                onClick={() => openProjectPopup(item)}
              >
                {/* Subtle hover overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`} aria-hidden="true" />

                <div className="relative z-10">
                  {/* Project Info */}
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 text-xs bg-gray-50 text-gray-600 rounded-full mb-4 border border-gray-100">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>

                  {/* Minimal external link indicator */}
                  <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-1.5 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 border border-gray-100" aria-hidden="true">
                    <ExternalLink size={14} className="text-gray-600" />
                  </div>
                </div>
              </article>
            </div>
          )})}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="border-brand-blue text-brand-blue hover:bg-brand-blue/10 transition-all duration-300"
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
