
import React, { useEffect, useRef } from 'react';
import { BookOpen, FileText, Video, ArrowUpRight, GraduationCap, BarChart, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ResourceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ResourceCard = ({ icon, title, description, delay }: ResourceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "glass-card rounded-xl p-6 opacity-0 translate-y-10 transition-all duration-700 ease-out",
        "transform hover:translate-y-[-5px] hover:shadow-lg transition-all duration-300"
      )}
    >
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-foreground/70 mb-5">{description}</p>
      
      <Button variant="ghost" className="group p-0 h-auto font-medium text-primary">
        Learn more
        <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-1 group-hover:translate-y-[-2px] transition-transform" />
      </Button>
    </div>
  );
};

const ResourceSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
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
    
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  const resources = [
    {
      icon: <BookOpen size={20} />,
      title: "Guides & Documentation",
      description: "Comprehensive guides on customer success best practices, metrics, and strategies.",
    },
    {
      icon: <GraduationCap size={20} />,
      title: "Training Materials",
      description: "Training resources to help your team master customer success principles and techniques.",
    },
    {
      icon: <Video size={20} />,
      title: "Video Tutorials",
      description: "Step-by-step video tutorials on implementing customer success programs.",
    },
    {
      icon: <BarChart size={20} />,
      title: "Measurement Frameworks",
      description: "Tools and templates to measure the impact of your customer success initiatives.",
    },
    {
      icon: <FileText size={20} />,
      title: "Case Studies",
      description: "Real-world examples of successful customer success strategies and their outcomes.",
    },
    {
      icon: <RefreshCw size={20} />,
      title: "Process Templates",
      description: "Ready-to-use process templates to streamline your customer success workflows.",
    },
  ];

  return (
    <section id="resources" className="section-padding bg-background relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm font-medium text-primary mb-3">Knowledge Hub</div>
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-display font-bold mb-6 opacity-0 translate-y-10 transition-all duration-700 ease-out"
          >
            Resources for Customer Success Excellence
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Access our comprehensive library of resources designed to help you implement
            and scale your customer success strategy effectively.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <ResourceCard 
              key={index} 
              icon={resource.icon} 
              title={resource.title} 
              description={resource.description} 
              delay={index * 100}
            />
          ))}
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl -z-10"></div>
    </section>
  );
};

export default ResourceSection;
