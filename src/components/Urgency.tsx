"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { AlertTriangle, CalendarClock, Search, LucideIcon } from "lucide-react";
import { Section } from "./ui/Section";
import { SectionTitle } from "./ui/SectionTitle";
import { CtaButton } from "./ui/CtaButton";
import { AnimateIn } from "./ui/AnimateIn";
import { waLink, waMessages } from "@/config/site";

type Item = {
  icon: LucideIcon;
  tone: string;
  title: string;
  text: string;
};

const items: Item[] = [
  {
    icon: AlertTriangle,
    tone: "bg-red-50 text-red-600",
    title: "Urgência (Dor ou Inflamação)",
    text: "Se o seu siso já está doendo, inflamado ou empurrando os outros dentes. O atendimento precisa ser imediato.",
  },
  {
    icon: CalendarClock,
    tone: "bg-brand/10 text-brand",
    title: "Planejamento Ortodôntico",
    text: "Se o seu dentista recomendou a retirada para dar sequência ao uso de aparelho ou alinhadores.",
  },
  {
    icon: Search,
    tone: "bg-teal/10 text-teal-600",
    title: "Prevenção",
    text: "Se você quer avaliar o nascimento do dente antes que ele cause problemas na sua arcada.",
  },
];

export function Urgency() {
  const reduce = useReducedMotion();

  return (
    <Section id="urgencia">
      <SectionTitle
        eyebrow="Identifique o seu caso"
        title="Quando você deve agendar a sua avaliação?"
      />

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <AnimateIn className="order-2 lg:order-1">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-soft ring-1 ring-navy/5">
            <Image
              src="/images/atendimento-1.jpg"
              alt="Dentista da OdontoVip conversando com paciente sorridente no consultório"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>
        </AnimateIn>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: reduce ? 0 : 0.08 } },
          }}
          className="order-1 flex flex-col gap-5 lg:order-2"
        >
          {items.map(({ icon: Icon, tone, title, text }) => (
            <motion.li
              key={title}
              variants={{
                hidden: reduce ? { opacity: 1 } : { opacity: 0, x: 24 },
                show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
              }}
              className="flex gap-4 rounded-2xl bg-white p-5 shadow-card ring-1 ring-navy/5"
            >
              <span
                className={`mt-0.5 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${tone}`}
              >
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <h3 className="text-lg font-bold text-navy">{title}</h3>
                <p className="mt-1 text-slate">{text}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <AnimateIn className="mt-12 flex justify-center" delay={0.1}>
        <CtaButton
          href={waLink(waMessages.urgency)}
          variant="whatsapp"
          dataEvent="cta_urgency"
        >
          Agendar minha avaliação agora
        </CtaButton>
      </AnimateIn>
    </Section>
  );
}
