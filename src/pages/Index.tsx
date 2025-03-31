
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ResourceSection from '@/components/ResourceSection';
import SupportSection from '@/components/SupportSection';
import Footer from '@/components/Footer';
import WebinarPopup from '@/components/WebinarPopup';
import { Card, CardContent, CardTitle } from '@/components/ui/card';

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
      <SupportSection onGetSupportClick={() => setShowSupportWidget(true)} />
      <Footer />
      <WebinarPopup />
      
      {/* Floating ElevenLabs widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <elevenlabs-convai agent-id="sVj20Vdiohi2hKyMGZt8" theme="light" position="bottom-right" expanded="false" button-text="Chat with our AI" welcome-message="Hello! How can I help you today?" placeholder-text="Type your message here..." header-text="ElevenLabs Voice AI Assistant">
        </elevenlabs-convai>
      </div>

      {/* Support specific widget that appears when Get Support is clicked */}
      {showSupportWidget && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[100]" onClick={() => setShowSupportWidget(false)}>
          <div className="p-6 bg-white rounded-xl shadow-xl relative" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800" 
              onClick={() => setShowSupportWidget(false)}
            >
              ✕
            </button>
            <h3 className="text-xl font-semibold mb-4">Real-Time Product Support</h3>
            <div className="w-[350px] h-[400px]">
              <elevenlabs-convai 
                agent-id="EjyrOV3coaKtG6NF5NmV" 
                theme="light" 
                position="center" 
                expanded="true" 
                welcome-message="Hello! I'm here to provide real-time product support. How can I help you today?"
                placeholder-text="Type your message here..." 
                header-text="Product Support Assistant"
              ></elevenlabs-convai>
            </div>
          </div>
        </div>
      )}
    </div>;
};

export default Index;
