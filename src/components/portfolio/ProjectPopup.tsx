
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { LazyImage } from '@/components/SEO/LazyImageLoader';
import { useTranslation } from 'react-i18next';
import { Loader2 } from 'lucide-react';

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
  const [iframeError, setIframeError] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);

  const scrollToContact = () => {
    onClose();
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  const handleIframeLoad = () => {
    setIframeLoading(false);
  };

  const handleIframeError = () => {
    setIframeError(true);
    setIframeLoading(false);
  };

  // Reset states when popup opens/closes
  React.useEffect(() => {
    if (isOpen) {
      setIframeError(false);
      setIframeLoading(true);
    }
  }, [isOpen]);

  // Show screenshots if no live URL or iframe failed to load
  const showScreenshots = !project.liveUrl || iframeError;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {project.liveUrl && !showScreenshots ? (
            /* Live Preview with iframe */
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">{t('portfolio.livePreview') || 'Live Preview'}</h3>
              <div className="relative border rounded-lg overflow-hidden bg-white" style={{ height: '70vh' }}>
                {iframeLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Loading preview...</span>
                    </div>
                  </div>
                )}
                <iframe
                  src={project.liveUrl}
                  className="w-full h-full"
                  sandbox="allow-scripts allow-same-origin allow-forms"
                  onLoad={handleIframeLoad}
                  onError={handleIframeError}
                  title={`${project.title} live preview`}
                />
              </div>
              <p className="text-sm text-gray-500 text-center">
                {t('portfolio.iframeNote') || 'Scroll to explore the website. Links are disabled for security.'}
              </p>
            </div>
          ) : (
            /* Fallback to Screenshots */
            <>
              {/* Desktop Screenshot */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">{t('portfolio.desktopVersion')}</h3>
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
                <h3 className="text-lg font-semibold">{t('portfolio.mobileVersion')}</h3>
                <div className="border rounded-lg overflow-hidden bg-white flex justify-center">
                  <LazyImage
                    src={project.mobileImage}
                    alt={`${project.title} mobile screenshot`}
                    className="max-w-sm h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </>
          )}

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
                {t('portfolio.openInNewTab') || 'Open in New Tab'}
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectPopup;
