import React from 'react';
import { 
  IconCheck, 
  IconRocket, 
  IconMoney, 
  IconLock, 
  IconCart, 
  IconHeart, 
  IconBook, 
  IconTruck,
  IconCode
} from '../components/Icons';

interface ProductFeature {
  name: string;
}

interface Product {
  title: string;
  description: string;
  features: string[];
}

interface SystemCategory {
  title: string;
  description: string;
  icon: React.ReactNode;
  products: Product[];
}

const Systems: React.FC = () => {
  const categories: SystemCategory[] = [
    {
      title: "Setor Financeiro",
      description: "Desenvolvimento de arquiteturas seguras para bancos, fintechs e corretoras.",
      icon: <IconMoney className="w-10 h-10 text-emerald-400" />,
      products: [
        {
          title: "Dashboard Financeiro com IA",
          description: "Podemos criar painéis personalizados que utilizam IA para prever fluxo de caixa e classificar despesas automaticamente.",
          features: ["Integração via API Bancária", "Modelos de IA Preditiva", "Dashboards em Tempo Real"]
        },
        {
          title: "Gateway de Pagamentos Customizado",
          description: "Desenvolvimento de infraestrutura própria para processar pagamentos sem depender de intermediários caros.",
          features: ["Split de pagamentos", "Checkout transparente", "Conformidade PCI-DSS"]
        }
      ]
    },
    {
      title: "Segurança e Monitoramento",
      description: "Software para controle de acesso e monitoramento de ativos em tempo real.",
      icon: <IconLock className="w-10 h-10 text-red-400" />,
      products: [
        {
          title: "Central de Monitoramento Inteligente",
          description: "Sistemas que integram câmeras e sensores IoT para alertar sobre anomalias automaticamente.",
          features: ["Visão Computacional", "Alertas via WhatsApp/SMS", "Logs Auditáveis"]
        },
        {
          title: "Sistemas de Controle de Acesso",
          description: "Software para gestão de portarias e catracas com reconhecimento facial ou biometria.",
          features: ["Reconhecimento Facial", "Gestão de Visitantes", "App para Moradores/Staff"]
        }
      ]
    },
    {
      title: "E-commerce e Varejo",
      description: "Lojas virtuais e sistemas de gestão (ERP) feitos exatamente para sua regra de negócio.",
      icon: <IconCart className="w-10 h-10 text-purple-400" />,
      products: [
        {
          title: "Marketplace Multi-vendedor",
          description: "Desenvolvimento de plataformas estilo Amazon/Mercado Livre onde você gerencia múltiplos vendedores.",
          features: ["Painel do Vendedor", "Comissionamento Automático", "Logística Integrada"]
        },
        {
          title: "ERP de Varejo Omnichannel",
          description: "Sistema para unificar estoque físico e online, pedidos e expedição em uma única tela.",
          features: ["Sincronização de Estoque", "Emissão de NF-e", "Integração com Correios"]
        }
      ]
    },
    {
      title: "Saúde e Medicina",
      description: "Sistemas em conformidade com normas de saúde para clínicas e hospitais.",
      icon: <IconHeart className="w-10 h-10 text-rose-400" />,
      products: [
        {
          title: "Prontuário Eletrônico Personalizado",
          description: "Software médico desenhado especificamente para o fluxo de atendimento da sua clínica.",
          features: ["Assinatura Digital", "Histórico do Paciente", "Telemedicina Integrada"]
        },
        {
          title: "App de Agendamento e Pacientes",
          description: "Aplicativos móveis para pacientes marcarem consultas e receberem lembretes automáticos.",
          features: ["Agenda Inteligente", "Lembretes Automáticos", "Chat Médico-Paciente"]
        }
      ]
    },
    {
      title: "Educação e Treinamento",
      description: "Plataformas LMS e gestão escolar adaptadas à metodologia da sua instituição.",
      icon: <IconBook className="w-10 h-10 text-blue-400" />,
      products: [
        {
          title: "Plataforma de Ensino (LMS) Própria",
          description: "Não pague mensalidade por aluno. Desenvolvemos sua própria plataforma de cursos online.",
          features: ["Streaming de Vídeo", "Provas Automatizadas", "Gamificação"]
        },
        {
          title: "Sistema de Secretaria Escolar",
          description: "Automatização de matrículas, diário de classe e boletins financeiros.",
          features: ["Portal do Aluno", "Matrícula Online", "Gestão Financeira"]
        }
      ]
    },
    {
      title: "Logística e Transporte",
      description: "Sistemas de TMS e WMS para otimizar frotas e armazéns.",
      icon: <IconTruck className="w-10 h-10 text-amber-400" />,
      products: [
        {
          title: "Sistema de Roteirização e Frotas",
          description: "Algoritmos para definir as melhores rotas e controlar manutenção de veículos.",
          features: ["Rastreamento GPS", "Cálculo de Rotas", "Controle de Combustível"]
        },
        {
          title: "App de Entregas tipo Uber",
          description: "Desenvolvimento de aplicativos para conectar entregadores e clientes em tempo real.",
          features: ["Geolocalização em Tempo Real", "Pagamento In-App", "Match Automático"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-primary">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="inline-block mb-4 p-2 px-4 rounded-full bg-accent/10 border border-accent/20 text-xs font-bold uppercase tracking-wider text-accent flex items-center gap-2 mx-auto w-fit">
           <IconCode className="w-4 h-4" />
           Desenvolvimento Sob Demanda
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
          Soluções Sob Medida
        </h2>
        <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
          <strong>Não vendemos "caixas fechadas".</strong> Abaixo listamos exemplos de arquiteturas e sistemas que nossa equipe projeta e desenvolve especificamente para a realidade e regras de negócio da sua empresa.
        </p>
      </div>

      {/* Categories Loop */}
      <div className="container mx-auto px-4 pb-24 space-y-24">
        {categories.map((category, idx) => (
          <div key={idx} className="relative">
            {/* Category Header */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-12 border-b border-slate-800 pb-8">
              <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 shadow-lg">
                {category.icon}
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-white mb-2">{category.title}</h3>
                <p className="text-slate-400 text-lg">{category.description}</p>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {category.products.map((product, pIdx) => (
                <div key={pIdx} className="group flex flex-col bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-accent/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5">
                  <div className="mb-6">
                    <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                      {product.title}
                    </h4>
                    <p className="text-slate-400 leading-relaxed mb-4">
                      {product.description}
                    </p>
                    <div className="bg-slate-950/50 p-3 rounded-lg border border-slate-800/50">
                        <span className="text-xs font-bold text-slate-500 uppercase block mb-1">O que podemos implementar:</span>
                    </div>
                  </div>

                  <div className="mb-8 flex-grow">
                    <ul className="space-y-3 mt-2">
                      {product.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3 text-slate-300 text-sm">
                          <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-accent shrink-0">
                            <IconCheck className="w-3 h-3" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a 
                    href={`https://wa.me/5513996104848?text=Olá, vi o exemplo de "${encodeURIComponent(product.title)}" no site e gostaria de cotar o desenvolvimento de um sistema similar para minha empresa.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-xl bg-slate-800 text-white font-bold border border-slate-700 hover:bg-accent hover:border-accent transition-all flex items-center justify-center gap-2 group-hover:shadow-lg"
                  >
                    <span>Cotar Desenvolvimento</span>
                    <IconRocket className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Footer */}
      <div className="container mx-auto px-4 pb-20">
        <div className="p-12 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl border border-slate-700 text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
           <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Tem uma ideia inovadora?</h3>
           <p className="text-slate-400 max-w-2xl mx-auto mb-8 relative z-10">
              Seu projeto é único e precisa de uma solução exclusiva. Fale com nossos arquitetos de software para transformar sua visão em código.
           </p>
           <a 
             href="https://wa.me/5513996104848?text=Olá, tenho uma ideia de projeto personalizado e gostaria de um orçamento."
             target="_blank"
             rel="noopener noreferrer"
             className="inline-block relative z-10 px-8 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-colors"
           >
              Iniciar Projeto Personalizado
           </a>
        </div>
      </div>
    </div>
  );
};

export default Systems;