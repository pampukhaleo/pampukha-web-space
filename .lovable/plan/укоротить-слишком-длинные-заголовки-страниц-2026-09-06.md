# Укоротить слишком длинные заголовки страниц

Да, это легко исправимо. Пять страниц имеют заголовок в 61–62 символа — Google обрезает примерно на 60. Сокращаем их до 50–58 символов, оставляя главные слова в начале.

## Что меняем

| Страница | Сейчас | Станет |
|---|---|---|
| Цены (укр.) | Ціни на створення сайтів \| Лендінг $300, сайт $500 — Leonforge | Ціни на сайти: лендінг $300, сайт $500 — Leonforge |
| Кейс Pampukha (англ.) | Case study: legal services landing page in Poland \| Leonforge | Case: legal services landing, Poland \| Leonforge |
| Кейс Lemon Shine (англ.) | Case study: cleaning company website with booking \| Leonforge | Case: cleaning website with booking \| Leonforge |
| Кейс Lemon Shine (пол.) | Realizacja: strona firmy sprzątającej z rezerwacją \| Leonforge | Realizacja: strona firmy sprzątającej \| Leonforge |
| Кейс Spotless Pro (укр.) | Кейс: преміум-лендінг клінінгу для ринку Британії \| Leonforge | Кейс: преміум-лендінг клінінгу, Британія \| Leonforge |

Заодно пробегусь по остальным заголовкам кейсов и услуг — если какие-то тоже близки к пределу, подрежу их в том же стиле, чтобы во всех трёх языках было единообразно.

## Технические детали

- Правки в `src/data/cases.ts` (поле `metaTitle`) и `src/data/pricing.ts` (`PRICING_COPY.metaTitle`).
- Ничего в разметке и дизайне не меняется, только текст заголовка вкладки и результата в поиске.
- После правок — пересборка, чтобы новые заголовки попали в статический HTML, и публикация.
