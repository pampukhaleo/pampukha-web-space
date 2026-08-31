export const LANGS = ['uk', 'en', 'pl'] as const;
export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = 'uk';
export const BASE_URL = 'https://leonforge.com';

export const HREFLANG: Record<Lang, string> = {
  uk: 'uk-UA',
  en: 'en-US',
  pl: 'pl-PL',
};

export const OG_LOCALE: Record<Lang, string> = {
  uk: 'uk_UA',
  en: 'en_US',
  pl: 'pl_PL',
};

/** Section slugs, localised per language. */
export const SEGMENTS = {
  services: { uk: 'poslugy', en: 'services', pl: 'uslugi' },
  cases: { uk: 'keysy', en: 'cases', pl: 'realizacje' },
  pricing: { uk: 'tsiny', en: 'pricing', pl: 'cennik' },
  contact: { uk: 'kontakty', en: 'contact', pl: 'kontakt' },
} as const;

export const isLang = (value: string | undefined): value is Lang =>
  !!value && (LANGS as readonly string[]).includes(value);

export const homePath = (lang: Lang) => `/${lang}`;
export const pricingPath = (lang: Lang) => `/${lang}/${SEGMENTS.pricing[lang]}`;
export const contactPath = (lang: Lang) => `/${lang}/${SEGMENTS.contact[lang]}`;
export const servicePath = (lang: Lang, slug: string) =>
  `/${lang}/${SEGMENTS.services[lang]}/${slug}`;
export const casePath = (lang: Lang, slug: string) =>
  `/${lang}/${SEGMENTS.cases[lang]}/${slug}`;

/** Language prefix of the current pathname, or null when absent. */
export const langFromPath = (pathname: string): Lang | null => {
  const first = pathname.split('/').filter(Boolean)[0];
  return isLang(first) ? first : null;
};
