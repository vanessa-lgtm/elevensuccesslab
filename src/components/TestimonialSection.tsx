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
const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
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
    setActiveIndex(prev => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return;
};
export default TestimonialSection;