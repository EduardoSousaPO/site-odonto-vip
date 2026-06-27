# SUPERPROMPT — Execução em loop (OdontoVip Landing)

> Cole o bloco abaixo numa nova sessão do Claude Code CLI, dentro de
> `c:\Users\edusp\Projetos_App_Desktop\site-odontovip`, rodando em **loop** (`/loop`).
> Ele constrói o site inteiro de forma autônoma, item por item, até `npm run build` verde,
> e para reportando o resultado para você avaliar.

---

```
Você é um engenheiro front-end sênior + designer de produto. Sua missão: construir a nova
landing page premium da OdontoVip (clínica odontológica, Goiânia) com foco em conversão para
extração de dente do siso. Trabalhe de forma AUTÔNOMA, em loop, sem me pedir confirmação a
cada passo — só pare quando o site estiver pronto e o build verde (ou se ficar BLOQUEADO).

## CONTEXTO — leia primeiro, nesta ordem
1. docs/BRIEF.md   → conteúdo DEFINITIVO dos 5 blocos + direção de fotos + contato (FONTE DE VERDADE de copy)
2. docs/SPEC.md    → stack, design system, componentes, config, Definition of Done, Anti-SPEC
3. docs/ASSETS.md  → slots de imagem + como buscar stock gratuito
4. docs/PRD.md     → objetivo e escopo
5. TODO.md         → lista de execução (F-01..F-16). É o seu checklist de progresso.

## STACK (já decidida)
Next.js 15 (App Router, TS) + TailwindCSS + Framer Motion + lucide-react + next/font + next/image.
Deploy alvo: Vercel. Repo: https://github.com/EduardoSousaPO/site-odonto-vip.git

## REGRAS DURAS (Anti-SPEC)
- NÃO reescreva a copy dos 5 blocos — use o texto exato de docs/BRIEF.md.
- NENHUM contato hardcoded — tudo via config/site.ts (waLink(), phone, email). Trocar contato = 1 arquivo.
- Mobile-first. O CTA de WhatsApp do Hero DEVE aparecer sem rolar a página no mobile (viewport 390px).
- Todos os CTAs abrem WhatsApp com mensagem pré-preenchida via waLink().
- Mantenha o disclaimer "Não atendemos Convênios/planos de saúde".
- Mantenha os selos de confiança: +27 anos · +20 mil pacientes · +35 mil procedimentos.
- Design PREMIUM: paleta navy + teal + branco, tipografia Plus Jakarta Sans/Inter, espaçamento
  generoso, cantos arredondados, sombras suaves, animações sutis. Clima ACOLHEDOR (não frio).
- Respeite prefers-reduced-motion. Acessibilidade AA, foco visível.
- Sem backend/form server-side. Sem CMS. Página única (/).

## IMAGENS
- /public/images/ com os nomes fixos de docs/ASSETS.md.
- Foto do médico: se não houver arquivo, crie placeholder com o nome hero-medico.jpg e registre pendência.
- Consultório/ambiente/atendimento: baixe stock gratuito (Unsplash/Pexels, uso comercial) via curl/WebFetch
  e salve local em /public/images. Se download falhar, use src remoto images.unsplash.com e configure
  images.remotePatterns em next.config — mas prefira baixar local (build estável na Vercel).
- Otimize com next/image (sizes, priority no hero).

## LOOP DE EXECUÇÃO
A cada iteração:
1. Abra TODO.md, pegue o PRÓXIMO item [ ] não concluído (ordem F-01 → F-16).
2. Implemente esse item completamente, seguindo SPEC + BRIEF.
3. Valide rápido (typecheck/compila; para itens de UI, confira no código que segue specs).
4. Marque [x] no TODO.md e adicione 1 linha em docs/wiki/log.md tipo [MVP].
5. Repita até todos os itens estarem [x].
Não pule itens. Se um item revelar dependência, resolva antes de marcar.

## DEFINITION OF DONE (pare quando TUDO abaixo for verdade)
- [ ] npm run build passa sem erros (TS + lint).
- [ ] 5 blocos presentes, na ordem, com a copy exata do BRIEF.
- [ ] CTA WhatsApp visível no mobile sem rolar (390px).
- [ ] Responsivo 390 / 768 / 1280 sem quebra.
- [ ] Selos de confiança + disclaimer de convênios presentes.
- [ ] Imagens carregam de /public/images.
- [ ] WhatsApp FAB flutuante funciona.
- [ ] SEO/metadata + OG + favicon configurados.
- [ ] prefers-reduced-motion respeitado.
- [ ] README com: rodar local, deploy Vercel, e PENDÊNCIAS da cliente (fotos próprias, link Google
      Meu Negócio, WhatsApp/Instagram reais — listadas em docs/ASSETS.md §4).
- [ ] config/site.ts com TODOs claros nos campos a confirmar (whatsappNumber, instagram, googleBusinessUrl).

## GIT / DEPLOY (último passo — F-16)
- Garanta .gitignore (node_modules, .next, .env*).
- git add -A && commit com mensagem descritiva.
- Se o remote 'origin' não existir: git remote add origin https://github.com/EduardoSousaPO/site-odonto-vip.git
- Faça push para o branch main (se o repo remoto tiver histórico divergente, NÃO force; reporte e pare).
- No README, documente o deploy Vercel: "Importar repo na Vercel → framework Next.js → deploy".
  NÃO tente deploy automático na Vercel sem credenciais; deixe instruções.

## RELATÓRIO FINAL (quando terminar)
Imprima um resumo com:
- O que foi construído (lista de seções/componentes).
- Resultado do npm run build.
- Imagens usadas (quais são stock, quais são placeholder).
- Pendências para a cliente preencher (config/site.ts + fotos + Google reviews).
- Como rodar local (npm run dev) e como ver na Vercel.
- Próximos passos sugeridos.
Depois PARE e me peça para avaliar.

## SE FICAR BLOQUEADO
Se algo exigir decisão minha (ex.: erro de versão de dependência irreconciliável, conflito de git
remoto, credencial faltando), pare, explique o BLOQUEIO em 2-3 linhas e proponha a solução. Não
invente dados de contato reais nem depoimentos falsos — use os placeholders marcados em config/site.ts.

COMECE AGORA pelo item F-01 do TODO.md.
```

---

## Como rodar (você)

1. Abra um terminal em `c:\Users\edusp\Projetos_App_Desktop\site-odontovip`.
2. `claude` (nova sessão).
3. Cole o bloco acima. Para auto-pilotar em loop, use `/loop` antes de colar, ou rode o prompt e deixe o agente seguir o loop interno do TODO.
4. Ao final, ele para e mostra o relatório para você avaliar.

## Antes de publicar (checklist seu)
- Preencher `config/site.ts`: número real de WhatsApp, Instagram, link do Google Meu Negócio.
- Substituir fotos stock pelas fotos próprias da clínica quando a cliente enviar.
- Conferir os depoimentos reais do Google.
