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

  // Dados dos Artigos
  const posts = [
    {
      category: "Inteligência Artificial",
      date: "JAN 2024",
      title: "O Futuro da IA: Transformação nos Negócios",
      excerpt: "Como a Inteligência Artificial está redefinindo estratégias empresariais e o que esperar dos próximos anos nesta revolução tecnológica.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      url: "https://www.linkedin.com/posts/gts-globaltechsoftware_futuro-das-ia-activity-7288378393518071809--UvU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4tL9UB9xaNkCnWqT1-ZlhDE7etULH_WkE"
    },
    {
      category: "Cibersegurança",
      date: "DEZ 2023",
      title: "A Importância da Cibersegurança no Mundo Digital",
      excerpt: "Em um mundo hiperconectado, proteger seus ativos digitais não é opcional. Entenda os riscos e como blindar sua empresa.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7286897126209392640"
    },
    {
      category: "Inovação",
      date: "NOV 2023",
      title: "As Principais Tendências Tecnológicas",
      excerpt: "Uma análise profunda sobre as tecnologias emergentes que estão moldando o mercado global e criando novas oportunidades.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7281005266391687172"
    },
    {
      category: "DevOps",
      date: "EM BREVE",
      title: "Acelere seu Time-to-Market com CI/CD Automatizado",
      excerpt: "Pipelines de deploy automatizados não são luxo, são necessidade. Como implementamos entregas contínuas em grandes corporações.",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800",
      url: "https://www.linkedin.com/company/gts-globaltechsoftware/"
    },
    {
      category: "Blockchain",
      date: "EM BREVE",
      title: "Blockchain além das Criptomoedas: Contratos Inteligentes",
      excerpt: "Como instituições financeiras estão usando Smart Contracts para automatizar auditorias e garantir transparência total.",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800",
      url: "https://www.linkedin.com/company/gts-globaltechsoftware/"
    },
    {
      category: "Desenvolvimento",
      date: "EM BREVE",
      title: "O Futuro do Desenvolvimento: Low-Code vs Pro-Code",
      excerpt: "Quando usar plataformas de desenvolvimento rápido e quando investir em código proprietário de alta performance.",
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=800",
      url: "https://www.linkedin.com/company/gts-globaltechsoftware/"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white py-20 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-accent text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
            <IconAtom className="w-4 h-4" />
            Conteúdo Exclusivo
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
            Insights GTS
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
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
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-accent hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 hover:-translate-y-2 block h-full flex flex-col"
            >
              <div className="h-48 overflow-hidden relative shrink-0">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-all z-10"></div>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className={`px-3 py-1 backdrop-blur-md text-xs font-bold text-white rounded uppercase tracking-wider shadow-sm ${post.date === 'EM BREVE' ? 'bg-amber-500/90' : 'bg-slate-900/70'}`}>
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-slate-400 text-xs font-bold block mb-3">{post.date}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-accent transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-2 text-accent text-sm font-bold group-hover:gap-3 transition-all">
                    {post.date === 'EM BREVE' ? 'Seguir no LinkedIn' : 'Ler Artigo Completo'} <IconArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Newsletter CTA Inline Form */}
        <div className="mt-20 p-12 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl border border-slate-700 text-center relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
           <div className="relative z-10">
             <h3 className="text-2xl font-bold text-white mb-4">Não perca nenhuma tendência</h3>
             <p className="text-slate-300 max-w-xl mx-auto mb-8">
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
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all disabled:opacity-50 backdrop-blur-sm"
                      disabled={isLoading}
                    />
                    <button 
                      type="submit" 
                      disabled={isLoading}
                      className="w-full px-6 py-4 bg-white text-slate-900 hover:bg-slate-200 font-bold rounded-xl transition-all disabled:opacity-70 flex justify-center items-center shadow-lg"
                    >
                      {isLoading ? (
                          <IconLoader className="w-5 h-5 animate-spin text-slate-900" />
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