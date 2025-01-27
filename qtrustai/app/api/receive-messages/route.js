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
