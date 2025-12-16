import React, { useState, useEffect } from 'react';
import { ViewState } from './types';
import { IconMenu, IconX, IconAtom, IconFacebook, IconLinkedIn, IconInstagram, IconTwitter, IconMapPin, IconPhone, IconMail, IconClock, IconWhatsApp } from './components/Icons';

// Import Views
import Home from './views/Home';
import Services from './views/Services';
import Systems from './views/Systems';
import Contact from './views/Contact';
import Blog from './views/Blog';

// Adicionar tipagem para o gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Rastreamento de mudança de página para o Google Analytics
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_title: `GTS - ${currentView.charAt(0).toUpperCase() + currentView.slice(1)}`,
        page_path: `/${currentView === ViewState.HOME ? '' : currentView}`
      });
    }
    // Scroll to top on view change
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case ViewState.HOME: return <Home onChangeView={setCurrentView} />;
      case ViewState.SERVICES: return <Services />;
      case ViewState.SYSTEMS: return <Systems />;
      case ViewState.CONTACT: return <Contact />;
      case ViewState.BLOG: return <Blog />;
      default: return <Home onChangeView={setCurrentView} />;
    }
  };

  const navItems = [
    { label: 'Início', value: ViewState.HOME },
    { label: 'Serviços', value: ViewState.SERVICES },
    { label: 'Sistemas', value: ViewState.SYSTEMS },
    { label: 'Insights', value: ViewState.BLOG },
    { label: 'Contato', value: ViewState.CONTACT },
  ];

  return (
    <div className="min-h-screen bg-primary flex flex-col text-slate-900 font-sans relative">
      
      {/* Floating WhatsApp Button - Always Visible */}
      <a 
        href="https://wa.me/5513996104848?text=Olá, estou no site e gostaria de falar com um atendente." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.6)] hover:-translate-y-1 hover:scale-105 transition-all group"
        title="Fale conosco no WhatsApp"
      >
        <IconWhatsApp className="w-8 h-8 text-white group-hover:animate-pulse" />
        <span className="absolute -top-12 right-0 bg-white text-slate-900 text-xs font-bold py-2 px-4 rounded-xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap shadow-lg translate-y-2 group-hover:translate-y-0 border border-slate-100">
           Suporte Online
        </span>
      </a>

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-surface/90 backdrop-blur-xl border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          {/* Logo Area */}
          <div 
            onClick={() => setCurrentView(ViewState.HOME)}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full"></div>
              <div className="relative w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300 overflow-hidden shadow-sm">
                <IconAtom className="w-8 h-8 animate-spin-slow" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-slate-900 tracking-tighter leading-none group-hover:text-accent transition-colors">GTS</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] group-hover:text-slate-700">Software</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => setCurrentView(item.value)}
                className={`text-sm font-semibold transition-all relative py-1 hover:text-accent
                  ${currentView === item.value ? 'text-accent' : 'text-slate-600'}
                `}
              >
                {item.label}
                {currentView === item.value && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                )}
              </button>
            ))}
            <button 
              onClick={() => setCurrentView(ViewState.CONTACT)}
              className="px-6 py-2.5 bg-accent hover:bg-accentHover text-white text-sm font-bold rounded-lg transition-all shadow-lg shadow-accent/20 hover:shadow-xl hover:-translate-y-0.5"
            >
              Falar com Especialista
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600 hover:text-accent"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <IconX className="w-7 h-7" /> : <IconMenu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-surface border-b border-slate-200 absolute w-full animate-fade-in shadow-xl">
            <div className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => {
                    setCurrentView(item.value);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left py-4 px-6 rounded-xl font-bold text-lg transition-colors ${currentView === item.value ? 'bg-accent/10 text-accent' : 'text-slate-600 hover:bg-slate-100'}`}
                >
                  {item.label}
                </button>
              ))}
              <button
                 onClick={() => {
                   setCurrentView(ViewState.CONTACT);
                   setMobileMenuOpen(false);
                 }}
                 className="w-full py-4 mt-4 bg-accent text-white font-bold rounded-xl shadow-lg"
              >
                Falar com Especialista
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow">
        {renderView()}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 relative">
        <div className="container mx-auto px-6 md:px-12 relative z-10 py-16">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
            {/* Column 1: Logo & Socials */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-accent border border-slate-200">
                    <IconAtom className="w-6 h-6" />
                 </div>
                 <span className="text-2xl font-bold text-slate-900 tracking-tight">GTS Global Tech</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                Potencializamos negócios visionários com engenharia de software de alto nível e inteligência artificial proprietária.
              </p>
              
              {/* Social Icons */}
              <div className="flex gap-3 pt-2">
                <a href="https://www.facebook.com/profile.php?id=61572617272883" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-[#1877F2] hover:text-white transition-all border border-slate-100"><IconFacebook className="w-5 h-5" /></a>
                <a href="https://www.linkedin.com/company/gts-globaltechsoftware/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-[#0A66C2] hover:text-white transition-all border border-slate-100"><IconLinkedIn className="w-5 h-5" /></a>
                <a href="https://www.instagram.com/global_tech_software/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 hover:text-white transition-all border border-slate-100"><IconInstagram className="w-5 h-5" /></a>
                <a href="https://x.com/GTSsoftware" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-black hover:text-white transition-all border border-slate-100"><IconTwitter className="w-5 h-5" /></a>
              </div>
            </div>

            {/* Column 2: Quick Contact */}
            <div>
              <h4 className="text-slate-900 font-bold text-lg mb-6">Contato Rápido</h4>
              <ul className="space-y-4">
                <li>
                  <a href="https://wa.me/5513996104848" className="flex items-center gap-3 text-slate-500 hover:text-accent transition-colors group">
                    <IconPhone className="w-5 h-5 text-slate-400 group-hover:text-accent" />
                    +55 (13) 99610-4848
                  </a>
                </li>
                <li>
                  <a href="mailto:sales@gts-software.com" className="flex items-center gap-3 text-slate-500 hover:text-accent transition-colors group">
                    <IconMail className="w-5 h-5 text-slate-400 group-hover:text-accent" />
                    sales@gts-software.com
                  </a>
                </li>
                <li>
                  <a href="mailto:financeiro@gts-software.com" className="flex items-center gap-3 text-slate-500 hover:text-accent transition-colors group">
                    <IconMail className="w-5 h-5 text-slate-400 group-hover:text-accent" />
                    financeiro@gts-software.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Hours */}
            <div>
              <h4 className="text-slate-900 font-bold text-lg mb-6">Horário</h4>
              <div className="flex items-start gap-3 text-slate-500">
                  <IconClock className="w-5 h-5 text-slate-400 mt-1" />
                  <div>
                    <p className="font-medium text-slate-900">Segunda a Sexta</p>
                    <p className="text-sm">09:00 - 18:00</p>
                    <p className="text-xs text-tech mt-2 font-bold bg-tech/10 inline-block px-2 py-1 rounded">Suporte 24/7 (Contratos)</p>
                  </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-8 text-center text-slate-400 text-xs">
            &copy; {new Date().getFullYear()} GTS - Global Tech Software. Todos os direitos reservados.
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;