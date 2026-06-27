/**
 * Configuração central de contato da OdontoVip.
 *
 * REGRA: nenhum número/contato hardcoded em componentes — sempre via este arquivo.
 * Trocar contato = editar SÓ este arquivo.
 */

export const site = {
  name: "OdontoVip",
  doctor: "Dr. Paulo Henrique de Sousa Carlos",
  phone: "(62) 3642-5320",
  phoneHref: "tel:+556236425320",
  email: "goodontovip@gmail.com",

  // TODO (cliente): confirmar número real do WhatsApp (formato DDI+DDD+numero, só dígitos).
  // Ex.: 55 + 62 + 9XXXXXXXX => "5562900000000"
  whatsappNumber: "5562000000000",

  // TODO (cliente): confirmar handle/URL real do Instagram.
  instagram: "https://instagram.com/odontovip",

  // TODO (cliente): colar o link do Google Meu Negócio (perfil de avaliações).
  // Enquanto vazio, o botão "Ver no Google" fica desabilitado.
  googleBusinessUrl: "",

  city: "Goiânia, GO",
  address: "Goiânia, GO",

  stats: [
    { value: "+27 anos", label: "de experiência" },
    { value: "+20 mil", label: "pacientes atendidos" },
    { value: "+35 mil", label: "procedimentos" },
  ],

  disclaimer: "Não atendemos Convênios/planos de saúde.",
} as const;

/**
 * Monta o link do WhatsApp com mensagem pré-preenchida.
 */
export const waLink = (msg: string) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(msg)}`;

/**
 * Mensagens pré-preenchidas dos CTAs (centralizadas para consistência).
 */
export const waMessages = {
  hero: "Olá! Vim pelo site e quero agendar uma avaliação prioritária do meu siso.",
  header: "Olá! Vim pelo site da OdontoVip e gostaria de marcar uma consulta.",
  urgency:
    "Olá! Estou com dor/inflamação no siso e preciso de um atendimento o quanto antes.",
  finalCta:
    "Olá! Vim pelo site e quero falar com um especialista para agendar a avaliação do meu siso. (Posso enviar minha radiografia panorâmica.)",
  fab: "Olá! Vim pelo site da OdontoVip e quero agendar uma avaliação do meu siso.",
} as const;
