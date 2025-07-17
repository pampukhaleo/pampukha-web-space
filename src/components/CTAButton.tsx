
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
        className={`border-cyan-400/50 text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 transition-all duration-300 border-2 px-8 py-3 rounded-2xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1 ${className}`}
        onClick={scrollToContact}
      >
        {t('hero.consultation')}
      </Button>
    );
  }

  return (
    <Button
      className={`bg-brand-blue hover:bg-brand-blue/90 border-cyan-400/50 text-white hover:text-cyan-50 transition-all duration-300 border-2 px-8 py-3 rounded-2xl shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/40 hover:-translate-y-1 ${className}`}
      onClick={scrollToContact}
    >
      {t('hero.consultation')}
    </Button>
  );
};

export default CTAButton;
