
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Zap, Gauge, Cog, DollarSign, BarChart3, Rocket } from 'lucide-react';
import TechnicalBenefitsSection from './TechnicalBenefitsSection';
import CTAButton from "@/components/CTAButton.tsx";

const WhyAISPASection = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: Zap,
      title: t('whyAiSpa.benefit1.title'),
      description: t('whyAiSpa.benefit1.description'),
    },
    {
      icon: Gauge,
      title: t('whyAiSpa.benefit2.title'),
      description: t('whyAiSpa.benefit2.description'),
    },
    {
      icon: Cog,
      title: t('whyAiSpa.benefit3.title'),
      description: t('whyAiSpa.benefit3.description'),
    },
    {
      icon: DollarSign,
      title: t('whyAiSpa.benefit4.title'),
      description: t('whyAiSpa.benefit4.description'),
    },
    {
      icon: BarChart3,
      title: t('whyAiSpa.benefit5.title'),
      description: t('whyAiSpa.benefit5.description'),
    },
    {
      icon: Rocket,
      title: t('whyAiSpa.benefit6.title'),
      description: t('whyAiSpa.benefit6.description'),
    },
  ];

  return (
    <section id="why-ai-spa" className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            {t('whyAiSpa.title1')} <span className="gradient-text">{t('whyAiSpa.title2')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('whyAiSpa.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="card-gradient rounded-lg p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Technical Benefits Section */}
        <TechnicalBenefitsSection />

        <section className="py-8 px-4 bg-muted/30">
          <div className="container mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-6">
              {t('cta.afterServices')}
            </p>
            <CTAButton />
          </div>
        </section>

        <div className="bg-muted/30 rounded-xl p-8 text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">{t('whyAiSpa.comparison.title')}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-red-500">{t('whyAiSpa.comparison.traditional.title')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>❌ {t('whyAiSpa.comparison.traditional.point1')}</li>
                <li>❌ {t('whyAiSpa.comparison.traditional.point2')}</li>
                <li>❌ {t('whyAiSpa.comparison.traditional.point3')}</li>
                <li>❌ {t('whyAiSpa.comparison.traditional.point4')}</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-green-500">{t('whyAiSpa.comparison.aiSpa.title')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>✅ {t('whyAiSpa.comparison.aiSpa.point1')}</li>
                <li>✅ {t('whyAiSpa.comparison.aiSpa.point2')}</li>
                <li>✅ {t('whyAiSpa.comparison.aiSpa.point3')}</li>
                <li>✅ {t('whyAiSpa.comparison.aiSpa.point4')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAISPASection;
