
import { GoogleGenAI } from "@google/genai";

export const getGardenAdvice = async (userPrompt: string) => {
  try {
    // Inicialização robusta sempre buscando a chave atualizada
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `Você é o Bio-Assistente do "Roberto Jardinagem", um especialista sênior em infraestrutura verde e limpeza pesada de terrenos em Hortolândia, Sumaré e Campinas.
        
        Sua missão é:
        1. Tirar dúvidas técnicas de forma simples (ex: como manter a grama esmeralda verde, por que limpar terrenos evita pragas).
        2. Ser um consultor de vendas: Se o cliente falar sobre mato alto, destaque o perigo de escorpiões e multas da prefeitura.
        3. Focar nos serviços principais: Limpeza de calçada, quintal, terrenos/lotes e plantio de grama profissional.
        4. Agendamento: Sempre diga que o Roberto pode ir ao local fazer um orçamento exato e sem compromisso.
        
        Tom de voz: Profissional, confiável, rápido e muito educado.
        Regra de ouro: Toda resposta deve terminar com uma frase curta convidando para o WhatsApp, exemplo: "Quer que o Roberto dê uma olhada aí hoje mesmo?"`,
        temperature: 0.8, // Um pouco mais criativo para ser mais humano
        topK: 40,
        topP: 0.95,
      },
    });
    
    return response.text || "Estou pronto para ajudar com seu terreno! O que você precisa limpar hoje?";
  } catch (error) {
    console.error("Gemini Assistant Error:", error);
    return "Oi! Aqui é o assistente do Roberto. Tive um pequeno problema na conexão agora, mas o Roberto está online no WhatsApp para te atender agora mesmo. Vamos conversar por lá?";
  }
};
