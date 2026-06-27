"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, ArrowDown } from "lucide-react";
import { site, waLink, waMessages } from "@/config/site";
import { CountUp } from "./ui/CountUp";

export function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax: a imagem desce mais devagar que o conteúdo ao rolar.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  // Reveal por linha do título (clip mask).
  const lineParent = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
  };
  const lineChild = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { y: "115%" },
        show: {
          y: 0,
          transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
        },
      };

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      {/* Foto imersiva — parallax + Ken Burns (zoom lento contínuo) */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={reduce ? undefined : { y: imgY }}
      >
        <motion.div
          className="absolute inset-0"
          animate={reduce ? undefined : { scale: [1.1, 1.18, 1.1] }}
          transition={
            reduce
              ? undefined
              : { duration: 24, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <Image
            src="/images/atendimento-1.jpg"
            alt="Dentista da OdontoVip conversando com uma paciente sorridente durante a avaliação"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[62%_center]"
          />
        </motion.div>
      </motion.div>

      {/* Camadas de leitura: darken uniforme + esquerda + base inferior (texto) */}
      <div aria-hidden className="absolute inset-0 bg-ink-800/45" />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-ink-800 via-ink-800/85 to-ink-800/25"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink-800 via-ink-800/45 to-transparent"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-12 pt-28 sm:px-6 lg:px-8 lg:pb-20">
        <motion.span {...rise(0.05)} className="kicker mb-6 text-gold">
          OdontoVip · Extração de siso em {site.city}
        </motion.span>

        <motion.h1
          variants={lineParent}
          initial="hidden"
          animate="show"
          className="max-w-3xl text-[clamp(2.1rem,6.2vw,4.4rem)] font-bold text-cream"
        >
          <span className="block overflow-hidden pb-[0.08em]">
            <motion.span variants={lineChild} className="block text-cream/85">
              Sofrendo com o dente do siso?
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.08em]">
            <motion.span variants={lineChild} className="block">
              Resolva rápido, com segurança{" "}
              <span className="accent-serif text-gold">e sem dor.</span>
            </motion.span>
          </span>
        </motion.h1>

        <motion.p
          {...rise(0.2)}
          className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-cream/90"
        >
          Na OdontoVip Goiânia, realizamos a extração do seu siso com técnicas
          modernas, foco no seu conforto e uma recuperação acelerada para você
          voltar logo à sua rotina.
        </motion.p>

        <motion.div {...rise(0.28)} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={waLink(waMessages.hero)}
            target="_blank"
            rel="noopener noreferrer"
            data-event="cta_hero"
            aria-label="Agendar avaliação prioritária via WhatsApp"
            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gold px-7 py-4 text-base font-semibold text-ink shadow-gold transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-cream"
          >
            <MessageCircle className="h-5 w-5" aria-hidden />
            Agendar Avaliação Prioritária
          </a>
          <a
            href="#urgencia"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-6 py-4 text-base font-medium text-cream transition-colors hover:border-gold hover:text-gold"
          >
            Será que é o meu caso?
            <ArrowDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden />
          </a>
        </motion.div>

        <motion.p {...rise(0.34)} className="mt-4 text-sm text-cream/55">
          {site.disclaimer}
        </motion.p>

        {/* Selos de confiança — números com contagem animada */}
        <motion.dl
          {...rise(0.42)}
          className="mt-10 flex flex-wrap items-end gap-x-8 gap-y-4 border-t border-cream/15 pt-7"
        >
          {site.stats.map((stat, i) => (
            <div key={stat.label} className="flex items-end gap-8">
              {i > 0 && <span aria-hidden className="hidden h-10 w-px bg-cream/15 sm:block" />}
              <div>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="accent-serif text-3xl leading-none text-gold md:text-4xl">
                  <CountUp value={stat.value} />
                </dd>
                <p className="mt-1.5 text-xs uppercase tracking-wide text-cream/60">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
