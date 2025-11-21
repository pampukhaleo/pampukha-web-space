# 📋 Чек-лист миграции GTM для Leonforge

## Обзор

Этот чек-лист поможет вам пошагово настроить Google Tag Manager, Google Analytics 4 и Google Ads для полного отслеживания конверсий на вашем сайте.

**Примерное время выполнения:** 60-90 минут

---

## Фаза 1: Подготовка (5 минут)

- [ ] Открыл [Google Tag Manager](https://tagmanager.google.com/)
- [ ] Открыл [Google Analytics 4](https://analytics.google.com/)
- [ ] Открыл [Google Ads](https://ads.google.com/)
- [ ] Открыл редактор кода (для обновления AW-XXXXXXXXXX)
- [ ] Скачал или добавил в закладки эту инструкцию

---

## Фаза 2: Google Tag Manager - Переменные (10 минут)

### Создание User-Defined Variables

- [ ] Открыл GTM → Variables → New
- [ ] **Переменная 1**: `DLV - Event Category`
  - [ ] Variable Type: Data Layer Variable
  - [ ] Data Layer Variable Name: `event_category`
  - [ ] Data Layer Version: Version 2
  - [ ] Set Default Value: ✅ → `Не определено`
  - [ ] Сохранил

- [ ] **Переменная 2**: `DLV - Event Label`
  - [ ] Variable Type: Data Layer Variable
  - [ ] Data Layer Variable Name: `event_label`
  - [ ] Data Layer Version: Version 2
  - [ ] Set Default Value: ✅ → `Не определено`
  - [ ] Сохранил

- [ ] **Переменная 3**: `DLV - Event Value`
  - [ ] Variable Type: Data Layer Variable
  - [ ] Data Layer Variable Name: `value`
  - [ ] Data Layer Version: Version 2
  - [ ] Set Default Value: ✅ → `0`
  - [ ] Сохранил

- [ ] **Переменная 4**: `DLV - Section`
  - [ ] Variable Type: Data Layer Variable
  - [ ] Data Layer Variable Name: `section`
  - [ ] Data Layer Version: Version 2
  - [ ] Set Default Value: ✅ → `Не определено`
  - [ ] Сохранил

**✅ Итог: 4 переменные созданы**

---

## Фаза 3: Google Tag Manager - Триггеры (15 минут)

### Создание Custom Event Triggers

- [ ] Открыл GTM → Triggers → New

- [ ] **Триггер 1**: `Custom Event - Form Submit`
  - [ ] Trigger Type: Custom Event
  - [ ] Event name: `form_submit`
  - [ ] This trigger fires on: All Custom Events
  - [ ] Сохранил

- [ ] **Триггер 2**: `Custom Event - Portfolio View`
  - [ ] Trigger Type: Custom Event
  - [ ] Event name: `portfolio_view`
  - [ ] This trigger fires on: All Custom Events
  - [ ] Сохранил

- [ ] **Триггер 3**: `Custom Event - CTA Click`
  - [ ] Trigger Type: Custom Event
  - [ ] Event name: `cta_click`
  - [ ] This trigger fires on: All Custom Events
  - [ ] Сохранил

- [ ] **Триггер 4**: `Custom Event - Email Click`
  - [ ] Trigger Type: Custom Event
  - [ ] Event name: `email_click`
  - [ ] This trigger fires on: All Custom Events
  - [ ] Сохранил

- [ ] **Триггер 5**: `Custom Event - Telegram Click`
  - [ ] Trigger Type: Custom Event
  - [ ] Event name: `telegram_click`
  - [ ] This trigger fires on: All Custom Events
  - [ ] Сохранил

- [ ] **Триггер 6**: `Custom Event - Phone Click`
  - [ ] Trigger Type: Custom Event
  - [ ] Event name: `phone_click`
  - [ ] This trigger fires on: All Custom Events
  - [ ] Сохранил

- [ ] **Триггер 7**: `Custom Event - Scroll`
  - [ ] Trigger Type: Custom Event
  - [ ] Event name: `scroll`
  - [ ] This trigger fires on: All Custom Events
  - [ ] Сохранил

### Удаление старых триггеров

- [ ] Нашел триггер `@telegram` → Удалил или отключил
- [ ] Нашел триггер `Form Submission - blog.leonforge.com.ua` → Удалил или отключил
- [ ] Проверил другие триггеры → Удалил неиспользуемые

**✅ Итог: 7 новых триггеров созданы, старые удалены**

---

## Фаза 4: Google Analytics 4 - Настройка (5 минут)

- [ ] Открыл GA4 → Admin → Data Streams
- [ ] Выбрал Web Stream
- [ ] **Скопировал Measurement ID** (формат: `G-XXXXXXXXXX`)
  - Мой ID: `G-____________________________`

- [ ] Перешел в Admin → Events
- [ ] Отметил как конверсии (после первых событий):
  - [ ] `form_submit`
  - [ ] `email_click`
  - [ ] `telegram_click`
  - [ ] `phone_click`
  - [ ] `portfolio_view`

**✅ Итог: Measurement ID получен, конверсии настроены**

---

## Фаза 5: Google Tag Manager - GA4 Event Tags (20 минут)

- [ ] Открыл GTM → Tags → New

- [ ] **Тег 1**: `GA4 Event - Form Submit`
  - [ ] Tag Type: Google Analytics: GA4 Event
  - [ ] Measurement ID: `G-XXXXXXXXXX` (вставил свой)
  - [ ] Event Name: `form_submit`
  - [ ] Event Parameters:
    - [ ] `event_category` → `{{DLV - Event Category}}`
    - [ ] `event_label` → `{{DLV - Event Label}}`
  - [ ] Triggering: `Custom Event - Form Submit`
  - [ ] Сохранил

- [ ] **Тег 2**: `GA4 Event - Portfolio View`
  - [ ] Tag Type: Google Analytics: GA4 Event
  - [ ] Measurement ID: `G-XXXXXXXXXX`
  - [ ] Event Name: `portfolio_view`
  - [ ] Event Parameters:
    - [ ] `event_category` → `{{DLV - Event Category}}`
    - [ ] `event_label` → `{{DLV - Event Label}}`
  - [ ] Triggering: `Custom Event - Portfolio View`
  - [ ] Сохранил

- [ ] **Тег 3**: `GA4 Event - CTA Click`
  - [ ] Tag Type: Google Analytics: GA4 Event
  - [ ] Measurement ID: `G-XXXXXXXXXX`
  - [ ] Event Name: `cta_click`
  - [ ] Event Parameters:
    - [ ] `event_category` → `{{DLV - Event Category}}`
    - [ ] `event_label` → `{{DLV - Event Label}}`
    - [ ] `section` → `{{DLV - Section}}`
  - [ ] Triggering: `Custom Event - CTA Click`
  - [ ] Сохранил

- [ ] **Тег 4**: `GA4 Event - Email Click`
  - [ ] Tag Type: Google Analytics: GA4 Event
  - [ ] Measurement ID: `G-XXXXXXXXXX`
  - [ ] Event Name: `email_click`
  - [ ] Event Parameters:
    - [ ] `event_category` → `{{DLV - Event Category}}`
    - [ ] `event_label` → `{{DLV - Event Label}}`
  - [ ] Triggering: `Custom Event - Email Click`
  - [ ] Сохранил

- [ ] **Тег 5**: `GA4 Event - Telegram Click`
  - [ ] Tag Type: Google Analytics: GA4 Event
  - [ ] Measurement ID: `G-XXXXXXXXXX`
  - [ ] Event Name: `telegram_click`
  - [ ] Event Parameters:
    - [ ] `event_category` → `{{DLV - Event Category}}`
    - [ ] `event_label` → `{{DLV - Event Label}}`
  - [ ] Triggering: `Custom Event - Telegram Click`
  - [ ] Сохранил

- [ ] **Тег 6**: `GA4 Event - Phone Click`
  - [ ] Tag Type: Google Analytics: GA4 Event
  - [ ] Measurement ID: `G-XXXXXXXXXX`
  - [ ] Event Name: `phone_click`
  - [ ] Event Parameters:
    - [ ] `event_category` → `{{DLV - Event Category}}`
    - [ ] `event_label` → `{{DLV - Event Label}}`
  - [ ] Triggering: `Custom Event - Phone Click`
  - [ ] Сохранил

- [ ] **Тег 7**: `GA4 Event - Scroll Tracking`
  - [ ] Tag Type: Google Analytics: GA4 Event
  - [ ] Measurement ID: `G-XXXXXXXXXX`
  - [ ] Event Name: `scroll`
  - [ ] Event Parameters:
    - [ ] `event_category` → `{{DLV - Event Category}}`
    - [ ] `event_label` → `{{DLV - Event Label}}`
    - [ ] `scroll_percentage` → `{{DLV - Event Value}}`
  - [ ] Triggering: `Custom Event - Scroll`
  - [ ] Сохранил

**✅ Итог: 7 GA4 Event Tags созданы**

---

## Фаза 6: Google Ads - Настройка конверсий (15 минут)

- [ ] Открыл Google Ads → Tools → Measurement → Conversions
- [ ] Нажал **+ New conversion action** → Website

### Конверсия 1: Заявка через форму

- [ ] Нажал **Code installation yourself**
- [ ] **Скопировал Conversion ID** из кода (формат: `AW-XXXXXXXXXX`)
  - Мой Conversion ID: `AW-____________________________`
- [ ] Создал конверсию:
  - [ ] Conversion Name: `Заявка через форму`
  - [ ] Category: Submit lead form
  - [ ] Value: 500 UAH
  - [ ] Count: One
  - [ ] Conversion window: 30 дней
  - [ ] Attribution model: Data-driven
- [ ] **Скопировал Conversion Label** (формат: `xxxxxxxxxxxxx`)
  - Мой Label (форма): `____________________________`

### Конверсия 2: Клик на контакт

- [ ] Нажал **+ New conversion action**
- [ ] Создал конверсию:
  - [ ] Conversion Name: `Клик на контакт`
  - [ ] Category: Contact
  - [ ] Value: 100 UAH
  - [ ] Count: Every
  - [ ] Conversion window: 30 дней
  - [ ] Attribution model: Data-driven
- [ ] **Скопировал Conversion Label**
  - Мой Label (контакт): `____________________________`

### Конверсия 3: Просмотр портфолио

- [ ] Нажал **+ New conversion action**
- [ ] Создал конверсию:
  - [ ] Conversion Name: `Просмотр проекта`
  - [ ] Category: Engagement
  - [ ] Value: 50 UAH
  - [ ] Count: One
  - [ ] Conversion window: 7 дней
  - [ ] Attribution model: Data-driven
- [ ] **Скопировал Conversion Label**
  - Мой Label (портфолио): `____________________________`

**✅ Итог: 3 конверсии созданы, ID и Labels скопированы**

---

## Фаза 7: Google Tag Manager - Google Ads Conversion Tags (10 минут)

- [ ] Открыл GTM → Tags → New

- [ ] **Тег**: `Google Ads Conversion - Form Submit`
  - [ ] Tag Type: Google Ads Conversion Tracking
  - [ ] Conversion ID: `AW-XXXXXXXXXX` (вставил свой)
  - [ ] Conversion Label: (вставил label для формы)
  - [ ] Conversion Value: `500`
  - [ ] Currency Code: `UAH`
  - [ ] Triggering: `Custom Event - Form Submit`
  - [ ] Сохранил

- [ ] **Тег**: `Google Ads Conversion - Contact Click`
  - [ ] Tag Type: Google Ads Conversion Tracking
  - [ ] Conversion ID: `AW-XXXXXXXXXX`
  - [ ] Conversion Label: (вставил label для контакта)
  - [ ] Conversion Value: `100`
  - [ ] Currency Code: `UAH`
  - [ ] Triggering: Выбрал 3 триггера:
    - [ ] `Custom Event - Email Click`
    - [ ] `Custom Event - Telegram Click`
    - [ ] `Custom Event - Phone Click`
  - [ ] Сохранил

- [ ] **Тег**: `Google Ads Conversion - Portfolio View`
  - [ ] Tag Type: Google Ads Conversion Tracking
  - [ ] Conversion ID: `AW-XXXXXXXXXX`
  - [ ] Conversion Label: (вставил label для портфолио)
  - [ ] Conversion Value: `50`
  - [ ] Currency Code: `UAH`
  - [ ] Triggering: `Custom Event - Portfolio View`
  - [ ] Сохранил

**✅ Итог: 3 Google Ads Conversion Tags созданы**

---

## Фаза 8: Обновление кода проекта (5 минут)

### Файл: index.html

- [ ] Открыл `index.html`
- [ ] Нашел строку: `gtag('config', 'AW-XXXXXXXXXX');`
- [ ] Заменил `AW-XXXXXXXXXX` на мой реальный ID: `AW-____________________________`
- [ ] Сохранил файл

### Файл: src/components/SEO/Analytics.tsx

- [ ] Открыл `src/components/SEO/Analytics.tsx`
- [ ] Нашел функцию `trackConversion`
- [ ] Заменил `AW-XXXXXXXXXX` на мой ID: `AW-____________________________`
- [ ] Изменил валюту с `USD` на `UAH`
- [ ] Сохранил файл

**✅ Итог: Код обновлен с реальными ID**

---

## Фаза 9: Тестирование GTM (15 минут)

### GTM Preview Mode

- [ ] Открыл GTM
- [ ] Нажал **Preview** (справа вверху)
- [ ] Ввел URL: `https://blog.leonforge.com.ua`
- [ ] GTM открыл сайт в режиме отладки

### Тестирование событий

- [ ] **Тест 1**: Отправил форму обратной связи
  - [ ] В GTM Preview увидел событие `form_submit`
  - [ ] Сработали теги: `GA4 Event - Form Submit`, `Google Ads Conversion - Form Submit`

- [ ] **Тест 2**: Кликнул на проект в портфолио
  - [ ] В GTM Preview увидел событие `portfolio_view`
  - [ ] Сработали теги: `GA4 Event - Portfolio View`, `Google Ads Conversion - Portfolio View`

- [ ] **Тест 3**: Кликнул на CTA кнопку
  - [ ] В GTM Preview увидел событие `cta_click`
  - [ ] Сработал тег: `GA4 Event - CTA Click`

- [ ] **Тест 4**: Кликнул на email
  - [ ] В GTM Preview увидел событие `email_click`
  - [ ] Сработали теги: `GA4 Event - Email Click`, `Google Ads Conversion - Contact Click`

- [ ] **Тест 5**: Кликнул на Telegram
  - [ ] В GTM Preview увидел событие `telegram_click`
  - [ ] Сработали теги: `GA4 Event - Telegram Click`, `Google Ads Conversion - Contact Click`

- [ ] **Тест 6**: Кликнул на телефон
  - [ ] В GTM Preview увидел событие `phone_click`
  - [ ] Сработали теги: `GA4 Event - Phone Click`, `Google Ads Conversion - Contact Click`

- [ ] **Тест 7**: Прокрутил страницу на 50%
  - [ ] В GTM Preview увидел событие `scroll`
  - [ ] Сработал тег: `GA4 Event - Scroll Tracking`

**✅ Итог: Все события работают в GTM Preview**

---

## Фаза 10: Тестирование GA4 (5 минут)

- [ ] Открыл GA4 → Reports → Realtime
- [ ] Выполнил действия на сайте (отправил форму, кликнул на контакты)
- [ ] Подождал 1-2 минуты
- [ ] В разделе **Event count by Event name** увидел события:
  - [ ] `form_submit`
  - [ ] `portfolio_view`
  - [ ] `cta_click`
  - [ ] `email_click`
  - [ ] `telegram_click`
  - [ ] `phone_click`
  - [ ] `scroll`
- [ ] Кликнул на событие → проверил параметры (`event_category`, `event_label`)

**✅ Итог: События появляются в GA4 Realtime**

---

## Фаза 11: Тестирование Google Ads (10 минут)

- [ ] Открыл Google Ads → Tools → Conversions
- [ ] Проверил статус конверсий:
  - [ ] `Заявка через форму` - статус: __________________
  - [ ] `Клик на контакт` - статус: __________________
  - [ ] `Просмотр проекта` - статус: __________________

- [ ] Отправил **тестовую заявку** через форму
- [ ] Подождал 10-15 минут
- [ ] Обновил страницу конверсий
- [ ] Проверил, что статус изменился на **"Recording conversions"**

**✅ Итог: Конверсии записываются в Google Ads**

---

## Фаза 12: Публикация (2 минуты)

- [ ] Открыл GTM
- [ ] Нажал **Submit** (справа вверху)
- [ ] Ввел название версии: `Настройка GA4 + Google Ads конверсий`
- [ ] Ввел описание: `Добавлены переменные, триггеры и теги для отслеживания всех событий`
- [ ] Нажал **Publish**

**✅ Итог: Изменения опубликованы и работают на production**

---

## Фаза 13: Связывание GA4 с Google Ads (5 минут)

- [ ] Открыл GA4 → Admin → Google Ads Links
- [ ] Нажал **Link**
- [ ] Выбрал аккаунт Google Ads
- [ ] Включил:
  - [ ] Personalized advertising
  - [ ] Enable auto-tagging
- [ ] Сохранил

### Импорт конверсий из GA4

- [ ] Открыл Google Ads → Tools → Conversions
- [ ] Нажал **Import** → выбрал **Google Analytics 4**
- [ ] Выбрал конверсии для импорта:
  - [ ] `form_submit`
  - [ ] `email_click`
  - [ ] `telegram_click`
  - [ ] `phone_click`
- [ ] Нажал **Import and Continue**

**✅ Итог: GA4 связан с Google Ads, конверсии импортированы**

---

## 🎉 Финальная проверка

- [ ] GTM: Все переменные, триггеры и теги созданы и опубликованы
- [ ] GA4: Measurement ID добавлен в теги, конверсии настроены
- [ ] Google Ads: Конверсии созданы и записываются
- [ ] Код: `AW-XXXXXXXXXX` обновлен в `index.html` и `Analytics.tsx`
- [ ] Тестирование: Все события работают в GTM Preview, GA4 и Google Ads
- [ ] Связывание: GA4 и Google Ads связаны, конверсии импортированы

---

## 📊 Что дальше?

Теперь подождите **2-4 недели** для накопления данных, затем:

1. **Анализ эффективности** (см. `GTM_SETUP_GUIDE.md` → Раздел 7.3)
2. **Оптимизация рекламных кампаний** (см. `GTM_SETUP_GUIDE.md` → Раздел 7.2)
3. **А/Б тестирование** (см. `GTM_SETUP_GUIDE.md` → Раздел 7.4)
4. **Масштабирование** (см. `GTM_SETUP_GUIDE.md` → Раздел 7.5)

---

## 🆘 Проблемы?

Если что-то не работает, смотрите раздел **"Помощь и поддержка"** в `GTM_SETUP_GUIDE.md`.

**✅ Поздравляю! Настройка завершена.**
