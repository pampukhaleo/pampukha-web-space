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
        price: '$300',
        timeline: 'від тижня',
        summary: 'Одна сторінка під конкретну послугу або рекламну кампанію.',
        features: [
          'До 8 змістовних блоків',
          '2–3 варіанти дизайну на вибір',
          'Форма заявок на пошту або в Telegram',
          'Адаптив під телефони і планшети',
          'Базове SEO і Search Console — у вартості',
          '30 днів підтримки після запуску',
        ],
      },
      en: {
        name: 'Landing page',
        price: '$300',
        timeline: 'from one week',
        summary: 'One page built around a single service or ad campaign.',
        features: [
          'Up to 8 content sections',
          '2–3 design concepts to choose from',
          'Enquiry form to email or Telegram',
          'Responsive on phones and tablets',
          'Basic SEO and Search Console — included',
          '30 days of support after launch',
        ],
      },
      pl: {
        name: 'Landing page',
        price: '$300',
        timeline: 'od tygodnia',
        summary: 'Jedna strona pod konkretną usługę lub kampanię reklamową.',
        features: [
          'Do 8 sekcji treści',
          '2–3 warianty projektu do wyboru',
          'Formularz na pocztę lub Telegram',
          'Wersja na telefony i tablety',
          'Podstawowe SEO i Search Console — w cenie',
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
        price: '$500',
        timeline: 'від 2 тижнів',
        summary: 'Багатосторінковий сайт з окремими сторінками під кожну послугу.',
        features: [
          'До 8 сторінок, зокрема сторінки послуг',
          '2–3 варіанти дизайну на вибір',
          'Тексти і структура сторінок',
          'Базове SEO, мета-теги, sitemap — у вартості',
          'Аналітика, цілі та піксель Meta',
          'Панель редагування текстів за потреби',
          '30 днів підтримки після запуску',
        ],
      },
      en: {
        name: 'Business website',
        price: '$500',
        timeline: 'from 2 weeks',
        summary: 'A multi-page site with a dedicated page for each service.',
        features: [
          'Up to 8 pages, including service pages',
          '2–3 design concepts to choose from',
          'Copy and page structure',
          'Basic SEO, meta tags, sitemap — included',
          'Analytics, goals and the Meta pixel',
          'Optional content editing panel',
          '30 days of support after launch',
        ],
      },
      pl: {
        name: 'Strona firmowa',
        price: '$500',
        timeline: 'od 2 tygodni',
        summary: 'Serwis wielostronicowy z osobną podstroną dla każdej usługi.',
        features: [
          'Do 8 podstron, w tym podstrony usług',
          '2–3 warianty projektu do wyboru',
          'Teksty i struktura podstron',
          'Podstawowe SEO, meta tagi, sitemap — w cenie',
          'Analityka, cele i piksel Meta',
          'Opcjonalny panel edycji treści',
          '30 dni wsparcia po starcie',
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
    extrasTitle: string;
    extrasLead: string;
    extras: string[];
    extrasPriceLabel: string;
    faqTitle: string;
    faq: { q: string; a: string }[];
  }
> = {
  uk: {
    metaTitle: 'Ціни на створення сайтів | Лендінг $300, сайт $500 — Leonforge',
    metaDescription:
      'Прозорі ціни: лендінг — $300, багатосторінковий сайт — $500. Базове SEO входить у вартість. Реклама і додаткові послуги — за домовленістю.',
    h1: 'Ціни на сайти та додаткові послуги',
    lead:
      'Два пакети під різні завдання. Терміни і обсяг залежать від проєкту — фінальні деталі обговорюємо на короткій безкоштовній розмові.',
    note:
      'Оплата поетапна: частина на старті, решта після здачі. Домен і хостинг оплачуються окремо і залишаються вашими.',
    cta: 'Обговорити проєкт',
    extrasTitle: 'Додаткові послуги',
    extrasLead:
      'Вартість цих послуг залежить від обсягу робіт — рахую після короткої розмови про ваше завдання.',
    extras: [
      'Налаштування реклами Google Ads',
      'Реклама у Facebook та Instagram',
      'Аналітика, цілі та піксель Meta',
      'Доопрацювання і підтримка сайту після 30 днів',
      'Аудит і оптимізація вже наявного сайту',
    ],
    extrasPriceLabel: 'ціна за домовленістю',
    faqTitle: 'Питання про оплату та терміни',
    faq: [
      { q: 'Чому для додаткових послуг немає фіксованої ціни?', a: 'Бо обсяг робіт дуже різний: налаштувати одну кампанію і побудувати рекламу на кілька напрямів — різні завдання. Після короткої розмови я називаю точну суму, і вона вже не змінюється.' },
      { q: 'Як відбувається оплата?', a: 'Поетапно: частина на старті роботи, решта після здачі та ваших правок. Повної передоплати наперед я не беру.' },
      { q: 'Чи входить домен і хостинг?', a: 'Ні, це окремі витрати — зазвичай близько $20–50 на рік. Домен і хостинг реєструються на вас, тож сайт повністю ваш.' },
      { q: 'Скільки триває робота?', a: 'Залежить від обсягу: лендінг зазвичай займає від тижня, багатосторінковий сайт — від двох. На строки також впливає, як швидко ви даєте матеріали та зворотний зв\'язок.' },
      { q: 'Що буде після запуску?', a: 'Перші 30 днів підтримка безкоштовна: правки, питання, дрібні доопрацювання. Далі можна домовитись про разові роботи або регулярну підтримку.' },
    ],
  },
  en: {
    metaTitle: 'Website pricing | Landing $300, website $500 — Leonforge',
    metaDescription:
      'Transparent pricing: landing page — $300, multi-page website — $500. Basic SEO included. Ads and extra services are quoted per project.',
    h1: 'Website pricing and extra services',
    lead:
      'Two packages for different goals. Timelines and scope depend on the project — we agree the details on a short free call.',
    note:
      'Payment is staged: part at the start, the rest on delivery. Domain and hosting are paid separately and stay in your name.',
    cta: 'Discuss your project',
    extrasTitle: 'Extra services',
    extrasLead:
      'The cost of these services depends on the scope of work — I quote it after a short call about your task.',
    extras: [
      'Google Ads setup',
      'Facebook and Instagram ads',
      'Analytics, goals and the Meta pixel',
      'Improvements and site support after the first 30 days',
      'Audit and optimisation of an existing website',
    ],
    extrasPriceLabel: 'price on request',
    faqTitle: 'Questions about payment and timing',
    faq: [
      { q: 'Why is there no fixed price for extra services?', a: 'Because the scope varies a lot: setting up one campaign and building ads across several channels are different jobs. After a short call I name an exact figure that then does not change.' },
      { q: 'How does payment work?', a: 'In stages: part when work starts, the rest after delivery and your revisions. I do not take full prepayment.' },
      { q: 'Are domain and hosting included?', a: 'No, they are separate costs — usually around $20–50 per year. Both are registered in your name, so the site is fully yours.' },
      { q: 'How long does the work take?', a: 'It depends on scope: a landing page usually takes from one week, a multi-page site from two. Your speed with materials and feedback also affects the timeline.' },
      { q: 'What happens after launch?', a: 'The first 30 days of support are free: fixes, questions, small improvements. After that we can agree on one-off work or ongoing support.' },
    ],
  },
  pl: {
    metaTitle: 'Cennik stron | Landing $300, strona $500 — Leonforge',
    metaDescription:
      'Przejrzysty cennik: landing — $300, strona wielostronicowa — $500. Podstawowe SEO w cenie. Reklama i usługi dodatkowe — wycena indywidualna.',
    h1: 'Cennik stron i usług dodatkowych',
    lead:
      'Dwa pakiety pod różne cele. Terminy i zakres zależą od projektu — szczegóły ustalamy podczas krótkiej bezpłatnej rozmowy.',
    note:
      'Płatność etapami: część na starcie, reszta po odbiorze. Domena i hosting są opłacane osobno i pozostają Twoje.',
    cta: 'Omówmy projekt',
    extrasTitle: 'Usługi dodatkowe',
    extrasLead:
      'Koszt tych usług zależy od zakresu prac — wyceniam go po krótkiej rozmowie o Twoim zadaniu.',
    extras: [
      'Konfiguracja reklam Google Ads',
      'Reklama na Facebooku i Instagramie',
      'Analityka, cele i piksel Meta',
      'Dopracowanie i wsparcie strony po pierwszych 30 dniach',
      'Audyt i optymalizacja istniejącej strony',
    ],
    extrasPriceLabel: 'cena do uzgodnienia',
    faqTitle: 'Pytania o płatności i terminy',
    faq: [
      { q: 'Dlaczego usługi dodatkowe nie mają stałej ceny?', a: 'Bo zakres bywa bardzo różny: konfiguracja jednej kampanii i reklama w kilku kanałach to inne zadania. Po krótkiej rozmowie podaję dokładną kwotę, która już się nie zmienia.' },
      { q: 'Jak wygląda płatność?', a: 'Etapami: część na starcie, reszta po odbiorze i Twoich poprawkach. Nie biorę pełnej przedpłaty.' },
      { q: 'Czy domena i hosting są wliczone?', a: 'Nie, to osobny koszt — zwykle około $20–50 rocznie. Rejestrowane są na Ciebie, więc strona jest w pełni Twoja.' },
      { q: 'Ile trwa realizacja?', a: 'Zależy od zakresu: landing zwykle od tygodnia, strona wielostronicowa od dwóch. Na termin wpływa też tempo przekazywania materiałów i uwag.' },
      { q: 'Co dzieje się po starcie?', a: 'Pierwsze 30 dni wsparcia jest bezpłatne: poprawki, pytania, drobne zmiany. Potem możliwe są prace jednorazowe lub stała opieka.' },
    ],
  },
};
