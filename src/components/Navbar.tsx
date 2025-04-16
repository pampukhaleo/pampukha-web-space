
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-brand-blue">
          Леонід Пампуха
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-700 hover:text-brand-blue transition-colors">
            Про мене
          </a>
          <a href="#portfolio" className="text-gray-700 hover:text-brand-blue transition-colors">
            Портфоліо
          </a>
          <a href="#services" className="text-gray-700 hover:text-brand-blue transition-colors">
            Послуги
          </a>
          <a href="#contact" className="text-gray-700 hover:text-brand-blue transition-colors">
            Контакти
          </a>
          <Button className="bg-brand-blue hover:bg-brand-blue/90">
            Замовити консультацію
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-gray-700 hover:text-brand-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Про мене
            </a>
            <a 
              href="#portfolio" 
              className="text-gray-700 hover:text-brand-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Портфоліо
            </a>
            <a 
              href="#services" 
              className="text-gray-700 hover:text-brand-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Послуги
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-brand-blue transition-colors"
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
