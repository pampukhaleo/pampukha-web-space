
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
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('about.introduction')}
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4 gradient-text">{t('about.approach')}</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('about.approachDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" role="list">
            <div className="card-gradient p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105" role="listitem">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-brand-blue/10 rounded-xl mr-4 flex-shrink-0" aria-hidden="true">
                  <Code className="text-brand-blue" size={28}/>
                </div>
                <h4 className="font-semibold text-lg">{t('about.cleanCode')}</h4>
              </div>
              <p className="text-muted-foreground">{t('about.cleanCodeDescription')}</p>
            </div>

            <div className="card-gradient p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105" role="listitem">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-brand-teal/10 rounded-xl mr-4 flex-shrink-0" aria-hidden="true">
                  <Laptop className="text-brand-teal" size={28}/>
                </div>
                <h4 className="font-semibold text-lg">{t('about.responsive')}</h4>
              </div>
              <p className="text-muted-foreground">{t('about.responsiveDescription')}</p>
            </div>

            <div className="card-gradient p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105" role="listitem">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-brand-orange/10 rounded-xl mr-4 flex-shrink-0" aria-hidden="true">
                  <Palette className="text-brand-orange" size={28}/>
                </div>
                <h4 className="font-semibold text-lg">{t('about.modern')}</h4>
              </div>
              <p className="text-muted-foreground">{t('about.modernDescription')}</p>
            </div>

            <div className="card-gradient p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105" role="listitem">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-brand-purple/10 rounded-xl mr-4 flex-shrink-0" aria-hidden="true">
                  <User className="text-brand-purple" size={28}/>
                </div>
                <h4 className="font-semibold text-lg">{t('about.clientFocused')}</h4>
              </div>
              <p className="text-muted-foreground">{t('about.clientFocusedDescription')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
