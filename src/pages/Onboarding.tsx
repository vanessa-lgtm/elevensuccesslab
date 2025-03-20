
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WebinarPopup from '@/components/WebinarPopup';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import OnboardingHeader from '@/components/onboarding/OnboardingHeader';
import OnboardingTabContent from '@/components/onboarding/OnboardingTabContent';
import { mediaKeyActionSteps, mediaResources } from '@/data/mediaOnboardingData';
import { conversationalAIKeyActionSteps, conversationalAIResources } from '@/data/conversationalAIOnboardingData';

const mediaIndustries = [
  'localization', 'broadcasting', 'streaming', 'film', 
  'marketing', 'gaming', 'digital_media', 'audio_production'
];

const conversationalAIUseCases = [
  'conversational_ai', 'customer_service', 'call_center'
];

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [activeTab, setActiveTab] = useState("checklist");
  const [industry, setIndustry] = useState<string>("media");
  const [useCase, setUseCase] = useState<string | null>(null);
  const [completedActions, setCompletedActions] = useState<Record<string, boolean>>({});
  
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const industryParam = params.get('industry');
    const planParam = params.get('plan');
    const useCaseParam = params.get('useCase');
    
    if (industryParam && mediaIndustries.includes(industryParam)) {
      setIndustry('media');
    }
    
    if (planParam === 'conversational_ai' || 
        (useCaseParam && conversationalAIUseCases.includes(useCaseParam))) {
      setIndustry('conversational_ai');
      setUseCase(useCaseParam || 'conversational_ai');
    }
    
    const tabParam = params.get('tab');
    if (tabParam && ['checklist', 'key-actions', 'resources'].includes(tabParam)) {
      setActiveTab(tabParam);
    }

    const savedCompletedActions = localStorage.getItem('completedActions');
    if (savedCompletedActions) {
      setCompletedActions(JSON.parse(savedCompletedActions));
    }
  }, [location]);
  
  const handleProgressUpdate = (completed: number, total: number) => {
    setCurrentStep(Math.round((completed / total) * 100));
  };
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    navigate(`/get-started?industry=${industry}&tab=${value}${useCase ? `&useCase=${useCase}` : ''}`, { replace: true });
  };

  const toggleActionCompletion = (id: string) => {
    setCompletedActions(prev => {
      const newCompletedActions = { 
        ...prev, 
        [id]: !prev[id] 
      };
      
      localStorage.setItem('completedActions', JSON.stringify(newCompletedActions));
      
      return newCompletedActions;
    });
  };
  
  const keyActionSteps = industry === 'conversational_ai' ? 
    conversationalAIKeyActionSteps : mediaKeyActionSteps;
  
  const resources = industry === 'conversational_ai' ? 
    conversationalAIResources : mediaResources;
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-10 pt-24">
        <div className="max-w-4xl mx-auto">
          <OnboardingHeader industry={industry} currentStep={currentStep} />
          
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="checklist" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary">Onboarding Checklist</TabsTrigger>
              <TabsTrigger value="key-actions" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary">Key Actions</TabsTrigger>
              <TabsTrigger value="resources" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary">Resources</TabsTrigger>
            </TabsList>
            
            <OnboardingTabContent 
              activeTab={activeTab}
              currentStep={currentStep}
              handleProgressUpdate={handleProgressUpdate}
              industry={industry}
              keyActionSteps={keyActionSteps}
              resources={resources}
              completedActions={completedActions}
              toggleActionCompletion={toggleActionCompletion}
            />
          </Tabs>
        </div>
      </div>
      
      <Footer />
      <WebinarPopup />
    </div>
  );
};

export default Onboarding;
