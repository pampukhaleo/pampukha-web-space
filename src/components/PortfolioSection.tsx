import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { LazyImage } from '@/components/SEO/LazyImageLoader';
import { useTranslation } from 'react-i18next';
import ProjectPopup from '@/components/portfolio/ProjectPopup';
import { useAnalytics } from '@/components/SEO/Analytics';

const PortfolioSection = () => {
  const { t } = useTranslation();
  const { trackPortfolioView } = useAnalytics();
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
      technologies: ['React', 'TypeScript', 'Tailwind', 'Supabase', 'i18next'],
      isFeatured: true,
    },
    {
      id: 2,
      title: t('portfolio.project2.title'),
      category: t('portfolio.project2.category'),
      description: t('portfolio.project2.description'),
      desktopImage: '/cheataicdesktop.png',
      mobileImage: '/cheataicmobile.png',
      liveUrl: 'https://chea-taic.be/',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind'],
      isFeatured: false,
    },
    {
      id: 3,
      title: t('portfolio.project3.title'),
      category: t('portfolio.project3.category'),
      description: t('portfolio.project3.description'),
      desktopImage: '/pampukhapldesktop.png',
      mobileImage: '/pampukhaplmobile.png',
      liveUrl: 'https://pampukha.pl/',
      technologies: ['React', 'TypeScript', 'Tailwind', 'Supabase'],
      isFeatured: false,
    },
    {
      id: 4,
      title: t('portfolio.project4.title'),
      category: t('portfolio.project4.category'),
      description: t('portfolio.project4.description'),
      desktopImage: '/Screenshot_6.png',
      mobileImage: '/placeholder.svg',
      liveUrl: 'https://lemonshine.pl/',
      technologies: ['React', 'Vite', 'Tailwind'],
      isFeatured: false,
    },
    {
      id: 5,
      title: t('portfolio.project5.title'),
      category: t('portfolio.project5.category'),
      description: t('portfolio.project5.description'),
      desktopImage: '/Screenshot_7.png',
      mobileImage: '/placeholder.svg',
      liveUrl: 'https://spotlessprohome.co.uk/',
      technologies: ['React', 'TypeScript', 'Vite'],
      isFeatured: false,
    },
    {
      id: 6,
      title: t('portfolio.project6.title'),
      category: t('portfolio.project6.category'),
      description: t('portfolio.project6.description'),
      desktopImage: '/Screenshot_8.png',
      mobileImage: '/placeholder.svg',
      liveUrl: 'https://laserbeauty-studio.de/',
      technologies: ['React', 'Tailwind', 'Supabase'],
      isFeatured: false,
    },
  ];

  const featuredProject = portfolioItems.find(item => item.isFeatured);
  const regularProjects = portfolioItems.filter(item => !item.isFeatured);


  const openProjectPopup = (project: any, type: 'desktop' | 'mobile') => {
    setSelectedProject(project);
    setViewType(type);
    setIsPopupOpen(true);
    trackPortfolioView(project.title);
  };

  const closeProjectPopup = () => {
    setIsPopupOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="py-16 md:py-24 px-4 relative overflow-hidden bg-muted/30" role="main">
      <div className="container mx-auto relative z-10">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            {t('portfolio.title1')} <span className="text-primary">{t('portfolio.title2')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('portfolio.description')}
          </p>
        </header>

        {/* Featured Project */}
        {featuredProject && (
          <div 
            className="group relative overflow-hidden rounded-lg cursor-pointer mb-8 border border-border hover:border-primary/30 transition-all duration-300"
            onClick={() => openProjectPopup(featuredProject, 'desktop')}
            role="article"
          >
            <div className="relative aspect-[21/9] overflow-hidden bg-muted">
              <LazyImage
                src={featuredProject.desktopImage}
                alt={t(`imageAlt.project${featuredProject.id}Desktop`)}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                loading="eager"
                priority
              />
              {/* Minimal darkening on hover */}
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-300" />
            </div>
            
            {/* Title overlay - appears on hover */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background via-background/90 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                {featuredProject.title}
              </h3>
              <p className="text-muted-foreground line-clamp-2">
                {featuredProject.description}
              </p>
            </div>
          </div>
        )}

        {/* Regular Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {regularProjects.map((item, index) => (
            <div
              key={item.id}
              role="listitem"
              className="group relative overflow-hidden rounded-lg cursor-pointer border border-border hover:border-primary/30 transition-all duration-300"
              onClick={() => openProjectPopup(item, 'desktop')}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <LazyImage
                  src={item.desktopImage}
                  alt={t(`imageAlt.project${item.id}Desktop`)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                {/* Minimal darkening on hover */}
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
              </div>
              
              {/* Title overlay - appears on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background/90 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            size="lg"
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
