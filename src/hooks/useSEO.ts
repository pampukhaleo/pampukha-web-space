
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
    // Используем новый домен leonforge.com
    const baseUrl = 'https://leonforge.com';
    
    // Set document language
    document.documentElement.lang = i18n.language;

    // Handle canonical URL - if ?lang= parameter exists, use current URL as canonical
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    const canonicalUrl = langParam ? window.location.href : (canonical || window.location.origin + window.location.pathname);
    
    // Управление title
    if (title) {
      document.title = title;
    }

    // Управление meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    const finalDescription = description || 'Professional development of modern websites for small businesses. Stylish, functional, accessible.';
    metaDescription.setAttribute('content', finalDescription);

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
    if (ogImage) {
      updateMetaProperty('og:image', ogImage);
      updateMetaProperty('og:image:alt', title || 'Leonforge - Web Development');
    }
    updateMetaProperty('og:type', ogType);
    
    // Use canonicalUrl for og:url
    updateMetaProperty('og:url', canonicalUrl);
    updateMetaProperty('og:locale', i18n.language === 'uk' ? 'uk_UA' : i18n.language === 'en' ? 'en_US' : 'pl_PL');
    updateMetaProperty('og:site_name', 'Leonforge');

    // Twitter Card meta tags
    const updateTwitterMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateTwitterMeta('twitter:card', 'summary_large_image');
    if (title) updateTwitterMeta('twitter:title', title);
    if (description) updateTwitterMeta('twitter:description', description);
    if (ogImage) updateTwitterMeta('twitter:image', ogImage);

    // Управление canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // Управление hreflang для мультиязычности
    const currentPath = window.location.pathname;
    const languages = ['uk', 'en', 'pl'];
    const existingHreflangs = document.querySelectorAll('link[rel="alternate"]');
    existingHreflangs.forEach(link => link.remove());

    languages.forEach(lang => {
      const hreflang = document.createElement('link');
      hreflang.setAttribute('rel', 'alternate');
      hreflang.setAttribute('hreflang', lang);
      hreflang.setAttribute('href', `${baseUrl}${currentPath}?lang=${lang}`);
      document.head.appendChild(hreflang);
    });

    // x-default hreflang
    const hreflangDefault = document.createElement('link');
    hreflangDefault.setAttribute('rel', 'alternate');
    hreflangDefault.setAttribute('hreflang', 'x-default');
    hreflangDefault.setAttribute('href', `${baseUrl}${currentPath}`);
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

    // Add specific bot meta tags for better crawling
    const updateBotMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateBotMeta('googlebot', robotsContent);
    updateBotMeta('bingbot', robotsContent);

  }, [title, description, keywords, ogImage, ogType, canonical, noindex, i18n.language]);
};
