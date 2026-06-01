## Проблема

На скріншоті видно помилки CSP у консолі:
- `Loading the script 'https://connect.facebook.net/...' violates CSP directive: script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com`
- Запити до `facebook.com/tr` блокуються (403 / CSP).

Причина — файл `src/components/SEO/SecurityHeaders.tsx` встановлює `Content-Security-Policy` через `<meta http-equiv>`, де дозволені тільки домени GTM/GA, а домени Meta Pixel (`connect.facebook.net`, `www.facebook.com`) — ні. Плюс там досі стирчать GTM/GA домени, які ми вже прибрали з проєкту.

## Що зробити

Оновити CSP у `src/components/SEO/SecurityHeaders.tsx`:

- `script-src` — прибрати `googletagmanager.com` і `google-analytics.com`, додати `https://connect.facebook.net`.
- `img-src` — залишити `https:` (вже покриває pixel `<img>` фолбек), додатково явно дозволити `https://www.facebook.com`.
- `connect-src` — прибрати GTM/GA, додати `https://www.facebook.com` і `https://connect.facebook.net` (для `fbevents.js` → `/tr` запитів).
- `frame-src` — прибрати GTM (більше не використовується).

Інші директиви (`default-src`, `style-src`, `font-src`, `object-src`) — без змін.

## Що НЕ чіпаємо

- `index.html` — Meta Pixel base code вже на місці і коректний.
- Логіка форми, дизайн, переклади, SEO — без змін.

## Результат

Після зміни браузер перестане блокувати завантаження `fbevents.js` і відправку подій на `facebook.com/tr`, у Meta Events Manager почне приходити PageView, а Event Setup Tool зможе нормально під'єднатись до сайту.
