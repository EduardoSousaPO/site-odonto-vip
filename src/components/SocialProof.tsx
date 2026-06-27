"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Star, Quote, ExternalLink } from "lucide-react";
import { Section } from "./ui/Section";
import { SectionTitle } from "./ui/SectionTitle";
import { AnimateIn } from "./ui/AnimateIn";
import { site } from "@/config/site";

/**
 * PLACEHOLDERS — substituir pelos melhores depoimentos REAIS do Google Meu Negócio.
 * Não inventamos avaliações: estes textos são neutros e marcados como exemplo.
 */
const testimonials = [
  {
    name: "Paciente OdontoVip",
    meta: "Avaliação a confirmar",
    text: "Espaço reservado para um depoimento real do Google sobre o atendimento na extração do siso.",
  },
  {
    name: "Paciente OdontoVip",
    meta: "Avaliação a confirmar",
    text: "Espaço reservado para um depoimento real destacando conforto, ausência de dor e recuperação rápida.",
  },
  {
    name: "Paciente OdontoVip",
    meta: "Avaliação a confirmar",
    text: "Espaço reservado para um depoimento real sobre a equipe acolhedora e o resultado da cirurgia.",
  },
];

export function SocialProof() {
  const reduce = useReducedMotion();
  const hasGoogle = site.googleBusinessUrl.trim().length > 0;

  return (
    <Section id="depoimentos" tint>
      <SectionTitle
        eyebrow="Prova social"
        title="Veja o que os pacientes falam do nosso atendimento"
        subtitle="Reunimos as melhores avaliações dos nossos pacientes no Google."
      />

      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: reduce ? 0 : 0.08 } },
        }}
        className="mt-14 grid gap-6 md:grid-cols-3"
      >
        {testimonials.map((t, i) => (
          <motion.li
            key={i}
            variants={{
              hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="flex flex-col gap-4 rounded-3xl bg-white p-7 shadow-card ring-1 ring-navy/5"
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-0.5 text-amber-400" aria-label="5 de 5 estrelas">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" aria-hidden />
                ))}
              </div>
              <Quote className="h-6 w-6 text-teal/30" aria-hidden />
            </div>
            <p className="text-slate">{t.text}</p>
            <div className="mt-auto flex items-center gap-3 pt-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/5 text-sm font-bold text-navy">
                {t.name.charAt(0)}
              </span>
              <div>
                <p className="text-sm font-semibold text-navy">{t.name}</p>
                <p className="text-xs text-slate">{t.meta}</p>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>

      <AnimateIn className="mt-12 flex flex-col items-center gap-2" delay={0.1}>
        {hasGoogle ? (
          <a
            href={site.googleBusinessUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border-2 border-navy/15 bg-white px-6 py-3 font-semibold text-navy transition-colors hover:border-teal hover:text-teal-600"
          >
            <ExternalLink className="h-5 w-5" aria-hidden />
            Ver avaliações no Google
          </a>
        ) : (
          <span
            className="inline-flex cursor-not-allowed items-center gap-2 rounded-2xl border-2 border-navy/10 bg-white px-6 py-3 font-semibold text-slate/60"
            title="Adicione o link do Google Meu Negócio em src/config/site.ts (googleBusinessUrl)"
          >
            <ExternalLink className="h-5 w-5" aria-hidden />
            Ver avaliações no Google
          </span>
        )}
        {!hasGoogle && (
          <p className="text-xs text-slate/70">
            (Pendente: link do Google Meu Negócio — configurar em{" "}
            <code>src/config/site.ts</code>)
          </p>
        )}
      </AnimateIn>
    </Section>
  );
}
