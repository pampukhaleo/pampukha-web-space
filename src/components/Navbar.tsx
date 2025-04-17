
import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark-lighter/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-brand-blue dark:text-white">
          Леонід Пампуха
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-brand-blue dark:hover:text-white transition-colors">
            Про мене
          </a>
          <a href="#portfolio" className="text-gray-700 dark:text-gray-300 hover:text-brand-blue dark:hover:text-white transition-colors">
            Портфоліо
          </a>
          <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-brand-blue dark:hover:text-white transition-colors">
            Послуги
          </a>
          <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-brand-blue dark:hover:text-white transition-colors">
            Контакти
          </a>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleTheme}
            className="mr-2"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button className="bg-brand-blue dark:bg-brand-blue hover:bg-brand-blue/90">
            Замовити консультацію
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <button 
            className="text-gray-700 dark:text-white" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-dark-lighter py-4 px-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-gray-700 dark:text-gray-300 hover:text-brand-blue dark:hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Про мене
            </a>
            <a 
              href="#portfolio" 
              className="text-gray-700 dark:text-gray-300 hover:text-brand-blue dark:hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Портфоліо
            </a>
            <a 
              href="#services" 
              className="text-gray-700 dark:text-gray-300 hover:text-brand-blue dark:hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Послуги
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 dark:text-gray-300 hover:text-brand-blue dark:hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакти
            </a>
            <Button 
              className="bg-brand-blue hover:bg-brand-blue/90 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Замовити консультацію
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
