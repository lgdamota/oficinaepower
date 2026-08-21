import type { LucideIcon } from "lucide-react";
import {
  BatteryCharging,
  Bike,
  CheckCircle2,
  ClipboardCheck,
  MessagesSquare,
  PackageCheck,
  ScanSearch,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Wrench,
} from "lucide-react";

export type Feature = { title: string; description?: string; icon: LucideIcon };

// Lista editorial provisória. Valide cada item com a E-Power antes da publicação final.
// Os textos evitam confirmar procedimentos específicos sem uma avaliação da equipe.
export const services: Feature[] = [
  {
    title: "Diagnóstico técnico",
    description:
      "Avaliação inicial para identificar as necessidades da sua bike ou scooter elétrica.",
    icon: ScanSearch,
  },
  {
    title: "Manutenção preventiva",
    description:
      "Verificações preventivas definidas conforme as condições e necessidades do veículo.",
    icon: ClipboardCheck,
  },
  {
    title: "Revisão de bikes elétricas",
    description:
      "Avaliação dos itens da bike elétrica conforme o relato e a análise técnica.",
    icon: Bike,
  },
  {
    title: "Revisão de scooters elétricas",
    description:
      "Avaliação direcionada às necessidades apresentadas pela scooter elétrica.",
    icon: SlidersHorizontal,
  },
  {
    title: "Avaliação de componentes elétricos",
    description:
      "Análise dos componentes elétricos aplicáveis após avaliação da equipe.",
    icon: Wrench,
  },
  {
    title: "Avaliação de freios e suspensão",
    description:
      "Verificação técnica desses componentes de acordo com o veículo atendido.",
    icon: ShieldCheck,
  },
  {
    title: "Verificação de bateria e sistema de carga",
    description:
      "Avaliação do conjunto de bateria e carga conforme a compatibilidade do veículo.",
    icon: BatteryCharging,
  },
  {
    title: "Substituição de peças",
    description:
      "Possibilidade de substituição sujeita à avaliação e à compatibilidade da peça.",
    icon: PackageCheck,
  },
  {
    title: "Orientação técnica",
    description:
      "Informações para ajudar você a cuidar do uso e da manutenção do veículo.",
    icon: MessagesSquare,
  },
];

export const trustPoints: Feature[] = [
  { title: "Diagnóstico especializado", icon: ScanSearch },
  { title: "Avaliação de componentes", icon: ShieldCheck },
  { title: "Atendimento de confiança", icon: CheckCircle2 },
];

export const workshopFeatures: Feature[] = [
  { title: "Avaliação técnica", icon: ClipboardCheck },
  { title: "Manutenção especializada", icon: Wrench },
  { title: "Atendimento transparente", icon: MessagesSquare },
  {
    title: "Atendimento para bikes e scooters elétricas",
    icon: BatteryCharging,
  },
];

export type Testimonial = {
  name: string;
  text: string;
  rating: number;
  placeholder: true;
};

// CONTEÚDO PROVISÓRIO: substitua exclusivamente por avaliações verdadeiras e autorizadas.
export const testimonials: Testimonial[] = [
  {
    name: "Avaliação real em breve",
    text: "Este espaço está preparado para receber o relato de um cliente E-Power.",
    rating: 5,
    placeholder: true,
  },
  {
    name: "Avaliação real em breve",
    text: "Depoimento provisório. Atualize este conteúdo quando houver uma avaliação verificada.",
    rating: 5,
    placeholder: true,
  },
  {
    name: "Avaliação real em breve",
    text: "A experiência de clientes reais poderá ser apresentada aqui de forma transparente.",
    rating: 5,
    placeholder: true,
  },
];

export const faqItems = [
  {
    question: "Quais tipos de bikes e scooters vocês atendem?",
    answer:
      "A E-Power presta assistência para bikes e scooters elétricas. Para confirmar se podemos atender o seu veículo, envie as informações dele para nossa equipe pelo WhatsApp.",
  },
  {
    question: "É necessário agendar o atendimento?",
    answer:
      "Recomendamos falar com a equipe pelo WhatsApp antes da visita para organizar o atendimento.",
  },
  {
    question: "Como funciona a avaliação técnica?",
    answer:
      "A equipe analisa o veículo e as informações relatadas para orientar os próximos passos. Consulte a E-Power pelo WhatsApp para saber como encaminhar o seu caso.",
  },
  {
    question: "Vocês realizam manutenção preventiva?",
    answer:
      "A necessidade e o escopo da manutenção preventiva dependem da avaliação de cada veículo. Fale com a equipe para receber uma orientação inicial.",
  },
  {
    question: "Vocês avaliam bateria e sistema de carga?",
    answer:
      "A possibilidade de avaliação depende das características do veículo e do sistema. Envie os dados da sua bike ou scooter pelo WhatsApp para consultar a equipe.",
  },
  {
    question: "Vocês trabalham com peças de reposição?",
    answer:
      "A substituição depende da peça necessária e da compatibilidade com o veículo. A equipe pode orientar você após a avaliação técnica.",
  },
  {
    question: "Quanto tempo leva uma avaliação?",
    answer:
      "O prazo varia conforme o veículo e a análise necessária. Consulte a equipe pelo WhatsApp para receber uma orientação sobre o atendimento.",
  },
  {
    question: "Como posso solicitar um orçamento?",
    answer:
      "Você pode usar o formulário deste site ou falar diretamente com a E-Power pelo WhatsApp. Envie o tipo de veículo e uma breve descrição do que precisa.",
  },
  {
    question: "Quais são as formas de pagamento?",
    answer:
      "Consulte a equipe pelo WhatsApp para confirmar as formas de pagamento aceitas no atendimento.",
  },
  {
    question: "Onde a oficina está localizada?",
    answer: "Estamos na Rua Gavião Peixoto, 31, em Icaraí, Niterói/RJ.",
  },
];

export const decorativeIcons = { Sparkles };
