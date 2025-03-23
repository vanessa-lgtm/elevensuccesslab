
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ResourceSection from '@/components/ResourceSection';
import SupportSection from '@/components/SupportSection';
import TestimonialSection from '@/components/TestimonialSection';
import Footer from '@/components/Footer';
import WebinarPopup from '@/components/WebinarPopup';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-view');
      
      elements.forEach((el) => {
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Voice AI Feature Banner */}
      <div className="py-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-2">Try Our Voice AI Assistant</h2>
              <p className="max-w-xl">
                Experience our interactive voice AI powered by ElevenLabs. Have natural conversations 
                and get information through voice commands.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <ResourceSection />
      <SupportSection />
      <TestimonialSection />
      <Footer />
      <WebinarPopup />
    </div>
  );
};

export default Index;
