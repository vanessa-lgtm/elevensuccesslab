
import React, { useEffect, useRef, useState } from 'react';
import { MessageSquare, Mail, Calendar, Headset, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { useToast } from '@/components/ui/use-toast';

interface SupportOptionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  delay: number;
  isPrimary?: boolean;
  url?: string;
  onClick?: () => void;
}

const SupportOption = ({ 
  icon, 
  title, 
  description, 
  buttonText, 
  delay,
  isPrimary = false,
  url,
  onClick
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

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (url) {
      window.open(url, '_blank');
    }
  };

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
        onClick={handleClick}
      >
        {buttonText}
      </Button>
    </div>
  );
};

interface SupportSectionProps {
  onGetSupportClick?: () => void;
}

const SupportSection = ({ onGetSupportClick }: SupportSectionProps) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);
  const [openStrategyDialog, setOpenStrategyDialog] = useState(false);
  const [openSupportWidget, setOpenSupportWidget] = useState(false);
  const { toast } = useToast();
  
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

  const handleSupportClick = () => {
    setOpenSupportWidget(true);
  };

  const supportOptions = [
    {
      icon: <Mail size={20} />,
      title: "Contact Customer Support",
      description: "Send us your questions on technical or product issues, bugs, etc.",
      buttonText: "Contact Support",
      isPrimary: true,
      url: "https://help.elevenlabs.io/hc/en-us/requests/new?ticket_form_id=13145996177937",
    },
    {
      icon: <MessageSquare size={20} />,
      title: "Contact Customer Success",
      description: "Contact the ElevenLabs CS team on any product related questions, account related questions, contract details, use case inquiries, etc.",
      buttonText: "Contact Success Team",
      onClick: () => setOpenSuccessDialog(true),
    },
    {
      icon: <Calendar size={20} />,
      title: "Strategy Session",
      description: "Book a complementary strategy session to develop or refine your use of voice AI technology.",
      buttonText: "Book Session",
      onClick: () => setOpenStrategyDialog(true),
    },
    {
      icon: <Headset size={20} />,
      title: "Real Time Product Support",
      description: "Chat with El, our real time voice agent",
      buttonText: "Get Support",
      onClick: handleSupportClick,
    },
  ];

  return (
    <section id="support" className="section-padding pb-8" style={{
      background: 'linear-gradient(to top, rgb(248, 250, 252), rgb(241, 245, 249))',
    }}>
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <div className="text-sm font-medium text-primary mb-3">Expert Assistance</div>
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-display font-bold mb-4 opacity-0 translate-y-10 transition-all duration-700 ease-out"
          >
            Support Tailored to Your Needs
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Choose from multiple support channels to get the assistance you need,
            when you need it, to ensure your voice AI strategy delivers results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {supportOptions.map((option, index) => (
            <SupportOption 
              key={index} 
              icon={option.icon} 
              title={option.title} 
              description={option.description} 
              buttonText={option.buttonText} 
              delay={index * 100}
              isPrimary={option.isPrimary}
              url={option.url}
              onClick={option.onClick}
            />
          ))}
        </div>
      </div>

      {/* Contact Success Dialog */}
      <Dialog open={openSuccessDialog} onOpenChange={setOpenSuccessDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Contact Customer Success</DialogTitle>
            <DialogDescription>
              Please use the following contact information to reach our customer success team:
            </DialogDescription>
          </DialogHeader>
          <div className="py-6 text-center">
            <p className="mb-4">Email <strong>success@elevenlabs.io</strong> to contact Customer Success and book a complementary strategy session.</p>
          </div>
          <DialogFooter>
            <Button 
              onClick={() => setOpenSuccessDialog(false)} 
              className="w-full"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Strategy Session Dialog */}
      <Dialog open={openStrategyDialog} onOpenChange={setOpenStrategyDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Book a Strategy Session</DialogTitle>
            <DialogDescription>
              Please use the following contact information to book your complementary strategy session:
            </DialogDescription>
          </DialogHeader>
          <div className="py-6 text-center">
            <p className="mb-4">Email <strong>success@elevenlabs.io</strong> to contact Customer Success and book a complementary strategy session.</p>
          </div>
          <DialogFooter>
            <Button 
              onClick={() => setOpenStrategyDialog(false)} 
              className="w-full"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Support Widget Sheet */}
      <Sheet open={openSupportWidget} onOpenChange={setOpenSupportWidget}>
        <SheetContent className="w-full md:max-w-sm overflow-auto">
          <SheetHeader className="mb-4">
            <SheetTitle>Chat with El</SheetTitle>
            <SheetDescription>
              Our real time voice agent
            </SheetDescription>
          </SheetHeader>
          <div className="flex justify-center items-center h-[70vh]">
            <elevenlabs-convai 
              agent-id="EjyrOV3coaKtG6NF5NmV"
              theme="light"
              position="center"
              expanded="true"
              button-text="Chat with our AI"
              welcome-message="Hello! How can I help you today?"
              placeholder-text="Type your message here..."
              header-text="ElevenLabs Voice AI Assistant"
            />
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default SupportSection;
