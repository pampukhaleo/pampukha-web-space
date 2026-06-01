import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, RefreshCw, Wallet } from 'lucide-react';

const GuaranteeSection = () => {
  const { t } = useTranslation();

  const items = [
    { icon: RefreshCw, key: 'item1' },
    { icon: ShieldCheck, key: 'item2' },
    { icon: Wallet, key: 'item3' },
  ];

  return (
    <section id="guarantee" className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            {t('guarantee.title1')} <span className="text-primary">{t('guarantee.title2')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('guarantee.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, key }) => (
            <div
              key={key}
              className="bg-card border border-border rounded-lg p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg mb-4">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t(`guarantee.${key}.title`)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(`guarantee.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
