import React, { useState } from 'react';
import { ViewState } from '../types';
import { NEWSLETTER_SCRIPT_URL, TESTIMONIAL_SCRIPT_URL } from '../constants';
import { IconCheck, IconRocket, IconGlobe, IconShield, IconCloud, IconCpu, IconTruck, IconBuilding, IconChart, IconArrowRight, IconWhatsApp, IconStar, IconLoader, IconAtom } from '../components/Icons';

interface HomeProps {
  onChangeView: (view: ViewState) => void;
}

const Home: React.FC<HomeProps> = ({ onChangeView }) => {
  // Newsletter States
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Testimonial Form States
  const [tName, setTName] = useState('');
  const [tCompany, setTCompany] = useState('');
  const [tMsg, setTMsg] = useState('');
  const [tRating, setTRating] = useState(5); // Default 5 stars
  const [isTSending, setIsTSending] = useState(false);
  const [tSent, setTSent] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append('email', email.trim());

      await fetch(NEWSLETTER_SCRIPT_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });

      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    } catch (error) {
      console.error('Erro ao salvar email:', error);
      alert('Ocorreu um erro ao se inscrever. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleTestimonialSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsTSending(true);

    try {
      const formData = new FormData();
      formData.append('nome', tName);
      formData.append('empresa', tCompany);
      formData.append('mensagem', tMsg);
      formData.append('nota', tRating.toString());

      await fetch(TESTIMONIAL_SCRIPT_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });

      setTSent(true);
      setTName('');
      setTCompany('');
      setTMsg('');
      setTRating(5);
      setTimeout(() => setTSent(false), 5000);
    } catch (error) {
      alert('Erro ao enviar depoimento.');
    } finally {
      setIsTSending(false);
    }
  };

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

  const testimonials = [
    {
      name: "Roberto Almeida",
      role: "CEO, FinLogística",
      text: "A GTS transformou nossa operação logística. O sistema de rastreamento reduziu nossos custos em 30% no primeiro mês.",
      stars: 5
    },
    {
      name: "Juliana Mendes",
      role: "Diretora, MedTech Solutions",
      text: "Profissionalismo internacional. Entregaram o aplicativo antes do prazo e com uma qualidade de código impecável.",
      stars: 5
    },
    {
      name: "Carlos Eduardo",
      role: "Fundador, Varejo Express",
      text: "Estávamos perdendo vendas por causa de um site lento. A GTS refez tudo e nossa conversão dobrou.",
      stars: 5
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - High Conversion */}
      <section className="relative pt-32 pb-32 overflow-hidden bg-primary flex items-center min-h-[90vh]">
        {/* Animated Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
           <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-accent/30 rounded-full blur-[120px] animate-pulse-slow"></div>
           <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-tech/20 rounded-full blur-[100px]"></div>
           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-slate-700 backdrop-blur-md mb-8 animate-fade-in shadow-xl shadow-black/20">
            <span className="w-2 h-2 rounded-full bg-tech animate-ping"></span>
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Disponível para Novos Projetos</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 tracking-tight leading-[1.1] animate-slide-up">
            Transforme Ideias em <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-tech">Software de Elite</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up [animation-delay:200ms]">
            Desenvolvemos sistemas, aplicativos e soluções de IA que colocam sua empresa anos à frente da concorrência. <strong>Segurança bancária, performance global.</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto animate-slide-up [animation-delay:400ms]">
            <a 
              href="https://wa.me/5513996104848?text=Olá, vi o site da GTS e quero transformar meu negócio. Gostaria de um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-5 bg-accent hover:bg-accentHover text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_50px_rgba(59,130,246,0.6)] hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <IconRocket className="w-6 h-6 group-hover:animate-bounce" />
              Solicitar Orçamento Agora
            </a>
            <button 
              onClick={() => onChangeView(ViewState.SERVICES)}
              className="px-8 py-5 bg-surface/50 backdrop-blur-md border border-slate-700 hover:border-slate-500 text-white rounded-xl font-bold text-lg transition-all hover:bg-surface flex items-center justify-center gap-2 group"
            >
              Ver Nossas Soluções
              <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Tech Stack Ticker */}
      <div className="bg-surface py-6 border-y border-slate-800 overflow-hidden relative">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8">
          <span className="text-slate-500 text-xs font-bold uppercase tracking-widest whitespace-nowrap">Tecnologias que usamos:</span>
          <div className="flex gap-8 md:gap-12 flex-wrap justify-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {['REACT', 'NEXT.JS', 'PYTHON', 'GOOGLE CLOUD', 'AWS', 'DOCKER', 'GEMINI AI'].map(tech => (
              <span key={tech} className="text-sm md:text-base font-bold text-slate-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* O Que Desenvolvemos (Compacto & Direto) */}
      <section className="py-24 bg-primary relative">
         <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
               <div className="max-w-2xl">
                   <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-2">Expertise Técnica</h2>
                   <h3 className="text-4xl md:text-5xl font-bold text-white">O Que Construímos</h3>
                   <p className="text-slate-400 mt-4 text-lg">Soluções digitais completas. Do design da interface à infraestrutura na nuvem.</p>
               </div>
               <button 
                  onClick={() => onChangeView(ViewState.SERVICES)}
                  className="text-accent font-bold hover:text-white transition-colors flex items-center gap-2"
               >
                  Ver todos os serviços <IconArrowRight className="w-4 h-4" />
               </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {developments.map((item, index) => (
                  <div key={index} className="bg-surface p-8 rounded-2xl border border-slate-800 hover:border-accent hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 group hover:-translate-y-2">
                     <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all text-accent">
                        {item.icon}
                     </div>
                     <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                        {item.category}
                     </span>
                     <h3 className="text-2xl font-bold text-white mb-3">
                        {item.title}
                     </h3>
                     <p className="text-slate-400 leading-relaxed mb-6">
                        {item.desc}
                     </p>
                     <a onClick={() => onChangeView(ViewState.SERVICES)} className="text-white text-sm font-bold flex items-center gap-2 cursor-pointer group-hover:gap-3 transition-all">
                        Saiba mais <IconArrowRight className="w-4 h-4 text-accent" />
                     </a>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Middle CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-blue-700 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
         <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
               Seu projeto merece tecnologia de ponta
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
               Não perca tempo com soluções amadoras. Fale diretamente com nossa equipe de engenharia e receba uma consultoria gratuita.
            </p>
            <a 
               href="https://wa.me/5513996104848?text=Olá, gostaria de uma consultoria gratuita para meu projeto de software."
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-bold rounded-xl shadow-lg hover:bg-slate-100 transition-all transform hover:scale-105 gap-2"
            >
               <IconWhatsApp className="w-5 h-5" />
               Falar com Engenheiro Agora
            </a>
         </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-24 bg-primary border-b border-slate-800">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">O Que Dizem Nossos Parceiros</h2>
               <p className="text-slate-400">Resultados reais para empresas que exigem excelência.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
               {testimonials.map((t, i) => (
                  <div key={i} className="bg-surface p-8 rounded-2xl border border-slate-800 relative">
                     <div className="flex gap-1 mb-4 text-yellow-500">
                        {[...Array(t.stars)].map((_, idx) => <IconStar key={idx} className="w-5 h-5 fill-current" />)}
                     </div>
                     <p className="text-slate-300 italic mb-6 leading-relaxed">"{t.text}"</p>
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center font-bold text-white">
                           {t.name.charAt(0)}
                        </div>
                        <div>
                           <h4 className="text-white font-bold text-sm">{t.name}</h4>
                           <p className="text-slate-500 text-xs uppercase tracking-wide">{t.role}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            {/* Testimonial Form */}
            <div className="max-w-2xl mx-auto bg-surface border border-slate-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-2 text-center">É nosso parceiro?</h3>
              <p className="text-slate-400 text-center mb-6">Deixe seu depoimento e apareça em nosso site.</p>
              
              {tSent ? (
                <div className="bg-tech/10 border border-tech/30 p-4 rounded-xl flex items-center justify-center gap-2 text-tech font-bold animate-fade-in">
                  <IconCheck className="w-5 h-5" /> Depoimento enviado com sucesso!
                </div>
              ) : (
                <form onSubmit={handleTestimonialSubmit} className="space-y-4">
                  {/* Star Rating Selector */}
                  <div className="flex justify-center mb-4 gap-2">
                     {[1, 2, 3, 4, 5].map((star) => (
                        <button
                           key={star}
                           type="button"
                           onClick={() => setTRating(star)}
                           className={`transition-all transform hover:scale-110 focus:outline-none ${star <= tRating ? 'text-yellow-500' : 'text-slate-700'}`}
                        >
                           <IconStar className="w-8 h-8 fill-current" />
                        </button>
                     ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="Seu Nome" 
                      required
                      value={tName}
                      onChange={(e) => setTName(e.target.value)}
                      className="bg-primary border border-slate-700 rounded-lg p-3 text-white focus:border-accent outline-none"
                    />
                    <input 
                      type="text" 
                      placeholder="Sua Empresa / Cargo" 
                      required
                      value={tCompany}
                      onChange={(e) => setTCompany(e.target.value)}
                      className="bg-primary border border-slate-700 rounded-lg p-3 text-white focus:border-accent outline-none"
                    />
                  </div>
                  <textarea 
                    placeholder="Escreva seu depoimento..." 
                    required
                    rows={3}
                    value={tMsg}
                    onChange={(e) => setTMsg(e.target.value)}
                    className="w-full bg-primary border border-slate-700 rounded-lg p-3 text-white focus:border-accent outline-none resize-none"
                  ></textarea>
                  <button 
                    type="submit" 
                    disabled={isTSending}
                    className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-lg transition-colors flex justify-center items-center gap-2"
                  >
                    {isTSending ? <IconLoader className="animate-spin w-5 h-5" /> : 'Enviar Depoimento'}
                  </button>
                </form>
              )}
            </div>

         </div>
      </section>

      {/* Clients Logos */}
      <section className="py-16 bg-surface border-b border-slate-800">
         <div className="container mx-auto px-4">
            <p className="text-center text-slate-500 font-bold uppercase tracking-widest text-xs mb-8">Empresas que confiam na GTS</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
               <div className="flex items-center gap-2"><IconBuilding className="w-6 h-6"/> <span className="font-bold text-lg">Banco Alliance</span></div>
               <div className="flex items-center gap-2"><IconTruck className="w-6 h-6"/> <span className="font-bold text-lg">TransLogística</span></div>
               <div className="flex items-center gap-2"><IconGlobe className="w-6 h-6"/> <span className="font-bold text-lg">AgroSafra</span></div>
               <div className="flex items-center gap-2"><IconChart className="w-6 h-6"/> <span className="font-bold text-lg">Grupo Varejo</span></div>
            </div>
         </div>
      </section>

      {/* Insights GTS Link (Call to Action for Blog) */}
      <section className="py-24 bg-primary">
         <div className="container mx-auto px-4 text-center">
             <div className="inline-block p-3 rounded-full bg-accent/10 mb-6">
                <IconAtom className="w-8 h-8 text-accent animate-spin-slow" />
             </div>
             <h2 className="text-4xl font-bold text-white mb-4">Insights GTS</h2>
             <p className="text-slate-400 max-w-2xl mx-auto mb-8 text-lg">
               Tendências de tecnologia e inovação para líderes. Acesse nossa área exclusiva de conteúdo.
             </p>
             <button 
                onClick={() => onChangeView(ViewState.BLOG)}
                className="px-8 py-4 border border-slate-700 hover:border-accent text-white font-bold rounded-xl transition-all hover:bg-surface flex items-center gap-2 mx-auto group"
             >
                Acessar Portal de Conteúdo <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </button>
         </div>
      </section>

      {/* Newsletter Section (ID for anchor link from Blog) */}
      <section id="newsletter" className="py-24 bg-surface border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-slate-800 to-slate-900 p-8 md:p-16 rounded-3xl shadow-2xl border border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4"></div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
               <div>
                  <h2 className="text-3xl font-bold text-white mb-4">Fique à frente do mercado</h2>
                  <p className="text-slate-300 mb-6 text-lg">
                     Receba estratégias de software e inteligência artificial direto no seu e-mail. Junte-se a líderes que inovam.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                     <span className="flex items-center gap-2"><IconCheck className="w-5 h-5 text-tech"/> Conteúdo Técnico</span>
                     <span className="flex items-center gap-2"><IconCheck className="w-5 h-5 text-tech"/> Sem Spam</span>
                  </div>
               </div>

               <div>
                  {subscribed ? (
                    <div className="bg-tech/10 border border-tech/30 p-6 rounded-xl flex items-center gap-4 animate-fade-in">
                      <div className="bg-tech rounded-full p-2 text-primary">
                         <IconCheck className="w-6 h-6" />
                      </div>
                      <div>
                         <h4 className="text-white font-bold">Inscrito com sucesso!</h4>
                         <p className="text-tech text-sm">Bem-vindo à GTS Insider.</p>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
                      <div className="relative">
                         <input 
                           type="email" 
                           required
                           placeholder="Seu e-mail corporativo" 
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           className="w-full px-6 py-4 bg-slate-950 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all disabled:opacity-50"
                           disabled={isLoading}
                         />
                      </div>
                      <button 
                        type="submit" 
                        disabled={isLoading}
                        className="w-full px-6 py-4 bg-white text-primary hover:bg-slate-200 font-bold rounded-xl transition-all transform hover:scale-[1.02] disabled:opacity-70 flex justify-center items-center shadow-lg"
                      >
                        {isLoading ? (
                            <IconLoader className="w-5 h-5 animate-spin text-primary" />
                        ) : (
                            "Assinar Gratuitamente"
                        )}
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