import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ContactForm } from '@/components/contact/ContactForm';
import { SEO } from '@/components/SEO/SEO';
import PageBreadcrumbs from '@/components/SEO/PageBreadcrumbs';
import LangLayout from '@/components/LangLayout';
import { UI } from '@/data/ui-copy';
import { contactPath, homePath, LANGS, type Lang } from '@/lib/i18n-routes';

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
  const altPaths = Object.fromEntries(
    LANGS.map((l) => [l, contactPath(l)]),
  ) as Record<Lang, string>;

  return (
    <LangLayout lang={lang} altPaths={altPaths}>
      <div className="min-h-screen">
        <SEO
          title={META[lang].title}
          description={META[lang].description}
          canonical={altPaths[lang]}
          altPaths={altPaths}
        />

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
              <p className="mb-10 text-lg text-muted-foreground leading-relaxed">{ui.contactLead}</p>

              <div className="mb-10 flex flex-wrap gap-6 text-sm">
                <a
                  href="https://t.me/leonforge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  Telegram: @leonforge
                </a>
                <a
                  href="mailto:leonforge.com@gmail.com"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={16} aria-hidden="true" />
                  leonforge.com@gmail.com
                </a>
              </div>

              <ContactForm />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </LangLayout>
  );
};

export default ContactPage;
