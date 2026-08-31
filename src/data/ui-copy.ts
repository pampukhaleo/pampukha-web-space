import type { Lang } from '@/lib/i18n-routes';

export const UI: Record<
  Lang,
  {
    home: string;
    services: string;
    cases: string;
    pricing: string;
    contact: string;
    allServices: string;
    relatedCases: string;
    viewCase: string;
    visitSite: string;
    orderService: string;
    priceFrom: string;
    timeline: string;
    faqTitle: string;
    task: string;
    solution: string;
    result: string;
    whatWasDone: string;
    country: string;
    year: string;
    nextCase: string;
    stats: { value: string; label: string }[];
    heroBadge: string;
    servicesTitle: string;
    servicesLead: string;
    pricingTeaserTitle: string;
    pricingTeaserLead: string;
    seeAllPricing: string;
    contactTitle: string;
    contactLead: string;
    popular: string;
    quickPreview: string;
    featuredCase: string;
    prevCase: string;
    nextCaseNav: string;
  }
> = {
  uk: {
    home: 'Головна',
    services: 'Послуги',
    cases: 'Кейси',
    pricing: 'Ціни',
    contact: 'Контакти',
    allServices: 'Усі послуги',
    relatedCases: 'Приклади робіт',
    viewCase: 'Дивитись кейс',
    visitSite: 'Відкрити сайт',
    orderService: 'Замовити консультацію',
    priceFrom: 'Ціна',
    timeline: 'Термін',
    faqTitle: 'Часті питання',
    task: 'Завдання',
    solution: 'Рішення',
    result: 'Результат',
    whatWasDone: 'Що зроблено',
    country: 'Країна',
    year: 'Рік',
    nextCase: 'Наступний кейс',
    stats: [
      { value: '20+', label: 'реалізованих проєктів' },
      { value: '6', label: 'країн у портфоліо' },
      { value: '3–5', label: 'днів до запуску лендінгу' },
      { value: '$300', label: 'стартова ціна сайту' },
    ],
    heroBadge: 'Сайт + SEO + реклама',
    servicesTitle: 'Послуги',
    servicesLead: 'Оберіть напрям — на кожній сторінці описано, що входить, скільки коштує і скільки триває.',
    pricingTeaserTitle: 'Прозорі ціни',
    pricingTeaserLead: 'Три пакети під різні завдання. Без прихованих доплат.',
    seeAllPricing: 'Детальні ціни',
    contactTitle: 'Залишити заявку',
    contactLead: 'Розкажіть коротко про завдання — повернусь із пропозицією. Перша консультація безкоштовна.',
    popular: 'Найчастіше обирають',
    quickPreview: 'Швидкий перегляд',
    featuredCase: 'Обраний кейс',
    prevCase: 'Попередній проєкт',
    nextCaseNav: 'Наступний проєкт',
  },
  en: {
    home: 'Home',
    services: 'Services',
    cases: 'Case studies',
    pricing: 'Pricing',
    contact: 'Contact',
    allServices: 'All services',
    relatedCases: 'Related work',
    viewCase: 'View case study',
    visitSite: 'Open the site',
    orderService: 'Book a call',
    priceFrom: 'Price',
    timeline: 'Timeline',
    faqTitle: 'Frequently asked questions',
    task: 'The task',
    solution: 'The solution',
    result: 'The result',
    whatWasDone: 'What was built',
    country: 'Country',
    year: 'Year',
    nextCase: 'Next case study',
    stats: [
      { value: '20+', label: 'projects delivered' },
      { value: '6', label: 'countries in the portfolio' },
      { value: '3–5', label: 'days to launch a landing page' },
      { value: '$300', label: 'starting price' },
    ],
    heroBadge: 'Website + SEO + ads',
    servicesTitle: 'Services',
    servicesLead: 'Pick a direction — each page explains what is included, what it costs and how long it takes.',
    pricingTeaserTitle: 'Transparent pricing',
    pricingTeaserLead: 'Three packages for different goals. No hidden extras.',
    seeAllPricing: 'See full pricing',
    contactTitle: 'Send a request',
    contactLead: 'Tell me briefly about your task and I will come back with a proposal. The first call is free.',
    popular: 'Most chosen',
    quickPreview: 'Quick preview',
    featuredCase: 'Featured case',
    prevCase: 'Previous project',
    nextCaseNav: 'Next project',
  },
  pl: {
    home: 'Strona główna',
    services: 'Usługi',
    cases: 'Realizacje',
    pricing: 'Cennik',
    contact: 'Kontakt',
    allServices: 'Wszystkie usługi',
    relatedCases: 'Podobne realizacje',
    viewCase: 'Zobacz realizację',
    visitSite: 'Otwórz stronę',
    orderService: 'Umów rozmowę',
    priceFrom: 'Cena',
    timeline: 'Termin',
    faqTitle: 'Częste pytania',
    task: 'Zadanie',
    solution: 'Rozwiązanie',
    result: 'Efekt',
    whatWasDone: 'Co powstało',
    country: 'Kraj',
    year: 'Rok',
    nextCase: 'Następna realizacja',
    stats: [
      { value: '20+', label: 'zrealizowanych projektów' },
      { value: '6', label: 'krajów w portfolio' },
      { value: '3–5', label: 'dni do startu landingu' },
      { value: '$300', label: 'cena startowa' },
    ],
    heroBadge: 'Strona + SEO + reklama',
    servicesTitle: 'Usługi',
    servicesLead: 'Wybierz kierunek — na każdej podstronie jest zakres, cena i termin.',
    pricingTeaserTitle: 'Przejrzysty cennik',
    pricingTeaserLead: 'Trzy pakiety pod różne cele. Bez ukrytych dopłat.',
    seeAllPricing: 'Pełny cennik',
    contactTitle: 'Wyślij zapytanie',
    contactLead: 'Opisz krótko zadanie — wrócę z propozycją. Pierwsza rozmowa jest bezpłatna.',
    popular: 'Najczęściej wybierane',
    quickPreview: 'Szybki podgląd',
    featuredCase: 'Wyróżniona realizacja',
    prevCase: 'Poprzedni projekt',
    nextCaseNav: 'Następny projekt',
  },
};
