import { GoogleGenAI, Type } from "@google/genai";
import { LeadAnalysis } from '../types';

export const analyzeLeadWithGemini = async (
  name: string,
  message: string
): Promise<LeadAnalysis> => {
  
  // Blindagem de segurança: Tenta acessar process.env.API_KEY de forma segura.
  // Se 'process' não estiver definido (ambiente de navegador puro), o catch evita o crash.
  let apiKey = '';
  try {
    // O Vite substituirá 'process.env.API_KEY' pelo valor real durante o build.
    // O 'try/catch' protege caso o código rode em um ambiente sem polyfill de Node.
    apiKey = process.env.API_KEY || '';
  } catch (e) {
    console.warn("Ambiente de execução não suporta process.env diretamente. Usando modo offline/mock.");
  }

  if (!apiKey) {
    console.warn("API Key not found or environment not configured. Using mock response.");
    return {
      sentiment: 'Neutral',
      category: 'Other',
      priority: 'Low',
      summary: 'Simulated analysis (No API Key).',
      actionItem: 'Check API configuration.'
    };
  }

  try {
    const ai = new GoogleGenAI({ apiKey: apiKey });
    
    const prompt = `
      Analyze the following contact form submission for a technology company website.
      Sender Name: ${name}
      Message: "${message}"

      Please provide a structured analysis in JSON format containing:
      - sentiment: (Positive, Neutral, Negative)
      - category: (Sales, Support, Partnership, Other)
      - priority: (High, Medium, Low) - Sales leads are High.
      - summary: A very brief summary (max 10 words).
      - actionItem: Recommended next step (e.g., "Schedule Demo", "Reply with pricing").
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            sentiment: { type: Type.STRING, enum: ['Positive', 'Neutral', 'Negative'] },
            category: { type: Type.STRING, enum: ['Sales', 'Support', 'Partnership', 'Other'] },
            priority: { type: Type.STRING, enum: ['High', 'Medium', 'Low'] },
            summary: { type: Type.STRING },
            actionItem: { type: Type.STRING },
          },
          required: ['sentiment', 'category', 'priority', 'summary', 'actionItem'],
        },
      },
    });

    if (response.text) {
      return JSON.parse(response.text) as LeadAnalysis;
    }
    
    throw new Error("No text returned from Gemini");

  } catch (error) {
    console.error("Error analyzing lead with Gemini:", error);
    return {
      sentiment: 'Neutral',
      category: 'Other',
      priority: 'Low',
      summary: 'Analysis failed.',
      actionItem: 'Review manually.'
    };
  }
};