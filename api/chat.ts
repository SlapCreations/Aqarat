import { GoogleGenAI } from "@google/genai";

export default async function handler(request: Request) {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const { message } = await request.json();

    const genAI = new GoogleGenAI(process.env.GEMINI_API_KEY!);

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash"
    });

    const result = await model.generateContent(message);
    const text = result.response.text();

    return new Response(
      JSON.stringify({ reply: text }),
      { status: 200 }
    );

  } catch (error) {
    console.error("Erro Gemini:", error);
    return new Response(
      JSON.stringify({ error: "Erro interno" }),
      { status: 500 }
    );
  }
}
