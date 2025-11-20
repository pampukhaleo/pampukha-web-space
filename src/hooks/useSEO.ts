
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
    
    // Add og:image with fallback
    const finalOgImage = ogImage || `${baseUrl}/leonforge_logo.png`;
    updateMetaProperty('og:image', finalOgImage);
    updateMetaProperty('og:image:alt', title || 'Leonforge - Web Development');
    updateMetaProperty('og:image:width', '1200');
    updateMetaProperty('og:image:height', '630');
    
    updateMetaProperty('og:type', ogType);
    updateMetaProperty('og:url', canonicalUrl);
    updateMetaProperty('og:locale', i18n.language === 'uk' ? 'uk_UA' : i18n.language === 'en' ? 'en_US' : 'pl_PL');
    updateMetaProperty('og:site_name', 'Leonforge');

    // Remove existing locale alternates and create new ones
    const existingLocaleAlternates = document.querySelectorAll('meta[property="og:locale:alternate"]');
    existingLocaleAlternates.forEach(meta => meta.remove());
    
    // Add locale alternates
    const locales = ['uk_UA', 'en_US', 'pl_PL'];
    locales.forEach(locale => {
      if (locale !== (i18n.language === 'uk' ? 'uk_UA' : i18n.language === 'en' ? 'en_US' : 'pl_PL')) {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:locale:alternate');
        meta.setAttribute('content', locale);
        document.head.appendChild(meta);
      }
    });

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
    updateTwitterMeta('twitter:url', canonicalUrl);
    if (title) updateTwitterMeta('twitter:title', title);
    if (description) updateTwitterMeta('twitter:description', description);
    updateTwitterMeta('twitter:image', finalOgImage);
    updateTwitterMeta('twitter:image:alt', title || 'Leonforge - Web Development');

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
    const languages = [
      { code: 'uk-UA', param: 'uk' }, 
      { code: 'en-US', param: 'en' }, 
      { code: 'pl-PL', param: 'pl' }
    ];
    const existingHreflangs = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingHreflangs.forEach(link => link.remove());

    languages.forEach(lang => {
      const hreflang = document.createElement('link');
      hreflang.setAttribute('rel', 'alternate');
      hreflang.setAttribute('hreflang', lang.code);
      hreflang.setAttribute('href', `${baseUrl}${currentPath}?lang=${lang.param}`);
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
    const updateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateMetaTag('googlebot', robotsContent);
    updateMetaTag('bingbot', robotsContent);
    updateMetaTag('revisit-after', '7 days');
    
    // Additional SEO meta tags
    updateMetaTag('author', 'Leonforge Development');
    updateMetaTag('generator', 'React + Vite');
    updateMetaTag('application-name', 'Leonforge');
    updateMetaTag('distribution', 'global');
    updateMetaTag('rating', 'general');
    
    // Enhanced keywords with more specific terms
    if (!keywords) {
      updateMetaTag('keywords', 'розробка SPA, React розробка, Leonforge, штучний інтелект, веб-розробка, одностранічні додатки, сучасні сайти, UI/UX дизайн, фронтенд розробка, мобільна адаптивність, SEO оптимізація');
    }

    // Track page views for SPA navigation
    window.gtag?.('event', 'page_view', {
      page_title: title || document.title,
      page_location: window.location.href,
      page_path: window.location.pathname,
    });

  }, [title, description, keywords, ogImage, ogType, canonical, noindex, i18n.language]);
};
