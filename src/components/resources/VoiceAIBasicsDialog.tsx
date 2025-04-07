
import React, { useState } from 'react';
import { Brain, Clock, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import CourseContentDialog from '../CourseContentDialog';

const VoiceAIBasicsDialog = ({
  open,
  onOpenChange
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const [courseContentOpen, setCourseContentOpen] = useState(false);
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            Voice AI Basics
          </DialogTitle>
          <DialogDescription>
            Explore our curated resources to help you learn the fundamentals of voice AI technology
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="articles">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="courses">Online Courses</TabsTrigger>
            <TabsTrigger value="books">Books</TabsTrigger>
            <TabsTrigger value="websites">Websites & Blogs</TabsTrigger>
          </TabsList>
          
          <TabsContent value="articles" className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">What is Voice AI?</h3>
                <Badge variant="outline" className="mb-2">TechCrunch</Badge>
                <p className="text-muted-foreground mb-4">This article introduces the concept of voice AI, how it works, and its applications across various industries.</p>
                <Button size="sm" variant="outline" className="mt-2">Read Article</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">The Fundamentals of Voice AI: What You Need to Know</h3>
                <Badge variant="outline" className="mb-2">Voicebot.ai</Badge>
                <p className="text-muted-foreground mb-4">This article provides an overview of voice AI, exploring key technologies like speech recognition, natural language processing (NLP), and voice assistants.</p>
                <Button size="sm" variant="outline" className="mt-2">Read Article</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">How Voice AI is Transforming Customer Experience</h3>
                <Badge variant="outline" className="mb-2">Forbes</Badge>
                <p className="text-muted-foreground mb-4">An in-depth article on how businesses are leveraging voice AI to enhance customer interactions, automate tasks, and improve service delivery.</p>
                <Button size="sm" variant="outline" className="mt-2">Read Article</Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="courses" className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">AI Fundamentals for Voice AI: A 30-Minute Onboarding Primer</h3>
                <Badge variant="outline" className="bg-primary/10 text-primary">New</Badge>
                <Badge variant="outline" className="mb-3">ElevenLabs Academy</Badge>
                <p className="text-muted-foreground mb-3">A fast-track primer on Voice AI fundamentals designed for developers, AI strategists, and business leaders.</p>
                
                <div className="space-y-4 mb-4">
                  <div className="border-l-2 border-l-primary/30 pl-4 py-1">
                    <h4 className="font-medium text-sm">Module 1: Introduction to AI and Voice AI (5 min)</h4>
                    <p className="text-xs text-muted-foreground">AI basics, key subfields, and Voice AI introduction</p>
                  </div>
                  
                  <div className="border-l-2 border-l-primary/30 pl-4 py-1">
                    <h4 className="font-medium text-sm">Module 2: How Voice AI Works (7 min)</h4>
                    <p className="text-xs text-muted-foreground">ASR, NLP, TTS components and complete workflow explanation</p>
                  </div>
                  
                  <div className="border-l-2 border-l-primary/30 pl-4 py-1">
                    <h4 className="font-medium text-sm">Module 3: Voice AI Use Cases by Persona (5 min)</h4>
                    <p className="text-xs text-muted-foreground">Role-specific applications for developers, strategists, and marketing/sales</p>
                  </div>
                  
                  <div className="border-l-2 border-l-primary/30 pl-4 py-1">
                    <h4 className="font-medium text-sm">Module 4: Data, Privacy & Ethical Considerations (5 min)</h4>
                    <p className="text-xs text-muted-foreground">Voice data handling, compliance, and ethical design principles</p>
                  </div>
                  
                  <div className="border-l-2 border-l-primary/30 pl-4 py-1">
                    <h4 className="font-medium text-sm">Module 5: Voice AI in Practice – Platform Overview (5 min)</h4>
                    <p className="text-xs text-muted-foreground">Platform onboarding prep, terminology, and role-specific guidance</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    30 min total
                  </div>
                  <Button size="sm" variant="default" className="gap-1" onClick={() => setCourseContentOpen(true)}>
                    Access Course
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">AI for Everyone (Coursera by Andrew Ng)</h3>
                <Badge variant="outline" className="mb-2">Coursera</Badge>
                <p className="text-muted-foreground mb-4">While this course is not specifically about voice AI, it covers the basics of AI and machine learning, which is crucial for understanding voice AI technology.</p>
                <Button size="sm" variant="outline" className="mt-2" onClick={() => window.open('https://www.coursera.org/learn/ai-for-everyone', '_blank')}>View Course</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Introduction to Speech Recognition</h3>
                <Badge variant="outline" className="mb-2">Udemy</Badge>
                <p className="text-muted-foreground mb-4">A beginner-level course that covers the basics of speech recognition, which is essential for working with voice AI.</p>
                <Button size="sm" variant="outline" className="mt-2" onClick={() => window.open('https://www.udemy.com/course/speech-recognition/', '_blank')}>View Course</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Speech Processing and Voice AI</h3>
                <Badge variant="outline" className="mb-2">edX</Badge>
                <p className="text-muted-foreground mb-4">This course dives into the technical side of voice AI, explaining speech recognition, synthesis, and the building blocks behind voice assistants.</p>
                <Button size="sm" variant="outline" className="mt-2" onClick={() => window.open('https://www.edx.org/course/speech-processing', '_blank')}>View Course</Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="books" className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Voice User Interface Design</h3>
                <Badge variant="outline" className="mb-2">Michael H. Cohen, James P. Giangola, and Jennifer Balogh</Badge>
                <p className="text-muted-foreground mb-4">This book explores the principles of voice interface design and the technical aspects of developing voice-enabled applications.</p>
                <Button size="sm" variant="outline" className="mt-2">Find Book</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Designing Voice User Interfaces</h3>
                <Badge variant="outline" className="mb-2">Cathy Pearl</Badge>
                <p className="text-muted-foreground mb-4">Focuses on the design and user experience of voice-based applications, helping developers build more intuitive voice interfaces.</p>
                <Button size="sm" variant="outline" className="mt-2">Find Book</Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="websites" className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">ElevenLabs Blog</h3>
                <p className="text-muted-foreground mb-4">The official ElevenLabs blog featuring the latest updates on voice AI technology, use cases, and industry insights.</p>
                <Button size="sm" variant="outline" className="mt-2" onClick={() => window.open('https://elevenlabs.io/blog', '_blank')}>Visit Website</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Voicebot.ai</h3>
                <p className="text-muted-foreground mb-4">A comprehensive source for news, research, and analysis on the voice AI industry. It includes reports, blog posts, and case studies.</p>
                <Button size="sm" variant="outline" className="mt-2" onClick={() => window.open('https://www.voicebot.ai', '_blank')}>Visit Website</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <CourseContentDialog open={courseContentOpen} onOpenChange={setCourseContentOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default VoiceAIBasicsDialog;
