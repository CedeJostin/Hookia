export async function POST(request) {
    try {
      const { conversationId, message } = await request.json();
  
      // Enviar a n8n
      fetch('https://n8n-g.onrender.com/webhook/08ed44bc-955c-46ff-a703-277f5d0a8551', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          conversationId,
          message: message.content,
          callbackUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/respuestaFinal`
        })
      });
  
      return new Response(JSON.stringify({ 
        status: 'processing',
        conversationId 
      }), {
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }