import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import ChecklistSection from './onboarding-checklist/ChecklistSection';
import { ChecklistItem } from './onboarding-checklist/types';
import { getSectionTitle, getDefaultChecklistItems } from './onboarding-checklist/checklistData';
import CelebrationPopup from './CelebrationPopup';
import { useToast } from '@/hooks/use-toast';

interface OnboardingChecklistProps {
  onProgressUpdate: (completed: number, total: number) => void;
  industry?: string;
  onAllCompleted?: (completed: boolean) => void;
}

const OnboardingChecklist: React.FC<OnboardingChecklistProps> = ({ 
  onProgressUpdate,
  industry = 'media',
  onAllCompleted
}) => {
  const [checklistItems, setChecklistItems] = useState<ChecklistItem[]>([]);
  const [allItemsCompleted, setAllItemsCompleted] = useState(false);
  const { toast } = useToast();
  
  const localStorageKey = `checklistItems-${industry}`;

  useEffect(() => {
    const savedItems = localStorage.getItem(localStorageKey);
    
    if (savedItems) {
      setChecklistItems(JSON.parse(savedItems));
    } else {
      setChecklistItems(getDefaultChecklistItems(industry));
    }
  }, [industry, localStorageKey]);

  useEffect(() => {
    const completedCount = checklistItems.filter(item => item.completed).length;
    onProgressUpdate(completedCount, checklistItems.length);
    
    const allCompleted = completedCount === checklistItems.length && checklistItems.length > 0;
    
    setAllItemsCompleted(allCompleted);
    if (onAllCompleted) {
      onAllCompleted(allCompleted);
    }
    
    if (allCompleted && !allItemsCompleted) {
      toast({
        title: "Onboarding steps completed!",
        description: "You've successfully completed all onboarding checklist steps.",
      });
    }
    
    localStorage.setItem(localStorageKey, JSON.stringify(checklistItems));
  }, [checklistItems, onProgressUpdate, allItemsCompleted, toast, onAllCompleted, localStorageKey]);

  const toggleItemCompletion = (id: string) => {
    setChecklistItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const sections = checklistItems.reduce<string[]>((acc, item) => {
    if (item.section && !acc.includes(item.section)) {
      acc.push(item.section);
    }
    return acc;
  }, []);

  const getSectionItems = (section: string) => {
    return checklistItems.filter(item => item.section === section);
  };

  const getOrderedSections = () => {
    const orderedSections = ['admin', 'general'];
    
    if (industry === 'media') {
      orderedSections.push('media_usecase');
    } else if (industry === 'conversational_ai') {
      orderedSections.push('conversational_usecase');
    }
    
    if (sections.includes('usecase_specific')) {
      orderedSections.push('usecase_specific');
    }
    
    return orderedSections.filter(s => 
      s === 'usecase_specific' || sections.includes(s)
    );
  };

  const orderedSections = getOrderedSections();

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">
        {industry === 'conversational_ai' ? 
          'Conversational AI Onboarding' :
          'Media & Entertainment Onboarding'}
      </h2>
      <p className="text-muted-foreground mb-6">
        {industry === 'conversational_ai' ?
          'Complete these steps to set up your ElevenLabs implementation for conversational AI and customer service use cases. Each step includes an estimated time to complete and links to relevant documentation.' :
          'Complete these steps to set up your ElevenLabs implementation for media and entertainment use cases. Each step includes an estimated time to complete and links to relevant documentation.'}
      </p>
      
      {orderedSections.length > 0 ? (
        <>
          {orderedSections.map(section => (
            <ChecklistSection 
              key={section}
              title={getSectionTitle(section)}
              items={getSectionItems(section)}
              onToggle={toggleItemCompletion}
            />
          ))}
        </>
      ) : (
        <Card className="p-6">
          <p className="text-muted-foreground">No checklist items available.</p>
        </Card>
      )}
    </div>
  );
};

export default OnboardingChecklist;
