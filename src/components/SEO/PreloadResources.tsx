
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const PreloadResources = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Очищаем старые preload ссылки
    const existingPreloads = document.querySelectorAll('link[rel="preload"]');
    existingPreloads.forEach(link => link.remove());

    // Preload критических ресурсов с новым доменом
    const criticalResources = [
      {
        href: 'https://leonforge.com/lovable-uploads/843d695e-7086-4611-b3f0-bf18982fdfc3.png',
        as: 'image',
        type: 'image/png'
      },
      {
        href: 'https://leonforge.com/lovable-uploads/92e41082-6122-4fc2-aa66-93635743b006.png',
        as: 'image',
        type: 'image/png'
      }
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
      '//fonts.gstatic.com',
      '//cdn.gpteng.co'
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
