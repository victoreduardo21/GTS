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
      description: "Segurança de nível bancário para fintechs.",
      icon: <IconMoney className="w-10 h-10 text-emerald-400" />,
      products: [
        {
          title: "Dashboard Financeiro IA",
          description: "Previsão de fluxo de caixa com inteligência artificial.",
          features: ["API Bancária", "IA Preditiva", "Relatórios em Tempo Real"]
        },
        {
          title: "Gateway de Pagamentos",
          description: "Processe pagamentos sem intermediários.",
          features: ["Split de pagamentos", "Checkout Transparente", "PCI-DSS"]
        }
      ]
    },
    {
      title: "Segurança e Monitoramento",
      description: "Controle total de acesso e ativos.",
      icon: <IconLock className="w-10 h-10 text-red-400" />,
      products: [
        {
          title: "Monitoramento Inteligente",
          description: "Detecção de anomalias por câmeras com IA.",
          features: ["Visão Computacional", "Alertas WhatsApp", "Logs Auditáveis"]
        },
        {
          title: "Controle de Acesso Bio",
          description: "Gestão de portarias com reconhecimento facial.",
          features: ["Reconhecimento Facial", "App Visitantes", "Nuvem"]
        }
      ]
    },
    {
      title: "E-commerce e Varejo",
      description: "Venda mais com plataformas otimizadas.",
      icon: <IconCart className="w-10 h-10 text-purple-400" />,
      products: [
        {
          title: "Marketplace Multi-vendor",
          description: "Sua própria plataforma estilo Mercado Livre.",
          features: ["Painel Vendedor", "Split Pagamento", "Logística"]
        },
        {
          title: "ERP Omnichannel",
          description: "Unifique estoque físico e online.",
          features: ["Sincronização Estoque", "Emissão NF-e", "Integração Correios"]
        }
      ]
    },
    {
      title: "Saúde e Medicina",
      description: "Eficiência para clínicas e hospitais.",
      icon: <IconHeart className="w-10 h-10 text-rose-400" />,
      products: [
        {
          title: "Prontuário Eletrônico",
          description: "Fluxo de atendimento 100% digital e seguro.",
          features: ["Assinatura Digital", "Histórico", "Telemedicina"]
        },
        {
          title: "App Pacientes",
          description: "Agendamento e exames na palma da mão.",
          features: ["Agenda Online", "Lembretes", "Chat Seguro"]
        }
      ]
    },
    {
      title: "Educação (EdTech)",
      description: "Ensino a distância sem limites.",
      icon: <IconBook className="w-10 h-10 text-blue-400" />,
      products: [
        {
          title: "Plataforma LMS Própria",
          description: "Venda cursos sem taxas de plataformas terceiras.",
          features: ["Streaming Vídeo", "Provas Auto", "Certificados"]
        },
        {
          title: "Gestão Escolar",
          description: "Matrículas e financeiro automatizados.",
          features: ["Portal Aluno", "Boletim Online", "Cobrança Auto"]
        }
      ]
    },
    {
      title: "Logística",
      description: "Otimização de rotas e frotas.",
      icon: <IconTruck className="w-10 h-10 text-amber-400" />,
      products: [
        {
          title: "TMS e Roteirização",
          description: "Reduza custos de combustível com rotas inteligentes.",
          features: ["Rastreamento GPS", "Algoritmo de Rotas", "Manutenção"]
        },
        {
          title: "App Entregas (Uber-like)",
          description: "Conecte motoristas e cargas em tempo real.",
          features: ["Geolocalização", "Pagamento In-App", "Match Auto"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-primary">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-24 text-center">
        <div className="inline-block mb-6 p-2 px-4 rounded-full bg-surface border border-slate-700 text-xs font-bold uppercase tracking-wider text-accent flex items-center gap-2 mx-auto w-fit shadow-lg">
           <IconCode className="w-4 h-4" />
           Desenvolvimento Sob Demanda
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
          Soluções <span className="text-accent">Personalizadas</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
          <strong>Não vendemos caixas fechadas.</strong> Construímos a tecnologia exata que o seu negócio precisa para escalar, usando as linguagens mais modernas do mercado.
        </p>
      </div>

      {/* Categories Loop */}
      <div className="container mx-auto px-4 pb-24 space-y-20">
        {categories.map((category, idx) => (
          <div key={idx} className="relative bg-surface/30 p-8 md:p-12 rounded-3xl border border-slate-800/50">
            {/* Category Header */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-12 border-b border-slate-800 pb-8">
              <div className="p-4 bg-surface rounded-2xl border border-slate-700 shadow-xl">
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
                <div key={pIdx} className="group flex flex-col bg-surface border border-slate-700 rounded-2xl p-8 hover:border-accent hover:bg-slate-900 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/5">
                  <div className="mb-6">
                    <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                      {product.title}
                    </h4>
                    <p className="text-slate-400 leading-relaxed mb-4 text-sm h-10">
                      {product.description}
                    </p>
                    <div className="bg-primary p-3 rounded-lg border border-slate-800">
                        <span className="text-[10px] font-bold text-slate-500 uppercase block mb-2 tracking-wider">Recursos Inclusos:</span>
                        <ul className="space-y-2">
                          {product.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                              <IconCheck className="w-4 h-4 text-tech" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                    </div>
                  </div>

                  <a 
                    href={`https://wa.me/5513996104848?text=Olá, tenho interesse em desenvolver um "${encodeURIComponent(product.title)}". Gostaria de uma cotação.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto w-full py-4 rounded-xl bg-slate-800 text-white font-bold border border-slate-600 hover:bg-accent hover:border-accent hover:text-white transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>Cotar Projeto</span>
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
        <div className="p-12 bg-gradient-to-r from-primary to-slate-900 rounded-3xl border border-slate-700 text-center relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
           <h3 className="text-3xl font-bold text-white mb-4 relative z-10">Tem uma ideia inovadora?</h3>
           <p className="text-slate-400 max-w-2xl mx-auto mb-8 relative z-10 text-lg">
              Seu projeto é único. Nossa engenharia também. Vamos construir o próximo unicórnio juntos.
           </p>
           <a 
             href="https://wa.me/5513996104848?text=Olá, tenho uma ideia de projeto personalizado e gostaria de um orçamento."
             target="_blank"
             rel="noopener noreferrer"
             className="inline-block relative z-10 px-10 py-4 bg-white text-primary font-bold rounded-xl hover:bg-slate-200 transition-all transform hover:scale-105 shadow-xl"
           >
              Iniciar Projeto Personalizado
           </a>
        </div>
      </div>
    </div>
  );
};

export default Systems;