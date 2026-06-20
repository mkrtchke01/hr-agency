import { Globe, Brain, Clock, MessagesSquare } from "lucide-react";

const cards = [
  {
    icon: Globe,
    title: "Глубокое понимание digital и e-commerce",
    text: "Говорим с кандидатами на одном языке и точнее оцениваем реальный опыт в нише.",
  },
  {
    icon: Brain,
    title: "Оцениваем не только опыт, но и мышление",
    text: "Смотрим, как человек решает задачи и принимает решения, а не только что указано в резюме.",
  },
  {
    icon: Clock,
    title: "Экономим время собственника",
    text: "Берём на себя поиск, фильтрацию и первичную оценку — вы общаетесь только с релевантными.",
  },
  {
    icon: MessagesSquare,
    title: "Прозрачная коммуникация на каждом этапе",
    text: "Держим в курсе по статусам и срокам — без молчания и неопределённости.",
  },
];

export function WhyWorks() {
  return (
    <section className="bg-navy py-20 text-paper sm:py-28" aria-label="Почему это работает">
      <div className="container-content">
        <div className="max-w-2xl">
          <span className="eyebrow border-paper/20 bg-white/5 text-paper/70">
            Почему это работает
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            За результатом стоит экспертиза, а не везение
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:bg-white/[0.07]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-paper/10 text-paper">
                <card.icon size={22} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{card.title}</h3>
              <p className="mt-2 leading-relaxed text-paper/70">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
