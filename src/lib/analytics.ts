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

  // Meta Pixel base code
  (function (f: Window, b: Document, e: string, v: string, n: unknown, t: HTMLScriptElement, s: HTMLScriptElement) {
    if (f.fbq) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fbqFunc = function (this: any, ...args: unknown[]) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (fbqFunc as any).callMethod ? (fbqFunc as any).callMethod.apply(fbqFunc, args) : (fbqFunc as any).queue.push(args);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!f._fbq) f._fbq = fbqFunc as any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (fbqFunc as any).push = fbqFunc;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (fbqFunc as any).loaded = true;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (fbqFunc as any).version = '2.0';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (fbqFunc as any).queue = [];
    t = b.createElement(e) as HTMLScriptElement;
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0] as HTMLScriptElement;
    s.parentNode?.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js', null as unknown as never, null as unknown as HTMLScriptElement, null as unknown as HTMLScriptElement);

  window.fbq('init', FB_PIXEL_ID);
  window.fbq('track', 'PageView');
}
