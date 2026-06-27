"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, ShieldCheck } from "lucide-react";
import { Container } from "./ui/Container";
import { CtaButton } from "./ui/CtaButton";
import { site, waLink, waMessages } from "@/config/site";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden bg-white">
      {/* blobs decorativos suaves */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-teal/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-40 h-80 w-80 rounded-full bg-brand/10 blur-3xl"
      />

      <Container className="relative grid items-center gap-10 py-10 md:grid-cols-2 md:gap-12 md:py-20 lg:py-24">
        {/* Coluna de texto + CTA (primeiro no DOM => above the fold no mobile) */}
        <div className="flex flex-col gap-5 md:gap-6">
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-teal/10 px-4 py-1.5 text-sm font-semibold text-teal-600"
          >
            <ShieldCheck className="h-4 w-4" aria-hidden />
            Extração de siso em {site.city}
          </motion.span>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-[clamp(2.05rem,6vw,4rem)] font-extrabold leading-[1.08]"
          >
            Sofrendo com o dente do siso?{" "}
            <span className="text-gradient">
              Resolva rápido, com segurança e sem dor.
            </span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="max-w-xl text-[1.0625rem] text-slate md:text-lg"
          >
            Na OdontoVip Goiânia, realizamos a extração do seu siso com técnicas
            modernas, foco no seu conforto e uma recuperação acelerada para você
            voltar logo à sua rotina.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="flex flex-col gap-3"
          >
            <CtaButton
              href={waLink(waMessages.hero)}
              variant="whatsapp"
              size="lg"
              dataEvent="cta_hero"
              className="w-full sm:w-fit"
              ariaLabel="Agendar avaliação prioritária via WhatsApp"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              Agendar Avaliação Prioritária via WhatsApp
            </CtaButton>
            <p className="text-sm text-slate">
              {site.disclaimer}
            </p>
          </motion.div>

          {/* Selos de confiança */}
          <motion.ul
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-1 grid grid-cols-3 gap-3 border-t border-navy/5 pt-5"
          >
            {site.stats.map((stat) => (
              <li key={stat.label} className="flex flex-col">
                <span className="text-xl font-extrabold text-navy md:text-2xl">
                  {stat.value}
                </span>
                <span className="text-xs text-slate md:text-sm">{stat.label}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Coluna de imagem (depois no DOM no mobile) */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.97 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto w-full max-w-md md:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-soft ring-1 ring-navy/5">
            <Image
              src="/images/hero-medico.jpg"
              alt="Profissional da OdontoVip conversando com paciente durante a avaliação"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 45vw"
              className="object-cover"
            />
          </div>

          {/* badge flutuante */}
          <motion.div
            animate={reduce ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -left-4 hidden rounded-2xl bg-white/95 px-5 py-3 shadow-soft ring-1 ring-navy/5 backdrop-blur md:block"
          >
            <p className="text-sm font-semibold text-navy">Atendimento acolhedor</p>
            <p className="text-xs text-slate">conforto do diagnóstico à recuperação</p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
