
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ResourceSection from '@/components/ResourceSection';
import SupportSection from '@/components/SupportSection';
import Footer from '@/components/Footer';
import WebinarPopup from '@/components/WebinarPopup';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Flag, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

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
      
      {/* Beta Banner */}
      <div className="bg-purple-600 text-white py-2 px-4 sticky top-16 z-40 shadow-md">
        <div className="container mx-auto flex items-center justify-center gap-2">
          <AlertTriangle className="h-4 w-4" />
          <span className="font-medium">This is a BETA version. Features may change or be removed.</span>
          <Badge variant="outline" className="bg-white text-purple-600 border-white ml-2 flex items-center gap-1">
            <span>BETA</span>
          </Badge>
        </div>
      </div>
      
      <Hero />
      
      {/* Voice AI Feature Banner */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <Card className="overflow-hidden fade-in-view">
            
          </Card>
        </div>
      </section>
      
      <ResourceSection />
      <SupportSection />
      <Footer />
      <WebinarPopup />
      
      {/* Floating ElevenLabs widget */}
      <div className="fixed bottom-6 right-6 z-40">
        <elevenlabs-convai agent-id="sVj20Vdiohi2hKyMGZt8" theme="light" position="bottom-right" expanded="false" button-text="Chat with our AI" welcome-message="Hello! How can I help you today?" placeholder-text="Type your message here..." header-text="ElevenLabs Voice AI Assistant">
        </elevenlabs-convai>
      </div>
    </div>;
};
export default Index;
