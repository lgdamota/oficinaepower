"use client";

import { useEffect, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { navItems } from "@/data/site";
import { UnitSelectorTrigger } from "./unit-selector";
import { Logo } from "./ui";

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 18);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -65%", threshold: [0, 0.2, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const close = (event: KeyboardEvent) =>
      event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", close);
    document.body.classList.toggle("menu-open", open);
    return () => {
      document.removeEventListener("keydown", close);
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-inner">
        <a href="#inicio" className="brand-link" onClick={() => setOpen(false)}>
          <Logo />
        </a>
        <nav
          className={`main-nav ${open ? "open" : ""}`}
          aria-label="Navegação principal"
          id="mobile-navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={active === item.id ? "active" : ""}
              aria-current={active === item.id ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <UnitSelectorTrigger
            className="button primary mobile-cta"
            onBeforeOpen={() => setOpen(false)}
          >
            <MessageCircle size={18} />
            Agendar avaliação
          </UnitSelectorTrigger>
        </nav>
        <UnitSelectorTrigger className="button primary header-cta">
          <MessageCircle size={18} />
          Agendar avaliação
        </UnitSelectorTrigger>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
