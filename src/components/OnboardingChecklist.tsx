
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { CheckCircle, Clock } from 'lucide-react';

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  timeEstimate: string;
  completed: boolean;
  section?: string;
}

interface OnboardingChecklistProps {
  onProgressUpdate: (completed: number, total: number) => void;
}

const OnboardingChecklist: React.FC<OnboardingChecklistProps> = ({ onProgressUpdate }) => {
  const [checklistItems, setChecklistItems] = useState<ChecklistItem[]>([
    {
      id: '1',
      title: 'Create your account',
      description: 'Set up your personal profile and customize your account settings.',
      timeEstimate: '5 min',
      completed: false,
      section: 'basics',
    },
    {
      id: '9',
      title: 'Verify billing information',
      description: 'Make sure your billing is set up with the correct payment method and your billing contact on file is correct (you can verify this with customer support).',
      timeEstimate: '5 min',
      completed: false,
      section: 'basics',
    },
    {
      id: '2',
      title: 'Complete the AI readiness assessment',
      description: 'Answer a few questions to help us understand your current AI maturity level.',
      timeEstimate: '10 min',
      completed: false,
    },
    {
      id: '3',
      title: 'Set up your first project',
      description: 'Create your first AI project and define your objectives.',
      timeEstimate: '15 min',
      completed: false,
    },
    {
      id: '4',
      title: 'Connect your data sources',
      description: 'Integrate your existing data sources to power your AI solutions.',
      timeEstimate: '20 min',
      completed: false,
    },
    {
      id: '5',
      title: 'Configure your first AI model',
      description: 'Select and configure an AI model that matches your business needs.',
      timeEstimate: '30 min',
      completed: false,
    },
    {
      id: '6',
      title: 'Test your implementation',
      description: 'Run initial tests to ensure your AI solution is working correctly.',
      timeEstimate: '15 min',
      completed: false,
    },
    {
      id: '7',
      title: 'Invite team members',
      description: 'Add your colleagues to collaborate on your AI projects.',
      timeEstimate: '5 min',
      completed: false,
    },
    {
      id: '8',
      title: 'Schedule your first training session',
      description: 'Book a session with our experts to get the most out of NexusAI.',
      timeEstimate: '10 min',
      completed: false,
    },
  ]);

  // Update progress when checklist items change
  useEffect(() => {
    const completedCount = checklistItems.filter(item => item.completed).length;
    onProgressUpdate(completedCount, checklistItems.length);
  }, [checklistItems, onProgressUpdate]);

  const toggleItemCompletion = (id: string) => {
    setChecklistItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // Get unique sections for rendering headers
  const sections = checklistItems.reduce<string[]>((acc, item) => {
    if (item.section && !acc.includes(item.section)) {
      acc.push(item.section);
    }
    return acc;
  }, []);

  const renderSection = (section: string) => {
    const sectionTitle = section === 'basics' ? 'The Basics' : section;
    return (
      <div key={section} className="mb-6">
        <h3 className="text-xl font-semibold mb-4">{sectionTitle}</h3>
        {checklistItems
          .filter(item => item.section === section)
          .map((item, index, filteredItems) => (
            <Card 
              key={item.id}
              className={cn(
                "p-4 transition-all duration-200 mb-4",
                item.completed ? "border-primary/50 bg-primary/5" : ""
              )}
            >
              <div className="flex items-start gap-4">
                <div className="pt-1">
                  <Checkbox 
                    id={`checklist-item-${item.id}`} 
                    checked={item.completed}
                    onCheckedChange={() => toggleItemCompletion(item.id)}
                    className={cn(item.completed ? "text-primary" : "")}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <label 
                      htmlFor={`checklist-item-${item.id}`}
                      className={cn(
                        "font-medium text-lg cursor-pointer",
                        item.completed ? "line-through text-muted-foreground" : ""
                      )}
                    >
                      {item.title}
                    </label>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Clock className="h-3.5 w-3.5 mr-1" />
                      {item.timeEstimate}
                    </div>
                  </div>
                  <p className={cn(
                    "text-muted-foreground mt-1",
                    item.completed ? "line-through" : ""
                  )}>
                    {item.description}
                  </p>
                  
                  {item.completed && (
                    <div className="mt-3 text-sm text-primary flex items-center">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Completed
                    </div>
                  )}
                </div>
              </div>
              
              {index < filteredItems.length - 1 && (
                <Separator className="mt-4" />
              )}
            </Card>
          ))}
      </div>
    );
  };

  // Separate non-sectioned items
  const nonSectionedItems = checklistItems.filter(item => !item.section);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Onboarding Checklist</h2>
      <p className="text-muted-foreground mb-6">
        Complete these steps to fully set up your NexusAI implementation. Each step includes an estimated time to complete.
      </p>
      
      {/* Render sectioned items first */}
      {sections.map(section => renderSection(section))}
      
      {/* Render non-sectioned items */}
      {nonSectionedItems.map((item, index) => (
        <Card 
          key={item.id}
          className={cn(
            "p-4 transition-all duration-200",
            item.completed ? "border-primary/50 bg-primary/5" : ""
          )}
        >
          <div className="flex items-start gap-4">
            <div className="pt-1">
              <Checkbox 
                id={`checklist-item-${item.id}`} 
                checked={item.completed}
                onCheckedChange={() => toggleItemCompletion(item.id)}
                className={cn(item.completed ? "text-primary" : "")}
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <label 
                  htmlFor={`checklist-item-${item.id}`}
                  className={cn(
                    "font-medium text-lg cursor-pointer",
                    item.completed ? "line-through text-muted-foreground" : ""
                  )}
                >
                  {item.title}
                </label>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Clock className="h-3.5 w-3.5 mr-1" />
                  {item.timeEstimate}
                </div>
              </div>
              <p className={cn(
                "text-muted-foreground mt-1",
                item.completed ? "line-through" : ""
              )}>
                {item.description}
              </p>
              
              {item.completed && (
                <div className="mt-3 text-sm text-primary flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Completed
                </div>
              )}
            </div>
          </div>
          
          {index < nonSectionedItems.length - 1 && (
            <Separator className="mt-4" />
          )}
        </Card>
      ))}
      
      <div className="mt-8 text-center">
        <p className="text-muted-foreground mb-2">
          Need help with any of these steps?
        </p>
        <button className="text-primary font-medium hover:underline">
          Contact our support team
        </button>
      </div>
    </div>
  );
};

export default OnboardingChecklist;
