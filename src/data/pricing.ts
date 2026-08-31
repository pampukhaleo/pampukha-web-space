import type { Lang } from '@/lib/i18n-routes';

export interface PricingPlan {
  id: string;
  featured?: boolean;
  serviceId: string;
  content: Record<
    Lang,
    {
      name: string;
      price: string;
      timeline: string;
      summary: string;
      features: string[];
    }
  >;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'landing',
    serviceId: 'landing',
    content: {
      uk: {
        name: 'Лендінг',
        price: 'від $300',
        timeline: '3–5 днів',
        summary: 'Одна сторінка під конкретну послугу або рекламну кампанію.',
        features: [
          'До 8 змістовних блоків',
          '2–3 варіанти дизайну на вибір',
          'Форма заявок на пошту або в Telegram',
          'Адаптив під телефони і планшети',
          'Базове SEO і Search Console',
          '30 днів підтримки після запуску',
        ],
      },
      en: {
        name: 'Landing page',
        price: 'from $300',
        timeline: '3–5 days',
        summary: 'One page built around a single service or ad campaign.',
        features: [
          'Up to 8 content sections',
          '2–3 design concepts to choose from',
          'Enquiry form to email or Telegram',
          'Responsive on phones and tablets',
          'Basic SEO and Search Console',
          '30 days of support after launch',
        ],
      },
      pl: {
        name: 'Landing page',
        price: 'od $300',
        timeline: '3–5 dni',
        summary: 'Jedna strona pod konkretną usługę lub kampanię reklamową.',
        features: [
          'Do 8 sekcji treści',
          '2–3 warianty projektu do wyboru',
          'Formularz na pocztę lub Telegram',
          'Wersja na telefony i tablety',
          'Podstawowe SEO i Search Console',
          '30 dni wsparcia po starcie',
        ],
      },
    },
  },
  {
    id: 'business',
    serviceId: 'websites',
    featured: true,
    content: {
      uk: {
        name: 'Сайт для бізнесу',
        price: 'від $600',
        timeline: '1–2 тижні',
        summary: 'Багатосторінковий сайт з окремими сторінками під кожну послугу.',
        features: [
          'До 8 сторінок, зокрема сторінки послуг',
          '2–3 варіанти дизайну на вибір',
          'Тексти і структура сторінок',
          'SEO-структура, мета-теги, sitemap',
          'Google Analytics 4 і цілі',
          'Панель редагування текстів за потреби',
          '30 днів підтримки після запуску',
        ],
      },
      en: {
        name: 'Business website',
        price: 'from $600',
        timeline: '1–2 weeks',
        summary: 'A multi-page site with a dedicated page for each service.',
        features: [
          'Up to 8 pages, including service pages',
          '2–3 design concepts to choose from',
          'Copy and page structure',
          'SEO structure, meta tags, sitemap',
          'Google Analytics 4 and goals',
          'Optional content editing panel',
          '30 days of support after launch',
        ],
      },
      pl: {
        name: 'Strona firmowa',
        price: 'od $600',
        timeline: '1–2 tygodnie',
        summary: 'Serwis wielostronicowy z osobną podstroną dla każdej usługi.',
        features: [
          'Do 8 podstron, w tym podstrony usług',
          '2–3 warianty projektu do wyboru',
          'Teksty i struktura podstron',
          'Struktura SEO, meta tagi, sitemap',
          'Google Analytics 4 i cele',
          'Opcjonalny panel edycji treści',
          '30 dni wsparcia po starcie',
        ],
      },
    },
  },
  {
    id: 'growth',
    serviceId: 'seo',
    content: {
      uk: {
        name: 'Сайт + SEO + реклама',
        price: 'від $900',
        timeline: '2–3 тижні',
        summary: 'Повний запуск: сайт, оптимізація під Google і перші рекламні кампанії.',
        features: [
          'Все з пакета «Сайт для бізнесу»',
          'Збір пошукових запитів і структура під них',
          'Розширена SEO-оптимізація сторінок',
          'Налаштування Google Ads',
          'Реклама у Facebook та Instagram',
          'Аналітика, цілі та піксель Meta',
          'Розбір перших звітів разом',
        ],
      },
      en: {
        name: 'Website + SEO + ads',
        price: 'from $900',
        timeline: '2–3 weeks',
        summary: 'A full launch: website, Google optimisation and first ad campaigns.',
        features: [
          'Everything in the Business website plan',
          'Keyword research and matching structure',
          'Extended on-page SEO',
          'Google Ads setup',
          'Facebook and Instagram ads',
          'Analytics, goals and the Meta pixel',
          'A walkthrough of your first reports',
        ],
      },
      pl: {
        name: 'Strona + SEO + reklama',
        price: 'od $900',
        timeline: '2–3 tygodnie',
        summary: 'Pełny start: strona, optymalizacja pod Google i pierwsze kampanie.',
        features: [
          'Wszystko z pakietu Strona firmowa',
          'Dobór fraz i dopasowana struktura',
          'Rozszerzona optymalizacja podstron',
          'Konfiguracja Google Ads',
          'Reklama na Facebooku i Instagramie',
          'Analityka, cele i piksel Meta',
          'Wspólne omówienie pierwszych raportów',
        ],
      },
    },
  },
];

