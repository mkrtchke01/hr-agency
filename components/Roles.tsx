import {
  Store,
  Boxes,
  LineChart,
  PenLine,
  Briefcase,
  ClipboardList,
} from "lucide-react";

const roles = [
  {
    icon: Store,
    title: "Менеджеры маркетплейсов",
    text: "Ведут карточки, аналитику и продажи на Wildberries, Ozon, Яндекс Маркет и других площадках.",
  },
  {
    icon: Boxes,
    title: "E-commerce-специалисты",
    text: "Отвечают за каталог, контент, логистику процессов и рост онлайн-продаж.",
  },
  {
    icon: LineChart,
    title: "Performance-маркетологи",
    text: "Управляют платным трафиком, считают экономику и отвечают за результат в цифрах.",
  },
  {
    icon: PenLine,
    title: "Контент-менеджеры",
    text: "Готовят описания, визуал и контент-план под площадки и бренд.",
  },
  {
    icon: Briefcase,
    title: "Руководители направлений",
    text: "Берут на себя e-commerce, маркетинг или продажи и выстраивают работу команды.",
  },
  {
    icon: ClipboardList,
    title: "Операционные и проектные менеджеры",
    text: "Связывают процессы, людей и сроки — наводят порядок в операционке.",
  },
];

export function Roles() {
  return (
    <section id="roles" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-content">
        <div className="max-w-2xl">
          <span className="eyebrow">Кого подбираем</span>
          <h2 className="section-title mt-4">
            Роли, которые закрываем чаще всего
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Фокусируемся на специалистах для e-commerce и маркетплейсов — от
            исполнителей до руководителей направлений.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((role) => (
            <article
              key={role.title}
              className="group rounded-2xl border border-line bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-sand text-navy transition-colors group-hover:bg-navy group-hover:text-paper">
                <role.icon size={22} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{role.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{role.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
