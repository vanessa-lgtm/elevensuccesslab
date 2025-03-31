
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Conversation: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">ElevenLabs Voice AI Agent</h1>
          <p className="mb-8 text-muted-foreground">
            Interact with our AI assistant powered by ElevenLabs voice technology. Ask questions, get information, or just have a conversation.
          </p>
          
          <Card className="w-full mx-auto overflow-hidden mb-8">
            <CardHeader>
              <CardTitle>AI Voice Chat</CardTitle>
              <CardDescription>Click the button below to start chatting with our voice AI assistant</CardDescription>
            </CardHeader>
            <CardContent className="p-6 flex justify-center">
              {/* ElevenLabs Convai Widget with customization */}
              <elevenlabs-convai 
                agent-id="rtqTnlF6OIFHDLAwCbfSI"
                theme="light"
                welcome-message="Hello! How can I help you with your media and entertainment needs today?"
                placeholder-text="Type your message or click the mic to speak..."
                header-text="ElevenLabs Voice Assistant"
                expanded="true">
              </elevenlabs-convai>
            </CardContent>
          </Card>
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">About this AI Assistant</h2>
            <p className="text-muted-foreground">
              This AI assistant uses ElevenLabs voice technology to provide natural-sounding conversations. 
              You can ask questions about our products, services, or get general information about media and entertainment use cases.
            </p>
            <p className="text-muted-foreground">
              The assistant will respond to your voice inputs in real-time, providing helpful information through natural conversation.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Conversation;
