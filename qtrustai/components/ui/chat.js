"use client";

import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState('');

  // Generar ID único al montar el componente
  useEffect(() => {
    const newConversationId = uuidv4();
    setConversationId(newConversationId);
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading || !conversationId) return;

    setIsLoading(true);

    try {
      // Agregar mensaje del usuario inmediatamente
      setMessages(prev => [...prev, { text: inputMessage, sent: true }]);
      
      // Enviar mensaje con ID de conversación
      const response = await fetch('https://q-trust-ai.vercel.app/api/process-messages', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          conversationId,
          message: {
            content: inputMessage,
            timestamp: new Date().toISOString()
          }
        })
      });

      if (!response.ok) throw new Error('Error en la respuesta del servidor');
      
      const data = await response.json();

      // Actualizar el procesamiento de la respuesta
      if (data.parts) {
        const newMessages = Object.values(data.parts).map(text => ({
          text,
          sent: false
        }));
        setMessages(prev => [...prev, ...newMessages]);
      }

      setInputMessage('');

    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        text: "Error enviando el mensaje. Intenta nuevamente.", 
        sent: false 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

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
              } max-w-[80%] transition-all duration-200 ease-in-out`}
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
            disabled={isLoading}
          />
          <Button 
            type="submit" 
            disabled={isLoading}
            className="min-w-[100px]"
          >
            {isLoading ? 'Enviando...' : 'Enviar'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ChatComponent;