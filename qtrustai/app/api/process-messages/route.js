export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const { message } = await request.json();

    // 1. Enviar mensaje a n8n (tu webhook)
    const n8nResponse = await fetch('https://n8n-g.onrender.com/webhook/08ed44bc-955c-46ff-a703-277f5d0a8551', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });

    // 2. Esperar respuesta de n8n (simulando 8s de procesamiento)
    const processedData = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          parte1: "Respuesta 1",
          parte2: "Respuesta 2",
          parte3: "Respuesta 3"
        });
      }, 10000);
    });

    // 3. Devoler todas las partes juntas
    return new Response(JSON.stringify(processedData), {
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: "Error procesando mensaje" }), {
      status: 500
    });
  }
}