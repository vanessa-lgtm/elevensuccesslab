
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WebinarPopup from '@/components/WebinarPopup';
import MediaUseCasesInspiration from '@/components/MediaUseCasesInspiration';

const blogStories = [
  {
    id: "blog1",
    title: "Convin: Revolutionizing B2B Sales with ElevenLabs' Voice AI",
    summary: "Discover how Convin enhances customer experience and streamlines sales training with AI-powered call analytics, leveraging ElevenLabs technology for more effective sales conversations.",
    imageUrl: "/lovable-uploads/1058e551-4983-40ac-be73-ae0eef68119d.png", 
    link: "https://elevenlabs.io/blog/convin"
  },
  {
    id: "blog2",
    title: "TIME: Bringing Conversational AI to Journalism",
    summary: "Learn how TIME magazine uses ElevenLabs' voice AI to create interactive experiences that allow readers to engage with historical figures and contemporary leaders in a whole new way.",
    imageUrl: "/lovable-uploads/0fc4a136-4ce5-4d5a-b696-ee1989029bb8.png", 
    link: "https://elevenlabs.io/blog/time-brings-conversational-ai-to-journalism"
  },
  {
    id: "blog3",
    title: "Bertelsmann: Transforming Media with AI Voice Technology",
    summary: "Explore how Bertelsmann, a global media powerhouse, is leveraging ElevenLabs' voice AI to innovate content creation, enhance accessibility, and deliver personalized experiences across their diverse media portfolio.",
    imageUrl: "/lovable-uploads/f07ee88e-8621-44cb-8725-5f2b596912df.png", 
    link: "https://elevenlabs.io/blog/bertelsmann"
  },
  {
    id: "blog4",
    title: "Wondercraft: Revolutionizing Audio Content Creation",
    summary: "See how Wondercraft partners with ElevenLabs to transform podcast and audio production, enabling creators to produce high-quality, engaging content with natural-sounding AI voices.",
    imageUrl: "/lovable-uploads/da4f5fb2-1b10-4adf-9ddf-e0ecddbcff9c.png", 
    link: "https://elevenlabs.io/blog/wondercraft"
  },
  {
    id: "blog5",
    title: "Rian: Preserving Cultural Heritage Through Voice AI",
    summary: "Learn how Rian uses ElevenLabs' technology to bring historical figures to life, creating immersive educational experiences that preserve cultural heritage and make history more accessible and engaging.",
    imageUrl: "/lovable-uploads/436605c1-78f9-48da-b7e1-a8f1938838f9.png", 
    link: "https://elevenlabs.io/blog/rian"
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
        
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Customer Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {blogStories.map((story) => (
            <Card 
              key={story.id} 
              className="overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              onClick={() => window.open(story.link, '_blank', 'noopener,noreferrer')}
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={story.imageUrl} 
                  alt={story.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg line-clamp-2">{story.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col h-[calc(100%-theme(spacing.36))]">
                <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">{story.summary}</p>
                <div className="flex justify-end w-full mt-auto">
                  <Button 
                    variant="default" 
                    size="sm" 
                    asChild
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a href={story.link} target="_blank" rel="noopener noreferrer">
                      Read Full Article <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
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
