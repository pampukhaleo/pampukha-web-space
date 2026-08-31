import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Clock, Tag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SEO } from '@/components/SEO/SEO';
import { JsonLd } from '@/components/SEO/JsonLd';
import PageBreadcrumbs from '@/components/SEO/PageBreadcrumbs';
import LangLayout from '@/components/LangLayout';
import { LazyImage } from '@/components/SEO/LazyImageLoader';
import { getService } from '@/data/services';
import { CASES } from '@/data/cases';
import { UI } from '@/data/ui-copy';
import {
  BASE_URL,
  casePath,
  homePath,
  LANGS,
  servicePath,
  type Lang,
} from '@/lib/i18n-routes';

interface ServicePageProps {
  lang: Lang;
  serviceId: string;
}

const ServicePage = ({ lang, serviceId }: ServicePageProps) => {
  const service = getService(serviceId)!;
  const c = service.content[lang];
  const ui = UI[lang];

  const altPaths = Object.fromEntries(
    LANGS.map((l) => [l, servicePath(l, service.slug[l])]),
  ) as Record<Lang, string>;

  const relatedCases = service.cases
    .map((slug) => CASES.find((cs) => cs.slug === slug))
    .filter(Boolean) as typeof CASES;

  const path = altPaths[lang];

  return (
    <LangLayout lang={lang} altPaths={altPaths}>
      <div className="min-h-screen">
        <SEO
          title={c.metaTitle}
          description={c.metaDescription}
          canonical={path}
          altPaths={altPaths}
        />
        <JsonLd
          id={`service-${service.id}`}
          data={[
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: c.h1,
              description: c.metaDescription,
              url: `${BASE_URL}${path}`,
              serviceType: c.h1,
              areaServed: ['UA', 'PL', 'EU'],
              provider: {
                '@type': 'Person',
                name: 'Leonid Pampukha',
                url: BASE_URL,
              },
              offers: {
                '@type': 'Offer',
                priceCurrency: 'USD',
                description: c.priceFrom,
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: c.faq.map((item) => ({
                '@type': 'Question',
                name: item.q,
                acceptedAnswer: { '@type': 'Answer', text: item.a },
              })),
            },
          ]}
        />

        <Navbar />

        <main className="pt-24">
          <div className="container mx-auto px-4">
            <PageBreadcrumbs
              items={[
                { label: ui.home, href: homePath(lang) },
                { label: ui.services, href: `${homePath(lang)}#services` },
                { label: c.navLabel },
              ]}
            />
          </div>

          {/* Hero */}
          <section className="px-4 pb-12 md:pb-16">
            <div className="container mx-auto max-w-4xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-6">
                {c.h1}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                {c.lead}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm">
                  <Tag size={14} className="text-primary" aria-hidden="true" />
                  <span className="text-muted-foreground">{ui.priceFrom}:</span>
                  <span className="font-medium text-foreground">{c.priceFrom}</span>
                </span>
                <span className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm">
                  <Clock size={14} className="text-primary" aria-hidden="true" />
                  <span className="text-muted-foreground">{ui.timeline}:</span>
                  <span className="font-medium text-foreground">{c.timeline}</span>
                </span>
              </div>

              <Button
                size="lg"
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                {ui.orderService}
              </Button>
            </div>
          </section>

          {/* Intro */}
          <section className="px-4 py-12 md:py-16 border-t border-border">
            <div className="container mx-auto max-w-3xl space-y-5">
              {c.intro.map((paragraph, i) => (
                <p key={i} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* Includes */}
          <section className="px-4 py-12 md:py-16 bg-muted/30 border-y border-border">
            <div className="container mx-auto max-w-5xl">
              <h2 className="text-2xl md:text-3xl font-semibold mb-10">{c.includesTitle}</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {c.includes.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-lg border border-border bg-card p-5"
                  >
                    <div className="flex items-start gap-3">
                      <Check size={18} className="mt-1 shrink-0 text-primary" aria-hidden="true" />
                      <div>
                        <h3 className="font-medium text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Related cases */}
          {relatedCases.length > 0 && (
            <section className="px-4 py-12 md:py-16">
              <div className="container mx-auto max-w-5xl">
                <h2 className="text-2xl md:text-3xl font-semibold mb-10">{ui.relatedCases}</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {relatedCases.map((cs) => (
                    <Link
                      key={cs.slug}
                      to={casePath(lang, cs.slug)}
                      className="group overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-primary/40"
                    >
                      <div className="aspect-[16/10] overflow-hidden bg-muted">
                        <LazyImage
                          src={cs.previewImage}
                          alt={cs.content[lang].title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-5">
                        <p className="mb-2 text-xs uppercase tracking-wider text-primary">
                          {cs.content[lang].category}
                        </p>
                        <h3 className="mb-2 text-lg font-semibold">{cs.content[lang].title}</h3>
                        <p className="line-clamp-2 text-sm text-muted-foreground">
                          {cs.content[lang].summary}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm text-primary">
                          {ui.viewCase}
                          <ArrowRight size={14} aria-hidden="true" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* FAQ */}
          <section className="px-4 py-12 md:py-16 border-t border-border">
            <div className="container mx-auto max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8">{ui.faqTitle}</h2>
              <Accordion type="single" collapsible className="w-full">
                {c.faq.map((item, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          <ContactSection />
        </main>

        <Footer />
      </div>
    </LangLayout>
  );
};

export default ServicePage;
