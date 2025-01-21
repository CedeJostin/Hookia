// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// Configurar CORS
app.use(cors());
app.use(bodyParser.json());

// Ruta para recibir mensajes de n8n
app.post('/api/receive-message', (req, res) => {
  const message = req.body;
  console.log('Mensaje recibido:', message);
  
  // Aquí puedes emitir el mensaje a los clientes conectados
  // usando WebSocket o SSE si lo necesitas
  
  res.status(200).json({ status: 'Mensaje recibido correctamente' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});