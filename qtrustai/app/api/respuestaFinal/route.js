let responseMap = new Map();

export async function POST(request) {
  try {
    const { conversationId, message } = await request.json();
    responseMap.set(conversationId, message);
    
    return new Response(JSON.stringify({ status: 'ok' }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const conversationId = searchParams.get('conversationId');
  
  const response = responseMap.get(conversationId);
  
  if (!response) {
    return new Response(JSON.stringify({ status: 'processing' }), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  responseMap.delete(conversationId); // Limpiar después de entregar
  return new Response(JSON.stringify({
    status: 'completed',
    message: response
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}