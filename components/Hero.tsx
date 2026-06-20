import { ArrowRight } from "lucide-react";
import { HeroDashboard } from "./HeroDashboard";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Тонкая декоративная сетка/градиент фона */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-sand/50 via-paper to-paper"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-sand/50 blur-3xl"
      />

      <div className="container-content grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-28">
        <div className="animate-fade-up">
          <span className="eyebrow">Премиальный подбор персонала</span>

          <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            Подбираем сильных специалистов для e-commerce, маркетплейсов и
            растущего бизнеса
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft">
            Помогаем предпринимателям и командам закрывать ключевые роли без
            хаоса, случайных кандидатов и затянутого найма.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#contact" className="btn-primary">
              Получить консультацию
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a href="#approach" className="btn-secondary">
              Посмотреть подход
            </a>
          </div>

          {/* Короткие маркеры доверия под CTA */}
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-6">
            <div>
              <dt className="text-2xl font-bold text-ink">e-com</dt>
              <dd className="mt-1 text-xs text-ink-muted">специализация ниши</dd>
            </div>
            <div>
              <dt className="text-2xl font-bold text-ink">6 этапов</dt>
              <dd className="mt-1 text-xs text-ink-muted">прозрачный процесс</dd>
            </div>
            <div>
              <dt className="text-2xl font-bold text-ink">1 контакт</dt>
              <dd className="mt-1 text-xs text-ink-muted">сопровождение до выхода</dd>
            </div>
          </dl>
        </div>

        <div className="animate-fade-up lg:[animation-delay:120ms]">
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}
