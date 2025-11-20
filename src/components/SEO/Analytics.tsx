import { useEffect } from 'react';
import { logger } from '@/lib/logger';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
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
    window.dataLayer?.push({
      event: action,
      event_category: 'User Engagement',
      event_label: section,
    });
    logger.info(`Interaction tracked: ${action} in ${section}`);
  };

  const trackFormSubmission = (formType: string) => {
    window.dataLayer?.push({
      event: 'form_submit',
      event_category: 'Lead Generation',
      event_label: formType,
    });
    logger.info(`Form submission tracked: ${formType}`);
  };

  const trackPortfolioView = (projectName: string) => {
    window.dataLayer?.push({
      event: 'portfolio_view',
      event_category: 'Portfolio Engagement',
      event_label: projectName,
    });
    logger.info(`Portfolio view tracked: ${projectName}`);
  };

  const trackCTAClick = (buttonText: string, section: string) => {
    window.dataLayer?.push({
      event: 'cta_click',
      event_category: 'CTA',
      event_label: buttonText,
      section: section,
    });
    logger.info(`CTA click tracked: ${buttonText} in ${section}`);
  };

  const trackScroll = (percentage: number) => {
    window.dataLayer?.push({
      event: 'scroll',
      event_category: 'Engagement',
      event_label: `${percentage}%`,
      value: percentage,
    });
    logger.info(`Scroll tracked: ${percentage}%`);
  };

  const trackPhoneClick = () => {
    window.dataLayer?.push({
      event: 'phone_click',
      event_category: 'Contact',
      event_label: 'Phone Number',
    });
    logger.info('Phone click tracked');
  };

  const trackEmailClick = () => {
    window.dataLayer?.push({
      event: 'email_click',
      event_category: 'Contact',
      event_label: 'Email',
    });
    logger.info('Email click tracked');
  };

  const trackTelegramClick = () => {
    window.dataLayer?.push({
      event: 'telegram_click',
      event_category: 'Contact',
      event_label: 'Telegram',
    });
    logger.info('Telegram click tracked');
  };

  const trackConversion = (conversionLabel: string, value?: number) => {
    // Note: Replace AW-XXXXXXXXXX with your actual Google Ads conversion ID
    window.dataLayer?.push({
      event: 'conversion',
      send_to: 'AW-XXXXXXXXXX/' + conversionLabel,
      value: value || 0,
      currency: 'USD',
    });
    logger.info(`Conversion tracked: ${conversionLabel}`);
  };

  return {
    trackInteraction,
    trackFormSubmission,
    trackPortfolioView,
    trackCTAClick,
    trackScroll,
    trackPhoneClick,
    trackEmailClick,
    trackTelegramClick,
    trackConversion,
  };
};