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

export const runtime = 'edge';

export async function GET() {
  const encoder = new TextEncoder();
  
  return new Response(
    new ReadableStream({
      start(controller) {
        controller.enqueue(encoder.encode('event: connected\ndata: {"status":"connected"}\n\n'));
        
        const interval = setInterval(() => {
          controller.enqueue(encoder.encode('event: ping\ndata: {"time":"' + new Date().toISOString() + '"}\n\n'));
        }, 15000);

        return () => {
          clearInterval(interval);
        };
      }
    }), {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    }
  );
}