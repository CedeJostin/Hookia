export async function POST(request) {
    try {
      const { conversationId, message } = await request.json(); // Cambiar 'response' por 'message'
      
      if (!conversationId || !message) {
        return new Response(JSON.stringify({ error: 'Datos incompletos' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
  
      // Validar estructura del mensaje
      if (!message.parte1 || typeof message.parte1 !== 'string') {
        return new Response(JSON.stringify({ 
          error: 'Formato inválido',
          details: 'Se requiere al menos parte1 en el mensaje' 
        }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
  
      // Crear respuesta combinada
      const fullResponse = {
        content: Object.values(message).join('\n'), // Une las partes con saltos de línea
        parts: message // Mantener estructura original
      };
  
      // Almacenar respuesta
      responseMap.set(conversationId, fullResponse);
      
      return new Response(JSON.stringify({ success: true }), {
        headers: { 'Content-Type': 'application/json' }
      });
      
    } catch (error) {
      console.error('Error handling final response:', error);
      return new Response(JSON.stringify({ error: "Processing failed" }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
  
  // Modificación en el GET para manejar el nuevo formato
  export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const conversationId = searchParams.get('conversationId');
    
    if (!conversationId) {
      return new Response(JSON.stringify({ error: 'ID requerido' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const response = responseMap.get(conversationId);
    
    return new Response(JSON.stringify({
      status: response ? 'completed' : 'processing',
      message: response || null
    }), {
      headers: { 'Content-Type': 'application/json' }
    });
  }