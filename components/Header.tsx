"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/80 backdrop-blur-md">
      <div className="container-content flex h-16 items-center justify-between sm:h-[4.5rem]">
        <a
          href="#top"
          className="flex items-center gap-2 text-base font-semibold tracking-tight text-ink"
          aria-label={`${site.name} — на главную`}
        >
          <span
            aria-hidden="true"
            className="grid h-7 w-7 place-items-center rounded-lg bg-navy text-paper text-[13px] font-bold"
          >
            H
          </span>
          {site.name}
        </a>

        {/* Десктоп-навигация */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Основная навигация"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#contact" className="btn-primary">
            Обсудить подбор
          </a>
        </div>

        {/* Бургер для мобильных */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-white text-ink md:hidden"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {/* Мобильное меню */}
      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-paper md:hidden"
          aria-label="Мобильная навигация"
        >
          <div className="container-content flex flex-col gap-1 py-4">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-ink-soft transition-colors hover:bg-sand/60 hover:text-ink"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              Обсудить подбор
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
