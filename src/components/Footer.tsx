import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background-darker text-foreground py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/leonforge_logo.png" 
                alt="Leonforge" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-teal">LEONFORGE</span>
            </div>
            <p className="mb-6 text-foreground-muted">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4" role="list" aria-label="Социальные сети">
              <a 
                href="#" 
                className="text-foreground-muted hover:text-primary transition-colors" 
                aria-label="Facebook Leonforge"
                role="listitem"
              >
                <Facebook />
              </a>
              <a 
                href="#" 
                className="text-foreground-muted hover:text-primary transition-colors" 
                aria-label="Instagram Leonforge"
                role="listitem"
              >
                <Instagram />
              </a>
              <a 
                href="#" 
                className="text-foreground-muted hover:text-primary transition-colors" 
                aria-label="LinkedIn Leonforge"
                role="listitem"
              >
                <Linkedin />
              </a>
            </div>
          </div>
          
          <nav aria-label="Основная навигация">
            <h3 className="text-xl font-bold mb-6">{t('footer.navigation')}</h3>
            <ul className="space-y-3">
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
          
          <div>
            <h3 className="text-xl font-bold mb-6">{t('footer.contactInfo')}</h3>
            <address className="space-y-4 not-italic">
              <div className="flex items-center">
                <Phone size={20} className="mr-3 text-foreground-muted" aria-hidden="true" />
                <a href="tel:+380123456789" className="hover:text-primary transition-colors">
                  +380 12 345 6789
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-3 text-foreground-muted" aria-hidden="true" />
                <a href="mailto:leonid.pampukha@example.com" className="hover:text-primary transition-colors">
                  leonid.pampukha@example.com
                </a>
              </div>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-foreground-muted">
          <p>© {currentYear} Leonforge. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
