
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
      desktopImage: '/cheataicdesktop.png',
      mobileImage: '/cheataicmobile.png',
      liveUrl: 'https://chea-taic.be/',
      neonColor: 'pink',
      glowColor: 'from-pink-400/20 to-purple-500/20'
    },
    {
      id: 3,
      title: t('portfolio.project3.title'),
      category: t('portfolio.project3.category'),
      description: t('portfolio.project3.description'),
      desktopImage: '/pampukhapldesktop.png',
      mobileImage: '/pampukhaplmobile.png',
      liveUrl: 'https://pampukha.pl/',
      neonColor: 'green',
      glowColor: 'from-green-400/20 to-emerald-500/20'
    },
    {
      id: 4,
      title: t('portfolio.project4.title'),
      category: t('portfolio.project4.category'),
      description: t('portfolio.project4.description'),
      desktopImage: '/placeholder.svg',
      mobileImage: '/placeholder.svg',
      liveUrl: 'https://lemonshine.pl/',
      neonColor: 'cyan',
      glowColor: 'from-cyan-400/20 to-blue-500/20'
    },
    {
      id: 5,
      title: t('portfolio.project5.title'),
      category: t('portfolio.project5.category'),
      description: t('portfolio.project5.description'),
      desktopImage: '/placeholder.svg',
      mobileImage: '/placeholder.svg',
      liveUrl: 'https://spotlessprohome.co.uk/',
      neonColor: 'pink',
      glowColor: 'from-pink-400/20 to-purple-500/20'
    },
    {
      id: 6,
      title: t('portfolio.project6.title'),
      category: t('portfolio.project6.category'),
      description: t('portfolio.project6.description'),
      desktopImage: '/placeholder.svg',
      mobileImage: '/placeholder.svg',
      liveUrl: 'https://laserbeauty-studio.de/',
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
    <section id="portfolio" className="py-16 md:py-24 px-4 relative overflow-hidden bg-background" role="main">
      {/* Neon Grid Background */}
      <div className="absolute inset-0 opacity-20 dark:opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Animated Neon Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"
             style={{ filter: 'drop-shadow(0 0 50px hsl(var(--primary) / 0.3))' }} />
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700"
             style={{ filter: 'drop-shadow(0 0 60px hsl(var(--accent) / 0.3))' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-secondary/20 rounded-full blur-2xl animate-pulse delay-1000"
             style={{ filter: 'drop-shadow(0 0 40px hsl(var(--secondary) / 0.3))' }} />
      </div>

      <div className="container mx-auto relative z-10">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            {t('portfolio.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{t('portfolio.title2')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('portfolio.description')}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-12 lg:gap-20" role="list">
          {portfolioItems.map((item, index) => {
            const isLastOdd = portfolioItems.length % 2 === 1 && index === portfolioItems.length - 1;
            const neonColorMap = {
              cyan: 'shadow-primary/50 border-primary/50',
              pink: 'shadow-accent/50 border-accent/50',
              green: 'shadow-secondary/50 border-secondary/50'
            };

            return (
            <div key={item.id}
                 role="listitem"
                 className={`group relative animate-fade-in ${isLastOdd ? 'lg:col-span-2' : ''}`}
                 style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Neon Device Mockups - Desktop Only */}
              <div className="flex flex-col items-center sm:flex-row sm:items-center gap-6 sm:gap-8 flex-wrap justify-center mb-12 relative">
                {/* Desktop Neon Frame - Responsive */}
                <div
                  className="desktop-mockup relative transform-gpu hover:scale-105 hover:-translate-y-4 transition-all duration-700 cursor-pointer mx-auto sm:mx-0"
                  onClick={() => openProjectPopup(item, 'desktop')}
                >
                  <div className={`w-64 h-40 sm:w-80 sm:h-52 bg-card rounded-2xl overflow-hidden border-2 ${neonColorMap[item.neonColor as keyof typeof neonColorMap]} transition-all duration-700 hover:shadow-2xl`}
                       style={{
                         boxShadow: `0 0 30px hsl(var(--primary) / 0.3)`
                       }}>
                    {/* Neon Status Bar */}
                    <div className="h-8 sm:h-12 bg-muted flex items-center justify-center border-b border-border relative">
                      <div className="flex gap-2 sm:gap-3">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full shadow-lg shadow-red-500/50"></div>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/50"></div>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50"></div>
                      </div>
                      {/* Neon pulse line */}
                      <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Screen with neon glow */}
                    <div className="relative w-full h-full bg-background overflow-hidden -mt-8 sm:-mt-12 rounded-b-2xl">
                      <LazyImage
                        src={item.desktopImage}
                        alt={`${item.title} desktop version`}
                        className="w-full object-fill transition-transform duration-700"
                        loading={index === 0 ? "eager" : "lazy"}
                        width={320}
                        height={200}
                      />
                      {/* Neon overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-accent/20 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Neon Project Info Card */}
              <article
                className="max-w-3xl w-full mx-auto relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 hover:-translate-y-3 bg-card/50 backdrop-blur-sm p-8 border border-border group-hover:border-primary/30"
                onClick={() => openProjectPopup(item, 'desktop')}
                style={{
                  boxShadow: `0 10px 40px hsl(var(--background) / 0.3), 0 0 0 1px hsl(var(--border))`
                }}
              >
                {/* Neon border glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-30 transition-opacity duration-700 rounded-2xl" aria-hidden="true" />

                <div className="relative z-10 h-[280px]">
                  {/* Project Info with neon effects */}
                  <div className="flex-col text-center">
                    <span className={`inline-block px-6 py-3 text-sm text-foreground rounded-full mb-6 border transition-all duration-300 ${
                      item.neonColor === 'cyan' ? 'bg-primary/20 border-primary/50 shadow-lg shadow-primary/20' :
                      item.neonColor === 'pink' ? 'bg-accent/20 border-accent/50 shadow-lg shadow-accent/20' :
                      'bg-secondary/20 border-secondary/50 shadow-lg shadow-secondary/20'
                    }`}>
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-muted-foreground transition-all duration-300">{item.title}</h3>
                    <p className="h-full text-muted-foreground leading-relaxed text-lg group-hover:text-foreground/80 transition-colors duration-300">{item.description}</p>
                  </div>

                </div>

                {/* Neon scanning line effect */}
                <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${
                  item.neonColor === 'cyan' ? 'from-transparent via-primary to-transparent' :
                  item.neonColor === 'pink' ? 'from-transparent via-accent to-transparent' :
                  'from-transparent via-secondary to-transparent'
                } opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700`} />
              </article>
            </div>
          )})}
        </div>

        <div className="mt-16 text-center">
          <Button
            variant="outline"
            className="border-primary/50 text-primary bg-primary/10 hover:bg-primary/20 transition-all duration-300 border-2 px-8 py-3 rounded-2xl shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1"
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
