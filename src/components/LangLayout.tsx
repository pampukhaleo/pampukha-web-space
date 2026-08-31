import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import type { Lang } from '@/lib/i18n-routes';

interface LangLayoutProps {
  lang: Lang;
  children: React.ReactNode;
}

/** Keeps i18n in sync with the language prefix of the current route. */
export const LangLayout = ({ lang, children }: LangLayoutProps) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    document.documentElement.lang = lang;
  }, [lang, i18n]);

  return <>{children}</>;
};

export default LangLayout;
