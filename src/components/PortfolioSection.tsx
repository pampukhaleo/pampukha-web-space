
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
    <section id="portfolio" className="py-16 md:py-24 px-4 relative overflow-hidden" role="main">
      {/* Background with floating elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-blue/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-teal/5 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-brand-purple/5 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>
      
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
              {/* Floating Device Mockups */}
              <div className="flex justify-center items-end gap-8 mb-12 relative">
                {/* Desktop Floating Card */}
                <div 
                  className="relative transform-gpu group-hover:scale-105 group-hover:-translate-y-4 transition-all duration-700 cursor-pointer"
                  onClick={() => openProjectPopup(item)}
                  style={{
                    filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))'
                  }}
                >
                  <div className="w-80 h-52 bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 border border-gray-100 relative group-hover:rotate-1">
                    {/* Floating bezel */}
                    <div className="h-12 bg-gradient-to-r from-gray-50 to-white flex items-center justify-center border-b border-gray-100 relative">
                      <div className="flex gap-3">
                        <div className="w-3 h-3 bg-red-400 rounded-full shadow-sm"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-sm"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full shadow-sm"></div>
                      </div>
                      {/* Floating glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    
                    {/* Screen with floating effect */}
                    <div className="relative w-full h-full bg-gray-50 overflow-hidden -mt-12 rounded-b-3xl">
                      <LazyImage
                        src={item.desktopImage}
                        alt={`${item.title} desktop version`}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                        loading={index === 0 ? "eager" : "lazy"}
                        width={320}
                        height={200}
                      />
                      {/* Floating overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    
                    {/* Floating reflection */}
                    <div className="absolute -bottom-24 left-0 w-full h-24 bg-gradient-to-b from-white/20 to-transparent rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
                  </div>
                </div>

                {/* Mobile Floating Card */}
                <div 
                  className="relative transform-gpu group-hover:scale-105 group-hover:-translate-y-6 transition-all duration-700 delay-100 cursor-pointer"
                  onClick={() => openProjectPopup(item)}
                  style={{
                    filter: 'drop-shadow(0 30px 60px rgba(0, 0, 0, 0.2))'
                  }}
                >
                  <div className="w-36 h-72 bg-white rounded-[2.5rem] overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 border border-gray-100 relative group-hover:-rotate-2">
                    {/* Floating notch */}
                    <div className="h-12 bg-gradient-to-b from-gray-50 to-white flex items-center justify-center relative">
                      <div className="w-20 h-3 bg-black/80 rounded-full shadow-sm"></div>
                      {/* Floating glow around notch */}
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    
                    {/* Screen with floating effect */}
                    <div className="relative w-full h-full bg-gray-50 overflow-hidden -mt-12 rounded-b-[2.5rem]">
                      <LazyImage
                        src={item.mobileImage}
                        alt={`${item.title} mobile version`}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                        loading={index === 0 ? "eager" : "lazy"}
                        width={144}
                        height={288}
                      />
                      {/* Floating screen overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-[2.5rem]" />
                    </div>
                    
                    {/* Floating reflection */}
                    <div className="absolute -bottom-28 left-2 w-32 h-28 bg-gradient-to-b from-white/30 to-transparent rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
                  </div>
                </div>

                {/* Floating ambient light */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-gradient-to-r ${item.color} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
                </div>
              </div>

              {/* Project Floating Info Card */}
              <article 
                className="max-w-3xl w-full mx-auto relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-700 hover:-translate-y-3 bg-white shadow-xl hover:shadow-2xl p-8 border border-gray-100 group-hover:rotate-1"
                onClick={() => openProjectPopup(item)}
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.1))'
                }}
              >
                {/* Floating gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`} aria-hidden="true" />

                <div className="relative z-10">
                  {/* Project Info with floating effects */}
                  <div className="text-center">
                    <span className="inline-block px-6 py-3 text-sm bg-gray-50 text-gray-700 rounded-full mb-6 border border-gray-200 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
                  </div>

                  {/* Floating external link indicator */}
                  <div className="absolute top-6 right-6 bg-white p-3 rounded-2xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 border border-gray-100 transform group-hover:scale-110" aria-hidden="true">
                    <ExternalLink size={20} className="text-gray-600" />
                  </div>
                </div>

                {/* Floating card reflection */}
                <div className="absolute -bottom-16 left-4 right-4 h-16 bg-gradient-to-b from-white/30 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </article>
            </div>
          )})}
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            variant="outline" 
            className="border-brand-blue/50 text-brand-blue bg-white hover:bg-brand-blue/10 transition-all duration-300 border-2 px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1"
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
