import { Button } from '@/components/ui/button';
import { useConsent } from '@/components/ConsentProvider';
import { useTranslation } from 'react-i18next';
import { isLang, type Lang } from '@/lib/i18n-routes';

const COPY: Record<Lang, { title: string; text: string; accept: string; deny: string }> = {
  uk: {
    title: 'Cookies та відстеження',
    text: 'Ми використовуємо cookies та інструменти аналітики (Google Analytics, Meta Pixel), щоб покращити рекламу та роботу сайту. Ви можете погодитись або відмовитись.',
    accept: 'Погодитись',
    deny: 'Відмовитись',
  },
  en: {
    title: 'Cookies and tracking',
    text: 'We use cookies and analytics tools (Google Analytics, Meta Pixel) to improve advertising and site performance. You can accept or decline.',
    accept: 'Accept',
    deny: 'Decline',
  },
  pl: {
    title: 'Cookies i śledzenie',
    text: 'Używamy plików cookie i narzędzi analitycznych (Google Analytics, Meta Pixel), aby poprawić reklamy i działanie strony. Możesz zaakceptować lub odmówić.',
    accept: 'Akceptuj',
    deny: 'Odmów',
  },
};

export const ConsentBanner = () => {
  const { showBanner, accept, deny } = useConsent();
  const { i18n } = useTranslation();
  const lang: Lang = isLang(i18n.language?.slice(0, 2)) ? (i18n.language.slice(0, 2) as Lang) : 'uk';
  const c = COPY[lang];

  if (!showBanner) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background p-4 shadow-lg"
    >
      <div className="container mx-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-foreground">
          <p className="font-medium">{c.title}</p>
          <p className="text-muted-foreground">{c.text}</p>
        </div>
        <div className="flex gap-3 shrink-0">
          <Button variant="outline" size="sm" onClick={deny}>
            {c.deny}
          </Button>
          <Button size="sm" onClick={accept}>
            {c.accept}
          </Button>
        </div>
      </div>
    </div>
  );
};
