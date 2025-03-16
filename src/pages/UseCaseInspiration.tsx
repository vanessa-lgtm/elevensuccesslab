
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type UseCase = {
  id: string;
  title: string;
  industry: string;
  description: string;
  challenge: string;
  solution: string;
  results: string;
  customerName: string;
};

const useCases: UseCase[] = [
  {
    id: "1",
    title: "Personalized Audiobook Narration",
    industry: "Publishing",
    description: "How a major publishing house transformed their audiobook experience with AI voice technology.",
    challenge: "Traditional audiobook production was costly and time-consuming, limiting which books could receive audio versions.",
    solution: "Implemented ElevenLabs to create realistic, emotionally resonant narrations with different voice profiles for characters.",
    results: "Increased audiobook production by 300%, reduced costs by 70%, and improved customer satisfaction ratings.",
    customerName: "Global Publishing Inc."
  },
  {
    id: "2",
    title: "Multilingual Customer Service",
    industry: "E-commerce",
    description: "How an international retailer broke language barriers with AI voice translation.",
    challenge: "Supporting customers across 20+ countries with native-language support was prohibitively expensive.",
    solution: "Deployed ElevenLabs to provide real-time voice translation for customer service calls, maintaining natural-sounding conversations.",
    results: "Customer satisfaction increased 45% in non-English markets while reducing support costs by 60%.",
    customerName: "WorldWide Retail"
  },
  {
    id: "3",
    title: "Accessible Learning Content",
    industry: "Education",
    description: "How an online learning platform made education more accessible with AI voice technology.",
    challenge: "Students with reading difficulties or visual impairments struggled to access educational materials.",
    solution: "Integrated ElevenLabs to convert text-based content into natural-sounding audio in multiple languages and voices.",
    results: "Course completion rates for students with accessibility needs increased by 85%.",
    customerName: "EduLearn Academy"
  },
  {
    id: "4",
    title: "Immersive Gaming Experience",
    industry: "Gaming",
    description: "How a game studio created dynamic voice acting for thousands of NPCs.",
    challenge: "Limited budget for voice actors restricted the number of voiced characters in their open-world game.",
    solution: "Used ElevenLabs to generate diverse, contextually appropriate dialogue for NPCs with emotional range.",
    results: "Player engagement increased 40% with a 25% increase in average playtime.",
    customerName: "Immersive Worlds Studios"
  },
  {
    id: "5",
    title: "Personalized Video Marketing",
    industry: "Marketing",
    description: "How a marketing agency scaled personalized video content with AI voices.",
    challenge: "Creating personalized video content for thousands of customers was prohibitively expensive.",
    solution: "Implemented ElevenLabs to dynamically generate personalized voice-overs for marketing videos.",
    results: "Campaign conversion rates increased by 65% while production costs decreased by 80%.",
    customerName: "NextGen Marketing"
  },
];

const UseCaseInspiration = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Use Case Inspiration</h1>
          <p className="text-lg text-muted-foreground">
            Discover how organizations across industries are leveraging ElevenLabs
            to transform their operations and create exceptional experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {useCases.map((useCase) => (
            <Card key={useCase.id} className="h-full overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                  <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">
                    {useCase.industry}
                  </span>
                </div>
                <CardDescription className="text-base">{useCase.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-1">Challenge:</h3>
                    <p className="text-sm text-muted-foreground">{useCase.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Solution:</h3>
                    <p className="text-sm text-muted-foreground">{useCase.solution}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Results:</h3>
                    <p className="text-sm text-muted-foreground">{useCase.results}</p>
                  </div>
                  <div className="pt-2 text-sm font-medium text-right">
                    Customer: {useCase.customerName}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to explore how ElevenLabs can transform your business?</h2>
          <p className="mb-6 text-muted-foreground">
            Contact our team to discuss your specific use case and discover how our AI voice technology
            can help you achieve your goals.
          </p>
          <Button size="lg" className="px-8">
            Contact Us <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default UseCaseInspiration;
