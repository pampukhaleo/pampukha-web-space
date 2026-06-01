import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, Palette, Code2, Rocket } from 'lucide-react';

const ProcessSection = () => {
  const { t } = useTranslation();

  const steps = [
    { icon: MessageCircle, key: 'step1' },
    { icon: Palette, key: 'step2' },
    { icon: Code2, key: 'step3' },
    { icon: Rocket, key: 'step4' },
  ];

  return (
    <section id="process" className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            {t('process.title1')} <span className="text-primary">{t('process.title2')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('process.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, key }) => (
            <div
              key={key}
              className="bg-card border border-border rounded-lg p-6 relative"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-3xl font-bold text-muted-foreground/30">
                  {t(`process.${key}.number`)}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t(`process.${key}.title`)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(`process.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
