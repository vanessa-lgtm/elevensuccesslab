
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { 
  Card, 
  CardContent 
} from '@/components/ui/card';
import { 
  Button 
} from '@/components/ui/button';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel,
  FormDescription, 
  FormMessage 
} from '@/components/ui/form';
import { 
  RadioGroup, 
  RadioGroupItem 
} from '@/components/ui/radio-group';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Checkbox 
} from '@/components/ui/checkbox';
import { 
  Input 
} from '@/components/ui/input';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2,
  BookOpen,
  Brain,
  Building,
  Code,
  Stethoscope,
  Film
} from 'lucide-react';

const industries = [
  { value: 'localization', label: 'Localization and Translation Services' },
  { value: 'broadcasting', label: 'Broadcasting and Media Production' },
  { value: 'streaming', label: 'Streaming Services and OTT Platforms' },
  { value: 'film', label: 'Film and Television Production' },
  { value: 'marketing', label: 'Marketing and Advertising Services' },
  { value: 'gaming', label: 'Video Game Development' },
  { value: 'digital_media', label: 'Digital Media and Publishing' },
  { value: 'audio_production', label: 'Audio Content Production and Publishing' },
  { value: 'media_software', label: 'Media and Content Creation Software' },
  { value: 'ai_assistants', label: 'Consumer AI and Virtual Assistants' },
  { value: 'edtech', label: 'EdTech (Education Technology)' },
  { value: 'software', label: 'Software Development and SaaS Providers' },
  { value: 'customer_support', label: 'Customer Support and Call Center Operations' },
  { value: 'call_center', label: 'Call Center Technology and Solutions Providers' },
  { value: 'hardware', label: 'Hardware and Electronics Manufacturing' },
  { value: 'consulting', label: 'Management Consulting and Advisory Services' },
  { value: 'other', label: 'Miscellaneous / Other Industries' }
];

const useCases = [
  { value: 'content_creation', label: 'Content Creation' },
  { value: 'customer_service', label: 'Customer Service' },
  { value: 'accessibility', label: 'Accessibility' },
  { value: 'localization', label: 'Localization & Translation' },
  { value: 'audiobooks', label: 'Audiobooks & Narration' },
  { value: 'gaming', label: 'Gaming Characters' },
  { value: 'advertising', label: 'Advertising & Marketing' },
  { value: 'education', label: 'Educational Content' },
  { value: 'conversational_ai', label: 'Conversational AI' },
  { value: 'call_center', label: 'Call Center Automation' },
  { value: 'not_sure', label: 'I don\'t know yet' }
];

const mediaIndustries = [
  'localization', 'broadcasting', 'streaming', 'film', 
  'marketing', 'gaming', 'digital_media', 'audio_production'
];

const onboardingPlans = [
  {
    id: 'beginner',
    title: 'Voice AI Fundamentals',
    description: 'Learn the basics of voice AI and build a strong foundation for your implementation.',
    icon: <Brain className="h-12 w-12 text-primary" />,
    features: [
      'Introduction to voice AI concepts',
      'Basic implementation tutorials',
      'Regular check-ins with our team',
      'Access to beginner-friendly resources'
    ]
  },
  {
    id: 'technical',
    title: 'Technical Implementation',
    description: 'Get hands-on with APIs, code samples, and technical integration steps.',
    icon: <Code className="h-12 w-12 text-primary" />,
    features: [
      'API documentation and samples',
      'Technical workshops',
      'Developer support sessions',
      'Integration blueprints'
    ]
  },
  {
    id: 'enterprise',
    title: 'Enterprise & Scale',
    description: 'Focus on large-scale implementation, compliance, and enterprise integration.',
    icon: <Building className="h-12 w-12 text-primary" />,
    features: [
      'Enterprise architecture planning',
      'Security and compliance guidance',
      'Volume scaling strategies',
      'Dedicated solution architect'
    ]
  },
  {
    id: 'creative',
    title: 'Creative Use Cases',
    description: 'Explore innovative applications of voice AI for content creation and creative projects.',
    icon: <BookOpen className="h-12 w-12 text-primary" />,
    features: [
      'Creative workshop sessions',
      'Voice customization techniques',
      'Content creation workflows',
      'Storytelling and narration best practices'
    ]
  },
  {
    id: 'healthcare',
    title: 'Healthcare Voice AI Solutions',
    description: 'Specialized onboarding for healthcare organizations implementing voice AI technologies.',
    icon: <Stethoscope className="h-12 w-12 text-primary" />,
    features: [
      'HIPAA compliance guidance',
      'Patient engagement workflows',
      'Medical documentation solutions',
      'Healthcare-specific use cases and examples'
    ]
  },
  {
    id: 'media',
    title: 'Media & Entertainment Voice AI',
    description: 'Tailored onboarding for media companies looking to leverage voice AI for content creation.',
    icon: <Film className="h-12 w-12 text-primary" />,
    features: [
      'Voice cloning best practices',
      'Audiobook production workflows',
      'Character voice development',
      'Content localization strategies'
    ]
  }
];

