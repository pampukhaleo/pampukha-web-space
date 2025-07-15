
import { useEffect } from 'react';

export const SecurityHeaders = () => {
  useEffect(() => {
    // Добавляем CSP через meta tag (базовый уровень)
    let csp = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
    if (!csp) {
      csp = document.createElement('meta');
      csp.setAttribute('http-equiv', 'Content-Security-Policy');
      csp.setAttribute('content', 
        "default-src 'self'; " +
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.gpteng.co; " +
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
        "img-src 'self' data: https:; " +
        "font-src 'self' https://fonts.gstatic.com; " +
        "connect-src 'self' https:; " +
        "frame-ancestors 'none';"
      );
      document.head.appendChild(csp);
    }

    // Добавляем referrer policy
    let referrer = document.querySelector('meta[name="referrer"]');
    if (!referrer) {
      referrer = document.createElement('meta');
      referrer.setAttribute('name', 'referrer');
      referrer.setAttribute('content', 'strict-origin-when-cross-origin');
      document.head.appendChild(referrer);
    }
  }, []);

  return null;
};
