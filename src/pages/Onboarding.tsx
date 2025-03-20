
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WebinarPopup from '@/components/WebinarPopup';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import OnboardingHeader from '@/components/onboarding/OnboardingHeader';
import OnboardingTabContent from '@/components/onboarding/OnboardingTabContent';
import { mediaKeyActionSteps, mediaResources } from '@/data/mediaOnboardingData';

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [activeTab, setActiveTab] = useState("checklist");
  const [industry] = useState<string>("media"); // Always set to "media" as default
  const [completedActions, setCompletedActions] = useState<Record<string, boolean>>({});
  
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabParam = params.get('tab');
    if (tabParam && ['checklist', 'key-actions', 'resources'].includes(tabParam)) {
      setActiveTab(tabParam);
    } else {
      // Default to checklist tab if no valid tab parameter
      setActiveTab('checklist');
      navigate('/onboarding?industry=media&tab=checklist', { replace: true });
    }

    const savedCompletedActions = localStorage.getItem('completedActions');
    if (savedCompletedActions) {
      setCompletedActions(JSON.parse(savedCompletedActions));
    }
    
    // Force a re-render after a short delay to ensure components are mounted
    const timer = setTimeout(() => {
      console.log("Forcing re-render of Onboarding component");
      setCurrentStep(prev => prev); // This forces a re-render
    }, 100);
    
    return () => clearTimeout(timer);
  }, [location, navigate]);
  
  const handleProgressUpdate = (completed: number, total: number) => {
    console.log(`Progress update: ${completed}/${total}`);
    const newStep = total > 0 ? Math.round((completed / total) * 100) : 0;
    setCurrentStep(newStep);
  };
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    navigate(`/onboarding?industry=media&tab=${value}`, { replace: true });
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
  
  const keyActionSteps = mediaKeyActionSteps;
  const resources = mediaResources;
  
  console.log("Rendering Onboarding page with industry:", industry);
  console.log("Active tab:", activeTab);
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-10 pt-24">
        <div className="max-w-4xl mx-auto">
          <OnboardingHeader industry="media" currentStep={currentStep} />
          
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
              industry="media"
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
