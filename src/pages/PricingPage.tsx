import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
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
import { PRICING_COPY, PRICING_PLANS } from '@/data/pricing';
import { getService } from '@/data/services';
import { UI } from '@/data/ui-copy';
import {
  BASE_URL,
  homePath,
  LANGS,
  pricingPath,
  servicePath,
  type Lang,
} from '@/lib/i18n-routes';

interface PricingPageProps {
  lang: Lang;
}

const PricingPage = ({ lang }: PricingPageProps) => {
  const copy = PRICING_COPY[lang];
  const ui = UI[lang];
  const altPaths = Object.fromEntries(
    LANGS.map((l) => [l, pricingPath(l)]),
  ) as Record<Lang, string>;

  return (
    <LangLayout lang={lang} altPaths={altPaths}>
      <div className="min-h-screen">
        <SEO
          title={copy.metaTitle}
          description={copy.metaDescription}
          canonical={altPaths[lang]}
          altPaths={altPaths}
        />
        <JsonLd
          id="pricing"
          data={[
            {
              '@context': 'https://schema.org',
              '@type': 'OfferCatalog',
              name: copy.h1,
              url: `${BASE_URL}${altPaths[lang]}`,
              itemListElement: PRICING_PLANS.map((plan, i) => ({
                '@type': 'Offer',
                position: i + 1,
                name: plan.content[lang].name,
                description: plan.content[lang].summary,
                priceCurrency: 'USD',
                price: plan.content[lang].price.replace(/[^0-9]/g, ''),
              })),
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: copy.faq.map((item) => ({
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
              items={[{ label: ui.home, href: homePath(lang) }, { label: ui.pricing }]}
            />
          </div>

          <section className="px-4 pb-12">
            <div className="container mx-auto max-w-3xl">
              <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                {copy.h1}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">{copy.lead}</p>
            </div>
          </section>

          <section className="px-4 pb-16">
            <div className="container mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
              {PRICING_PLANS.map((plan) => {
                const p = plan.content[lang];
                const service = getService(plan.serviceId);
                return (
                  <article
                    key={plan.id}
                    className={`relative flex flex-col rounded-lg border bg-card p-6 ${
                      plan.featured ? 'border-primary' : 'border-border'
                    }`}
                  >
                    {plan.featured && (
                      <span className="absolute -top-3 left-6 rounded-md bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                        {ui.popular}
                      </span>
                    )}
                    <h2 className="text-xl font-semibold">{p.name}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
                    <p className="mt-6 text-3xl font-semibold text-foreground">{p.price}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {ui.timeline}: {p.timeline}
                    </p>
                    <ul className="mt-6 flex-1 space-y-3">
                      {p.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <Check size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 space-y-2">
                      <Button
                        className="w-full"
                        variant={plan.featured ? 'default' : 'outline'}
                        onClick={() =>
                          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                        }
                      >
                        {copy.cta}
                      </Button>
                      {service && (
                        <Link
                          to={servicePath(lang, service.slug[lang])}
                          className="block text-center text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {service.content[lang].navLabel}
                        </Link>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="border-y border-border bg-muted/30 px-4 py-10">
            <div className="container mx-auto max-w-3xl">
              <p className="text-sm text-muted-foreground leading-relaxed">{copy.note}</p>
            </div>
          </section>

          <section className="px-4 py-12 md:py-16">
            <div className="container mx-auto max-w-3xl">
              <h2 className="mb-8 text-2xl md:text-3xl font-semibold">{copy.faqTitle}</h2>
              <Accordion type="single" collapsible className="w-full">
                {copy.faq.map((item, i) => (
                  <AccordionItem key={i} value={`price-faq-${i}`}>
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

export default PricingPage;
