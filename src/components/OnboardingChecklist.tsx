import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { CheckCircle, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  timeEstimate: string;
  completed: boolean;
  section: string;
  link?: string;
}

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
    if (industry === "media") {
      setChecklistItems([
        {
          id: '1',
          title: 'Set up your account and billing',
          description: 'Configure your workspace settings, user profile, and billing information.',
          timeEstimate: '10 min',
          completed: false,
          section: 'admin',
          link: 'https://elevenlabs.io/docs/product-guides/administration/workspaces/overview'
        },
        {
          id: '2',
          title: 'Configure team collaboration',
          description: 'Set up user groups and permission levels for your team members.',
          timeEstimate: '15 min',
          completed: false,
          section: 'admin',
          link: 'https://elevenlabs.io/docs/product-guides/administration/workspaces/user-groups'
        },
        {
          id: '3',
          title: 'Share resources with your team',
          description: 'Invite team members to your Enterprise Workspace and set up resource sharing.',
          timeEstimate: '10 min',
          completed: false,
          section: 'admin',
          link: 'https://elevenlabs.io/docs/product-guides/administration/workspaces/sharing-resources'
        },
        {
          id: '4',
          title: 'Manage usage & billing',
          description: 'Activate usage-based billing to avoid hitting your quota and set up usage alerts.',
          timeEstimate: '10 min',
          completed: false,
          section: 'admin',
          link: 'https://elevenlabs.io/docs/product-guides/administration/billing'
        },
        {
          id: '5',
          title: 'Set up product update notifications',
          description: 'Configure your notification preferences to stay updated with the latest product improvements.',
          timeEstimate: '5 min',
          completed: false,
          section: 'admin'
        },
        {
          id: '6',
          title: 'Monitor service status',
          description: 'Subscribe to the ElevenLabs status page for real-time service updates.',
          timeEstimate: '5 min',
          completed: false,
          section: 'admin',
          link: 'https://status.elevenlabs.io/'
        },
        
        {
          id: '7',
          title: 'Learn about AI voice models',
          description: 'Understand the different voice models available and their specific use cases for media productions.',
          timeEstimate: '20 min',
          completed: false,
          section: 'general',
          link: 'https://elevenlabs.io/docs/models'
        },
        {
          id: '8',
          title: 'Review API scaling best practices',
          description: 'Learn how to optimize API usage for high-volume media production environments.',
          timeEstimate: '25 min',
          completed: false,
          section: 'general',
          link: 'https://elevenlabs.io/docs/api-reference/overview'
        },
        {
          id: '9',
          title: 'Schedule custom concurrency limits discussion',
          description: 'Work with our team to scale high-throughput applications for your media content generation needs.',
          timeEstimate: '30 min',
          completed: false,
          section: 'general'
        },
        
        {
          id: '10',
          title: 'Select the right voices for your content',
          description: 'Choose from pre-designed voices, clone existing ones, or create custom voices to match your brand, characters, or audience needs.',
          timeEstimate: '30 min',
          completed: false,
          section: 'usecase',
          link: 'https://elevenlabs.io/voices'
        },
        {
          id: '11',
          title: 'Create custom voice clones',
          description: 'Develop personalized voice clones using Instant Voice Cloning (IVC) for quick results or Professional Voice Cloning (PVC) for high-accuracy and customization.',
          timeEstimate: '45 min',
          completed: false,
          section: 'usecase',
          link: 'https://elevenlabs.io/docs/product-guides/voices/voice-cloning'
        },
        {
          id: '12',
          title: 'Learn instant voice cloning techniques',
          description: 'Master the art of creating quick voice clones for rapid content production and iteration.',
          timeEstimate: '25 min',
          completed: false,
          section: 'usecase',
          link: 'https://elevenlabs.io/docs/product-guides/voices/voice-cloning/instant-voice-cloning'
        },
        {
          id: '13',
          title: 'Set up high-quality text-to-speech workflows',
          description: 'Configure your text-to-speech settings to deliver natural, high-quality speech for your media content.',
          timeEstimate: '30 min',
          completed: false,
          section: 'usecase',
          link: 'https://elevenlabs.io/docs/product-guides/playground/text-to-speech'
        },
        {
          id: '14',
          title: 'Explore voice transformation capabilities',
          description: 'Learn how to transform any voice with Voice Changer for creative audio productions.',
          timeEstimate: '20 min',
          completed: false,
          section: 'usecase',
          link: 'https://elevenlabs.io/docs/product-guides/playground/voice-changer'
        },
        {
          id: '15',
          title: 'Incorporate AI-generated sound effects',
          description: 'Enhance your media content with AI-generated sound effects for immersive audio experiences.',
          timeEstimate: '25 min',
          completed: false,
          section: 'usecase',
          link: 'https://elevenlabs.io/docs/product-guides/playground/sound-effects'
        },
      ]);
    } else {
      setChecklistItems([
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
          description: 'Book a session with our experts to get the most out of ElevenLabs.',
          timeEstimate: '10 min',
          completed: false,
        },
      ]);
    }
  }, [industry]);

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

  const sections = checklistItems.reduce<string[]>((acc, item) => {
    if (item.section && !acc.includes(item.section)) {
      acc.push(item.section);
    }
    return acc;
  }, []);

  const sectionTitles: Record<string, string> = {
    'admin': 'Administration',
    'general': 'Product General Information',
    'usecase': 'Media & Entertainment Use Cases',
    'basics': 'The Basics'
  };

  const renderSection = (section: string) => {
    const sectionTitle = sectionTitles[section] || section;
    
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
                  
                  {item.link && (
                    <div className="mt-3">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-1 text-xs"
                        onClick={() => window.open(item.link, '_blank')}
                      >
                        Documentation
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </div>
                  )}
                  
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

  const orderedSections = ['admin', 'general', 'usecase'].filter(s => sections.includes(s));

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Media & Entertainment Onboarding</h2>
      <p className="text-muted-foreground mb-6">
        Complete these steps to set up your ElevenLabs implementation for media and entertainment use cases. Each step includes an estimated time to complete and links to relevant documentation.
      </p>
      
      {

