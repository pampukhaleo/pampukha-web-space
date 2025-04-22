
import React from 'react';
import { ContactForm } from './contact/ContactForm';
import { ContactInfoCard } from './contact/ContactInfoCard';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Замовити <span className="gradient-text">консультацію</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Готові обговорити ваш проект? Заповніть форму нижче або зв'яжіться зі мною
            будь-яким зручним для вас способом.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
