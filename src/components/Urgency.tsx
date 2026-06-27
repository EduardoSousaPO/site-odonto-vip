"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { AlertTriangle, CalendarClock, Search, ArrowRight, LucideIcon } from "lucide-react";
import { Section } from "./ui/Section";
import { SectionTitle } from "./ui/SectionTitle";
import { AnimateIn } from "./ui/AnimateIn";
import { waLink, waMessages } from "@/config/site";

type Item = { icon: LucideIcon; title: string; text: string };

const items: Item[] = [
  {
    icon: AlertTriangle,
    title: "Urgência: dor ou inflamação",
    text: "Se o seu siso já está doendo, inflamado ou empurrando os outros dentes. O atendimento precisa ser imediato.",
  },
  {
    icon: CalendarClock,
    title: "Planejamento ortodôntico",
    text: "Se o seu dentista recomendou a retirada para dar sequência ao uso de aparelho ou alinhadores.",
  },
  {
    icon: Search,
    title: "Prevenção",
    text: "Se você quer avaliar o nascimento do dente antes que ele cause problemas na sua arcada.",
  },
];

export function Urgency() {
  const reduce = useReducedMotion();

  return (
    <Section id="urgencia" tint>
      <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
        {/* Imagem em moldura arco */}
        <AnimateIn className="relative order-2 lg:order-1">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden arch shadow-soft ring-1 ring-ink/5">
            <Image
              src="/images/hero-medico.jpg"
              alt="Dentista da OdontoVip mostrando a radiografia ao paciente durante a avaliação"
              fill
              sizes="(max-width: 1024px) 80vw, 36vw"
              className="object-cover"
            />
          </div>
          <span
            aria-hidden
            className="absolute -right-3 top-10 hidden h-24 w-24 rounded-full bg-gold/20 blur-2xl lg:block"
          />
        </AnimateIn>

        <div className="order-1 lg:order-2">
          <SectionTitle
            kicker="Identifique o seu caso"
            title={
              <>
                Quando você deve agendar a sua{" "}
                <span className="accent-serif text-gold-deep">avaliação?</span>
              </>
            }
          />

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: reduce ? 0 : 0.1 } } }}
            className="mt-10 flex flex-col"
          >
            {items.map(({ icon: Icon, title, text }, i) => (
              <motion.li
                key={title}
                variants={{
                  hidden: reduce ? { opacity: 1 } : { opacity: 0, x: 22 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.55 } },
                }}
                className={`flex gap-5 py-5 ${i > 0 ? "border-t border-ink/10" : ""}`}
              >
                <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold-deep">
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-ink">{title}</h3>
                  <p className="mt-1 leading-relaxed text-muted">{text}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          <AnimateIn delay={0.1} className="mt-8">
            <a
              href={waLink(waMessages.urgency)}
              target="_blank"
              rel="noopener noreferrer"
              data-event="cta_urgency"
              className="group inline-flex items-center gap-2.5 rounded-full bg-teal-deep px-6 py-3.5 font-semibold text-cream transition-colors hover:bg-ink"
            >
              Agendar minha avaliação agora
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />
            </a>
          </AnimateIn>
        </div>
      </div>
    </Section>
  );
}
