const faqs = [
  {
    q: "С какими вакансиями вы работаете?",
    a: "Фокусируемся на digital и e-commerce: менеджеры маркетплейсов, e-commerce-специалисты, performance-маркетологи, контент-менеджеры, руководители направлений, операционные и проектные менеджеры. Если роль на стыке — обсудим и подскажем, сможем ли помочь.",
  },
  {
    q: "Подбираете ли вы специалистов под маркетплейсы?",
    a: "Да, это одно из наших ключевых направлений. Помогаем находить людей с опытом работы на Wildberries, Ozon, Яндекс Маркете и других площадках — от ведения карточек и аналитики до управления продажами.",
  },
  {
    q: "Можно ли обратиться, если описание вакансии ещё не готово?",
    a: "Можно и нужно. Часто запрос на старте сформулирован общими словами — мы помогаем превратить его в понятный профиль роли: задачи, ожидания и критерии отбора. С этого и начинается подбор.",
  },
  {
    q: "Сколько этапов в подборе?",
    a: "Процесс состоит из шести этапов: погружение в задачу, формирование профиля, поиск и отбор, первичная оценка, передача кандидатов и сопровождение до выхода на работу. Сроки зависят от роли и обсуждаются заранее.",
  },
  {
    q: "Работаете ли вы с небольшими командами?",
    a: "Да. Мы регулярно помогаем небольшим и растущим командам, где важно не ошибиться с человеком. Подход не зависит от размера компании — он зависит от задачи.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container-content grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title mt-4">Частые вопросы</h2>
          <p className="mt-4 text-lg text-ink-soft">
            Коротко о том, как мы работаем. Не нашли ответ —{" "}
            <a href="#contact" className="font-semibold text-navy underline-offset-4 hover:underline">
              напишите нам
            </a>
            .
          </p>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {faqs.map((item, i) => (
            <details key={item.q} className="group py-2" {...(i === 0 ? { open: true } : {})}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-base font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {item.q}
                <span
                  aria-hidden="true"
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line text-ink-muted transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-5 pr-10 text-sm leading-relaxed text-ink-muted">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
