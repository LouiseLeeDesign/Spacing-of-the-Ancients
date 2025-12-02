import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedContent } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateEraText = async (eraName: string): Promise<GeneratedContent | null> => {
  if (!apiKey) {
    console.warn("No API Key provided");
    return null;
  }

  const prompt = `
    You are an expert historian of Chinese literature.
    Generate a short excerpt of classical Chinese text (approx 40-60 characters) that is historically representative of the "${eraName}" period.
    Also provide the English translation and a title.
    Do not use markdown formatting in the JSON fields.
    Return strictly JSON.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            body: { type: Type.STRING },
            translation: { type: Type.STRING }
          },
          required: ["title", "body", "translation"]
        }
      }
    });

    const text = response.text;
    if (!text) return null;
    return JSON.parse(text) as GeneratedContent;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return null;
  }
};
