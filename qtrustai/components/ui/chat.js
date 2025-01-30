"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [conversationId, setConversationId] = useState('');

  // Generar un ID de conversación único al montar el componente
  useEffect(() => {
    const id = uuidv4();
    setConversationId(id);
  }, []);

  // Función para enviar un mensaje
  const sendMessage = async (e) => {
    e.preventDefault();

    if (!inputMessage.trim()) return;

    try {
      const messageData = {
        message: {
          parte1: inputMessage,
          idrandom: conversationId,
        },
      };

      // Enviar el mensaje a n8n
      const response = await axios.post(
        'https://n8n-g.onrender.com/webhook/08ed44bc-955c-46ff-a703-277f5d0a8551',
        messageData
      );

      if (response.status === 200) {
        // Agregar el mensaje enviado al chat
        setMessages((prev) => [
          ...prev,
          { text: inputMessage, sent: true },
        ]);
        setInputMessage('');
      }
    } catch (error) {
      console.error('Error enviando el mensaje:', error);
    }
  };

  // Configurar la conexión SSE
  useEffect(() => {
    const setupSSE = () => {
      const eventSource = new EventSource('https://q-trust-ai.vercel.app/api/chat-events');

      eventSource.onmessage = (event) => {
        if (event.data === ': keep-alive') return;

        const data = JSON.parse(event.data);
        const { parte1, parte2, parte3 } = data.message;

        // Agregar cada parte del mensaje al chat
        if (parte1) {
          setMessages((prev) => [
            ...prev,
            { text: parte1, sent: false },
          ]);
        }
        if (parte2) {
          setMessages((prev) => [
            ...prev,
            { text: parte2, sent: false },
          ]);
        }
        if (parte3) {
          setMessages((prev) => [
            ...prev,
            { text: parte3, sent: false },
          ]);
        }
      };

      eventSource.onerror = (error) => {
        console.error('Error en SSE:', error);
        eventSource.close();
        setTimeout(setupSSE, 1000); // Reconectar después de 1 segundo
      };

      return () => eventSource.close();
    };

    setupSSE();
  }, [conversationId]);

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="p-4">
        <div className="bg-gray-50 rounded-lg mb-4 min-h-[300px] max-h-[500px] overflow-y-auto p-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 p-2 rounded-lg ${
                msg.sent
                  ? 'bg-primary text-primary-foreground ml-auto'
                  : 'bg-muted'
              } max-w-[80%]`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <form onSubmit={sendMessage} className="flex gap-2">
          <Input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Escribe un mensaje..."
            className="flex-1"
          />
          <Button type="submit">Enviar</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ChatComponent;