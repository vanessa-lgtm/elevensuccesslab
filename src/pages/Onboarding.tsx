
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OnboardingChecklist from '@/components/OnboardingChecklist';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, HelpCircle, BookOpen, ThumbsUp } from 'lucide-react';

const Onboarding = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("checklist");
  const [progress, setProgress] = useState(0);
  
  // Update the progress when the checklist items are completed
  const handleProgressUpdate = (completedCount: number, totalCount: number) => {
    const newProgress = Math.round((completedCount / totalCount) * 100);
    setProgress(newProgress);
  };
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8 mb-12">
        <div className="flex items-center mb-4 mt-20">
          <Button 
            variant="ghost" 
            size="sm" 
            className="gap-1" 
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </div>
        
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome to Your Onboarding Journey</h1>
          <p className="text-muted-foreground text-lg mb-6">
            Complete these steps to get the most out of your NexusAI experience.
          </p>
          
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm font-medium">Your onboarding progress</p>
              <span className="text-sm font-medium">{progress}% complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <Tabs defaultValue="checklist" onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full grid grid-cols-4">
                <TabsTrigger value="checklist">Checklist</TabsTrigger>
                <TabsTrigger value="guides">Product Guides</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
                <TabsTrigger value="usecases">Use Cases</TabsTrigger>
              </TabsList>
              
              <TabsContent value="checklist" className="mt-6">
                <OnboardingChecklist onProgressUpdate={handleProgressUpdate} />
              </TabsContent>
              
              <TabsContent value="guides" className="mt-6">
                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Getting Started with NexusAI</CardTitle>
                      <CardDescription>Essential setup and configuration</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">This guide will walk you through the essential first steps to set up your NexusAI environment.</p>
                      <Button size="sm">View Guide</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Implementing Your First AI Model</CardTitle>
                      <CardDescription>Step-by-step tutorial for beginners</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">Learn how to implement and deploy your first AI model with our easy-to-follow tutorial.</p>
                      <Button size="sm">View Guide</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Advanced Configuration Options</CardTitle>
                      <CardDescription>Customize NexusAI for your specific needs</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">Explore advanced configuration options to tailor NexusAI to your organization's requirements.</p>
                      <Button size="sm">View Guide</Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="resources" className="mt-6">
                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Documentation</CardTitle>
                      <CardDescription>Comprehensive product documentation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">Access our detailed product documentation covering all aspects of NexusAI.</p>
                      <Button size="sm">View Documentation</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Knowledge Base</CardTitle>
                      <CardDescription>Articles and solutions for common questions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">Browse through our knowledge base for answers to frequently asked questions and common issues.</p>
                      <Button size="sm">Explore Knowledge Base</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Video Tutorials</CardTitle>
                      <CardDescription>Visual learning resources</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">Watch step-by-step video tutorials to help you master NexusAI features quickly.</p>
                      <Button size="sm">Watch Tutorials</Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="usecases" className="mt-6">
                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Customer Service Enhancement</CardTitle>
                      <CardDescription>Improve customer interactions with AI</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">Learn how to implement AI-driven solutions to enhance customer service experiences.</p>
                      <Button size="sm">Explore Use Case</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Data Analysis & Insights</CardTitle>
                      <CardDescription>Leverage AI for business intelligence</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">Discover how to extract meaningful insights from your data using NexusAI's powerful analysis tools.</p>
                      <Button size="sm">Explore Use Case</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Process Automation</CardTitle>
                      <CardDescription>Streamline workflows with intelligent automation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">See how organizations are using NexusAI to automate repetitive tasks and improve efficiency.</p>
                      <Button size="sm">Explore Use Case</Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <HelpCircle className="h-5 w-5" />
                    Get Help
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">Live Chat Support</Button>
                    <Button variant="outline" className="w-full justify-start">Email Support Team</Button>
                    <Button variant="outline" className="w-full justify-start">Schedule a Call</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Quick Links
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">FAQs</Button>
                    <Button variant="outline" className="w-full justify-start">Community Forum</Button>
                    <Button variant="outline" className="w-full justify-start">Upcoming Webinars</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ThumbsUp className="h-5 w-5" />
                    Feedback
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">We'd love to hear about your onboarding experience!</p>
                  <Button className="w-full">Share Feedback</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Onboarding;
