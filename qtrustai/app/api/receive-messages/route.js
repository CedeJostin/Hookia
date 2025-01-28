import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Agregar headers CORS
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };

    // Si es una solicitud OPTIONS (preflight), responder inmediatamente
    if (request.method === 'OPTIONS') {
      return NextResponse.json({}, { headers });
    }

    const body = await request.json();
    
    // Validar que el mensaje tenga la estructura esperada
    if (!body.message) {
      return NextResponse.json(
        { error: 'El formato del mensaje es inválido' },
        { status: 400, headers }
      );
    }
    
    // Procesa el mensaje aquí
    console.log('Mensaje recibido:', body.message);

    return NextResponse.json(
      { success: true, message: 'Mensaje recibido correctamente' },
      { headers }
    );
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Error procesando el mensaje' },
      { status: 500, headers: {
        'Access-Control-Allow-Origin': '*',
      }}
    );
  }
}

// Configurar los métodos HTTP permitidos
export const config = {
  api: {
    bodyParser: true,
  },
};

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