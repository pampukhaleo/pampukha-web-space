
import React from 'react';
import { Code, Laptop, Palette, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-background" role="main">
      <div className="container mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            {t('about.title1')} <span className="text-primary">{t('about.title2')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('about.introduction')}
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-xl font-semibold mb-4">{t('about.approach')}</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('about.approachDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
            <div className="p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-200 bg-card" role="listitem">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-muted rounded-lg flex-shrink-0" aria-hidden="true">
                  <Code className="text-foreground" size={24}/>
                </div>
                <h4 className="font-semibold">{t('about.cleanCode')}</h4>
              </div>
              <p className="text-sm text-muted-foreground">{t('about.cleanCodeDescription')}</p>
            </div>

            <div className="p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-200 bg-card" role="listitem">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-muted rounded-lg flex-shrink-0" aria-hidden="true">
                  <Laptop className="text-foreground" size={24}/>
                </div>
                <h4 className="font-semibold">{t('about.responsive')}</h4>
              </div>
              <p className="text-sm text-muted-foreground">{t('about.responsiveDescription')}</p>
            </div>

            <div className="p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-200 bg-card" role="listitem">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-muted rounded-lg flex-shrink-0" aria-hidden="true">
                  <Palette className="text-foreground" size={24}/>
                </div>
                <h4 className="font-semibold">{t('about.modern')}</h4>
              </div>
              <p className="text-sm text-muted-foreground">{t('about.modernDescription')}</p>
            </div>

            <div className="p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-200 bg-card" role="listitem">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-muted rounded-lg flex-shrink-0" aria-hidden="true">
                  <User className="text-foreground" size={24}/>
                </div>
                <h4 className="font-semibold">{t('about.clientFocused')}</h4>
              </div>
              <p className="text-sm text-muted-foreground">{t('about.clientFocusedDescription')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
