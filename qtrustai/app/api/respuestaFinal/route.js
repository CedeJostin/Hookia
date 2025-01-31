export async function GET(request) {
    try {
      const { searchParams } = new URL(request.url);
      const conversationId = searchParams.get('conversationId');
      
      if (!conversationId) {
        return new Response(JSON.stringify({ 
          error: 'ID de conversación requerido',
          status: 400
        }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
  
      const response = responseMap.get(conversationId);
      
      if (!response) {
        return new Response(JSON.stringify({
          status: "processing",
          message: null
        }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }
  
      return new Response(JSON.stringify({
        status: "completed",
        message: response
      }), {
        headers: { 'Content-Type': 'application/json' }
      });
  
    } catch (error) {
      console.error('Error en GET /api/respuestaFinal:', error);
      return new Response(JSON.stringify({ 
        error: "Error interno del servidor",
        details: error.message 
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }