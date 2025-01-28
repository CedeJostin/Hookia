"use client"

import { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'; // Necesitarás instalar uuid con `npm install uuid`
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [conversationId, setConversationId] = useState('');

  useEffect(() => {
    const id = uuidv4();
    setConversationId(id);
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    
    try {
      const messageData = {
        message: {
          parte1: inputMessage,
          idrandom: conversationId,
        }
      };

      const response = await axios.post(
        'https://n8n-g.onrender.com/webhook-test/08ed44bc-955c-46ff-a703-277f5d0a8551',
        messageData
      );

      if (response.status === 200) {
        setMessages(prev => [...prev, { text: inputMessage, sent: true }]);
        setInputMessage('');
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Función para establecer Server-Sent Events (SSE)
  useEffect(() => {
    const setupSSE = () => {
      const eventSource = new EventSource('https://q-trust-ai.vercel.app/api/receive-messages');

      eventSource.onmessage = (event) => {
        const data = JSON.parse(event.data);
        setMessages(prev => [...prev, { text: data.message.parte1, sent: false }]);
      };

      eventSource.onerror = (error) => {
        console.error('SSE Error:', error);
        eventSource.close();
      };

      return () => eventSource.close();
    };

    setupSSE();
  }, []);

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
          <Button type="submit">
            Enviar
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ChatComponent;