
import React from 'react';
import { Code, Laptop, Palette, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-background text-foreground transition-colors" role="main">
      <div className="container mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('about.title1')} <span className="gradient-text">{t('about.title2')}</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('about.introduction')}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <figure className="relative">
            <div className="relative z-10">
              <img
                src="/lovable-uploads/92e41082-6122-4fc2-aa66-93635743b006.png"
                alt="Леонід Пампуха - веб-розробник та фахівець з AI розробки"
                className="rounded-2xl shadow-xl mx-auto"
                loading="lazy"
                width="400"
                height="500"
              />
            </div>
            <div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 rounded-2xl transform -rotate-3 -z-10"
              aria-hidden="true"
            ></div>
            <div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-teal/20 to-brand-yellow/20 rounded-2xl transform rotate-3 -z-10"
              aria-hidden="true"
            ></div>
          </figure>

          <article>
            <h3 className="text-2xl font-bold mb-6">{t('about.approach')}</h3>
            <p className="text-muted-foreground mb-8">
              {t('about.approachDescription')}
            </p>

            <div className="space-y-6" role="list">
              <div className="flex items-start" role="listitem">
                <div className="p-3 bg-brand-blue/10 rounded-lg mr-4" aria-hidden="true">
                  <Code className="text-brand-blue" size={24}/>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{t('about.cleanCode')}</h4>
                  <p className="text-gray-700">{t('about.cleanCodeDescription')}</p>
                </div>
              </div>

              <div className="flex items-start" role="listitem">
                <div className="p-3 bg-brand-teal/10 rounded-lg mr-4" aria-hidden="true">
                  <Laptop className="text-brand-teal" size={24}/>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{t('about.responsive')}</h4>
                  <p className="text-gray-700">{t('about.responsiveDescription')}</p>
                </div>
              </div>

              <div className="flex items-start" role="listitem">
                <div className="p-3 bg-brand-orange/10 rounded-lg mr-4" aria-hidden="true">
                  <Palette className="text-brand-orange" size={24}/>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{t('about.modern')}</h4>
                  <p className="text-gray-700">{t('about.modernDescription')}</p>
                </div>
              </div>

              <div className="flex items-start" role="listitem">
                <div className="p-3 bg-brand-purple/10 rounded-lg mr-4" aria-hidden="true">
                  <User className="text-brand-purple" size={24}/>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{t('about.clientFocused')}</h4>
                  <p className="text-gray-700">{t('about.clientFocusedDescription')}</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
