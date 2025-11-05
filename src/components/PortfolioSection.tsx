
import React, { useState } from 'react';
import { ExternalLink, Code2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LazyImage } from '@/components/SEO/LazyImageLoader';
import { useTranslation } from 'react-i18next';
import ProjectPopup from '@/components/portfolio/ProjectPopup';
import { Card } from '@/components/ui/card';

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
      technologies: ['React', 'TypeScript', 'Tailwind', 'Supabase', 'i18next'],
      size: 'large', // Bento grid size
      gradient: 'from-primary/20 via-accent/10 to-transparent'
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
      size: 'medium',
      gradient: 'from-accent/20 via-primary/10 to-transparent'
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
      size: 'medium',
      gradient: 'from-secondary/20 via-accent/10 to-transparent'
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
      size: 'small',
      gradient: 'from-primary/20 via-secondary/10 to-transparent'
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
      size: 'small',
      gradient: 'from-accent/20 via-primary/10 to-transparent'
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
      size: 'medium',
      gradient: 'from-secondary/20 via-accent/10 to-transparent'
    },
  ];

  // Bento grid size classes
  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'medium':
        return 'md:col-span-1 md:row-span-1';
      case 'small':
        return 'md:col-span-1 md:row-span-1';
      default:
        return 'md:col-span-1 md:row-span-1';
    }
  };

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
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.05) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto relative z-10">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            {t('portfolio.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{t('portfolio.title2')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('portfolio.description')}
          </p>
        </header>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[280px] md:auto-rows-[320px]" role="list">
          {portfolioItems.map((item, index) => (
            <Card
              key={item.id}
              role="listitem"
              className={`group relative overflow-hidden cursor-pointer border-border/50 hover:border-primary/50 transition-all duration-500 ${getSizeClasses(item.size)} animate-fade-in hover:shadow-2xl hover:shadow-primary/10`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => openProjectPopup(item, 'desktop')}
            >
              {/* Project Image Background */}
              <div className="absolute inset-0">
                <LazyImage
                  src={item.desktopImage}
                  alt={t(`imageAlt.project${item.id}Desktop`)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading={index === 0 ? "eager" : "lazy"}
                  width={600}
                  height={400}
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-500" />
              </div>

              {/* Content Overlay */}
              <div className="relative h-full flex flex-col justify-between p-6 z-10">
                {/* Top: Category Badge */}
                <div className="flex items-start justify-between">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-card/90 backdrop-blur-sm border border-border/50 rounded-full text-foreground">
                    <Sparkles className="w-3 h-3" />
                    {item.category}
                  </span>
                  <ExternalLink className="w-5 h-5 text-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Bottom: Project Info */}
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className={`text-sm text-muted-foreground line-clamp-2 ${item.size === 'large' ? 'md:line-clamp-3' : 'line-clamp-2'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                      {item.description}
                    </p>
                  </div>

                  {/* Technologies - shown on hover */}
                  <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {item.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-md text-primary"
                        style={{ transitionDelay: `${techIndex * 50}ms` }}
                      >
                        <Code2 className="w-3 h-3" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Border Glow */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-lg transition-colors duration-500 pointer-events-none" />
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1 px-8"
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
