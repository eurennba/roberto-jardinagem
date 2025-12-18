
import { Benefit, Testimonial, FAQItem } from './types';

export const BENEFITS: Benefit[] = [
  {
    id: 1,
    title: "Limpeza de Calçadas e Quintais",
    description: "Remoção de lodo, mato e sujeira pesada. Deixamos sua área externa renovada e segura.",
    icon: "Sparkles",
    imageUrl: "" // Imagem removida conforme solicitação
  },
  {
    id: 2,
    title: "Terrenos e Lotes",
    description: "Roçagem profissional e limpeza completa de lotes urbanos ou rurais com descarte correto.",
    icon: "Layout",
    imageUrl: ""
  },
  {
    id: 3,
    title: "Plantio de Gramas",
    description: "Preparação do solo e plantio de gramas Esmeralda, São Carlos ou Bermudas com garantia de pegamento.",
    icon: "Sprout",
    imageUrl: ""
  },
  {
    id: 4,
    title: "Manutenção Geral",
    description: "Poda de árvores, arbustos e cuidados mensais para manter seu espaço sempre organizado.",
    icon: "Scissors",
    imageUrl: ""
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Mariana Silva",
    role: "Proprietária de Residência",
    content: "O Roberto limpou meu quintal e plantou grama nova. O resultado foi surpreendente, muito caprichoso!",
    avatar: "https://picsum.photos/seed/mariana/100/100"
  },
  {
    id: 2,
    name: "Carlos Eduardo",
    role: "Proprietário de Lote",
    content: "Excelente serviço de limpeza de terreno. Preço justo e equipe muito rápida. Recomendo.",
    avatar: "https://picsum.photos/seed/carlos/100/100"
  },
  {
    id: 3,
    name: "Beatriz Costa",
    role: "Arquiteta",
    content: "Sempre chamo o Roberto para o plantio de grama nos meus projetos. Trabalho técnico e impecável.",
    avatar: "https://picsum.photos/seed/beatriz/100/100"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: "Vocês fazem limpeza de terrenos grandes?",
    answer: "Sim! Atendemos desde pequenos quintais até lotes de grandes metragens com equipamentos de roçagem profissional."
  },
  {
    id: 2,
    question: "Quanto tempo leva para o plantio de grama?",
    answer: "Depende da metragem, mas geralmente preparamos o solo e finalizamos o plantio em 1 ou 2 dias."
  },
  {
    id: 3,
    question: "Vocês retiram o entulho da limpeza?",
    answer: "Realizamos a limpeza e organização do material verde. Para entulhos de construção, consultamos a necessidade de caçamba."
  },
  {
    id: 4,
    question: "Atendem em Hortolândia?",
    answer: "Sim, somos especialistas na região de Hortolândia, Sumaré e Campinas."
  }
];

const PHONE_NUMBER = "5519971224392";
const MESSAGE = "Olá Roberto! Vi seu site e gostaria de um orçamento para limpeza/plantio de grama.";
export const WHATSAPP_LINK = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;
