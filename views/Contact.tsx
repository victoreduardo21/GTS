import React, { useState, useEffect } from 'react';
import { analyzeLeadWithGemini } from '../services/geminiService';
import { ContactSubmission, LeadAnalysis } from '../types';
import { IconLoader, IconCheck } from '../components/Icons';

const Contact: React.FC = () => {
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  
  // "Fake Backend" State
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [showDatabase, setShowDatabase] = useState(false);

  // Load existing "database" from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('techNovaSubmissions');
    if (saved) {
      setSubmissions(JSON.parse(saved));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess(false);

    try {
      // 1. Analyze with Gemini AI
      // In a real app, this might happen on a serverless function before saving to DB/Sheets
      const analysis: LeadAnalysis = await analyzeLeadWithGemini(name, message);

      // 2. Create Submission Record
      const newSubmission: ContactSubmission = {
        id: Math.random().toString(36).substring(7),
        name,
        email,
        message,
        timestamp: new Date().toLocaleString('pt-BR'),
        aiAnalysis: analysis
      };

      // 3. "Save to Database" (Local Simulation)
      const updatedSubmissions = [newSubmission, ...submissions];
      setSubmissions(updatedSubmissions);
      localStorage.setItem('techNovaSubmissions', JSON.stringify(updatedSubmissions));

      // 4. Reset UI
      setName('');
      setEmail('');
      setMessage('');
      setSuccess(true);
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearDatabase = () => {
    if(confirm("Tem certeza que deseja limpar o banco de dados local?")) {
      setSubmissions([]);
      localStorage.removeItem('techNovaSubmissions');
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Contact Form Section */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-6">Vamos Conversar</h2>
          <p className="text-slate-400 mb-8">
            Preencha o formulário abaixo para iniciar seu projeto. Nossa IA irá pré-analisar sua solicitação para direcioná-la ao especialista correto.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6 bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Nome Completo</label>
              <input 
                type="text" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                placeholder="Ex: João Silva"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Email Corporativo</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                placeholder="Ex: joao@empresa.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Sobre seu Projeto</label>
              <textarea 
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
                placeholder="Descreva brevemente o que você precisa..."
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full py-4 rounded-lg font-bold text-white transition-all flex items-center justify-center gap-2
                ${isSubmitting ? 'bg-slate-700 cursor-not-allowed' : 'bg-accent hover:bg-accentHover shadow-lg shadow-accent/25'}
              `}
            >
              {isSubmitting ? (
                <>
                  <IconLoader className="animate-spin w-5 h-5" />
                  Processando com IA...
                </>
              ) : success ? (
                <>
                  <IconCheck className="w-5 h-5" />
                  Enviado com Sucesso!
                </>
              ) : (
                "Enviar Mensagem"
              )}
            </button>
            
            {success && (
              <p className="text-center text-emerald-400 text-sm mt-4 animate-pulse">
                Sua mensagem foi recebida e classificada pelo nosso sistema.
              </p>
            )}
          </form>
        </div>

        {/* "Database" Simulation Section */}
        <div className="lg:pl-8 space-y-8">
           <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-2">Nota Técnica: Backend & Planilhas</h3>
              <p className="text-slate-400 text-sm mb-4">
                Você perguntou sobre salvar dados em uma planilha. Em um ambiente de produção real, utilizaríamos a <strong>Google Sheets API</strong> ou um serviço como <strong>Zapier</strong> para enviar esses dados automaticamente para sua planilha do Google Drive.
              </p>
              <p className="text-slate-400 text-sm">
                Como este é um site demonstrativo, simulamos esse comportamento abaixo. Quando você envia o formulário, nossa IA (Gemini) analisa o conteúdo e "salva" em uma tabela local visível aqui.
              </p>
           </div>

           <div className="border border-slate-700 rounded-xl overflow-hidden bg-slate-900">
              <div className="p-4 bg-slate-800 flex justify-between items-center border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <span className="font-mono text-sm font-bold text-slate-200">Simulação de Planilha / CRM</span>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setShowDatabase(!showDatabase)}
                    className="text-xs text-accent hover:text-white underline"
                  >
                    {showDatabase ? "Ocultar Dados" : "Mostrar Dados"}
                  </button>
                  {showDatabase && (
                     <button onClick={clearDatabase} className="text-xs text-red-400 hover:text-red-300">Limpar</button>
                  )}
                </div>
              </div>
              
              {showDatabase ? (
                <div className="overflow-x-auto spreadsheet-scroll max-h-[500px]">
                  <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead className="bg-slate-950 text-slate-400 font-mono uppercase text-xs">
                      <tr>
                        <th className="px-4 py-3">Data</th>
                        <th className="px-4 py-3">Nome</th>
                        <th className="px-4 py-3">Sentimento (IA)</th>
                        <th className="px-4 py-3">Categoria (IA)</th>
                        <th className="px-4 py-3">Prioridade (IA)</th>
                        <th className="px-4 py-3">Resumo (IA)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      {submissions.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="px-4 py-8 text-center text-slate-500 italic">
                            Nenhum dado recebido ainda. Preencha o formulário ao lado.
                          </td>
                        </tr>
                      ) : (
                        submissions.map((sub) => (
                          <tr key={sub.id} className="hover:bg-slate-800/50 transition-colors">
                            <td className="px-4 py-3 text-slate-400">{sub.timestamp}</td>
                            <td className="px-4 py-3 text-white font-medium">{sub.name}</td>
                            <td className="px-4 py-3">
                              <span className={`px-2 py-0.5 rounded text-xs border 
                                ${sub.aiAnalysis?.sentiment === 'Positive' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 
                                  sub.aiAnalysis?.sentiment === 'Negative' ? 'bg-red-500/10 border-red-500/30 text-red-400' : 
                                  'bg-slate-700 text-slate-300'}`}>
                                {sub.aiAnalysis?.sentiment}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-slate-300">{sub.aiAnalysis?.category}</td>
                            <td className="px-4 py-3">
                               <span className={`font-bold 
                                ${sub.aiAnalysis?.priority === 'High' ? 'text-red-400' : 
                                  sub.aiAnalysis?.priority === 'Medium' ? 'text-amber-400' : 
                                  'text-blue-400'}`}>
                                {sub.aiAnalysis?.priority}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-slate-400 max-w-xs truncate" title={sub.aiAnalysis?.summary}>
                              {sub.aiAnalysis?.summary}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="p-12 text-center text-slate-500 text-sm">
                  Clique em "Mostrar Dados" para visualizar a tabela de leads processados pela IA.
                </div>
              )}
           </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;