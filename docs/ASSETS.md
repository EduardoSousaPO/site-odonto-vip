# ASSETS — imagens do site

> Todas as imagens vivem em `/public/images/`. Componentes referenciam por caminho fixo.
> Trocar foto depois = substituir o arquivo com o mesmo nome. Sem mexer no código.

## 1. Slots de imagem (nomes fixos)

| Arquivo | Uso | Origem nesta entrega | Specs |
|---|---|---|---|
| `hero-medico.jpg` | Bloco 1 (médico/profissional) | **Foto atual do médico** (manter por ora) | retrato, vertical/quadrado, fundo limpo, ≥ 1200px |
| `clinica-sala.jpg` | Hero alt / ambientação | **Stock gratuito** (consultório odontológico limpo, luz natural) | paisagem, ≥ 1600px |
| `atendimento-1.jpg` | Bloco 2/3 — clima de acolhimento | **Stock gratuito** (dentista atendendo paciente, sorrindo) | paisagem, ≥ 1400px |
| `clinica-ambiente.jpg` | Bloco 3/footer | **Stock gratuito** (recepção/sala moderna) | paisagem, ≥ 1400px |
| `og-image.jpg` | Open Graph (compartilhamento) | derivar do hero | 1200×630 |
| `logo-odontovip.svg/png` | Header/Footer | logo OdontoVip (pegar do site atual) | transparente |

> Se a foto atual do médico não estiver disponível em arquivo, usar um placeholder com o nome `hero-medico.jpg` e registrar pendência. O slot fica pronto para troca.

## 2. Direção das fotos (do brief da cliente)
- Clima **acolhedor**, luz natural, tons claros (evitar amarelado pesado).
- Preferir cenas de **atendimento / conversa** (médico à mesa com paciente) a retratos frios de braços cruzados.
- Ambiente da clínica limpo e moderno — "a pessoa bate o olho e se imagina sendo atendida".
- Referência de clima: drrodrigoandrade.com.

## 3. Sourcing de stock (gratuito, uso comercial)
Buscar em **Unsplash** (unsplash.com) e **Pexels** (pexels.com) — licença livre p/ uso comercial, sem atribuição obrigatória.

Termos sugeridos: `dental clinic`, `dentist office modern`, `dentist patient consultation`, `dental chair clean`, `friendly dentist`.

**Como o agente executor baixa (escolher 1):**
1. Baixar via URL direta do Unsplash/Pexels (`curl`/WebFetch) e salvar em `/public/images/` com o nome do slot.
2. Se download bloqueado/instável, usar `https://images.unsplash.com/photo-<id>?w=1600&q=80` como `src` remoto e adicionar o domínio em `next.config.js` (`images.remotePatterns`). **Preferir baixar local** para estabilidade no build/Vercel.

> Documentar no `README` quais imagens são stock (substituir por fotos próprias quando a cliente enviar).

## 4. Pendências da cliente (registrar no README)
- [ ] Fotos próprias: médico à mesa atendendo (uniforme azul), 5–6 opções.
- [ ] Fotos do ambiente real da clínica.
- [ ] Link do Google Meu Negócio + melhores avaliações reais.
- [ ] Número de WhatsApp oficial + Instagram.
