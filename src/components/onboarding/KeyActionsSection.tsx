
import React from 'react';
import KeyActionItem from './KeyActionItem';
import { mediaKeyActionSteps, conversationalAIKeyActionSteps } from './constants';

interface KeyActionsSectionProps {
  industry: string;
  completedActions: Record<string, boolean>;
  onToggleAction: (id: string) => void;
}

const KeyActionsSection = ({ industry, completedActions, onToggleAction }: KeyActionsSectionProps) => {
  const keyActionSteps = industry === 'conversational_ai' ? 
    conversationalAIKeyActionSteps : mediaKeyActionSteps;

  return (
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
          onToggle={onToggleAction}
        />
      ))}
    </div>
  );
};

export default KeyActionsSection;
