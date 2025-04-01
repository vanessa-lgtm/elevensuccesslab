
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Conversation: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-8 mt-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">Chat with El</h1>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Get real-time support through our conversational voice AI assistant powered by ElevenLabs technology
            </p>
          </div>
          
          <Card className="shadow-md border-primary/10">
            <CardHeader className="border-b pb-4">
              <CardTitle>Interactive Voice Chat</CardTitle>
              <CardDescription>
                Speak naturally with our AI assistant or type your questions
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 flex justify-center">
              <elevenlabs-convai 
                agent-id="7UDgnecvOFub56zYK2Pu"
                theme="light"
                position="center"
                expanded="true"
                header-text="Voice Assistant"
                placeholder-text="Type or speak your question...">
              </elevenlabs-convai>
            </CardContent>
          </Card>
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <Card className="bg-muted/40">
              <CardHeader>
                <CardTitle className="text-xl">How To Use</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 list-disc list-inside text-sm">
                  <li>Click the microphone to start speaking</li>
                  <li>Speak naturally with the assistant</li>
                  <li>The assistant will respond with natural voice</li>
                  <li>Click the X to end the conversation</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-muted/40">
              <CardHeader>
                <CardTitle className="text-xl">What You Can Ask</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 list-disc list-inside text-sm">
                  <li>Product information and features</li>
                  <li>How to use specific voice AI tools</li>
                  <li>Pricing and subscription details</li>
                  <li>Technical support for common issues</li>
                  <li>Best practices for voice AI applications</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Conversation;
