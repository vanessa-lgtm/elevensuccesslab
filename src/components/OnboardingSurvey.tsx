
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
  ExternalLink
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';

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
  company_name: string;
  email: string;
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
      company_name: '',
      email: '',
      knowledge_level: 'medium',
      industry: '',
      other_industry: '',
      primary_use_case: '',
      primary_goals: [],
      subscribe: false,
    }
  });

  const totalSteps = 3;
  const progress = ((currentStep + 1) / totalSteps) * 100;
  
  const handleNext = async () => {
    const isCurrentStepValid = await form.trigger(
      currentStep === 0 
        ? ['company_name', 'email'] 
        : currentStep === 1 
          ? ['knowledge_level']
          : ['industry', 'primary_use_case', 'primary_goals']
    );

    if (!isCurrentStepValid) return;
    
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
      
      try {
        setIsSubmitting(true);
        
        const { error } = await supabase
          .from('Email')
          .insert({
            company_name: formData.company_name,
            email: formData.email
          });
          
        if (error) {
          console.error('Error saving to Supabase:', error);
          toast({
            title: "Error",
            description: "There was an issue saving your information. Please try again.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Success",
            description: "Your information has been saved successfully.",
          });
        }
      } catch (error) {
        console.error('Error in Supabase operation:', error);
        toast({
          title: "Error",
          description: "There was an issue saving your information. Please try again.",
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
            <h3 className="text-lg font-medium">Let's get to know you better</h3>
            
            <FormField
              control={form.control}
              name="company_name"
              rules={{ required: "Company name is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Acme Corp" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              rules={{ 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormDescription>
                    Associated with your ElevenLabs account
                  </FormDescription>
                  <FormControl>
                    <Input type="email" placeholder="contact@acmecorp.com" {...field} />
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
      
      case 2:
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
        <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              Voice AI Basics
            </DialogTitle>
            <DialogDescription>
              Explore our curated resources to help you learn the fundamentals of voice AI technology
            </DialogDescription>
          </DialogHeader>
          
          <Tabs defaultValue="articles">
            <TabsList className="grid grid-cols-4 mb-4">
              <TabsTrigger value="articles">Articles</TabsTrigger>
              <TabsTrigger value="courses">Online Courses</TabsTrigger>
              <TabsTrigger value="books">Books</TabsTrigger>
              <TabsTrigger value="websites">Websites & Blogs</TabsTrigger>
            </TabsList>
            
            <TabsContent value="articles" className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">What is Voice AI?</h3>
                  <Badge variant="outline" className="mb-2">TechCrunch</Badge>
                  <p className="text-muted-foreground mb-4">This article introduces the concept of voice AI, how it works, and its applications across various industries.</p>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="mt-2 flex items-center gap-1"
                    onClick={() => window.open('https://techcrunch.com/category/artificial-intelligence/', '_blank')}
                  >
                    Read Article <ExternalLink className="h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">The Fundamentals of Voice AI: What You Need to Know</h3>
                  <Badge variant="outline" className="mb-2">Voicebot.ai</Badge>
                  <p className="text-muted-foreground mb-4">This article provides an overview of voice AI, exploring key technologies like speech recognition, natural language processing (NLP), and voice assistants.</p>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="mt-2 flex items-center gap-1"
                    onClick={() => window.open('https://voicebot.ai/voice-assistant-technology/', '_blank')}
                  >
                    Read Article <ExternalLink className="h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">How Voice AI is Transforming Customer Experience</h3>
                  <Badge variant="outline" className="mb-2">Forbes</Badge>
                  <p className="text-muted-foreground mb-4">An in-depth article on how businesses are leveraging voice AI to enhance customer interactions, automate tasks, and improve service delivery.</p>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="mt-2 flex items-center gap-1"
                    onClick={() => window.open('https://www.forbes.com/sites/forbestechcouncil/2020/05/07/how-voice-technology-is-transforming-healthcare/', '_blank')}
                  >
                    Read Article <ExternalLink className="h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="courses" className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">AI for Everyone (Coursera by Andrew Ng)</h3>
                  <Badge variant="outline" className="mb-2">Coursera</Badge>
                  <p className="text-muted-foreground mb-4">While this course is not specifically about voice AI, it covers the basics of AI and machine learning, which is crucial for understanding voice AI technology.</p>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="mt-2 flex items-center gap-1"
                    onClick={() => window.open('https://www.coursera.org/learn/ai-for-everyone', '_blank')}
                  >
                    View Course <ExternalLink className="h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">Introduction to Speech Recognition</h3>
                  <Badge variant="outline" className="mb-2">Udemy</Badge>
                  <p className="text-muted-foreground mb-4">A beginner-level course that covers the basics of speech recognition, which is essential for working with voice AI.</p>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="mt-2 flex items-center gap-1"
                    onClick={() => window.open('https://www.udemy.com/course/speech-recognition/', '_blank')}
                  >
                    View Course <ExternalLink className="h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="books" className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">Voice User Interface Design</h3>
                  <Badge variant="outline" className="mb-2">Michael H. Cohen, James P. Giangola, and Jennifer Balogh</Badge>
                  <p className="text-muted-foreground mb-4">This book explores the principles of voice interface design and the technical aspects of developing voice-enabled applications.</p>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="mt-2 flex items-center gap-1"
                    onClick={() => window.open('https://www.amazon.com/Voice-User-Interface-Design/dp/0321185765', '_blank')}
                  >
                    Find Book <ExternalLink className="h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">Designing Voice User Interfaces</h3>
                  <Badge variant="outline" className="mb-2">Cathy Pearl</Badge>
                  <p className="text-muted-foreground mb-4">Focuses on the design and user experience of voice-based applications, helping developers build more intuitive voice interfaces.</p>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="mt-2 flex items-center gap-1"
                    onClick={() => window.open('https://www.amazon.com/Designing-Voice-User-Interfaces-Conversational/dp/1491955414', '_blank')}
                  >
                    Find Book <ExternalLink className="h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="websites" className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">ElevenLabs Blog</h3>
                  <p className="text-muted-foreground mb-4">The official ElevenLabs blog featuring the latest updates on voice AI technology, use cases, and industry insights.</p>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="mt-2 flex items-center gap-1"
                    onClick={() => window.open('https://elevenlabs.io/blog', '_blank')}
                  >
                    Visit Website <ExternalLink className="h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">Voicebot.ai</h3>
                  <p className="text-muted-foreground mb-4">A comprehensive source for news, research, and analysis on the voice AI industry. It includes reports, blog posts, and case studies.</p>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="mt-2 flex items-center gap-1"
                    onClick={() => window.open('https://www.voicebot.ai', '_blank')}
                  >
                    Visit Website <ExternalLink className="h-3 w-3" />
                  </Button>
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
