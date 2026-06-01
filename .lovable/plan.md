## План: убрать GTM и поставить только Meta Pixel

### Цель
Полностью удалить Google Tag Manager и весь связанный с ним код (dataLayer, события, web-vitals трекинг). Установить чистый код Meta Pixel напрямую в `index.html`. События (Lead, Contact и т.д.) пользователь настроит вручную через «Настройку событий» в Events Manager — поэтому в коде формы и кнопок никаких `fbq('track', ...)` не нужно.

### Изменения

**1. `index.html`**
- Удалить блок Google Tag Manager (`<script>` в `<head>` и `<noscript>` в `<body>`).
- Вставить вместо него стандартный Meta Pixel base code с ID `247977289845698`:
  - `<script>` с `fbq('init', ...)` и `fbq('track', 'PageView')` в `<head>`.
  - `<noscript><img src="https://www.facebook.com/tr?id=247977289845698&ev=PageView&noscript=1"/></noscript>` в `<body>` (не в `<head>` — по правилам HTML).

**2. `src/components/contact/ContactForm.tsx`**
- Убрать импорт и вызовы `useAnalytics` / `trackFormSubmission`.
- Никакого ручного `fbq('track','Lead')` не добавляем — настройка событий пойдёт через Event Setup Tool в Meta.

**3. `src/components/SEO/Analytics.tsx`**
- Удалить файл целиком (он только пушит события в `dataLayer`, которого больше не будет).
- Удалить пакет `web-vitals` из `package.json` (используется только здесь).

**4. Поиск и зачистка остального**
- Пройтись по проекту по ключам: `dataLayer`, `useAnalytics`, `trackInteraction`, `trackCTAClick`, `trackPortfolioView`, `trackTelegramClick`, `trackScroll`, `gtm`, `GTM-`, `gtag`.
- Удалить все вызовы и импорты, оставив компоненты функционально работающими (просто без трекинга).

**5. Обновить память проекта**
- В `mem://index.md` строку «Uses GTM/GA4 for analytics» заменить на «Uses Meta Pixel only (no GTM, no GA4)».
- Файл `mem://marketing/analytics` обновить или удалить из индекса, чтобы не давал устаревших инструкций.
- Удалить устаревшую документацию: `docs/EVENTS_REFERENCE.md`, `docs/GTM_MIGRATION_CHECKLIST.md`, `docs/GTM_SETUP_GUIDE.md`.

### Что НЕ меняется
- Логика отправки формы (Supabase edge function `swift-responder`) остаётся как есть.
- Дизайн, переводы, SEO-метатеги, structured data — без изменений.
- Кнопки Telegram, портфолио, CTA продолжают работать, просто без отправки событий в аналитику.

### Последствия
- GA4 перестанет получать данные с сайта — статистика посещений в Google Analytics обнулится.
- В Meta Events Manager появится чистый PageView без помех от GTM.
- Дополнительные события (Lead на отправке формы, Contact на клике Telegram) пользователь добавит сам через Event Setup Tool в интерфейсе Meta — код трогать не нужно.

### Технические детали
- Meta Pixel ID: `247977289845698`.
- Base code берётся из официального шаблона Meta (`connect.facebook.net/en_US/fbevents.js`), без модификаций.
- `<noscript>` для Pixel размещается в `<body>` (HTML5 запрещает `<img>` внутри `<noscript>` в `<head>`).
