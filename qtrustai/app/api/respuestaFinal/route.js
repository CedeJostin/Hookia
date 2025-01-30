export async function POST(request) {
    try {
      const { conversationId, message } = await request.json();
  
      console.log("Respuesta recibida:", message);
  
      // Guardar la respuesta en una base de datos o enviarla a un cliente WebSocket, etc.
  
      return new Response(JSON.stringify({
        status: "completed",
        conversationId,
        message
      }), {
        headers: { 'Content-Type': 'application/json' }
      });
  
    } catch (error) {
      console.error('Error en webhook de respuesta:', error);
      return new Response(JSON.stringify({ 
        error: "Error procesando respuesta",
        details: error.message 
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
  