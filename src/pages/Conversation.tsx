
import React, { useState } from 'react';
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
          <h1 className="text-3xl font-bold mb-6">ElevenLabs Conversational AI</h1>
          <p className="mb-8 text-muted-foreground">
            Experience the power of ElevenLabs voice AI through this interactive conversation. Speak to our AI assistant using your microphone.
          </p>
          
          <Card className="w-full mx-auto overflow-hidden">
            <CardHeader>
              <CardTitle>AI Voice Chat</CardTitle>
              <CardDescription>Use your microphone to talk with our AI assistant</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <ElevenLabsConversation />
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Conversation;