const determineOnboardingPlan = (formData: any) => {
  const knowledgeLevel = formData.knowledge_level;
  const primaryUseCase = formData.primary_use_case;
  const industry = formData.industry;
  
  if (mediaIndustries.includes(industry)) {
    return 'media';
  } else if (industry === 'healthcare') {
    return 'healthcare';
  }
  
  if (knowledgeLevel === 'low') {
    return 'beginner';
  } else if (primaryUseCase === 'content_creation' || primaryUseCase === 'audiobooks' || primaryUseCase === 'advertising') {
    return 'creative';
  } else if (industry === 'technology') {
    return 'technical';
  } else if (industry === 'financial' || industry === 'telecom') {
    return 'enterprise';
  }
  
  return 'beginner';
};

interface SurveyFormValues {
  full_name: string;
  email: string;
  knowledge_level: 'low' | 'medium' | 'high';
  industry: string;
  other_industry?: string;
  primary_use_case: string;
  additional_use_cases: string[];
  subscribe: boolean;
}

const OnboardingSurvey = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [suggestResources, setSuggestResources] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  
  const form = useForm<SurveyFormValues>({
    defaultValues: {
      full_name: '',
      email: '',
      knowledge_level: 'medium',
      industry: '',
      other_industry: '',
      primary_use_case: '',
      additional_use_cases: [],
      subscribe: false,
    }
  });

  const totalSteps = 3; // Reduced from 4 to 3 steps
  const progress = ((currentStep + 1) / totalSteps) * 100;
  
  const handleNext = () => {
    if (currentStep === 1 && form.getValues('knowledge_level') === 'low') {
      setSuggestResources(true);
    } else {
      setSuggestResources(false);
    }
    
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const formData = form.getValues();
      const planId = determineOnboardingPlan(formData);
      setSelectedPlan(planId);
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    navigate(`/onboarding?plan=${selectedPlan}`);
  };

  const resetSurvey = () => {
    setCurrentStep(0);
    setShowResults(false);
    setSuggestResources(false);
    setSelectedPlan(null);
    form.reset();
  };

  const renderStep = () => {
    switch(currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Let's get to know you better</h3>
            
            <FormField
              control={form.control}
              name="full_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormDescription>
                    Associated with your ElevenLabs account
                  </FormDescription>
                  <FormControl>
                    <Input type="email" placeholder="john@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        );
      
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">How familiar are you with Voice AI?</h3>
            
            <FormField
              control={form.control}
              name="knowledge_level"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="space-y-3"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="low" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Low - I'm just getting started with voice AI
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="medium" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Medium - I have some experience but want to learn more
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="high" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          High - I'm experienced with voice AI technologies
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {form.watch('knowledge_level') === 'low' && (
              <div className="bg-primary/10 p-4 rounded-md mt-4">
                <h4 className="text-sm font-medium flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Recommended Resource
                </h4>
                <p className="text-sm mt-2">
                  Based on your experience level, we recommend checking out our 
                  "Voice AI Basics" guide to help you get started.
                </p>
                <Button variant="outline" size="sm" className="mt-2">
                  View Voice AI Basics
                </Button>
              </div>
            )}
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium">Your Industry & Use Cases</h3>
            
            <FormField
              control={form.control}
              name="industry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Industry</FormLabel>
                  <Select 
                    onValueChange={(value) => {
                      field.onChange(value);
                      if (value !== 'other') {
                        form.setValue('other_industry', '');
                      }
                    }} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {industries.map((industry) => (
                        <SelectItem key={industry.value} value={industry.value}>
                          {industry.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {form.watch('industry') === 'other' && (
              <FormField
                control={form.control}
                name="other_industry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Please specify your industry</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your industry" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            
            <FormField
              control={form.control}
              name="primary_use_case"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Primary use case</FormLabel>
                  <FormDescription>
                    Which use case do you plan to implement first?
                  </FormDescription>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your primary use case" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {useCases.map((useCase) => (
                        <SelectItem key={useCase.value} value={useCase.value}>
                          {useCase.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {form.watch('primary_use_case') === 'not_sure' && (
              <div className="bg-primary/10 p-4 rounded-md mt-4">
                <p className="text-sm">
                  Not sure which use case fits your needs? Explore our 
                  use case inspiration page for ideas.
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-2"
                  onClick={() => navigate('/use-case-inspiration')}
                >
                  Use Case Inspiration
                </Button>
              </div>
            )}
            
            <FormField
              control={form.control}
              name="subscribe"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 mt-6">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Subscribe to news and product updates
                    </FormLabel>
                    <FormDescription>
                      Stay up to date with the latest features and improvements
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
          </div>
        );
      
      default:
        return null;
    }
  };

  const renderPlan = () => {
    if (!selectedPlan) return null;
    
    const plan = onboardingPlans.find(p => p.id === selectedPlan);
    if (!plan) return null;
    
    return (
      <Card className="border-primary/20 mt-4">
        <CardContent className="pt-6 text-center">
          {plan.icon}
          <h3 className="text-xl font-bold mt-4">{plan.title}</h3>
          <p className="text-muted-foreground mt-2">{plan.description}</p>
          
          <div className="mt-6 space-y-2">
            <ul className="text-left">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2 mb-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-6 space-y-3">
            <Button className="w-full" onClick={handleComplete}>
              Start Your Onboarding Journey
            </Button>
            <Button variant="outline" className="w-full" onClick={resetSurvey}>
              Retake Survey
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="px-6 py-6 text-md button-hover-effect group">
          Start Onboarding
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {showResults ? 'Your Personalized Onboarding Plan' : 'Welcome to ElevenLabs'}
          </DialogTitle>
          <DialogDescription>
            {showResults 
              ? 'Based on your responses, we\'ve created a personalized onboarding plan for you.'
              : 'Help us tailor your onboarding experience by answering a few questions.'}
          </DialogDescription>
        </DialogHeader>
        
        {!showResults ? (
          <div className="py-4">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm font-medium">Step {currentStep + 1} of {totalSteps}</p>
                <span className="text-sm font-medium">{Math.round(progress)}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-300 ease-in-out" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
            
            <Form {...form}>
              <form onSubmit={(e) => { e.preventDefault(); handleNext(); }} className="space-y-6">
                {renderStep()}
                
                <div className="flex justify-between">
                  {currentStep > 0 && (
                    <Button type="button" variant="outline" onClick={handleBack}>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                  )}
                  
                  <Button 
                    type="submit" 
                    className="ml-auto"
                  >
                    {currentStep < totalSteps - 1 ? (
                      <>
                        Next
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    ) : (
                      'Complete Survey'
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        ) : (
          <div className="py-4">
            {renderPlan()}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default OnboardingSurvey;
