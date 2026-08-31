import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BASE_URL, HREFLANG, LANGS, OG_LOCALE, type Lang } from '@/lib/i18n-routes';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  /** Absolute or root-relative canonical path. Defaults to the current pathname. */
  canonical?: string;
  noindex?: boolean;
  /** Equivalent path of this page in every language, used for hreflang. */
  altPaths?: Partial<Record<Lang, string>>;
}

const upsert = (
  selector: string,
  create: () => HTMLElement,
): HTMLElement => {
  let el = document.head.querySelector(selector) as HTMLElement | null;
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
};

const setMetaName = (name: string, content: string) => {
  const el = upsert(`meta[name="${name}"]`, () => {
    const m = document.createElement('meta');
    m.setAttribute('name', name);
    return m;
  });
  el.setAttribute('content', content);
};

const setMetaProperty = (property: string, content: string) => {
  const el = upsert(`meta[property="${property}"]`, () => {
    const m = document.createElement('meta');
    m.setAttribute('property', property);
    return m;
  });
  el.setAttribute('content', content);
};

export const useSEO = ({
  title,
  description,
  keywords,
  ogImage,
  ogType = 'website',
  canonical,
  noindex = false,
  altPaths,
}: SEOProps) => {
  const { i18n } = useTranslation();
  const lang = (LANGS as readonly string[]).includes(i18n.language)
    ? (i18n.language as Lang)
    : 'uk';

  useEffect(() => {
    document.documentElement.lang = lang;

    const path =
      canonical && canonical.startsWith('http')
        ? canonical.replace(BASE_URL, '')
        : canonical || window.location.pathname;
    const canonicalUrl = `${BASE_URL}${path === '/' ? '/' : path.replace(/\/$/, '')}`;

    if (title) document.title = title;

    if (description) setMetaName('description', description);
    if (keywords) setMetaName('keywords', keywords);

    if (title) setMetaProperty('og:title', title);
    if (description) setMetaProperty('og:description', description);

    const finalOgImage = ogImage || `${BASE_URL}/leonforge_logo.png`;
    setMetaProperty('og:image', finalOgImage);
    setMetaProperty('og:image:alt', title || 'Leonforge');
    setMetaProperty('og:type', ogType);
    setMetaProperty('og:url', canonicalUrl);
    setMetaProperty('og:locale', OG_LOCALE[lang]);
    setMetaProperty('og:site_name', 'Leonforge');

    document
      .querySelectorAll('meta[property="og:locale:alternate"]')
      .forEach((m) => m.remove());
    LANGS.filter((l) => l !== lang).forEach((l) => {
      const m = document.createElement('meta');
      m.setAttribute('property', 'og:locale:alternate');
      m.setAttribute('content', OG_LOCALE[l]);
      document.head.appendChild(m);
    });

    setMetaName('twitter:card', 'summary_large_image');
    setMetaName('twitter:url', canonicalUrl);
    if (title) setMetaName('twitter:title', title);
    if (description) setMetaName('twitter:description', description);
    setMetaName('twitter:image', finalOgImage);

    const linkCanonical = upsert('link[rel="canonical"]', () => {
      const l = document.createElement('link');
      l.setAttribute('rel', 'canonical');
      return l;
    });
    linkCanonical.setAttribute('href', canonicalUrl);

    // hreflang — path based, one entry per language plus x-default
    document
      .querySelectorAll('link[rel="alternate"][hreflang]')
      .forEach((l) => l.remove());

    if (altPaths) {
      LANGS.forEach((l) => {
        const altPath = altPaths[l];
        if (!altPath) return;
        const link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', HREFLANG[l]);
        link.setAttribute('href', `${BASE_URL}${altPath}`);
        document.head.appendChild(link);
      });
      if (altPaths.uk) {
        const xDefault = document.createElement('link');
        xDefault.setAttribute('rel', 'alternate');
        xDefault.setAttribute('hreflang', 'x-default');
        xDefault.setAttribute('href', `${BASE_URL}${altPaths.uk}`);
        document.head.appendChild(xDefault);
      }
    }

    const robotsContent = noindex ? 'noindex, nofollow' : 'index, follow';
    setMetaName('robots', robotsContent);
    setMetaName('googlebot', robotsContent);
    setMetaName('author', 'Leonid Pampukha');
  }, [title, description, keywords, ogImage, ogType, canonical, noindex, altPaths, lang]);
};
