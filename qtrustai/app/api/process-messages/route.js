export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const { conversationId, message } = await request.json();

    // Validar campos requeridos
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

    // 1. Enviar mensaje a n8n con ID de conversación
    const n8nResponse = await fetch('https://n8n-g.onrender.com/webhook/08ed44bc-955c-46ff-a703-277f5d0a8551', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        conversationId,
        message
      })
    });

    // 2. Esperar y simular respuesta de n8n (ajustado a 8 segundos)
    const processedData = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          conversationId, // Incluir el ID en la respuesta
          parts: {
            parte1: "Respuesta procesada 1",
            parte2: "Respuesta procesada 2",
            parte3: "Respuesta procesada 3"
          },
          timestamp: new Date().toISOString()
        });
      }, 10000); // 8 segundos
    });

    // 3. Devoler respuesta estructurada
    return new Response(JSON.stringify(processedData), {
      headers: { 
        'Content-Type': 'application/json',
      }
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