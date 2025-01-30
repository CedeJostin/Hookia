"use client";

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

  // Generate a unique conversation ID on component mount
  useEffect(() => {
    const id = uuidv4();
    setConversationId(id);
  }, []);

  // Function to send a message
  const sendMessage = async (e) => {
    e.preventDefault(); // Prevent form submission reload

    if (!inputMessage.trim()) return; // Don't send empty messages

    try {
      const messageData = {
        message: {
          parte1: inputMessage,
          idrandom: conversationId,
        },
      };

      // Send the message to your API
      const response = await axios.post(
        'https://n8n-g.onrender.com/webhook/08ed44bc-955c-46ff-a703-277f5d0a8551',
        messageData
      );

      if (response.status === 200) {
        // Add the sent message to the local state
        setMessages((prev) => [
          ...prev,
          { text: inputMessage, sent: true },
        ]);
        setInputMessage(''); // Clear the input field
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  // Setup SSE connection
  useEffect(() => {
    const setupSSE = () => {
      const eventSource = new EventSource('https://q-trust-ai.vercel.app/api/chat-events');

      eventSource.onmessage = (event) => {
        if (event.data === ': keep-alive') return;

        const data = JSON.parse(event.data);
        setMessages((prev) => [
          ...prev,
          {
            text: data.message.parte1,
            sent: data.message.idrandom === conversationId,
          },
        ]);
      };

      eventSource.onerror = (error) => {
        console.error('SSE Error:', error);
        eventSource.close();
        setTimeout(setupSSE, 1000); // Reconnect after 1 second
      };

      return () => eventSource.close(); // Cleanup on unmount
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