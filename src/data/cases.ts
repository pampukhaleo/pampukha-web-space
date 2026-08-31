import type { Lang } from '@/lib/i18n-routes';

export interface CaseContent {
  title: string;
  category: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  task: string;
  solution: string;
  result: string;
  features: string[];
  tags: string[];
}

export interface CaseStudy {
  slug: string;
  /** matches the legacy project number used for image alt keys */
  previewImage: string;
  desktopImage: string;
  liveUrl: string;
  year: string;
  country: Record<Lang, string>;
  content: Record<Lang, CaseContent>;
}

export const CASES: CaseStudy[] = [
  {
    slug: 'expertise',
    previewImage: '/expertise_hero.jpg',
    desktopImage: '/expertisedesktop.png',
    liveUrl: 'https://expertise.com.ua/',
    year: '2024',
    country: { uk: 'Україна', en: 'Ukraine', pl: 'Ukraina' },
    content: {
      uk: {
        title: 'Платформа Інституту Судових Експертиз',
        category: 'Корпоративний сайт',
        summary:
          'Сайт для команди судових експертів: каталог послуг, форма заявки і зрозуміла навігація для клієнтів та адвокатських контор.',
        metaTitle: 'Кейс: сайт Інституту Судових Експертиз | Leonforge',
        metaDescription:
          'Як я зробив корпоративний сайт для інституту судових експертиз: структура послуг, форма заявок і оптимізація під пошук.',
        task:
          'Інституту потрібен був сайт, який пояснює складні експертні послуги простою мовою і викликає довіру в адвокатів та приватних клієнтів. До цього всі звернення йшли через телефон і рекомендації.',
        solution:
          'Ми розібрали десятки видів експертиз на зрозумілі категорії, зробили окрему сторінку під кожен напрям і додали форму заявки з коротким описом ситуації. Дизайн — стриманий і діловий, без зайвої графіки, з акцентом на читабельність довгих текстів.',
        result:
          'Сайт став основною точкою входу для нових клієнтів: людина знаходить потрібний вид експертизи, читає умови і одразу залишає заявку, не витрачаючи час на дзвінки.',
        features: [
          'Каталог експертиз із поділом на категорії',
          'Окремі сторінки під кожен напрям послуг',
          'Форма заявки з описом ситуації',
          'Адаптив під телефони і планшети',
          'Базове SEO і підключена Search Console',
        ],
        tags: ['Сайт під ключ', 'Мультимовний', 'SEO'],
      },
      en: {
        title: 'Forensic Expertise Institute platform',
        category: 'Corporate website',
        summary:
          'A website for a team of forensic experts: service catalogue, request form and clear navigation for clients and law firms.',
        metaTitle: 'Case study: Forensic Expertise Institute website | Leonforge',
        metaDescription:
          'How I built a corporate website for a forensic expertise institute: service structure, request form and search optimisation.',
        task:
          'The institute needed a site that explains complex expert services in plain language and earns trust from lawyers and private clients. Before that, every enquiry came through phone calls and referrals.',
        solution:
          'We broke dozens of expertise types into clear categories, built a dedicated page for each area and added a request form with a short case description. The design is restrained and businesslike, focused on readability of long texts.',
        result:
          'The site became the main entry point for new clients: a visitor finds the right type of expertise, reads the conditions and submits a request without spending time on calls.',
        features: [
          'Expertise catalogue split into categories',
          'A dedicated page for each service area',
          'Request form with case description',
          'Responsive on phones and tablets',
          'Basic SEO and Search Console connected',
        ],
        tags: ['Full-service site', 'Multilingual', 'SEO'],
      },
      pl: {
        title: 'Platforma Instytutu Ekspertyz Sądowych',
        category: 'Strona firmowa',
        summary:
          'Strona dla zespołu biegłych sądowych: katalog usług, formularz zgłoszenia i czytelna nawigacja dla klientów i kancelarii.',
        metaTitle: 'Realizacja: strona Instytutu Ekspertyz Sądowych | Leonforge',
        metaDescription:
          'Jak powstała strona firmowa dla instytutu ekspertyz sądowych: struktura usług, formularz zgłoszeń i optymalizacja pod wyszukiwarkę.',
        task:
          'Instytut potrzebował strony, która tłumaczy złożone usługi eksperckie prostym językiem i buduje zaufanie prawników oraz klientów indywidualnych. Wcześniej wszystkie zgłoszenia szły przez telefon i polecenia.',
        solution:
          'Podzieliliśmy dziesiątki rodzajów ekspertyz na zrozumiałe kategorie, przygotowaliśmy osobną podstronę dla każdego obszaru i dodaliśmy formularz z krótkim opisem sprawy. Projekt jest stonowany i biznesowy, nastawiony na czytelność długich tekstów.',
        result:
          'Strona stała się głównym punktem wejścia dla nowych klientów: odwiedzający znajduje właściwy rodzaj ekspertyzy, czyta warunki i od razu wysyła zgłoszenie.',
        features: [
          'Katalog ekspertyz w podziale na kategorie',
          'Osobna podstrona dla każdego obszaru usług',
          'Formularz z opisem sprawy',
          'Wersja mobilna i tabletowa',
          'Podstawowe SEO i Search Console',
        ],
        tags: ['Strona pod klucz', 'Wielojęzyczna', 'SEO'],
      },
    },
  },
  {
    slug: 'arbitration',
    previewImage: '/cheataic_hero.jpg',
    desktopImage: '/cheataicdesktop.png',
    liveUrl: 'https://chea-taic.be/',
    year: '2024',
    country: { uk: 'Бельгія', en: 'Belgium', pl: 'Belgia' },
    content: {
      uk: {
        title: 'Міжнародна Арбітражна Палата',
        category: 'Мультимовна платформа',
        summary:
          'Платформа для арбітражної організації з користувачами з 35+ країн: кілька мов, база експертів і бронювання консультацій.',
        metaTitle: 'Кейс: мультимовна платформа арбітражної палати | Leonforge',
        metaDescription:
          'Розробка мультимовної платформи для міжнародної арбітражної палати: кілька мов, база експертів, правила і бронювання.',
        task:
          'Організація працює з учасниками з понад 35 країн, тому сайт мав однаково добре читатись різними мовами і містити великий обсяг офіційних документів та правил.',
        solution:
          'Зробив мультимовну структуру з окремими адресами для кожної мови, каталог експертів із фільтрами, розділ правил і документів та калькулятор витрат на арбітраж. Особливу увагу приділив навігації: у великому обсязі тексту користувач має швидко знаходити потрібний розділ.',
        result:
          'Учасники з різних країн працюють із платформою власною мовою, а організація отримала єдине місце для документів, експертів і заявок замість розсилок поштою.',
        features: [
          'Кілька мовних версій із коректними адресами',
          'Каталог експертів із фільтрами',
          'Розділ правил і офіційних документів',
          'Калькулятор витрат на арбітраж',
          'Форма бронювання консультації',
        ],
        tags: ['Мультимовна платформа', 'Каталог', 'SEO'],
      },
      en: {
        title: 'International Arbitration Chamber',
        category: 'Multilingual platform',
        summary:
          'A platform for an arbitration organisation with users from 35+ countries: multiple languages, expert database and consultation booking.',
        metaTitle: 'Case study: multilingual arbitration platform | Leonforge',
        metaDescription:
          'Building a multilingual platform for an international arbitration chamber: languages, expert database, rules and booking.',
        task:
          'The organisation works with participants from more than 35 countries, so the site had to read equally well in several languages and hold a large volume of official documents and rules.',
        solution:
          'I built a multilingual structure with separate URLs per language, an expert catalogue with filters, a rules and documents section and an arbitration cost calculator. Navigation got special attention: with that much text, users must find the right section fast.',
        result:
          'Participants from different countries use the platform in their own language, and the organisation now has one place for documents, experts and requests instead of email threads.',
        features: [
          'Several language versions with correct URLs',
          'Expert catalogue with filters',
          'Rules and official documents section',
          'Arbitration cost calculator',
          'Consultation booking form',
        ],
        tags: ['Multilingual platform', 'Catalogue', 'SEO'],
      },
      pl: {
        title: 'Międzynarodowa Izba Arbitrażowa',
        category: 'Platforma wielojęzyczna',
        summary:
          'Platforma dla organizacji arbitrażowej z użytkownikami z ponad 35 krajów: kilka języków, baza ekspertów i rezerwacja konsultacji.',
        metaTitle: 'Realizacja: wielojęzyczna platforma arbitrażowa | Leonforge',
        metaDescription:
          'Budowa wielojęzycznej platformy dla międzynarodowej izby arbitrażowej: języki, baza ekspertów, regulaminy i rezerwacje.',
        task:
          'Organizacja pracuje z uczestnikami z ponad 35 krajów, więc strona musiała czytać się równie dobrze w kilku językach i pomieścić dużą liczbę oficjalnych dokumentów.',
        solution:
          'Przygotowałem strukturę wielojęzyczną z osobnymi adresami dla każdego języka, katalog ekspertów z filtrami, dział regulaminów oraz kalkulator kosztów arbitrażu. Szczególną uwagę poświęciłem nawigacji w dużej ilości treści.',
        result:
          'Uczestnicy z różnych krajów korzystają z platformy we własnym języku, a organizacja ma jedno miejsce na dokumenty, ekspertów i zgłoszenia.',
        features: [
          'Kilka wersji językowych z poprawnymi adresami',
          'Katalog ekspertów z filtrami',
          'Dział regulaminów i dokumentów',
          'Kalkulator kosztów arbitrażu',
          'Formularz rezerwacji konsultacji',
        ],
        tags: ['Platforma wielojęzyczna', 'Katalog', 'SEO'],
      },
    },
  },
  {
    slug: 'pampukha-pl',
    previewImage: '/pampukhapl_hero.jpg',
    desktopImage: '/pampukhapldesktop.png',
    liveUrl: 'https://pampukha.pl/',
    year: '2024',
    country: { uk: 'Польща', en: 'Poland', pl: 'Polska' },
    content: {
      uk: {
        title: 'Юридична допомога українцям у Польщі',
        category: 'Лендінг із формою',
        summary:
          'Простий і зрозумілий сайт для українців у Польщі: опис послуг двома мовами та форма для запису на консультацію.',
        metaTitle: 'Кейс: лендінг юридичних послуг у Польщі | Leonforge',
        metaDescription:
          'Лендінг для юриста, який допомагає українцям у Польщі: дві мови, зрозумілі послуги і форма запису на консультацію.',
        task:
          'Клієнти — люди у стресовій ситуації, часто без знання польської. Сайт мав максимально просто пояснити, з якими питаннями можна звернутись, і зняти страх перед першим контактом.',
        solution:
          'Зробив лендінг двома мовами з дуже простою мовою текстів: конкретні життєві ситуації замість юридичних формулювань, прозорі умови консультації та коротка форма запису з мінімумом полів.',
        result:
          'Заявки почали приходити напряму з сайту, а не лише через рекомендації у спільнотах. Сторінка також стала базою для реклами в Google і Facebook.',
        features: [
          'Дві мовні версії — українська і польська',
          'Опис послуг через реальні життєві ситуації',
          'Коротка форма запису на консультацію',
          'Підготовка сторінки під рекламу',
          'Швидке завантаження на мобільних',
        ],
        tags: ['Лендінг', 'Форма заявок', 'Дві мови'],
      },
      en: {
        title: 'Legal help for Ukrainians in Poland',
        category: 'Landing page with form',
        summary:
          'A simple, clear site for Ukrainians in Poland: services described in two languages and a consultation booking form.',
        metaTitle: 'Case study: legal services landing page in Poland | Leonforge',
        metaDescription:
          'A landing page for a lawyer helping Ukrainians in Poland: two languages, plain-language services and a booking form.',
        task:
          'The clients are people in stressful situations, often without Polish. The site had to explain in the simplest terms what help is available and remove the fear of the first contact.',
        solution:
          'I built a two-language landing page with deliberately plain copy: real-life situations instead of legal wording, transparent consultation terms and a short booking form with minimal fields.',
        result:
          'Enquiries now arrive directly from the site rather than only through community referrals, and the page also serves as the destination for Google and Facebook ads.',
        features: [
          'Two language versions — Ukrainian and Polish',
          'Services described through real-life situations',
          'Short consultation booking form',
          'Page prepared for advertising',
          'Fast loading on mobile',
        ],
        tags: ['Landing page', 'Enquiry form', 'Two languages'],
      },
      pl: {
        title: 'Pomoc prawna dla Ukraińców w Polsce',
        category: 'Landing page z formularzem',
        summary:
          'Prosta i czytelna strona dla Ukraińców w Polsce: opis usług w dwóch językach i formularz zapisu na konsultację.',
        metaTitle: 'Realizacja: landing usług prawnych w Polsce | Leonforge',
        metaDescription:
          'Landing page dla prawnika pomagającego Ukraińcom w Polsce: dwa języki, zrozumiałe usługi i formularz zapisu.',
        task:
          'Klienci to osoby w stresującej sytuacji, często bez znajomości polskiego. Strona musiała najprościej wyjaśnić, w jakich sprawach można się zgłosić, i zdjąć obawę przed pierwszym kontaktem.',
        solution:
          'Przygotowałem landing w dwóch językach z celowo prostym językiem: konkretne sytuacje życiowe zamiast prawniczych sformułowań, jasne warunki konsultacji i krótki formularz zapisu.',
        result:
          'Zapytania zaczęły trafiać bezpośrednio ze strony, a nie tylko z poleceń w społecznościach. Strona jest też miejscem docelowym reklam Google i Facebook.',
        features: [
          'Dwie wersje językowe — ukraińska i polska',
          'Opis usług przez realne sytuacje życiowe',
          'Krótki formularz zapisu na konsultację',
          'Strona przygotowana pod reklamę',
          'Szybkie ładowanie na telefonie',
        ],
        tags: ['Landing page', 'Formularz', 'Dwa języki'],
      },
    },
  },
  {
    slug: 'lemonshine',
    previewImage: '/lemonshine_hero.jpg',
    desktopImage: '/Screenshot_6.png',
    liveUrl: 'https://lemonshine.pl/',
    year: '2025',
    country: { uk: 'Польща', en: 'Poland', pl: 'Polska' },
    content: {
      uk: {
        title: 'Lemon Shine — клінінг у Польщі',
        category: 'Сайт послуг',
        summary:
          'Сайт клінінгової компанії з онлайн-бронюванням, пакетами послуг та простою формою замовлення.',
        metaTitle: 'Кейс: сайт клінінгової компанії з бронюванням | Leonforge',
        metaDescription:
          'Сайт для клінінгу в Польщі: пакети послуг із цінами, онлайн-бронювання і підготовка до рекламних кампаній.',
        task:
          'Компанія втрачала замовлення на етапі «зателефонуйте нам»: клієнти хотіли одразу бачити ціни й обирати зручний час, а не домовлятись по телефону.',
        solution:
          'Зробив сторінку з чіткими пакетами послуг і цінами, калькулятором приблизної вартості та формою бронювання, де клієнт обирає тип прибирання, площу та зручну дату. Візуально — світлий, свіжий стиль, який асоціюється з чистотою.',
        result:
          'Клієнт отримав сайт, готовий приймати замовлення без дзвінків, і майданчик для реклами: цілі й аналітика налаштовані з першого дня.',
        features: [
          'Пакети послуг із прозорими цінами',
          'Онлайн-бронювання із вибором дати',
          'Розрахунок приблизної вартості',
          'Аналітика і цілі для реклами',
          'Адаптивний дизайн під телефони',
        ],
        tags: ['Сайт послуг', 'Бронювання', 'SEO'],
      },
      en: {
        title: 'Lemon Shine — cleaning company in Poland',
        category: 'Service business site',
        summary:
          'A cleaning company website with online booking, service packages and a simple order form.',
        metaTitle: 'Case study: cleaning company website with booking | Leonforge',
        metaDescription:
          'A website for a cleaning company in Poland: service packages with prices, online booking and ad-ready analytics.',
        task:
          'The company lost orders at the "call us" stage: customers wanted to see prices and pick a time immediately instead of negotiating by phone.',
        solution:
          'I built a page with clear service packages and prices, an estimate calculator and a booking form where the customer picks the cleaning type, area and date. Visually it is a light, fresh style that reads as cleanliness.',
        result:
          'The client got a site that takes orders without phone calls, and a proper destination for ads: goals and analytics were configured from day one.',
        features: [
          'Service packages with transparent prices',
          'Online booking with date selection',
          'Instant price estimate',
          'Analytics and ad conversion goals',
          'Responsive design for phones',
        ],
        tags: ['Service site', 'Booking', 'SEO'],
      },
      pl: {
        title: 'Lemon Shine — firma sprzątająca w Polsce',
        category: 'Strona usługowa',
        summary:
          'Strona firmy sprzątającej z rezerwacją online, pakietami usług i prostym formularzem zamówienia.',
        metaTitle: 'Realizacja: strona firmy sprzątającej z rezerwacją | Leonforge',
        metaDescription:
          'Strona dla firmy sprzątającej w Polsce: pakiety usług z cenami, rezerwacja online i gotowość na kampanie reklamowe.',
        task:
          'Firma traciła zlecenia na etapie „zadzwoń do nas”: klienci chcieli od razu widzieć ceny i wybierać termin, a nie ustalać wszystko telefonicznie.',
        solution:
          'Przygotowałem stronę z czytelnymi pakietami i cenami, kalkulatorem szacunkowego kosztu oraz formularzem rezerwacji z wyborem rodzaju sprzątania, metrażu i daty. Wizualnie — jasny, świeży styl kojarzący się z czystością.',
        result:
          'Klient otrzymał stronę przyjmującą zamówienia bez telefonów oraz gotowe miejsce docelowe dla reklam: cele i analityka działają od pierwszego dnia.',
        features: [
          'Pakiety usług z przejrzystymi cenami',
          'Rezerwacja online z wyborem daty',
          'Szacunkowa wycena od ręki',
          'Analityka i cele reklamowe',
          'Responsywny projekt na telefony',
        ],
        tags: ['Strona usługowa', 'Rezerwacje', 'SEO'],
      },
    },
  },
  {
    slug: 'spotless-pro',
    previewImage: '/spotlesspro_hero.jpg',
    desktopImage: '/Screenshot_7.png',
    liveUrl: 'https://spotlessprohome.co.uk/',
    year: '2025',
    country: { uk: 'Велика Британія', en: 'United Kingdom', pl: 'Wielka Brytania' },
    content: {
      uk: {
        title: 'Spotless Pro Home Cleaning',
        category: 'Преміум-лендінг',
        summary:
          'Сайт прибирання преміумкласу для британського ринку: акуратний дизайн, відгуки клієнтів та зручне бронювання.',
        metaTitle: 'Кейс: преміум-лендінг клінінгу для ринку Британії | Leonforge',
        metaDescription:
          'Преміальний лендінг для клінінгової компанії у Великій Британії: акуратний дизайн, відгуки і форма бронювання.',
        task:
          'Компанія працює у вищому ціновому сегменті, тому сайт мав виглядати дорожче за конкурентів і пояснювати, за що клієнт платить більше.',
        solution:
          'Зробив стриманий преміальний дизайн зі спокійною палітрою і великою кількістю повітря, додав блок із поясненням стандартів роботи, відгуки клієнтів і прозорий прайс. Форма бронювання — коротка, з вибором послуги та часу.',
        result:
          'Сайт відповідає ціновому позиціонуванню компанії: відвідувач одразу бачить рівень сервісу, а не просто список послуг.',
        features: [
          'Преміальний стриманий дизайн',
          'Блок стандартів і гарантій сервісу',
          'Відгуки клієнтів',
          'Прозорий прайс-лист',
          'Коротка форма бронювання',
        ],
        tags: ['Преміум-лендінг', 'Бронювання', 'SEO'],
      },
      en: {
        title: 'Spotless Pro Home Cleaning',
        category: 'Premium landing page',
        summary:
          'A premium cleaning service site for the UK market: careful design, client reviews and easy booking.',
        metaTitle: 'Case study: premium cleaning landing page, UK | Leonforge',
        metaDescription:
          'A premium landing page for a UK cleaning company: refined design, reviews and a booking form.',
        task:
          'The company works in a higher price bracket, so the site had to look more expensive than competitors and explain what the customer pays extra for.',
        solution:
          'I designed a restrained premium layout with a calm palette and generous whitespace, added a section explaining service standards, client reviews and a transparent price list. The booking form is short, with service and time selection.',
        result:
          'The site now matches the company positioning: a visitor immediately sees the level of service rather than just a list of tasks.',
        features: [
          'Restrained premium design',
          'Service standards and guarantees section',
          'Client reviews',
          'Transparent price list',
          'Short booking form',
        ],
        tags: ['Premium landing', 'Booking', 'SEO'],
      },
      pl: {
        title: 'Spotless Pro Home Cleaning',
        category: 'Landing premium',
        summary:
          'Strona usług sprzątania premium na rynek brytyjski: dopracowany projekt, opinie klientów i wygodna rezerwacja.',
        metaTitle: 'Realizacja: landing premium dla sprzątania, UK | Leonforge',
        metaDescription:
          'Landing premium dla brytyjskiej firmy sprzątającej: dopracowany projekt, opinie i formularz rezerwacji.',
        task:
          'Firma działa w wyższym segmencie cenowym, więc strona musiała wyglądać drożej niż u konkurencji i tłumaczyć, za co klient dopłaca.',
        solution:
          'Zaprojektowałem stonowany, premium układ ze spokojną paletą i dużą ilością przestrzeni, dodałem sekcję standardów obsługi, opinie klientów i przejrzysty cennik. Formularz rezerwacji jest krótki, z wyborem usługi i terminu.',
        result:
          'Strona odpowiada pozycjonowaniu cenowemu firmy: odwiedzający od razu widzi poziom usługi, a nie samą listę czynności.',
        features: [
          'Stonowany projekt premium',
          'Sekcja standardów i gwarancji',
          'Opinie klientów',
          'Przejrzysty cennik',
          'Krótki formularz rezerwacji',
        ],
        tags: ['Landing premium', 'Rezerwacje', 'SEO'],
      },
    },
  },
  {
    slug: 'laser-beauty',
    previewImage: '/laserbeauty_hero.jpg',
    desktopImage: '/Screenshot_8.png',
    liveUrl: 'https://laserbeauty-studio.de/',
    year: '2025',
    country: { uk: 'Німеччина', en: 'Germany', pl: 'Niemcy' },
    content: {
      uk: {
        title: 'Laser Beauty Studio',
        category: 'Сайт салону краси',
        summary:
          'Сайт салону лазерних процедур у Німеччині: каталог процедур, фото до/після та запис онлайн.',
        metaTitle: 'Кейс: сайт салону лазерних процедур у Німеччині | Leonforge',
        metaDescription:
          'Сайт для салону краси в Німеччині: каталог процедур із цінами, галерея до/після і запис онлайн.',
        task:
          'Салону потрібно було показати результати процедур і зняти сумніви клієнтів щодо безпеки та болючості, а також перевести запис із месенджерів на сайт.',
        solution:
          'Зробив каталог процедур із цінами та тривалістю, галерею фото до/після, блок відповідей на типові страхи і форму запису з вибором процедури та часу. Дизайн — світлий і спокійний, з акцентом на фотографії.',
        result:
          'Клієнти приходять на сайт уже підготовленими: знають ціну, тривалість і чого очікувати, тому запис проходить швидше і без довгих переписок.',
        features: [
          'Каталог процедур із цінами і тривалістю',
          'Галерея фото до/після',
          'Відповіді на типові питання і страхи',
          'Онлайн-запис із вибором часу',
          'Світлий адаптивний дизайн',
        ],
        tags: ['Сайт салону', 'Запис онлайн', 'Галерея'],
      },
      en: {
        title: 'Laser Beauty Studio',
        category: 'Beauty studio website',
        summary:
          'A laser treatment studio site in Germany: treatment catalogue, before/after gallery and online booking.',
        metaTitle: 'Case study: laser beauty studio website, Germany | Leonforge',
        metaDescription:
          'A website for a beauty studio in Germany: treatment catalogue with prices, before/after gallery and online booking.',
        task:
          'The studio needed to show treatment results, address client concerns about safety and pain, and move bookings from messengers to the website.',
        solution:
          'I built a treatment catalogue with prices and durations, a before/after gallery, a section answering common fears and a booking form with treatment and time selection. The design is light and calm, built around the photos.',
        result:
          'Clients now arrive already informed — they know the price, the duration and what to expect — so booking is faster and involves less back-and-forth.',
        features: [
          'Treatment catalogue with prices and duration',
          'Before/after photo gallery',
          'Answers to common questions and concerns',
          'Online booking with time selection',
          'Light, responsive design',
        ],
        tags: ['Studio website', 'Online booking', 'Gallery'],
      },
      pl: {
        title: 'Laser Beauty Studio',
        category: 'Strona salonu kosmetycznego',
        summary:
          'Strona studia zabiegów laserowych w Niemczech: katalog zabiegów, galeria przed/po i rezerwacja online.',
        metaTitle: 'Realizacja: strona studia laserowego w Niemczech | Leonforge',
        metaDescription:
          'Strona dla salonu kosmetycznego w Niemczech: katalog zabiegów z cenami, galeria przed/po i rezerwacja online.',
        task:
          'Studio potrzebowało pokazać efekty zabiegów, rozwiać obawy o bezpieczeństwo i ból oraz przenieść zapisy z komunikatorów na stronę.',
        solution:
          'Przygotowałem katalog zabiegów z cenami i czasem trwania, galerię przed/po, sekcję odpowiedzi na typowe obawy oraz formularz rezerwacji z wyborem zabiegu i terminu. Projekt jest jasny i spokojny, oparty na zdjęciach.',
        result:
          'Klienci trafiają do studia już przygotowani: znają cenę, czas i efekt, więc rezerwacja przebiega szybciej i bez długiej wymiany wiadomości.',
        features: [
          'Katalog zabiegów z cenami i czasem',
          'Galeria zdjęć przed/po',
          'Odpowiedzi na typowe pytania i obawy',
          'Rezerwacja online z wyborem terminu',
          'Jasny, responsywny projekt',
        ],
        tags: ['Strona salonu', 'Rezerwacja online', 'Galeria'],
      },
    },
  },
];

export const findCase = (slug: string) => CASES.find((c) => c.slug === slug);
