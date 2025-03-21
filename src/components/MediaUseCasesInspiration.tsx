
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play, Film, Mic, Globe, Headphones, Radio, Tv, BookOpen, Languages, Video, PlayCircle, Sparkles, 
  VideoIcon, Gamepad2, BookText, HeadphonesIcon, MonitorPlay, Bot, GraduationCap, Webhook, 
  HeadsetIcon, PhoneCall, Cpu, BarChart3, Package2 } from 'lucide-react';

const MediaUseCasesInspiration = () => {
  const categories = [
    {
      id: 'localization',
      name: 'Localization and Translation',
      icon: <Languages className="h-5 w-5" />,
      useCases: [
        'Automated Translation Services: Voice AI can help in real-time translation and transcription for audio and video content.',
        'Voice-activated Translation Tools: Enabling customers to interact with multilingual content through voice commands.',
        'Speech-to-Text for Subtitles: Automatically generating subtitles for translated content.',
        'Voice-based Localization: Customizing content for different languages through voice AI to improve cultural relevance.'
      ]
    },
    {
      id: 'broadcasting',
      name: 'Broadcasting and Media Production',
      icon: <Radio className="h-5 w-5" />,
      useCases: [
        'Automated Voiceovers and Narration: AI-generated voices for narrating content or filling in for voice actors.',
        'Voice-activated Production Systems: Enabling broadcasters to control broadcast systems via voice commands.',
        'Interactive Broadcasts: Creating voice-based interactive experiences for live broadcasting.',
        'Content Personalization: Delivering personalized voice content based on audience preferences.'
      ]
    },
    {
      id: 'streaming',
      name: 'Streaming Services and OTT Platforms',
      icon: <PlayCircle className="h-5 w-5" />,
      useCases: [
        'Voice-based Content Search: Enabling users to search and navigate content via voice commands.',
        'Personalized Voice Recommendations: Offering voice-driven personalized content suggestions based on user behavior.',
        'Voice-activated Playback Control: Allowing users to control video playback, pause, rewind, or skip using voice commands.',
        'Voice-enabled Accessibility Features: Enhancing the viewing experience for people with disabilities using voice controls for subtitles, audio description, etc.'
      ]
    },
    {
      id: 'film',
      name: 'Film and Television Production',
      icon: <Film className="h-5 w-5" />,
      useCases: [
        'Voice-to-Text for Scripts: Transcribing and creating text from voice recordings to assist scriptwriters and editors.',
        'AI-based Dubbing: Using AI to produce realistic voiceovers in various languages.',
        'Voice Assistant for Studio Management: Helping production teams manage schedules, communicate, and track progress via voice commands.',
        'Automated Audio Mixing: AI tools that adjust sound quality based on voice inputs in post-production.'
      ]
    },
    {
      id: 'marketing',
      name: 'Marketing and Advertising Services',
      icon: <Sparkles className="h-5 w-5" />,
      useCases: [
        'Voice-enabled Consumer Insights: Analyzing customer feedback through voice AI to identify trends in sentiment and needs.',
        'Voice-based Campaign Interactions: Creating voice-responsive ad campaigns and surveys for customer engagement.',
        'Voice Search Optimization: Ensuring brand and content are optimized for voice search on smart devices.',
        'Personalized Voice Adverts: Tailoring advertisements using AI to create targeted and dynamic voice ads based on demographics and behavior.'
      ]
    },
    {
      id: 'gaming',
      name: 'Video Game Development',
      icon: <Gamepad2 className="h-5 w-5" />,
      useCases: [
        'In-Game Voice Recognition: Allowing players to use voice commands to control in-game actions, character movements, or interactions.',
        'AI-generated NPC Voiceovers: Automatically generating voices for non-playable characters (NPCs) to enrich the game world.',
        'Voice-driven Storytelling: Creating dynamic storylines where players interact with the game\'s plot via voice.',
        'Voice-controlled Gaming Interfaces: Using voice as the primary input method for navigating the game\'s interface.'
      ]
    },
    {
      id: 'publishing',
      name: 'Digital Media and Publishing',
      icon: <BookText className="h-5 w-5" />,
      useCases: [
        'Voice-based Content Discovery: Users can search and listen to articles, blogs, or publications via voice command.',
        'AI Voice for Narration and Audiobooks: Converting written content into audio formats using voice AI for articles, books, etc.',
        'Interactive Voice Content: Allowing audiences to engage with digital publications through voice interactions.',
        'Voice-assisted Editing and Proofreading: Editing and proofreading content with voice commands to streamline content creation.'
      ]
    },
    {
      id: 'audio',
      name: 'Audio Content Production and Publishing',
      icon: <HeadphonesIcon className="h-5 w-5" />,
      useCases: [
        'Automated Voiceover for Content: AI-generated voiceovers for podcasts, radio programs, and other audio content.',
        'Voice-driven Audio Editing: Editing audio content using voice commands to enhance the efficiency of producers and editors.',
        'Speech-to-Text for Transcriptions: Converting spoken audio into text for show notes, transcripts, and subtitles.',
        'Voice-based Content Personalization: Delivering tailored audio content based on user preferences or behavioral data.'
      ]
    },
    {
      id: 'software',
      name: 'Media and Content Creation Software',
      icon: <MonitorPlay className="h-5 w-5" />,
      useCases: [
        'Voice-driven Content Creation: Using voice commands to generate written or visual content, streamlining creative workflows.',
        'Voice-based Content Management: Managing and organizing media content via voice commands (e.g., searching, tagging, categorizing).',
        'AI-powered Script Writing: Generating scripts for media content with voice inputs guiding the content.',
        'Real-time Collaboration Tools: Enabling voice interactions during live content creation sessions for remote teams.'
      ]
    },
    {
      id: 'consumer',
      name: 'Consumer AI and Virtual Assistants',
      icon: <Bot className="h-5 w-5" />,
      useCases: [
        'Voice-based Task Automation: Providing voice-controlled automation for home devices, calendars, and more.',
        'Personalized Recommendations: Using voice AI to make product or service recommendations based on user preferences.',
        'Interactive Conversations: Allowing virtual assistants to engage in more natural, conversational exchanges with users.',
        'Voice-activated Smart Devices: Integrating voice AI with a variety of connected smart home devices.'
      ]
    },
    {
      id: 'edtech',
      name: 'EdTech (Education Technology)',
      icon: <GraduationCap className="h-5 w-5" />,
      useCases: [
        'Voice-activated Learning Platforms: Enabling students to use voice commands to interact with learning materials or platforms.',
        'Personalized Voice Tutoring: Offering individualized learning experiences using voice assistants tailored to the student\'s needs.',
        'Speech-to-Text for Note-Taking: Converting lecture audio into text for notes and transcription.',
        'Interactive Voice Lessons: Enabling voice-led courses and interactive learning experiences through voice interfaces.'
      ]
    },
    {
      id: 'saas',
      name: 'Software Development and SaaS Providers',
      icon: <Webhook className="h-5 w-5" />,
      useCases: [
        'Voice-activated Development Tools: Enabling developers to control and interact with software environments and IDEs via voice.',
        'Automated Customer Support with Voice AI: Creating voice-driven support bots for troubleshooting and customer service.',
        'Voice-enabled Collaboration: Allowing teams to interact, create, and manage projects through voice commands within software tools.',
        'Voice-based Authentication: Implementing voice recognition as a secure authentication method for SaaS platforms.'
      ]
    },
    {
      id: 'support',
      name: 'Customer Support and Call Center Operations',
      icon: <HeadsetIcon className="h-5 w-5" />,
      useCases: [
        'AI-powered Voice Assistants: Automating customer support interactions with intelligent voice bots that understand and respond to queries.',
        'Speech-to-Text for Call Transcripts: Converting calls into text for easy tracking and analysis.',
        'Voice-based Knowledge Base: Using voice to search for solutions in customer service databases.',
        'Call Routing with Voice AI: Automating call routing based on voice commands or sentiment analysis.'
      ]
    },
    {
      id: 'callcenter',
      name: 'Call Center Technology and Solutions',
      icon: <PhoneCall className="h-5 w-5" />,
      useCases: [
        'Voice-driven Analytics: Using AI to analyze voice calls for sentiment, keywords, and trends to optimize customer service.',
        'Voicebot Integration: Deploying voicebots to handle high volumes of customer interactions automatically.',
        'Speech Analytics for Quality Assurance: Using AI to evaluate and ensure the quality of customer service calls.',
        'Real-time Speech Translation: Enabling multilingual support in call centers by translating voice interactions in real-time.'
      ]
    },
    {
      id: 'hardware',
      name: 'Hardware and Electronics Manufacturing',
      icon: <Cpu className="h-5 w-5" />,
      useCases: [
        'Voice-activated Product Controls: Enabling hands-free control of devices using voice commands.',
        'Voice-enabled Troubleshooting: Assisting customers with troubleshooting and product setup via voice commands.',
        'Voice-based Quality Checks: Using voice AI to record and analyze product quality during manufacturing processes.',
        'Automated Voice Feedback: Gathering customer feedback on hardware products through voice surveys and interactions.'
      ]
    },
    {
      id: 'consulting',
      name: 'Management Consulting and Advisory Services',
      icon: <BarChart3 className="h-5 w-5" />,
      useCases: [
        'Voice-driven Data Analysis: Using voice commands to retrieve insights and data reports for analysis.',
        'Voice-based Client Interaction: Automating initial client interactions and consultations via voice AI.',
        'Voice-enabled Research Tools: Helping consultants gather and analyze information using voice-activated tools.',
        'Real-time Strategy Updates: Using voice assistants to provide instant updates and strategies to clients based on real-time data.'
      ]
    },
    {
      id: 'other',
      name: 'Miscellaneous / Other Industries',
      icon: <Package2 className="h-5 w-5" />,
      useCases: [
        'Custom Voice Solutions: Tailored voice AI solutions for niche or specific business needs.',
        'Voice-based Process Automation: Enabling various industries to automate tasks, from inventory management to communication.',
        'Voice-enabled Data Collection: Using voice technology for easy and efficient data collection in different sectors.',
        'Voice-assisted Workforce Management: Improving workforce productivity and engagement through voice-activated systems.'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Voice AI Use Cases Across Industries</h2>
      <p className="text-muted-foreground">
        Discover how organizations across industries are leveraging voice AI technology to transform their operations and create exceptional experiences.
      </p>

      <Tabs defaultValue="localization" className="w-full">
        <TabsList className="flex flex-wrap h-auto mb-6 bg-transparent">
          {categories.map((category) => (
            <TabsTrigger 
              key={category.id} 
              value={category.id}
              className="m-1 flex items-center gap-2"
            >
              {category.icon}
              <span className="hidden sm:inline">{category.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        
        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="border-none p-0">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    {category.icon}
                  </div>
                  <CardTitle>{category.name}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Explore how voice AI is transforming {category.name.toLowerCase()} with innovative applications.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.useCases.map((useCase, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">✓</div>
                      <span className="text-sm">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open(`https://elevenlabs.io/use-case/${category.id}`, '_blank')}
                >
                  <Play className="mr-2 h-4 w-4" />
                  Explore {category.name} Use Cases
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-8 flex justify-center">
        <Button 
          size="lg"
          onClick={() => window.open('https://elevenlabs.io/blog?category=customer-stories', '_blank')}
        >
          View All Voice AI Case Studies
        </Button>
      </div>
    </div>
  );
};

export default MediaUseCasesInspiration;
