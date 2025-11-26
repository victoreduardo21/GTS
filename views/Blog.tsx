import React, { useState } from 'react';
import { IconArrowRight, IconAtom, IconCheck, IconLoader } from '../components/Icons';
import { NEWSLETTER_SCRIPT_URL } from '../constants';

const Blog: React.FC = () => {
  // Newsletter Logic for Blog Page
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  // MOCK DATA - Substituirei pelos links reais assim que você me enviar
  const posts = [
    {
      category: "Inteligência Artificial",
      date: "12 OUT 2023",
      title: "Como a IA Generativa está redefinindo o suporte ao cliente",
      excerpt: "Empresas que adotaram chatbots baseados em LLMs viram uma redução de 70% no tempo de resposta. Entenda a arquitetura por trás dessa revolução.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      url: "https://www.linkedin.com/company/gts-globaltechsoftware/" // Aguardando link específico
    },
    {
      category: "Cloud Computing",
      date: "05 SET 2023",
      title: "Migração para Nuvem: Estratégias para reduzir custos em 2024",
      excerpt: "Não basta apenas 'ir para a nuvem'. A otimização de recursos e o uso de arquiteturas serverless são a chave para a eficiência financeira.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      url: "https://www.linkedin.com/company/gts-globaltechsoftware/" // Aguardando link específico
    },
    {
      category: "Segurança",
      date: "28 AGO 2023",
      title: "Zero Trust: Por que o modelo tradicional de segurança falhou",
      excerpt: "No mundo do trabalho híbrido, o perímetro de segurança desapareceu. Veja como proteger seus ativos digitais com a metodologia Zero Trust.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
      url: "https://www.linkedin.com/company/gts-globaltechsoftware/" // Aguardando link específico
    },
    {
      category: "DevOps",
      date: "15 AGO 2023",
      title: "Acelere seu Time-to-Market com CI/CD Automatizado",
      excerpt: "Pipelines de deploy automatizados não são luxo, são necessidade. Como implementamos entregas contínuas em grandes corporações.",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800",
      url: "https://www.linkedin.com/company/gts-globaltechsoftware/" // Aguardando link específico
    },
    {
      category: "Fintech",
      date: "02 AGO 2023",
      title: "Blockchain além das Criptomoedas: Contratos Inteligentes",
      excerpt: "Como instituições financeiras estão usando Smart Contracts para automatizar auditorias e garantir transparência total.",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800",
      url: "https://www.linkedin.com/company/gts-globaltechsoftware/" // Aguardando link específico
    },
    {
      category: "Tendências",
      date: "20 JUL 2023",
      title: "O Futuro do Desenvolvimento de Software: Low-Code vs Pro-Code",
      excerpt: "Quando usar plataformas de desenvolvimento rápido e quando investir em código proprietário de alta performance.",
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=800",
      url: "https://www.linkedin.com/company/gts-globaltechsoftware/" // Aguardando link específico
    }
  ];

  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <div className="bg-surface py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-accent text-xs font-bold uppercase tracking-widest mb-6">
            <IconAtom className="w-4 h-4" />
            Conteúdo Exclusivo
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Insights GTS
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Tendências de tecnologia, inovação e engenharia de software para líderes que moldam o futuro.
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <a 
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-surface rounded-2xl border border-slate-800 overflow-hidden hover:border-accent hover:shadow-2xl hover:shadow-accent/5 transition-all duration-300 hover:-translate-y-2 block h-full flex flex-col"
            >
              <div className="h-48 overflow-hidden relative shrink-0">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-all z-10"></div>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-primary/90 backdrop-blur text-xs font-bold text-white rounded uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-slate-500 text-xs font-bold block mb-3">{post.date}</span>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-2 text-accent text-sm font-bold group-hover:gap-3 transition-all">
                    Ler Artigo no LinkedIn <IconArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Newsletter CTA Inline Form */}
        <div className="mt-20 p-12 bg-gradient-to-r from-slate-900 to-primary rounded-3xl border border-slate-800 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
           <div className="relative z-10">
             <h3 className="text-2xl font-bold text-white mb-4">Não perca nenhuma tendência</h3>
             <p className="text-slate-400 max-w-xl mx-auto mb-8">
                Junte-se a mais de 500 líderes de tecnologia que recebem nossa curadoria semanal.
             </p>

             <div className="max-w-md mx-auto">
               {subscribed ? (
                  <div className="bg-tech/10 border border-tech/30 p-4 rounded-xl flex items-center justify-center gap-2 text-tech font-bold animate-fade-in">
                    <IconCheck className="w-5 h-5" /> Inscrito com sucesso!
                  </div>
               ) : (
                  <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                    <input 
                      type="email" 
                      required
                      placeholder="Seu e-mail corporativo" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-6 py-4 bg-slate-950 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all disabled:opacity-50"
                      disabled={isLoading}
                    />
                    <button 
                      type="submit" 
                      disabled={isLoading}
                      className="w-full px-6 py-4 bg-white text-primary hover:bg-slate-200 font-bold rounded-xl transition-all disabled:opacity-70 flex justify-center items-center shadow-lg"
                    >
                      {isLoading ? (
                          <IconLoader className="w-5 h-5 animate-spin text-primary" />
                      ) : (
                          "Inscrever-se Gratuitamente"
                      )}
                    </button>
                  </form>
               )}
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;