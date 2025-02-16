"use client";

import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // Usamos un conversationId único para cada sesión de chat
  const [conversationId] = useState(() => uuidv4());

  useEffect(() => {
    let intervalId;
    let timeoutId;

    const checkResponse = async () => {
      try {
        const response = await fetch(`/api/respuestaFinal?conversationId=${conversationId}`);
        const data = await response.json();
        console.log("[Polling] Datos recibidos:", data);

        if (data.status === 'completed' && data.message) {
          // Se espera que data.message sea un objeto con propiedades (ej: parte1, parte2, parte3)
          const parts = Object.values(data.message);
          setMessages(prev => [
            ...prev.filter(msg => msg.text !== '...'),
            { text: parts.join('\n'), sent: false }
          ]);
          setIsLoading(false);
          clearInterval(intervalId);
        }
      } catch (error) {
        console.error('Error polling:', error);
        setIsLoading(false);
        setMessages(prev => [
          ...prev.filter(msg => msg.text !== '...'),
          { text: '⚠️ Error al obtener respuesta', sent: false }
        ]);
      }
    };

    if (isLoading) {
      intervalId = setInterval(checkResponse, 1000);
      timeoutId = setTimeout(() => {
        clearInterval(intervalId);
        setIsLoading(false);
        setMessages(prev => [
          ...prev.filter(msg => msg.text !== '...'),
          { text: '⚠️ Tiempo de espera agotado', sent: false }
        ]);
      }, 30000);
    }

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [isLoading, conversationId]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    setIsLoading(true);
    setMessages(prev => [
      ...prev,
      { text: inputMessage, sent: true },
      { text: '...', sent: false }
    ]);
    setInputMessage('');

    try {
      await fetch('/api/process-messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          conversationId,
          message: { content: inputMessage }
        })
      });
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      setMessages(prev => [
        ...prev.filter(msg => msg.text !== '...'),
        { text: '⚠️ Error de conexión', sent: false }
      ]);
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto h-[350px] flex flex-col">
      <CardHeader className="py-3">
        <CardTitle>Chat con Hookia</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.sent ? "justify-end" : "justify-start"}`}>
            <div
              className={`rounded-lg px-4 py-2 ${message.sent ? "bg-blue-600 text-white" : "bg-gray-200 text-black"}`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter className="p-4">
        <div className="flex w-full space-x-2">
          <Input
            type="text"
            placeholder="Escribe tu mensaje..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage(e)}
            className="text-black flex-1"
          />
          <Button onClick={handleSendMessage}>Enviar</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ChatComponent;
