import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO/SEO';
import { JsonLd } from '@/components/SEO/JsonLd';
import PageBreadcrumbs from '@/components/SEO/PageBreadcrumbs';
import LangLayout from '@/components/LangLayout';
import { LazyImage } from '@/components/SEO/LazyImageLoader';
import { CASES, findCase } from '@/data/cases';
import { UI } from '@/data/ui-copy';
import { BASE_URL, casePath, homePath, LANGS, type Lang } from '@/lib/i18n-routes';

interface CasePageProps {
  lang: Lang;
  slug: string;
}

const CasePage = ({ lang, slug }: CasePageProps) => {
  const study = findCase(slug)!;
  const c = study.content[lang];
  const ui = UI[lang];

  const altPaths = Object.fromEntries(
    LANGS.map((l) => [l, casePath(l, study.slug)]),
  ) as Record<Lang, string>;

  const index = CASES.findIndex((x) => x.slug === study.slug);
  const next = CASES[(index + 1) % CASES.length];

  return (
    <LangLayout lang={lang} altPaths={altPaths}>
      <div className="min-h-screen">
        <SEO
          title={c.metaTitle}
          description={c.metaDescription}
          canonical={altPaths[lang]}
          altPaths={altPaths}
          ogType="article"
          ogImage={`${BASE_URL}${study.previewImage}`}
        />
        <JsonLd
          id={`case-${study.slug}`}
          data={{
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: c.title,
            description: c.summary,
            url: `${BASE_URL}${altPaths[lang]}`,
            image: `${BASE_URL}${study.previewImage}`,
            dateCreated: study.year,
            creator: { '@type': 'Person', name: 'Leonid Pampukha', url: BASE_URL },
          }}
        />

        <Navbar />

        <main className="pt-24">
          <div className="container mx-auto px-4">
            <PageBreadcrumbs
              items={[
                { label: ui.home, href: homePath(lang) },
                { label: ui.cases, href: `${homePath(lang)}#portfolio` },
                { label: c.title },
              ]}
            />
          </div>

          <section className="px-4 pb-10">
            <div className="container mx-auto max-w-4xl">
              <p className="mb-3 text-xs uppercase tracking-wider text-primary">{c.category}</p>
              <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                {c.title}
              </h1>
              <p className="mb-8 text-lg text-muted-foreground leading-relaxed">{c.summary}</p>

              <dl className="mb-8 flex flex-wrap gap-x-10 gap-y-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">{ui.country}</dt>
                  <dd className="font-medium text-foreground">{study.country[lang]}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">{ui.year}</dt>
                  <dd className="font-medium text-foreground">{study.year}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">{ui.services}</dt>
                  <dd className="font-medium text-foreground">{c.tags.join(' · ')}</dd>
                </div>
              </dl>

              <Button asChild variant="outline">
                <a href={study.liveUrl} target="_blank" rel="noopener noreferrer">
                  {ui.visitSite}
                  <ExternalLink size={14} className="ml-2" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </section>

          <section className="px-4 pb-12">
            <div className="container mx-auto max-w-5xl overflow-hidden rounded-lg border border-border bg-muted">
              <LazyImage
                src={study.desktopImage}
                alt={c.title}
                className="w-full"
                loading="eager"
                priority
              />
            </div>
          </section>

          <section className="border-y border-border bg-muted/30 px-4 py-12 md:py-16">
            <div className="container mx-auto max-w-3xl space-y-10">
              <div>
                <h2 className="mb-3 text-xl md:text-2xl font-semibold">{ui.task}</h2>
                <p className="text-muted-foreground leading-relaxed">{c.task}</p>
              </div>
              <div>
                <h2 className="mb-3 text-xl md:text-2xl font-semibold">{ui.solution}</h2>
                <p className="text-muted-foreground leading-relaxed">{c.solution}</p>
              </div>
              <div>
                <h2 className="mb-3 text-xl md:text-2xl font-semibold">{ui.result}</h2>
                <p className="text-muted-foreground leading-relaxed">{c.result}</p>
              </div>
            </div>
          </section>

          <section className="px-4 py-12 md:py-16">
            <div className="container mx-auto max-w-3xl">
              <h2 className="mb-8 text-xl md:text-2xl font-semibold">{ui.whatWasDone}</h2>
              <ul className="space-y-3">
                {c.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={18} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="border-t border-border px-4 py-10">
            <div className="container mx-auto max-w-3xl">
              <Link
                to={casePath(lang, next.slug)}
                className="group flex items-center justify-between gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {ui.nextCase}
                  </p>
                  <p className="mt-1 font-medium text-foreground">{next.content[lang].title}</p>
                </div>
                <ArrowRight size={18} className="shrink-0 text-primary" aria-hidden="true" />
              </Link>
            </div>
          </section>

          <ContactSection />
        </main>

        <Footer />
      </div>
    </LangLayout>
  );
};

export default CasePage;
