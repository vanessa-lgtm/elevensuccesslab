
import { Code, MicVocal, MessageCircle, Phone, Headset, Globe, BookOpen, Shield } from 'lucide-react';
import React from 'react';
import { KeyActionStep } from '@/components/onboarding/KeyActionItem';
import { ResourceItem } from '@/components/onboarding/ResourceCard';

export const conversationalAIKeyActionSteps: KeyActionStep[] = [
  {
    id: 'api-request',
    title: 'Make Your First API Request',
    description: 'Start integrating ElevenLabs into your conversational AI applications.',
    icon: React.createElement(Code, { className: "h-8 w-8 text-primary" }),
    steps: [
      'Generate your API key in your account settings',
      'Install the API client library for your programming language',
      'Make a simple text-to-speech API call',
      'Set voice and model parameters',
      'Receive and use the generated audio'
    ],
    link: 'https://elevenlabs.io/docs/quickstart'
  },
  {
    id: 'voice-selection',
    title: 'Select the Right AI Voice',
    description: 'Choose the perfect voice for your conversational assistant or call center application.',
    icon: React.createElement(MicVocal, { className: "h-8 w-8 text-primary" }),
    steps: [
      'Visit the Voice Library page',
      'Listen to different voice samples',
      'Consider voice characteristics that match your brand',
      'Test selected voices with sample dialog',
      'Add selected voices to your library'
    ],
    link: 'https://elevenlabs.io/voice-library'
  },
  {
    id: 'conversation-design',
    title: 'Design Your Conversation Flows',
    description: 'Create natural, engaging conversation flows for your AI assistant.',
    icon: React.createElement(MessageCircle, { className: "h-8 w-8 text-primary" }),
    steps: [
      'Map out common user intents and questions',
      'Design conversation branches and responses',
      'Implement voice-specific language and phrasing',
      'Create fallback paths for unexpected inputs',
      'Test conversation flows with real users'
    ],
    link: 'https://elevenlabs.io/docs/agent-overview'
  },
  {
    id: 'call-center-integration',
    title: 'Set Up Call Center Integration',
    description: 'Integrate ElevenLabs voice technology with your existing call center infrastructure.',
    icon: React.createElement(Phone, { className: "h-8 w-8 text-primary" }),
    steps: [
      'Identify integration points in your current system',
      'Configure API webhooks and endpoints',
      'Set up real-time speech synthesis for calls',
      'Implement call transfer and handoff logic',
      'Test with sample customer scenarios'
    ],
    link: 'https://elevenlabs.io/docs/api-reference/overview'
  },
  {
    id: 'multilingual-support',
    title: 'Configure Multilingual Support',
    description: 'Expand your conversational AI to support multiple languages.',
    icon: React.createElement(Globe, { className: "h-8 w-8 text-primary" }),
    steps: [
      'Select multilingual voice models',
      'Configure language detection',
      'Set up language-specific conversation flows',
      'Test pronunciation and inflection',
      'Implement language switching capabilities'
    ],
    link: 'https://elevenlabs.io/docs/language-support'
  },
  {
    id: 'generate-tts',
    title: 'Test Real-Time Voice Responses',
    description: 'Configure and test real-time voice synthesis for conversational applications.',
    icon: React.createElement(Headset, { className: "h-8 w-8 text-primary" }),
    steps: [
      'Set up low-latency audio streaming',
      'Configure voice parameters for real-time use',
      'Implement audio buffering strategies',
      'Test response times under various conditions',
      'Optimize for different network environments'
    ],
    link: 'https://elevenlabs.io/speech-synthesis'
  }
];

export const conversationalAIResources: ResourceItem[] = [
  {
    title: 'Conversational AI Implementation Guide',
    description: 'Comprehensive guide for implementing voice-based conversational AI systems.',
    icon: React.createElement(MessageCircle, { className: "h-6 w-6 text-primary" }),
    link: 'https://elevenlabs.io/docs/guides/conversational-ai'
  },
  {
    title: 'Call Center Automation Best Practices',
    description: 'Learn techniques for effective call center automation with AI voice technology.',
    icon: React.createElement(Phone, { className: "h-6 w-6 text-primary" }),
    link: 'https://elevenlabs.io/docs/call-center-automation'
  },
  {
    title: 'Voice Design for Customer Service',
    description: 'Guidelines for creating natural and helpful voice interactions for customer service.',
    icon: React.createElement(Headset, { className: "h-6 w-6 text-primary" }),
    link: 'https://elevenlabs.io/docs/guides/voice-design'
  },
  {
    title: 'API Integration for Real-Time Voice Applications',
    description: 'Technical documentation for integrating with the ElevenLabs API for real-time use.',
    icon: React.createElement(Code, { className: "h-6 w-6 text-primary" }),
    link: 'https://elevenlabs.io/docs/api-reference/overview'
  },
  {
    title: 'Security & Compliance for Voice Assistants',
    description: 'Information about security features and compliance for handling customer conversations.',
    icon: React.createElement(Shield, { className: "h-6 w-6 text-primary" }),
    link: 'https://elevenlabs.io/docs/guides/security'
  },
  {
    title: 'Customer Story: ABC Financial',
    description: 'Learn how ABC Financial transformed their customer service with AI voice technology.',
    icon: React.createElement(BookOpen, { className: "h-6 w-6 text-primary" }),
    link: 'https://elevenlabs.io/blog/abc-financial'
  }
];
