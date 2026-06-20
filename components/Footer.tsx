import { Send, Mail } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  const year = 2026; // обновляется вручную или через билд — без клиентского JS

  return (
    <footer className="border-t border-line bg-paper">
      <div className="container-content py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Описание */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-ink">
              <span
                aria-hidden="true"
                className="grid h-7 w-7 place-items-center rounded-lg bg-navy text-paper text-[13px] font-bold"
              >
                H
              </span>
              {site.name}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Помогаем предпринимателям и командам находить сильных специалистов
              для e-commerce и маркетплейсов — системно, без хаоса и случайных
              кандидатов.
            </p>
          </div>

          {/* Навигация */}
          <nav aria-label="Навигация в подвале">
            <h2 className="text-sm font-semibold text-ink">Разделы</h2>
            <ul className="mt-4 space-y-2.5">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Контакты */}
          <div>
            <h2 className="text-sm font-semibold text-ink">Контакты</h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={site.contacts.telegram}
                  className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink"
                  aria-label="Написать в Telegram"
                >
                  <Send size={15} aria-hidden="true" />
                  Telegram {site.contacts.telegramHandle}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.contacts.email}`}
                  className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink"
                  aria-label="Написать на email"
                >
                  <Mail size={15} aria-hidden="true" />
                  {site.contacts.email}
                </a>
              </li>
            </ul>
            <a href="#contact" className="btn-primary mt-6">
              Обсудить подбор
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 text-xs text-ink-muted sm:flex-row sm:items-center">
          <p>
            © {year} {site.legalName}. Все права защищены.
          </p>
          <p>Сайт создан как первая версия — данные легко заменить.</p>
        </div>
      </div>
    </footer>
  );
}
