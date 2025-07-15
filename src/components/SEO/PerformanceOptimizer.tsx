
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const PerformanceOptimizer = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Добавляем critical CSS inline если нужно
    const addCriticalCSS = () => {
      const criticalCSS = `
        /* Critical CSS для улучшения LCP */
        .hero-section { display: block; }
        .gradient-text { background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%); }
        .container { max-width: 1200px; margin: 0 auto; }
      `;
      
      let style = document.querySelector('#critical-css');
      if (!style) {
        style = document.createElement('style');
        style.id = 'critical-css';
        style.textContent = criticalCSS;
        document.head.insertBefore(style, document.head.firstChild);
      }
    };

    // Оптимизируем загрузку шрифтов
    const optimizeFonts = () => {
      const fontLinks = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
      fontLinks.forEach(link => {
        const linkElement = link as HTMLLinkElement;
        linkElement.setAttribute('rel', 'preload');
        linkElement.setAttribute('as', 'style');
        linkElement.setAttribute('onload', "this.onload=null;this.rel='stylesheet'");
      });
    };

    // Добавляем service worker для кеширования
    const registerServiceWorker = () => {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(() => {
          // Service worker не критичен для работы
        });
      }
    };

    addCriticalCSS();
    optimizeFonts();
    registerServiceWorker();
  }, [i18n.language]);

  return null;
};
