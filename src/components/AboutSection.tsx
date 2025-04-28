
import React from 'react';
import { Code, Laptop, Palette, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-background text-foreground transition-colors">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('about.title1')} <span className="gradient-text">{t('about.title2')}</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('about.introduction')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/lovable-uploads/92e41082-6122-4fc2-aa66-93635743b006.png"
                alt="Леонід Пампуха, Веб-розробник"
                className="rounded-2xl shadow-xl mx-auto"
              />
            </div>
            <div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 rounded-2xl transform -rotate-3 -z-10"></div>
            <div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-teal/20 to-brand-yellow/20 rounded-2xl transform rotate-3 -z-10"></div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">{t('about.approach')}</h3>
            <p className="text-muted-foreground mb-8">
              {t('about.approachDescription')}
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-brand-blue/10 rounded-lg mr-4">
                  <Code className="text-brand-blue" size={ 24 }/>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{t('about.cleanCode')}</h4>
                  <p className="text-gray-700">{t('about.cleanCodeDescription')}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-brand-teal/10 rounded-lg mr-4">
                  <Laptop className="text-brand-teal" size={ 24 }/>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{t('about.responsive')}</h4>
                  <p className="text-gray-700">{t('about.responsiveDescription')}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-brand-orange/10 rounded-lg mr-4">
                  <Palette className="text-brand-orange" size={ 24 }/>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{t('about.modern')}</h4>
                  <p className="text-gray-700">{t('about.modernDescription')}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-brand-purple/10 rounded-lg mr-4">
                  <User className="text-brand-purple" size={ 24 }/>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{t('about.clientFocused')}</h4>
                  <p className="text-gray-700">{t('about.clientFocusedDescription')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
