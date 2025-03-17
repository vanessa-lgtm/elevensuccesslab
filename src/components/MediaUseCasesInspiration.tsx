
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ExternalLink, Film, Mic, Radio, Music, Book, Headphones, Tv, Languages, Globe } from 'lucide-react';

interface UseCase {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
}

const MediaUseCasesInspiration = () => {
  const useCases: UseCase[] = [
    {
      id: '1',
      title: 'Multilingual Film Dubbing',
      description: 'Create authentic-sounding dubbed versions of films in multiple languages without hiring voice actors for each language.',
      icon: <Film className="h-10 w-10 text-primary" />,
      link: 'https://elevenlabs.io/docs/use-cases/localization'
    },
    {
      id: '2',
      title: 'Audiobook Production',
      description: 'Convert written content into professional audiobooks with consistent voice quality across chapters or series.',
      icon: <Book className="h-10 w-10 text-primary" />,
      link: 'https://elevenlabs.io/docs/use-cases/audiobooks'
    },
    {
      id: '3',
      title: 'Voice-Overs for Commercials',
      description: 'Produce high-quality voice-overs for commercials or promotional content in multiple variations quickly.',
      icon: <Mic className="h-10 w-10 text-primary" />,
      link: 'https://elevenlabs.io/docs/use-cases/commercials'
    },
    {
      id: '4',
      title: 'Podcast Voice Enhancement',
      description: 'Clean up, enhance, or standardize podcast audio while maintaining the unique character of hosts' voices.',
      icon: <Headphones className="h-10 w-10 text-primary" />,
      link: 'https://elevenlabs.io/docs/use-cases/podcasting'
    },
    {
      id: '5',
      title: 'Video Game Character Voices',
      description: 'Create consistent, scalable voice acting for multiple characters in video games, including variations and emotions.',
      icon: <Tv className="h-10 w-10 text-primary" />,
      link: 'https://elevenlabs.io/docs/use-cases/gaming'
    },
    {
      id: '6',
      title: 'Global Content Localization',
      description: 'Efficiently translate and voice content for international markets while maintaining brand consistency.',
      icon: <Globe className="h-10 w-10 text-primary" />,
      link: 'https://elevenlabs.io/docs/use-cases/localization'
    },
    {
      id: '7',
      title: 'Radio Drama Production',
      description: 'Create rich, full-cast audio dramas with consistent voice quality and emotional range.',
      icon: <Radio className="h-10 w-10 text-primary" />,
      link: 'https://elevenlabs.io/docs/use-cases/audio-drama'
    },
    {
      id: '8',
      title: 'Music Lyric Generation',
      description: 'Generate vocal tracks for music production with customizable vocal styles and emotional delivery.',
      icon: <Music className="h-10 w-10 text-primary" />,
      link: 'https://elevenlabs.io/docs/use-cases/music'
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold mb-2">Media & Entertainment Inspiration</h3>
        <p className="text-muted-foreground mb-6">
          Discover how leading media and entertainment companies are leveraging ElevenLabs voice AI to transform their content creation.
        </p>
      </div>

      <Carousel className="w-full">
        <CarouselContent>
          {useCases.map((useCase) => (
            <CarouselItem key={useCase.id} className="md:basis-1/2 lg:basis-1/3">
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-2">{useCase.icon}</div>
                  <CardTitle>{useCase.title}</CardTitle>
                  <CardDescription>{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {useCase.link && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-2 flex items-center gap-1 text-xs"
                      onClick={() => window.open(useCase.link, '_blank')}
                    >
                      Learn more
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-end gap-2 mt-6">
          <CarouselPrevious className="static transform-none" />
          <CarouselNext className="static transform-none" />
        </div>
      </Carousel>

      <Card className="bg-primary/5 border-primary/20 mt-8">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h4 className="font-semibold text-lg flex items-center gap-2">
                <Languages className="h-5 w-5 text-primary" />
                Need personalized use case guidance?
              </h4>
              <p className="text-muted-foreground">
                Our team can help you identify the perfect voice AI solution for your specific media production needs.
              </p>
            </div>
            <Button className="whitespace-nowrap">Schedule a consultation</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MediaUseCasesInspiration;
