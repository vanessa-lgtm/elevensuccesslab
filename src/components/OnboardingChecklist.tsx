
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import ChecklistSection from './onboarding-checklist/ChecklistSection';
import { ChecklistItem } from './onboarding-checklist/types';
import { getSectionTitle, getDefaultChecklistItems } from './onboarding-checklist/checklistData';

interface OnboardingChecklistProps {
  onProgressUpdate: (completed: number, total: number) => void;
  industry?: string;
}

const OnboardingChecklist: React.FC<OnboardingChecklistProps> = ({ 
  onProgressUpdate,
  industry = "media"
}) => {
  const [checklistItems, setChecklistItems] = useState<ChecklistItem[]>([]);

  useEffect(() => {
    // Load saved state from localStorage
    const savedItems = localStorage.getItem(`checklistItems-${industry}`);
    
    if (savedItems) {
      setChecklistItems(JSON.parse(savedItems));
    } else {
      // Load the correct industry checklist items based on the prop
      setChecklistItems(getDefaultChecklistItems(industry));
    }
  }, [industry]);

  useEffect(() => {
    const completedCount = checklistItems.filter(item => item.completed).length;
    onProgressUpdate(completedCount, checklistItems.length);
    
    // Save to localStorage whenever items change
    localStorage.setItem(`checklistItems-${industry}`, JSON.stringify(checklistItems));
  }, [checklistItems, onProgressUpdate, industry]);

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

  // Order sections based on industry
  let orderedSections: string[] = [];
  
  if (industry === 'conversational_ai') {
    orderedSections = ['admin', 'general', 'usecase'].filter(s => sections.includes(s));
  } else if (industry === 'media') {
    orderedSections = ['admin', 'general', 'usecase'].filter(s => sections.includes(s));
  } else {
    // Default industry (general)
    orderedSections = ['basics', 'general', 'implementation', 'admin'].filter(s => sections.includes(s));
  }

  // Display the correct title based on industry
  const getIndustryTitle = () => {
    if (industry === 'conversational_ai') {
      return 'Conversational AI Onboarding';
    } else if (industry === 'media') {
      return 'Media & Entertainment Onboarding';
    }
    return 'ElevenLabs Onboarding';
  };

  // Display the correct description based on industry
  const getIndustryDescription = () => {
    if (industry === 'conversational_ai') {
      return 'Complete these steps to set up your ElevenLabs implementation for conversational AI and customer service use cases. Each step includes an estimated time to complete and links to relevant documentation.';
    } else if (industry === 'media') {
      return 'Complete these steps to set up your ElevenLabs implementation for media and entertainment use cases. Each step includes an estimated time to complete and links to relevant documentation.';
    }
    return 'Complete these steps to set up your ElevenLabs implementation. Each step includes an estimated time to complete and links to relevant documentation.';
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">
        {getIndustryTitle()}
      </h2>
      <p className="text-muted-foreground mb-6">
        {getIndustryDescription()}
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
          <p className="text-muted-foreground">No checklist items available for the selected industry.</p>
        </Card>
      )}
    </div>
  );
};

export default OnboardingChecklist;
