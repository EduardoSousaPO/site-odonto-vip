"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CtaButton } from "./ui/CtaButton";
import { Container } from "./ui/Container";
import { waLink, waMessages } from "@/config/site";

const navLinks = [
  { href: "#medos", label: "Por que a OdontoVip" },
  { href: "#urgencia", label: "Quando agendar" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-navy/5 bg-white/85 shadow-card backdrop-blur-md"
          : "bg-white/0"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4 md:h-20">
        <a href="#top" className="flex items-center" aria-label="OdontoVip — início">
          <Image
            src="/images/logo-odontovip.svg"
            alt="OdontoVip"
            width={150}
            height={38}
            priority
            style={{ height: "auto" }}
            className="w-[140px] md:w-[156px]"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate transition-colors hover:text-teal-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <CtaButton
          href={waLink(waMessages.header)}
          size="md"
          variant="primary"
          dataEvent="cta_header"
          className="shrink-0"
        >
          Marque uma consulta
        </CtaButton>
      </Container>
    </header>
  );
}
