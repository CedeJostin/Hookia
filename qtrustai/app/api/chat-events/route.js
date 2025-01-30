// import { NextResponse } from 'next/server';

// // Variables globales para manejar conexiones
// const encoder = new TextEncoder();
// let clients = new Set();
// let activityInterval;

// export const dynamic = 'force-dynamic'; // Necesario para Vercel

// export async function GET() {
//   // Configurar headers SSE
//   const headers = {
//     'Content-Type': 'text/event-stream',
//     'Cache-Control': 'no-cache',
//     'Connection': 'keep-alive',
//     'Access-Control-Allow-Origin': '*' // Solo para desarrollo
//   };

//   const stream = new ReadableStream({
//     start(controller) {
//       // Registrar nuevo cliente
//       clients.add(controller);
      
//       // Enviar heartbeat cada 15s (dentro del límite de Vercel)
//       activityInterval = setInterval(() => {
//         controller.enqueue(encoder.encode('data: heartbeat\n\n'));
//       }, 15000);

//       // Limpieza al desconectar
//       return () => {
//         clearInterval(activityInterval);
//         clients.delete(controller);
//         controller.close();
//       };
//     }
//   });

//   return new Response(stream, { headers });
// }

// export async function POST(request) {
//   try {
//     // Validar y parsear datos
//     const { message } = await request.json();
//     if (!message || typeof message !== 'object') {
//       return NextResponse.json(
//         { error: 'Formato de mensaje inválido' },
//         { status: 400 }
//       );
//     }

//     // Crear payload SSE
//     const ssePayload = `data: ${JSON.stringify({ message })}\n\n`;
    
//     // Enviar a todos los clientes conectados
//     clients.forEach(client => {
//       try {
//         client.enqueue(encoder.encode(ssePayload));
//       } catch (error) {
//         console.error('Error enviando mensaje a cliente:', error);
//         clients.delete(client);
//       }
//     });

//     return NextResponse.json({ status: 'success' });

//   } catch (error) {
//     console.error('Error en POST:', error);
//     return NextResponse.json(
//       { error: 'Error procesando solicitud' },
//       { status: 500 }
//     );
//   }
// }