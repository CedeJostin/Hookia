export async function POST(request) {
  const { message } = await request.json();
  const { parte1, parte2, parte3 } = message;

  // Log de la solicitud
  console.log('Solicitud recibida:', message);

  return new Response(JSON.stringify({ status: 'success' }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // Permite solicitudes de cualquier dominio
      'Access-Control-Allow-Methods': 'POST', // Asegúrate de permitir el método POST
    },
  });
}
