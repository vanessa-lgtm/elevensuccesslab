
import { BookOpen, GraduationCap, Video, Quote, BarChart, TrendingUp } from 'lucide-react';

// Define a type for the resources
export interface Resource {
  icon: typeof BookOpen;
  title: string;
  description: string;
  dialogType?: string;
  externalLink?: string;
  comingSoon?: boolean;
}

export const resources: Resource[] = [
  {
    icon: BookOpen,
    title: "Voice AI Basics",
    description: "Comprehensive resources on voice AI fundamentals, ideal for beginners.",
    dialogType: "voiceAIBasics"
  }, 
  {
    icon: GraduationCap,
    title: "ElevenLabs Product Documentation",
    description: "Comprehensive documentation to help you understand and implement our voice AI technology.",
    dialogType: "productDocumentation" // Changed from externalLink to dialogType
  }, 
  {
    icon: Video,
    title: "On-Demand Webinars",
    description: "Access our library of webinars to enhance your knowledge of our product or get inspired!",
    dialogType: "webinars"
  }, 
  {
    icon: Quote,
    title: "Success Stories",
    description: "Discover how organizations are achieving success with our voice AI solutions.",
    dialogType: "successStories"
  }, 
  {
    icon: BarChart,
    title: "Measurement Frameworks",
    description: "Tools and templates to measure the impact of your voice AI initiatives.",
    comingSoon: true
  }, 
  {
    icon: TrendingUp,
    title: "Market Trends",
    description: "Updates and trends about the Voice AI space.",
    comingSoon: true
  }
];
