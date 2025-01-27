export async function POST(request) {
  const { message } = await request.json();
  const { parte1, parte2, parte3 } = message;

  // Procesa los datos recibidos
  console.log('Parte 1:', parte1);
  console.log('Parte 2:', parte2);
  console.log('Parte 3:', parte3);

  return new Response(JSON.stringify({ status: 'success' }), {
    headers: { 'Content-Type': 'application/json' },
  });
}