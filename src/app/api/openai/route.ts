import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY ?? "",
});

export async function POST(request: Request) {
  try {
    const { platform, tone, bio } = await request.json();
    const messages = [
      {
        role: "system",
        content: `Eres un asistente que optimiza biografías según plataforma y tono. Devuelve siempre un objeto JSON con esta forma:
      { "platform": "string", "tone": "string", "originalBio": "string", "variations": ["string","string","string"] },`,
      },
      {
        role: "user",
        content: `Optimiza la siguiente biografía para la plataforma ${platform} con tono ${tone}: ${bio}`,
      },
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
    });

    const response = completion.choices[0]?.message?.content || "";
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}
