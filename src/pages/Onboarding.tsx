
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OnboardingChecklist from '@/components/OnboardingChecklist';
import OnboardingSurvey from '@/components/OnboardingSurvey';
import WebinarPopup from '@/components/WebinarPopup';

const Onboarding = () => {
  const [currentStep, setCurrentStep] = React.useState(0);
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Welcome to SuccessLab!</h1>
        <p className="text-gray-600 mb-8">Let's get you set up for success.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <OnboardingChecklist currentStep={currentStep} />
          </div>
          <div>
            <OnboardingSurvey />
          </div>
        </div>
      </div>
      
      <Footer />
      <WebinarPopup />
    </div>
  );
};

export default Onboarding;
