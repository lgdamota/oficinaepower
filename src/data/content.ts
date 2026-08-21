import type { LucideIcon } from "lucide-react";
import {
  BatteryCharging,
  Bike,
  CircleGauge,
  Disc3,
  Gauge,
  MessagesSquare,
  ScanSearch,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Wrench,
  Zap,
} from "lucide-react";

export type EditorialItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

// Benefícios editoriais. Valide o escopo de cada item com a E-Power antes da publicação.
export const workshopBenefits: EditorialItem[] = [
  {
    title: "Diagnóstico especializado",
    description:
      "Avaliação inicial para entender o veículo e orientar os próximos passos.",
    icon: ScanSearch,
  },
  {
    title: "Revisão mecânica",
    description:
      "Verificação dos componentes mecânicos conforme a necessidade identificada.",
    icon: Wrench,
  },
  {
    title: "Avaliação de freios",
    description:
      "Análise do sistema de frenagem de acordo com as condições do veículo.",
    icon: ShieldCheck,
  },
  {
    title: "Verificação de bateria",
    description:
      "Avaliação possível conforme as características e a compatibilidade do sistema.",
    icon: BatteryCharging,
  },
  {
    title: "Sistema elétrico",
    description:
      "Análise dos componentes elétricos aplicáveis após avaliação da equipe.",
    icon: Zap,
  },
  {
    title: "Atendimento transparente",
    description:
      "Orientação clara sobre o que foi identificado antes da realização do serviço.",
    icon: MessagesSquare,
  },
];

// Categorias exibidas na seção escura e usadas nas mensagens dinâmicas do WhatsApp.
export const serviceCategories: EditorialItem[] = [
  {
    title: "Freios",
    description:
      "Avaliação de componentes e funcionamento do sistema de frenagem.",
    icon: Disc3,
  },
  {
    title: "Suspensão",
    description:
      "Verificação do conjunto conforme o tipo e a condição do veículo.",
    icon: SlidersHorizontal,
  },
  {
    title: "Transmissão",
    description:
      "Análise dos componentes responsáveis pela transmissão do movimento.",
    icon: Settings2,
  },
  {
    title: "Rodas e pneus",
    description:
      "Avaliação das condições gerais de rodas, pneus e itens relacionados.",
    icon: CircleGauge,
  },
  {
    title: "Bateria e carga",
    description:
      "Verificação possível conforme o sistema e a compatibilidade do veículo.",
    icon: BatteryCharging,
  },
  {
    title: "Sistema elétrico",
    description:
      "Avaliação técnica dos componentes elétricos aplicáveis ao atendimento.",
    icon: Gauge,
  },
];

export const workshopFacts = [
  { title: "Atendimento em Icaraí", icon: Bike },
  { title: "Foco em mobilidade elétrica", icon: Zap },
  { title: "Avaliação individual do veículo", icon: ScanSearch },
] as const;

export const faqItems = [
  {
    question: "Quais tipos de bikes e scooters vocês atendem?",
    answer:
      "A E-Power presta assistência para bikes e scooters elétricas. Para confirmar o atendimento do seu veículo, envie as informações para a equipe pelo WhatsApp.",
  },
  {
    question: "É necessário agendar a avaliação?",
    answer:
      "Recomendamos falar com a equipe pelo WhatsApp antes da visita para organizar o atendimento e compartilhar informações sobre o veículo.",
  },
  {
    question: "Como funciona o diagnóstico?",
    answer:
      "A equipe considera o relato apresentado e avalia o veículo para orientar os próximos passos. O escopo depende de cada caso.",
  },
  {
    question: "Vocês realizam manutenção preventiva?",
    answer:
      "A necessidade e o escopo da manutenção preventiva dependem da avaliação individual. Consulte a equipe para receber uma orientação inicial.",
  },
  {
    question: "Vocês avaliam bateria e sistema de carga?",
    answer:
      "A possibilidade de avaliação depende das características e da compatibilidade do sistema. Envie os dados do veículo pelo WhatsApp.",
  },
  {
    question: "Vocês trabalham com peças de reposição?",
    answer:
      "A substituição depende da peça necessária e da compatibilidade com o veículo. A equipe poderá orientar após a avaliação.",
  },
  {
    question: "Quanto tempo leva uma avaliação?",
    answer:
      "O prazo varia conforme o veículo e a análise necessária. Consulte a equipe pelo WhatsApp para uma orientação sobre o atendimento.",
  },
  {
    question: "Como solicito um orçamento?",
    answer:
      "Fale com a E-Power pelo WhatsApp ou use o formulário do site, informando o tipo de veículo e uma breve descrição do que precisa.",
  },
] as const;

// Não publique avaliações fictícias. Preencha somente com conteúdo real e autorizado.
export const testimonials: Array<{
  name: string;
  text: string;
  rating: number;
}> = [];

// Imagens ilustrativas geradas para compor o site. Substitua por fotografias reais da
// E-Power quando elas estiverem disponíveis.
export const siteImages = {
  hero: "/images/epower-hero.jpg",
  benefits: "/images/epower-bike-eletrica.jpg",
  services: "/images/epower-oficina.jpg",
  about: "/images/epower-fachada.jpg",
  faq: "/images/epower-scooter.jpg",
  finalCta: "/images/epower-neon.jpg",
} as const;
