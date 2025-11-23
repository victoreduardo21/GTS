import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("ERRO CRÍTICO: Elemento 'root' não encontrado no HTML.");
} else {
  try {
    const root = ReactDOM.createRoot(rootElement);
    // Removido StrictMode temporariamente para simplificar o debug se necessário
    root.render(<App />);
    console.log("Aplicação GTS montada com sucesso.");
  } catch (error) {
    console.error("ERRO FATAL ao renderizar a aplicação:", error);
    rootElement.innerHTML = `<div style="color: white; padding: 20px;">Erro ao carregar aplicação: ${error}</div>`;
  }
}