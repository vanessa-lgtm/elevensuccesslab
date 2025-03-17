import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Quote, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "For our clients, customer support isn't an afterthought. Every interaction is a chance to provide value and win customer loyalty. When we explored AI voice solutions, we saw that the most lifelike and emotionally resonant voices were powered by ElevenLabs. Their ability to deliver natural, human-like conversations gave us and our partners the confidence to scale AI voice support without sacrificing quality.",
    name: "Jesse Zhang",
    role: "CEO & Co-founder",
    company: "Decagon"
  },
  {
    quote: "With Bertelsmann's Tech & Data Alliance, and its recently founded AI Hub, we have been at the forefront of applying new technologies across our businesses and building partnerships to accelerate the adoption of GenAI solutions in our businesses. ElevenLabs' sophisticated AI solutions are cutting-edge, ensuring high quality and multi-language audio experiences,",
    name: "Rhys Nölke",
    role: "Chief Data Officer",
    company: "Bertelsmann"
  },
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (testimonialRef.current) {
      testimonialRef.current.classList.remove('animate-fade-in');
      // Trigger reflow
      void testimonialRef.current.offsetWidth;
      testimonialRef.current.classList.add('animate-fade-in');
    }
  }, [activeIndex]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      id="testimonials" 
      className="section-padding bg-background"
      ref={sectionRef}
    >
      <div className="container mx-auto opacity-0 transition-opacity duration-1000">
        <div className="text-center mb-16">
          <div className="text-sm font-medium text-primary mb-3">Success Stories</div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            What Our Customers Say
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-6">
            Hear from organizations that have transformed their customer success strategies using our resources and support.
          </p>
          <Button 
            variant="outline" 
            asChild 
            className="flex items-center gap-2 mx-auto"
          >
            <a 
              href="https://elevenlabs.io/blog?category=customer-stories" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View All Customer Stories
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div 
            ref={testimonialRef}
            className="glass-card rounded-xl p-10 md:p-14 animate-fade-in"
          >
            <div className="text-primary mb-6">
              <Quote size={40} className="opacity-20" />
            </div>
            
            <blockquote className="text-xl md:text-2xl mb-8 font-medium text-balance leading-relaxed">
              "{testimonials[activeIndex].quote}"
            </blockquote>
            
            <div>
              <p className="font-semibold">{testimonials[activeIndex].name}</p>
              <p className="text-foreground/70">
                {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
              </p>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    index === activeIndex 
                      ? "bg-primary w-6" 
                      : "bg-primary/30"
                  )}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
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
    </section>
  );
};

export default TestimonialSection;
