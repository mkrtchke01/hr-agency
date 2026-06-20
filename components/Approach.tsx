const steps = [
  {
    n: "01",
    title: "Погружаемся в бизнес и задачу",
    text: "Разбираемся в продукте, команде и контексте роли — что на самом деле нужно бизнесу.",
  },
  {
    n: "02",
    title: "Формируем профиль кандидата",
    text: "Фиксируем задачи, ожидания и критерии — единое понимание роли до старта поиска.",
  },
  {
    n: "03",
    title: "Ищем и отбираем релевантных специалистов",
    text: "Работаем не потоком, а адресно — отбираем тех, кто подходит под профиль.",
  },
  {
    n: "04",
    title: "Проводим первичную оценку",
    text: "Смотрим на опыт, мотивацию и мышление, а не только на строки в резюме.",
  },
  {
    n: "05",
    title: "Передаём сильных кандидатов",
    text: "Вы получаете короткий список подготовленных специалистов с нашими комментариями.",
  },
  {
    n: "06",
    title: "Сопровождаем до выхода на работу",
    text: "Остаёмся на связи на финальных этапах и помогаем довести кандидата до оффера.",
  },
];

export function Approach() {
  return (
    <section id="approach" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-content">
        <div className="max-w-2xl">
          <span className="eyebrow">Наш подход</span>
          <h2 className="section-title mt-4">
            Системный процесс вместо хаотичного поиска
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Каждый подбор проходит понятные этапы. Это убирает случайность и
            делает результат предсказуемым.
          </p>
        </div>

        {/* Процесс с порядковыми номерами — id для якоря «Процесс» */}
        <ol
          id="process"
          className="mt-14 grid scroll-mt-24 grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {steps.map((step) => (
            <li key={step.n} className="relative border-t border-line pt-6">
              <span className="absolute -top-px left-0 h-[2px] w-12 bg-navy" />
              <span className="text-sm font-bold tracking-widest text-navy">
                {step.n}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
