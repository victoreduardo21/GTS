import React from 'react';
import { SYSTEMS } from '../constants';
import { IconRocket } from '../components/Icons';

const Systems: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-block mb-4 p-2 px-4 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-accent">
           gts_systems_module.init()
        </div>
        <h2 className="text-5xl font-bold text-white mb-6">Produtos & Plataformas</h2>
        <p className="text-slate-400 text-lg">
          Além de serviços sob demanda, a GTS desenvolve produtos proprietários que resolvem desafios complexos de escala global.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {SYSTEMS.map((system, index) => (
          <div key={index} className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 transition-all flex flex-col md:flex-row h-full">
            {/* Image Section */}
            <div className="w-full md:w-2/5 relative overflow-hidden">
               <div className="absolute inset-0 bg-accent/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
               <img 
                src={system.image} 
                alt={system.name} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
               <div className="absolute top-4 left-4 z-20">
                  <span className={`
                    px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider shadow-lg
                    ${system.status === 'Live' ? 'bg-emerald-500 text-white' : ''}
                    ${system.status === 'Beta' ? 'bg-amber-500 text-white' : ''}
                    ${system.status === 'Dev' ? 'bg-slate-600 text-slate-200' : ''}
                  `}>
                    {system.status}
                  </span>
               </div>
            </div>

            {/* Content Section */}
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                 <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">{system.name}</h3>
                 <IconRocket className="w-5 h-5 text-slate-600 group-hover:text-accent transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              
              <p className="text-slate-400 mb-6 text-sm leading-relaxed flex-1">
                {system.description}
              </p>
              
              <div className="mt-auto">
                 <p className="text-xs font-bold text-slate-500 uppercase mb-2">Tech Stack</p>
                 <div className="flex flex-wrap gap-2">
                  {system.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-slate-950 text-slate-300 text-xs rounded border border-slate-700 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-20 p-12 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl border border-slate-700 text-center relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
         <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Tem uma ideia de produto?</h3>
         <p className="text-slate-400 max-w-2xl mx-auto mb-8 relative z-10">
            A GTS investe e co-cria startups e produtos digitais. Se você precisa de um parceiro tecnológico para o seu MVP, fale conosco.
         </p>
         <button className="relative z-10 px-8 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-colors">
            Apresentar Projeto
         </button>
      </div>
    </div>
  );
};

export default Systems;