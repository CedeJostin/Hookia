import { NextResponse } from 'next/server';

let clients = []; // Almacena los clientes conectados

export async function GET() {
  const stream = new ReadableStream({
    start(controller) {
      // Agregar el cliente a la lista
      clients.push(controller);

      // Enviar un ping cada 30 segundos para mantener la conexión
      const interval = setInterval(() => {
        controller.enqueue(new TextEncoder().encode(`data: ${JSON.stringify({ message: 'ping' })}\n\n`));
      }, 30000);

      // Limpiar al cerrar la conexión
      return () => {
        clearInterval(interval);
        clients = clients.filter((client) => client !== controller);
      };
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}

export async function POST(request) {
  const { message } = await request.json();

  // Enviar el mensaje a todos los clientes conectados
  clients.forEach((client) => {
    client.enqueue(new TextEncoder().encode(`data: ${JSON.stringify({ message })}\n\n`));
  });

  return NextResponse.json({ status: 'success' });
}