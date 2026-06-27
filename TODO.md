# TODO — OdontoVip Landing (MVP Lite)

Estado vivo do projeto. Execução em loop usa esta lista: pega o próximo item `[ ]`, implementa, valida, marca `[x]`, segue até tudo pronto + `npm run build` verde.

## Hipótese MVP
- **O que valido:** landing focada em siso converte mais cliques no WhatsApp que o site institucional atual.
- **Como sei que validou:** design aprovado pela cliente + CTA WhatsApp claro/clicável; instrumentar conversão depois.
- **Critério de promoção a Standard:** se virar produto recorrente → PRD/SPEC retroativos completos.

## Docs (feito nesta sessão de planejamento)
- [x] BRIEF organizado (`docs/BRIEF.md`)
- [x] PRD-lite (`docs/PRD.md`)
- [x] SPEC + design system (`docs/SPEC.md`)
- [x] Inventário de assets (`docs/ASSETS.md`)
- [x] Superprompt de execução (`SUPERPROMPT.md`)

## Execução (rodar na outra sessão via SUPERPROMPT)

### Setup
- [ ] F-01 — Scaffold Next.js 15 + TS + Tailwind + Framer Motion + lucide-react
- [ ] F-02 — Design tokens em `globals.css` + `tailwind.config` + fontes next/font
- [ ] F-03 — `config/site.ts` (contato + `waLink()`) + componentes `ui/` base
- [ ] F-04 — Buscar/baixar imagens (foto médico + stock consultório) em `/public/images`

### Seções (5 blocos)
- [ ] F-05 — Topbar + Header sticky (logo, nav âncora, "Marque uma consulta")
- [ ] F-06 — Bloco 1: Hero (título, apoio, CTA WA above-the-fold mobile, selos de confiança)
- [ ] F-07 — Bloco 2: Eliminação dos medos (3 cards)
- [ ] F-08 — Bloco 3: Filtro de urgência (3 itens)
- [ ] F-09 — Bloco 4: Prova social (depoimentos + link Google Meu Negócio)
- [ ] F-10 — Bloco 5: CTA final (radiografia panorâmica) 
- [ ] F-11 — Footer (contato, disclaimer convênios, endereço) + WhatsApp FAB

### Acabamento
- [ ] F-12 — SEO/metadata + OG + favicon + theme-color
- [ ] F-13 — Animações Framer Motion (fade-up/stagger) + `prefers-reduced-motion`
- [ ] F-14 — QA responsivo (390/768/1280) + `npm run build` verde
- [ ] F-15 — README (rodar local + deploy Vercel + pendências da cliente)
- [ ] F-16 — Commit + push para `github.com/EduardoSousaPO/site-odonto-vip` + instruções Vercel

## §5 Bugs
(vazio)
