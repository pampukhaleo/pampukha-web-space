## Что сделаю

1. **Обрежу все 6 desktop-скриншотов до hero-экрана (16:10)** через ImageMagick:
   - беру верхнюю часть каждого PNG (ширина × ширина*10/16)
   - сохраняю как `*_hero.jpg` рядом с оригиналом в `public/` (jpg — в 4-6 раз легче PNG, важно для LCP)
   - оригиналы оставляю — они могут пригодиться для попапа

   Файлы на выходе:
   - `public/expertise_hero.jpg`
   - `public/cheataic_hero.jpg`
   - `public/pampukhapl_hero.jpg`
   - `public/lemonshine_hero.jpg` (из Screenshot_6.png)
   - `public/spotlesspro_hero.jpg` (из Screenshot_7.png)
   - `public/laserbeauty_hero.jpg` (из Screenshot_8.png)

2. **Обновлю `src/components/PortfolioSection.tsx`**:
   - `desktopImage` всех 6 проектов → новые `*_hero.jpg`
   - `aspect` всех карточек → единый `aspect-[16/10]` (нет смысла в разнобое — все hero-кропы одинаковых пропорций)
   - убираю `object-top` (теперь и так весь кадр = hero)
   - оставляю masonry-сетку (columns-1/2/3); карточки получатся одной высоты в превью, но текст под ними разной длины — masonry всё равно даст лёгкую асимметрию

3. **Попап ProjectPopup**: пусть продолжает использовать оригинальные полностраничные `desktopImage` — там длинный скрин уместен (видна вся страница). Для этого добавлю в данные второе поле `previewImage` (hero) и оставлю `desktopImage` (full). Попап будет читать `desktopImage` как сейчас, карточка — `previewImage`.

## Что не меняется

- Тексты, мобильные скрины, попап-логика, прочие секции.
- Дизайн-система, цвета.

## Технически

- ImageMagick через `nix run nixpkgs#imagemagick`.
- JPEG quality 85, прогрессивный, strip метаданных. Целевой вес каждого файла — 80–150 KB.
- Команда на каждый файл:
  ```
  magick input.png -crop WxH+0+0 -quality 85 -interlace Plane -strip output.jpg
  ```
  где W = ширина оригинала, H = round(W * 10 / 16).
