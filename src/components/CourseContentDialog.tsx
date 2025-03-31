
import React from 'react';
import { Check, Clock, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface CourseContentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CourseContentDialog = ({ open, onOpenChange }: CourseContentDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            AI Fundamentals for Voice AI: A 30-Minute Onboarding Primer
          </DialogTitle>
          <DialogDescription>
            A fast-track primer on Voice AI fundamentals designed for developers, AI strategists, and business leaders.
          </DialogDescription>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="outline" className="bg-primary/10 text-primary">New</Badge>
            <Badge variant="outline">ElevenLabs Academy</Badge>
            <div className="flex items-center text-xs text-muted-foreground ml-auto">
              <Clock className="h-3 w-3 mr-1" />
              30 min total
            </div>
          </div>
        </DialogHeader>
        
        <Tabs defaultValue="module1" className="mt-4">
          <TabsList className="grid grid-cols-5 mb-4">
            <TabsTrigger value="module1">Module 1</TabsTrigger>
            <TabsTrigger value="module2">Module 2</TabsTrigger>
            <TabsTrigger value="module3">Module 3</TabsTrigger>
            <TabsTrigger value="module4">Module 4</TabsTrigger>
            <TabsTrigger value="module5">Module 5</TabsTrigger>
          </TabsList>
          
          <TabsContent value="module1" className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Module 1: Introduction to AI and Voice AI</h3>
                <div className="aspect-video bg-slate-100 rounded-md mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-muted-foreground mb-3">Video content would appear here</p>
                    <Button variant="outline" size="sm" className="gap-1">
                      <ExternalLink className="h-3 w-3" />
                      Watch on ElevenLabs Academy
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2">What is Artificial Intelligence?</h4>
                    <p className="text-muted-foreground">
                      Artificial Intelligence (AI) refers to the ability of machines to perform tasks that typically require human intelligence.
                      This includes learning from data, understanding language, recognizing images, and making decisions.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Key AI Subfields</h4>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>
                        <span className="font-medium text-foreground">Machine Learning (ML)</span> – algorithms that learn from data to make predictions or decisions.
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Natural Language Processing (NLP)</span> – enables machines to understand and interact using human language.
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Speech Processing</span> – focuses on understanding and generating spoken language.
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">What is Voice AI?</h4>
                    <p className="text-muted-foreground">
                      Voice AI combines machine learning, NLP, and speech processing to create systems that can listen to what we say, 
                      understand it, and respond meaningfully. Examples include voice assistants like Alexa, Siri, 
                      or customer service bots that talk back intelligently.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Why Voice AI Matters</h4>
                    <p className="text-muted-foreground">
                      Voice interfaces are becoming the new norm across industries because they're fast, natural, and increasingly 
                      expected by users—from customer support to sales automation.
                    </p>
                  </div>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-md">
                  <h4 className="font-semibold mb-2">Key Takeaways</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>AI enables machines to perform tasks requiring human-like intelligence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Voice AI combines ML, NLP, and speech processing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Voice interfaces are becoming standard across industries</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-between">
              <Button variant="outline" disabled>Previous</Button>
              <Button variant="default" onClick={() => document.querySelector('[data-value="module2"]')?.click()}>
                Next Module
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="module2" className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Module 2: How Voice AI Works</h3>
                <div className="aspect-video bg-slate-100 rounded-md mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-muted-foreground mb-3">Video content would appear here</p>
                    <Button variant="outline" size="sm" className="gap-1">
                      <ExternalLink className="h-3 w-3" />
                      Watch on ElevenLabs Academy
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2">Voice AI Pipeline</h4>
                    <p className="text-muted-foreground">
                      Voice AI runs through a clear pipeline with several components working together:
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Core Components</h4>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>
                        <span className="font-medium text-foreground">Automatic Speech Recognition (ASR)</span> – 
                        Converts your spoken words into text. This is the "hearing" part.
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Natural Language Processing (NLP)</span> – 
                        Takes the converted text and extracts meaning. It figures out what you meant, not just what you said.
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Natural Language Understanding (NLU)</span> – 
                        A subfield of NLP—identifies intent ("book a flight") and entities ("New York to LA").
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Dialogue Management</span> – 
                        Decides what the AI should say or do next. It's like the AI's brain making a decision.
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Text-to-Speech (TTS)</span> – 
                        Converts the response text back into spoken language—this is how the AI "talks" back to you.
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Example Workflow</h4>
                    <p className="text-muted-foreground mb-2">
                      Let's walk through a complete example:
                    </p>
                    <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                      <li>User says: "What's the weather in Chicago today?"</li>
                      <li>ASR transcribes the spoken words into text</li>
                      <li>NLP/NLU extracts that you're asking for weather info, and identifies "Chicago" as the location</li>
                      <li>Dialogue Management queries a weather API for Chicago's forecast</li>
                      <li>TTS responds audibly: "The forecast in Chicago is 65 degrees and sunny."</li>
                    </ol>
                    <p className="text-muted-foreground mt-2">
                      This entire Voice AI loop happens in under a second.
                    </p>
                  </div>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-md">
                  <h4 className="font-semibold mb-2">Key Takeaways</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Voice AI uses a pipeline: ASR → NLP → Dialogue → TTS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Each component has a specific role in understanding and responding to speech</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>The entire process happens quickly, creating a natural conversation flow</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-between">
              <Button variant="outline" onClick={() => document.querySelector('[data-value="module1"]')?.click()}>Previous</Button>
              <Button variant="default" onClick={() => document.querySelector('[data-value="module3"]')?.click()}>
                Next Module
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="module3" className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Module 3: Voice AI Use Cases by Persona</h3>
                <div className="aspect-video bg-slate-100 rounded-md mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-muted-foreground mb-3">Video content would appear here</p>
                    <Button variant="outline" size="sm" className="gap-1">
                      <ExternalLink className="h-3 w-3" />
                      Watch on ElevenLabs Academy
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2">Voice AI Impact by Role</h4>
                    <p className="text-muted-foreground">
                      How Voice AI impacts different professionals varies by their role and responsibilities:
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">For Developers</h4>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Work with Voice AI through APIs and SDKs</li>
                      <li>Set up voice flows, integrate with CRMs, or customize voice bots</li>
                      <li>Leverage existing speech engines rather than building from scratch</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">For AI Strategists</h4>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Treat Voice AI as a scalable channel within the organization</li>
                      <li>Design customer journeys, user experiences, and touchpoints</li>
                      <li>Align voice experiences with broader AI goals across the organization</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">For Marketing & Sales Leaders</h4>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Drive conversion through conversational commerce</li>
                      <li>Implement lead generation bots that qualify leads and book demos 24/7</li>
                      <li>Use voice interfaces to deepen engagement and gather rich customer insights</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-md">
                  <h4 className="font-semibold mb-2">Key Takeaways</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Each role has a unique perspective on Voice AI implementation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Developers focus on technical implementation through APIs and SDKs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Strategists and business leaders leverage Voice AI for engagement and conversion</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-between">
              <Button variant="outline" onClick={() => document.querySelector('[data-value="module2"]')?.click()}>Previous</Button>
              <Button variant="default" onClick={() => document.querySelector('[data-value="module4"]')?.click()}>
                Next Module
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="module4" className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Module 4: Data, Privacy & Ethical Considerations</h3>
                <div className="aspect-video bg-slate-100 rounded-md mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-muted-foreground mb-3">Video content would appear here</p>
                    <Button variant="outline" size="sm" className="gap-1">
                      <ExternalLink className="h-3 w-3" />
                      Watch on ElevenLabs Academy
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2">Voice Data Sensitivity</h4>
                    <p className="text-muted-foreground">
                      Voice AI deals with sensitive data—often personal, sometimes regulated. Understanding the key considerations is crucial.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Data Collection & Storage</h4>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Voice data is often recorded or transcribed</li>
                      <li>Only store what's necessary for the service</li>
                      <li>Implement security best practices for storage and access</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Privacy Compliance</h4>
                    <p className="text-muted-foreground mb-2">
                      Regulations like GDPR (in the EU) and CCPA (in California) require:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>User consent for voice data collection</li>
                      <li>Clear privacy policies that explain data usage</li>
                      <li>Ability to delete or export user data upon request</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Ethical Design in Voice AI</h4>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>
                        <span className="font-medium text-foreground">Transparency</span>: 
                        Don't let users think they're talking to a human if it's AI
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Avoiding bias</span>: 
                        Ensure your AI performs equally well across accents, genders, and languages
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Fallback strategies</span>: 
                        If the AI doesn't understand, offer a way to escalate or repeat
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-md">
                  <h4 className="font-semibold mb-2">Key Takeaways</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Voice data requires careful handling and protection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Privacy compliance is mandatory in many jurisdictions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Ethical design focuses on transparency, fairness, and user experience</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-between">
              <Button variant="outline" onClick={() => document.querySelector('[data-value="module3"]')?.click()}>Previous</Button>
              <Button variant="default" onClick={() => document.querySelector('[data-value="module5"]')?.click()}>
                Next Module
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="module5" className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Module 5: Voice AI in Practice – Platform Overview</h3>
                <div className="aspect-video bg-slate-100 rounded-md mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-muted-foreground mb-3">Video content would appear here</p>
                    <Button variant="outline" size="sm" className="gap-1">
                      <ExternalLink className="h-3 w-3" />
                      Watch on ElevenLabs Academy
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2">Preparing for Platform Onboarding</h4>
                    <p className="text-muted-foreground">
                      Now that you understand the fundamentals, let's prepare for using a Voice AI platform effectively.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Key Terminology to Know</h4>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>
                        <span className="font-medium text-foreground">Intents</span>: 
                        What the user wants to do (e.g., "book a demo")
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Entities</span>: 
                        Specific data points (e.g., date, location, product name)
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Flows or Dialogues</span>: 
                        Structured conversations designed to guide users to an outcome
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Platform Tools You'll Encounter</h4>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Visual conversation builders</li>
                      <li>Analytics dashboards for performance monitoring</li>
                      <li>Integration options (CRM, calendar, help desk, etc.)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Role-Specific Preparation</h4>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Developers: Prepare to build flows and integrate with other systems</li>
                      <li>Strategists: Define use cases, success metrics, and KPIs</li>
                      <li>Marketing/Sales: Plan campaigns and analyze results</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-md">
                  <h4 className="font-semibold mb-2">Key Takeaways</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Understand platform terminology before diving in</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Each role has specific responsibilities in Voice AI implementation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Platform tools help you build, monitor, and integrate Voice AI solutions</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-8 pt-8 border-t">
                  <h3 className="text-lg font-semibold mb-4">Quick Knowledge Check</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium mb-2">1. What does ASR stand for?</p>
                      <p className="text-muted-foreground">Automatic Speech Recognition</p>
                    </div>
                    
                    <div>
                      <p className="font-medium mb-2">2. Name one subfield of AI used in Voice AI.</p>
                      <p className="text-muted-foreground">Machine Learning, Natural Language Processing, or Speech Processing</p>
                    </div>
                    
                    <div>
                      <p className="font-medium mb-2">3. What's an "intent" in voice design?</p>
                      <p className="text-muted-foreground">What the user wants to accomplish or the purpose of their interaction</p>
                    </div>
                    
                    <div>
                      <p className="font-medium mb-2">4. What's one use case for Voice AI in sales or marketing?</p>
                      <p className="text-muted-foreground">Lead generation, qualification, conversational commerce, or customer engagement</p>
                    </div>
                    
                    <div>
                      <p className="font-medium mb-2">5. Why is ethical design important in Voice AI?</p>
                      <p className="text-muted-foreground">It ensures transparency, fairness, and a positive user experience while protecting privacy</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t text-center">
                  <h3 className="text-lg font-semibold mb-4">Course Completion</h3>
                  <p className="text-muted-foreground mb-6">Congratulations! You've completed the AI Fundamentals for Voice AI course.</p>
                  <Button size="lg" variant="default" className="gap-2">
                    Get Certificate
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-between">
              <Button variant="outline" onClick={() => document.querySelector('[data-value="module4"]')?.click()}>Previous</Button>
              <Button variant="outline" disabled>Next</Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default CourseContentDialog;
