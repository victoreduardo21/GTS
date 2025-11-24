import React from 'react';
import { SERVICES } from '../constants';
import { IconCode, IconCloud, IconCpu, IconShield } from '../components/Icons';

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
    <div className="min-h-screen flex flex-col">
      {/* Services Header */}
      <div className="bg-slate-900 py-20 border-b border-slate-800">
         <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
               <span className="text-accent font-bold tracking-widest text-sm uppercase mb-2 block">Expertise Técnica</span>
               <h2 className="text-5xl font-bold text-white mb-6">Soluções 360º</h2>
               <p className="text-slate-400 text-lg leading-relaxed">
                 Na GTS, não entregamos apenas código. Entregamos ecossistemas digitais completos que sustentam a operação do seu negócio.
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
              className="group p-10 rounded-3xl bg-slate-800 border border-slate-700 hover:border-accent hover:bg-slate-800/80 transition-all shadow-2xl hover:shadow-accent/20 hover:-translate-y-2"
            >
              <div className="mb-8 p-5 bg-slate-900 rounded-2xl inline-flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-slate-700">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                {service.description}
              </p>
              <a 
                href={`https://wa.me/5513996104848?text=Olá, tenho interesse em saber mais sobre o serviço: ${encodeURIComponent(service.title)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 pt-6 border-t border-slate-700/50 flex items-center text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 cursor-pointer"
              >
                 <span>Saber mais &rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Our Process Section */}
      <div className="bg-slate-950 py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
         <div className="container mx-auto px-4 relative z-10">
            <div className="mb-16 text-center">
               <h2 className="text-3xl font-bold text-white">O Fluxo GTS de Desenvolvimento</h2>
               <p className="text-slate-500 mt-2">Como transformamos requisitos em realidade.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
               {/* Connecting Line (Desktop) */}
               <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-800 z-0"></div>

               {[
                  { step: "01", title: "Discovery", desc: "Mapeamento profundo de dores e requisitos técnicos." },
                  { step: "02", title: "Architecture", desc: "Design de sistemas escaláveis e prova de conceito." },
                  { step: "03", title: "Build", desc: "Desenvolvimento ágil com sprints semanais e CI/CD." },
                  { step: "04", title: "Scale", desc: "Deploy, monitoramento 24/7 e otimização contínua." },
               ].map((item, i) => (
                  <div key={i} className="relative z-10 bg-slate-950 md:bg-transparent">
                     <div className="w-24 h-24 mx-auto bg-slate-900 border-4 border-slate-800 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6 shadow-xl group hover:border-accent transition-colors">
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