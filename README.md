# HR для e-commerce — лендинг

Production-ready лендинг HR-агентства на **Next.js (App Router) + TypeScript + Tailwind CSS**. Готов к локальному показу клиенту и деплою на Vercel.

## Стек

- Next.js 14 (App Router, серверные компоненты)
- TypeScript
- Tailwind CSS
- lucide-react (иконки)
- next/font (Manrope, self-hosted, без layout shift)

Без тяжёлых библиотек. Минимум клиентского JS (интерактивны только мобильное меню и форма).

## Запуск

```bash
npm install      # установка зависимостей
npm run dev      # дев-сервер: http://localhost:3000
npm run build    # продакшн-сборка
npm run start    # запуск собранной версии
```

## Структура файлов

```
hr-agency/
├── app/
│   ├── layout.tsx            # html-обёртка, шрифт, SEO-метаданные
│   ├── page.tsx              # сборка всех секций лендинга
│   ├── globals.css           # базовые стили + utility-классы (кнопки и т.д.)
│   ├── opengraph-image.tsx   # динамическая OG-картинка (1200×630)
│   ├── robots.ts             # robots.txt
│   └── sitemap.ts            # sitemap.xml
├── components/
│   ├── Header.tsx            # шапка + навигация + мобильное меню
│   ├── Hero.tsx              # первый экран
│   ├── HeroDashboard.tsx     # абстрактный premium-дашборд (CSS, без фото)
│   ├── Trust.tsx             # блок доверия (4 тезиса)
│   ├── Roles.tsx             # «Кого подбираем» (карточки ролей)
│   ├── WhenUseful.tsx        # «Когда мы полезны»
│   ├── Approach.tsx          # «Наш подход» + процесс (6 этапов)
│   ├── WhyWorks.tsx          # «Почему это работает»
│   ├── CtaForm.tsx           # CTA-секция с формой заявки
│   ├── Faq.tsx               # FAQ (аккордеон + FAQPage schema)
│   ├── Footer.tsx            # подвал
│   └── JsonLd.tsx            # JSON-LD ProfessionalService
├── lib/
│   └── site.ts               # ⚙️ ЕДИНАЯ КОНФИГУРАЦИЯ (название, контакты, домен)
├── tailwind.config.ts        # палитра и дизайн-токены
└── ...конфиги
```

## Что заменить под реального клиента

Почти всё, что нужно поменять, собрано в одном файле — **`lib/site.ts`**:

| Что | Где | Зачем |
|-----|-----|-------|
| **Название** (`name`, `legalName`) | `lib/site.ts` | логотип, метаданные, JSON-LD, подвал |
| **Домен** (`url`) | `lib/site.ts` | SEO, Open Graph, `sitemap.xml`, `robots.txt` — укажите реальный домен после деплоя |
| **Контакты** (`telegram`, `email`, `phone`) | `lib/site.ts` | шапка, форма, подвал, JSON-LD |
| **Описание** (`description`) | `lib/site.ts` | title/description, OG/Twitter |
| **Регион работы** (`areaServed`) | `lib/site.ts` | JSON-LD |

Отдельно при необходимости:

- **Оффер и тексты секций** — внутри соответствующих компонентов в `components/` (заголовки, описания ролей, этапы процесса, FAQ).
- **Палитра/брендинг** — `tailwind.config.ts` (цвета `navy`, `sand`, `ink` и т.д.).
- **Обработка формы** — `components/CtaForm.tsx`. Сейчас заявка логируется в консоль и открывает почтовый клиент (`mailto`). В коде есть комментарий с примером, как подключить API/CRM (Route Handler → Telegram-бот, Bitrix24, amoCRM, Google Sheets и т.п.).
- **Юридические данные** — текст согласия на обработку данных в `CtaForm.tsx` и копирайт в `Footer.tsx`. При сборе персональных данных добавьте страницу политики конфиденциальности.
- **Аналитика** — добавьте `@vercel/analytics` или счётчики (Я.Метрика / GA4) в `app/layout.tsx`.

## Подключение формы к CRM (пример)

Создайте `app/api/lead/route.ts`:

```ts
export async function POST(req: Request) {
  const data = await req.json();
  // отправка в Telegram-бот / CRM / таблицу
  return Response.json({ ok: true });
}
```

И в `components/CtaForm.tsx` замените блок `mailto` на `fetch("/api/lead", …)` (см. комментарий в файле).

## Деплой на Vercel

1. Залейте проект в репозиторий GitHub/GitLab.
2. На [vercel.com](https://vercel.com) → **Add New → Project** → импортируйте репозиторий.
3. Vercel сам определит Next.js. Никаких настроек сборки менять не нужно.
4. Нажмите **Deploy**.
5. После деплоя пропишите реальный домен в `lib/site.ts` → `url` и закоммитьте — это нужно для корректных `sitemap.xml`, `robots.txt` и Open Graph.

Альтернатива через CLI:

```bash
npm i -g vercel
vercel          # превью-деплой
vercel --prod   # продакшн
```

## SEO / Lighthouse

- Semantic HTML, один `<h1>`, логичная иерархия `<h2>/<h3>`.
- Метаданные, Open Graph и Twitter — в `app/layout.tsx`.
- `robots.txt`, `sitemap.xml` — генерируются Next.js.
- JSON-LD: `ProfessionalService` (главная) + `FAQPage` (блок FAQ).
- `aria-label` на интерактивных элементах, `prefers-reduced-motion`, контрастная палитра.
- Шрифт через `next/font`, минимум клиентского JS, mobile-first.
