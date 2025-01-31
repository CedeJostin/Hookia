// components/ChatComponent.jsx
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

  useEffect(() => {
    setConversationId(uuidv4());
  }, []);

  // Polling para verificar respuestas
  useEffect(() => {
    if (!conversationId) return;

    const interval = setInterval(async () => {
      try {
        const response = await fetch(`/api/respuestaFinal?conversationId=${conversationId}`);
        const data = await response.json();
        
        if (data.status === 'completed' && data.message) {
          setMessages(prev => [
            ...prev.filter(msg => msg.text !== '...'),
            { 
              text: data.message.content || Object.values(data.message.parts).join('\n'),
              sent: false
            }
          ]);
        }
      } catch (error) {
        console.error('Error polling:', error);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [conversationId]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading || !conversationId) return;

    setIsLoading(true);
    setInputMessage('');
    
    try {
      // Mensaje optimista del usuario
      setMessages(prev => [...prev, { text: inputMessage, sent: true }]);
      
      // Mensaje de carga del bot
      setMessages(prev => [...prev, { text: '...', sent: false }]);

      const response = await fetch('/api/process-messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          conversationId,
          message: {
            content: inputMessage,
            timestamp: new Date().toISOString()
          }
        })
      });

      if (!response.ok) throw new Error('Error en el servidor');
      
      const data = await response.json();
      
      if (data.status !== "processing") {
        throw new Error('Estado inesperado');
      }

    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [
        ...prev.filter(msg => msg.text !== '...'),
        { text: "⚠️ Error de conexión", sent: false }
      ]);
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
              className={`mb-2 p-2 rounded-lg whitespace-pre-line ${
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