export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const { conversationId, message } = await request.json();

    if (!conversationId || typeof conversationId !== 'string') {
      return new Response(JSON.stringify({ error: 'ID de conversación inválido' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!message || typeof message !== 'object') {
      return new Response(JSON.stringify({ error: 'Formato de mensaje inválido' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 1. Enviar mensaje a n8n SIN esperar respuesta (para mejorar el rendimiento)
    fetch('https://n8n-g.onrender.com/webhook/08ed44bc-955c-46ff-a703-277f5d0a8551', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        conversationId,
        message,
        callbackUrl: 'https://q-trust-ai.vercel.app/api/respuestaFinal' // Aquí n8n enviará la respuesta final
      })
    }).catch(error => console.error('Error enviando a n8n:', error));

    // 2. Responder rápido al usuario
    return new Response(JSON.stringify({
      status: "processing",
      conversationId
    }), {
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error en proceso:', error);
    return new Response(JSON.stringify({ 
      error: "Error procesando mensaje",
      details: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
