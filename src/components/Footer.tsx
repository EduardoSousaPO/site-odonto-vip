import { Phone, Mail, MapPin, Instagram, ShieldAlert } from "lucide-react";
import { Container } from "./ui/Container";
import { site } from "@/config/site";

export function Footer() {
  const year = 2026;

  return (
    <footer className="bg-ink-800 text-cream/75">
      <Container className="grid gap-12 py-16 md:grid-cols-3">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/40">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-gold" fill="currentColor" aria-hidden>
                <path d="M12 3c-3.6 0-6 2-6 5.5 0 2.5 1 4 2 6.5.8 2 1.2 6 2.5 6 1 0 .7-3.5 1.5-3.5s.5 3.5 1.5 3.5c1.3 0 1.7-4 2.5-6 1-2.5 2-4 2-6.5C18 5 15.6 3 12 3z" />
              </svg>
            </span>
            <span className="text-lg font-extrabold tracking-tight text-cream">
              Odonto<span className="text-gold">Vip</span>
            </span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-cream/65">
            Extração de dente do siso em {site.city} com técnicas modernas, foco
            no conforto e recuperação acelerada.
          </p>
          <p className="text-sm text-cream/55">{site.doctor}</p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Contato</h3>
          <a href={site.phoneHref} className="flex items-center gap-2.5 text-sm transition-colors hover:text-gold">
            <Phone className="h-4 w-4" strokeWidth={1.5} aria-hidden />
            {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 text-sm transition-colors hover:text-gold">
            <Mail className="h-4 w-4" strokeWidth={1.5} aria-hidden />
            {site.email}
          </a>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm transition-colors hover:text-gold">
            <Instagram className="h-4 w-4" strokeWidth={1.5} aria-hidden />
            Instagram
          </a>
          <span className="flex items-center gap-2.5 text-sm">
            <MapPin className="h-4 w-4" strokeWidth={1.5} aria-hidden />
            {site.city}
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Importante</h3>
          <p className="flex items-start gap-2.5 rounded-2xl border border-cream/10 bg-cream/5 p-4 text-sm leading-relaxed text-cream/80">
            <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} aria-hidden />
            {site.disclaimer}
          </p>
        </div>
      </Container>

      <div className="border-t border-cream/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-5 text-xs text-cream/45 sm:flex-row">
          <p>© {year} {site.name}. Todos os direitos reservados.</p>
          <p>{site.city}</p>
        </Container>
      </div>
    </footer>
  );
}
