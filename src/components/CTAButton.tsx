
import React from 'react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { useAnalytics } from '@/components/SEO/Analytics';

interface CTAButtonProps {
  variant?: 'primary' | 'outline';
  className?: string;
}

const CTAButton = ({ variant = 'primary', className = '' }: CTAButtonProps) => {
  const { t } = useTranslation();
  const { trackCTAClick } = useAnalytics();

  const scrollToContact = () => {
    trackCTAClick(t('hero.consultation'), 'cta_button');
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (variant === 'outline') {
    return (
      <Button
        variant="outline"
        className={`border-2 border-primary text-primary bg-transparent hover:bg-primary/10 transition-all duration-200 px-8 py-3 rounded-xl ${className}`}
        onClick={scrollToContact}
      >
        {t('hero.consultation')}
      </Button>
    );
  }

  return (
    <Button
      className={`bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 px-8 py-3 rounded-xl ${className}`}
      onClick={scrollToContact}
    >
      {t('hero.consultation')}
    </Button>
  );
};

export default CTAButton;
