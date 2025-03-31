
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import VideoEmbed from '@/components/VideoEmbed';

const ProductUpdates = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Key Product Updates</h1>
            <p className="text-lg text-muted-foreground mb-8">
              The latest innovations from ElevenLabs
            </p>
            
            <div className="space-y-8">
              {/* Scribe Update */}
              <Card>
                <CardHeader>
                  <div className="space-y-1">
                    <CardTitle className="text-2xl">Scribe: Advanced Speech-to-Text Technology</CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground gap-2">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>March 2024</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Introducing Scribe, our state-of-the-art speech-to-text model that rivals OpenAI's 4o 
                    speech-to-text capabilities. Scribe delivers exceptional transcription accuracy across 
                    multiple languages, with enhanced punctuation, formatting, and speaker diarization.
                  </CardDescription>
                  <div className="mt-4">
                    <img 
                      src="/lovable-uploads/f07ee88e-8621-44cb-8725-5f2b596912df.png" 
                      alt="Scribe Speech-to-Text Feature" 
                      className="rounded-lg w-full object-cover" 
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" asChild className="gap-1">
                    <a 
                      href="https://elevenlabs.io/blog/scribe-comparison-to-openais-4o-speech-to-text-model" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Learn more about Scribe <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>

              {/* Actor Mode Update */}
              <Card>
                <CardHeader>
                  <div className="space-y-1">
                    <CardTitle className="text-2xl">Actor Mode: Voice-Guided AI Delivery</CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground gap-2">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>March 2025</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Actor Mode has launched for everyone in Studio, allowing you to use your own voice to guide 
                    the delivery of scripts spoken by our AI voices. This unlocks an entirely new dimension of 
                    creative control for content creators, voice actors, and storytellers.
                  </CardDescription>
                  <div className="mt-4">
                    <VideoEmbed 
                      videoId="hDhgcQBKP8" 
                      title="Actor Mode Demonstration" 
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" asChild className="gap-1">
                    <a 
                      href="https://twitter.com/elevenlabsio/status/1905653402429723110" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      See the Twitter announcement <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductUpdates;
