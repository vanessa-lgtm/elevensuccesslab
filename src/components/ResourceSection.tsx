import React, { useEffect, useRef, useState } from 'react';
import { BookOpen, FileText, Video, ArrowUpRight, GraduationCap, BarChart, RefreshCw, Brain, X, Clock, ExternalLink, Quote, AlertCircle, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import VideoEmbed from './VideoEmbed';
interface ResourceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  onClick?: () => void;
  comingSoon?: boolean;
}
const ResourceCard = ({
  icon,
  title,
  description,
  delay,
  onClick,
  comingSoon
}: ResourceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }, delay);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);
  return <div ref={cardRef} className={cn("glass-card rounded-xl p-6 opacity-0 translate-y-10 transition-all duration-700 ease-out", "transform hover:translate-y-[-5px] hover:shadow-lg transition-all duration-300", comingSoon ? "cursor-default" : "cursor-pointer")} onClick={comingSoon ? undefined : onClick}>
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
        {title}
        {comingSoon && <Badge variant="outline" className="text-xs font-normal bg-secondary/50">Coming Soon</Badge>}
      </h3>
      <p className="text-foreground/70 mb-5">{description}</p>
      
      {!comingSoon && <Button variant="ghost" className="group p-0 h-auto font-medium text-primary">
          Learn more
          <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-1 group-hover:translate-y-[-2px] transition-transform" />
        </Button>}
    </div>;
};
const VoiceAIBasicsDialog = ({
  open,
  onOpenChange
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  return <Dialog open={open} onOpenChange={onOpenChange}>
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
      </DialogContent>
    </Dialog>;
};
const WebinarsDialog = ({
  open,
  onOpenChange
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  return <Dialog open={open} onOpenChange={onOpenChange}>
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
                  <iframe src="https://app.livestorm.co/elevenlabs/elevenlabs-ai-in-edtech-scaling-learning-experiences-with-innovation/live?s=3e4af1ad-e459-44b9-a7d9-2ced019ef600" title="AI in EdTech: Scaling Learning Experiences with Innovation" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className="absolute inset-0 w-full h-full border-0"></iframe>
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
                <div className="bg-slate-200 aspect-video relative flex items-center justify-center">
                  <Button variant="default" size="sm" className="absolute z-10 flex gap-2 items-center" onClick={() => window.open('https://www.youtube.com/watch?v=0vyUwVR0vx0', '_blank')}>
                    <Video className="h-4 w-4" />
                    Watch Now
                  </Button>
                  <div className="absolute inset-0 bg-black/50"></div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Getting Started with ElevenLabs Voice AI</h3>
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
    </Dialog>;
};
const SuccessStoriesDialog = ({
  open,
  onOpenChange
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const testimonials = [{
    quote: "The resources provided helped us restructure our entire voice AI strategy, leading to a 35% increase in customer retention within just six months.",
    name: "Sarah Johnson",
    role: "VP of Voice Innovation",
    company: "TechVision Inc."
  }, {
    quote: "The strategic frameworks and measurement tools allowed us to scale our voice AI operations efficiently while maintaining high quality interactions.",
    name: "Michael Chen",
    role: "Chief Voice Officer",
    company: "GrowthWave"
  }, {
    quote: "Access to the training materials and expert consultation transformed how we approach voice AI. Our NPS score has increased by 28 points.",
    name: "Elena Rodriguez",
    role: "Voice AI Director",
    company: "Innovate Solutions"
  }];
  return <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Quote className="h-5 w-5 text-primary" />
            Success Stories
          </DialogTitle>
          <DialogDescription>
            Read about how our customers are achieving success with our platform
          </DialogDescription>
        </DialogHeader>
        
        <div className="text-center mb-6">
          <Button variant="default" size="lg" className="flex items-center gap-2" onClick={() => window.open('https://elevenlabs.io/blog?category=customer-stories', '_blank')}>
            View All Customer Stories
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="space-y-4 mt-4">
          {testimonials.map((testimonial, index) => <Card key={index} className="p-6">
              
              <blockquote className="text-lg mb-4 font-medium text-balance">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-foreground/70">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </Card>)}
        </div>
      </DialogContent>
    </Dialog>;
};
const ResourceSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [voiceAIBasicsOpen, setVoiceAIBasicsOpen] = useState(false);
  const [webinarsOpen, setWebinarsOpen] = useState(false);
  const [successStoriesOpen, setSuccessStoriesOpen] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100');
        entry.target.classList.remove('opacity-0', 'translate-y-10');
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1
    });
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);
  const resources = [{
    icon: <BookOpen size={20} />,
    title: "Voice AI Basics",
    description: "Comprehensive resources on voice AI fundamentals, ideal for beginners.",
    onClick: () => setVoiceAIBasicsOpen(true)
  }, {
    icon: <GraduationCap size={20} />,
    title: "ElevenLabs Product Documentation",
    description: "Comprehensive documentation to help you understand and implement our voice AI technology.",
    onClick: () => window.open("https://elevenlabs.io/docs/overview", "_blank")
  }, {
    icon: <Video size={20} />,
    title: "On-Demand Webinars",
    description: "Access our library of webinars to enhance your knowledge of our product or get inspired!",
    onClick: () => setWebinarsOpen(true)
  }, {
    icon: <Quote size={20} />,
    title: "Success Stories",
    description: "Discover how organizations are achieving success with our voice AI solutions.",
    onClick: () => setSuccessStoriesOpen(true)
  }, {
    icon: <BarChart size={20} />,
    title: "Measurement Frameworks",
    description: "Tools and templates to measure the impact of your voice AI initiatives.",
    comingSoon: true
  }, {
    icon: <TrendingUp size={20} />,
    title: "Market Trends",
    description: "Updates and trends about the Voice AI space.",
    comingSoon: true
  }];
  return <section id="resources" className="section-padding bg-background relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm font-medium text-primary mb-3">Knowledge Hub</div>
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-display font-bold mb-6 opacity-0 translate-y-10 transition-all duration-700 ease-out">
            Resources for Voice AI Excellence
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Access our comprehensive library of resources designed to help you implement
            and scale your voice AI strategy effectively.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => <ResourceCard key={index} icon={resource.icon} title={resource.title} description={resource.description} delay={index * 100} onClick={resource.onClick} comingSoon={resource.comingSoon} />)}
        </div>
      </div>
      
      <VoiceAIBasicsDialog open={voiceAIBasicsOpen} onOpenChange={setVoiceAIBasicsOpen} />
      
      <WebinarsDialog open={webinarsOpen} onOpenChange={setWebinarsOpen} />
      
      <SuccessStoriesDialog open={successStoriesOpen} onOpenChange={setSuccessStoriesOpen} />
      
      <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl -z-10"></div>
    </section>;
};
export default ResourceSection;