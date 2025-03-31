
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ResourceSection from '@/components/ResourceSection';
import SupportSection from '@/components/SupportSection';
import Footer from '@/components/Footer';
import WebinarPopup from '@/components/WebinarPopup';
import { Card, CardContent } from '@/components/ui/card';

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
