
import React from 'react';
import { Video, Clock, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import VideoEmbed from '../VideoEmbed';

const WebinarsDialog = ({
  open,
  onOpenChange
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Video className="h-5 w-5 text-primary" />
            Video Resources
          </DialogTitle>
          <DialogDescription>
            Explore our video library to learn more about our platform and stay updated
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="updates" className="mt-4">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="updates">What's New - Product Updates</TabsTrigger>
            <TabsTrigger value="webinars">On-Demand Webinars</TabsTrigger>
          </TabsList>
          
          <TabsContent value="updates" className="space-y-4">
            <div className="text-center mb-6">
              <Button variant="default" size="lg" className="flex items-center gap-2" onClick={() => window.open('https://elevenlabs.io/blog', '_blank')}>
                View All Updates
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <VideoEmbed videoId="Kj2dgXITrPw" title="Actor Mode Demonstration" />
                </CardContent>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Actor Mode: Voice-Guided AI Delivery</h3>
                  <p className="text-sm text-muted-foreground mb-2">New feature allowing voice guidance for AI speech delivery.</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    14 min
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <VideoEmbed videoId="NmRAhNTJ06M" title="Studio is now available for everyone" />
                </CardContent>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Studio is now available for everyone</h3>
                  <p className="text-sm text-muted-foreground mb-2">Introduction to our newest speech recognition feature.</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    12 min
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <VideoEmbed videoId="K-48RXyuRaY" title="Meet Scribe: Speech Recognition" />
                </CardContent>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Meet Scribe: Speech Recognition</h3>
                  <p className="text-sm text-muted-foreground mb-2">Introduction to our newest speech recognition feature.</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    12 min
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <VideoEmbed videoId="kuWj4YbStUY" title="ElevenLabs New Features" />
                </CardContent>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">ElevenLabs New Features</h3>
                  <p className="text-sm text-muted-foreground mb-2">Discover the latest features added to our voice AI platform.</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    10 min
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <VideoEmbed videoId="x6ub-9HhxGU" title="Smart Podcasts Produced by Generative AI" />
                </CardContent>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Smart Podcasts Produced by Generative AI</h3>
                  <p className="text-sm text-muted-foreground mb-2">Explore the latest generation of our voice AI technology.</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    15 min
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="webinars" className="space-y-4">
            <div className="text-center mb-6">
              <Button variant="default" size="lg" className="flex items-center gap-2" onClick={() => window.open('https://elevenlabs.io/webinars', '_blank')}>
                View All Webinars
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="overflow-hidden">
                <div className="aspect-video relative">
                  <iframe src="https://elevenlabs.io/webinars/transforming-education-with-ai" title="AI in EdTech: Scaling Learning Experiences with Innovation" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className="absolute inset-0 w-full h-full border-0"></iframe>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">AI in EdTech: Scaling Learning Experiences with Innovation</h3>
                  <p className="text-sm text-muted-foreground mb-2">Explore how voice AI is transforming education technology.</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    45 min
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <VideoEmbed videoId="dQw4w9WgXcQ" title="ElevenLabs Webinar" />
                </CardContent>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Special ElevenLabs Webinar</h3>
                  <p className="text-sm text-muted-foreground mb-2">An important webinar about voice AI technology.</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    45 min
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <div className="bg-slate-200 aspect-video relative flex items-center justify-center">
                  <Button variant="default" size="sm" className="absolute z-10 flex gap-2 items-center" onClick={() => window.open('https://elevenlabs.io/webinars/elevenlabs-next-gen-digital-and-news-publishing', '_blank')}>
                    <Video className="h-4 w-4" />
                    Watch Now
                  </Button>
                  <div className="absolute inset-0 bg-black/50"></div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Next-Gen Digital and News Publishing</h3>
                  <p className="text-sm text-muted-foreground mb-2">Explore how voice AI is transforming digital content and news publishing.</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    40 min
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <VideoEmbed videoId="0vyUwVR0vx0" title="Conversational AI Office Hours" />
                </CardContent>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Conversational AI Office Hours</h3>
                  <p className="text-sm text-muted-foreground mb-2">A comprehensive introduction to ElevenLabs voice technology and its applications.</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    45 min
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default WebinarsDialog;
