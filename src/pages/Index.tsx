
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ResourceSection from '@/components/ResourceSection';
import SupportSection from '@/components/SupportSection';
import Footer from '@/components/Footer';
import WebinarPopup from '@/components/WebinarPopup';
import { Card, CardContent, CardTitle } from '@/components/ui/card';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-view');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight * 0.8;
        if (isInViewport) {
          el.classList.add('in-viewport');
        }
      });
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Voice AI Feature Banner */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <Card className="overflow-hidden fade-in-view">
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <CardTitle className="text-2xl md:text-3xl font-bold mb-4">
                    Try Our Voice AI Assistant
                  </CardTitle>
                  <p className="text-muted-foreground mb-6">
                    Experience our conversational AI powered by ElevenLabs. Ask questions, get information, or just chat naturally with our voice assistant.
                  </p>
                </div>
                <div className="min-h-[400px] flex items-center justify-center bg-gray-50 rounded-lg p-4">
                  <div className="flex flex-col items-center justify-center text-center">
                    <img src="/public/placeholder.svg" alt="Voice AI" className="mb-4 w-32 h-32" />
                    <p className="text-lg font-medium">Try our AI assistant</p>
                    <p className="text-muted-foreground mt-2">Click the chat icon in the bottom right corner to start a conversation</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <ResourceSection />
      <SupportSection />
      <Footer />
      <WebinarPopup />
      
      {/* Floating ElevenLabs widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <elevenlabs-convai 
          agent-id="rtqTnlF6OIFHDLAwCbfSI"
          theme="light"
          position="bottom-right" 
          expanded="false"
          button-text="Chat with our AI"
          welcome-message="Hello! How can I help you today?"
          placeholder-text="Type your message here..."
          header-text="ElevenLabs Voice AI Assistant">
        </elevenlabs-convai>
      </div>
    </div>;
};
export default Index;
