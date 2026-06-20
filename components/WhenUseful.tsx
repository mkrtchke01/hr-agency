import { Check } from "lucide-react";

const points = [
  "Нет времени самостоятельно фильтровать десятки откликов и резюме.",
  "Прошлый найм был случайным и не дал нужного результата.",
  "Бизнес растёт, а команда не успевает за задачами.",
  "Нужен человек, который быстро войдёт в задачи и не потребует долгого ввода.",
  "Важно не просто найти резюме, а подобрать подходящего специалиста под роль.",
];

export function WhenUseful() {
  return (
    <section id="when" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="container-content grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <span className="eyebrow">Когда мы полезны</span>
          <h2 className="section-title mt-4">
            Если узнаёте свою ситуацию — нам есть о чём поговорить
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Мы работаем с владельцами бизнеса и руководителями, для которых наём
            стал узким местом роста.
          </p>

          <div className="mt-8">
            <a href="#contact" className="btn-primary">
              Обсудить свою задачу
            </a>
          </div>
        </div>

        <ul className="space-y-3">
          {points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 rounded-2xl border border-line bg-paper/60 p-4"
            >
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-navy text-paper">
                <Check size={14} aria-hidden="true" />
              </span>
              <span className="text-sm leading-relaxed text-ink-soft">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
