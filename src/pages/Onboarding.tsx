import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OnboardingChecklist from '@/components/OnboardingChecklist';
import WebinarPopup from '@/components/WebinarPopup';
import VideoEmbed from '@/components/VideoEmbed';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Flag } from 'lucide-react';
import CelebrationPopup from '@/components/CelebrationPopup';
import { useToast } from '@/hooks/use-toast';
import ModelsDialog from '@/components/ModelsDialog';
import KeyActionsSection from '@/components/onboarding/KeyActionsSection';
import ResourcesSection from '@/components/onboarding/ResourcesSection';

const mediaIndustries = [
  'localization', 'broadcasting', 'streaming', 'film', 
  'marketing', 'gaming', 'digital_media', 'audio_production'
];

const conversationalAIUseCases = [
  'conversational_ai'
];

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [activeTab, setActiveTab] = useState("checklist");
  const [industry, setIndustry] = useState<string>("media");
  const [useCase, setUseCase] = useState<string | null>(null);
  const [completedActions, setCompletedActions] = useState<Record<string, boolean>>({});
  const [checklistCompleted, setChecklistCompleted] = useState(false);
  const [keyActionsCompleted, setKeyActionsCompleted] = useState(false);
  const [celebrationOpen, setCelebrationOpen] = useState(false);
  const { toast } = useToast();
  
  const location = useLocation();
  const navigate = useNavigate();
  
  const localStorageKeyActions = `completedActions-${industry}`;

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const industryParam = params.get('industry');
    const planParam = params.get('plan');
    const useCaseParam = params.get('useCase');
    
    if (industryParam) {
      if (mediaIndustries.includes(industryParam)) {
        setIndustry('media');
      } else if (conversationalAIUseCases.includes(industryParam)) {
        setIndustry('conversational_ai');
      }
    }
    
    if (planParam === 'conversational_ai' || 
        (useCaseParam && conversationalAIUseCases.includes(useCaseParam))) {
      setIndustry('conversational_ai');
      setUseCase(useCaseParam || 'conversational_ai');
    }
    
    const tabParam = params.get('tab');
    if (tabParam && ['checklist', 'key-actions', 'resources'].includes(tabParam)) {
      setActiveTab(tabParam);
    } else {
      setActiveTab("checklist");
    }

    const savedCompletedActions = localStorage.getItem(localStorageKeyActions);
    if (savedCompletedActions) {
      setCompletedActions(JSON.parse(savedCompletedActions));
    } else {
      setCompletedActions({});
    }
  }, [location, localStorageKeyActions, industry]);
  
  const handleProgressUpdate = (completed: number, total: number) => {
    setCurrentStep(Math.round((completed / total) * 100));
  };
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    navigate(`/onboarding?industry=${industry}&tab=${value}${useCase ? `&useCase=${useCase}` : ''}`, { replace: true });
  };

  const toggleActionCompletion = (id: string) => {
    setCompletedActions(prev => {
      const newCompletedActions = { 
        ...prev, 
        [id]: !prev[id] 
      };
      
      localStorage.setItem(localStorageKeyActions, JSON.stringify(newCompletedActions));
      
      const keyActionsList = industry === 'conversational_ai' ? 
        conversationalAIKeyActionSteps : mediaKeyActionSteps;
      
      const allKeyActionsCompleted = keyActionsList.every(
        action => newCompletedActions[action.id]
      );
      
      setKeyActionsCompleted(allKeyActionsCompleted);
      
      if (allKeyActionsCompleted && checklistCompleted && !celebrationOpen) {
        setTimeout(() => {
          setCelebrationOpen(true);
          toast({
            title: "All steps completed!",
            description: "You've successfully completed all onboarding steps and key actions.",
          });
        }, 500);
      }
      
      return newCompletedActions;
    });
  };

  const handleChecklistCompletion = (completed: boolean) => {
    setChecklistCompleted(completed);
    
    if (completed && keyActionsCompleted && !celebrationOpen) {
      setTimeout(() => {
        setCelebrationOpen(true);
        toast({
          title: "All steps completed!",
          description: "You've successfully completed all onboarding steps and key actions.",
        });
      }, 500);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-10 pt-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              {industry === 'conversational_ai' ? 
                'Conversational AI Onboarding' : 
                'Media & Entertainment Onboarding'}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              {industry === 'conversational_ai' ? 
                'Welcome to your personalized onboarding experience. We\'ve tailored this guide to help you implement voice-based conversational AI and customer service solutions with ElevenLabs.' : 
                'Welcome to your personalized onboarding experience. We\'ve tailored this guide to help media and entertainment professionals get the most out of ElevenLabs.'}
            </p>
            
            <div className="mb-8">
              <VideoEmbed 
                videoId={industry === 'conversational_ai' ? 'IWPjpE8shZw' : 'IWPjpE8shZw'} 
                title={industry === 'conversational_ai' ? 
                  'ElevenLabs Conversational AI Onboarding Video' : 
                  'ElevenLabs Onboarding Video'}
              />
            </div>
          </div>
          
          <div className="mb-10 bg-card rounded-lg p-4 shadow-sm border border-muted">
            <div className="flex items-center mb-2">
              <div className="w-full bg-secondary rounded-full h-2.5 mr-2">
                <div 
                  className="bg-primary h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${currentStep}%` }}
                />
              </div>
              <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">{currentStep}% Complete</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Getting Started</span>
              <span>Mastering ElevenLabs</span>
            </div>
          </div>
          
          <div className="mb-6 text-center">
            <ModelsDialog />
          </div>
          
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="checklist" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
                Onboarding Checklist
              </TabsTrigger>
              <TabsTrigger value="key-actions" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
                Key Actions
              </TabsTrigger>
              <TabsTrigger value="resources" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
                Resources
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="checklist" className="mt-4 space-y-4 animate-fade-in">
              <div className="bg-card p-6 rounded-lg shadow-sm border border-muted">
                <OnboardingChecklist 
                  onProgressUpdate={handleProgressUpdate} 
                  industry={industry} 
                  onAllCompleted={handleChecklistCompletion}
                />
              </div>
            </TabsContent>
            
            <TabsContent value="key-actions" className="mt-4 animate-fade-in">
              <KeyActionsSection 
                industry={industry}
                completedActions={completedActions}
                onToggleAction={toggleActionCompletion}
              />
            </TabsContent>
            
            <TabsContent value="resources" className="mt-4 animate-fade-in">
              <ResourcesSection industry={industry} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
      <WebinarPopup />
      <CelebrationPopup 
        open={celebrationOpen} 
        onOpenChange={setCelebrationOpen} 
      />
    </div>
  );
};

export default Onboarding;
