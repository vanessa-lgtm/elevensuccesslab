
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ExternalLink, Sparkles, BookOpen, Lightbulb } from 'lucide-react';
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
    <div className="min-h-screen bg-background relative">
      {/* Background pattern with overlay */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none z-0" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23000000" fill-opacity="1" fill-rule="evenodd"/%3E%3C/svg%3E")',
          backgroundSize: '120px 120px'
        }} 
      />
      
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-3xl mx-auto mb-16 text-center mt-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary mb-4">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Discover</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Use Case Inspiration
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how organizations across industries are leveraging ElevenLabs
            to transform their operations and create exceptional experiences.
          </p>
        </div>
        
        <div className="mb-20 rounded-xl p-6 bg-white/50 shadow-sm border border-primary/10">
          <MediaUseCasesInspiration />
        </div>
        
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px bg-primary/20 w-12"></div>
            <h2 className="text-3xl font-bold text-center inline-flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary/80" />
              Featured Customer Stories
            </h2>
            <div className="h-px bg-primary/20 w-12"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogStories.map((story) => (
              <Card 
                key={story.id} 
                className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer bg-white/70 backdrop-blur-sm border-primary/10"
                onClick={() => window.open(story.link, '_blank', 'noopener,noreferrer')}
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={story.imageUrl} 
                    alt={story.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
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
                      className="group"
                      asChild
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a href={story.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                        Read Full Article 
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto text-center px-6 py-10 rounded-xl bg-gradient-to-r from-primary/5 to-primary/10 mb-16">
          <div className="inline-block p-3 bg-primary/10 rounded-full mb-6">
            <Lightbulb className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Ready to put your knowledge to the test?</h2>
          <p className="text-muted-foreground mb-6">
            Take what you've learned and start creating your own voice AI applications with ElevenLabs.
          </p>
          <Button size="lg" className="px-8 group" asChild>
            <a href="https://elevenlabs.io" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
              Go To ElevenLabs 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
