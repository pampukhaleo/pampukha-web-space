const GA_ID = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY as string | undefined;
const FB_PIXEL_ID = '247977289845698';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    fbq: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

export function initGA4() {
  if (typeof document === 'undefined' || !GA_ID) return;
  if (typeof window.gtag === 'function') return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID);

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
}

export function trackPageViewGA4(path: string) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', { page_path: path });
  }
}

export function trackFormSubmission() {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'form_submission');
  }
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Lead');
  }
}

export function trackTelegram() {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'telegram');
  }
}

export function initPixel() {
  if (typeof document === 'undefined') return;
  if (typeof window.fbq === 'function') return;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  if (w.fbq) return;
  w.fbq = function () {
    w.fbq.callMethod ? w.fbq.callMethod.apply(w.fbq, arguments) : w.fbq.queue.push(arguments);
  };
  if (!w._fbq) w._fbq = w.fbq;
  w.fbq.push = w.fbq;
  w.fbq.loaded = true;
  w.fbq.version = '2.0';
  w.fbq.queue = [];
  const t = document.createElement('script');
  t.async = true;
  t.src = 'https://connect.facebook.net/en_US/fbevents.js';
  const s = document.getElementsByTagName('script')[0];
  s.parentNode?.insertBefore(t, s);
  w.fbq('init', FB_PIXEL_ID);
  w.fbq('track', 'PageView');
}
