
import { BookOpen, GraduationCap, Video, Quote, BarChart, TrendingUp } from 'lucide-react';

export const resources = [
  {
    icon: <BookOpen size={20} />,
    title: "Voice AI Basics",
    description: "Comprehensive resources on voice AI fundamentals, ideal for beginners.",
    dialogType: "voiceAIBasics"
  }, 
  {
    icon: <GraduationCap size={20} />,
    title: "ElevenLabs Product Documentation",
    description: "Comprehensive documentation to help you understand and implement our voice AI technology.",
    externalLink: "https://elevenlabs.io/docs/overview"
  }, 
  {
    icon: <Video size={20} />,
    title: "On-Demand Webinars",
    description: "Access our library of webinars to enhance your knowledge of our product or get inspired!",
    dialogType: "webinars"
  }, 
  {
    icon: <Quote size={20} />,
    title: "Success Stories",
    description: "Discover how organizations are achieving success with our voice AI solutions.",
    dialogType: "successStories"
  }, 
  {
    icon: <BarChart size={20} />,
    title: "Measurement Frameworks",
    description: "Tools and templates to measure the impact of your voice AI initiatives.",
    comingSoon: true
  }, 
  {
    icon: <TrendingUp size={20} />,
    title: "Market Trends",
    description: "Updates and trends about the Voice AI space.",
    comingSoon: true
  }
];
