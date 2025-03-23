
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import ChecklistSection from './onboarding-checklist/ChecklistSection';
import { ChecklistItem } from './onboarding-checklist/types';
import { getSectionTitle, getDefaultChecklistItems } from './onboarding-checklist/checklistData';
import CelebrationPopup from './CelebrationPopup';
import { useToast } from '@/hooks/use-toast';

interface OnboardingChecklistProps {
  onProgressUpdate: (completed: number, total: number) => void;
  industry?: string; // Added industry prop
}

const OnboardingChecklist: React.FC<OnboardingChecklistProps> = ({ 
  onProgressUpdate,
  industry = 'media' // Default to media if not provided
}) => {
  const [checklistItems, setChecklistItems] = useState<ChecklistItem[]>([]);
  const [celebrationOpen, setCelebrationOpen] = useState(false);
  const [allItemsCompleted, setAllItemsCompleted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Load saved state from localStorage
    const savedItems = localStorage.getItem('checklistItems-media');
    
    if (savedItems) {
      setChecklistItems(JSON.parse(savedItems));
    } else {
      // Load the media checklist items
      setChecklistItems(getDefaultChecklistItems());
    }
  }, []);

  useEffect(() => {
    const completedCount = checklistItems.filter(item => item.completed).length;
    onProgressUpdate(completedCount, checklistItems.length);
    
    // Check if all items are completed
    const allCompleted = completedCount === checklistItems.length && checklistItems.length > 0;
    
    // Only show celebration if transitioning from incomplete to complete
    if (allCompleted && !allItemsCompleted) {
      // Small delay to allow progress bar to update first
      setTimeout(() => {
        setCelebrationOpen(true);
        toast({
          title: "All steps completed!",
          description: "You've successfully completed all onboarding steps.",
        });
      }, 500);
    }
    
    setAllItemsCompleted(allCompleted);
    
    // Save to localStorage whenever items change
    localStorage.setItem('checklistItems-media', JSON.stringify(checklistItems));
  }, [checklistItems, onProgressUpdate, allItemsCompleted, toast]);

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

  // Get items for a specific section
  const getSectionItems = (section: string) => {
    return checklistItems.filter(item => item.section === section);
  };

  // Order sections
  const orderedSections = ['admin', 'general', 'usecase'].filter(s => sections.includes(s));

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">
        Media & Entertainment Onboarding
      </h2>
      <p className="text-muted-foreground mb-6">
        Complete these steps to set up your ElevenLabs implementation for media and entertainment use cases. Each step includes an estimated time to complete and links to relevant documentation.
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
      
      <CelebrationPopup 
        open={celebrationOpen} 
        onOpenChange={setCelebrationOpen} 
      />
    </div>
  );
};

export default OnboardingChecklist;
