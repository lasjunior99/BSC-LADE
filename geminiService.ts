import { GoogleGenAI, Type } from "@google/genai";

/**
 * Recupera a API Key do ambiente Vite
 * (Vercel → Environment Variables)
 */
const getApiKey = () => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("Gemini API key is missing");
  }

  return apiKey;
};

/**
 * Inicializa o cliente Gemini de forma segura
 */
const getAI = () => {
  return new GoogleGenAI({
    apiKey: getApiKey(),
  });
};

/**
 * Analisa a Identidade Organizacional
 */
export const analyzeStrategicIdentity = async (identity: any) => {
  try {
    const ai = getAI();

    const prompt = `
Como um consultor estratégico sênior PNLADE, analise a seguinte Identidade Organizacional:

Propósito: ${identity.purpose}
Negócio: ${identity.business}
Missão: ${identity.mission}
Visão: ${identity.vision}
Valores: ${(identity.values || []).join(", ")}

Forneça uma análise crítica (hipóteses) sobre a coerência entre esses elementos
e sugira 3 indicadores (KPIs) de alto nível que poderiam medir o sucesso dessa estratégia.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 },
      },
    });

    return response.text;

  } catch (error) {
    console.error("Gemini Error:", error);
    return "Não foi possível gerar a análise no momento.";
  }
};

/**
 * Sugere KPIs para um objetivo estratégico específico
 */
export const suggestKPIsForObjective = async (objectiveName: string) => {
  try {
    const ai = getAI();

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Para o objetivo estratégico: "${objectiveName}", sugira uma lista de 3 KPIs detalhados no formato JSON.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING },
              description: { type: Type.STRING },
              methodology: { type: Type.STRING },
              polarity: {
                type: Type.STRING,
                description:
                  "Quanto maior melhor, Quanto menor melhor, ou Igual à meta",
              },
            },
            required: ["name", "description", "methodology", "polarity"],
          },
        },
      },
    });

    return JSON.parse(response.text);

  } catch (error) {
    console.error("Gemini Error:", error);
    return [];
  }
};

