import type { Lang } from '@/lib/i18n-routes';

export interface ContactCopy {
  intro: string[];
  channelsTitle: string;
  channelsNote: string;
  telegramNote: string;
  emailNote: string;
  formNote: string;
  hours: string;
  languages: string;
  stepsTitle: string;
  steps: { title: string; text: string }[];
  briefTitle: string;
  briefLead: string;
  brief: string[];
  faqTitle: string;
  faq: { q: string; a: string }[];
  linksTitle: string;
  pricingLink: string;
  landingLink: string;
  websitesLink: string;
  seoLink: string;
}

export const CONTACT_COPY: Record<Lang, ContactCopy> = {
  uk: {
    intro: [
      'Роблю сайти для малого та середнього бізнесу: односторінкові лендінги від $300 і багатосторінкові сайти від $500. Базова SEO-оптимізація входить у ціну кожного сайту — структура сторінок, заголовки, описи, карта сайту й швидке завантаження.',
      'Окремо допомагаю з рекламою в Google і Facebook, аналітикою та подальшою підтримкою сайту — ціна за домовленістю, залежить від обсягу робіт.',
      'Заявка ні до чого не зобов’язує: спершу розберемось у задачі, а вже потім говоритимемо про бюджет і терміни.',
    ],
    channelsTitle: 'Як зі мною зв’язатися',
    channelsNote: 'Оберіть зручний спосіб — відповідь буде в будь-якому з них.',
    telegramNote: 'найшвидше, зручно для коротких питань',
    emailNote: 'для детальних завдань і файлів',
    formNote: 'Форма нижче — якщо хочете описати задачу одразу і отримати пропозицію.',
    hours: 'Відповідаю протягом робочого дня, з понеділка по п’ятницю.',
    languages: 'Спілкуємось українською, англійською або польською.',
    stepsTitle: 'Що буде після заявки',
    steps: [
      { title: 'Відповідь протягом робочого дня', text: 'Пишу у відповідь у Telegram або на пошту — залежно від того, як ви написали.' },
      { title: 'Безкоштовна консультація', text: 'Коротко обговорюємо задачу: що за бізнес, для кого сайт і що він має робити.' },
      { title: 'Кошторис і термін', text: 'Надсилаю зрозумілу пропозицію: що входить, скільки коштує, скільки триває.' },
      { title: 'Старт роботи', text: 'Після узгодження показую кілька варіантів дизайну на вибір і далі збираю сайт.' },
    ],
    briefTitle: 'Що написати в заявці',
    briefLead: 'Щоб відповідь була конкретною, коротко вкажіть:',
    brief: [
      'який сайт потрібен — лендінг чи багатосторінковий',
      'чим займається бізнес і хто ваші клієнти',
      'приклади сайтів, які вам подобаються',
      'бажаний термін запуску',
      'чи є тексти, фото та логотип',
    ],
    faqTitle: 'Часті питання',
    faq: [
      {
        q: 'Скільки коштує сайт?',
        a: 'Лендінг — від $300, багатосторінковий сайт — від $500. Точна ціна залежить від кількості сторінок і функцій; після короткого обговорення надсилаю фіксований кошторис.',
      },
      {
        q: 'Скільки часу займає розробка?',
        a: 'Лендінг — від 1 тижня, багатосторінковий сайт — від 2 тижнів. Терміни залежать від обсягу та швидкості узгоджень і від того, чи готові тексти й фото.',
      },
      {
        q: 'Що входить у ціну?',
        a: 'Кілька варіантів дизайну на вибір, адаптація під телефони, базове SEO, підключення домену й публікація. Реклама, аналітика та подальша підтримка — окремо, ціна за домовленістю.',
      },
    ],
    linksTitle: 'Може бути корисно',
    pricingLink: 'Ціни та пакети',
    landingLink: 'Лендінг під ключ',
    websitesLink: 'Сайти для бізнесу',
    seoLink: 'SEO-просування',
  },
  en: {
    intro: [
      'I build websites for small and mid-sized businesses: one-page landing pages from $300 and multi-page websites from $500. Basic SEO is included in every website — page structure, titles, descriptions, sitemap and fast loading.',
      'On top of that I help with Google and Facebook ads, analytics and ongoing site support — priced by agreement, depending on the scope.',
      'A request commits you to nothing: first we clarify the task, then we talk budget and timeline.',
    ],
    channelsTitle: 'How to reach me',
    channelsNote: 'Pick whichever suits you — I answer on all of them.',
    telegramNote: 'fastest, good for short questions',
    emailNote: 'for detailed briefs and files',
    formNote: 'Use the form below if you want to describe the task right away and get a proposal.',
    hours: 'I reply within the working day, Monday to Friday.',
    languages: 'We can talk in English, Ukrainian or Polish.',
    stepsTitle: 'What happens after your request',
    steps: [
      { title: 'A reply within the working day', text: 'I answer on Telegram or by email, depending on how you wrote.' },
      { title: 'Free consultation', text: 'We briefly discuss the task: your business, who the site is for and what it should do.' },
      { title: 'Quote and timeline', text: 'I send a clear proposal: what is included, what it costs, how long it takes.' },
      { title: 'Start of work', text: 'Once agreed, I show several design options to choose from and then build the site.' },
    ],
    briefTitle: 'What to include in your request',
    briefLead: 'To get a concrete answer, tell me briefly:',
    brief: [
      'what you need — a landing page or a multi-page site',
      'what your business does and who your customers are',
      'examples of websites you like',
      'your preferred launch date',
      'whether texts, photos and a logo are ready',
    ],
    faqTitle: 'Frequently asked questions',
    faq: [
      {
        q: 'How much does a website cost?',
        a: 'A landing page starts at $300, a multi-page website at $500. The final price depends on the number of pages and features; after a short discussion I send a fixed quote.',
      },
      {
        q: 'How long does it take?',
        a: 'A landing page takes from 1 week, a multi-page website from 2 weeks. Timelines depend on the scope, how fast we agree on things and whether texts and photos are ready.',
      },
      {
        q: 'What is included in the price?',
        a: 'Several design options to choose from, mobile adaptation, basic SEO, domain setup and publishing. Ads, analytics and ongoing support are separate, priced by agreement.',
      },
    ],
    linksTitle: 'You may also find useful',
    pricingLink: 'Pricing and packages',
    landingLink: 'Landing page',
    websitesLink: 'Business websites',
    seoLink: 'SEO',
  },
  pl: {
    intro: [
      'Tworzę strony dla małych i średnich firm: jednostronicowe landingi od $300 i strony wielostronicowe od $500. Podstawowa optymalizacja SEO jest wliczona w każdą stronę — struktura podstron, tytuły, opisy, mapa strony i szybkie ładowanie.',
      'Dodatkowo pomagam z reklamą w Google i na Facebooku, analityką oraz dalszą opieką nad stroną — cena do uzgodnienia, zależnie od zakresu.',
      'Zapytanie do niczego nie zobowiązuje: najpierw wyjaśniamy zadanie, a dopiero potem rozmawiamy o budżecie i terminie.',
    ],
    channelsTitle: 'Jak się ze mną skontaktować',
    channelsNote: 'Wybierz wygodny sposób — odpowiem w każdym z nich.',
    telegramNote: 'najszybciej, dobre do krótkich pytań',
    emailNote: 'do szczegółowych zapytań i plików',
    formNote: 'Formularz poniżej — jeśli chcesz od razu opisać zadanie i dostać propozycję.',
    hours: 'Odpowiadam w ciągu dnia roboczego, od poniedziałku do piątku.',
    languages: 'Rozmawiamy po polsku, angielsku lub ukraińsku.',
    stepsTitle: 'Co dzieje się po wysłaniu zapytania',
    steps: [
      { title: 'Odpowiedź w ciągu dnia roboczego', text: 'Odpisuję na Telegramie lub mailem — zależnie od tego, jak napisałeś.' },
      { title: 'Bezpłatna konsultacja', text: 'Krótko omawiamy zadanie: czym zajmuje się firma, dla kogo jest strona i co ma robić.' },
      { title: 'Wycena i termin', text: 'Wysyłam jasną propozycję: co wchodzi w zakres, ile kosztuje, ile trwa.' },
      { title: 'Start prac', text: 'Po akceptacji pokazuję kilka wariantów projektu do wyboru i buduję stronę.' },
    ],
    briefTitle: 'Co napisać w zapytaniu',
    briefLead: 'Żeby odpowiedź była konkretna, napisz krótko:',
    brief: [
      'jaka strona jest potrzebna — landing czy wielostronicowa',
      'czym zajmuje się firma i kim są klienci',
      'przykłady stron, które Ci się podobają',
      'oczekiwany termin startu',
      'czy są gotowe teksty, zdjęcia i logo',
    ],
    faqTitle: 'Częste pytania',
    faq: [
      {
        q: 'Ile kosztuje strona?',
        a: 'Landing od $300, strona wielostronicowa od $500. Ostateczna cena zależy od liczby podstron i funkcji; po krótkiej rozmowie wysyłam stałą wycenę.',
      },
      {
        q: 'Ile trwa realizacja?',
        a: 'Landing od 1 tygodnia, strona wielostronicowa od 2 tygodni. Termin zależy od zakresu, tempa ustaleń oraz tego, czy teksty i zdjęcia są gotowe.',
      },
      {
        q: 'Co jest w cenie?',
        a: 'Kilka wariantów projektu do wyboru, wersja mobilna, podstawowe SEO, podpięcie domeny i publikacja. Reklama, analityka i dalsza opieka — osobno, cena do uzgodnienia.',
      },
    ],
    linksTitle: 'Może się przydać',
    pricingLink: 'Cennik i pakiety',
    landingLink: 'Landing page',
    websitesLink: 'Strony dla firm',
    seoLink: 'Pozycjonowanie SEO',
  },
};
