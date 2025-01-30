let clients = new Set();
let messages = [];

export async function POST(request) {
  const { message } = await request.json();
  
  // Almacenar mensaje
  messages.push(message);
  
  // Notificar a todos los clientes conectados
  const data = JSON.stringify({ message });
  clients.forEach(client => client.enqueue(encoder.encode(`data: ${data}\n\n`)));
  
  return new Response(JSON.stringify({ status: 'success' }));
}

export async function GET() {
  const encoder = new TextEncoder();
  
  const stream = new ReadableStream({
    start(controller) {
      // Enviar historial de mensajes
      messages.forEach(msg => {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(msg)}\n\n`));
      });

      // Registrar nuevo cliente
      clients.add(controller);

      // Mantener conexión
      const keepAlive = setInterval(() => {
        controller.enqueue(encoder.encode(': keep-alive\n\n'));
      }, 30000);

      return () => {
        clearInterval(keepAlive);
        clients.delete(controller);
      };
    }
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    }
  });
}