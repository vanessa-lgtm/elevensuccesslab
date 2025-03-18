
import React from 'react';
import { useIntersectionAnimation } from '@/hooks/useIntersectionAnimation';
import ContactForm from './contact/ContactForm';
import ContactContent from './contact/ContactContent';

const ContactSection: React.FC = () => {
  const sectionRef = useIntersectionAnimation<HTMLDivElement>();
  
  return (
    <section 
      id="contact" 
      className="py-10 px-4 md:px-8 lg:px-12 relative"
      style={{
        background: 'linear-gradient(to bottom, rgb(241, 245, 249), rgb(248, 250, 252))',
      }}
    >
      <div className="absolute top-0 inset-x-0 h-40 bg-background" style={{ 
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)',
        opacity: 0.5,
      }}></div>
      
      <div 
        ref={sectionRef}
        className="container mx-auto opacity-0 translate-y-10 transition-all duration-700 ease-out"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <ContactForm />
            </div>
            
            <div>
              <ContactContent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
