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
  Film,
  MessageCircle,
  ExternalLink,
  Check,
  Clock
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

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
  { value: 'accessibility', label: 'Accessibility' },
  { value: 'localization', label: 'Localization & Translation' },
  { value: 'audiobooks', label: 'Audiobooks & Narration' },
  { value: 'gaming', label: 'Gaming Characters' },
  { value: 'advertising', label: 'Advertising & Marketing' },
  { value: 'education', label: 'Educational Content' },
  { value: 'conversational_ai', label: 'Conversational AI' },
  { value: 'not_sure', label: "I don't know yet" }
];

const primaryGoals = [
  { value: 'time_efficiency', label: 'Improve time efficiency' },
  { value: 'cost_reduction', label: 'Reduce costs' },
  { value: 'quality_content', label: 'Create higher quality content' },
  { value: 'scale_operations', label: 'Scale operations' },
  { value: 'automation', label: 'Automate processes' },
  { value: 'new_offerings', label: 'Develop new offerings' },
  { value: 'customer_experience', label: 'Enhance customer experience' },
  { value: 'expand_markets', label: 'Expand to new markets' },
  { value: 'accessibility', label: 'Improve accessibility' }
];

const mediaIndustries = [
  'localization', 'broadcasting', 'streaming', 'film', 
  'marketing', 'gaming', 'digital_media', 'audio_production'
];

