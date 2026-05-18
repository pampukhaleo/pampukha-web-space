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
  const [viewType] = useState<'desktop' | 'mobile'>('desktop');

  const portfolioItems = [
    {
      id: 1,
      title: t('portfolio.project1.title'),
      category: t('portfolio.project1.category'),
      description: t('portfolio.project1.description'),
      desktopImage: '/expertisedesktop.png',
      mobileImage: '/expertisemobile.png',
      liveUrl: 'https://expertise.com.ua/',
      technologies: ['AI-сайт', 'Мультимовний', 'SEO'],
      aspect: 'aspect-[4/3]',
    },
    {
      id: 2,
      title: t('portfolio.project2.title'),
      category: t('portfolio.project2.category'),
      description: t('portfolio.project2.description'),
      desktopImage: '/cheataicdesktop.png',
      mobileImage: '/cheataicmobile.png',
      liveUrl: 'https://chea-taic.be/',
      technologies: ['AI-сайт', 'Лендинг', 'SEO'],
      aspect: 'aspect-[3/4]',
    },
    {
      id: 3,
      title: t('portfolio.project3.title'),
      category: t('portfolio.project3.category'),
      description: t('portfolio.project3.description'),
      desktopImage: '/pampukhapldesktop.png',
      mobileImage: '/pampukhaplmobile.png',
      liveUrl: 'https://pampukha.pl/',
      technologies: ['AI-сайт', 'Форма заявок', 'Мультимовний'],
      aspect: 'aspect-[16/10]',
    },
    {
      id: 4,
      title: t('portfolio.project4.title'),
      category: t('portfolio.project4.category'),
      description: t('portfolio.project4.description'),
      desktopImage: '/Screenshot_6.png',
      mobileImage: '/placeholder.svg',
      liveUrl: 'https://lemonshine.pl/',
      technologies: ['AI-сайт', 'Бронювання', 'SEO'],
      aspect: 'aspect-[4/3]',
    },
    {
      id: 5,
      title: t('portfolio.project5.title'),
      category: t('portfolio.project5.category'),
      description: t('portfolio.project5.description'),
      desktopImage: '/Screenshot_7.png',
      mobileImage: '/placeholder.svg',
      liveUrl: 'https://spotlessprohome.co.uk/',
      technologies: ['AI-сайт', 'Лендинг', 'SEO'],
      aspect: 'aspect-[3/4]',
    },
    {
      id: 6,
      title: t('portfolio.project6.title'),
      category: t('portfolio.project6.category'),
      description: t('portfolio.project6.description'),
      desktopImage: '/Screenshot_8.png',
      mobileImage: '/placeholder.svg',
      liveUrl: 'https://laserbeauty-studio.de/',
      technologies: ['AI-сайт', 'Бронювання', 'Галерея'],
      aspect: 'aspect-[16/10]',
    },
  ];

  const openProjectPopup = (project: any) => {
    setSelectedProject(project);
    setIsPopupOpen(true);
    trackPortfolioView(project.title);
  };

  const closeProjectPopup = () => {
    setIsPopupOpen(false);
    setSelectedProject(null);
  };

  return (
    <section
      id="portfolio"
      className="py-16 md:py-24 px-4 relative overflow-hidden bg-muted/30"
      role="main"
    >
      <div className="container mx-auto relative z-10">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            {t('portfolio.title1')}{' '}
            <span className="text-primary">{t('portfolio.title2')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('portfolio.description')}
          </p>
        </header>

        {/* Masonry grid (CSS columns) */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {portfolioItems.map((item) => (
            <article
              key={item.id}
              onClick={() => openProjectPopup(item)}
              className="group mb-6 break-inside-avoid cursor-pointer overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:-translate-y-0.5"
            >
              <div className={`relative ${item.aspect} overflow-hidden bg-muted`}>
                <LazyImage
                  src={item.desktopImage}
                  alt={t(`imageAlt.project${item.id}Desktop`)}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  loading={item.id <= 2 ? 'eager' : 'lazy'}
                  priority={item.id === 1}
                />
              </div>

              <div className="p-5">
                <p className="text-xs uppercase tracking-wider text-primary mb-2">
                  {item.category}
                </p>
                <h3 className="text-lg font-semibold text-foreground mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="whitespace-normal h-auto py-3 px-6 leading-tight"
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            {t('portfolio.orderSimilar')}
          </Button>
        </div>
      </div>

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
