import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { LazyImage } from '@/components/SEO/LazyImageLoader';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Code2 } from 'lucide-react';

interface ProjectPopupProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: number;
    title: string;
    category?: string;
    description?: string;
    desktopImage: string;
    mobileImage: string;
    liveUrl?: string;
    technologies?: string[];
    gradient?: string;
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
  const altText = t(`imageAlt.project${project.id}${isDesktop ? 'Desktop' : 'Mobile'}`);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-xl border-border/50">
        <DialogHeader className="space-y-4 pb-4 border-b border-border/50">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <DialogTitle className="text-3xl font-bold text-foreground">
                {project.title}
              </DialogTitle>
            </div>
          </div>
          
          {project.description && (
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          )}

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-secondary/50 backdrop-blur-sm border border-border/50 rounded-md text-foreground"
                >
                  <Code2 className="w-3 h-3" />
                  {tech}
                </span>
              ))}
            </div>
          )}
        </DialogHeader>
        
        <div className="space-y-6 py-6">
          {/* Screenshot */}
          <div className="relative group rounded-xl overflow-hidden border border-border/50 bg-background">
            <div className="relative">
              <LazyImage
                src={imageToShow}
                alt={altText}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            
            {/* View type indicator */}
            <div className="absolute top-4 right-4 px-3 py-1.5 bg-card/90 backdrop-blur-sm border border-border/50 rounded-full text-xs font-medium text-foreground">
              {isDesktop ? '🖥️ Desktop' : '📱 Mobile'}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button 
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1 shadow-lg shadow-primary/25"
            >
              {t('portfolio.orderSimilar')}
            </Button>
            <Button 
              variant="outline"
              onClick={scrollToContact}
              className="border-primary/50 text-primary hover:bg-primary/10 flex-1"
            >
              {t('hero.consultation')}
            </Button>
            {project.liveUrl && (
              <Button
                variant="outline"
                onClick={() => window.open(project.liveUrl, '_blank')}
                className="border-border hover:bg-secondary flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Open Live
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectPopup;
