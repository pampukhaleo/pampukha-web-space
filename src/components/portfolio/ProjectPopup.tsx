
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { LazyImage } from '@/components/SEO/LazyImageLoader';
import { useTranslation } from 'react-i18next';

interface ProjectPopupProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    desktopImage: string;
    mobileImage: string;
    liveUrl?: string;
  };
  viewType: 'desktop' | 'mobile';
}

const ProjectPopup = ({ isOpen, onClose, project, viewType }: ProjectPopupProps) => {
  const { t } = useTranslation();

  const scrollToContact = () => {
    onClose();
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  const isDesktop = viewType === 'desktop';
  const imageToShow = isDesktop ? project.desktopImage : project.mobileImage;
  const altText = `${project.title} ${isDesktop ? 'desktop' : 'mobile'} screenshot`;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
          <DialogDescription>
            {isDesktop ? 'Desktop Version' : 'Mobile Version'}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Single Screenshot */}
          <div className="flex justify-center">
            <div className={`border rounded-lg overflow-hidden bg-white ${isDesktop ? 'w-full' : 'inline-block'}`}>
              <LazyImage
                src={imageToShow}
                alt={altText}
                className={`h-auto ${isDesktop ? 'w-full' : 'max-w-sm'}`}
                loading="lazy"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t">
            <Button 
              onClick={scrollToContact}
              className="bg-brand-blue hover:bg-brand-blue/90 flex-1"
            >
              {t('portfolio.orderSimilar')}
            </Button>
            <Button 
              variant="outline"
              onClick={scrollToContact}
              className="border-brand-blue text-brand-blue hover:bg-brand-blue/10 flex-1"
            >
              {t('hero.consultation')}
            </Button>
            {project.liveUrl && (
              <Button
                variant="outline"
                onClick={() => window.open(project.liveUrl, '_blank')}
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Open in New Tab
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectPopup;
