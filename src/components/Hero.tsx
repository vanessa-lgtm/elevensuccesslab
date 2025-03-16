
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import AssessMaturityWidget from '@/components/AssessMaturityWidget';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section 
      className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden bg-background"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-[5%] w-72 h-72 rounded-full bg-primary/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div 
          ref={heroRef}
          className="max-w-4xl mx-auto text-center opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Welcome to Your AI Journey
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-balance leading-tight">
            All the resources you need for your AI journey with <span className="text-primary">NexusAI</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
            Begin your AI implementation journey with expert guidance, comprehensive resources, and personalized support at every step.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button size="lg" className="px-6 py-6 text-md button-hover-effect group" asChild>
              <Link to="/onboarding">
                Start Onboarding
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <AssessMaturityWidget />
          </div>
          
          <div className="mt-6">
            <Button variant="outline" size="lg" className="group">
              <Bell className="mr-2 h-4 w-4" />
              Sign up for Product Updates and Company News
            </Button>
          </div>
        </div>
      </div>
      
      {/* Abstract shape at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-secondary" style={{ 
        clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)',
        opacity: 0.5,
      }}></div>
    </section>
  );
};

export default Hero;
