
import React from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { IconArrowRight, IconGlobe, IconRocket, IconAtom } from '../components/Icons';

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-accent text-xs font-bold uppercase tracking-widest mb-6">
            <IconRocket className="w-4 h-4" />
            Cases de Sucesso
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
            Projetos <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-600">Entregues</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Uma amostra da nossa capacidade técnica. De SPAs ultrarrápidas a sistemas corporativos complexos, a GTS transforma visão em realidade digital.
          </p>
        </div>
      </div>

      {/* Grid de Projetos */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PORTFOLIO_ITEMS.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:border-accent hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 flex flex-col h-full"
            >
              {/* Imagem do Projeto */}
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                   <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-slate-900 px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl"
                   >
                     Ver Site Ao Vivo <IconGlobe className="w-4 h-4" />
                   </a>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur shadow-sm rounded-lg text-[10px] font-bold text-slate-900 uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                
                <div className="pt-6 border-t border-slate-100 mt-auto">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-accent font-bold group/link"
                  >
                    <span>Explorar Projeto</span>
                    <IconArrowRight className="w-4 h-4 transform group-hover/link:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="container mx-auto px-4 pb-24">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-3xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-tech/10 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10">
            <IconAtom className="w-16 h-16 text-white mx-auto mb-8 animate-spin-slow" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">O próximo grande projeto<br/> pode ser o seu.</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
              Estamos prontos para escalar sua operação com tecnologia proprietária e design de classe mundial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5513996104848?text=Olá, vi seu portfólio e quero um projeto com a mesma qualidade."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-accentHover transition-all shadow-xl shadow-accent/30 flex items-center justify-center gap-2"
              >
                Solicitar Proposta Agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
