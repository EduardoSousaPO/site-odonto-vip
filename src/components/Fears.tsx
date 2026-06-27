"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Crosshair, HeartHandshake, Timer, LucideIcon } from "lucide-react";
import { Section } from "./ui/Section";
import { SectionTitle } from "./ui/SectionTitle";

type Item = { n: string; icon: LucideIcon; title: string; text: string };

const items: Item[] = [
  {
    n: "01",
    icon: Crosshair,
    title: "Tecnologia e Precisão",
    text: "Planejamento detalhado para uma cirurgia rápida, reduzindo o tempo que você passa na cadeira do dentista.",
  },
  {
    n: "02",
    icon: HeartHandshake,
    title: "Protocolo Sem Dor",
    text: "Anestesia assertiva e medicações prévias para garantir o seu conforto total durante todo o procedimento.",
  },
  {
    n: "03",
    icon: Timer,
    title: "Recuperação Acelerada",
    text: "Orientações e técnicas modernas para minimizar o inchaço e garantir um retorno rápido ao trabalho ou estudos.",
  },
];

export function Fears() {
  const reduce = useReducedMotion();

  return (
    <Section id="medos">
      <SectionTitle
        kicker="Sem medo, sem surpresas"
        title={
          <>
            Como tornamos a cirurgia do siso um procedimento{" "}
            <span className="accent-serif text-gold-deep">simples para você</span>
          </>
        }
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: reduce ? 0 : 0.1 } } }}
        className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-3"
      >
        {items.map(({ n, icon: Icon, title, text }) => (
          <motion.div
            key={n}
            variants={{
              hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 26 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="relative"
          >
            <div className="rule-gold mb-6" />
            <div className="flex items-center justify-between">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold-deep">
                <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
              </span>
              <span className="accent-serif text-4xl text-sand">{n}</span>
            </div>
            <h3 className="mt-6 text-xl font-bold text-ink">{title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{text}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
