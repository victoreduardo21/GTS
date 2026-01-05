
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
    image: "https://images.unsplash.com/photo-1551288049-bbbda536ad37?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Flow CRM Ultra",
    description: "Pipeline de vendas inteligente que utiliza IA para prever fechamentos e automatizar follow-ups.",
    status: "Live",
    tags: ["Vue 3", "Firebase", "Gemini AI"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "DataVision Analytics",
    description: "Big Data em tempo real. Transforme terabytes de dados em decisões estratégicas em milissegundos.",
    status: "Beta",
    tags: ["D3.js", "Snowflake", "Rust"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "GTS SecureId",
    description: "Plataforma de autenticação biométrica descentralizada para controle de acesso corporativo.",
    status: "Dev",
    tags: ["Blockchain", "Solidity", "Node.js"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    title: "Talk",
    description: "Plataforma avançada de videoconferências de alta fidelidade focada em comunicação corporativa estável.",
    url: "https://videocalling.hostgator-builder.site/",
    category: "Videoconferência",
    image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "eloscooper",
    description: "Sistema completo para gestão de transporte turístico e cooperativas, integrando logística e associados.",
    url: "https://eloscooper.com/",
    category: "Transporte Turístico",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Doby Car",
    description: "Software especializado para gestão de oficinas de funilaria, pintura e estética automotiva de alto padrão.",
    url: "https://bodycar.hostgator-builder.site/",
    category: "Oficina de Funilaria",
    image: "https://workmotor.com.br/wp-content/uploads/2025/08/service-worker-painting-car-auto-service-1024x683.jpg"
  },
  {
    title: "corpio",
    description: "Solução digital premium para empresas de consultoria estratégica, gestão de talentos e processos internos.",
    url: "https://corpio.hostgator-builder.site/",
    category: "Consultoria",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "carwash",
    description: "Dashboard inteligente para gestão de lava rápido, com controle de agendamentos e fluxo de caixa.",
    url: "https://carwashnew.hostgator-builder.site/",
    category: "Lava Rápido",
    image: "https://petrolgroup.pro/wp-content/uploads/2024/07/2149212221.webp"
  },
  {
    title: "gym2",
    description: "Ecossistema completo para academias, gerenciando alunos, planos e treinos personalizados.",
    url: "https://gym2.hostgator-builder.site/",
    category: "Saúde & Fitness",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "carparts",
    description: "Plataforma robusta para venda de peças de carro com catálogo técnico e busca avançada por SKU.",
    url: "https://carparts.hostgator-builder.site/",
    category: "Peças de Carro",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "LOEWS & COHN",
    description: "Portfólio digital interativo e plataforma de apresentação para empresas de arquitetura e design.",
    url: "https://architekt.hostgator-builder.site/",
    category: "Arquitetura",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "The advisors",
    description: "Dashboard estratégico para empresas de negócios e finanças com foco em investimentos globais.",
    url: "https://advisors.hostgator-builder.site/",
    category: "Negócios e Finanças",
    image: "https://www.balaminut.com.br/img/paginas/g_capa%20setembro.jpg"
  },
  {
    title: "snow removal",
    description: "Logística inteligente para serviços de remoção de neve, garantindo despacho rápido e monitoramento de frotas.",
    url: "https://snowremoval.hostgator-builder.site/",
    category: "Remoção de Neve",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQa4jhDgr6on2QnqgA37qdM-c4WwiKAh0BvQ&s"
  },
  {
    title: "PodKast",
    description: "Web app moderno para gravação e streaming de podcasts, com landing page focada em conversão.",
    url: "https://lounchpodcast.hostgator-builder.site/",
    category: "Podcast",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "DOM PEDRO",
    description: "Sistema de agendamento online e fidelização para barbearias de luxo e estética masculina.",
    url: "https://site-barbeiro.netlify.app/",
    category: "Beleza & Estilo",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800"
  }
];
