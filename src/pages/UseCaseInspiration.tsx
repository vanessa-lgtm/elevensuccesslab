
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
    imageUrl: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=2564&auto=format&fit=crop",
    link: "https://elevenlabs.io/blog/convin"
  },
  {
    id: "blog2",
    title: "TIME: Bringing Conversational AI to Journalism",
    summary: "Learn how TIME magazine uses ElevenLabs' voice AI to create interactive experiences that allow readers to engage with historical figures and contemporary leaders in a whole new way.",
    imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2670&auto=format&fit=crop",
    link: "https://elevenlabs.io/blog/time-brings-conversational-ai-to-journalism"
  },
  {
    id: "blog3",
    title: "Solda AI: Making Books Accessible Through Voice Technology",
    summary: "Explore how Solda AI partnered with ElevenLabs to transform written content into natural-sounding audiobooks, increasing accessibility and engagement for readers worldwide.",
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=2574&auto=format&fit=crop",
    link: "https://elevenlabs.io/blog/solda-ai"
  },
  {
    id: "blog4",
    title: "SynthFlow: Creating Realistic Voice Overs for Training Videos",
    summary: "See how SynthFlow uses ElevenLabs' voice technology to produce high-quality, multilingual training videos at scale, saving time and resources while maintaining natural-sounding narration.",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop",
    link: "https://elevenlabs.io/blog/synthflow"
  },
  {
    id: "blog5",
    title: "Hedra: Enhancing Compliance Training with Voice AI",
    summary: "Discover how Hedra leverages ElevenLabs' technology to transform compliance training through personalized, engaging voice content that improves learning outcomes and retention.",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop",
    link: "https://elevenlabs.io/blog/hedra"
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
            <Card key={story.id} className="overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
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
                <Button variant="outline" size="sm" className="w-full mt-auto" asChild>
                  <a href={story.link} target="_blank" rel="noopener noreferrer">
                    Read Case Study <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
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
