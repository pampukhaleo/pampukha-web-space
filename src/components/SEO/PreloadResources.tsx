
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const PreloadResources = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Очищаем старые preload ссылки
    const existingPreloads = document.querySelectorAll('link[rel="preload"]');
    existingPreloads.forEach(link => link.remove());

    // Preload критических ресурсов с правильными as атрибутами
    const criticalResources = [
      {
        href: 'https://leonforge.com/leonforge_logo.png',
        as: 'image',
        type: 'image/png'
      },
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) link.type = resource.type;
      document.head.appendChild(link);
    });

    // DNS prefetch для внешних ресурсов
    const dnsPrefetchDomains = [
      '//fonts.googleapis.com',
      '//fonts.gstatic.com'
    ];

    dnsPrefetchDomains.forEach(domain => {
      let link = document.querySelector(`link[rel="dns-prefetch"][href="${domain}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        document.head.appendChild(link);
      }
    });
  }, [i18n.language]);

  return null;
};
