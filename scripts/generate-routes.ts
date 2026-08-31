// Generates public/sitemap.xml and prerender-routes.json from the app's data files.
// Runs before dev and build (predev / prebuild).

import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { SERVICES } from '../src/data/services';
import { CASES } from '../src/data/cases';
import {
  BASE_URL,
  HREFLANG,
  LANGS,
  casePath,
  contactPath,
  homePath,
  pricingPath,
  servicePath,
  type Lang,
} from '../src/lib/i18n-routes';

interface Entry {
  /** path per language — used for both <loc> and hreflang alternates */
  paths: Record<Lang, string>;
  changefreq: string;
  priority: string;
}

const entries: Entry[] = [
  {
    paths: Object.fromEntries(LANGS.map((l) => [l, homePath(l)])) as Record<Lang, string>,
    changefreq: 'weekly',
    priority: '1.0',
  },
  ...SERVICES.map((service) => ({
    paths: Object.fromEntries(
      LANGS.map((l) => [l, servicePath(l, service.slug[l])]),
    ) as Record<Lang, string>,
    changefreq: 'monthly',
    priority: '0.9',
  })),
  {
    paths: Object.fromEntries(LANGS.map((l) => [l, pricingPath(l)])) as Record<Lang, string>,
    changefreq: 'monthly',
    priority: '0.8',
  },
  ...CASES.map((study) => ({
    paths: Object.fromEntries(
      LANGS.map((l) => [l, casePath(l, study.slug)]),
    ) as Record<Lang, string>,
    changefreq: 'yearly',
    priority: '0.7',
  })),
  {
    paths: Object.fromEntries(LANGS.map((l) => [l, contactPath(l)])) as Record<Lang, string>,
    changefreq: 'monthly',
    priority: '0.6',
  },
];

const urls = entries.flatMap((entry) =>
  LANGS.map((lang) =>
    [
      '  <url>',
      `    <loc>${BASE_URL}${entry.paths[lang]}</loc>`,
      `    <changefreq>${entry.changefreq}</changefreq>`,
      `    <priority>${entry.priority}</priority>`,
      ...LANGS.map(
        (alt) =>
          `    <xhtml:link rel="alternate" hreflang="${HREFLANG[alt]}" href="${BASE_URL}${entry.paths[alt]}"/>`,
      ),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${entry.paths.uk}"/>`,
      '  </url>',
    ].join('\n'),
  ),
);

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
  '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ...urls,
  '</urlset>',
  '',
].join('\n');

writeFileSync(resolve('public/sitemap.xml'), sitemap);

// '/' redirects to the default language — prerender it too so crawlers get real HTML.
const routes = ['/', ...entries.flatMap((entry) => LANGS.map((lang) => entry.paths[lang]))];
writeFileSync(resolve('prerender-routes.json'), `${JSON.stringify(routes, null, 2)}\n`);

console.log(`sitemap.xml written (${routes.length} urls); prerender-routes.json written`);
