
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SERVICES } from '@/data/services';
import { CASES } from '@/data/cases';
import { UI } from '@/data/ui-copy';
import {
  DEFAULT_LANG,
  casePath,
  contactPath,
  homePath,
  isLang,
  pricingPath,
  servicePath,
  type Lang,
} from '@/lib/i18n-routes';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const current = i18n.language?.slice(0, 2);
  const lang: Lang = isLang(current) ? current : DEFAULT_LANG;
  const ui = UI[lang];

  return (
    <footer className="bg-background border-t border-border text-foreground py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to={homePath(lang)} className="flex items-center space-x-3 mb-4">
              <img src="/leonforge_logo.png" alt="Leonforge" className="h-8 w-auto" />
              <span className="text-xl font-semibold text-foreground">LEONFORGE</span>
            </Link>
            <p className="text-sm text-muted-foreground">{t('footer.description')}</p>
          </div>

          <nav aria-label={ui.services}>
            <h2 className="mb-4 text-sm font-medium text-foreground">{ui.services}</h2>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    to={servicePath(lang, service.slug[lang])}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.content[lang].navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={ui.cases}>
            <h2 className="mb-4 text-sm font-medium text-foreground">{ui.cases}</h2>
            <ul className="space-y-2 text-sm">
              {CASES.slice(0, 5).map((study) => (
                <li key={study.slug}>
                  <Link
                    to={casePath(lang, study.slug)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {study.content[lang].title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={ui.contact}>
            <h2 className="mb-4 text-sm font-medium text-foreground">{ui.contact}</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to={pricingPath(lang)} className="text-muted-foreground hover:text-primary transition-colors">
                  {ui.pricing}
                </Link>
              </li>
              <li>
                <Link to={contactPath(lang)} className="text-muted-foreground hover:text-primary transition-colors">
                  {ui.contact}
                </Link>
              </li>
              <li>
                <a
                  href="https://t.me/leonforge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  @leonforge
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Leonforge. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
