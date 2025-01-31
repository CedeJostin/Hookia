// app/api/respuestaFinal/route.js
const responseMap = new Map();

export async function POST(request) {
  try {
    const { conversationId, response } = await request.json();
    
    if (!conversationId || !response) {
      return new Response(JSON.stringify({ error: 'Datos incompletos' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Almacenar respuesta temporalmente (en producción usar DB)
    responseMap.set(conversationId, response);
    
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

// Endpoint para verificar respuestas
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

export const dynamic = 'force-dynamic';