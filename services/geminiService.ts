
import { GoogleGenAI } from "@google/genai";
import { Message, Language } from "../types";
import { BIO, PROJECTS, SKILLS } from "../constants";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const getSystemInstruction = (lang: Language) => `
You are the "Digital Twin" of a world-class Software Engineer. 
Your background: ${BIO[lang]}
Your projects: ${JSON.stringify(PROJECTS.map(p => ({ title: p.title[lang], description: p.description[lang], tags: p.tags })))}
Your skills: ${JSON.stringify(SKILLS)}

Current Language Preference: ${lang === 'zh' ? 'Chinese' : 'English'}. 
ALWAYS respond in the language the user is currently using or based on this preference.

Tone: Professional, friendly, and helpful. 
Goal: Help recruiters and collaborators learn more about "me". 
Answer questions about my work history, technical stacks, and philosophy. 
If asked something outside of professional scope, politely steer the conversation back to tech and career.
Keep responses concise and engaging. Use Markdown for formatting (lists, bolding, code blocks).
`;

export const chatWithTwin = async (history: Message[], userInput: string, lang: Language) => {
  try {
    if (!apiKey) {
      throw new Error("API Key is missing");
    }

    const response = await ai.models.generateContent({
      model: 'gemini-1.5-flash',
      contents: [
        { role: 'user', parts: [{ text: `Background Info: ${getSystemInstruction(lang)}` }] },
        ...history.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        { role: 'user', parts: [{ text: userInput }] }
      ],
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });

    return response.text || (lang === 'zh' ? "抱歉，我现在处理信息有点困难。" : "I'm sorry, I'm having trouble processing that right now.");
  } catch (error) {
    console.error("Gemini API Error:", error);
    if (!apiKey) {
      return lang === 'zh' ? "API Key 未配置。请在 .env.local 中设置 VITE_GEMINI_API_KEY。" : "API Key missing. Please set VITE_GEMINI_API_KEY in .env.local.";
    }
    return lang === 'zh' ? "数字分身目前离线。请稍后再试。" : "The Digital Twin is currently offline. Please try again later.";
  }
};
