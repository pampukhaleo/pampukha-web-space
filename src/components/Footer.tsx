
import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 mobile:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Леонід Пампуха</h3>
            <p className="mb-6">
              Професійна розробка сучасних веб-сайтів для малого бізнесу. 
              Стильно, функціонально, доступно.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-blue transition-colors" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" className="hover:text-brand-blue transition-colors" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#" className="hover:text-brand-blue transition-colors" aria-label="LinkedIn">
                <Linkedin />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Навігація</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-brand-blue transition-colors">Головна</a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-blue transition-colors">Про мене</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-brand-blue transition-colors">Портфоліо</a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-blue transition-colors">Послуги</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-blue transition-colors">Контакти</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Контактна інформація</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone size={20} className="mr-3" />
                <span>+380 12 345 6789</span>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-3" />
                <span>leonid.pampukha@example.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Леонід Пампуха. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
