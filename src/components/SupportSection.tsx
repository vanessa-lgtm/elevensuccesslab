
import React, { useEffect, useRef, useState } from 'react';
import { MessageSquare, Mail, Calendar, Headset, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
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

interface FormValues {
  name: string;
  email: string;
  message?: string;
}

const SupportSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);
  const [openStrategyDialog, setOpenStrategyDialog] = useState(false);
  const { toast } = useToast();
  
  const successForm = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const strategyForm = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: ''
    }
  });
  
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

  const onSuccessSubmit = (data: FormValues) => {
    console.log('Sending email to success@elevenlabs.io with data:', data);
    toast({
      title: "Success!",
      description: "Your information has been sent to our Customer Success team.",
    });
    setOpenSuccessDialog(false);
    successForm.reset();
  };

  const onStrategySubmit = (data: FormValues) => {
    console.log('Sending email to success@elevenlabs.io with data:', data);
    toast({
      title: "Success!",
      description: "Your strategy session request has been sent.",
    });
    setOpenStrategyDialog(false);
    strategyForm.reset();
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
      description: "Get immediate assistance with our real time product assistance agent - Call El",
      buttonText: "Get Support",
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
            when you need it, to ensure your voice AI strategy delivers results.
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
              url={option.url}
              onClick={option.onClick}
            />
          ))}
        </div>
      </div>

      <Dialog open={openSuccessDialog} onOpenChange={setOpenSuccessDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Contact Customer Success</DialogTitle>
            <DialogDescription>
              Please provide your information to contact our customer success team.
            </DialogDescription>
          </DialogHeader>
          <Form {...successForm}>
            <form onSubmit={successForm.handleSubmit(onSuccessSubmit)} className="space-y-4">
              <FormField
                control={successForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={successForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address Associated with your ElevenLabs Account</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={successForm.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="How can our Customer Success team help you?" 
                        rows={4}
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Request
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <Dialog open={openStrategyDialog} onOpenChange={setOpenStrategyDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Book a Strategy Session</DialogTitle>
            <DialogDescription>
              Please provide your information to schedule a complementary strategy session.
            </DialogDescription>
          </DialogHeader>
          <Form {...strategyForm}>
            <form onSubmit={strategyForm.handleSubmit(onStrategySubmit)} className="space-y-4">
              <FormField
                control={strategyForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={strategyForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address Associated with your ElevenLabs Account</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="submit" className="w-full">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Session
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default SupportSection;
