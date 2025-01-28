import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Procesa el mensaje aquí
    console.log('Mensaje recibido:', body.message);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Error procesando el mensaje' },
      { status: 500 }
    );
  }
}

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
        if (controller.desiredSize !== null) {
          controller.enqueue(encoder.encode('event: ping\ndata: ping\n\n'));
        } else {
          clearInterval(interval);
        }
      }, 30000);

      // Limpiar el intervalo cuando se cierre la conexión
      controller.closed.then(() => clearInterval(interval));
    }
  });

  return new Response(stream, {
    headers: customHeaders,
  });
}