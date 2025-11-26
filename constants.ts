import { ServiceItem, SystemItem } from './types';

export const NEWSLETTER_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzzFfeQDGBRZRw2Hi1gJ2aD6fO6-pTarMhqUxJ3prTzP-TZ5vZmY29TlxYARTzppu-8/exec';

// URL exclusiva para o script de depoimentos (Atualizada)
export const TESTIMONIAL_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyxT43DfLXz-xhvOWDq4ZjiJgNHPxOvUI_IBqS8fPW-d1zpzco_hSojCKzKUeVoMm_5/exec';

export const SERVICES: ServiceItem[] = [
  {
    title: "Desenvolvimento Web Global",
    description: "Criação de ecossistemas digitais complexos, SPAs e plataformas SaaS escaláveis para o mercado internacional.",
    icon: "Code"
  },
  {
    title: "Cloud Infrastructure",
    description: "Arquitetura em nuvem robusta (AWS/Azure) focada em alta disponibilidade, latência zero e segurança global.",
    icon: "Cloud"
  },
  {
    title: "GTS AI Solutions",
    description: "Motores de Inteligência Artificial proprietários para automação de processos empresariais e análise preditiva.",
    icon: "Cpu"
  },
  {
    title: "Cybersecurity Enterprise",
    description: "Blindagem de dados corporativos com protocolos de nível bancário e conformidade internacional (GDPR/LGPD).",
    icon: "Shield"
  }
];

export const SYSTEMS: SystemItem[] = [
  {
    name: "GTS Nexus ERP",
    description: "O coração da operação global. Gestão multi-moeda e multi-idioma para empresas que não têm fronteiras.",
    status: "Live",
    tags: ["React", "Python", "Docker", "K8s"],
    image: "https://picsum.photos/800/600?random=10"
  },
  {
    name: "Flow CRM Ultra",
    description: "Pipeline de vendas inteligente que utiliza IA para prever fechamentos e automatizar follow-ups.",
    status: "Live",
    tags: ["Vue 3", "Firebase", "Gemini AI"],
    image: "https://picsum.photos/800/600?random=20"
  },
  {
    name: "DataVision Analytics",
    description: "Big Data em tempo real. Transforme terabytes de dados em decisões estratégicas em milissegundos.",
    status: "Beta",
    tags: ["D3.js", "Snowflake", "Rust"],
    image: "https://picsum.photos/800/600?random=30"
  },
  {
    name: "GTS SecureId",
    description: "Plataforma de autenticação biométrica descentralizada para controle de acesso corporativo.",
    status: "Dev",
    tags: ["Blockchain", "Solidity", "Node.js"],
    image: "https://picsum.photos/800/600?random=40"
  }
];