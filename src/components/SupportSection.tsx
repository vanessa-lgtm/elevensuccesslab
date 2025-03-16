
import React, { useEffect, useRef } from 'react';
import { MessageSquare, Mail, Calendar, Clock, Headset } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SupportOptionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  delay: number;
  isPrimary?: boolean;
}

const SupportOption = ({ 
  icon, 
  title, 
  description, 
  buttonText, 
  delay,
  isPrimary = false 
}: SupportOptionProps) => {
  const optionRef = useRef<HTMLDivElement>(null);
  
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
    
    if (optionRef.current) {
      observer.observe(optionRef.current);
    }
    
    return () => {
      if (optionRef.current) {
        observer.unobserve(optionRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={optionRef}
      className={cn(
        "rounded-xl p-7 opacity-0 translate-y-10 transition-all duration-700 ease-out",
        "flex flex-col h-full",
        isPrimary 
          ? "bg-primary text-white" 
          : "glass-card"
      )}
    >
      <div className={cn(
        "w-12 h-12 rounded-full flex items-center justify-center mb-5",
        isPrimary 
          ? "bg-white/20 text-white" 
          : "bg-primary/10 text-primary"
      )}>
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className={cn(
        "mb-6 flex-grow",
        isPrimary ? "text-white/80" : "text-foreground/70"
      )}>
        {description}
      </p>
      
      <Button 
        variant={isPrimary ? "secondary" : "default"} 
        className={cn(
          "mt-auto button-hover-effect",
          isPrimary && "bg-white text-primary hover:bg-white/90"
        )}
      >
        {buttonText}
      </Button>
    </div>
  );
};

const SupportSection = () => {
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

  const supportOptions = [
    {
      icon: <Mail size={20} />,
      title: "Contact Customer Support",
      description: "Send us your questions on technical or product issues, bugs, etc.",
      buttonText: "Contact Support",
      isPrimary: true,
    },
    {
      icon: <MessageSquare size={20} />,
      title: "Contact Customer Success",
      description: "Contact the ElevenLabs CS team on any product related questions, account related questions, contract details, use case inquiries, etc.",
      buttonText: "Contact Success Team",
    },
    {
      icon: <Calendar size={20} />,
      title: "Strategy Session",
      description: "Book a complementary strategy session to develop or refine your use of voice AI technology.",
      buttonText: "Book Session",
    },
    {
      icon: <Headset size={20} />,
      title: "Real Time Product Support",
      description: "Get immediate assistance with our real-time product support for urgent technical issues.",
      buttonText: "Get Support",
    },
    {
      icon: <Clock size={20} />,
      title: "On-Demand Webinars",
      description: "Access our library of internal and customer webinars to enhance your knowledge of our product or get inspired!",
      buttonText: "Watch Now",
    },
  ];

  return (
    <section id="support" className="section-padding" style={{
      background: 'linear-gradient(to top, rgb(248, 250, 252), rgb(241, 245, 249))',
    }}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm font-medium text-primary mb-3">Expert Assistance</div>
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-display font-bold mb-6 opacity-0 translate-y-10 transition-all duration-700 ease-out"
          >
            Support Tailored to Your Needs
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Choose from multiple support channels to get the assistance you need,
            when you need it, to ensure your customer success strategy delivers results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {supportOptions.map((option, index) => (
            <SupportOption 
              key={index} 
              icon={option.icon} 
              title={option.title} 
              description={option.description} 
              buttonText={option.buttonText} 
              delay={index * 100}
              isPrimary={option.isPrimary}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
