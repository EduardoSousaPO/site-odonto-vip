"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Crosshair, HeartHandshake, Timer, LucideIcon } from "lucide-react";
import { Section } from "./ui/Section";
import { SectionTitle } from "./ui/SectionTitle";

type Card = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const cards: Card[] = [
  {
    icon: Crosshair,
    title: "Tecnologia e Precisão",
    text: "Planejamento detalhado para uma cirurgia rápida, reduzindo o tempo que você passa na cadeira do dentista.",
  },
  {
    icon: HeartHandshake,
    title: "Protocolo Sem Dor",
    text: "Anestesia assertiva e medicações prévias para garantir o seu conforto total durante todo o procedimento.",
  },
  {
    icon: Timer,
    title: "Recuperação Acelerada",
    text: "Orientações e técnicas modernas para minimizar o inchaço e garantir um retorno rápido ao trabalho ou estudos.",
  },
];

export function Fears() {
  const reduce = useReducedMotion();

  return (
    <Section id="medos" tint>
      <SectionTitle
        eyebrow="Sem medo, sem surpresas"
        title="Como tornamos a cirurgia do siso um procedimento simples para você:"
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
        {cards.map(({ icon: Icon, title, text }) => (
          <motion.li
            key={title}
            variants={{
              hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="group flex flex-col gap-4 rounded-3xl bg-white p-7 shadow-card ring-1 ring-navy/5 transition-shadow hover:shadow-soft"
          >
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal/10 text-teal-600 transition-colors group-hover:bg-teal group-hover:text-white">
              <Icon className="h-7 w-7" aria-hidden />
            </span>
            <h3 className="text-xl font-bold text-navy">{title}</h3>
            <p className="text-slate">{text}</p>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
