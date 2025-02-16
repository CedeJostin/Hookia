// app/api/respuestaFinal/route.js

// Mapa en memoria para almacenar las respuestas recibidas desde n8n
let responseMap = new Map();

// Este endpoint recibe el callback desde n8n (POST)
export async function POST(request) {
  try {
    const { conversationId, message } = await request.json();
    console.log("[POST respuestaFinal] Recibido callback para conversationId:", conversationId, "con message:", message);

    // Almacena el mensaje recibido en el Map
    responseMap.set(conversationId, message);

    return new Response(JSON.stringify({ status: 'ok' }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error("[POST respuestaFinal] Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Este endpoint es consultado por el frontend para obtener la respuesta (GET)
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const conversationId = searchParams.get('conversationId');
    console.log("[GET respuestaFinal] Consultando para conversationId:", conversationId);

    const message = responseMap.get(conversationId);

    if (!message) {
      // Si no hay mensaje, aún se está procesando
      return new Response(JSON.stringify({ status: 'processing' }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Preparamos la respuesta
    const responseBody = JSON.stringify({
      status: 'completed',
      message: message
    });

    // Eliminamos el mensaje después de enviarlo, para evitar reenvíos
    responseMap.delete(conversationId);

    return new Response(responseBody, {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error("[GET respuestaFinal] Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
