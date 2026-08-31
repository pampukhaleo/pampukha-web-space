
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useAltPaths } from '@/components/LangLayout';
import { LANGS, type Lang } from '@/lib/i18n-routes';

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const altPaths = useAltPaths();

  const changeLanguage = (lng: Lang) => {
    i18n.changeLanguage(lng);
    navigate(altPaths[lng]);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          className="text-foreground-muted hover:text-primary"
          aria-label="Select language"
        >
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="bg-background border border-border shadow-lg z-50"
      >
        {LANGS.map((code) => (
          <DropdownMenuItem
            key={code}
            onClick={() => changeLanguage(code)}
            className={`cursor-pointer hover:bg-accent hover:text-accent-foreground ${i18n.language === code ? 'font-bold text-primary' : ''}`}
          >
            {t(`language.${code}`)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
