import { useEffect } from 'react';
import { logger } from '@/lib/logger';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// SEO Performance tracking
export const useAnalytics = () => {
  useEffect(() => {
    // Track Core Web Vitals
    const trackWebVitals = () => {
      if ('web-vital' in window) {
        import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
          onCLS((metric) => {
            window.gtag?.('event', 'web_vitals', {
              name: metric.name,
              value: Math.round(metric.value * 1000),
              event_category: 'Web Vitals',
              non_interaction: true,
            });
            logger.info('CLS:', metric.value);
          });
          
          onINP((metric) => {
            window.gtag?.('event', 'web_vitals', {
              name: metric.name,
              value: Math.round(metric.value),
              event_category: 'Web Vitals',
              non_interaction: true,
            });
            logger.info('INP:', metric.value);
          });
          
          onFCP((metric) => {
            window.gtag?.('event', 'web_vitals', {
              name: metric.name,
              value: Math.round(metric.value),
              event_category: 'Web Vitals',
              non_interaction: true,
            });
            logger.info('FCP:', metric.value);
          });
          
          onLCP((metric) => {
            window.gtag?.('event', 'web_vitals', {
              name: metric.name,
              value: Math.round(metric.value),
              event_category: 'Web Vitals',
              non_interaction: true,
            });
            logger.info('LCP:', metric.value);
          });
          
          onTTFB((metric) => {
            window.gtag?.('event', 'web_vitals', {
              name: metric.name,
              value: Math.round(metric.value),
              event_category: 'Web Vitals',
              non_interaction: true,
            });
            logger.info('TTFB:', metric.value);
          });
        }).catch((error) => {
          logger.error('Failed to load web-vitals:', error);
        });
      }
    };

    // Track performance when page loads
    if (document.readyState === 'complete') {
      trackWebVitals();
    } else {
      window.addEventListener('load', trackWebVitals);
    }

    return () => {
      window.removeEventListener('load', trackWebVitals);
    };
  }, []);

  // Track user interactions for SEO insights
  const trackInteraction = (action: string, section: string) => {
    window.gtag?.('event', action, {
      event_category: 'User Engagement',
      event_label: section,
    });
    logger.info(`Interaction tracked: ${action} in ${section}`);
  };

  const trackFormSubmission = (formType: string) => {
    window.gtag?.('event', 'form_submit', {
      event_category: 'Lead Generation',
      event_label: formType,
    });
    logger.info(`Form submission tracked: ${formType}`);
  };

  const trackPortfolioView = (projectName: string) => {
    window.gtag?.('event', 'portfolio_view', {
      event_category: 'Portfolio Engagement',
      event_label: projectName,
    });
    logger.info(`Portfolio view tracked: ${projectName}`);
  };

  return {
    trackInteraction,
    trackFormSubmission,
    trackPortfolioView
  };
};