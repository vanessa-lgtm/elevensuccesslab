
import React from 'react';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TestimonialSection from '@/components/TestimonialSection';

interface ResourceSectionProps {
  showTestimonials?: boolean;
}

const ResourceSection: React.FC<ResourceSectionProps> = ({ showTestimonials = false }) => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <Sparkles className="h-10 w-10 mx-auto mb-4 text-primary" />
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Unlock the Power of AI Voice
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Ready to revolutionize your content creation process? Explore our resources and get started today.
        </p>
        <Button size="lg" className="px-8 py-3">
          Explore Resources
        </Button>

        {showTestimonials && (
          <div className="my-8">
            <TestimonialSection embedded={true} />
          </div>
        )}
      </div>
    </section>
  );
};

export default ResourceSection;
