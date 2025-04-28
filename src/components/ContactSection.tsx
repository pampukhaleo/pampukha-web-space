
import React from 'react';
import { ContactForm } from './contact/ContactForm';
import { useTranslation } from 'react-i18next';

const ContactSection = () => {
  const { t } = useTranslation();
  
  return (
    <section id="contact" className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            {t('contact.title1')} <span className="gradient-text">{t('contact.title2')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
