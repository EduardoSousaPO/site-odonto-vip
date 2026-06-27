import Image from "next/image";
import { Phone, Mail, MapPin, Instagram, AlertCircle } from "lucide-react";
import { Container } from "./ui/Container";
import { site } from "@/config/site";

export function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-white/10 bg-navy text-white/80">
      <Container className="grid gap-10 py-14 md:grid-cols-3">
        <div className="flex flex-col gap-4">
          <Image
            src="/images/logo-odontovip.svg"
            alt="OdontoVip"
            width={160}
            height={40}
            style={{ height: "auto" }}
            className="w-[160px] brightness-0 invert"
          />
          <p className="max-w-xs text-sm text-white/70">
            Extração de dente do siso em {site.city} com técnicas modernas, foco
            no conforto e recuperação acelerada.
          </p>
          <p className="text-sm text-white/60">{site.doctor}</p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">
            Contato
          </h3>
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-sm transition-colors hover:text-teal"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {site.phone}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-2 text-sm transition-colors hover:text-teal"
          >
            <Mail className="h-4 w-4" aria-hidden />
            {site.email}
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm transition-colors hover:text-teal"
          >
            <Instagram className="h-4 w-4" aria-hidden />
            Instagram
          </a>
          <span className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4" aria-hidden />
            {site.city}
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">
            Importante
          </h3>
          <p className="flex items-start gap-2 rounded-2xl bg-white/5 p-4 text-sm text-white/80">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden />
            {site.disclaimer}
          </p>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/50 sm:flex-row">
          <p>
            © {year} {site.name}. Todos os direitos reservados.
          </p>
          <p>{site.city}</p>
        </Container>
      </div>
    </footer>
  );
}
