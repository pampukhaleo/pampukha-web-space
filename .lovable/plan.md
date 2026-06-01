## Що зробимо

### 1. Замінити «соцмережах» на «Facebook» в hero (UK)
- `src/i18n/locales/uk/translation.json` → `hero.description`: «…SEO-оптимізація та допомога з рекламою Google і Facebook. Готовий сайт за 3–5 днів від $300.»
- EN/PL уже містять «Google and social media / Google i social media» — за бажанням теж замінити на Facebook (підтвердити в чаті, поки роблю тільки UK, бо в скрінщоті був UK).

### 2. Зменшити відступи після Hero та «Що я роблю»
- `HeroSection.tsx`: `pb-16 lg:pb-32` → `pb-10 lg:pb-16`
- `ServicesSection.tsx`: `py-16 md:py-24` → `py-12 md:py-16`
(інші секції не чіпаємо, щоб ритм сайту лишився)

### 3. Перевірка SEO-файлів
Перевірив — нові тексти вже без «AI»:
- `index.html` — title/description/og — оновлено
- `src/pages/Index.tsx` — SEO props — оновлено
- `public/llms.txt` — оновлено
- `public/sitemap.xml` — без текстового контенту, ОК

Єдина невідповідність: у `uk/translation.json` лишилось «соцмережах» — виправляється в п.1. Все інше синхронно.

### 4. SSR — статус
**Справжнього SSR немає.** У `vite.config.ts` стоїть `@prerenderer/rollup-plugin` з Puppeteer — це **prerendering на білді** (генерує статичний HTML тільки для `/`). Це закриває 90% потреб (Googlebot, LinkedIn, Slack, Facebook бачать готовий HTML), але це не повноцінний SSR — кожен новий маршрут треба додавати в `routes: ['/']`, а динамічні сторінки (із параметрами) не рендеряться.

Якщо потрібен справжній SSR — це міграція на TanStack Start / Next, велика робота. Зараз пропоную **залишити prerender** — для цього сайту-візитки його достатньо.

---

### Файли, які зміняться
- `src/i18n/locales/uk/translation.json` (1 рядок)
- `src/components/HeroSection.tsx` (1 клас)
- `src/components/ServicesSection.tsx` (1 клас)
