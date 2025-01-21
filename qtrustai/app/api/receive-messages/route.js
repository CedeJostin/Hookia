import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Aquí puedes procesar el mensaje recibido
    console.log('Mensaje recibido:', body);
    
    return NextResponse.json({ status: 'ok' }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Error processing message' }, { status: 500 });
  }
}