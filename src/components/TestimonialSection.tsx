
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [{
  quote: "For our clients, customer support isn't an afterthought. Every interaction is a chance to provide value and win customer loyalty. When we explored AI voice solutions, we saw that the most lifelike and emotionally resonant voices were powered by ElevenLabs. Their ability to deliver natural, human-like conversations gave us and our partners the confidence to scale AI voice support without sacrificing quality.",
  name: "Jesse Zhang",
  role: "CEO & Co-founder",
  company: "Decagon"
}, {
  quote: "With Bertelsmann's Tech & Data Alliance, and its recently founded AI Hub, we have been at the forefront of applying new technologies across our businesses and building partnerships to accelerate the adoption of GenAI solutions in our businesses. ElevenLabs' sophisticated AI solutions are cutting-edge, ensuring high quality and multi-language audio experiences,",
  name: "Rhys Nölke",
  role: "Chief Data Officer",
  company: "Bertelsmann"
}];

interface TestimonialSectionProps {
  embedded?: boolean;
}

const TestimonialSection = ({ embedded = false }: TestimonialSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (embedded) return; // Skip animation if embedded

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100');
        entry.target.classList.remove('opacity-0');
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [embedded]);

  useEffect(() => {
    if (testimonialRef.current) {
      testimonialRef.current.classList.remove('animate-fade-in');
      // Trigger reflow
      void testimonialRef.current.offsetWidth;
      testimonialRef.current.classList.add('animate-fade-in');
    }
  }, [activeIndex]);

  const nextTestimonial = () => {
    setActiveIndex(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // If embedded in another component, render a more compact version
  if (embedded) {
    return (
      <div className="max-w-2xl mx-auto">
        <div ref={testimonialRef} className="animate-fade-in">
          <div className="flex justify-center mb-6">
            <Quote className="w-8 h-8 text-primary" />
          </div>
          
          <blockquote className="text-lg italic mb-6">
            {testimonials[activeIndex].quote}
          </blockquote>
          
          <div className="font-medium mb-4">
            <p className="text-base font-bold">{testimonials[activeIndex].name}</p>
            <p className="text-gray-600 text-sm">{testimonials[activeIndex].role}, {testimonials[activeIndex].company}</p>
          </div>
          
          <div className="flex justify-center space-x-2">
            <Button 
              variant="outline" 
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full h-8 w-8"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full h-8 w-8"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Regular standalone version
  return (
    <section ref={sectionRef} className="py-16 bg-gray-50 transition-opacity duration-1000 opacity-0">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
          
          <div className="relative">
            <div ref={testimonialRef} className="animate-fade-in">
              <div className="flex justify-center mb-6">
                <Quote className="w-10 h-10 text-primary" />
              </div>
              
              <blockquote className="text-xl italic mb-8">
                {testimonials[activeIndex].quote}
              </blockquote>
              
              <div className="font-medium">
                <p className="text-lg font-bold">{testimonials[activeIndex].name}</p>
                <p className="text-gray-600">{testimonials[activeIndex].role}, {testimonials[activeIndex].company}</p>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              <Button 
                variant="outline" 
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
