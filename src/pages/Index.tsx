
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ResourceSection from '@/components/ResourceSection';
import SupportSection from '@/components/SupportSection';
import Footer from '@/components/Footer';
import WebinarPopup from '@/components/WebinarPopup';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Flag, Mic } from 'lucide-react';

const Index = () => {
  const [showSupportWidget, setShowSupportWidget] = useState(false);

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
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  <h3 className="font-semibold">Voice AI Onboarding</h3>
                  <Badge variant="outline" className="bg-purple-600 text-white border-purple-600 flex items-center gap-1">
                    <Flag className="h-3 w-3" />
                    <span>BETA</span>
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Voice AI Assistant Section */}
      <section className="py-8 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <Card className="fade-in-view">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Mic className="h-5 w-5 text-primary" />
                  <CardTitle className="text-xl">Voice AI Assistant</CardTitle>
                  <Badge variant="outline" className="bg-purple-600 text-white border-purple-600 flex items-center gap-1">
                    <Flag className="h-3 w-3" />
                    <span>BETA</span>
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Have questions about ElevenLabs? Speak directly with our AI voice assistant for immediate help and guidance.
              </p>
              <div className="flex justify-center py-4">
                <div className="w-full md:w-3/4 lg:w-2/3">
                  <elevenlabs-convai 
                    agent-id="sVj20Vdiohi2hKyMGZt8"
                    theme="light"
                    position="center"
                    expanded="true"
                    header-text="Voice Assistant"
                    placeholder-text="Type or speak your question about ElevenLabs...">
                  </elevenlabs-convai>
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
      <div className="fixed bottom-6 right-6 z-40">
        <elevenlabs-convai 
          agent-id="sVj20Vdiohi2hKyMGZt8" 
          theme="light" 
          position="bottom-right" 
          expanded="false" 
          button-text="Chat with our AI" 
          welcome-message="Hello! How can I help you today?" 
          placeholder-text="Type your message here..." 
          header-text="ElevenLabs Voice AI Assistant"
        >
        </elevenlabs-convai>
      </div>
    </div>;
};

export default Index;
