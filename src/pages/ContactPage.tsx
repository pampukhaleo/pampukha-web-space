import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Mail, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ContactForm } from '@/components/contact/ContactForm';
import { SEO } from '@/components/SEO/SEO';
import { JsonLd } from '@/components/SEO/JsonLd';
import PageBreadcrumbs from '@/components/SEO/PageBreadcrumbs';
import LangLayout from '@/components/LangLayout';
import { UI } from '@/data/ui-copy';
import { CONTACT_COPY } from '@/data/contact-copy';
import { getService } from '@/data/services';
import { trackTelegram } from '@/lib/analytics';
import {
  contactPath,
  homePath,
  pricingPath,
  servicePath,
  LANGS,
  type Lang,
} from '@/lib/i18n-routes';

const META: Record<Lang, { title: string; description: string }> = {
  uk: {
    title: 'Контакти — замовити сайт, SEO або рекламу | Leonforge',
    description:
      'Напишіть у Telegram або залиште заявку: обговоримо завдання, терміни й ціну. Перша консультація безкоштовна.',
  },
  en: {
    title: 'Contact — order a website, SEO or ads | Leonforge',
    description:
      'Message me on Telegram or send a request: we discuss the task, timeline and price. The first call is free.',
  },
  pl: {
    title: 'Kontakt — strona, SEO lub reklama | Leonforge',
    description:
      'Napisz na Telegramie lub wyślij zapytanie: omówimy zakres, termin i cenę. Pierwsza rozmowa jest bezpłatna.',
  },
};

const ContactPage = ({ lang }: { lang: Lang }) => {
  const ui = UI[lang];
  const copy = CONTACT_COPY[lang];
  const altPaths = Object.fromEntries(
    LANGS.map((l) => [l, contactPath(l)]),
  ) as Record<Lang, string>;

  const landing = getService('landing');
  const websites = getService('websites');
  const seo = getService('seo');

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: copy.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <LangLayout lang={lang} altPaths={altPaths}>
      <div className="min-h-screen">
        <SEO
          title={META[lang].title}
          description={META[lang].description}
          canonical={altPaths[lang]}
          altPaths={altPaths}
        />
        <JsonLd id="contact-faq" data={faqJsonLd} />

        <Navbar />

        <main className="pt-24">
          <div className="container mx-auto px-4">
            <PageBreadcrumbs
              items={[{ label: ui.home, href: homePath(lang) }, { label: ui.contact }]}
            />
          </div>

          <section id="contact" className="px-4 py-10 md:py-16">
            <div className="container mx-auto max-w-3xl">
              <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                {ui.contactTitle}
              </h1>
              <p className="mb-6 text-lg text-muted-foreground leading-relaxed">{ui.contactLead}</p>

              <div className="mb-12 space-y-4 text-base text-muted-foreground leading-relaxed">
                {copy.intro.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              <section className="mb-12" aria-labelledby="contact-channels">
                <h2 id="contact-channels" className="mb-3 text-xl md:text-2xl font-semibold">
                  {copy.channelsTitle}
                </h2>
                <p className="mb-5 text-muted-foreground">{copy.channelsNote}</p>

                <div className="mb-5 flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:gap-6">
                  <span className="inline-flex flex-wrap items-center gap-2">
                    <a
                      href="https://t.me/leonforge"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={trackTelegram}
                      className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                    >
                      <MessageCircle size={16} aria-hidden="true" />
                      Telegram: @leonforge
                    </a>
                    <span className="text-muted-foreground">— {copy.telegramNote}</span>
                  </span>
                  <span className="inline-flex flex-wrap items-center gap-2">
                    <a
                      href="mailto:leonforge.com@gmail.com"
                      className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                    >
                      <Mail size={16} aria-hidden="true" />
                      leonforge.com@gmail.com
                    </a>
                    <span className="text-muted-foreground">— {copy.emailNote}</span>
                  </span>
                </div>

                <p className="text-sm text-muted-foreground">{copy.formNote}</p>
                <p className="text-sm text-muted-foreground">{copy.hours}</p>
                <p className="text-sm text-muted-foreground">{copy.languages}</p>
              </section>

              <section className="mb-12" aria-labelledby="contact-steps">
                <h2 id="contact-steps" className="mb-5 text-xl md:text-2xl font-semibold">
                  {copy.stepsTitle}
                </h2>
                <ol className="space-y-4">
                  {copy.steps.map((step, i) => (
                    <li key={step.title} className="flex gap-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-sm text-muted-foreground">
                        {i + 1}
                      </span>
                      <span>
                        <span className="block font-medium">{step.title}</span>
                        <span className="block text-sm text-muted-foreground leading-relaxed">
                          {step.text}
                        </span>
                      </span>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="mb-12" aria-labelledby="contact-brief">
                <h2 id="contact-brief" className="mb-3 text-xl md:text-2xl font-semibold">
                  {copy.briefTitle}
                </h2>
                <p className="mb-4 text-muted-foreground">{copy.briefLead}</p>
                <ul className="space-y-2">
                  {copy.brief.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                      <Check size={16} className="mt-1 shrink-0 text-primary" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <ContactForm />

              <section className="mt-14" aria-labelledby="contact-faq-title">
                <h2 id="contact-faq-title" className="mb-5 text-xl md:text-2xl font-semibold">
                  {copy.faqTitle}
                </h2>
                <div className="space-y-6">
                  {copy.faq.map((item) => (
                    <div key={item.q}>
                      <h3 className="mb-2 font-medium">{item.q}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              <nav className="mt-12 border-t border-border pt-6" aria-labelledby="contact-links">
                <h2 id="contact-links" className="mb-3 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  {copy.linksTitle}
                </h2>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  <Link to={pricingPath(lang)} className="text-muted-foreground hover:text-primary transition-colors">
                    {copy.pricingLink}
                  </Link>
                  {landing && (
                    <Link
                      to={servicePath(lang, landing.slug[lang])}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {copy.landingLink}
                    </Link>
                  )}
                  {websites && (
                    <Link
                      to={servicePath(lang, websites.slug[lang])}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {copy.websitesLink}
                    </Link>
                  )}
                  {seo && (
                    <Link
                      to={servicePath(lang, seo.slug[lang])}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {copy.seoLink}
                    </Link>
                  )}
                </div>
              </nav>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </LangLayout>
  );
};

export default ContactPage;