export const PRICING_COPY: Record<
  Lang,
  {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    lead: string;
    note: string;
    cta: string;
    faqTitle: string;
    faq: { q: string; a: string }[];
  }
> = {
  uk: {
    metaTitle: 'Ціни на створення сайтів, SEO та рекламу | Leonforge',
    metaDescription:
      'Прозорі ціни: лендінг від $300, сайт для бізнесу від $600, повний пакет із SEO та рекламою від $900. Терміни від 3 днів.',
    h1: 'Ціни на сайти, SEO та рекламу',
    lead:
      'Три пакети під різні завдання. Ціни стартові — фінальну суму називаю після короткої безкоштовної розмови, коли розумію обсяг.',
    note:
      'Оплата поетапна: частина на старті, решта після здачі. Домен і хостинг оплачуються окремо і залишаються вашими.',
    cta: 'Обговорити проєкт',
    faqTitle: 'Питання про оплату та терміни',
    faq: [
      { q: 'Чому ціна вказана «від»?', a: 'Бо обсяг у кожного різний: кількість сторінок, складність функцій, наявність текстів і фото. Після короткої розмови я називаю точну суму, і вона вже не змінюється.' },
      { q: 'Як відбувається оплата?', a: 'Поетапно: частина на старті роботи, решта після здачі та ваших правок. Повної передоплати наперед я не беру.' },
      { q: 'Чи входить домен і хостинг?', a: 'Ні, це окремі витрати — зазвичай близько $20–50 на рік. Домен і хостинг реєструються на вас, тож сайт повністю ваш.' },
      { q: 'Що буде після запуску?', a: 'Перші 30 днів підтримка безкоштовна: правки, питання, дрібні доопрацювання. Далі можна домовитись про разові роботи або регулярну підтримку.' },
    ],
  },
  en: {
    metaTitle: 'Pricing for websites, SEO and ads | Leonforge',
    metaDescription:
      'Transparent pricing: landing page from $300, business website from $600, full package with SEO and ads from $900. Delivery from 3 days.',
    h1: 'Pricing for websites, SEO and ads',
    lead:
      'Three packages for different goals. Prices are starting points — I give the final figure after a short free call.',
    note:
      'Payment is staged: part at the start, the rest on delivery. Domain and hosting are paid separately and stay in your name.',
    cta: 'Discuss your project',
    faqTitle: 'Questions about payment and timing',
    faq: [
      { q: 'Why do prices start "from"?', a: 'Because scope differs: number of pages, feature complexity, whether copy and photos exist. After a short call I name an exact figure that then does not change.' },
      { q: 'How does payment work?', a: 'In stages: part when work starts, the rest after delivery and your revisions. I do not take full prepayment.' },
      { q: 'Are domain and hosting included?', a: 'No, they are separate costs — usually around $20–50 per year. Both are registered in your name, so the site is fully yours.' },
      { q: 'What happens after launch?', a: 'The first 30 days of support are free: fixes, questions, small improvements. After that we can agree on one-off work or ongoing support.' },
    ],
  },
  pl: {
    metaTitle: 'Cennik: strony, SEO i reklama | Leonforge',
    metaDescription:
      'Przejrzysty cennik: landing od $300, strona firmowa od $600, pełny pakiet z SEO i reklamą od $900. Realizacja od 3 dni.',
    h1: 'Cennik stron, SEO i reklamy',
    lead:
      'Trzy pakiety pod różne cele. Ceny są startowe — ostateczną kwotę podaję po krótkiej bezpłatnej rozmowie.',
    note:
      'Płatność etapami: część na starcie, reszta po odbiorze. Domena i hosting są opłacane osobno i pozostają Twoje.',
    cta: 'Omówmy projekt',
    faqTitle: 'Pytania o płatności i terminy',
    faq: [
      { q: 'Dlaczego ceny są „od”?', a: 'Bo zakres bywa różny: liczba podstron, złożoność funkcji, gotowe teksty i zdjęcia. Po krótkiej rozmowie podaję dokładną kwotę, która już się nie zmienia.' },
      { q: 'Jak wygląda płatność?', a: 'Etapami: część na starcie, reszta po odbiorze i Twoich poprawkach. Nie biorę pełnej przedpłaty.' },
      { q: 'Czy domena i hosting są wliczone?', a: 'Nie, to osobny koszt — zwykle około $20–50 rocznie. Rejestrowane są na Ciebie, więc strona jest w pełni Twoja.' },
      { q: 'Co dzieje się po starcie?', a: 'Pierwsze 30 dni wsparcia jest bezpłatne: poprawki, pytania, drobne zmiany. Potem możliwe są prace jednorazowe lub stała opieka.' },
    ],
  },
};
