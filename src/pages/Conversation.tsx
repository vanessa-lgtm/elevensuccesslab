
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ElevenLabsConversation } from '@/components/ElevenLabsConversation';

const Conversation: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">ElevenLabs Conversational AI</h1>
          <p className="mb-8 text-muted-foreground">
            Experience the power of ElevenLabs voice AI through an interactive conversation.
            Enter your agent ID to start a voice conversation with an AI assistant.
          </p>
          
          <ElevenLabsConversation />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Conversation;
