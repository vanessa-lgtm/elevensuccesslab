
import { Code, MicVocal, MessageCircle, Phone, Globe, Headset, Film, BookOpen, Shield, Music, Download } from 'lucide-react';
import { KeyActionStep } from './KeyActionItem';
import { Resource } from './ResourceCard';

// Create icon references instead of JSX elements
// We'll render these components in the respective components that use the data
export const mediaKeyActionSteps: KeyActionStep[] = [
  {
    id: 'api-request',
    title: 'Make Your First API Request',
    description: 'Start integrating ElevenLabs into your applications and workflows.',
    icon: Code,
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
    id: 'add-voice',
    title: 'Add a Voice to Your Library',
    description: 'Choose from our diverse catalog of pre-made voices for your productions.',
    icon: Download,
    steps: [
      'Visit the Voice Library page',
      'Browse the available voices by category, language, or style',
      'Preview voices by clicking the play button next to each one',
      'Click "Add to My Voices" for any voice you want to use',
      'Find your selected voices in the "My Voices" section'
    ],
    link: 'https://elevenlabs.io/voice-library'
  },
  {
    id: 'create-clone',
    title: 'Create Your First Voice Clone',
    description: 'Clone a voice for consistent branding or character development.',
    icon: Globe,
    steps: [
      'Go to the Voice Cloning page',
      'Click "Add Voice" to start the cloning process',
      'Choose "Instant Voice Cloning" for quick results',
      'Upload 1-3 minutes of clean audio samples',
      'Name your voice and add a description',
      'Create your voice clone and test it'
    ],
    link: 'https://elevenlabs.io/voice-cloning'
  },
  {
    id: 'sound-effects',
    title: 'Generate AI Sound Effects',
    description: 'Create custom sound effects to enhance your media productions.',
    icon: Music,
    steps: [
      'Navigate to the Sound Effects page',
      'Describe the sound effect you want to generate',
      'Adjust duration and other parameters as needed',
      'Click "Generate" to create your sound effect',
      'Preview and download the generated audio file'
    ],
    link: 'https://elevenlabs.io/sound-effects'
  },
  {
    id: 'generate-tts',
    title: 'Generate Your First TTS Audio',
    description: 'Create your first AI-generated voice clip in just a few minutes.',
    icon: MicVocal,
    steps: [
      'Log in to your ElevenLabs account',
      'Navigate to the Speech Synthesis page',
      'Select a pre-made voice from the dropdown',
      'Type or paste your script in the text area',
      'Click "Generate" to create your audio',
      'Listen to the result and download if satisfied'
    ],
    link: 'https://elevenlabs.io/speech-synthesis'
  }
];

export const conversationalAIKeyActionSteps: KeyActionStep[] = [
  {
    id: 'api-request',
    title: 'Make Your First API Request',
    description: 'Start integrating ElevenLabs into your conversational AI applications.',
    icon: Code,
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
    icon: MicVocal,
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
    icon: MessageCircle,
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
    icon: Phone,
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
    icon: Globe,
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
    icon: Headset,
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

export const mediaResources: Resource[] = [
  {
    title: 'Product Guide',
    description: 'Comprehensive guide for implementing ElevenLabs in media production workflows.',
    icon: Film,
    link: 'https://elevenlabs.io/docs/guides/media'
  },
  {
    title: 'Voice Cloning Best Practices',
    description: 'Learn techniques for getting the best results with voice cloning technology.',
    icon: MicVocal,
    link: 'https://elevenlabs.io/docs/product-guides/voices/voice-cloning'
  },
  {
    title: 'API Integration for Media Applications',
    description: 'Technical documentation for integrating with the ElevenLabs API.',
    icon: BookOpen,
    link: 'https://elevenlabs.io/docs/api-reference/overview'
  },
  {
    title: 'Security & Compliance Guide',
    description: 'Information about our security features and compliance certifications.',
    icon: Shield,
    link: 'https://elevenlabs.io/docs/guides/security'
  },
  {
    title: 'Customer Story: Bertelsmann',
    description: 'Learn how Bertelsmann is using ElevenLabs to transform their media business.',
    icon: BookOpen,
    link: 'https://elevenlabs.io/blog/bertelsmann'
  },
  {
    title: 'Customer Story: Star Sports',
    description: 'See how Star Sports leverages AI voice technology for sports broadcasting.',
    icon: Film,
    link: 'https://elevenlabs.io/blog/starsports'
  }
];

export const conversationalAIResources: Resource[] = [
  {
    title: 'Conversational AI Implementation Guide',
    description: 'Comprehensive guide for implementing voice-based conversational AI systems.',
    icon: MessageCircle,
    link: 'https://elevenlabs.io/docs/guides/conversational-ai'
  },
  {
    title: 'Call Center Automation Best Practices',
    description: 'Learn techniques for effective call center automation with AI voice technology.',
    icon: Phone,
    link: 'https://elevenlabs.io/docs/call-center-automation'
  },
  {
    title: 'Voice Design for Customer Service',
    description: 'Guidelines for creating natural and helpful voice interactions for customer service.',
    icon: Headset,
    link: 'https://elevenlabs.io/docs/guides/voice-design'
  },
  {
    title: 'API Integration for Real-Time Voice Applications',
    description: 'Technical documentation for integrating with the ElevenLabs API for real-time use.',
    icon: Code,
    link: 'https://elevenlabs.io/docs/api-reference/overview'
  },
  {
    title: 'Security & Compliance for Voice Assistants',
    description: 'Information about security features and compliance for handling customer conversations.',
    icon: Shield,
    link: 'https://elevenlabs.io/docs/guides/security'
  },
  {
    title: 'Customer Story: ABC Financial',
    description: 'Learn how ABC Financial transformed their customer service with AI voice technology.',
    icon: BookOpen,
    link: 'https://elevenlabs.io/blog/abc-financial'
  }
];
