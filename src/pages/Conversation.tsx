
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Conversation: React.FC = () => {
  useEffect(() => {
    // Load the ElevenLabs widget script
    const script = document.createElement('script');
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">ElevenLabs Conversational AI</h1>
          <p className="mb-8 text-muted-foreground">
            Experience the power of ElevenLabs voice AI through this interactive conversation widget.
          </p>
          
          <Card className="w-full mx-auto overflow-hidden">
            <CardHeader>
              <CardTitle>AI Voice Chat</CardTitle>
            </CardHeader>
            <CardContent className="p-0 h-[600px]">
              <div className="elevenlabs-convai" agent-id="C6DAdeHLXXHPNrJnf5kq"></div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Conversation;
