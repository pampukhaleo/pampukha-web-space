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

    // Оптимизируем загрузку шрифтов с правильным preload
    const optimizeFonts = () => {
      // Удаляем старые font preload'ы
      const oldFontPreloads = document.querySelectorAll('link[href*="fonts.googleapis.com"][rel="preload"]');
      oldFontPreloads.forEach(link => link.remove());

      // Добавляем preconnect для Google Fonts
      const preconnectGoogle = document.createElement('link');
      preconnectGoogle.rel = 'preconnect';
      preconnectGoogle.href = 'https://fonts.googleapis.com';
      if (!document.querySelector('link[rel="preconnect"][href="https://fonts.googleapis.com"]')) {
        document.head.appendChild(preconnectGoogle);
      }

      const preconnectGstatic = document.createElement('link');
      preconnectGstatic.rel = 'preconnect';
      preconnectGstatic.href = 'https://fonts.gstatic.com';
      preconnectGstatic.crossOrigin = 'anonymous';
      if (!document.querySelector('link[rel="preconnect"][href="https://fonts.gstatic.com"]')) {
        document.head.appendChild(preconnectGstatic);
      }
    };

    // Улучшенная регистрация service worker
    const registerServiceWorker = async () => {
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          console.log('Service Worker registered successfully:', registration);
        } catch (error) {
          console.warn('Service Worker registration failed:', error);
        }
      }
    };

    addCriticalCSS();
    optimizeFonts();
    registerServiceWorker();
  }, [i18n.language]);

  return null;
};
