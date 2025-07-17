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
  const [viewType, setViewType] = useState<'desktop' | 'mobile'>('desktop');
  
  const portfolioItems = [
    {
      id: 1,
      title: t('portfolio.project1.title'),
      category: t('portfolio.project1.category'),
      description: t('portfolio.project1.description'),
      desktopImage: '/expertisedesktop.png',
      mobileImage: '/expertisemobile.png',
      liveUrl: 'https://expertise.com.ua/',
      neonColor: 'cyan',
      glowColor: 'from-cyan-400/20 to-blue-500/20'
    },
    {
      id: 2,
      title: t('portfolio.project2.title'),
      category: t('portfolio.project2.category'),
      description: t('portfolio.project2.description'),
      desktopImage: 'https://leonforge.com/lovable-uploads/843d695e-7086-4611-b3f0-bf18982fdfc3.png',
      mobileImage: 'https://leonforge.com/lovable-uploads/92e41082-6122-4fc2-aa66-93635743b006.png',
      liveUrl: 'https://pampukha.pl/',
      neonColor: 'pink',
      glowColor: 'from-pink-400/20 to-purple-500/20'
    },
    {
      id: 3,
      title: t('portfolio.project3.title'),
      category: t('portfolio.project3.category'),
      description: t('portfolio.project3.description'),
      desktopImage: 'https://leonforge.com/lovable-uploads/843d695e-7086-4611-b3f0-bf18982fdfc3.png',
      mobileImage: 'https://leonforge.com/lovable-uploads/92e41082-6122-4fc2-aa66-93635743b006.png',
      liveUrl: 'https://github.com',
      neonColor: 'green',
      glowColor: 'from-green-400/20 to-emerald-500/20'
    },
  ];

  const openProjectPopup = (project: any, type: 'desktop' | 'mobile') => {
    setSelectedProject(project);
    setViewType(type);
    setIsPopupOpen(true);
  };

  const closeProjectPopup = () => {
    setIsPopupOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="py-16 md:py-24 px-4 relative overflow-hidden bg-gray-900" role="main">
      {/* Neon Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Animated Neon Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" 
             style={{ filter: 'drop-shadow(0 0 50px rgba(0, 255, 255, 0.3))' }} />
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-700" 
             style={{ filter: 'drop-shadow(0 0 60px rgba(255, 20, 147, 0.3))' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-500/20 rounded-full blur-2xl animate-pulse delay-1000" 
             style={{ filter: 'drop-shadow(0 0 40px rgba(0, 255, 0, 0.3))' }} />
      </div>
      
      <div className="container mx-auto relative z-10">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            {t('portfolio.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">{t('portfolio.title2')}</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {t('portfolio.description')}
          </p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-20" role="list">
          {portfolioItems.map((item, index) => {
            const isLastOdd = portfolioItems.length % 2 === 1 && index === portfolioItems.length - 1;
            const neonColorMap = {
              cyan: 'shadow-cyan-500/50 border-cyan-400/50',
              pink: 'shadow-pink-500/50 border-pink-400/50',
              green: 'shadow-green-500/50 border-green-400/50'
            };

            return (
            <div key={item.id}
                 role="listitem"
                 className={`group relative ${isLastOdd ? 'lg:col-span-2' : ''}`}
            >
              {/* Neon Device Mockups - Desktop centered with Mobile */}
              <div className="flex justify-center items-center gap-8 mb-12 relative">
                {/* Desktop Neon Frame - Increased size */}
                <div 
                  className="desktop-mockup relative transform-gpu hover:scale-105 hover:-translate-y-4 transition-all duration-700 cursor-pointer"
                  onClick={() => openProjectPopup(item, 'desktop')}
                >
                  <div className={`w-96 h-64 bg-black rounded-2xl overflow-hidden border-2 ${neonColorMap[item.neonColor as keyof typeof neonColorMap]} transition-all duration-700 hover:shadow-2xl`}
                       style={{
                         boxShadow: `0 0 30px ${item.neonColor === 'cyan' ? 'rgba(0, 255, 255, 0.3)' : 
                                               item.neonColor === 'pink' ? 'rgba(255, 20, 147, 0.3)' : 
                                               'rgba(0, 255, 0, 0.3)'}`
                       }}>
                    {/* Neon Status Bar */}
                    <div className="h-12 bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center border-b border-gray-700 relative">
                      <div className="flex gap-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg shadow-red-500/50"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/50"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50"></div>
                      </div>
                      {/* Neon pulse line */}
                      <div className={`absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r ${item.neonColor === 'cyan' ? 'from-cyan-400 to-blue-500' : 
                                                                                                 item.neonColor === 'pink' ? 'from-pink-400 to-purple-500' : 
                                                                                                 'from-green-400 to-emerald-500'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    </div>
                    
                    {/* Screen with neon glow */}
                    <div className="relative w-full h-full bg-gray-900 overflow-hidden -mt-12 rounded-b-2xl">
                      <LazyImage
                        src={item.desktopImage}
                        alt={`${item.title} desktop version`}
                        className="w-full h-full object-cover object-top transition-transform duration-700"
                        loading={index === 0 ? "eager" : "lazy"}
                        width={384}
                        height={256}
                      />
                      {/* Neon overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${item.glowColor} opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-b-2xl`} />
                    </div>
                  </div>
                </div>

                {/* Mobile Neon Frame - Increased size */}
                <div 
                  className="mobile-mockup relative transform-gpu hover:scale-105 hover:-translate-y-6 transition-all duration-700 delay-100 cursor-pointer"
                  onClick={() => openProjectPopup(item, 'mobile')}
                >
                  <div className={`w-44 h-80 bg-black rounded-[1rem] overflow-hidden border-2 ${neonColorMap[item.neonColor as keyof typeof neonColorMap]} transition-all duration-700 hover:shadow-2xl`}
                       style={{
                         boxShadow: `0 0 25px ${item.neonColor === 'cyan' ? 'rgba(0, 255, 255, 0.3)' : 
                                               item.neonColor === 'pink' ? 'rgba(255, 20, 147, 0.3)' : 
                                               'rgba(0, 255, 0, 0.3)'}`
                       }}>
                    {/* Neon Notch */}
                    <div className="h-12 bg-gradient-to-b from-gray-800 to-gray-900 flex items-center justify-center relative">
                      <div className="w-20 h-3 bg-black rounded-full shadow-inner"></div>
                      {/* Neon accent line */}
                      <div className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r ${item.neonColor === 'cyan' ? 'from-cyan-400 to-blue-500' : 
                                                                                                   item.neonColor === 'pink' ? 'from-pink-400 to-purple-500' : 
                                                                                                   'from-green-400 to-emerald-500'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    </div>
                    
                    {/* Screen with neon glow */}
                    <div className="relative w-full h-full bg-gray-900 overflow-hidden -mt-12 rounded-b-[1rem]">
                      <LazyImage
                        src={item.mobileImage}
                        alt={`${item.title} mobile version`}
                        className="w-full h-full object-cover object-top transition-transform duration-700"
                        loading={index === 0 ? "eager" : "lazy"}
                        width={176}
                        height={320}
                      />
                      {/* Neon screen overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${item.glowColor} opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-b-[1rem]`} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Neon Project Info Card */}
              <article 
                className="max-w-3xl w-full mx-auto relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 hover:-translate-y-3 bg-gray-800/50 backdrop-blur-sm p-8 border border-gray-700 group-hover:border-gray-600"
                onClick={() => openProjectPopup(item, 'desktop')}
                style={{
                  boxShadow: `0 10px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px ${item.neonColor === 'cyan' ? 'rgba(0, 255, 255, 0.1)' : 
                                                                             item.neonColor === 'pink' ? 'rgba(255, 20, 147, 0.1)' : 
                                                                             'rgba(0, 255, 0, 0.1)'}`
                }}
              >
                {/* Neon border glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.glowColor} opacity-0 group-hover:opacity-30 transition-opacity duration-700 rounded-2xl`} aria-hidden="true" />

                <div className="relative z-10">
                  {/* Project Info with neon effects */}
                  <div className="text-center">
                    <span className={`inline-block px-6 py-3 text-sm text-white rounded-full mb-6 border transition-all duration-300 ${
                      item.neonColor === 'cyan' ? 'bg-cyan-500/20 border-cyan-400/50 shadow-lg shadow-cyan-500/20' :
                      item.neonColor === 'pink' ? 'bg-pink-500/20 border-pink-400/50 shadow-lg shadow-pink-500/20' :
                      'bg-green-500/20 border-green-400/50 shadow-lg shadow-green-500/20'
                    }`}>
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300">{item.description}</p>
                  </div>

                  {/* Neon external link indicator */}
                  <div className={`absolute top-6 right-6 p-3 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 border ${
                    item.neonColor === 'cyan' ? 'bg-cyan-500/20 border-cyan-400/50 shadow-lg shadow-cyan-500/20' :
                    item.neonColor === 'pink' ? 'bg-pink-500/20 border-pink-400/50 shadow-lg shadow-pink-500/20' :
                    'bg-green-500/20 border-green-400/50 shadow-lg shadow-green-500/20'
                  } transform group-hover:scale-110`} aria-hidden="true">
                    <ExternalLink size={20} className="text-white" />
                  </div>
                </div>

                {/* Neon scanning line effect */}
                <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${
                  item.neonColor === 'cyan' ? 'from-transparent via-cyan-400 to-transparent' :
                  item.neonColor === 'pink' ? 'from-transparent via-pink-400 to-transparent' :
                  'from-transparent via-green-400 to-transparent'
                } opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700`} />
              </article>
            </div>
          )})}
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            variant="outline" 
            className="border-cyan-400/50 text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 transition-all duration-300 border-2 px-8 py-3 rounded-2xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1"
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
          viewType={viewType}
        />
      )}
    </section>
  );
};

export default PortfolioSection;
