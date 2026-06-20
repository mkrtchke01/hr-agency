import { Check, Search, UserRound, Sparkles } from "lucide-react";

/**
 * Абстрактный premium-дашборд «системы подбора» — чистый CSS/SVG, без фото.
 * Декоративный элемент: помечен aria-hidden, не озвучивается скринридерами.
 */
export function HeroDashboard() {
  const pipeline = [
    { stage: "Профиль роли", value: "Согласован", done: true },
    { stage: "Скрининг", value: "48 кандидатов", done: true },
    { stage: "Первичная оценка", value: "12 в работе", done: false },
    { stage: "Финальный шорт-лист", value: "4 кандидата", done: false },
  ];

  return (
    <div aria-hidden="true" className="relative select-none">
      {/* Мягкое свечение под карточкой */}
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-sand via-paper to-sand-200 blur-2xl" />

      <div className="rounded-3xl border border-line bg-white p-5 shadow-card sm:p-6">
        {/* Шапка дашборда */}
        <div className="flex items-center justify-between border-b border-line pb-4">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-navy text-paper">
              <Search size={16} />
            </span>
            <div>
              <div className="text-sm font-semibold text-ink">Подбор: Менеджер маркетплейсов</div>
              <div className="text-xs text-ink-muted">Воронка кандидатов · обновлено сегодня</div>
            </div>
          </div>
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
            В работе
          </span>
        </div>

        {/* Воронка-пайплайн */}
        <div className="mt-4 space-y-2.5">
          {pipeline.map((row, i) => (
            <div
              key={row.stage}
              className="flex items-center justify-between rounded-xl border border-line bg-paper/60 px-3.5 py-3"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`grid h-6 w-6 place-items-center rounded-full text-[11px] font-bold ${
                    row.done
                      ? "bg-navy text-paper"
                      : "border border-line bg-white text-ink-muted"
                  }`}
                >
                  {row.done ? <Check size={13} /> : i + 1}
                </span>
                <span className="text-sm font-medium text-ink">{row.stage}</span>
              </div>
              <span className="text-xs font-semibold text-ink-soft">{row.value}</span>
            </div>
          ))}
        </div>

        {/* Карточка кандидата + метрика */}
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-line bg-white p-4">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-sand text-navy">
                <UserRound size={18} />
              </span>
              <div>
                <div className="text-sm font-semibold text-ink">Кандидат · A.</div>
                <div className="text-xs text-ink-muted">E-commerce · 5 лет</div>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-1.5 text-xs text-ink-soft">
              <Sparkles size={13} className="text-navy" />
              Соответствие профилю
            </div>
            <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-sand-200">
              <div className="h-full w-[88%] rounded-full bg-navy" />
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-xl border border-line bg-navy p-4 text-paper">
            <div className="text-xs uppercase tracking-wider text-paper/60">
              Срок до шорт-листа
            </div>
            <div className="mt-1 text-3xl font-bold">7–10 дней</div>
            <div className="mt-2 text-xs text-paper/70">
              Прозрачный статус на каждом этапе
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
