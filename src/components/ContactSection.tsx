
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';

// Define the contact interface
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const contactData: ContactFormData = {
      name,
      email,
      message
    };

    try {
      // Send data to our API endpoint
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit contact form');
      }

      setIsSuccess(true);
      
      toast({
        title: "Success!",
        description: "Your message has been received. We'll be in touch soon.",
      });
      
      // Reset form after successful submission
      setTimeout(() => {
        setIsSuccess(false);
        setName('');
        setEmail('');
        setMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Error",
        description: "There was a problem submitting your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-10 px-4 md:px-8 lg:px-12 relative"
      style={{
        background: 'linear-gradient(to bottom, rgb(241, 245, 249), rgb(248, 250, 252))',
      }}
    >
      <div className="absolute top-0 inset-x-0 h-40 bg-background" style={{ 
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)',
        opacity: 0.5,
      }}></div>
      
      <div 
        ref={sectionRef}
        className="container mx-auto opacity-0 translate-y-10 transition-all duration-700 ease-out"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <form 
                ref={formRef}
                onSubmit={handleSubmit} 
                className={cn(
                  "glass-card rounded-xl p-8 transition-all duration-500",
                  isSuccess ? "bg-primary/5" : ""
                )}
              >
                {!isSuccess ? (
                  <>
                    <div className="space-y-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter your name"
                          required
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          required
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          How can we help?
                        </label>
                        <Textarea
                          id="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Tell us about your customer success needs"
                          required
                          rows={5}
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full mt-6 button-hover-effect"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-foreground/70 mb-6">
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setIsSuccess(false)}
                      className="mx-auto"
                    >
                      Send Another Message
                    </Button>
                  </div>
                )}
              </form>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Contact Us
              </h2>
              <p className="text-foreground/70 mb-8">
                Fill out the form and one of our customer success experts will get in touch to discuss how we can help you implement and scale your strategy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
