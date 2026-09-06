import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

const CONSENT_KEY = 'leonforge_tracking_consent';

// EU/EEA, EFTA and UK — regions where consent is required before tracking.
const CONSENT_REQUIRED_COUNTRIES = new Set([
  // EU/EEA
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT',
  'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE',
  // EFTA
  'CH', 'IS', 'LI', 'NO',
  // UK
  'GB', 'UK',
]);

type ConsentState = 'undetermined' | 'granted' | 'denied';

interface ConsentContextValue {
  state: ConsentState;
  needsConsent: boolean;
  showBanner: boolean;
  accept: () => void;
  deny: () => void;
}

const ConsentContext = createContext<ConsentContextValue | null>(null);

async function fetchCountry(): Promise<string | null> {
  try {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 2000);
    const res = await fetch('/cdn-cgi/trace', { signal: controller.signal });
    window.clearTimeout(timeout);
    if (!res.ok) return null;
    const text = await res.text();
    const match = text.match(/^loc=(.+)$/m);
    return match?.[1]?.trim().toUpperCase() || null;
  } catch {
    return null;
  }
}

export const ConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [country, setCountry] = useState<string | null>(null);
  const [saved, setSaved] = useState<ConsentState | null>(() => {
    try {
      return (localStorage.getItem(CONSENT_KEY) as ConsentState | null) ?? null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    fetchCountry().then(setCountry);
  }, []);

  const setConsent = useCallback((state: ConsentState) => {
    try {
      localStorage.setItem(CONSENT_KEY, state);
    } catch {
      // ignore
    }
    setSaved(state);
  }, []);

  const accept = useCallback(() => setConsent('granted'), [setConsent]);
  const deny = useCallback(() => setConsent('denied'), [setConsent]);

  // Fail open: if we cannot determine the country, show the banner.
  const needsConsent = country ? CONSENT_REQUIRED_COUNTRIES.has(country) : true;
  const showBanner = needsConsent && saved === null;
  const state = saved ?? 'undetermined';

  return (
    <ConsentContext.Provider value={{ state, needsConsent, showBanner, accept, deny }}>
      {children}
    </ConsentContext.Provider>
  );
};

export function useConsent(): ConsentContextValue {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    throw new Error('useConsent must be used within ConsentProvider');
  }
  return ctx;
}
