import React, { useState } from 'react';
import { ViewState } from '../types';
import { IconCheck, IconRocket, IconGlobe, IconShield, IconAtom, IconCloud, IconCpu, IconTruck, IconBuilding, IconChart } from '../components/Icons';

interface HomeProps {
  onChangeView: (view: ViewState) => void;
}

const Home: React.FC<HomeProps> = ({ onChangeView }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend or Google Sheet
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-40 overflow-hidden bg-slate-900">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none overflow-hidden">
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[100px] animate-pulse"></div>
           <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[80px]"></div>
           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping"></span>
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">GTS Software v2.0 Live</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-8 tracking-tight leading-tight max-w-5xl">
            Inovação Global em <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-emerald-400">Cada Linha de Código</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            A <strong>GTS</strong> (Global Tech Software) impulsiona empresas visionárias com soluções digitais de ponta, inteligência artificial e infraestrutura inquebrável.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
            <button 
              onClick={() => onChangeView(ViewState.SERVICES)}
              className="group px-8 py-4 bg-accent hover:bg-accentHover text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <IconRocket className="w-5 h-5 group-hover:animate-bounce" />
              Explorar Serviços
            </button>
            <button 
              onClick={() => onChangeView(ViewState.CONTACT)}
              className="px-8 py-4 bg-slate-800/50 backdrop-blur-md border border-slate-600 hover:border-white text-white rounded-xl font-bold text-lg transition-all hover:bg-slate-800"
            >
              Fale com um Consultor
            </button>
          </div>
        </div>
      </section>

      {/* Tech Stack Ticker */}
      <div className="bg-slate-950 py-8 border-y border-slate-800 overflow-hidden relative">
        <div className="container mx-auto px-4">
          <p className="text-center text-slate-500 text-xs font-bold uppercase tracking-widest mb-6">Potencializado pelas melhores tecnologias</p>
          <div className="flex justify-center gap-8 md:gap-16 flex-wrap opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {['REACT', 'NODE.JS', 'PYTHON', 'GOOGLE CLOUD', 'DOCKER', 'KUBERNETES', 'GEMINI AI'].map(tech => (
              <span key={tech} className="text-lg font-bold text-slate-300 flex items-center gap-2">
                <span className="w-2 h-2 bg-slate-700 rounded-full"></span>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section className="py-24 bg-primary relative">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-lg -z-10"></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-500/20 rounded-lg -z-10"></div>
                  <div className="aspect-video rounded-2xl bg-slate-800 overflow-hidden border border-slate-700 relative group">
                     {/* Placeholder for an office or team image */}
                     <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                        <IconAtom className="w-32 h-32 text-slate-700 opacity-50" />
                     </div>
                     <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-slate-900 to-transparent">
                        <div className="text-white font-bold text-xl">Sede GTS</div>
                        <div className="text-accent text-sm">São Paulo &bull; Vale do Silício &bull; Lisboa</div>
                     </div>
                  </div>
               </div>
               <div>
                  <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-2">Sobre a GTS</h2>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Arquitetos do <br/>Amanhã Digital</h3>
                  <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                     A <strong>Global Tech Software</strong> nasceu com uma missão clara: eliminar a complexidade tecnológica para que nossos parceiros possam focar no crescimento. 
                  </p>
                  <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                     Combinamos metodologia ágil, código limpo e uma obsessão por segurança para entregar software que não apenas funciona, mas escala globalmente desde o primeiro dia.
                  </p>
                  <ul className="space-y-4">
                     {[
                        'Equipe multidisciplinar em 3 fusos horários.',
                        'Metodologia proprietária "GTS Agile Flow".',
                        'Parceiros oficiais Google Cloud.'
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-300">
                           <IconCheck className="w-6 h-6 text-emerald-400" />
                           {item}
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* Pillars/Why Choose Us */}
      <section className="py-24 bg-slate-900/50">
         <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
               <h2 className="text-4xl font-bold text-white mb-4">Por que a GTS?</h2>
               <p className="text-slate-400">Não somos apenas uma fábrica de software. Somos seu braço de engenharia estratégica.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-accent/50 transition-all hover:-translate-y-2">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 text-accent">
                     <IconGlobe className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Alcance Global</h3>
                  <p className="text-slate-400">Sistemas preparados para multi-idioma, multi-moeda e conformidade internacional (GDPR, CCPA).</p>
               </div>
               <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-accent/50 transition-all hover:-translate-y-2">
                  <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 text-purple-400">
                     <IconAtom className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Tecnologia Nuclear</h3>
                  <p className="text-slate-400">Utilizamos o core das tecnologias mais modernas para garantir performance atômica em suas aplicações.</p>
               </div>
               <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-accent/50 transition-all hover:-translate-y-2">
                  <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 text-emerald-400">
                     <IconShield className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Segurança Blindada</h3>
                  <p className="text-slate-400">Testes de penetração contínuos e arquitetura Zero Trust padrão em todos os projetos.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-950 border-y border-slate-800">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-800/50">
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">500+</h3>
            <p className="text-slate-500 text-sm uppercase tracking-wide">Projetos Entregues</p>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">12</h3>
            <p className="text-slate-500 text-sm uppercase tracking-wide">Países Atendidos</p>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">99.9%</h3>
            <p className="text-slate-500 text-sm uppercase tracking-wide">Uptime Garantido</p>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</h3>
            <p className="text-slate-500 text-sm uppercase tracking-wide">Suporte Premium</p>
          </div>
        </div>
      </section>

      {/* Clients / Strategic Partners Section (NEW) */}
      <section className="py-20 bg-primary border-b border-slate-800">
         <div className="container mx-auto px-4">
            <p className="text-center text-slate-500 font-bold uppercase tracking-widest text-xs mb-12">Empresas que confiam na GTS</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
               {/* Client 1 - Banking */}
               <div className="flex flex-col items-center gap-3 group cursor-pointer p-6 rounded-xl hover:bg-slate-900 transition-all border border-transparent hover:border-slate-800">
                  <div className="p-3 rounded-full bg-slate-800 text-slate-400 group-hover:text-blue-400 transition-colors shadow-lg">
                     <IconBuilding className="w-8 h-8" />
                  </div>
                  <span className="font-bold text-slate-400 group-hover:text-white text-sm text-center">Banco Alliance</span>
               </div>

               {/* Client 2 - Logistics */}
               <div className="flex flex-col items-center gap-3 group cursor-pointer p-6 rounded-xl hover:bg-slate-900 transition-all border border-transparent hover:border-slate-800">
                  <div className="p-3 rounded-full bg-slate-800 text-slate-400 group-hover:text-amber-500 transition-colors shadow-lg">
                     <IconTruck className="w-8 h-8" />
                  </div>
                  <span className="font-bold text-slate-400 group-hover:text-white text-sm text-center">TransLogística</span>
               </div>

               {/* Client 3 - Industry */}
               <div className="flex flex-col items-center gap-3 group cursor-pointer p-6 rounded-xl hover:bg-slate-900 transition-all border border-transparent hover:border-slate-800">
                  <div className="p-3 rounded-full bg-slate-800 text-slate-400 group-hover:text-emerald-500 transition-colors shadow-lg">
                     <IconGlobe className="w-8 h-8" />
                  </div>
                  <span className="font-bold text-slate-400 group-hover:text-white text-sm text-center">AgroSafra Brasil</span>
               </div>

               {/* Client 4 - Retail */}
               <div className="flex flex-col items-center gap-3 group cursor-pointer p-6 rounded-xl hover:bg-slate-900 transition-all border border-transparent hover:border-slate-800">
                  <div className="p-3 rounded-full bg-slate-800 text-slate-400 group-hover:text-purple-500 transition-colors shadow-lg">
                     <IconChart className="w-8 h-8" />
                  </div>
                  <span className="font-bold text-slate-400 group-hover:text-white text-sm text-center">Grupo Varejo</span>
               </div>

               {/* Client 5 - Health */}
               <div className="flex flex-col items-center gap-3 group cursor-pointer p-6 rounded-xl hover:bg-slate-900 transition-all border border-transparent hover:border-slate-800">
                  <div className="p-3 rounded-full bg-slate-800 text-slate-400 group-hover:text-red-500 transition-colors shadow-lg">
                     <IconShield className="w-8 h-8" />
                  </div>
                  <span className="font-bold text-slate-400 group-hover:text-white text-sm text-center">MediCare Pro</span>
               </div>
               
               {/* Client 6 - Energy */}
               <div className="flex flex-col items-center gap-3 group cursor-pointer p-6 rounded-xl hover:bg-slate-900 transition-all border border-transparent hover:border-slate-800">
                  <div className="p-3 rounded-full bg-slate-800 text-slate-400 group-hover:text-yellow-400 transition-colors shadow-lg">
                     <IconAtom className="w-8 h-8" />
                  </div>
                  <span className="font-bold text-slate-400 group-hover:text-white text-sm text-center">Energia Volt</span>
               </div>
            </div>
         </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-slate-800 to-slate-900 p-8 md:p-16 rounded-3xl shadow-2xl border border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4"></div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
               <div>
                  <h2 className="text-3xl font-bold text-white mb-4">GTS Insider</h2>
                  <p className="text-slate-300 mb-6">
                     Junte-se a mais de 10.000 CTOs e líderes de tecnologia. Receba insights exclusivos sobre o futuro do desenvolvimento de software e IA.
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm text-slate-400">
                     <span className="flex items-center gap-1"><IconCheck className="w-4 h-4 text-accent"/> Sem spam</span>
                     <span className="flex items-center gap-1"><IconCheck className="w-4 h-4 text-accent"/> Conteúdo técnico</span>
                     <span className="flex items-center gap-1"><IconCheck className="w-4 h-4 text-accent"/> Gratuito</span>
                  </div>
               </div>

               <div>
                  {subscribed ? (
                    <div className="bg-emerald-500/10 border border-emerald-500/30 p-6 rounded-xl flex items-center gap-4 animate-fade-in">
                      <div className="bg-emerald-500 rounded-full p-2 text-white">
                         <IconCheck className="w-6 h-6" />
                      </div>
                      <div>
                         <h4 className="text-white font-bold">Inscrito com sucesso!</h4>
                         <p className="text-emerald-400 text-sm">Bem-vindo à comunidade GTS.</p>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
                      <div className="relative">
                         <input 
                           type="email" 
                           required
                           placeholder="Seu melhor e-mail corporativo" 
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           className="w-full px-5 py-4 bg-slate-950 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 transition-all"
                         />
                      </div>
                      <button 
                        type="submit" 
                        className="w-full px-6 py-4 bg-white text-slate-900 hover:bg-slate-200 font-bold rounded-xl transition-all transform hover:scale-[1.02]"
                      >
                        Assinar Newsletter
                      </button>
                    </form>
                  )}
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;