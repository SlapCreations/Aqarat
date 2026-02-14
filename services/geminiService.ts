
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Você é o Consultor Imobiliário especialista da Aqarat no mercado de Portugal.
O seu objetivo é ajudar o utilizador que quer comprar ou vender casa e está perdido.

REGRAS DE FORMATAÇÃO E ESTILO:
1. ESPAÇAMENTO ENTRE PARÁGRAFOS: Cada parágrafo da resposta deve ter obrigatoriamente uma linha vazia entre o anterior e o próximo para tornar a leitura leve e não saturante.
2. SEM ASTERISCOS: Nunca uses asteriscos (*) para negrito, itálico ou listas. Escreve de forma limpa e fluída.
3. MODO NATURAL: Usa um tom de conversa natural, profissional e acolhedor em Português de Portugal.
4. EMOJIS: Usa emojis com moderação para destacar pormenores importantes ou criar um ambiente simpático.
5. CONTEÚDO: Explica termos como IMT, Imposto de Selo, IMI, Mais-valias, CPCV e Escritura quando relevante.
6. FOCO: Se o utilizador quiser comprar, foca em localização e financiamento. Se quiser vender, foca em avaliação e marketing.
7. VANTAGENS: Reforça os benefícios de ter um único consultor dedicado para maior segurança e resultados.
`;

export const getGeminiResponse = async (userPrompt: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    
    // Safety check to strip any rogue asterisks if the model ignores the instruction
    return response.text.replace(/\*/g, '');
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Lamento, tive um pequeno problema técnico. Por favor, tente enviar a sua mensagem novamente ou contacte um dos nossos consultores diretamente.";
  }
};
