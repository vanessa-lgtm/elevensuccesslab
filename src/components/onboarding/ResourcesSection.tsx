
import React from 'react';
import ResourceCard from './ResourceCard';
import { mediaResources, conversationalAIResources } from './constants';

interface ResourcesSectionProps {
  industry: string;
}

const ResourcesSection = ({ industry }: ResourcesSectionProps) => {
  const resources = industry === 'conversational_ai' ? 
    conversationalAIResources : mediaResources;

  return (
    <div className="bg-card p-6 rounded-lg shadow-sm border border-muted">
      <h2 className="text-2xl font-bold mb-4 text-primary">
        {industry === 'conversational_ai' ? 
          'Resources for Conversational AI' : 
          'Resources for Media & Entertainment'}
      </h2>
      <p className="text-muted-foreground mb-6">
        Explore these resources to deepen your understanding of ElevenLabs and optimize your implementation.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((resource, index) => (
          <ResourceCard key={index} resource={resource} />
        ))}
      </div>
    </div>
  );
};

export default ResourcesSection;
