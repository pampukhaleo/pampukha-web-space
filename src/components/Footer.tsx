import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background-darker text-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/your-logo-file.png" 
                alt="Leonforge" 
                className="h-8 w-auto"
              />
              <h3 className="text-2xl font-bold">Leonforge</h3>
            </div>
            <p className="mb-6 text-foreground-muted">
              Professional development of modern websites for small businesses. 
              Stylish, functional, accessible.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground-muted hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" className="text-foreground-muted hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#" className="text-foreground-muted hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Навігація</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-foreground-muted hover:text-primary transition-colors">Головна</a>
              </li>
              <li>
                <a href="#about" className="text-foreground-muted hover:text-primary transition-colors">Про мене</a>
              </li>
              <li>
                <a href="#portfolio" className="text-foreground-muted hover:text-primary transition-colors">Портфоліо</a>
              </li>
              <li>
                <a href="#services" className="text-foreground-muted hover:text-primary transition-colors">Послуги</a>
              </li>
              <li>
                <a href="#contact" className="text-foreground-muted hover:text-primary transition-colors">Контакти</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Контактна інформація</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone size={20} className="mr-3 text-foreground-muted" />
                <span>+380 12 345 6789</span>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-3 text-foreground-muted" />
                <span>leonid.pampukha@example.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-foreground-muted">
          <p>© {new Date().getFullYear()} Leonforge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
