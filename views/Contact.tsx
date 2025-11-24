import React from 'react';
import { IconWhatsApp, IconMail, IconMapPin, IconPhone, IconClock, IconGlobe, IconShield } from '../components/Icons';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary">
      {/* Header Section */}
      <div className="bg-slate-900 py-20 border-b border-slate-800">
         <div className="container mx-auto px-4 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-4">
              Sem Burocracia
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Canais Oficiais</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Na GTS, valorizamos a velocidade. Eliminamos formulários lentos para conectar você diretamente aos nossos engenheiros e consultores comerciais.
            </p>
         </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Main Action: WhatsApp */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 shadow-2xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] group-hover:bg-emerald-500/20 transition-all"></div>
             
             <div className="relative z-10">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 text-emerald-400">
                   <IconWhatsApp className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">Atendimento Imediato</h3>
                <p className="text-slate-400 mb-8">
                   Fale agora com nossa equipe via WhatsApp. Escolha o departamento abaixo para agilizar seu atendimento.
                </p>

                <div className="space-y-4">
                   <a 
                     href="https://wa.me/5513996104848?text=Olá, gostaria de falar com o time de Vendas sobre um novo projeto."
                     target="_blank"
                     rel="noopener noreferrer"
                     className="block w-full py-4 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-slate-900 font-bold rounded-xl transition-all transform hover:translate-x-2 flex items-center justify-between group/btn"
                   >
                      <span className="flex items-center gap-3">
                        <IconGlobe className="w-5 h-5" />
                        Comercial & Novos Projetos
                      </span>
                      <span className="opacity-0 group-hover/btn:opacity-100 transition-opacity">&rarr;</span>
                   </a>

                   <a 
                     href="https://wa.me/5513996104848?text=Olá, sou cliente e preciso de suporte técnico."
                     target="_blank"
                     rel="noopener noreferrer"
                     className="block w-full py-4 px-6 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-bold rounded-xl transition-all transform hover:translate-x-2 flex items-center justify-between group/btn"
                   >
                      <span className="flex items-center gap-3">
                        <IconShield className="w-5 h-5" />
                        Suporte Técnico & Infraestrutura
                      </span>
                      <span className="opacity-0 group-hover/btn:opacity-100 transition-opacity">&rarr;</span>
                   </a>
                </div>
             </div>
          </div>

          {/* Secondary Info: Email & HQ */}
          <div className="space-y-8">
             
             {/* Emails */}
             <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-accent/30 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                   <div className="p-3 bg-slate-800 rounded-lg text-accent">
                      <IconMail className="w-6 h-6" />
                   </div>
                   <h3 className="text-xl font-bold text-white">E-mail Corporativo</h3>
                </div>
                <div className="space-y-4">
                   <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-slate-950/50 rounded-xl border border-slate-800/50">
                      <div>
                         <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Vendas</span>
                         <a href="mailto:sales@gts-software.com" className="block text-white font-mono hover:text-accent transition-colors">sales@gts-software.com</a>
                      </div>
                   </div>
                   <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-slate-950/50 rounded-xl border border-slate-800/50">
                      <div>
                         <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Financeiro</span>
                         <a href="mailto:financeiro@gts-software.com" className="block text-white font-mono hover:text-accent transition-colors">financeiro@gts-software.com</a>
                      </div>
                   </div>
                </div>
             </div>

             {/* Location & Hours */}
             <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-accent/30 transition-colors">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                      <div className="flex items-center gap-3 mb-4">
                         <IconMapPin className="w-5 h-5 text-accent" />
                         <span className="font-bold text-white">Sede Global</span>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">
                         Empresa Internacional<br />
                         Atendimento Global<br />
                         Brasil / Portugal / EUA
                      </p>
                   </div>
                   <div>
                      <div className="flex items-center gap-3 mb-4">
                         <IconClock className="w-5 h-5 text-accent" />
                         <span className="font-bold text-white">Horário</span>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">
                         Segunda a Sexta<br />
                         09:00 - 18:00 (GMT-3)<br />
                         <span className="text-xs text-emerald-500 mt-2 block font-bold">Plantão 24h para Contratos Enterprise</span>
                      </p>
                   </div>
                </div>
             </div>

          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-24">
           <h3 className="text-2xl font-bold text-white text-center mb-12">Perguntas Frequentes</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                 <h4 className="font-bold text-white mb-2">Qual o prazo médio de desenvolvimento?</h4>
                 <p className="text-slate-400 text-sm">Depende da complexidade. MVPs podem ser entregues em 4 semanas, enquanto sistemas ERP complexos levam de 3 a 6 meses.</p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                 <h4 className="font-bold text-white mb-2">Vocês atendem fora do Brasil?</h4>
                 <p className="text-slate-400 text-sm">Sim. A GTS é uma empresa Global. Temos estrutura para receber pagamentos internacionais e atender em múltiplos fusos horários.</p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                 <h4 className="font-bold text-white mb-2">Como funciona o suporte?</h4>
                 <p className="text-slate-400 text-sm">Oferecemos garantia de 3 a 12 meses após a entrega. Também temos planos de manutenção mensal (SLA) para evolução contínua.</p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                 <h4 className="font-bold text-white mb-2">Trabalham com qual tecnologia?</h4>
                 <p className="text-slate-400 text-sm">Somos especialistas em JavaScript (React, Node.js), Python (IA/Data), Cloud (Google/AWS) e Mobile Nativo.</p>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;