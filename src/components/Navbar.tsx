
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, LogIn, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
    };

    checkSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsAuthenticated(!!session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleAuthNavigation = () => {
    navigate(isAuthenticated ? '/dashboard' : '/auth');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/your-logo-file.png" 
            alt="Leonforge" 
            className="h-8 w-auto"
          />
          <span className="text-xl font-bold text-foreground">Leonforge</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-foreground-muted hover:text-primary transition-colors">
            Про мене
          </a>
          <a href="#portfolio" className="text-foreground-muted hover:text-primary transition-colors">
            Портфоліо
          </a>
          <a href="#services" className="text-foreground-muted hover:text-primary transition-colors">
            Послуги
          </a>
          <a href="#contact" className="text-foreground-muted hover:text-primary transition-colors">
            Контакти
          </a>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleTheme}
            className="text-foreground-muted hover:text-primary mr-2"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button 
            onClick={handleAuthNavigation} 
            className="bg-primary hover:bg-primary/90 flex items-center gap-2"
          >
            {isAuthenticated ? 'Dashboard' : 'Увійти'}
            {!isAuthenticated && <LogIn className="h-4 w-4" />}
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-4">
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
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background py-4 px-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-foreground-muted hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Про мене
            </a>
            <a 
              href="#portfolio" 
              className="text-foreground-muted hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Портфоліо
            </a>
            <a 
              href="#services" 
              className="text-foreground-muted hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Послуги
            </a>
            <a 
              href="#contact" 
              className="text-foreground-muted hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакти
            </a>
            <Button 
              className="bg-primary hover:bg-primary/90 w-full flex items-center gap-2"
              onClick={() => {
                setIsMenuOpen(false);
                navigate(isAuthenticated ? '/dashboard' : '/auth');
              }}
            >
              {isAuthenticated ? 'Dashboard' : 'Увійти'}
              {!isAuthenticated && <LogIn className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