const conversationalAIUseCases = [
  'conversational_ai', 'customer_service', 'call_center'
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
  },
  {
    id: 'conversational_ai',
    title: 'Conversational AI Solutions',
    description: 'Specialized onboarding for implementing voice-based conversational AI assistants and customer support solutions.',
    icon: <MessageCircle className="h-12 w-12 text-primary" />,
    features: [
      'Conversational AI agent design',
      'Customer service automation',
      'Call center integration workflows',
      'Conversation design best practices'
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
  } else if (conversationalAIUseCases.includes(primaryUseCase)) {
    return 'conversational_ai';
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
  knowledge_level: 'low' | 'medium' | 'high';
  industry: string;
  other_industry?: string;
  primary_use_case: string;
  primary_goals: string[];
  subscribe: boolean;
}

const OnboardingSurvey = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [suggestResources, setSuggestResources] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [voiceAIBasicsOpen, setVoiceAIBasicsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<SurveyFormValues>({
    defaultValues: {
      knowledge_level: 'medium',
      industry: '',
      other_industry: '',
      primary_use_case: '',
      primary_goals: [],
      subscribe: false,
    }
  });

  const totalSteps = 2;
  const progress = ((currentStep + 1) / totalSteps) * 100;
  
  const handleNext = async () => {
    const isCurrentStepValid = await form.trigger(
      currentStep === 0 
        ? ['knowledge_level']
        : ['industry', 'primary_use_case', 'primary_goals']
    );

    if (!isCurrentStepValid) return;
    
    if (currentStep === 0 && form.getValues('knowledge_level') === 'low') {
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
      
      try {
        setIsSubmitting(true);
        
        toast({
          title: "Success",
          description: "Your preferences have been saved successfully.",
        });
      } catch (error) {
        console.error('Error processing onboarding:', error);
        toast({
          title: "Error",
          description: "There was an issue processing your preferences. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsSubmitting(false);
      }
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

  const openVoiceAIBasicsDialog = (e: React.MouseEvent) => {
    e.preventDefault();
    setVoiceAIBasicsOpen(true);
  };
  
  const renderStep = () => {
    switch(currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">How familiar are you with Voice AI?</h3>
            
            <FormField
              control={form.control}
              name="knowledge_level"
              rules={{ required: "Please select your knowledge level" }}
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
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-2"
                  onClick={openVoiceAIBasicsDialog}
                >
                  View Voice AI Basics
                </Button>
              </div>
            )}
          </div>
        );
      
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium">Your Industry & Use Cases</h3>
            
            <FormField
              control={form.control}
              name="industry"
              rules={{ required: "Please select your industry" }}
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
                rules={{ required: "Please specify your industry" }}
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
              rules={{ required: "Please select a primary use case" }}
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
            
            <FormField
              control={form.control}
              name="primary_goals"
              rules={{ 
                required: "Please select at least one primary goal",
                validate: (value) => value.length > 0 || "Please select at least one primary goal" 
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Primary Goals</FormLabel>
                  <FormDescription>
                    What are you hoping to achieve with voice AI? (Select at least one)
                  </FormDescription>
                  <div className="space-y-2">
                    {primaryGoals.map((goal) => (
                      <FormItem
                        key={goal.value}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(goal.value)}
                            onCheckedChange={(checked) => {
                              const updatedGoals = checked
                                ? [...field.value, goal.value]
                                : field.value?.filter((value) => value !== goal.value);
                              field.onChange(updatedGoals);
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {goal.label}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </div>
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
                      Subscribe to product updates and company news
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

  const VoiceAIBasicsDialog = () => {
    return (
      <Dialog open={voiceAIBasicsOpen} onOpenChange={setVoiceAIBasicsOpen}>
        <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              AI Fundamentals for Voice AI: A 30-Minute Onboarding Primer
            </DialogTitle>
            <DialogDescription>
              A fast-track primer on Voice AI fundamentals designed for developers, AI strategists, and business leaders.
            </DialogDescription>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="outline" className="bg-primary/10 text-primary">New</Badge>
              <Badge variant="outline">ElevenLabs Academy</Badge>
              <div className="flex items-center text-xs text-muted-foreground ml-auto">
                <Clock className="h-3 w-3 mr-1" />
                30 min total
              </div>
            </div>
          </DialogHeader>
          
          <Tabs defaultValue="module1" className="mt-4">
            <TabsList className="grid grid-cols-5 mb-4">
              <TabsTrigger value="module1">Module 1</TabsTrigger>
              <TabsTrigger value="module2">Module 2</TabsTrigger>
              <TabsTrigger value="module3">Module 3</TabsTrigger>
              <TabsTrigger value="module4">Module 4</TabsTrigger>
              <TabsTrigger value="module5">Module 5</TabsTrigger>
            </TabsList>
            
            <TabsContent value="module1" className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Module 1: Introduction to AI and Voice AI</h3>
                  
                  <div className="space-y-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">What is Artificial Intelligence?</h4>
                      <p className="text-muted-foreground">
                        Artificial Intelligence (AI) refers to the ability of machines to perform tasks that typically require human intelligence.
                        This includes learning from data, understanding language, recognizing images, and making decisions.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Key AI Subfields</h4>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>
                          <span className="font-medium text-foreground">Machine Learning (ML)</span> – algorithms that learn from data to make predictions or decisions.
                        </li>
                        <li>
                          <span className="font-medium text-foreground">Natural Language Processing (NLP)</span> – enables machines to understand and interact using human language.
                        </li>
                        <li>
                          <span className="font-medium text-foreground">Speech Processing</span> – focuses on understanding and generating spoken language.
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">What is Voice AI?</h4>
                      <p className="text-muted-foreground">
                        Voice AI combines machine learning, NLP, and speech processing to create systems that can listen to what we say, 
                        understand it, and respond meaningfully. Examples include voice assistants like Alexa, Siri, 
                        or customer service bots that talk back intelligently.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Why Voice AI Matters</h4>
                      <p className="text-muted-foreground">
                        Voice interfaces are becoming the new norm across industries because they're fast, natural, and increasingly 
                        expected by users—from customer support to sales automation.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Key Takeaways</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>AI enables machines to perform tasks requiring human-like intelligence</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Voice AI combines ML, NLP, and speech processing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Voice interfaces are becoming standard across industries</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="module2" className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Module 2: How Voice AI Works</h3>
                  
                  <div className="space-y-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Voice AI Pipeline</h4>
                      <p className="text-muted-foreground">
                        Voice AI runs through a clear pipeline with several components working together:
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Core Components</h4>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>
                          <span className="font-medium text-foreground">Automatic Speech Recognition (ASR)</span> – 
                          Converts your spoken words into text. This is the "hearing" part.
                        </li>
                        <li>
                          <span className="font-medium text-foreground">Natural Language Processing (NLP)</span> – 
                          Takes the converted text and extracts meaning. It figures out what you meant, not just what you said.
                        </li>
                        <li>
                          <span className="font-medium text-foreground">Natural Language Understanding (NLU)</span> – 
                          A subfield of NLP—identifies intent ("book a flight") and entities ("New York to LA").
                        </li>
                        <li>
                          <span className="font-medium text-foreground">Dialogue Management</span> – 
                          Decides what the AI should say or do next. It's like the AI's brain making a decision.
                        </li>
                        <li>
                          <span className="font-medium text-foreground">Text-to-Speech (TTS)</span> – 
                          Converts the response text back into spoken language—this is how the AI "talks" back to you.
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Example Workflow</h4>
                      <p className="text-muted-foreground mb-2">
                        Let's walk through a complete example:
                      </p>
                      <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                        <li>User says: "What's the weather in Chicago today?"</li>
                        <li>ASR transcribes the spoken words into text</li>
                        <li>NLP/NLU extracts that you're asking for weather info, and identifies "Chicago" as the location</li>
                        <li>Dialogue Management queries a weather API for Chicago's forecast</li>
                        <li>TTS responds audibly: "The forecast in Chicago is 65 degrees and sunny."</li>
                      </ol>
                      <p className="text-muted-foreground mt-2">
                        This entire Voice AI loop happens in under a second.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Key Takeaways</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Voice AI uses a pipeline: ASR → NLP → Dialogue → TTS</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Each component has a specific role in understanding and responding to speech</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>The entire process happens quickly, creating a natural conversation flow</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="module3" className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Module 3: Voice AI Use Cases by Persona</h3>
                  
                  <div className="space-y-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Voice AI Impact by Role</h4>
                      <p className="text-muted-foreground">
                        How Voice AI impacts different professionals varies by their role and responsibilities:
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">For Developers</h4>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Work with Voice AI through APIs and SDKs</li>
                        <li>Set up voice flows, integrate with CRMs, or customize voice bots</li>
                        <li>Leverage existing speech engines rather than building from scratch</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">For AI Strategists</h4>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Treat Voice AI as a scalable channel within the organization</li>
                        <li>Design customer journeys, user experiences, and touchpoints</li>
                        <li>Align voice experiences with broader AI goals across the organization</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">For Marketing & Sales Leaders</h4>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Drive conversion through conversational commerce</li>
                        <li>Implement lead generation bots that qualify leads and book demos 24/7</li>
                        <li>Use voice interfaces to deepen engagement and gather rich customer insights</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Key Takeaways</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Each role has a unique perspective on Voice AI implementation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Developers focus on technical implementation through APIs and SDKs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Strategists and business leaders leverage Voice AI for engagement and conversion</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="module4" className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Module 4: Data, Privacy & Ethical Considerations</h3>
                  
                  <div className="space-y-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Voice Data Sensitivity</h4>
                      <p className="text-muted-foreground">
                        Voice AI deals with sensitive data—often personal, sometimes regulated. Understanding the key considerations is crucial.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Data Collection & Storage</h4>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Voice data is often recorded or transcribed</li>
                        <li>Only store what's necessary for the service</li>
                        <li>Implement security best practices for storage and access</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Privacy Compliance</h4>
                      <p className="text-muted-foreground mb-2">
                        Regulations like GDPR (in the EU) and CCPA (in California) require:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>User consent for voice data collection</li>
                        <li>Clear privacy policies that explain data usage</li>
                        <li>Ability to delete or export user data upon request</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Ethical Design in Voice AI</h4>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>
                          <span className="font-medium text-foreground">Transparency</span>: 
                          Don't let users think they're talking to a human if it's AI
                        </li>
                        <li>
                          <span className="font-medium text-foreground">Avoiding bias</span>: 
                          Ensure your AI performs equally well across accents, genders, and languages
                        </li>
                        <li>
                          <span className="font-medium text-foreground">Fallback strategies</span>: 
                          If the AI doesn't understand, offer a way to escalate or repeat
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Key Takeaways</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Voice data requires careful handling and protection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Privacy compliance is mandatory in many jurisdictions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Ethical design focuses on transparency, fairness, and user experience</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="module5" className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Module 5: Voice AI in Practice – Platform Overview</h3>
                  
                  <div className="space-y-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Preparing for Platform Onboarding</h4>
                      <p className="text-muted-foreground">
                        Now that you understand the fundamentals, let's prepare for using a Voice AI platform effectively.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Key Terminology to Know</h4>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>
                          <span className="font-medium text-foreground">Intents</span>: 
                          What the user wants to do (e.g., "book a demo")
                        </li>
                        <li>
                          <span className="font-medium text-foreground">Entities</span>: 
                          Specific data points (e.g., date, location, product name)
                        </li>
                        <li>
                          <span className="font-medium text-foreground">Flows or Dialogues</span>: 
                          Structured conversations designed to guide users to an outcome
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Platform Tools You'll Encounter</h4>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Visual conversation builders</li>
                        <li>Analytics dashboards for performance monitoring</li>
                        <li>Integration options (CRM, calendar, help desk, etc.)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Role-Specific Preparation</h4>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Developers: Prepare to build flows and integrate with other systems</li>
                        <li>Strategists: Define use cases, success metrics, and KPIs</li>
                        <li>Marketing/Sales: Plan campaigns and analyze results</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Key Takeaways</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Understand platform terminology before diving in</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Each role has specific responsibilities in Voice AI implementation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Platform tools help you build, monitor, and integrate Voice AI solutions</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="mt-6 flex justify-end">
            <Button 
              variant="outline" 
              onClick={() => setVoiceAIBasicsOpen(false)}
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
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
                    <Button type="button" variant="outline" onClick={handleBack} disabled={isSubmitting}>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                  )}
                  
                  <Button 
                    type="submit" 
                    className="ml-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Saving...
                      </span>
                    ) : currentStep < totalSteps - 1 ? (
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
      
      <VoiceAIBasicsDialog />
    </Dialog>
  );
};

export default OnboardingSurvey;
