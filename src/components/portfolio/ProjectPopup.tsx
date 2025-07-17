
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
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
}

const ProjectPopup = ({ isOpen, onClose, project }: ProjectPopupProps) => {
  const { t } = useTranslation();

  const scrollToContact = () => {
    onClose();
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Desktop Screenshot */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Desktop Version</h3>
            <div className="border rounded-lg overflow-hidden bg-white">
              <LazyImage
                src={project.desktopImage}
                alt={`${project.title} desktop screenshot`}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>

          {/* Mobile Screenshot */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Mobile Version</h3>
            <div className="flex justify-center">
              <div className="border rounded-lg overflow-hidden bg-white inline-block">
                <LazyImage
                  src={project.mobileImage}
                  alt={`${project.title} mobile screenshot`}
                  className="h-auto max-w-sm"
                  loading="lazy"
                />
              </div>
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
