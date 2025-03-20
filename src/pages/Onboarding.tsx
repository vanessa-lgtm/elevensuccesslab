import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OnboardingChecklist from '@/components/OnboardingChecklist';
import WebinarPopup from '@/components/WebinarPopup';
import VideoEmbed from '@/components/VideoEmbed';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import { ChevronDown, ChevronRight, Shield, BookOpen, Film, Globe, Download, MicVocal, Music, Code, Check, MessageCircle, Phone, Headset } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';

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
    navigate(`/onboarding?industry=${industry}&tab=${value}${useCase ? `&useCase=${useCase}` : ''}`, { replace: true });
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
  
  const mediaKeyActionSteps = [
    {
      id: 'api-request',
      title: 'Make Your First API Request',
      description: 'Start integrating ElevenLabs into your applications and workflows.',
      icon: <Code className="h-8 w-8 text-primary" />,
      steps: [
        'Generate your API key in your account settings',
        'Install the API client library for your programming language',
        'Make a simple text-to-speech API call',
        'Set voice and model parameters',
        'Receive and use the generated audio'
      ],
      link: 'https://elevenlabs.io/docs/quickstart'
    },
    {
      id: 'add-voice',
      title: 'Add a Voice to Your Library',
      description: 'Choose from our diverse catalog of pre-made voices for your productions.',
      icon: <Download className="h-8 w-8 text-primary" />,
      steps: [
        'Visit the Voice Library page',
        'Browse the available voices by category, language, or style',
        'Preview voices by clicking the play button next to each one',
        'Click "Add to My Voices" for any voice you want to use',
        'Find your selected voices in the "My Voices" section'
      ],
      link: 'https://elevenlabs.io/voice-library'
    },
    {
      id: 'create-clone',
      title: 'Create Your First Voice Clone',
      description: 'Clone a voice for consistent branding or character development.',
      icon: <Globe className="h-8 w-8 text-primary" />,
      steps: [
        'Go to the Voice Cloning page',
        'Click "Add Voice" to start the cloning process',
        'Choose "Instant Voice Cloning" for quick results',
        'Upload 1-3 minutes of clean audio samples',
        'Name your voice and add a description',
        'Create your voice clone and test it'
      ],
      link: 'https://elevenlabs.io/voice-cloning'
    },
    {
      id: 'sound-effects',
      title: 'Generate AI Sound Effects',
      description: 'Create custom sound effects to enhance your media productions.',
      icon: <Music className="h-8 w-8 text-primary" />,
      steps: [
        'Navigate to the Sound Effects page',
        'Describe the sound effect you want to generate',
        'Adjust duration and other parameters as needed',
        'Click "Generate" to create your sound effect',
        'Preview and download the generated audio file'
      ],
      link: 'https://elevenlabs.io/sound-effects'
    },
    {
      id: 'generate-tts',
      title: 'Generate Your First TTS Audio',
      description: 'Create your first AI-generated voice clip in just a few minutes.',
      icon: <MicVocal className="h-8 w-8 text-primary" />,
      steps: [
        'Log in to your ElevenLabs account',
        'Navigate to the Speech Synthesis page',
        'Select a pre-made voice from the dropdown',
        'Type or paste your script in the text area',
        'Click "Generate" to create your audio',
        'Listen to the result and download if satisfied'
      ],
      link: 'https://elevenlabs.io/speech-synthesis'
    }
  ];

  const conversationalAIKeyActionSteps = [
    {
      id: 'api-request',
      title: 'Make Your First API Request',
      description: 'Start integrating ElevenLabs into your conversational AI applications.',
      icon: <Code className="h-8 w-8 text-primary" />,
      steps: [
        'Generate your API key in your account settings',
        'Install the API client library for your programming language',
        'Make a simple text-to-speech API call',
        'Set voice and model parameters',
        'Receive and use the generated audio'
      ],
      link: 'https://elevenlabs.io/docs/quickstart'
    },
    {
      id: 'voice-selection',
      title: 'Select the Right AI Voice',
      description: 'Choose the perfect voice for your conversational assistant or call center application.',
      icon: <MicVocal className="h-8 w-8 text-primary" />,
      steps: [
        'Visit the Voice Library page',
        'Listen to different voice samples',
        'Consider voice characteristics that match your brand',
        'Test selected voices with sample dialog',
        'Add selected voices to your library'
      ],
      link: 'https://elevenlabs.io/voice-library'
    },
    {
      id: 'conversation-design',
      title: 'Design Your Conversation Flows',
      description: 'Create natural, engaging conversation flows for your AI assistant.',
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
      steps: [
        'Map out common user intents and questions',
        'Design conversation branches and responses',
        'Implement voice-specific language and phrasing',
        'Create fallback paths for unexpected inputs',
        'Test conversation flows with real users'
      ],
      link: 'https://elevenlabs.io/docs/agent-overview'
    },
    {
      id: 'call-center-integration',
      title: 'Set Up Call Center Integration',
      description: 'Integrate ElevenLabs voice technology with your existing call center infrastructure.',
      icon: <Phone className="h-8 w-8 text-primary" />,
      steps: [
        'Identify integration points in your current system',
        'Configure API webhooks and endpoints',
        'Set up real-time speech synthesis for calls',
        'Implement call transfer and handoff logic',
        'Test with sample customer scenarios'
      ],
      link: 'https://elevenlabs.io/docs/api-reference/overview'
    },
    {
      id: 'multilingual-support',
      title: 'Configure Multilingual Support',
      description: 'Expand your conversational AI to support multiple languages.',
      icon: <Globe className="h-8 w-8 text-primary" />,
      steps: [
        'Select multilingual voice models',
        'Configure language detection',
        'Set up language-specific conversation flows',
        'Test pronunciation and inflection',
        'Implement language switching capabilities'
      ],
      link: 'https://elevenlabs.io/docs/language-support'
    },
    {
      id: 'generate-tts',
      title: 'Test Real-Time Voice Responses',
      description: 'Configure and test real-time voice synthesis for conversational applications.',
      icon: <Headset className="h-8 w-8 text-primary" />,
      steps: [
        'Set up low-latency audio streaming',
        'Configure voice parameters for real-time use',
        'Implement audio buffering strategies',
        'Test response times under various conditions',
        'Optimize for different network environments'
      ],
      link: 'https://elevenlabs.io/speech-synthesis'
    }
  ];

  const mediaResources = [
    {
      title: 'Product Guide',
      description: 'Comprehensive guide for implementing ElevenLabs in media production workflows.',
      icon: <Film className="h-6 w-6 text-primary" />,
      link: 'https://elevenlabs.io/docs/guides/media'
    },
    {
      title: 'Voice Cloning Best Practices',
      description: 'Learn techniques for getting the best results with voice cloning technology.',
      icon: <MicVocal className="h-6 w-6 text-primary" />,
      link: 'https://elevenlabs.io/docs/product-guides/voices/voice-cloning'
    },
    {
      title: 'API Integration for Media Applications',
      description: 'Technical documentation for integrating with the ElevenLabs API.',
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      link: 'https://elevenlabs.io/docs/api-reference/overview'
    },
    {
      title: 'Security & Compliance Guide',
      description: 'Information about our security features and compliance certifications.',
      icon: <Shield className="h-6 w-6 text-primary" />,
      link: 'https://elevenlabs.io/docs/guides/security'
    },
    {
      title: 'Customer Story: Bertelsmann',
      description: 'Learn how Bertelsmann is using ElevenLabs to transform their media business.',
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      link: 'https://elevenlabs.io/blog/bertelsmann'
    },
    {
      title: 'Customer Story: Star Sports',
      description: 'See how Star Sports leverages AI voice technology for sports broadcasting.',
      icon: <Film className="h-6 w-6 text-primary" />,
      link: 'https://elevenlabs.io/blog/starsports'
    }
  ];

  const conversationalAIResources = [
    {
      title: 'Conversational AI Implementation Guide',
      description: 'Comprehensive guide for implementing voice-based conversational AI systems.',
      icon: <MessageCircle className="h-6 w-6 text-primary" />,
      link: 'https://elevenlabs.io/docs/guides/conversational-ai'
    },
    {
      title: 'Call Center Automation Best Practices',
      description: 'Learn techniques for effective call center automation with AI voice technology.',
      icon: <Phone className="h-6 w-6 text-primary" />,
      link: 'https://elevenlabs.io/docs/call-center-automation'
    },
    {
      title: 'Voice Design for Customer Service',
      description: 'Guidelines for creating natural and helpful voice interactions for customer service.',
      icon: <Headset className="h-6 w-6 text-primary" />,
      link: 'https://elevenlabs.io/docs/guides/voice-design'
    },
    {
      title: 'API Integration for Real-Time Voice Applications',
      description: 'Technical documentation for integrating with the ElevenLabs API for real-time use.',
      icon: <Code className="h-6 w-6 text-primary" />,
      link: 'https://elevenlabs.io/docs/api-reference/overview'
    },
    {
      title: 'Security & Compliance for Voice Assistants',
      description: 'Information about security features and compliance for handling customer conversations.',
      icon: <Shield className="h-6 w-6 text-primary" />,
      link: 'https://elevenlabs.io/docs/guides/security'
    },
    {
      title: 'Customer Story: ABC Financial',
      description: 'Learn how ABC Financial transformed their customer service with AI voice technology.',
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      link: 'https://elevenlabs.io/blog/abc-financial'
    }
  ];

  const keyActionSteps = industry === 'conversational_ai' ? 
    conversationalAIKeyActionSteps : mediaKeyActionSteps;
  
  const resources = industry === 'conversational_ai' ? 
    conversationalAIResources : mediaResources;
  
  const KeyActionItem = ({ step }: { step: typeof keyActionSteps[0] }) => {
    const [isOpen, setIsOpen] = useState(false);
    const isCompleted = completedActions[step.id] || false;
    
    return (
      <Card className={cn(
        "mb-4 border-primary/20 hover:border-primary/40 transition-all duration-200",
        isCompleted ? "border-primary/50 bg-primary/5" : ""
      )}>
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <div className="flex items-start p-4">
            <div className="mr-4 bg-primary/10 p-3 rounded-full">{step.icon}</div>
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <Checkbox 
                  id={`action-${step.id}`}
                  checked={isCompleted}
                  onCheckedChange={() => toggleActionCompletion(step.id)}
                  className={cn(isCompleted ? "text-primary" : "")}
                />
                <h3 className={cn(
                  "text-xl font-medium",
                  isCompleted ? "line-through text-muted-foreground" : ""
                )}>
                  {step.title}
                </h3>
              </div>
              <p className={cn(
                "text-muted-foreground ml-7",
                isCompleted ? "line-through" : ""
              )}>
                {step.description}
              </p>
              
              {isCompleted && (
                <div className="ml-7 mt-2 text-sm text-primary flex items-center">
                  <Check className="h-4 w-4 mr-1" />
                  Completed
                </div>
              )}
            </div>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="p-0 h-8 w-8">
                {isOpen ? 
                  <ChevronDown className="h-5 w-5" /> : 
                  <ChevronRight className="h-5 w-5" />
                }
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="animate-accordion-down">
            <CardContent className="pt-0 pb-4 bg-muted/30">
              <ol className="list-decimal pl-10 space-y-2 mb-4">
                {step.steps.map((text, index) => (
                  <li key={index} className={cn(
                    "text-foreground/90",
                    isCompleted ? "line-through text-muted-foreground" : ""
                  )}>
                    {text}
                  </li>
                ))}
              </ol>
              <Button asChild className="mt-2">
                <a href={step.link} target="_blank" rel="noopener noreferrer">
                  Get Started
                </a>
              </Button>
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      </Card>
    );
  };
  
  const ResourceCard = ({ resource }: { resource: typeof resources[0] }) => (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md hover:border-primary/40 h-full">
      <CardContent className="p-6">
        <div className="flex items-start">
          <div className="rounded-full bg-primary/10 p-3 mr-4">
            {resource.icon}
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
            <Button asChild variant="outline" size="sm" className="mt-2 hover:bg-primary/10">
              <a href={resource.link} target="_blank" rel="noopener noreferrer">
                View Resource
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

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
          </div>
          
          <div className="mb-10 bg-card rounded-lg p-4 shadow-sm border border-muted">
            <div className="flex items-center mb-2">
              <div className="w-full bg-secondary rounded-full h-2.5 mr-2">
                <div 
                  className={cn("bg-primary h-2.5 rounded-full transition-all duration-500")} 
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
          
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="checklist" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary">Onboarding Checklist</TabsTrigger>
              <TabsTrigger value="key-actions" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary">Key Actions</TabsTrigger>
              <TabsTrigger value="resources" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary">Resources</TabsTrigger>
            </TabsList>
            
            <TabsContent value="checklist" className="mt-4 space-y-4 animate-fade-in">
              <div className="bg-card p-6 rounded-lg shadow-sm border border-muted">
                <OnboardingChecklist onProgressUpdate={handleProgressUpdate} industry={industry} />
              </div>
            </TabsContent>
            
            <TabsContent value="key-actions" className="mt-4 animate-fade-in">
              <div className="mb-6 bg-card p-6 rounded-lg shadow-sm border border-muted">
                <h2 className="text-2xl font-bold mb-4 text-primary">
                  {industry === 'conversational_ai' ? 
                    'Key Actions for Mastering Conversational AI' : 
                    'Key Actions for Mastering ElevenLabs'}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {industry === 'conversational_ai' ? 
                    'Complete these steps to quickly get started with ElevenLabs for your conversational AI and customer service solutions. Each guide includes step-by-step instructions.' : 
                    'Complete these steps to quickly get started with ElevenLabs for your media production needs. Each guide includes step-by-step instructions.'}
                </p>
                
                {keyActionSteps.map((step) => (
                  <KeyActionItem key={step.id} step={step} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="resources" className="mt-4 animate-fade-in">
              <div className="bg-card p-6 rounded-lg shadow-sm border border-muted">
                <h2 className="text-2xl font-bold mb-4 text-primary">
                  {industry === 'conversational_ai' ? 
                    'Resources for Conversational AI' : 
                    'Resources for Media & Entertainment'}
                </h2>
                <p className="text-muted-foreground mb-6">
                  Explore these resources to deepen your understanding of ElevenLabs and optimize your implementation.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {resources.map((resource, index) => (
                    <ResourceCard key={index} resource={resource} />
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
      <WebinarPopup />
    </div>
  );
};

export default Onboarding;

