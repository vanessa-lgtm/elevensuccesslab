import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WebinarPopup from '@/components/WebinarPopup';
import MediaUseCasesInspiration from '@/components/MediaUseCasesInspiration';

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
  {
    id: "6",
    title: "Voice-Enabled Virtual Assistants",
    industry: "Technology",
    description: "How a tech company created more natural and engaging virtual assistants.",
    challenge: "Existing virtual assistants sounded robotic and failed to create authentic user experiences.",
    solution: "Integrated ElevenLabs' voice AI to create lifelike, emotionally responsive virtual assistants.",
    results: "User engagement with virtual assistants increased by 120% with 93% of users rating the experience as 'natural'.",
    customerName: "InnoTech Solutions"
  },
  {
    id: "7",
    title: "Multilingual Video Dubbing",
    industry: "Entertainment",
    description: "How a streaming platform expanded global reach with AI voice dubbing.",
    challenge: "Traditional dubbing was expensive and time-consuming, limiting international content availability.",
    solution: "Used ElevenLabs to create multilingual voice dubbing that preserved emotional nuance in 20+ languages.",
    results: "International viewership increased by 200% with 85% of viewers rating the dubbing quality as 'excellent'.",
    customerName: "Global Stream Network"
  },
  {
    id: "8",
    title: "Accessible News Content",
    industry: "Media",
    description: "How a news organization made content accessible to more audiences.",
    challenge: "Written news content excluded audiences with reading difficulties or visual impairments.",
    solution: "Implemented ElevenLabs to automatically convert news articles to natural-sounding audio in multiple languages.",
    results: "Audience reach increased by 35% with 15% of all content now consumed in audio format.",
    customerName: "World News Network"
  }
];

const blogStories = [
  {
    id: "blog1",
    title: "How Voice AI Is Transforming Language Learning: A Case Study with Lingopie",
    summary: "Lingopie, a language learning platform, integrated ElevenLabs' voice AI to create more engaging and effective learning experiences, resulting in a 40% increase in user engagement.",
    imageUrl: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2671&auto=format&fit=crop",
    link: "https://elevenlabs.io/blog/lingopie-case-study"
  },
  {
    id: "blog2",
    title: "Creating Authentic Voices for Healthcare: Emmi's Story",
    summary: "Emmi, a healthcare communication platform, used ElevenLabs' voice technology to create personalized health education content, making complex medical information more accessible to patients.",
    imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2670&auto=format&fit=crop",
    link: "https://elevenlabs.io/blog/healthcare-voice-ai"
  },
  {
    id: "blog3",
    title: "How Indie Game Developer Increased Player Engagement with Voice AI",
    summary: "An independent game studio implemented ElevenLabs to voice over 200+ NPCs with distinct personalities, leading to a 65% increase in positive player reviews and longer gameplay sessions.",
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2671&auto=format&fit=crop",
    link: "https://elevenlabs.io/blog/game-development-voice-ai"
  }
];

const UseCaseInspiration = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto mb-12 text-center mt-16 pb-8 border-b border-primary/20">
          <h1 className="text-4xl font-bold mb-4">Use Case Inspiration</h1>
          <p className="text-lg text-muted-foreground">
            Discover how organizations across industries are leveraging ElevenLabs
            to transform their operations and create exceptional experiences.
          </p>
        </div>
        
        <div className="mb-16">
          <MediaUseCasesInspiration />
        </div>
        
        <h2 className="text-3xl font-bold mb-8 text-center">Success Stories</h2>
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
        
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Featured Customer Stories from Our Blog</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogStories.map((story) => (
              <Card key={story.id} className="overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={story.imageUrl} 
                    alt={story.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{story.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{story.summary}</p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={story.link} target="_blank" rel="noopener noreferrer">
                      Read Full Story <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to put your knowledge to the test?</h2>
          <Button size="lg" className="px-8" asChild>
            <a href="https://elevenlabs.io" target="_blank" rel="noopener noreferrer">
              Go To ElevenLabs <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
      
      <Footer />
      <WebinarPopup />
    </div>
  );
};

export default UseCaseInspiration;
