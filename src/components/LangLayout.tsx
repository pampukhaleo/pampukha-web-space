import React, { createContext, useContext, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { homePath, LANGS, type Lang } from '@/lib/i18n-routes';

type AltPaths = Record<Lang, string>;

const AltPathsContext = createContext<AltPaths | null>(null);

export const useAltPaths = (): AltPaths => {
  const ctx = useContext(AltPathsContext);
  return (
    ctx ||
    (Object.fromEntries(LANGS.map((l) => [l, homePath(l)])) as AltPaths)
  );
};

interface LangLayoutProps {
  lang: Lang;
  altPaths?: AltPaths;
  children: React.ReactNode;
}

/** Keeps i18n in sync with the language prefix and exposes the page's language alternates. */
export const LangLayout = ({ lang, altPaths, children }: LangLayoutProps) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    document.documentElement.lang = lang;
  }, [lang, i18n]);

  const value = useMemo(
    () =>
      altPaths ||
      (Object.fromEntries(LANGS.map((l) => [l, homePath(l)])) as AltPaths),
    [altPaths],
  );

  return <AltPathsContext.Provider value={value}>{children}</AltPathsContext.Provider>;
};

export default LangLayout;
