import { Target, ShoppingCart, Eye, Gem } from "lucide-react";

const items = [
  {
    icon: Target,
    title: "Подбор под задачи бизнеса",
    text: "Сначала разбираемся в задаче и контексте, потом ищем кандидата — не наоборот.",
  },
  {
    icon: ShoppingCart,
    title: "Специализация на e-commerce",
    text: "Понимаем специфику маркетплейсов, юнит-экономики и digital-команд.",
  },
  {
    icon: Eye,
    title: "Прозрачный процесс",
    text: "Понятные этапы и статусы — вы всегда видите, на каком шаге подбор.",
  },
  {
    icon: Gem,
    title: "Сильные кандидаты, а не поток резюме",
    text: "Передаём отобранных специалистов, а не выгрузку откликов с биржи.",
  },
];

export function Trust() {
  return (
    <section className="border-y border-line bg-white" aria-label="Почему нам доверяют">
      <div className="container-content grid grid-cols-1 gap-px overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-white px-5 py-8 sm:px-6 lg:px-7"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-sand text-navy">
              <item.icon size={20} aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-base font-semibold text-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
