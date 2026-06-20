"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "error";

export function CtaForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get("name") || ""),
      contact: String(formData.get("contact") || ""),
      role: String(formData.get("role") || ""),
    };

    // ──────────────────────────────────────────────────────────────
    // ПЕРВАЯ ВЕРСИЯ: лог в консоль + открытие почтового клиента (mailto).
    // КАК ПОДКЛЮЧИТЬ CRM/API: замените блок ниже на fetch к своему
    // эндпоинту, например:
    //
    //   const res = await fetch("/api/lead", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(payload),
    //   });
    //   if (!res.ok) throw new Error("Request failed");
    //
    // Бэкенд можно сделать через Next.js Route Handler (app/api/lead/route.ts)
    // и оттуда слать в Telegram-бота, Bitrix24, amoCRM, Google Sheets и т.п.
    // ──────────────────────────────────────────────────────────────
    try {
      console.log("Новая заявка на подбор:", payload);

      const subject = encodeURIComponent("Заявка на подбор специалиста");
      const body = encodeURIComponent(
        `Имя: ${payload.name}\nКонтакт: ${payload.contact}\nКого нужно подобрать: ${payload.role}`
      );
      window.location.href = `mailto:${site.contacts.email}?subject=${subject}&body=${body}`;

      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-20 sm:py-28"
      aria-labelledby="contact-title"
    >
      <div className="container-content">
        <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-card">
          <div className="grid gap-0 lg:grid-cols-2">
            {/* Левая часть — оффер */}
            <div className="flex flex-col justify-center bg-gradient-to-br from-navy to-navy-700 p-8 text-paper sm:p-12">
              <h2
                id="contact-title"
                className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Нужен сильный специалист в команду?
              </h2>
              <p className="mt-4 max-w-md text-pretty leading-relaxed text-paper/75">
                Расскажите, кого ищете — мы поможем сформулировать профиль роли и
                предложим понятный план подбора.
              </p>

              <ul className="mt-8 space-y-3 text-sm text-paper/80">
                {[
                  "Ответим и предложим следующий шаг",
                  "Поможем уточнить требования к роли",
                  "Без обязательств на первом контакте",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-paper/60" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Правая часть — форма */}
            <div className="p-8 sm:p-12">
              {status === "success" ? (
                <div
                  className="flex h-full flex-col items-center justify-center text-center"
                  role="status"
                  aria-live="polite"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-emerald-50 text-emerald-600">
                    <CheckCircle2 size={28} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-ink">
                    Заявка готова к отправке
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-ink-muted">
                    Откроется ваш почтовый клиент с заполненным письмом. Если этого
                    не произошло — напишите нам в Telegram или на почту.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="btn-secondary mt-6"
                  >
                    Отправить ещё одну заявку
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <h3 className="text-lg font-semibold text-ink">Оставить заявку</h3>

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-ink-soft"
                    >
                      Имя
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Как к вам обращаться"
                      className="w-full rounded-xl border border-line bg-paper/60 px-4 py-3 text-sm text-ink outline-none transition focus:border-navy focus:bg-white focus:ring-2 focus:ring-navy/15"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact"
                      className="mb-1.5 block text-sm font-medium text-ink-soft"
                    >
                      Телефон или Telegram
                    </label>
                    <input
                      id="contact"
                      name="contact"
                      type="text"
                      required
                      placeholder="+7… или @username"
                      className="w-full rounded-xl border border-line bg-paper/60 px-4 py-3 text-sm text-ink outline-none transition focus:border-navy focus:bg-white focus:ring-2 focus:ring-navy/15"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="role"
                      className="mb-1.5 block text-sm font-medium text-ink-soft"
                    >
                      Кого нужно подобрать
                    </label>
                    <textarea
                      id="role"
                      name="role"
                      rows={3}
                      placeholder="Например: менеджер маркетплейсов, опыт с Ozon и WB"
                      className="w-full resize-none rounded-xl border border-line bg-paper/60 px-4 py-3 text-sm text-ink outline-none transition focus:border-navy focus:bg-white focus:ring-2 focus:ring-navy/15"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "sending" ? "Отправляем…" : "Оставить заявку"}
                    {status !== "sending" && <ArrowRight size={16} aria-hidden="true" />}
                  </button>

                  {status === "error" && (
                    <p className="text-sm text-red-600" role="alert">
                      Что-то пошло не так. Напишите нам напрямую в Telegram или на
                      почту.
                    </p>
                  )}

                  <p className="text-xs leading-relaxed text-ink-muted">
                    Нажимая «Оставить заявку», вы соглашаетесь на обработку
                    контактных данных для ответа на обращение.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
