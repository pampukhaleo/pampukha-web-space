import type { Lang } from '@/lib/i18n-routes';

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceInclude {
  title: string;
  text: string;
}

export interface ServiceContent {
  navLabel: string;
  cardTitle: string;
  cardText: string;
  priceLabel: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  intro: string[];
  includesTitle: string;
  includes: ServiceInclude[];
  priceFrom: string;
  timeline: string;
  faq: ServiceFaq[];
}

export interface Service {
  id: string;
  slug: Record<Lang, string>;
  /** Case slugs shown on this service page. */
  cases: string[];
  content: Record<Lang, ServiceContent>;
}

export const SERVICES: Service[] = [
  {
    id: 'websites',
    slug: {
      uk: 'stvorennya-saytiv',
      en: 'website-development',
      pl: 'tworzenie-stron',
    },
    cases: ['expertise', 'arbitration'],
    content: {
      uk: {
        navLabel: 'Створення сайтів',
        cardTitle: 'Створення сайтів під ключ',
        cardText: 'Корпоративні сайти та багатосторінкові проєкти: дизайн, тексти, налаштування і запуск.',
        priceLabel: 'від $500',
        metaTitle: 'Створення сайтів під ключ — від $500 | Leonforge',
        metaDescription:
          'Розробка сайтів під ключ: 2–3 варіанти дизайну на вибір, адаптив і базове SEO у вартості. Ціна від $500, терміни — від 2 тижнів.',
        h1: 'Створення сайтів під ключ',
        lead:
          'Роблю сайт від першої розмови до запуску: дизайн на вибір, готові тексти, адаптив під телефони, базове SEO і підключена аналітика.',
        intro: [
          'Сайт під ключ — це коли вам не треба шукати окремо дизайнера, розробника, копірайтера і SEO-фахівця. Ви розповідаєте про бізнес, а я повертаюсь із готовим сайтом, який працює і який можна одразу показувати клієнтам.',
          'Починаю завжди з розмови про завдання: хто ваші клієнти, що вони мають зробити на сайті, чим ви відрізняєтесь від конкурентів. Далі готую 2–3 варіанти дизайну — ви обираєте той, що подобається, і ми доводимо його до фіналу. Ніякого «беріть, що дали».',
          'Кожен сайт я збираю на сучасному стеку: швидке завантаження, коректна робота на телефонах і планшетах, чиста структура заголовків, sitemap і robots.txt. Це той мінімум, без якого Google не почне показувати сайт у пошуку.',
        ],
        includesTitle: 'Що входить у роботу',
        includes: [
          { title: '2–3 концепції дизайну', text: 'Готую кілька варіантів головної сторінки. Не сподобалось — переробляю без доплат.' },
          { title: 'Адаптив під усі екрани', text: 'Телефон, планшет, ноутбук, великий монітор — сайт виглядає акуратно скрізь.' },
          { title: 'Тексти і структура', text: 'Допомагаю сформулювати блоки, заголовки та заклики до дії, щоб сторінка вела до заявки.' },
          { title: 'Базове SEO', text: 'Мета-теги, структура заголовків, швидкість, sitemap.xml, robots.txt, Search Console.' },
          { title: 'Форма заявок', text: 'Заявки з сайту приходять вам на пошту або в Telegram — нічого не губиться.' },
          { title: 'Аналітика', text: 'Підключаю Google Analytics 4, за потреби — Google Tag Manager і піксель Meta.' },
        ],
        priceFrom: 'від $500',
        timeline: 'від 2 тижнів, залежить від обсягу',
        faq: [
          { q: 'Скільки коштує сайт під ключ?', a: 'Багатосторінковий сайт — від $500. Односторінковий лендінг — від $300. Базове SEO входить у ціну, без доплат. Точну суму називаю після короткої безкоштовної розмови, коли розумію обсяг.' },
          { q: 'Скільки часу займе розробка?', a: 'Зазвичай від 2 тижнів. Точний строк залежить від обсягу: кількості сторінок, функцій і того, як швидко ви даєте матеріали та зворотний зв\'язок.' },
          { q: 'Чи можу я потім сам змінювати тексти?', a: 'Так. За потреби налаштую просту панель редагування, щоб ви самі міняли тексти й фото без розробника.' },
          { q: 'Що потрібно від мене на старті?', a: 'Опис послуг, логотип і фото, якщо вони є, та приклади сайтів, які вам подобаються. Все інше можемо зібрати разом на дзвінку.' },
        ],
      },
      en: {
        navLabel: 'Website development',
        cardTitle: 'Full-service website development',
        cardText: 'Corporate and multi-page websites: design, copy, setup and launch in one place.',
        priceLabel: 'from $500',
        metaTitle: 'Website Development from $500 | Leonforge',
        metaDescription:
          'Full-service website development: 2–3 design concepts, responsive layout and basic SEO included. From $500, usually from 2 weeks.',
        h1: 'Website development, done for you',
        lead:
          'From the first call to launch: design options to pick from, ready copy, mobile-friendly layout, basic SEO and analytics connected.',
        intro: [
          'A full-service website means you do not have to hire a designer, a developer, a copywriter and an SEO specialist separately. You tell me about your business, and I come back with a finished site you can show clients right away.',
          'We always start with the goal: who your customers are, what they should do on the site, and what makes you different. Then I prepare 2–3 design concepts — you pick the one you like and we polish it together.',
          'Every site is built on a modern stack: fast loading, correct behaviour on phones and tablets, a clean heading structure, sitemap and robots.txt. That is the minimum Google needs before it starts showing your site in search.',
        ],
        includesTitle: 'What is included',
        includes: [
          { title: '2–3 design concepts', text: 'Several versions of the home page. Do not like them? I redo them at no extra cost.' },
          { title: 'Responsive on every screen', text: 'Phone, tablet, laptop, large monitor — the site looks right everywhere.' },
          { title: 'Copy and structure', text: 'I help shape the sections, headlines and calls to action so the page leads to an enquiry.' },
          { title: 'Basic SEO', text: 'Meta tags, heading structure, speed, sitemap.xml, robots.txt, Search Console.' },
          { title: 'Enquiry form', text: 'Requests land in your inbox or Telegram, so nothing gets lost.' },
          { title: 'Analytics', text: 'Google Analytics 4, plus Tag Manager and the Meta pixel if you need them.' },
        ],
        priceFrom: 'from $500',
        timeline: 'from 2 weeks, depends on scope',
        faq: [
          { q: 'How much does a website cost?', a: 'A multi-page site starts at $500. A single-page landing starts at $300. Basic SEO is included at no extra cost. I give an exact figure after a short free call.' },
          { q: 'How long does it take?', a: 'Usually from 2 weeks. It depends on scope: number of pages, features and how quickly you send materials and feedback.' },
          { q: 'Can I edit the texts myself later?', a: 'Yes. If you need it, I set up a simple editing panel so you can change text and images without a developer.' },
          { q: 'What do you need from me to start?', a: 'A description of your services, your logo and photos if you have them, and examples of sites you like. We can work out the rest on the call.' },
        ],
      },
      pl: {
        navLabel: 'Tworzenie stron',
        cardTitle: 'Tworzenie stron internetowych',
        cardText: 'Strony firmowe i wielostronicowe serwisy: projekt, teksty, konfiguracja i uruchomienie.',
        priceLabel: 'od $500',
        metaTitle: 'Tworzenie stron internetowych od $500 | Leonforge',
        metaDescription:
          'Tworzenie stron internetowych pod klucz: 2–3 warianty projektu, wersja mobilna i podstawowe SEO w cenie. Od $500, zwykle od 2 tygodni.',
        h1: 'Tworzenie stron internetowych pod klucz',
        lead:
          'Od pierwszej rozmowy do uruchomienia: projekt do wyboru, gotowe teksty, wersja mobilna, podstawowe SEO i podłączona analityka.',
        intro: [
          'Strona pod klucz oznacza, że nie musisz osobno szukać grafika, programisty, copywritera i specjalisty SEO. Opowiadasz o swojej firmie, a ja wracam z gotową stroną, którą od razu można pokazać klientom.',
          'Zaczynamy od celu: kim są Twoi klienci, co mają zrobić na stronie i czym się wyróżniasz. Potem przygotowuję 2–3 warianty projektu — wybierasz ten, który Ci się podoba, i razem doprowadzamy go do końca.',
          'Każdą stronę buduję na nowoczesnym stosie technologii: szybkie ładowanie, poprawne działanie na telefonach i tabletach, czysta struktura nagłówków, sitemap i robots.txt. To minimum, bez którego Google nie zacznie pokazywać strony w wynikach.',
        ],
        includesTitle: 'Co wchodzi w zakres',
        includes: [
          { title: '2–3 koncepcje projektu', text: 'Kilka wersji strony głównej. Nie podoba się? Poprawiam bez dopłat.' },
          { title: 'Wersja na każdy ekran', text: 'Telefon, tablet, laptop, duży monitor — strona wygląda dobrze wszędzie.' },
          { title: 'Teksty i struktura', text: 'Pomagam ułożyć sekcje, nagłówki i wezwania do działania, żeby strona prowadziła do zapytania.' },
          { title: 'Podstawowe SEO', text: 'Meta tagi, struktura nagłówków, szybkość, sitemap.xml, robots.txt, Search Console.' },
          { title: 'Formularz kontaktowy', text: 'Zgłoszenia trafiają na Twoją pocztę lub Telegram — nic nie ginie.' },
          { title: 'Analityka', text: 'Google Analytics 4, a w razie potrzeby Tag Manager i piksel Meta.' },
        ],
        priceFrom: 'od $500',
        timeline: 'od 2 tygodni, zależnie od zakresu',
        faq: [
          { q: 'Ile kosztuje strona pod klucz?', a: 'Strona wielostronicowa — od $500. Prosty landing page — od $300. Podstawowe SEO jest w cenie. Dokładną kwotę podaję po krótkiej bezpłatnej rozmowie.' },
          { q: 'Ile trwa realizacja?', a: 'Zwykle od 2 tygodni. Termin zależy od zakresu: liczby podstron, funkcji i tempa przekazywania materiałów.' },
          { q: 'Czy sam zmienię potem teksty?', a: 'Tak. W razie potrzeby konfiguruję prosty panel, w którym samodzielnie zmienisz teksty i zdjęcia.' },
          { q: 'Czego potrzebujesz na start?', a: 'Opisu usług, logo i zdjęć, jeśli są, oraz przykładów stron, które Ci się podobają. Resztę ustalimy na rozmowie.' },
        ],
      },
    },
  },
  {
    id: 'landing',
    slug: { uk: 'landing-pid-klyuch', en: 'landing-page', pl: 'landing-page' },
    cases: ['pampukha-pl', 'spotless-pro'],
    content: {
      uk: {
        navLabel: 'Лендінг',
        cardTitle: 'Лендінг під ключ',
        cardText: 'Односторінковий сайт під одну послугу чи рекламну кампанію. Базове SEO у вартості.',
        priceLabel: 'від $300',
        metaTitle: 'Лендінг під ключ — від $300 | Leonforge',
        metaDescription:
          'Розробка лендінгу під ключ: дизайн на вибір, форма заявок, адаптив і базове SEO у вартості. Ціна від $300, терміни — від тижня.',
        h1: 'Лендінг під ключ від $300',
        lead:
          'Одна сторінка, яка робить одну справу — приводить заявки. Дизайн на вибір, форма, аналітика і готовність до реклами.',
        intro: [
          'Лендінг потрібен, коли треба швидко перевірити ідею, запустити рекламу на конкретну послугу або зробити першу присутність бізнесу в інтернеті без великого бюджету.',
          'Я збираю сторінку за перевіреною структурою: сильний перший екран, вигоди простими словами, приклади робіт або відгуки, відповіді на заперечення, прозора ціна і кілька точок, де людина може залишити заявку.',
          'Лендінг одразу готовий до реклами: підключена аналітика, налаштовані цілі на відправлення форми, встановлений піксель Meta, якщо ви плануєте рекламу у Facebook та Instagram.',
        ],
        includesTitle: 'Що входить у роботу',
        includes: [
          { title: 'Продаюча структура', text: 'Блоки складаю під ваше завдання, а не за шаблоном: від першого екрана до форми.' },
          { title: 'Дизайн на вибір', text: '2–3 варіанти оформлення першого екрана, далі допрацьовуємо обраний.' },
          { title: 'Швидке завантаження', text: 'Оптимізовані зображення і легкий код — сторінка відкривається за секунди.' },
          { title: 'Форма заявок', text: 'Заявки на пошту або в Telegram, з захистом від спаму.' },
          { title: 'Готовність до реклами', text: 'Цілі в аналітиці й піксель Meta — щоб рекламу можна було запускати одразу.' },
          { title: 'Базове SEO', text: 'Мета-теги, заголовки, sitemap, підключення Search Console.' },
        ],
        priceFrom: 'від $300',
        timeline: 'від тижня, залежить від обсягу',
        faq: [
          { q: 'Чому лендінг дешевший за сайт?', a: 'Це одна сторінка з однією метою — менше екранів, менше сценаріїв, менше роботи. Але якість дизайну і швидкість такі самі.' },
          { q: 'Чи можна потім розширити лендінг до сайту?', a: 'Так. Лендінг робиться на тій самій основі, тому додати сторінки послуг і блог можна будь-коли без переробки з нуля.' },
          { q: 'Чи підходить лендінг для реклами?', a: 'Так, це його основне призначення. Аналітика й цілі налаштовані одразу, тож ви бачите вартість заявки з першого дня.' },
          { q: 'А якщо у мене немає текстів?', a: 'Це нормально. Я задаю питання про послугу і клієнтів, а тексти для блоків формулюю сам — ви лише перевіряєте факти.' },
        ],
      },
      en: {
        navLabel: 'Landing page',
        cardTitle: 'Landing page',
        cardText: 'A single page built around one service or ad campaign. Basic SEO included.',
        priceLabel: 'from $300',
        metaTitle: 'Landing Page from $300 | Leonforge',
        metaDescription:
          'Landing page development: design options, enquiry form, responsive layout and basic SEO included. From $300, usually from one week.',
        h1: 'Landing page from $300',
        lead:
          'One page that does one job — bring enquiries. Design options, a working form, analytics and ad-ready setup.',
        intro: [
          'A landing page is the right choice when you need to test an idea quickly, run ads for one specific service, or get your business online without a big budget.',
          'I build it on a proven structure: a strong first screen, benefits in plain words, work examples or reviews, answers to objections, transparent pricing and several points where a visitor can leave a request.',
          'The page is ad-ready from day one: analytics connected, form-submit goals configured and the Meta pixel installed if you plan Facebook or Instagram campaigns.',
        ],
        includesTitle: 'What is included',
        includes: [
          { title: 'Structure that sells', text: 'Sections built around your goal, not a template — from the first screen to the form.' },
          { title: 'Design options', text: '2–3 versions of the first screen, then we refine the one you choose.' },
          { title: 'Fast loading', text: 'Optimised images and lightweight code — the page opens in seconds.' },
          { title: 'Enquiry form', text: 'Requests to your inbox or Telegram, with spam protection.' },
          { title: 'Ad-ready setup', text: 'Analytics goals and the Meta pixel, so campaigns can start immediately.' },
          { title: 'Basic SEO', text: 'Meta tags, headings, sitemap and Search Console.' },
        ],
        priceFrom: 'from $300',
        timeline: 'from one week, depends on scope',
        faq: [
          { q: 'Why is a landing page cheaper than a website?', a: 'It is one page with one goal — fewer screens and fewer scenarios. The design quality and speed are the same.' },
          { q: 'Can it grow into a full website later?', a: 'Yes. It is built on the same foundation, so service pages and a blog can be added at any time without starting over.' },
          { q: 'Is a landing page good for ads?', a: 'That is its main purpose. Analytics and goals are set up from the start, so you see your cost per enquiry from day one.' },
          { q: 'What if I have no copy?', a: 'That is fine. I ask about your service and customers and draft the section copy myself — you only check the facts.' },
        ],
      },
      pl: {
        navLabel: 'Landing page',
        cardTitle: 'Landing page',
        cardText: 'Jedna strona pod konkretną usługę lub kampanię reklamową. Podstawowe SEO w cenie.',
        priceLabel: 'od $300',
        metaTitle: 'Landing page od $300 | Leonforge',
        metaDescription:
          'Landing page pod klucz: projekt do wyboru, formularz, wersja mobilna i podstawowe SEO w cenie. Od $300, zwykle od tygodnia.',
        h1: 'Landing page od $300',
        lead:
          'Jedna strona z jednym zadaniem — przynosić zapytania. Projekt do wyboru, formularz, analityka i gotowość na reklamę.',
        intro: [
          'Landing page sprawdza się, gdy trzeba szybko przetestować pomysł, uruchomić reklamę konkretnej usługi albo pojawić się w internecie bez dużego budżetu.',
          'Buduję go według sprawdzonej struktury: mocny pierwszy ekran, korzyści prostym językiem, przykłady realizacji lub opinie, odpowiedzi na obiekcje, jasna cena i kilka miejsc na pozostawienie zapytania.',
          'Strona jest gotowa na reklamę od pierwszego dnia: podłączona analityka, cele na wysłanie formularza i piksel Meta, jeśli planujesz kampanie na Facebooku i Instagramie.',
        ],
        includesTitle: 'Co wchodzi w zakres',
        includes: [
          { title: 'Struktura, która sprzedaje', text: 'Sekcje układam pod Twój cel, a nie według szablonu — od pierwszego ekranu do formularza.' },
          { title: 'Projekt do wyboru', text: '2–3 warianty pierwszego ekranu, potem dopracowujemy wybrany.' },
          { title: 'Szybkie ładowanie', text: 'Zoptymalizowane zdjęcia i lekki kod — strona otwiera się w kilka sekund.' },
          { title: 'Formularz zapytań', text: 'Zgłoszenia na pocztę lub Telegram, z ochroną przed spamem.' },
          { title: 'Gotowość na reklamę', text: 'Cele w analityce i piksel Meta, żeby kampanie mogły ruszyć od razu.' },
          { title: 'Podstawowe SEO', text: 'Meta tagi, nagłówki, sitemap i Search Console.' },
        ],
        priceFrom: 'od $300',
        timeline: 'od tygodnia, zależnie od zakresu',
        faq: [
          { q: 'Dlaczego landing jest tańszy niż strona?', a: 'To jedna strona z jednym celem — mniej ekranów i scenariuszy. Jakość projektu i szybkość pozostają takie same.' },
          { q: 'Czy można go później rozbudować?', a: 'Tak. Powstaje na tej samej podstawie, więc podstrony usług i blog można dodać w każdej chwili.' },
          { q: 'Czy landing nadaje się pod reklamę?', a: 'To jego główne zadanie. Analityka i cele są gotowe od startu, więc od razu widzisz koszt zapytania.' },
          { q: 'A jeśli nie mam tekstów?', a: 'To normalne. Pytam o usługę i klientów, a treści do sekcji przygotowuję sam — Ty sprawdzasz tylko fakty.' },
        ],
      },
    },
  },
  {
    id: 'ecommerce',
    slug: { uk: 'internet-magazyn', en: 'online-store', pl: 'sklep-internetowy' },
    cases: ['lemonshine', 'laser-beauty'],
    content: {
      uk: {
        navLabel: 'Інтернет-магазин',
        cardTitle: 'Створення інтернет-магазину',
        cardText: 'Каталог, кошик, оплата і доставка. Магазин, яким зручно керувати самому.',
        priceLabel: 'ціна за домовленістю',
        metaTitle: 'Створення інтернет-магазину під ключ | Leonforge',
        metaDescription:
          'Розробка інтернет-магазину: каталог товарів, кошик, онлайн-оплата, доставка та панель керування. Запуск від 2 тижнів, ціна за домовленістю.',
        h1: 'Створення інтернет-магазину',
        lead:
          'Магазин із каталогом, кошиком, оплатою і зручною панеллю, у якій ви самі додаєте товари й бачите замовлення.',
        intro: [
          'Інтернет-магазин відрізняється від звичайного сайту тим, що з ним ви працюєте щодня. Тому головне тут не тільки вітрина для покупця, а й зручність для вас: швидко додати товар, змінити ціну, побачити нове замовлення.',
          'Я роблю каталог із категоріями і фільтрами, картки товарів із фото та описом, кошик і оформлення замовлення в кілька кроків. Підключаю онлайн-оплату та варіанти доставки, які використовує ваш бізнес.',
          'Окремо приділяю увагу пошуку: правильні адреси сторінок категорій і товарів, унікальні мета-теги, розмітка товарів для Google. Це те, завдяки чому магазин починає приводити покупців із пошуку, а не лише з реклами.',
        ],
        includesTitle: 'Що входить у роботу',
        includes: [
          { title: 'Каталог і категорії', text: 'Структура товарів, фільтри та пошук, зручні на телефоні.' },
          { title: 'Кошик і замовлення', text: 'Оформлення в кілька кроків без зайвих полів і реєстрації.' },
          { title: 'Оплата і доставка', text: 'Підключення онлайн-оплати та варіантів доставки під ваш ринок.' },
          { title: 'Панель керування', text: 'Додавайте товари, змінюйте ціни та обробляйте замовлення самостійно.' },
          { title: 'SEO для товарів', text: 'Зрозумілі адреси сторінок, унікальні мета-теги, розмітка Product для Google.' },
          { title: 'Аналітика продажів', text: 'Налаштування електронної торгівлі, щоб бачити, які товари й канали дають гроші.' },
        ],
        priceFrom: 'ціна за домовленістю',
        timeline: 'від 2 тижнів',
        faq: [
          { q: 'Скільки товарів можна додати?', a: 'Обмежень немає. Структуру каталогу продумуємо на старті, щоб і при 20, і при 2000 товарів навігація залишалась зрозумілою.' },
          { q: 'Чи зможу я сам додавати товари?', a: 'Так. Панель керування налаштовується під вас, і я показую на дзвінку, як нею користуватись.' },
          { q: 'Яку оплату можна підключити?', a: 'Основні платіжні сервіси для України та ЄС. Конкретний варіант обираємо під ваш бізнес і країну.' },
          { q: 'Скільки часу займе запуск?', a: 'Від 2 тижнів. Найбільше часу зазвичай забирає підготовка фото і описів товарів — з цим теж допомагаю.' },
        ],
      },
      en: {
        navLabel: 'Online store',
        cardTitle: 'Online store development',
        cardText: 'Catalogue, cart, payments and delivery — plus an admin panel you can run yourself.',
        priceLabel: 'price on request',
        metaTitle: 'Online Store Development | Leonforge',
        metaDescription:
          'Online store development: product catalogue, cart, online payments, delivery options and an admin panel. Launch from 2 weeks, price on request.',
        h1: 'Online store development',
        lead:
          'A store with a catalogue, cart, payments and a panel where you add products and see orders yourself.',
        intro: [
          'An online store differs from a regular website because you work with it every day. So it is not only the shop window that matters, but how quickly you can add a product, change a price or spot a new order.',
          'I build a catalogue with categories and filters, product cards with photos and descriptions, a cart and a short checkout. Payments and delivery options are connected to match how your business actually works.',
          'Search gets separate attention: clean category and product URLs, unique meta tags and product markup for Google. That is what makes a store bring buyers from search, not only from ads.',
        ],
        includesTitle: 'What is included',
        includes: [
          { title: 'Catalogue and categories', text: 'Product structure, filters and search that work well on a phone.' },
          { title: 'Cart and checkout', text: 'A short checkout with no unnecessary fields or forced registration.' },
          { title: 'Payments and delivery', text: 'Online payments and delivery options connected for your market.' },
          { title: 'Admin panel', text: 'Add products, change prices and process orders on your own.' },
          { title: 'SEO for products', text: 'Readable URLs, unique meta tags and Product markup for Google.' },
          { title: 'Sales analytics', text: 'Ecommerce tracking so you see which products and channels make money.' },
        ],
        priceFrom: 'price on request',
        timeline: 'from 2 weeks',
        faq: [
          { q: 'How many products can I have?', a: 'There is no limit. We plan the catalogue structure up front so navigation stays clear with 20 or 2,000 products.' },
          { q: 'Can I add products myself?', a: 'Yes. The admin panel is set up for you and I walk you through it on a call.' },
          { q: 'Which payment providers can be connected?', a: 'The main providers for Ukraine and the EU. We choose the right one for your business and country.' },
          { q: 'How long does launch take?', a: 'From 2 weeks. Preparing product photos and descriptions usually takes the longest — I help with that too.' },
        ],
      },
      pl: {
        navLabel: 'Sklep internetowy',
        cardTitle: 'Sklep internetowy',
        cardText: 'Katalog, koszyk, płatności i dostawa oraz panel, którym zarządzasz samodzielnie.',
        priceLabel: 'cena do uzgodnienia',
        metaTitle: 'Sklep internetowy pod klucz | Leonforge',
        metaDescription:
          'Tworzenie sklepu internetowego: katalog produktów, koszyk, płatności online, dostawa i panel administracyjny. Start od 2 tygodni, cena do uzgodnienia.',
        h1: 'Tworzenie sklepu internetowego',
        lead:
          'Sklep z katalogiem, koszykiem, płatnościami i panelem, w którym sam dodajesz produkty i widzisz zamówienia.',
        intro: [
          'Sklep internetowy różni się od zwykłej strony tym, że pracujesz z nim codziennie. Liczy się więc nie tylko witryna dla klienta, ale i wygoda dla Ciebie: szybko dodać produkt, zmienić cenę, zobaczyć nowe zamówienie.',
          'Tworzę katalog z kategoriami i filtrami, karty produktów ze zdjęciami i opisem, koszyk oraz krótki proces zamówienia. Podłączam płatności online i sposoby dostawy, z których faktycznie korzystasz.',
          'Osobno zajmuję się wyszukiwarką: czytelne adresy kategorii i produktów, unikalne meta tagi oraz znaczniki produktów dla Google. Dzięki temu sklep zaczyna sprowadzać klientów z wyników wyszukiwania, a nie tylko z reklam.',
        ],
        includesTitle: 'Co wchodzi w zakres',
        includes: [
          { title: 'Katalog i kategorie', text: 'Struktura produktów, filtry i wyszukiwarka wygodne na telefonie.' },
          { title: 'Koszyk i zamówienie', text: 'Krótkie zamówienie bez zbędnych pól i obowiązkowej rejestracji.' },
          { title: 'Płatności i dostawa', text: 'Podłączenie płatności online i metod dostawy pod Twój rynek.' },
          { title: 'Panel administracyjny', text: 'Samodzielnie dodajesz produkty, zmieniasz ceny i obsługujesz zamówienia.' },
          { title: 'SEO produktów', text: 'Czytelne adresy, unikalne meta tagi i znaczniki Product dla Google.' },
          { title: 'Analityka sprzedaży', text: 'Konfiguracja e-commerce, żeby widzieć, które produkty i kanały zarabiają.' },
        ],
        priceFrom: 'cena do uzgodnienia',
        timeline: 'od 2 tygodni',
        faq: [
          { q: 'Ile produktów mogę dodać?', a: 'Bez ograniczeń. Strukturę katalogu planujemy na starcie, żeby nawigacja była czytelna przy 20 i przy 2000 produktów.' },
          { q: 'Czy sam dodam produkty?', a: 'Tak. Panel konfiguruję pod Ciebie i pokazuję na rozmowie, jak z niego korzystać.' },
          { q: 'Jakie płatności można podłączyć?', a: 'Główne systemy płatności dla Polski, Ukrainy i UE. Wybieramy odpowiedni pod Twój biznes.' },
          { q: 'Ile trwa uruchomienie?', a: 'Od 2 tygodni. Najwięcej czasu zajmuje zwykle przygotowanie zdjęć i opisów produktów — w tym też pomagam.' },
        ],
      },
    },
  },
  {
    id: 'seo',
    slug: { uk: 'seo-prosuvannya', en: 'seo', pl: 'seo' },
    cases: ['expertise', 'spotless-pro'],
    content: {
      uk: {
        navLabel: 'SEO',
        cardTitle: 'SEO-просування сайту',
        cardText: 'Технічна оптимізація, структура сторінок і тексти під запити, за якими вас шукають.',
        priceLabel: 'входить у вартість сайту',
        metaTitle: 'SEO-просування сайту — оптимізація під Google | Leonforge',
        metaDescription:
          'Базове SEO входить у вартість кожного сайту: мета-теги, структура, sitemap і Search Console. Окремий аудит чужого сайту — за домовленістю.',
        h1: 'SEO-просування сайту',
        lead:
          'Роблю так, щоб сайт знаходили в Google за запитами ваших клієнтів — від технічної бази до текстів на сторінках.',
        intro: [
          'SEO — це не магія і не разова кнопка. Це три речі: технічно справний сайт, сторінки під конкретні запити людей і час, за який Google встигає їх оцінити. Я працюю по всіх трьох.',
          'Починаю з аудиту: перевіряю швидкість, мобільну версію, заголовки, мета-теги, дублі сторінок, індексацію в Search Console. Далі збираю запити, за якими вас реально шукають, і показую, які з них можна взяти найшвидше.',
          'Найбільший ефект зазвичай дає структура: окрема сторінка під кожну послугу і напрям замість однієї «все і одразу». Саме так сайт починає з\'являтись у пошуку за десятками запитів, а не за назвою компанії.',
        ],
        includesTitle: 'Що входить у роботу',
        includes: [
          { title: 'Технічний аудит', text: 'Швидкість, мобільна версія, помилки індексації, дублі, биті посилання.' },
          { title: 'Збір запитів', text: 'Список реальних пошукових фраз із частотністю і складністю — з поясненням, що брати першим.' },
          { title: 'Структура сторінок', text: 'Окрема сторінка під кожну послугу чи напрям, з правильною перелінковкою.' },
          { title: 'Оптимізація контенту', text: 'Заголовки, мета-теги, тексти під запити — без переспаму і «води».' },
          { title: 'Технічна база', text: 'Sitemap.xml, robots.txt, hreflang для мовних версій, мікророзмітка.' },
          { title: 'Search Console', text: 'Підключення, відправлення карти сайту і зрозумілий звіт про динаміку.' },
        ],
        priceFrom: 'входить у вартість сайту',
        timeline: 'перші зміни — 4–8 тижнів',
        faq: [
          { q: 'Коли будуть результати?', a: 'Технічні правки Google бачить за кілька днів, а зростання позицій зазвичай помітно через 4–8 тижнів. Це нормальний строк для нового сайту.' },
          { q: 'Ви гарантуєте перше місце?', a: 'Ні, і ніхто чесно не може цього гарантувати — позиції визначає Google. Я гарантую виконані роботи і прозорий звіт, що саме зроблено і що це змінило.' },
          { q: 'Чи потрібно SEO, якщо є реклама?', a: 'Реклама дає трафік, поки ви платите. SEO працює далі й після того, як бюджет закінчився. Найкраще вони працюють разом.' },
          { q: 'Ви робите SEO для чужих сайтів?', a: 'Так. Аудит і оптимізацію можна зробити для будь-якого сайту, не тільки для зробленого мною.' },
        ],
      },
      en: {
        navLabel: 'SEO',
        cardTitle: 'SEO for your website',
        cardText: 'Technical fixes, page structure and copy built around the searches your clients actually use.',
        priceLabel: 'included with every site',
        metaTitle: 'SEO Services — Get Found on Google | Leonforge',
        metaDescription:
          'Basic SEO is included with every website: meta tags, structure, sitemap and Search Console. A separate audit of an existing site is quoted on request.',
        h1: 'SEO for your website',
        lead:
          'Making your site findable in Google for the searches your customers use — from the technical base to the copy on each page.',
        intro: [
          'SEO is not magic and not a one-time switch. It is three things: a technically sound site, pages built for specific searches, and the time Google needs to evaluate them. I work on all three.',
          'I start with an audit: speed, mobile version, headings, meta tags, duplicate pages and indexing in Search Console. Then I collect the searches people actually use and show which ones are realistic to win first.',
          'Structure usually delivers the biggest gain: a dedicated page for each service instead of one page trying to cover everything. That is how a site starts appearing for dozens of searches, not just for the company name.',
        ],
        includesTitle: 'What is included',
        includes: [
          { title: 'Technical audit', text: 'Speed, mobile version, indexing errors, duplicates and broken links.' },
          { title: 'Keyword research', text: 'A list of real search phrases with volume and difficulty, and what to target first.' },
          { title: 'Page structure', text: 'A dedicated page per service, with sensible internal linking.' },
          { title: 'Content optimisation', text: 'Headings, meta tags and copy built for the searches — without keyword stuffing.' },
          { title: 'Technical foundation', text: 'Sitemap.xml, robots.txt, hreflang for language versions, structured data.' },
          { title: 'Search Console', text: 'Setup, sitemap submission and a plain-language report on progress.' },
        ],
        priceFrom: 'included with every site',
        timeline: 'first movement in 4–8 weeks',
        faq: [
          { q: 'When will I see results?', a: 'Google picks up technical fixes within days, while ranking growth is usually visible after 4–8 weeks. That is a normal timeline for a young site.' },
          { q: 'Do you guarantee first place?', a: 'No, and nobody honestly can — Google decides rankings. I guarantee the work done and a transparent report of what changed.' },
          { q: 'Do I need SEO if I run ads?', a: 'Ads bring traffic while you pay. SEO keeps working after the budget stops. They work best together.' },
          { q: 'Do you do SEO for sites you did not build?', a: 'Yes. An audit and optimisation can be done for any website.' },
        ],
      },
      pl: {
        navLabel: 'SEO',
        cardTitle: 'Pozycjonowanie SEO',
        cardText: 'Optymalizacja techniczna, struktura podstron i treści pod frazy, których używają klienci.',
        priceLabel: 'w cenie każdej strony',
        metaTitle: 'Pozycjonowanie SEO — widoczność w Google | Leonforge',
        metaDescription:
          'Podstawowe SEO jest w cenie każdej strony: meta tagi, struktura, sitemap i Search Console. Osobny audyt istniejącej strony — wycena indywidualna.',
        h1: 'Pozycjonowanie SEO',
        lead:
          'Sprawiam, że strona jest znajdowana w Google po frazach Twoich klientów — od bazy technicznej po treści na podstronach.',
        intro: [
          'SEO to nie magia ani jednorazowy przycisk. To trzy rzeczy: sprawna technicznie strona, podstrony pod konkretne zapytania i czas, którego Google potrzebuje na ocenę. Pracuję nad wszystkimi trzema.',
          'Zaczynam od audytu: szybkość, wersja mobilna, nagłówki, meta tagi, duplikaty i indeksacja w Search Console. Następnie zbieram frazy, których naprawdę używają klienci, i pokazuję, które można zdobyć najszybciej.',
          'Największy efekt daje zwykle struktura: osobna podstrona pod każdą usługę zamiast jednej strony o wszystkim. Tak serwis zaczyna pojawiać się w wynikach na dziesiątki zapytań, a nie tylko na nazwę firmy.',
        ],
        includesTitle: 'Co wchodzi w zakres',
        includes: [
          { title: 'Audyt techniczny', text: 'Szybkość, wersja mobilna, błędy indeksacji, duplikaty, martwe linki.' },
          { title: 'Dobór fraz', text: 'Lista realnych zapytań z liczbą wyszukań i trudnością oraz kolejność działań.' },
          { title: 'Struktura podstron', text: 'Osobna podstrona pod każdą usługę i sensowne linkowanie wewnętrzne.' },
          { title: 'Optymalizacja treści', text: 'Nagłówki, meta tagi i teksty pod frazy — bez przesycenia słowami kluczowymi.' },
          { title: 'Baza techniczna', text: 'Sitemap.xml, robots.txt, hreflang dla wersji językowych, dane strukturalne.' },
          { title: 'Search Console', text: 'Konfiguracja, przesłanie mapy strony i czytelny raport z postępów.' },
        ],
        priceFrom: 'w cenie każdej strony',
        timeline: 'pierwsze zmiany w 4–8 tygodni',
        faq: [
          { q: 'Kiedy będą efekty?', a: 'Poprawki techniczne Google widzi w kilka dni, a wzrost pozycji zwykle po 4–8 tygodniach. To normalny termin dla młodej strony.' },
          { q: 'Czy gwarantujesz pierwsze miejsce?', a: 'Nie i nikt uczciwie nie może tego zagwarantować — o pozycjach decyduje Google. Gwarantuję wykonaną pracę i przejrzysty raport.' },
          { q: 'Czy SEO ma sens przy reklamie?', a: 'Reklama daje ruch, dopóki płacisz. SEO działa dalej po zakończeniu budżetu. Najlepiej działają razem.' },
          { q: 'Robisz SEO dla cudzych stron?', a: 'Tak. Audyt i optymalizację można wykonać dla dowolnej strony.' },
        ],
      },
    },
  },
  {
    id: 'ads',
    slug: { uk: 'google-ads-reklama', en: 'google-ads', pl: 'google-ads' },
    cases: ['lemonshine', 'pampukha-pl'],
    content: {
      uk: {
        navLabel: 'Реклама',
        cardTitle: 'Реклама Google, Facebook та Instagram',
        cardText: 'Базове налаштування кампаній, аналітика і зрозуміле пояснення, куди йдуть гроші.',
        priceLabel: 'ціна за домовленістю',
        metaTitle: 'Налаштування реклами Google Ads та Facebook | Leonforge',
        metaDescription:
          'Базове налаштування реклами: Google Ads, Facebook та Instagram, аналітика і цілі. Ціна залежить від обсягу робіт і рахується після розмови.',
        h1: 'Налаштування реклами Google, Facebook та Instagram',
        lead:
          'Запускаю перші кампанії, підключаю аналітику і пояснюю простими словами, скільки коштує заявка і що з цим робити.',
        intro: [
          'Реклама — найшвидший спосіб отримати перших клієнтів, поки SEO набирає обертів. Але вона працює тільки тоді, коли є куди вести людей і чим виміряти результат.',
          'Тому я завжди починаю з підготовки: перевіряю сторінку, на яку піде трафік, налаштовую цілі в аналітиці та піксель Meta. Потім збираю кампанію — аудиторії, ключові фрази, оголошення, бюджет.',
          'Після запуску не зникаю: показую, як читати звіти, які цифри мають значення, а які ні, і що робити, якщо заявки дорогі. Мета — щоб ви розуміли свою рекламу, а не просто платили за неї.',
        ],
        includesTitle: 'Що входить у роботу',
        includes: [
          { title: 'Підготовка сторінки', text: 'Перевіряю, чи готова сторінка приймати трафік: швидкість, форма, зрозуміла пропозиція.' },
          { title: 'Google Ads', text: 'Пошукові кампанії: ключові фрази, мінус-слова, оголошення, розширення, бюджет.' },
          { title: 'Facebook та Instagram', text: 'Рекламний кабінет, аудиторії, перші креативи і тестові кампанії.' },
          { title: 'Аналітика і цілі', text: 'Google Analytics 4, Tag Manager, піксель Meta, цілі на відправлення форми.' },
          { title: 'Тестовий запуск', text: 'Кілька варіантів оголошень, щоб побачити, що працює краще на ваших грошах.' },
          { title: 'Пояснення звітів', text: 'Розбираємо разом, скільки коштує клік і заявка та де можна зекономити.' },
        ],
        priceFrom: 'ціна за домовленістю',
        timeline: 'залежить від обсягу',
        faq: [
          { q: 'Який бюджет потрібен на старт?', a: 'Рекламний бюджет ви платите напряму Google або Meta. Вартість самого налаштування залежить від обсягу робіт — рахую після короткої розмови.' },
          { q: 'Google чи Facebook — що обрати?', a: 'Google краще працює, коли послугу вже шукають. Facebook та Instagram — коли попит треба створити. Часто починаємо з одного і додаємо другий.' },
          { q: 'Ви ведете рекламу постійно?', a: 'Основна послуга — налаштування і запуск із поясненням. Регулярне ведення можливе окремо, за домовленістю.' },
          { q: 'Що як реклама не спрацює?', a: 'Дивимось цифри: дорогий клік, слабке оголошення чи сторінка, яка не переконує. Перші правки після запуску роблю без доплат.' },
        ],
      },
      en: {
        navLabel: 'Ads',
        cardTitle: 'Google, Facebook and Instagram ads',
        cardText: 'Campaign setup, analytics and a plain explanation of where your money goes.',
        priceLabel: 'price on request',
        metaTitle: 'Google Ads and Facebook Ads Setup | Leonforge',
        metaDescription:
          'Ad campaign setup: Google Ads, Facebook and Instagram, analytics and conversion goals. Price depends on scope and is quoted after a short call.',
        h1: 'Google, Facebook and Instagram ads setup',
        lead:
          'I launch your first campaigns, connect analytics and explain in plain words what an enquiry costs and what to do about it.',
        intro: [
          'Ads are the fastest way to get first customers while SEO builds up. But they only work when there is somewhere to send people and a way to measure the result.',
          'So I always start with preparation: checking the page that will receive the traffic, setting up analytics goals and the Meta pixel. Then I build the campaign — audiences, keywords, ad copy, budget.',
          'After launch I do not disappear: I show you how to read the reports, which numbers matter and which do not, and what to do when enquiries get expensive. The goal is that you understand your ads rather than just pay for them.',
        ],
        includesTitle: 'What is included',
        includes: [
          { title: 'Landing page check', text: 'Making sure the page is ready for traffic: speed, form, clear offer.' },
          { title: 'Google Ads', text: 'Search campaigns: keywords, negative keywords, ad copy, extensions, budget.' },
          { title: 'Facebook and Instagram', text: 'Ad account, audiences, first creatives and test campaigns.' },
          { title: 'Analytics and goals', text: 'Google Analytics 4, Tag Manager, Meta pixel, form-submit goals.' },
          { title: 'Test launch', text: 'Several ad variants so you can see what works on your budget.' },
          { title: 'Report walkthrough', text: 'We go through cost per click and per enquiry, and where you can save.' },
        ],
        priceFrom: 'price on request',
        timeline: 'depends on scope',
        faq: [
          { q: 'What budget do I need to start?', a: 'You pay the ad budget directly to Google or Meta. The setup fee depends on the scope of work and is quoted after a short call.' },
          { q: 'Google or Facebook?', a: 'Google works better when people already search for your service. Facebook and Instagram work when demand has to be created. We often start with one and add the other.' },
          { q: 'Do you manage campaigns long term?', a: 'The core service is setup, launch and explanation. Ongoing management is possible separately by agreement.' },
          { q: 'What if the ads do not work?', a: 'We look at the numbers: expensive clicks, weak ad copy or a page that does not convince. The first fixes after launch are included.' },
        ],
      },
      pl: {
        navLabel: 'Reklama',
        cardTitle: 'Reklama Google, Facebook i Instagram',
        cardText: 'Konfiguracja kampanii, analityka i jasne wyjaśnienie, na co idą pieniądze.',
        priceLabel: 'cena do uzgodnienia',
        metaTitle: 'Konfiguracja reklam Google Ads i Facebook | Leonforge',
        metaDescription:
          'Konfiguracja reklam: Google Ads, Facebook i Instagram, analityka i cele konwersji. Cena zależy od zakresu i jest wyceniana po rozmowie.',
        h1: 'Konfiguracja reklam Google, Facebook i Instagram',
        lead:
          'Uruchamiam pierwsze kampanie, podłączam analitykę i tłumaczę prostym językiem, ile kosztuje zapytanie i co z tym zrobić.',
        intro: [
          'Reklama to najszybszy sposób na pierwszych klientów, zanim SEO nabierze rozpędu. Działa jednak tylko wtedy, gdy jest dokąd kierować ludzi i czym zmierzyć efekt.',
          'Dlatego zaczynam od przygotowania: sprawdzam stronę docelową, konfiguruję cele w analityce i piksel Meta. Potem buduję kampanię — grupy odbiorców, frazy, treści reklam, budżet.',
          'Po starcie nie znikam: pokazuję, jak czytać raporty, które liczby mają znaczenie, a które nie, i co robić, gdy zapytania są drogie. Chodzi o to, żebyś rozumiał swoją reklamę, a nie tylko za nią płacił.',
        ],
        includesTitle: 'Co wchodzi w zakres',
        includes: [
          { title: 'Przygotowanie strony', text: 'Sprawdzam, czy strona jest gotowa na ruch: szybkość, formularz, jasna oferta.' },
          { title: 'Google Ads', text: 'Kampanie w wyszukiwarce: frazy, wykluczenia, treści reklam, rozszerzenia, budżet.' },
          { title: 'Facebook i Instagram', text: 'Konto reklamowe, grupy odbiorców, pierwsze kreacje i kampanie testowe.' },
          { title: 'Analityka i cele', text: 'Google Analytics 4, Tag Manager, piksel Meta, cele na wysłanie formularza.' },
          { title: 'Start testowy', text: 'Kilka wariantów reklam, żeby zobaczyć, co działa na Twoim budżecie.' },
          { title: 'Omówienie raportów', text: 'Analizujemy koszt kliknięcia i zapytania oraz miejsca na oszczędności.' },
        ],
        priceFrom: 'cena do uzgodnienia',
        timeline: 'zależnie od zakresu',
        faq: [
          { q: 'Jaki budżet na start?', a: 'Budżet reklamowy płacisz bezpośrednio Google lub Meta. Koszt samej konfiguracji zależy od zakresu i wyceniam go po krótkiej rozmowie.' },
          { q: 'Google czy Facebook?', a: 'Google działa lepiej, gdy usługi już się szuka. Facebook i Instagram — gdy popyt trzeba stworzyć. Często zaczynamy od jednego i dodajemy drugi.' },
          { q: 'Czy prowadzisz kampanie na stałe?', a: 'Podstawowa usługa to konfiguracja, start i wyjaśnienie. Stałe prowadzenie jest możliwe osobno.' },
          { q: 'A jeśli reklama nie zadziała?', a: 'Sprawdzamy liczby: drogie kliknięcia, słaba reklama albo strona, która nie przekonuje. Pierwsze poprawki po starcie są w cenie.' },
        ],
      },
    },
  },
];

export const getService = (id: string) => SERVICES.find((s) => s.id === id);

export const findServiceBySlug = (lang: Lang, slug: string) =>
  SERVICES.find((s) => s.slug[lang] === slug);
