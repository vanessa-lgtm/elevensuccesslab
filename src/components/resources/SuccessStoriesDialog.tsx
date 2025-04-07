
import React from 'react';
import { Quote } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import TestimonialSection from '../TestimonialSection';

const SuccessStoriesDialog = ({
  open,
  onOpenChange
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const testimonials = [
    {
      quote: "The resources provided helped us restructure our entire voice AI strategy, leading to a 35% increase in customer retention within just six months.",
      name: "Sarah Johnson",
      role: "VP of Voice Innovation",
      company: "TechVision Inc."
    }, 
    {
      quote: "The strategic frameworks and measurement tools allowed us to scale our voice AI operations efficiently while maintaining high quality interactions.",
      name: "Michael Chen",
      role: "Chief Voice Officer",
      company: "GrowthWave"
    }, 
    {
      quote: "Access to the training materials and expert consultation transformed how we approach voice AI. Our NPS score has increased by 28 points.",
      name: "Elena Rodriguez",
      role: "Voice AI Director",
      company: "Innovate Solutions"
    }
  ];
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Quote className="h-5 w-5 text-primary" />
            Success Stories
          </DialogTitle>
          <DialogDescription>
            Read about how our customers are achieving success with our platform
          </DialogDescription>
        </DialogHeader>
        
        <div className="text-center mb-6">
          <Button variant="default" size="lg" className="flex items-center gap-2" onClick={() => window.open('https://elevenlabs.io/blog?category=customer-stories', '_blank')}>
            View All Customer Stories
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="space-y-4 mt-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-4 border-l-4 border-l-primary">
              <CardContent className="p-0">
                <blockquote className="italic text-muted-foreground mb-4">"{testimonial.quote}"</blockquote>
                <div className="font-medium">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t">
          <h3 className="text-xl font-semibold mb-6 text-center">What Our Customers Say</h3>
          <TestimonialSection embedded={true} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessStoriesDialog;
