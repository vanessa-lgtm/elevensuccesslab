
import React from 'react';
import KeyActionItem from './KeyActionItem';
import { mediaKeyActionSteps, conversationalAIKeyActionSteps } from './constants';

interface KeyActionsSectionProps {
  industry: string;
  completedActions: Record<string, boolean>;
  onToggleAction: (id: string) => void;
}

const KeyActionsSection = ({
  industry,
  completedActions,
  onToggleAction
}: KeyActionsSectionProps) => {
  const keyActionSteps = industry === 'conversational_ai' ? 
    conversationalAIKeyActionSteps : mediaKeyActionSteps;

  return (
    <div className="space-y-6">
      <div className="bg-card p-6 rounded-lg shadow-sm border border-muted">
        <h2 className="text-2xl font-bold mb-6">Key Actions</h2>
        <p className="text-muted-foreground mb-8">
          Complete these core actions to get the most out of your ElevenLabs experience.
          Check off items as you complete them to track your progress.
        </p>
        
        <div>
          {keyActionSteps.map((step) => (
            <KeyActionItem
              key={step.id}
              step={step}
              isCompleted={!!completedActions[step.id]}
              onToggle={onToggleAction}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyActionsSection;
