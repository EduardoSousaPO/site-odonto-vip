import { Phone, Mail, Instagram, MapPin } from "lucide-react";
import { site } from "@/config/site";
import { Container } from "./ui/Container";

/** Barra fina de contato. Some no mobile pequeno (hidden < sm). */
export function Topbar() {
  return (
    <div className="hidden border-b border-white/10 bg-navy text-white/90 sm:block">
      <Container className="flex h-10 items-center justify-between text-[0.8rem]">
        <div className="flex items-center gap-5">
          <a
            href={site.phoneHref}
            className="flex items-center gap-1.5 transition-colors hover:text-teal"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden />
            <span>{site.phone}</span>
          </a>
          <a
            href={`mailto:${site.email}`}
            className="hidden items-center gap-1.5 transition-colors hover:text-teal md:flex"
          >
            <Mail className="h-3.5 w-3.5" aria-hidden />
            <span>{site.email}</span>
          </a>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" aria-hidden />
            <span>{site.city}</span>
          </span>
        </div>
        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 transition-colors hover:text-teal"
          aria-label="Instagram da OdontoVip"
        >
          <Instagram className="h-3.5 w-3.5" aria-hidden />
          <span className="hidden md:inline">Instagram</span>
        </a>
      </Container>
    </div>
  );
}
