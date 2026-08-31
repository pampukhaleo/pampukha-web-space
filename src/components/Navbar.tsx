
import React, { useState } from 'react';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SERVICES } from '@/data/services';
import { UI } from '@/data/ui-copy';
import {
  DEFAULT_LANG,
  contactPath,
  homePath,
  isLang,
  pricingPath,
  servicePath,
  type Lang,
} from '@/lib/i18n-routes';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { i18n } = useTranslation();

  const current = i18n.language?.slice(0, 2);
  const lang: Lang = isLang(current) ? current : DEFAULT_LANG;
  const ui = UI[lang];

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  const close = () => setIsMenuOpen(false);

  const links = [
    { label: ui.cases, to: `${homePath(lang)}#portfolio` },
    { label: ui.pricing, to: pricingPath(lang) },
    { label: ui.contact, to: contactPath(lang) },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to={homePath(lang)} className="flex items-center space-x-3" onClick={close}>
          <img src="/leonforge_logo.png" alt="Leonforge" className="h-8 w-auto" />
          <span className="text-xl font-semibold text-foreground">LEONFORGE</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
              {ui.services}
              <ChevronDown size={14} aria-hidden="true" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="bg-background border border-border z-50">
              {SERVICES.map((service) => (
                <DropdownMenuItem key={service.id} asChild className="cursor-pointer">
                  <Link to={servicePath(lang, service.slug[lang])}>
                    {service.content[lang].navLabel}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <LanguageSwitcher />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-muted-foreground hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center space-x-4">
          <LanguageSwitcher />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-muted-foreground hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <button className="text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border py-4 px-4 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col space-y-4">
            <p className="text-xs uppercase tracking-wider text-muted-foreground/60">{ui.services}</p>
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                to={servicePath(lang, service.slug[lang])}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={close}
              >
                {service.content[lang].navLabel}
              </Link>
            ))}
            <div className="pt-2 border-t border-border" />
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={close}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
