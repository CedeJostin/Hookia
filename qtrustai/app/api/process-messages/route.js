// app/api/process-messages/route.js
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
  
      // Enviar a n8n y olvidar (fire and forget)
      fetch('https://n8n-g.onrender.com/webhook/08ed44bc-955c-46ff-a703-277f5d0a8551', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          conversationId,
          message,
          callbackUrl: `${process.env.NEXTAUTH_URL}/api/respuestaFinal`
        })
      }).catch(error => console.error('Error enviando a n8n:', error));
  
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
  
  export const dynamic = 'force-dynamic';