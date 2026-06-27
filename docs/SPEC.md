# SPEC — OdontoVip Landing

> Especificação técnica + design system. Enxuto, mas suficiente para execução autônoma.
> Conteúdo dos blocos: `docs/BRIEF.md` · Imagens: `docs/ASSETS.md`.

## 1. Stack

- **Next.js 15** (App Router, TypeScript) — `app/` única página (`/`).
- **TailwindCSS** (tokens via `tailwind.config` + CSS variables).
- **Framer Motion** — animações de entrada/scroll (fade-up, stagger), micro-interações.
- **lucide-react** — ícones.
- **next/font** — fontes (sem requests externos em runtime).
- **next/image** — otimização de imagens.
- Deploy: **Vercel** (repo `https://github.com/EduardoSousaPO/site-odonto-vip.git`).

## 2. Design System (premium)

### Paleta (CSS variables em `globals.css`)
```
--navy:      #0B2B3C   /* azul-marinho profundo — fundos escuros, headings */
--navy-700:  #103B52
--brand:     #1C6EA4   /* azul da marca — destaques, links */
--teal:      #14B8A6   /* verde-teal — CTA primário / WhatsApp */
--teal-600:  #0D9488   /* hover do CTA */
--wa-green:  #25D366   /* verde oficial do WhatsApp (ícone/botão flutuante) */
--ink:       #0F172A   /* texto principal */
--slate:     #475569   /* texto secundário */
--mist:      #F1F5F9   /* seções claras alternadas */
--bg:        #FFFFFF
--ring:      rgba(20,184,166,.35)
```
Gradiente de destaque (headline): `--brand → --teal`.

### Tipografia (next/font)
- **Headings:** `Plus Jakarta Sans` (700/800), tracking levemente negativo nos títulos grandes.
- **Body:** `Inter` (400/500/600).
- Escala: hero `clamp(2.25rem, 6vw, 4rem)`; section title `clamp(1.75rem, 3.5vw, 2.75rem)`; body `1.0625rem`, line-height generoso (1.7).

### Estilo visual
- Cantos: `rounded-2xl`/`rounded-3xl`. Sombras suaves (`shadow-lg` discreto, nada pesado).
- Cards de vidro/elevação leve sobre fundo claro; seções alternam `--bg` e `--mist`.
- Espaçamento generoso (`py-20 md:py-28` por seção). Container `max-w-6xl` central.
- Detalhes premium: badges pill, divisor pontilhado (como o site atual), ícones em círculos com fundo teal-suave, gradientes sutis de fundo, blobs/curvas decorativas leves.
- Acessibilidade: contraste AA, foco visível (`--ring`), `prefers-reduced-motion` respeitado (desliga animações).

### Motion (Framer Motion)
- Entrada por scroll: `opacity 0→1`, `y 24→0`, `viewport once`, stagger 0.08 em grupos de cards.
- Hero: leve parallax/float nos selos de confiança.
- Botões: `whileHover` scale 1.03, `whileTap` 0.98.
- Reduzir/zerar se `prefers-reduced-motion`.

## 3. Estrutura de componentes

```
app/
  layout.tsx          fontes, metadata/SEO, <html lang="pt-BR">
  page.tsx            compõe as seções na ordem dos 5 blocos
  globals.css         tokens + base
components/
  Topbar.tsx          barra fina: telefone, e-mail, redes (some no mobile pequeno)
  Header.tsx          logo + nav âncora + botão "Marque uma consulta" (sticky, blur)
  Hero.tsx            Bloco 1 + selos de confiança + CTA WhatsApp (above the fold mobile)
  Fears.tsx           Bloco 2 — 3 cards (Tecnologia / Sem Dor / Recuperação)
  Urgency.tsx         Bloco 3 — 3 itens (Urgência / Ortodôntico / Prevenção)
  SocialProof.tsx     Bloco 4 — depoimentos + link Google Meu Negócio
  FinalCta.tsx        Bloco 5 — chamada final + menção à radiografia panorâmica
  Footer.tsx          contato, disclaimer convênios, endereço, créditos
  WhatsappFab.tsx     botão flutuante de WhatsApp (mobile + desktop)
  ui/                 Section, Container, CtaButton, SectionTitle, AnimateIn
lib/
config/site.ts        dados de contato + helper waLink(message)
```

## 4. Config central — `config/site.ts`
```ts
export const site = {
  name: "OdontoVip",
  phone: "(62) 3642-5320",
  phoneHref: "tel:+556236425320",
  email: "goodontovip@gmail.com",
  whatsappNumber: "5562000000000", // TODO: confirmar número real (DDI+DDD+num)
  instagram: "https://instagram.com/odontovip", // TODO confirmar
  googleBusinessUrl: "", // TODO: link do Google Meu Negócio p/ avaliações
  city: "Goiânia, GO",
  stats: [
    { value: "+27 anos", label: "de experiência" },
    { value: "+20 mil", label: "pacientes" },
    { value: "+35 mil", label: "procedimentos" },
  ],
};
export const waLink = (msg: string) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(msg)}`;
```
> **Regra:** nenhum número/contato hardcoded em componentes — sempre via `config/site.ts`. Trocar contato = editar 1 arquivo.

## 5. SEO / metadata
- `title`: "OdontoVip Goiânia | Extração de Siso Rápida, Segura e Sem Dor"
- `description`: foco em siso + Goiânia + sem dor + recuperação rápida.
- Open Graph (imagem do hero), `lang="pt-BR"`, favicon, theme-color navy.

## 6. Definition of Done (MVP)
- [ ] `npm run build` verde (sem erros TS/lint).
- [ ] 5 blocos presentes, na ordem, com a copy exata do BRIEF.
- [ ] CTA de WhatsApp **visível no mobile sem rolar** (testar viewport 390px).
- [ ] Todos os CTAs usam `waLink()`.
- [ ] Responsivo 390 / 768 / 1280px sem quebra.
- [ ] Disclaimer de convênios presente.
- [ ] Selos de confiança no hero.
- [ ] Imagens carregam (placeholders/stock locais em `/public/images`).
- [ ] `prefers-reduced-motion` respeitado.
- [ ] README com instruções de rodar/deploy Vercel.

## 7. Anti-SPEC (não fazer)
- ❌ Reescrever a copy dos 5 blocos.
- ❌ Hardcode de WhatsApp/telefone fora de `config/site.ts`.
- ❌ Backend/form server-side.
- ❌ Inventar números de prova social diferentes dos selos definidos.
- ❌ Remover o disclaimer de convênios.
- ❌ Animações pesadas que prejudiquem performance/mobile.
