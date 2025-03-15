
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

const testimonials: Testimonial[] = [
  {
    quote: "The resources provided helped us restructure our entire customer success program, leading to a 35% increase in customer retention within just six months.",
    name: "Sarah Johnson",
    role: "VP of Customer Success",
    company: "TechVision Inc."
  },
  {
    quote: "The strategic frameworks and measurement tools allowed us to scale our customer success operations efficiently while maintaining high quality interactions.",
    name: "Michael Chen",
    role: "Chief Customer Officer",
    company: "GrowthWave"
  },
  {
    quote: "Access to the training materials and expert consultation transformed how we approach customer success. Our NPS score has increased by 28 points.",
    name: "Elena Rodriguez",
    role: "Customer Success Director",
    company: "Innovate Solutions"
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
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Hear from organizations that have transformed their customer success strategies using our resources and support.
          </p>
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
