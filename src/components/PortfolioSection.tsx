import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import ProjectPopup from '@/components/portfolio/ProjectPopup';
import FeaturedCase from '@/components/portfolio/FeaturedCase';
import CaseCarousel from '@/components/portfolio/CaseCarousel';
import { CASES, type CaseStudy } from '@/data/cases';
import { DEFAULT_LANG, isLang, type Lang } from '@/lib/i18n-routes';

const PortfolioSection = () => {
  const { t, i18n } = useTranslation();
  const lang: Lang = isLang(i18n.language) ? i18n.language : DEFAULT_LANG;

  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [featured, ...rest] = CASES;

  const openQuickPreview = (item: CaseStudy) => {
    setSelectedProject(item);
    setIsPopupOpen(true);
  };

  const closeQuickPreview = () => {
    setIsPopupOpen(false);
    setSelectedProject(null);
  };

  const popupProject = selectedProject
    ? {
        id: CASES.findIndex((c) => c.slug === selectedProject.slug) + 1,
        title: selectedProject.content[lang].title,
        category: selectedProject.content[lang].category,
        description: selectedProject.content[lang].summary,
        desktopImage: selectedProject.desktopImage,
        mobileImage: selectedProject.previewImage,
        liveUrl: selectedProject.liveUrl,
        technologies: selectedProject.content[lang].tags,
      }
    : null;

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-muted/30 px-4 py-16 md:py-24"
      role="main"
    >
      <div className="container relative z-10 mx-auto">
        <header className="mb-12 text-center">
          <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
            {t('portfolio.title1')}{' '}
            <span className="text-primary">{t('portfolio.title2')}</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            {t('portfolio.description')}
          </p>
        </header>

        {featured && (
          <div className="mb-12">
            <FeaturedCase item={featured} lang={lang} onQuickPreview={openQuickPreview} />
          </div>
        )}

        <CaseCarousel items={rest} lang={lang} onQuickPreview={openQuickPreview} />

        <div className="mt-14 text-center">
          <Button
            size="lg"
            className="h-auto whitespace-normal px-6 py-3 leading-tight"
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            {t('portfolio.orderSimilar')}
          </Button>
        </div>
      </div>

      {popupProject && (
        <ProjectPopup
          isOpen={isPopupOpen}
          onClose={closeQuickPreview}
          project={popupProject}
          viewType="desktop"
        />
      )}
    </section>
  );
};

export default PortfolioSection;
