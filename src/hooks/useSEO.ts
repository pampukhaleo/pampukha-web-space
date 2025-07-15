
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  noindex?: boolean;
}

export const useSEO = ({
  title,
  description,
  keywords,
  ogImage,
  ogType = 'website',
  canonical,
  noindex = false,
}: SEOProps) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Управление title
    if (title) {
      document.title = title;
    }

    // Управление meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description);
    }

    // Управление keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords && keywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    if (metaKeywords && keywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // Управление Open Graph
    const updateMetaProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    if (title) updateMetaProperty('og:title', title);
    if (description) updateMetaProperty('og:description', description);
    if (ogImage) updateMetaProperty('og:image', ogImage);
    updateMetaProperty('og:type', ogType);
    updateMetaProperty('og:locale', i18n.language === 'uk' ? 'uk_UA' : i18n.language === 'en' ? 'en_US' : 'pl_PL');

    // Управление canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    const currentPath = window.location.pathname;
    const canonicalUrl = canonical || `${window.location.origin}${currentPath}`;
    linkCanonical.setAttribute('href', canonicalUrl);

    // Управление hreflang для мультиязычности
    const languages = ['uk', 'en', 'pl'];
    const existingHreflangs = document.querySelectorAll('link[rel="alternate"]');
    existingHreflangs.forEach(link => link.remove());

    languages.forEach(lang => {
      const hreflang = document.createElement('link');
      hreflang.setAttribute('rel', 'alternate');
      hreflang.setAttribute('hreflang', lang);
      hreflang.setAttribute('href', `${window.location.origin}${currentPath}?lang=${lang}`);
      document.head.appendChild(hreflang);
    });

    // x-default hreflang
    const hreflangDefault = document.createElement('link');
    hreflangDefault.setAttribute('rel', 'alternate');
    hreflangDefault.setAttribute('hreflang', 'x-default');
    hreflangDefault.setAttribute('href', `${window.location.origin}${currentPath}`);
    document.head.appendChild(hreflangDefault);

    // Управление robots meta
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    const robotsContent = noindex ? 'noindex, nofollow' : 'index, follow';
    metaRobots.setAttribute('content', robotsContent);

  }, [title, description, keywords, ogImage, ogType, canonical, noindex, i18n.language]);
};
