
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ElevenLabsConversation } from '@/components/ElevenLabsConversation';

const Conversation: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">ElevenLabs Voice AI Assistant</h1>
          <p className="mb-8 text-muted-foreground">
            Interact with our AI assistant powered by ElevenLabs voice technology. Ask questions about our products and services, or just have a conversation.
          </p>
          
          {/* Using the ElevenLabsConversation component instead of embedding directly */}
          <ElevenLabsConversation />
          
          <div className="space-y-4 mt-8">
            <h2 className="text-xl font-semibold">About this AI Assistant</h2>
            <p className="text-muted-foreground">
              This AI assistant uses ElevenLabs voice technology to provide natural-sounding conversations. 
              You can ask questions about our products, services, or get general information about media and entertainment use cases.
            </p>
            <p className="text-muted-foreground">
              Simply click "Start Chat", allow microphone access, and begin speaking naturally with our assistant.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Conversation;
