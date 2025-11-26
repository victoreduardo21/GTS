import React from 'react';
import { SERVICES } from '../constants';
import { IconCode, IconCloud, IconCpu, IconShield, IconArrowRight, IconWhatsApp } from '../components/Icons';

const getIcon = (name: string) => {
  switch (name) {
    case 'Code': return <IconCode className="w-8 h-8 text-accent" />;
    case 'Cloud': return <IconCloud className="w-8 h-8 text-accent" />;
    case 'Cpu': return <IconCpu className="w-8 h-8 text-accent" />;
    case 'Shield': return <IconShield className="w-8 h-8 text-accent" />;
    default: return <IconCode className="w-8 h-8 text-accent" />;
  }
};

const Services: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-primary">
      {/* Services Header */}
      <div className="bg-surface py-20 border-b border-slate-800">
         <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
               <span className="text-accent font-bold tracking-widest text-xs uppercase mb-4 block bg-accent/10 w-fit mx-auto px-3 py-1 rounded-full">
                  Nossas Especialidades
               </span>
               <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                  Tecnologia que <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">Gera Receita</span>
               </h2>
               <p className="text-slate-400 text-lg leading-relaxed">
                 Não criamos apenas software. Criamos ativos digitais que automatizam sua empresa, reduzem custos e aumentam suas vendas.
               </p>
            </div>
         </div>
      </div>

      {/* Service Cards */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 -mt-32">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="group p-10 rounded-3xl bg-surface border border-slate-800 hover:border-accent hover:bg-slate-900 transition-all shadow-2xl hover:shadow-accent/10 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="mb-8 p-5 bg-primary rounded-2xl inline-flex items-center justify-center border border-slate-800 group-hover:scale-110 transition-transform duration-300">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-lg mb-8">
                {service.description}
              </p>
              
              <a 
                href={`https://wa.me/5513996104848?text=Olá, tenho interesse no serviço de ${encodeURIComponent(service.title)}. Como funciona?`}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-bold bg-accent hover:bg-accentHover px-6 py-3 rounded-xl transition-all shadow-lg shadow-accent/20"
              >
                 Solicitar Proposta <IconArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Strip */}
      <div className="bg-accent text-white py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold">Não sabe qual a melhor solução?</h3>
              <p className="text-blue-100">Nossos consultores analisam seu negócio gratuitamente.</p>
           </div>
           <a 
             href="https://wa.me/5513996104848?text=Preciso de ajuda para escolher a melhor tecnologia para minha empresa."
             target="_blank"
             rel="noopener noreferrer"
             className="bg-white text-accent font-bold px-8 py-3 rounded-xl hover:bg-slate-100 transition-colors shadow-lg flex items-center gap-2"
           >
             <IconWhatsApp className="w-5 h-5" />
             Consultoria Grátis
           </a>
        </div>
      </div>

      {/* Our Process Section */}
      <div className="bg-primary py-24 relative overflow-hidden">
         <div className="container mx-auto px-4 relative z-10">
            <div className="mb-16 text-center">
               <h2 className="text-3xl font-bold text-white">Metodologia GTS</h2>
               <p className="text-slate-500 mt-2">Processo transparente, do início ao fim.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
               <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-800 z-0"></div>

               {[
                  { step: "01", title: "Entendimento", desc: "Mapeamos suas dores e objetivos de negócio." },
                  { step: "02", title: "Prototipagem", desc: "Você aprova o visual antes de escrevermos o código." },
                  { step: "03", title: "Desenvolvimento", desc: "Sprints semanais com entregas contínuas." },
                  { step: "04", title: "Lançamento", desc: "Deploy seguro e treinamento da sua equipe." },
               ].map((item, i) => (
                  <div key={i} className="relative z-10 bg-primary md:bg-transparent">
                     <div className="w-24 h-24 mx-auto bg-surface border-4 border-slate-800 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6 shadow-xl group hover:border-accent transition-colors">
                        <span className="group-hover:text-accent">{item.step}</span>
                     </div>
                     <div className="text-center px-4">
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-slate-500 text-sm">{item.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
};

export default Services;