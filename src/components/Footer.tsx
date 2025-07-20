
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background-darker text-foreground py-8" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* Logo and Brief Description */}
          <div className="mb-6">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img 
                src="/leonforge_logo.png" 
                alt="Leonforge" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-teal">LEONFORGE</span>
            </div>
            <p className="text-foreground-muted text-sm max-w-md mx-auto">
              {t('footer.description')}
            </p>
          </div>
          
          {/* Navigation Links in One Row */}
          <nav className="mb-6" aria-label="Основная навигация">
            <ul className="flex flex-wrap justify-center gap-6 text-sm">
              <li>
                <a href="#" className="text-foreground-muted hover:text-primary transition-colors">{t('footer.home')}</a>
              </li>
              <li>
                <a href="#about" className="text-foreground-muted hover:text-primary transition-colors">{t('footer.about')}</a>
              </li>
              <li>
                <a href="#portfolio" className="text-foreground-muted hover:text-primary transition-colors">{t('footer.portfolio')}</a>
              </li>
              <li>
                <a href="#services" className="text-foreground-muted hover:text-primary transition-colors">{t('footer.services')}</a>
              </li>
              <li>
                <a href="#contact" className="text-foreground-muted hover:text-primary transition-colors">{t('footer.contact')}</a>
              </li>
            </ul>
          </nav>
          
          {/* Telegram Contact */}
          <div className="mb-6">
            <div className="flex items-center justify-center">
              <MessageCircle size={20} className="mr-3 text-foreground-muted" aria-hidden="true" />
              <a 
                href="https://t.me/leonforge" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Telegram: @leonforge
              </a>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="pt-4 border-t border-border text-center text-foreground-muted text-sm">
            <p>© 2025 Leonforge. {t('footer.rights')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
