
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import OnboardingSurvey from '@/components/OnboardingSurvey';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';

interface FormValues {
  name: string;
  email: string;
}

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [openNewsletterDialog, setOpenNewsletterDialog] = useState(false);
  const { toast } = useToast();
  
  const newsletterForm = useForm<FormValues>({
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
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const onNewsletterSubmit = async (data: FormValues) => {
    try {
      // Send data to our contact API endpoint with newsletter tag
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          message: 'Newsletter signup',
          source: 'newsletter_dialog',
          optIn: true,
          tags: ['newsletter_subscriber']
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit newsletter signup');
      }

      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setOpenNewsletterDialog(false);
      newsletterForm.reset();
    } catch (error) {
      console.error('Error submitting newsletter signup:', error);
      toast({
        title: "Error",
        description: "There was a problem with your subscription. Please try again.",
        variant: "destructive",
      });
    }
  };

  const scrollToResources = (e: React.MouseEvent) => {
    e.preventDefault();
    const resourcesSection = document.getElementById('resources');
    if (resourcesSection) {
      resourcesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            Welcome to Your ElevenLabs Journey
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-balance leading-tight">
            All the resources you need for your voice AI journey with <span className="text-primary">ElevenLabs</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
            Begin your voice AI implementation journey with expert guidance, comprehensive resources, and personalized support at every step.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <OnboardingSurvey />
            
            {/* Regular link button as a secondary action */}
            <Button variant="outline" size="lg" className="group button-hover-effect" onClick={scrollToResources}>
              Explore Resources
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="mt-6">
            <Button variant="outline" size="lg" className="group" onClick={() => setOpenNewsletterDialog(true)}>
              <Bell className="mr-2 h-4 w-4" />
              Sign up for Product Updates and Company News
            </Button>
          </div>
        </div>
      </div>
      
      {/* Newsletter Dialog */}
      <Dialog open={openNewsletterDialog} onOpenChange={setOpenNewsletterDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Sign up for Updates</DialogTitle>
            <DialogDescription>
              Please provide your information to sign up for ElevenLabs product updates and company news.
            </DialogDescription>
          </DialogHeader>
          <Form {...newsletterForm}>
            <form onSubmit={newsletterForm.handleSubmit(onNewsletterSubmit)} className="space-y-4">
              <FormField
                control={newsletterForm.control}
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
                control={newsletterForm.control}
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
                  <Bell className="mr-2 h-4 w-4" />
                  Subscribe
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      
      {/* Abstract shape at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-secondary" style={{ 
        clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)',
        opacity: 0.5,
      }}></div>
    </section>
  );
};

export default Hero;
