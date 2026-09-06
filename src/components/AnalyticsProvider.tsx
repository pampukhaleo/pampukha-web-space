import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useConsent } from '@/components/ConsentProvider';
import { initGA4, initPixel, trackPageViewGA4 } from '@/lib/analytics';

export const AnalyticsProvider = ({ children }: { children: React.ReactNode }) => {
  const { state, needsConsent } = useConsent();
  const { pathname } = useLocation();
  const initialized = useRef({ ga4: false, pixel: false });

  useEffect(() => {
    const allowed = !needsConsent || state === 'granted';
    if (!allowed) return;

    if (!initialized.current.ga4) {
      initGA4();
      initialized.current.ga4 = true;
    } else {
      trackPageViewGA4(pathname);
    }

    if (!initialized.current.pixel) {
      initPixel();
      initialized.current.pixel = true;
    }
  }, [state, needsConsent, pathname]);

  return <>{children}</>;
};
