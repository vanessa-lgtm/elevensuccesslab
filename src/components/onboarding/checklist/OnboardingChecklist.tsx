
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import ChecklistSection from './ChecklistSection';
import { getDefaultChecklistItems, getSectionTitle, getOrderedSections } from './ChecklistData';
import { ChecklistItemType } from './ChecklistItem';

interface OnboardingChecklistProps {
  onProgressUpdate: (completed: number, total: number) => void;
  industry?: string;
}

const OnboardingChecklist: React.FC<OnboardingChecklistProps> = ({ 
  onProgressUpdate,
  industry = "media"
}) => {
  const [checklistItems, setChecklistItems] = useState<ChecklistItemType[]>([]);

  useEffect(() => {
    // Load saved state from localStorage
    const savedItems = localStorage.getItem(`checklistItems-${industry}`);
    
    if (savedItems) {
      setChecklistItems(JSON.parse(savedItems));
    } else {
      // Initialize with default items
      setChecklistItems(getDefaultChecklistItems());
    }
  }, [industry]);

  useEffect(() => {
    // Only update progress and save to localStorage if we have items
    if (checklistItems.length > 0) {
      const completedCount = checklistItems.filter(item => item.completed).length;
      onProgressUpdate(completedCount, checklistItems.length);
      
      // Save to localStorage whenever items change
      localStorage.setItem(`checklistItems-${industry}`, JSON.stringify(checklistItems));
    }
  }, [checklistItems, onProgressUpdate, industry]);

  const toggleItemCompletion = (id: string) => {
    setChecklistItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // Get list of unique sections from items
  const sections = checklistItems.reduce<string[]>((acc, item) => {
    if (item.section && !acc.includes(item.section)) {
      acc.push(item.section);
    }
    return acc;
  }, []);

  // Get ordered sections that exist in our data
  const orderedSections = getOrderedSections().filter(s => sections.includes(s));

  // Group items by section
  const getItemsBySection = (section: string) => {
    return checklistItems.filter(item => item.section === section);
  };

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
              items={getItemsBySection(section)}
              onToggleItemCompletion={toggleItemCompletion}
            />
          ))}
        </>
      ) : (
        <Card className="p-6">
          <p className="text-muted-foreground">No checklist items available for the selected industry.</p>
        </Card>
      )}
    </div>
  );
};

export default OnboardingChecklist;
