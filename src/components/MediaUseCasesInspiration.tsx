
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play, Film, Mic, Globe, Headphones, Radio, Tv, BookOpen } from 'lucide-react';

const MediaUseCasesInspiration = () => {
  const useCases = [
    {
      id: 'dubbing',
      title: 'Content Localization & Dubbing',
      description: 'Use voice AI to automatically dub content into multiple languages while preserving the original speaker\'s voice characteristics.',
      benefits: [
        'Reduce localization costs by up to 80%',
        'Preserve original voice characteristics across languages',
        'Scale content to global markets rapidly',
        'Maintain emotional tone and delivery across languages'
      ],
      icon: <Globe className="h-10 w-10 text-primary" />
    },
    {
      id: 'audiobooks',
      title: 'Audiobook Production',
      description: 'Transform written content into high-quality narrated audiobooks with customizable voices and emotional delivery.',
      benefits: [
        'Create audiobooks in days instead of weeks',
        'Customize voice based on character attributes',
        'Maintain consistent quality across all content',
        'Produce in multiple languages simultaneously'
      ],
      icon: <BookOpen className="h-10 w-10 text-primary" />
    },
    {
      id: 'voiceovers',
      title: 'Professional Voice Overs',
      description: 'Generate studio-quality voice overs for commercials, explainer videos, and promotional content without booking voice talent.',
      benefits: [
        'Eliminate scheduling and studio booking',
        'Iterate rapidly with unlimited revisions',
        'Maintain brand voice consistency',
        'Scale content production efficiently'
      ],
      icon: <Mic className="h-10 w-10 text-primary" />
    },
    {
      id: 'characters',
      title: 'Character Voice Creation',
      description: 'Create and customize unique character voices for animation, gaming, and interactive media applications.',
      benefits: [
        'Design distinctive character voices',
        'Ensure voice consistency across episodes/games',
        'Generate unlimited dialogue variations',
        'Reduce dependency on voice actor availability'
      ],
      icon: <Film className="h-10 w-10 text-primary" />
    },
    {
      id: 'podcasts',
      title: 'Podcast & Radio Production',
      description: 'Generate professional narration and dialogue for podcasts, radio shows, and audio content.',
      benefits: [
        'Produce consistent episodes with identical voice quality',
        'Generate voices for multiple hosts or characters',
        'Create audiodramas with distinctive character voices',
        'Automate intro/outro and advertisement segments'
      ],
      icon: <Radio className="h-10 w-10 text-primary" />
    },
    {
      id: 'streaming',
      title: 'Streaming & OTT Content',
      description: 'Enhance streaming platforms with voice-enabled features, personalized content, and scalable dubbing solutions.',
      benefits: [
        'Provide personalized viewing experiences',
        'Scale content across international markets rapidly',
        'Enable voice-driven content navigation',
        'Automate description and accessibility features'
      ],
      icon: <Tv className="h-10 w-10 text-primary" />
    }
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Media & Entertainment Use Cases</h2>
      <p className="text-muted-foreground">
        Discover how leading media and entertainment companies are leveraging voice AI to transform content creation and distribution.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {useCases.map((useCase) => (
          <Card key={useCase.id} className="flex flex-col h-full">
            <CardHeader>
              <div className="flex justify-between items-start">
                {useCase.icon}
              </div>
              <CardTitle className="text-xl">{useCase.title}</CardTitle>
              <CardDescription>{useCase.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <h4 className="font-medium mb-2">Key Benefits:</h4>
              <ul className="space-y-2">
                {useCase.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">✓</div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => window.open(`https://elevenlabs.io/use-case/${useCase.id}`, '_blank')}
              >
                <Play className="mr-2 h-4 w-4" />
                Explore Use Case
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button 
          size="lg"
          onClick={() => window.open('https://elevenlabs.io/case-studies', '_blank')}
        >
          View All Media & Entertainment Case Studies
        </Button>
      </div>
    </div>
  );
};

export default MediaUseCasesInspiration;
