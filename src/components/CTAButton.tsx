
import React from 'react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

interface CTAButtonProps {
  variant?: 'primary' | 'outline';
  className?: string;
}

const CTAButton = ({ variant = 'primary', className = '' }: CTAButtonProps) => {
  const { t } = useTranslation();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (variant === 'outline') {
    return (
      <Button
        variant="outline"
        className={`border-brand-blue text-brand-blue hover:bg-brand-blue/10 ${className}`}
        onClick={scrollToContact}
      >
        {t('hero.consultation')}
      </Button>
    );
  }

  return (
    <Button
      className={`bg-brand-blue hover:bg-brand-blue/90 ${className}`}
      onClick={scrollToContact}
    >
      {t('hero.consultation')}
    </Button>
  );
};

export default CTAButton;
