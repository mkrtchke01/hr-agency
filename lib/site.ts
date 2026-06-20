/**
 * Единая точка конфигурации сайта.
 * ──────────────────────────────────────────────────────────────
 * Под реального клиента меняйте значения ТОЛЬКО здесь:
 *  - name / legalName — название агентства;
 *  - url — продакшн-домен (нужен для SEO, OG, sitemap, robots);
 *  - contacts — Telegram, email, телефон;
 *  - description — короткое описание для метаданных.
 */
export const site = {
  name: "HR для e-commerce",
  legalName: "HR для e-commerce", // юр. название / ИП / ООО — заменить
  // ВАЖНО: укажите реальный продакшн-домен после деплоя на Vercel.
  url: "https://hr-ecommerce.example.com",
  description:
    "Подбираем сильных специалистов для e-commerce, маркетплейсов и растущего бизнеса. Помогаем закрывать ключевые роли системно и без лишнего шума.",
  locale: "ru_RU",

  contacts: {
    // Замените на реальные контакты клиента.
    telegram: "https://t.me/your_agency", // ссылка на Telegram
    telegramHandle: "@your_agency",
    email: "hello@example.com",
    phone: "+7 (000) 000-00-00",
    // Город/регион работы — опционально, влияет на JSON-LD.
    areaServed: "Россия и СНГ",
  },

  nav: [
    { label: "Услуги", href: "#roles" },
    { label: "Подход", href: "#approach" },
    { label: "Кому подходим", href: "#when" },
    { label: "Процесс", href: "#process" },
    { label: "FAQ", href: "#faq" },
  ],
} as const;

export type Site = typeof site;
