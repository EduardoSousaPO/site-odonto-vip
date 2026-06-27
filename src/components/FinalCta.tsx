"use client";

import Image from "next/image";
import { MessageCircle, FileImage } from "lucide-react";
import { Container } from "./ui/Container";
import { AnimateIn } from "./ui/AnimateIn";
import { waLink, waMessages, site } from "@/config/site";

export function FinalCta() {
  return (
    <section id="contato" className="scroll-mt-24 bg-cream py-20 md:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ink-800 px-6 py-16 md:px-16 md:py-24">
          <Image
            src="/images/clinica-ambiente.jpg"
            alt=""
            aria-hidden
            fill
            sizes="100vw"
            className="object-cover opacity-[0.14]"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-ink-800 via-ink-800/92 to-ink-800/88" />
          <span aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
          <span aria-hidden className="pointer-events-none absolute -left-10 bottom-0 h-52 w-52 rounded-full bg-teal/15 blur-3xl" />

          <AnimateIn className="relative mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
            <span className="kicker text-gold">Não deixe para depois</span>
            <h2 className="text-[clamp(1.7rem,3.6vw,2.7rem)] font-bold text-cream">
              Não adie a sua saúde bucal. O siso inflamado{" "}
              <span className="accent-serif text-gold">pode piorar rapidamente.</span>
            </h2>
            <p className="text-lg leading-relaxed text-cream/85">
              Clique no botão abaixo para falar com a nossa equipe de atendimento.
              Se você já tiver uma radiografia da boca (panorâmica), envie-nos
              direto no WhatsApp para agilizarmos o seu diagnóstico.
            </p>

            <a
              href={waLink(waMessages.finalCta)}
              target="_blank"
              rel="noopener noreferrer"
              data-event="cta_final"
              aria-label="Falar com especialista e agendar avaliação via WhatsApp"
              className="group mt-2 inline-flex items-center gap-2.5 rounded-full bg-gold px-8 py-4 text-base font-semibold text-ink shadow-gold transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-cream"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              Falar com Especialista e Agendar Avaliação
            </a>

            <p className="flex items-center gap-2 text-sm text-cream/70">
              <FileImage className="h-4 w-4 text-gold" aria-hidden />
              Já tem a radiografia panorâmica? Envie no WhatsApp e agilize o diagnóstico.
            </p>
            <p className="text-sm text-cream/55">{site.disclaimer}</p>
          </AnimateIn>
        </div>
      </Container>
    </section>
  );
}
