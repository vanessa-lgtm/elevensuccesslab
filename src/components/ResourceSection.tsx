
import React, { useEffect, useRef, useState } from 'react';
import { resources } from './resources/ResourceData';
import ResourceCard from './resources/ResourceCard';
import VoiceAIBasicsDialog from './resources/VoiceAIBasicsDialog';
import WebinarsDialog from './resources/WebinarsDialog';
import SuccessStoriesDialog from './resources/SuccessStoriesDialog';
import { Resource } from './resources/ResourceData';

const ResourceSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [voiceAIBasicsOpen, setVoiceAIBasicsOpen] = useState(false);
  const [webinarsOpen, setWebinarsOpen] = useState(false);
  const [successStoriesOpen, setSuccessStoriesOpen] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100');
        entry.target.classList.remove('opacity-0', 'translate-y-10');
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1
    });
    
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);
  
  const handleCardClick = (resource: Resource) => {
    if (resource.dialogType === 'voiceAIBasics') {
      setVoiceAIBasicsOpen(true);
    } else if (resource.dialogType === 'webinars') {
      setWebinarsOpen(true);
    } else if (resource.dialogType === 'successStories') {
      setSuccessStoriesOpen(true);
    } else if (resource.externalLink) {
      window.open(resource.externalLink, "_blank");
    }
  };
  
  return (
    <section id="resources" className="section-padding bg-background relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm font-medium text-primary mb-3">Knowledge Hub</div>
          <h2 
            ref={titleRef} 
            className="text-3xl md:text-4xl font-display font-bold mb-6 opacity-0 translate-y-10 transition-all duration-700 ease-out"
          >
            Resources for Voice AI Excellence
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Access our comprehensive library of resources designed to help you implement
            and scale your voice AI strategy effectively.
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
              onClick={() => !resource.comingSoon && handleCardClick(resource)} 
              comingSoon={resource.comingSoon} 
            />
          ))}
        </div>
      </div>
      
      <VoiceAIBasicsDialog open={voiceAIBasicsOpen} onOpenChange={setVoiceAIBasicsOpen} />
      <WebinarsDialog open={webinarsOpen} onOpenChange={setWebinarsOpen} />
      <SuccessStoriesDialog open={successStoriesOpen} onOpenChange={setSuccessStoriesOpen} />
      
      <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl -z-10"></div>
    </section>
  );
};

export default ResourceSection;
