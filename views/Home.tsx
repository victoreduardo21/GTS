
import React, { useState } from 'react';
import { ViewState } from '../types';
import { NEWSLETTER_SCRIPT_URL, PORTFOLIO_ITEMS } from '../constants';
import { 
  IconCheck, 
  IconRocket, 
  IconGlobe, 
  IconCloud, 
  IconCpu, 
  IconArrowRight, 
  IconWhatsApp, 
  IconBuilding, 
  IconTruck, 
  IconChart, 
  IconAtom, 
  IconLoader,
  IconHistory,
  IconShield,
  IconMapPin
} from '../components/Icons';

interface HomeProps {
  onChangeView: (view: ViewState) => void;
}

const Home: React.FC<HomeProps> = ({ onChangeView }) => {
  const developments = [
    {
      category: "Inteligência Artificial",
      title: "Soluções com IA Generativa",
      desc: "Automação real. De chatbots inteligentes a análise preditiva de vendas.",
      icon: <IconCpu className="w-8 h-8 text-accent" />
    },
    {
      category: "Web & Mobile",
      title: "Apps de Alta Performance",
      desc: "Aplicativos que não travam e sites que carregam em milissegundos.",
      icon: <IconGlobe className="w-8 h-8 text-accent" />
    },
    {
      category: "SaaS & Cloud",
      title: "Plataformas Escaláveis",
      desc: "Sistemas que crescem com sua empresa, hospedados na nuvem (Google/AWS).",
      icon: <IconCloud className="w-8 h-8 text-accent" />
    }
  ];

  const milestones = [
    { year: "2019", title: "Fundação", desc: "Nascemos como um pequeno lab de engenharia focado em algoritmos complexos." },
    { year: "2021", title: "Expansão Nacional", desc: "Atingimos a marca de 50 clientes ativos em todo o território brasileiro." },
    { year: "2023", title: "Era Global", desc: "Abertura de parcerias internacionais em Portugal e nos EUA." },
    { year: "2025", title: "IA Integrada", desc: "Lançamento do GTS Core IA, nosso motor proprietário para automação empresarial." }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden bg-white flex items-center min-h-[90vh]">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
           <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] animate-pulse-slow"></div>
           <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-emerald-100/40 rounded-full blur-[100px]"></div>
           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-multiply"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-tech animate-ping"></span>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Disponível para Projetos Internacionais</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1] animate-slide-up">
            Transforme Ideias em <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-500 to-tech">Software de Elite</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up [animation-delay:200ms]">
            A GTS desenvolve sistemas de missão crítica, aplicativos escaláveis e motores de IA para empresas globais. <strong>Performance, Segurança e Design Superior.</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto animate-slide-up [animation-delay:400ms]">
            <a 
              href="https://wa.me/5513996104848?text=Olá, vi o portfólio da GTS e quero transformar meu negócio. Gostaria de um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-5 bg-accent hover:bg-accentHover text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <IconRocket className="w-6 h-6 group-hover:bounce" />
              Solicitar Orçamento Agora
            </a>
            <button 
              onClick={() => onChangeView(ViewState.PORTFOLIO)}
              className="px-8 py-5 bg-white border border-slate-200 hover:border-slate-400 text-slate-700 hover:text-slate-900 rounded-xl font-bold text-lg transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 group"
            >
              Ver Portfólio de Cases
              <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Quem Somos / Nossa Essência */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center text-accent mb-8 border border-accent/30">
                <IconAtom className="w-8 h-8" />
              </div>
              <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Quem Somos</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
                Engenharia de precisão para um <span className="text-tech">futuro sem fronteiras.</span>
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                A GTS nasceu da convicção de que o software não deve apenas funcionar, ele deve encantar e escalar. Somos um hub global de talentos que une design de classe mundial com engenharia robusta.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <IconCheck className="w-5 h-5 text-tech shrink-0 mt-1" />
                  <span className="text-slate-300 font-medium">Foco em Performance Extrema</span>
                </div>
                <div className="flex items-start gap-3">
                  <IconCheck className="w-5 h-5 text-tech shrink-0 mt-1" />
                  <span className="text-slate-300 font-medium">Segurança de Nível Bancário</span>
                </div>
                <div className="flex items-start gap-3">
                  <IconCheck className="w-5 h-5 text-tech shrink-0 mt-1" />
                  <span className="text-slate-300 font-medium">Design focado no Usuário</span>
                </div>
                <div className="flex items-start gap-3">
                  <IconCheck className="w-5 h-5 text-tech shrink-0 mt-1" />
                  <span className="text-slate-300 font-medium">Suporte Global 24/7</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-[3rem] blur-2xl"></div>
              <div className="relative bg-slate-800 border border-slate-700 p-8 rounded-[2.5rem] shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
                   <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                   <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                   <div className="h-0.5 flex-grow bg-slate-700 rounded"></div>
                </div>
                <div className="space-y-4 font-mono text-sm">
                  <div className="text-tech">const gts_philosophy = {'{'}</div>
                  <div className="pl-4 text-blue-300">"vision": "Scale without limits",</div>
                  <div className="pl-4 text-blue-300">"engineering": "Perfect code quality",</div>
                  <div className="pl-4 text-blue-300">"reach": "World-wide coverage",</div>
                  <div className="pl-4 text-blue-300">"innovation": "AI-driven solutions"</div>
                  <div className="text-tech">{'}'};</div>
                  <div className="text-slate-500 mt-6">// Executing global impact...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alcance Global - VERSÃO GLOBO REAL 3D */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            {/* Texto e Stats */}
            <div className="w-full lg:w-1/2 space-y-12 relative z-10">
              <div>
                <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Presença Internacional</h2>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                  A Tecnologia que o <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-tech">Planeta Confia</span>
                </h3>
                <p className="text-slate-500 text-xl leading-relaxed max-w-xl">
                  Nossa infraestrutura não conhece limites geográficos. Operamos com hubs estratégicos que garantem que sua aplicação esteja sempre disponível e performática em qualquer fuso horário.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                <div className="space-y-2 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="text-4xl font-extrabold text-accent">+15</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Países Atendidos</div>
                </div>
                <div className="space-y-2 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="text-4xl font-extrabold text-tech">24/7</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Suporte Global</div>
                </div>
                <div className="space-y-2 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="text-4xl font-extrabold text-slate-900">99.9%</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Uptime Garantido</div>
                </div>
              </div>
              
              <div className="pt-6">
                <button 
                  onClick={() => onChangeView(ViewState.CONTACT)}
                  className="flex items-center gap-3 text-accent font-bold hover:gap-4 transition-all text-lg group"
                >
                  Saiba como escalamos globalmente
                  <IconArrowRight className="w-5 h-5 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Visual Real 3D Globe - Pontos removidos conforme pedido */}
            <div className="w-full lg:w-1/2 relative flex justify-center items-center py-20 lg:py-0">
              <div className="relative w-[320px] h-[320px] md:w-[580px] md:h-[580px]">
                {/* External Atmospheric Glow */}
                <div className="absolute inset-[-40px] bg-blue-500/10 rounded-full blur-[70px] animate-pulse"></div>
                
                {/* The Globe Core */}
                <div className="globe-3d absolute inset-0 rounded-full bg-slate-900 animate-globe-rotate overflow-hidden border border-slate-200/50">
                   {/* Specular Shine Overlay */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none"></div>
                </div>

                {/* Floating Tech Orbits */}
                <div className="absolute inset-[-30px] border border-slate-200/10 rounded-full animate-spin-slow opacity-40 pointer-events-none"></div>
                <div className="absolute inset-[-80px] border border-slate-200/5 rounded-full animate-spin-slow [animation-direction:reverse] opacity-20 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa História (Timeline) */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-16">
            <div className="p-3 bg-white border border-slate-200 rounded-xl text-accent shadow-sm">
              <IconHistory className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Nossa História</h2>
              <p className="text-slate-500">A evolução da GTS através dos anos.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 z-0"></div>
            {milestones.map((m, idx) => (
              <div key={idx} className="relative z-10">
                <div className="w-12 h-12 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center text-accent font-extrabold shadow-lg mb-6 group hover:border-accent transition-all">
                   <span className="text-xs">{m.year}</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{m.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid - Setores que atendemos */}
      <section className="py-24 bg-white border-b border-slate-100">
         <div className="container mx-auto px-4">
            <p className="text-center text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-8">Setores que atendemos com GTS Enterprise</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all text-slate-700">
               <div className="flex items-center gap-2"><IconBuilding className="w-6 h-6 text-accent"/> <span className="font-bold text-sm">Fintechs</span></div>
               <div className="flex items-center gap-2"><IconTruck className="w-6 h-6 text-accent"/> <span className="font-bold text-sm">Logística</span></div>
               <div className="flex items-center gap-2"><IconGlobe className="w-6 h-6 text-accent"/> <span className="font-bold text-sm">Global SaaS</span></div>
               <div className="flex items-center gap-2"><IconChart className="w-6 h-6 text-accent"/> <span className="font-bold text-sm">Big Data</span></div>
               <div className="flex items-center gap-2"><IconShield className="w-6 h-6 text-accent"/> <span className="font-bold text-sm">Cybersecurity</span></div>
            </div>
         </div>
      </section>

      {/* O Que Desenvolvemos */}
      <section className="py-24 bg-white relative">
         <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
               <div className="max-w-2xl">
                   <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-2">Expertise Técnica</h2>
                   <h3 className="text-4xl md:text-5xl font-bold text-slate-900">O Que Construímos</h3>
                   <p className="text-slate-500 mt-4 text-lg">Do MVP ao Enterprise Scale. Nossa stack é focada em durabilidade e escala.</p>
               </div>
               <button 
                  onClick={() => onChangeView(ViewState.SERVICES)}
                  className="text-accent font-bold hover:text-accentHover transition-colors flex items-center gap-2"
               >
                  Ver todos os serviços <IconArrowRight className="w-4 h-4" />
               </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {developments.map((item, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-accent hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 group hover:-translate-y-2">
                     <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all text-accent">
                        {item.icon}
                     </div>
                     <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                        {item.category}
                     </span>
                     <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        {item.title}
                     </h3>
                     <p className="text-slate-500 leading-relaxed mb-6">
                        {item.desc}
                     </p>
                     <a onClick={() => onChangeView(ViewState.SERVICES)} className="text-accent text-sm font-bold flex items-center gap-2 cursor-pointer group-hover:gap-3 transition-all">
                        Saiba mais <IconArrowRight className="w-4 h-4" />
                     </a>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Middle CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-blue-700 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-multiply"></div>
         <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
               Pronto para subir o nível da sua tecnologia?
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
               Fale agora com nosso team de engenharia e receba um diagnóstico técnico gratuito do seu projeto.
            </p>
            <a 
               href="https://wa.me/5513996104848?text=Olá, gostaria de uma consultoria gratuita para meu projeto de software."
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-bold rounded-xl shadow-lg hover:bg-slate-50 transition-all transform hover:scale-105 gap-2"
            >
               <IconWhatsApp className="w-5 h-5" />
               Falar com Especialista Agora
            </a>
         </div>
      </section>

      {/* Portfólio Teaser */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Nossa Entrega em Números</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Mais de 50 projetos entregues com 100% de disponibilidade. Conheça alguns de nossos cases ativos.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {PORTFOLIO_ITEMS.slice(0, 4).map((project, idx) => (
              <a 
                key={idx}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-accent hover:shadow-xl transition-all group overflow-hidden"
              >
                <div className="aspect-video mb-4 overflow-hidden rounded-xl">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">{project.title}</h4>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{project.category}</p>
              </a>
            ))}
          </div>
          
          <div className="text-center">
            <button 
              onClick={() => onChangeView(ViewState.PORTFOLIO)}
              className="text-accent font-bold hover:underline inline-flex items-center gap-2"
            >
              Ver Portfólio Completo <IconArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
