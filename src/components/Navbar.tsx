
import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-3">
          <img 
            src="/leonforge_logo.png" 
            alt="Leonforge" 
            className="h-8 w-auto"
          />
          <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-teal">LEONFORGE</span>
        </a>

        {/* Desktop Menu - показывать только на очень больших экранах */}
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#about" className="text-foreground-muted hover:text-primary transition-colors">
            {t('navbar.about')}
          </a>
          <a href="#portfolio" className="text-foreground-muted hover:text-primary transition-colors">
            {t('navbar.portfolio')}
          </a>
          <a href="#services" className="text-foreground-muted hover:text-primary transition-colors">
            {t('navbar.services')}
          </a>
          <a href="#contact" className="text-foreground-muted hover:text-primary transition-colors">
            {t('navbar.contact')}
          </a>
          <LanguageSwitcher />
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleTheme}
            className="text-foreground-muted hover:text-primary mr-2"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
        
        {/* Mobile menu button - показывать на экранах меньше xl */}
        <div className="lg:hidden flex items-center space-x-4">
          <LanguageSwitcher />
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleTheme}
            className="text-foreground-muted"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <button 
            className="text-foreground" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu - показывать на экранах меньше xl */}
      {isMenuOpen && (
        <div className="xl:hidden bg-background py-4 px-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-foreground-muted hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navbar.about')}
            </a>
            <a 
              href="#portfolio" 
              className="text-foreground-muted hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navbar.portfolio')}
            </a>
            <a 
              href="#services" 
              className="text-foreground-muted hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navbar.services')}
            </a>
            <a 
              href="#contact" 
              className="text-foreground-muted hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navbar.contact')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
