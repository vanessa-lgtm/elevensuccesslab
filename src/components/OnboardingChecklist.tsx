
import React, { useState, useEffect } from 'react';
import { ChecklistItem } from './onboarding-checklist/types';
import ChecklistSection from './onboarding-checklist/ChecklistSection';
import { getDefaultChecklistItems, getSectionTitle } from './onboarding-checklist/checklistData';
import { Badge } from '@/components/ui/badge';
import { Flag } from 'lucide-react';

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
  const [sections, setSections] = useState<Record<string, ChecklistItem[]>>({});
  const localStorageKey = `checklist-${industry}`;

  useEffect(() => {
    // Get the checklist items based on the industry
    const items = getDefaultChecklistItems(industry);
    
    // Check if we have saved progress
    const savedItems = localStorage.getItem(localStorageKey);
    if (savedItems) {
      const parsedItems = JSON.parse(savedItems) as ChecklistItem[];
      
      // Make sure we update completion state but use the latest items list (in case it changed)
      const completionMap = parsedItems.reduce((acc, item) => {
        acc[item.id] = item.completed;
        return acc;
      }, {} as Record<string, boolean>);
      
      const updatedItems = items.map(item => ({
        ...item,
        completed: completionMap[item.id] || false
      }));
      
      setChecklistItems(updatedItems);
    } else {
      setChecklistItems(items);
    }
  }, [industry, localStorageKey]);

  useEffect(() => {
    // Group items by section
    const sectionGroups: Record<string, ChecklistItem[]> = {};
    
    checklistItems.forEach(item => {
      if (!sectionGroups[item.section]) {
        sectionGroups[item.section] = [];
      }
      sectionGroups[item.section].push(item);
    });
    
    setSections(sectionGroups);
    
    // Update progress
    const completedCount = checklistItems.filter(item => item.completed).length;
    onProgressUpdate(completedCount, checklistItems.length);
    
    // Check if all items are completed
    if (onAllCompleted) {
      onAllCompleted(completedCount === checklistItems.length && checklistItems.length > 0);
    }
    
    // Save progress to localStorage
    localStorage.setItem(localStorageKey, JSON.stringify(checklistItems));
  }, [checklistItems, onProgressUpdate, localStorageKey, onAllCompleted]);

  const toggleItemCompletion = (id: string) => {
    setChecklistItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // Get section ordering - make sure admin and general always come first
  const sectionOrder = Object.keys(sections).sort((a, b) => {
    if (a === 'admin') return -1;
    if (b === 'admin') return 1;
    if (a === 'general') return -1;
    if (b === 'general') return 1;
    return 0;
  });

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-2xl font-bold text-primary">Onboarding Checklist</h2>
        <Badge variant="outline" className="bg-purple-600 text-white border-purple-600 flex items-center gap-1 py-1">
          <Flag className="h-3 w-3" />
          <span>BETA</span>
        </Badge>
      </div>
      <p className="text-muted-foreground mb-6">
        Complete these steps to set up and get the most out of ElevenLabs. 
        Track your progress as you go.
      </p>
      
      {sectionOrder.map(section => (
        <ChecklistSection
          key={section}
          title={getSectionTitle(section)}
          items={sections[section]}
          onToggle={toggleItemCompletion}
        />
      ))}
      
      <div className="mt-10 pt-6 border-t border-border">
        <h3 className="text-xl font-semibold mb-4 text-primary">Need Help?</h3>
        <p className="text-muted-foreground mb-6">
          Have questions about ElevenLabs? Speak directly with our AI voice assistant for immediate help and guidance.
        </p>
        <div className="flex justify-center py-4">
          <div className="w-full">
            <elevenlabs-convai 
              agent-id="sVj20Vdiohi2hKyMGZt8"
              theme="light"
              position="center"
              expanded="true"
              header-text="Voice Assistant"
              placeholder-text="Type or speak your question about ElevenLabs...">
            </elevenlabs-convai>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingChecklist;
