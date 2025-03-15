
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowRight, Brain, Target, CheckCircle2 } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useForm } from 'react-hook-form';

type MaturityLevel = 'beginner' | 'intermediate' | 'advanced';

interface Question {
  id: string;
  text: string;
  options: {
    value: string;
    label: string;
    points: number;
  }[];
}

const questions: Question[] = [
  {
    id: 'current_usage',
    text: 'How would you describe your current usage of AI in your organization?',
    options: [
      { value: 'none', label: 'We haven\'t started using AI yet', points: 0 },
      { value: 'exploring', label: 'We\'re exploring AI options', points: 1 },
      { value: 'implementing', label: 'We\'re currently implementing AI solutions', points: 2 },
      { value: 'advanced', label: 'We have advanced AI systems in place', points: 3 },
    ],
  },
  {
    id: 'voice_ai',
    text: 'What\'s your experience with voice AI specifically?',
    options: [
      { value: 'no_experience', label: 'No experience with voice AI', points: 0 },
      { value: 'basic', label: 'Basic understanding of voice AI', points: 1 },
      { value: 'some_implementation', label: 'Some implementation experience', points: 2 },
      { value: 'extensive', label: 'Extensive voice AI implementation', points: 3 },
    ],
  },
  {
    id: 'integration',
    text: 'How integrated is AI with your current business processes?',
    options: [
      { value: 'not_integrated', label: 'Not integrated at all', points: 0 },
      { value: 'partially', label: 'Partially integrated in some areas', points: 1 },
      { value: 'mostly', label: 'Mostly integrated across key areas', points: 2 },
      { value: 'fully', label: 'Fully integrated across the organization', points: 3 },
    ],
  },
];

const AssessMaturityWidget = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [maturityLevel, setMaturityLevel] = useState<MaturityLevel>('beginner');
  const [score, setScore] = useState(0);
  const form = useForm();

  const totalQuestions = questions.length;
  const progress = (currentStep / totalQuestions) * 100;

  const handleNext = (data: any) => {
    const questionId = questions[currentStep].id;
    const selectedOption = questions[currentStep].options.find(
      option => option.value === data[questionId]
    );
    
    if (selectedOption) {
      setScore(prevScore => prevScore + selectedOption.points);
    }
    
    if (currentStep < totalQuestions - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateMaturityLevel();
      setShowResults(true);
    }
  };

  const calculateMaturityLevel = () => {
    const maxPossibleScore = totalQuestions * 3; // 3 is max points per question
    const percentageScore = (score / maxPossibleScore) * 100;
    
    if (percentageScore < 33) {
      setMaturityLevel('beginner');
    } else if (percentageScore < 66) {
      setMaturityLevel('intermediate');
    } else {
      setMaturityLevel('advanced');
    }
  };

  const resetAssessment = () => {
    setCurrentStep(0);
    setShowResults(false);
    setScore(0);
    form.reset();
  };

  const maturityContent = {
    beginner: {
      title: 'Getting Started with AI',
      description: 'You\'re at the beginning of your AI journey. We\'ll help you understand the basics and build a foundation.',
      icon: <Brain className="h-12 w-12 text-primary" />,
    },
    intermediate: {
      title: 'Building on Your AI Foundation',
      description: 'You have some experience with AI. We\'ll help you deepen your knowledge and expand implementation.',
      icon: <Target className="h-12 w-12 text-primary" />,
    },
    advanced: {
      title: 'Optimizing Your AI Strategy',
      description: 'You have significant AI experience. We\'ll help you refine your strategy and maximize impact.',
      icon: <CheckCircle2 className="h-12 w-12 text-primary" />,
    },
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg" className="group button-hover-effect">
          Assess Your AI Maturity
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {showResults ? 'Your AI Maturity Assessment' : 'Assess Your AI Maturity'}
          </DialogTitle>
          <DialogDescription>
            {showResults 
              ? 'Based on your responses, we\'ve assessed your AI maturity level.'
              : 'Answer a few questions to determine your AI maturity level and get a personalized journey.'}
          </DialogDescription>
        </DialogHeader>
        
        {!showResults ? (
          <div className="py-4">
            <div className="mb-6">
              <Progress value={progress} className="h-2" />
              <p className="text-sm text-muted-foreground mt-2">
                Question {currentStep + 1} of {totalQuestions}
              </p>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleNext)}>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">{questions[currentStep].text}</h3>
                  
                  <FormField
                    control={form.control}
                    name={questions[currentStep].id}
                    render={({ field }) => (
                      <FormItem>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="space-y-3"
                        >
                          {questions[currentStep].options.map((option) => (
                            <FormItem
                              key={option.value}
                              className="flex items-center space-x-3 space-y-0"
                            >
                              <FormControl>
                                <RadioGroupItem value={option.value} />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {option.label}
                              </FormLabel>
                            </FormItem>
                          ))}
                        </RadioGroup>
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full">
                    {currentStep < totalQuestions - 1 ? 'Next' : 'Complete Assessment'}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        ) : (
          <div className="py-4">
            <Card className="border-primary/20">
              <CardContent className="pt-6 text-center">
                {maturityContent[maturityLevel].icon}
                <h3 className="text-xl font-bold mt-4">{maturityContent[maturityLevel].title}</h3>
                <p className="text-muted-foreground mt-2">{maturityContent[maturityLevel].description}</p>
                
                <div className="mt-6 space-y-3">
                  <Button className="w-full">
                    View Personalized Resources
                  </Button>
                  <Button variant="outline" className="w-full" onClick={resetAssessment}>
                    Retake Assessment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AssessMaturityWidget;
