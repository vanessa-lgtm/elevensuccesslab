
import React from 'react';
import VideoEmbed from '@/components/VideoEmbed';

interface OnboardingHeaderProps {
  industry: string;
  currentStep: number;
}

const OnboardingHeader: React.FC<OnboardingHeaderProps> = ({ 
  industry,
  currentStep
}) => {
  return (
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
          videoId={industry === 'conversational_ai' ? 
            'GV3zMRqcn7M' : 
            'z0sD2BvUfM0'} 
          platform={industry === 'conversational_ai' ?
            'youtube' : 
            'youtube'}
          title={industry === 'conversational_ai' ? 
            'ElevenLabs Conversational AI Overview' : 
            'ElevenLabs Onboarding Video'}
        />
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
    </div>
  );
};

export default OnboardingHeader;
