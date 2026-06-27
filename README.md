# OdontoVip — Landing Page (Extração de Siso · Goiânia)

Landing page única, premium e **mobile-first**, focada em conversão via **WhatsApp** para o funil de extração de dente do siso da **OdontoVip** (Goiânia/GO).

- **Stack:** Next.js 15 (App Router, TypeScript) · TailwindCSS · Framer Motion · lucide-react · next/font · next/image
- **Deploy alvo:** Vercel
- **Página única (`/`)** com 5 blocos: Hero → Eliminação dos medos → Filtro de urgência → Prova social → CTA final.

### Design system

Direção premium e acolhedora, espelhando o clima do site de referência (drrodrigoandrade.com), mantendo a identidade teal-navy da marca:

- **Paleta (OKLCH):** teal-navy profundo + **dourado champanhe** (acento premium) + **creme** quente (neutros). Foge do reflexo clínico "branco + teal frio". Verde oficial do WhatsApp apenas no botão flutuante.
- **Tipografia:** `Hanken Grotesk` (sans humanista) + `Spectral` itálico para ênfases nos títulos.
- **Elementos:** hero imersivo full-bleed, navbar flutuante em pílula, ícones line-art, molduras de imagem em arco, blocos editoriais numerados.
- Tokens em `src/app/globals.css` + `tailwind.config.ts`.

---

## 🚀 Rodar localmente

Pré-requisitos: **Node.js 20+** e **npm**.

```bash
npm install        # instala dependências
npm run dev        # ambiente de desenvolvimento → http://localhost:3000
```

Outros comandos:

```bash
npm run build      # build de produção (TS + lint)
npm run start      # roda o build de produção localmente
npm run lint       # checagem de lint
```

---

## ☁️ Deploy na Vercel

1. Faça o push do repositório para o GitHub (já configurado: `github.com/EduardoSousaPO/site-odonto-vip`).
2. Acesse [vercel.com](https://vercel.com) → **Add New… → Project**.
3. **Importe o repositório** `site-odonto-vip`.
4. A Vercel detecta o framework **Next.js** automaticamente — não precisa configurar build/output.
5. Clique em **Deploy**. Pronto: a Vercel gera a URL de produção e faz redeploy automático a cada push na branch `main`.

> Não há variáveis de ambiente obrigatórias. Todo o contato sai de `src/config/site.ts`.

---

## ⚙️ Configuração de contato (1 único arquivo)

**Todos** os contatos e CTAs saem de [`src/config/site.ts`](src/config/site.ts).
Trocar telefone, WhatsApp, e-mail ou redes = editar **apenas esse arquivo**.

Campos que **a cliente precisa confirmar** (já marcados com `TODO` no arquivo):

| Campo | Descrição | Status |
|---|---|---|
| `whatsappNumber` | Número real do WhatsApp (formato `55` + DDD + número, só dígitos) | ⚠️ **placeholder** `5562000000000` |
| `instagram` | URL/handle real do Instagram | ⚠️ placeholder `@odontovip` |
| `googleBusinessUrl` | Link do Google Meu Negócio (avaliações) | ⚠️ vazio (botão "Ver no Google" fica desabilitado até preencher) |

Telefone `(62) 3642-5320` e e-mail `goodontovip@gmail.com` já estão preenchidos com os dados do brief.

---

## 🖼️ Imagens

Todas em [`/public/images/`](public/images). Trocar foto = substituir o arquivo **com o mesmo nome** (sem mexer no código).

| Arquivo | Uso | Origem nesta entrega |
|---|---|---|
| `atendimento-1.jpg` | **Hero imersivo (Bloco 1)** — paciente sorrindo | Stock (Pexels) |
| `hero-medico.jpg` | Bloco 3 (Urgência) — médico mostrando radiografia | ⚠️ **STOCK (placeholder)** — trocar pela foto real do Dr. Paulo |
| `clinica-ambiente.jpg` | Fundo do CTA final | Stock (Pexels) |
| `clinica-sala.jpg` | Reserva / base do OG | Stock (Pexels) |
| `og-image.jpg` | Open Graph (compartilhamento) | Derivada de `clinica-sala.jpg` |
| `favicon.svg` | Favicon | Placeholder de marca |
| `logo-odontovip.svg` | (não usado — header/footer usam wordmark inline) | manter para uso futuro |

> O logo no header/footer é um **wordmark inline** ("OdontoVip" creme + dourado). Para usar a logo oficial em vetor, substitua o wordmark nos componentes `Header.tsx`/`Footer.tsx` ou volte a referenciar `logo-odontovip.svg`.

> As imagens de stock são do **Pexels** (licença livre para uso comercial, sem atribuição obrigatória). Substituir pelas fotos próprias quando a cliente enviar.

---

## 📋 Pendências da cliente

- [ ] **WhatsApp oficial** → preencher `whatsappNumber` em `src/config/site.ts`.
- [ ] **Instagram real** → preencher `instagram`.
- [ ] **Google Meu Negócio** → link em `googleBusinessUrl` + selecionar os melhores depoimentos reais (hoje há 3 cards placeholder marcados como "Avaliação a confirmar" em `src/components/SocialProof.tsx`).
- [ ] **Foto do médico** (Dr. Paulo à mesa atendendo, uniforme azul, 5–6 opções) → substituir `public/images/hero-medico.jpg`.
- [ ] **Fotos do ambiente real** da clínica → substituir `clinica-sala.jpg`, `atendimento-1.jpg`, `clinica-ambiente.jpg`.
- [ ] **Logo oficial** (vetor) → substituir `public/images/logo-odontovip.svg`.

---

## 🗂️ Estrutura

```
src/
  app/
    layout.tsx        fontes, metadata/SEO, OG, theme-color
    page.tsx          compõe as 5 seções na ordem
    globals.css       design tokens (paleta navy/teal) + base
  components/
    Topbar · Header · Hero · Fears · Urgency · SocialProof · FinalCta · Footer · WhatsappFab
    ui/               Container · Section · SectionTitle · CtaButton · AnimateIn
  config/
    site.ts           contato + waLink() + mensagens dos CTAs
public/
  images/             slots de imagem (nomes fixos)
docs/                 BRIEF · PRD · SPEC · ASSETS (fonte de verdade do conteúdo)
```

---

## ✅ Características

- 5 blocos com a copy definitiva do brief.
- CTA de WhatsApp **acima da dobra no mobile** (validado em 390px).
- Responsivo 390 / 768 / 1280 sem quebra.
- Selos de confiança (+27 anos · +20 mil pacientes · +35 mil procedimentos).
- Disclaimer "Não atendemos Convênios/planos de saúde" (hero, CTA final e footer).
- Botão flutuante de WhatsApp.
- SEO/metadata + Open Graph + favicon + theme-color.
- Animações sutis (Framer Motion) que respeitam `prefers-reduced-motion`.
- Acessibilidade AA: foco visível, `alt` em imagens, contraste.
