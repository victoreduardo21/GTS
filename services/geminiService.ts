import { GoogleGenAI, Type } from "@google/genai";
import { LeadAnalysis } from '../types';

export const analyzeLeadWithGemini = async (
  name: string,
  message: string
): Promise<LeadAnalysis> => {
  // Use process.env.API_KEY directly. Vite replaces this with the string value at build time.
  // We avoid 'typeof process' checks because they can prevent the replacement in browser environments.
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    console.warn("API Key not found. Using mock response.");
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