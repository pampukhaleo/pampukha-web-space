
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Code2, Smartphone, Zap } from 'lucide-react';

const TechnicalBenefitsSection = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-16 bg-muted/30 rounded-xl p-8">
      <h3 className="text-2xl font-bold mb-8 text-center">{t('whyAiSpa.technicalBenefits.title')}</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-blue/10 rounded-lg mb-4">
            <Code2 className="w-8 h-8 text-brand-blue" />
          </div>
          <h4 className="text-lg font-semibold mb-4 text-brand-blue">{t('whyAiSpa.technicalBenefits.react.title')}</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>✓ {t('whyAiSpa.technicalBenefits.react.point1')}</li>
            <li>✓ {t('whyAiSpa.technicalBenefits.react.point2')}</li>
            <li>✓ {t('whyAiSpa.technicalBenefits.react.point3')}</li>
            <li>✓ {t('whyAiSpa.technicalBenefits.react.point4')}</li>
          </ul>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-teal/10 rounded-lg mb-4">
            <Smartphone className="w-8 h-8 text-brand-teal" />
          </div>
          <h4 className="text-lg font-semibold mb-4 text-brand-teal">{t('whyAiSpa.technicalBenefits.spa.title')}</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>✓ {t('whyAiSpa.technicalBenefits.spa.point1')}</li>
            <li>✓ {t('whyAiSpa.technicalBenefits.spa.point2')}</li>
            <li>✓ {t('whyAiSpa.technicalBenefits.spa.point3')}</li>
            <li>✓ {t('whyAiSpa.technicalBenefits.spa.point4')}</li>
          </ul>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-orange/10 rounded-lg mb-4">
            <Zap className="w-8 h-8 text-brand-orange" />
          </div>
          <h4 className="text-lg font-semibold mb-4 text-brand-orange">{t('whyAiSpa.technicalBenefits.ai.title')}</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>✓ {t('whyAiSpa.technicalBenefits.ai.point1')}</li>
            <li>✓ {t('whyAiSpa.technicalBenefits.ai.point2')}</li>
            <li>✓ {t('whyAiSpa.technicalBenefits.ai.point3')}</li>
            <li>✓ {t('whyAiSpa.technicalBenefits.ai.point4')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechnicalBenefitsSection;
