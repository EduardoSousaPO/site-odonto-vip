"use client";

import Image from "next/image";
import { MessageCircle, FileImage } from "lucide-react";
import { Container } from "./ui/Container";
import { CtaButton } from "./ui/CtaButton";
import { AnimateIn } from "./ui/AnimateIn";
import { waLink, waMessages, site } from "@/config/site";

export function FinalCta() {
  return (
    <section id="contato" className="scroll-mt-24 bg-white py-20 md:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-14 shadow-soft md:px-14 md:py-20">
          {/* imagem de ambiente ao fundo, suave */}
          <Image
            src="/images/clinica-ambiente.jpg"
            alt=""
            aria-hidden
            fill
            sizes="100vw"
            className="object-cover opacity-15"
          />
          {/* gradiente de leitura */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy-700/90"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-teal/20 blur-3xl"
          />

          <AnimateIn className="relative mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
            <h2 className="text-[clamp(1.6rem,3.5vw,2.5rem)] font-extrabold text-white">
              Não adie a sua saúde bucal. O siso inflamado pode piorar
              rapidamente.
            </h2>
            <p className="text-lg text-white/80">
              Clique no botão abaixo para falar com a nossa equipe de
              atendimento. Se você já tiver uma radiografia da boca
              (panorâmica), envie-nos direto no WhatsApp para agilizarmos o seu
              diagnóstico.
            </p>

            <CtaButton
              href={waLink(waMessages.finalCta)}
              variant="whatsapp"
              size="lg"
              dataEvent="cta_final"
              className="mt-2"
              ariaLabel="Falar com especialista e agendar avaliação via WhatsApp"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              Falar com Especialista e Agendar Avaliação
            </CtaButton>

            <p className="flex items-center gap-2 text-sm text-white/70">
              <FileImage className="h-4 w-4" aria-hidden />
              Já tem a radiografia panorâmica? Envie no WhatsApp e agilize seu
              diagnóstico.
            </p>
            <p className="text-sm text-white/60">{site.disclaimer}</p>
          </AnimateIn>
        </div>
      </Container>
    </section>
  );
}
