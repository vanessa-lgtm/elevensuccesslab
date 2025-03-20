
import React from 'react';
import { TabsContent } from '@/components/ui/tabs';
import OnboardingChecklist from '@/components/OnboardingChecklist';
import KeyActionItem, { KeyActionStep } from './KeyActionItem';
import ResourceCard, { ResourceItem } from './ResourceCard';

interface OnboardingTabContentProps {
  activeTab: string;
  currentStep: number;
  handleProgressUpdate: (completed: number, total: number) => void;
  industry: string;
  keyActionSteps: KeyActionStep[];
  resources: ResourceItem[];
  completedActions: Record<string, boolean>;
  toggleActionCompletion: (id: string) => void;
}

const OnboardingTabContent: React.FC<OnboardingTabContentProps> = ({
  activeTab,
  currentStep,
  handleProgressUpdate,
  industry,
  keyActionSteps,
  resources,
  completedActions,
  toggleActionCompletion
}) => {
  return (
    <>
      <TabsContent value="checklist" className="mt-4 space-y-4 animate-fade-in">
        <div className="bg-card p-6 rounded-lg shadow-sm border border-muted">
          <OnboardingChecklist onProgressUpdate={handleProgressUpdate} industry={industry} />
        </div>
      </TabsContent>
      
      <TabsContent value="key-actions" className="mt-4 animate-fade-in">
        <div className="mb-6 bg-card p-6 rounded-lg shadow-sm border border-muted">
          <h2 className="text-2xl font-bold mb-4 text-primary">
            {industry === 'conversational_ai' ? 
              'Key Actions for Mastering Conversational AI' : 
              'Key Actions for Mastering ElevenLabs'}
          </h2>
          <p className="text-muted-foreground mb-6">
            {industry === 'conversational_ai' ? 
              'Complete these steps to quickly get started with ElevenLabs for your conversational AI and customer service solutions. Each guide includes step-by-step instructions.' : 
              'Complete these steps to quickly get started with ElevenLabs for your media production needs. Each guide includes step-by-step instructions.'}
          </p>
          
          {keyActionSteps.map((step) => (
            <KeyActionItem 
              key={step.id} 
              step={step} 
              isCompleted={completedActions[step.id] || false}
              onToggleCompletion={toggleActionCompletion}
            />
          ))}
        </div>
      </TabsContent>
      
      <TabsContent value="resources" className="mt-4 animate-fade-in">
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
      </TabsContent>
    </>
  );
};

export default OnboardingTabContent;
