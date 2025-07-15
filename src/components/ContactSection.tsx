
import React from 'react';
import { ContactForm } from './contact/ContactForm';
import { useTranslation } from 'react-i18next';

const ContactSection = () => {
  const { t } = useTranslation();
  
  return (
    <section id="contact" className="py-16 md:py-24 px-4 bg-background" role="main">
      <div className="container mx-auto">
        <header className="text-center mb-16">
          <h2 className="section-heading">
            {t('contact.title1')} <span className="gradient-text">{t('contact.title2')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </header>

        <div role="region" aria-label="Форма обратной связи">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
