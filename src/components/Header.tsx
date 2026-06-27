"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { waLink, waMessages } from "@/config/site";

const navLinks = [
  { href: "#medos", label: "A clínica" },
  { href: "#urgencia", label: "Quando agendar" },
  { href: "#depoimentos", label: "Pacientes" },
  { href: "#contato", label: "Contato" },
];

function Wordmark() {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="OdontoVip — início">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/40">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-gold" fill="currentColor" aria-hidden>
          <path d="M12 3c-3.6 0-6 2-6 5.5 0 2.5 1 4 2 6.5.8 2 1.2 6 2.5 6 1 0 .7-3.5 1.5-3.5s.5 3.5 1.5 3.5c1.3 0 1.7-4 2.5-6 1-2.5 2-4 2-6.5C18 5 15.6 3 12 3z" />
        </svg>
      </span>
      <span className="text-[1.05rem] font-extrabold leading-none tracking-tight text-cream">
        Odonto<span className="text-gold">Vip</span>
      </span>
    </a>
  );
}

export function Header() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex justify-center px-4">
      <div
        className={`mt-3 flex w-full max-w-5xl items-center justify-between gap-4 rounded-full border border-cream/10 bg-ink-800/90 pl-5 pr-2 py-2 backdrop-blur-xl transition-all duration-300 ${
          compact ? "shadow-soft" : ""
        }`}
      >
        <Wordmark />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream/75 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={waLink(waMessages.header)}
          target="_blank"
          rel="noopener noreferrer"
          data-event="cta_header"
          className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-cream"
        >
          Agendar avaliação
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />
        </a>
      </div>
    </header>
  );
}
