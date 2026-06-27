"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Star, ArrowUpRight } from "lucide-react";
import { Section } from "./ui/Section";
import { SectionTitle } from "./ui/SectionTitle";
import { AnimateIn } from "./ui/AnimateIn";
import { site } from "@/config/site";

/**
 * PLACEHOLDERS — substituir pelos melhores depoimentos REAIS do Google Meu Negócio.
 * Não inventamos avaliações: textos neutros, marcados como exemplo.
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
    <Section id="depoimentos">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionTitle
          kicker="Quem já passou por aqui"
          title={
            <>
              Veja o que os pacientes falam do{" "}
              <span className="accent-serif text-gold-deep">nosso atendimento</span>
            </>
          }
        />
        {hasGoogle ? (
          <a
            href={site.googleBusinessUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-gold hover:text-gold-deep"
          >
            Ver avaliações no Google
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
          </a>
        ) : (
          <span
            className="inline-flex shrink-0 cursor-not-allowed items-center gap-2 rounded-full border border-ink/10 px-5 py-2.5 text-sm font-semibold text-muted/60"
            title="Adicione o link do Google Meu Negócio em src/config/site.ts (googleBusinessUrl)"
          >
            Ver avaliações no Google
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </span>
        )}
      </div>

      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: reduce ? 0 : 0.1 } } }}
        className="mt-14 grid gap-6 md:grid-cols-3"
      >
        {testimonials.map((t, i) => (
          <motion.li
            key={i}
            variants={{
              hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="flex flex-col gap-5 rounded-3xl border border-sand bg-cream p-7"
          >
            <span className="accent-serif text-5xl leading-none text-gold/50" aria-hidden>
              &ldquo;
            </span>
            <p className="-mt-4 leading-relaxed text-body">{t.text}</p>
            <div className="mt-auto flex items-center gap-3 border-t border-sand pt-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-sm font-bold text-gold-deep">
                {t.name.charAt(0)}
              </span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-ink">{t.name}</p>
                <p className="text-xs text-muted">{t.meta}</p>
              </div>
              <div className="flex gap-0.5 text-gold" aria-label="5 de 5 estrelas">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-current" aria-hidden />
                ))}
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>

      {!hasGoogle && (
        <AnimateIn className="mt-6">
          <p className="text-xs text-muted/70">
            Pendente: link do Google Meu Negócio e depoimentos reais — configurar em{" "}
            <code className="rounded bg-cream-300 px-1.5 py-0.5">src/config/site.ts</code>.
          </p>
        </AnimateIn>
      )}
    </Section>
  );
}
