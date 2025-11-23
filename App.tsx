import React, { useState } from 'react';
import { ViewState } from './types';
import { IconMenu, IconX, IconAtom, IconFacebook, IconLinkedIn, IconInstagram, IconTwitter, IconMapPin, IconPhone, IconMail, IconClock, IconWhatsApp } from './components/Icons';

// Import Views
import Home from './views/Home';
import Services from './views/Services';
import Systems from './views/Systems';
import Contact from './views/Contact';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderView = () => {
    switch (currentView) {
      case ViewState.HOME: return <Home onChangeView={setCurrentView} />;
      case ViewState.SERVICES: return <Services />;
      case ViewState.SYSTEMS: return <Systems />;
      case ViewState.CONTACT: return <Contact />;
      default: return <Home onChangeView={setCurrentView} />;
    }
  };

  const navItems = [
    { label: 'Lar', value: ViewState.HOME },
    { label: 'Serviços', value: ViewState.SERVICES },
    { label: 'Sistemas', value: ViewState.SYSTEMS },
    { label: 'Contato', value: ViewState.CONTACT },
  ];

  return (
    <div className="min-h-screen bg-primary flex flex-col text-slate-200 font-sans relative">
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5513996104848" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:scale-110 transition-all group"
        title="Fale conosco no WhatsApp"
      >
        <IconWhatsApp className="w-8 h-8 text-white group-hover:animate-pulse" />
        <span className="absolute -top-10 right-0 bg-white text-slate-900 text-xs font-bold py-1 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
           Fale Agora
        </span>
      </a>

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-primary/90 backdrop-blur-lg border-b border-slate-800/60 shadow-lg shadow-black/20">
        {/* Changed px-4 to px-6 md:px-12 to give more space on the sides */}
        <div className="container mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          {/* Logo Area */}
          <div 
            onClick={() => setCurrentView(ViewState.HOME)}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-500 rounded-full"></div>
              <div className="relative w-10 h-10 bg-gradient-to-tr from-slate-800 to-slate-900 border border-slate-700 rounded-full flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                <IconAtom className="w-8 h-8 animate-spin-slow" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white tracking-tighter leading-none group-hover:text-accent transition-colors">GTS</span>
              <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest group-hover:text-slate-300">Global Tech</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => setCurrentView(item.value)}
                className={`text-sm font-medium transition-all relative py-1 tracking-wide
                  ${currentView === item.value ? 'text-white' : 'text-slate-400 hover:text-accent'}
                `}
              >
                {item.label}
                {currentView === item.value && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                )}
              </button>
            ))}
            <button 
              onClick={() => setCurrentView(ViewState.CONTACT)}
              className="px-5 py-2.5 bg-accent hover:bg-accentHover text-white text-sm font-bold rounded-md transition-all shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5"
            >
              Falar com Especialista
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-400 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <IconX className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 absolute w-full animate-fade-in-down">
            <div className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => {
                    setCurrentView(item.value);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left py-3 px-4 rounded-lg font-medium transition-colors ${currentView === item.value ? 'bg-slate-800 text-accent border-l-2 border-accent' : 'text-slate-400 hover:bg-slate-800/50'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow">
        {renderView()}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 py-16 border-t border-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
            {/* Column 1: Logo & Socials */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-accent border border-slate-700 overflow-hidden">
                    <IconAtom className="w-8 h-8" />
                 </div>
                 <div className="flex flex-col">
                    <span className="text-2xl font-bold text-white tracking-tight leading-none">GTS</span>
                    <span className="text-[10px] uppercase tracking-widest text-slate-500">Software</span>
                 </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Liderando a revolução digital com software de alta performance. 
                Na GTS, não escrevemos apenas código; construímos o futuro dos negócios globais.
              </p>
              
              {/* Social Icons */}
              <div className="flex gap-4 pt-2">
                <a 
                  href="https://www.facebook.com/profile.php?id=61572617272883" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:bg-[#1877F2] hover:text-white transition-all transform hover:scale-110 border border-slate-800"
                  title="Facebook"
                >
                  <IconFacebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/gts-globaltechsoftware/?viewAsMember=true" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-slate-400 hover:bg-[#0A66C2] hover:text-white transition-all transform hover:scale-110 border border-slate-800"
                  title="LinkedIn"
                >
                  <IconLinkedIn className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/global_tech_software/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-slate-400 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 hover:text-white transition-all transform hover:scale-110 border border-slate-800"
                  title="Instagram"
                >
                  <IconInstagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://x.com/GTSsoftware" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:bg-black hover:text-white transition-all transform hover:scale-110 border border-slate-800"
                  title="Twitter / X"
                >
                  <IconTwitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Column 2: Contact Info */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                Contato
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-400 group">
                  <div className="mt-1 text-accent group-hover:text-white transition-colors">
                    <IconMapPin className="w-5 h-5" />
                  </div>
                  <span className="text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                    Empresa Internacional<br/>Atendimento Global
                  </span>
                </li>
                <li className="flex items-center gap-3 text-slate-400 group">
                  <div className="text-accent group-hover:text-white transition-colors">
                    <IconPhone className="w-5 h-5" />
                  </div>
                  <span className="text-sm group-hover:text-slate-300 transition-colors">
                    +55 (13) 99610-4848
                  </span>
                </li>
                <li className="flex items-center gap-3 text-slate-400 group">
                  <div className="text-accent group-hover:text-white transition-colors">
                    <IconMail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col text-sm">
                     <a href="mailto:financeiro@gts-software.com" className="hover:text-accent transition-colors">financeiro@gts-software.com</a>
                     <a href="mailto:sales@gts-software.com" className="hover:text-accent transition-colors">sales@gts-software.com</a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Column 3: Business Hours */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                Horário de Atendimento
              </h4>
              <div className="flex items-start gap-3 text-slate-400 group">
                  <div className="mt-1 text-accent group-hover:text-white transition-colors">
                    <IconClock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1 group-hover:text-accent transition-colors">Segunda a Sexta</p>
                    <p className="text-sm">09:00 - 18:00</p>
                  </div>
              </div>
              <div className="mt-6 p-4 bg-slate-900 rounded-lg border border-slate-800">
                 <p className="text-xs text-slate-500 text-center">
                   Suporte técnico emergencial disponível 24/7 para clientes com plano Enterprise.
                 </p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-xs">
            <span>&copy; {new Date().getFullYear()} GTS - Global Tech Software. Todos os direitos reservados.</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Sistemas Operacionais
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;