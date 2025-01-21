import { headers } from 'next/headers';

export const runtime = 'edge';

export async function GET() {
  const encoder = new TextEncoder();
  const customHeaders = {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
  };

  const stream = new ReadableStream({
    start(controller) {
      // Mantener la conexión viva
      const interval = setInterval(() => {
        controller.enqueue(encoder.encode('event: ping\ndata: ping\n\n'));
      }, 30000);

      // Limpiar el intervalo cuando se cierre la conexión
      return () => clearInterval(interval);
    }
  });

  return new Response(stream, {
    headers: customHeaders,
  });
}