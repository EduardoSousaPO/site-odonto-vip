# Wiki Log — OdontoVip Landing

> Histórico cronológico vivo. 1 linha por evento. Mais recente embaixo.

- [MVP] 2026-06-27 — Planejamento: BRIEF, PRD-lite, SPEC+design system, ASSETS, TODO e SUPERPROMPT criados. Stack Next.js+Tailwind+Framer. Modo MVP Lite. Execução em loop pendente (ver SUPERPROMPT.md).
- [MVP] 2026-06-27 — F-01: Scaffold Next.js 15 (App Router, TS) + Tailwind 3.4 + Framer Motion + lucide-react. Build verde. Next atualizado p/ 15.5.19 (corrige CVE-2025-66478).
- [MVP] 2026-06-27 — F-02: Design tokens (paleta navy/teal) em globals.css + tailwind.config.ts; fontes Plus Jakarta Sans + Inter via next/font.
- [MVP] 2026-06-27 — F-03: src/config/site.ts (contato + waLink() + waMessages); componentes ui/ base (Container, Section, SectionTitle, CtaButton, AnimateIn).
- [MVP] 2026-06-27 — F-04: 4 imagens stock (Pexels, uso comercial) + logo SVG + favicon + og-image em /public/images. hero-medico.jpg é placeholder stock (trocar pela foto real do Dr. Paulo).
- [MVP] 2026-06-27 — F-05..F-11: Topbar, Header sticky, Hero (CTA WA above-the-fold mobile + selos), Fears (3 cards), Urgency (3 itens + img + CTA), SocialProof (placeholders + GMN condicional), FinalCta (navy + radiografia), Footer (disclaimer convênios), WhatsApp FAB. Build verde.
- [MVP] 2026-06-27 — F-12: SEO/metadata + OpenGraph + Twitter card + favicon.svg + theme-color navy no layout. F-13: animações fade-up/stagger via Framer Motion + prefers-reduced-motion respeitado (globals.css + useReducedMotion).
- [MVP] 2026-06-27 — F-14: QA responsivo via Playwright (390/768/1280). CTA do Hero confirmado acima da dobra no mobile (bottom 562px < 844px). 0 erros de console; 5 links wa.me; todas as imagens com alt. Build verde.
- [MVP] 2026-06-27 — F-15: README com rodar local, deploy Vercel, mapa de imagens (stock vs placeholder) e pendências da cliente (config/site.ts + fotos + Google reviews).
- [MVP] 2026-06-27 — F-16: commit + push para origin/main (github.com/EduardoSousaPO/site-odonto-vip). Deploy Vercel documentado no README (importar repo → Next.js → deploy).
