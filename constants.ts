
import { ServiceItem, SystemItem, PortfolioItem } from './types';

export const NEWSLETTER_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzzFfeQDGBRZRw2Hi1gJ2aD6fO6-pTarMhqUxJ3prTzP-TZ5vZmY29TlxYARTzppu-8/exec';
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

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    title: "VideoConnect Pro",
    description: "Plataforma avançada de videoconferências de alta fidelidade focada em comunicação corporativa estável.",
    url: "https://videocalling.hostgator-builder.site/",
    category: "Comunicação & SaaS",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Eloscooper",
    description: "Sistema completo para gestão de transporte turístico e cooperativas, integrando logística e associados.",
    url: "https://eloscooper.com/",
    category: "Transporte & Cooperativas",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "AutoPrecision Hub",
    description: "Software especializado para gestão de oficinas de funilaria, pintura e estética automotiva de alto padrão.",
    url: "https://bodycar.hostgator-builder.site/",
    category: "Oficina de Funilaria",
    image: "https://images.unsplash.com/photo-1530046339160-ce3e5b097ea1?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Corpio Enterprise",
    description: "Solução digital premium para empresas de consultoria estratégica, gestão de talentos e processos internos.",
    url: "https://corpio.hostgator-builder.site/",
    category: "Consultoria",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "EcoWash Manager",
    description: "Dashboard inteligente para gestão de lava rápido, com controle de agendamentos e fluxo de caixa.",
    url: "https://carwashnew.hostgator-builder.site/",
    category: "Lava Rápido",
    image: "https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "PartsFinder E-commerce",
    description: "Plataforma robusta para venda de peças de carro com catálogo técnico e busca avançada por SKU.",
    url: "https://carparts.hostgator-builder.site/",
    category: "Peças de Carro",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Studio Architekt",
    description: "Portfólio digital interativo e plataforma de gestão para empresas de arquitetura e design.",
    url: "https://architekt.hostgator-builder.site/",
    category: "Arquitetura",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Global Financial Advisors",
    description: "Dashboard estratégico para empresas de negócios e finanças com foco em investimentos globais.",
    url: "https://advisors.hostgator-builder.site/",
    category: "Negócios e Finanças",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536ad37?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "SnowRemoval",
    description: "Logística inteligente para serviços de remoção de neve, garantindo despacho rápido e monitoramento de frotas.",
    url: "https://snowremoval.hostgator-builder.site/",
    category: "Remoção de Neve",
    image: "https://images.unsplash.com/photo-1517210122415-b0c70b2a09bf?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "PodStreamer Studio",
    description: "Web app moderno para gravação e streaming de podcasts, com landing page focada em conversão.",
    url: "https://lounchpodcast.hostgator-builder.site/",
    category: "Podcast",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "FitPulse Gym",
    description: "Ecossistema completo para academias, gerenciando alunos, planos e treinos personalizados.",
    url: "https://gym2.hostgator-builder.site/",
    category: "Saúde & Fitness",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "BarberStyle App",
    description: "Sistema de agendamento online e fidelização para barbearias de luxo e estética masculina.",
    url: "https://site-barbeiro.netlify.app/",
    category: "Beleza & Estilo",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop"
  }
];
