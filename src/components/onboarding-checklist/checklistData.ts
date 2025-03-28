
import { ChecklistItem } from './types';

export const getSectionTitle = (section: string): string => {
  const sectionTitles: Record<string, string> = {
    'admin': 'Administration',
    'general': 'Product General Information',
    'media_usecase': 'Media & Entertainment Use Cases',
    'conversational_usecase': 'Conversational AI Use Cases'
  };
  
  return sectionTitles[section] || section;
};

export const getDefaultChecklistItems = (industry: string = 'media'): ChecklistItem[] => {
  // Get the common administrative items
  const adminItems = getCommonAdminItems();
  
  // Get the common general information items
  const generalItems = getCommonGeneralItems();
  
  // Return the appropriate checklist items based on industry
  if (industry === 'conversational_ai') {
    return [
      ...adminItems,
      ...generalItems,
      ...getConversationalAIChecklistItems()
    ];
  }
  
  // Default to media industry checklist items
  return [
    ...adminItems,
    ...generalItems,
    ...getMediaChecklistItems()
  ];
};

// Common administration items
const getCommonAdminItems = (): ChecklistItem[] => {
  return [
    {
      id: 'basics',
      title: 'The Basics',
      description: 'Set up account and billing.',
      timeEstimate: '10 min',
      completed: false,
      section: 'admin',
      link: 'https://elevenlabs.io/docs/product-guides/administration/workspaces/overview'
    },
    {
      id: 'collaboration',
      title: 'Collaboration',
      description: 'Invite workspace users.',
      timeEstimate: '15 min',
      completed: false,
      section: 'admin',
      link: 'https://elevenlabs.io/docs/product-guides/administration/workspaces/user-groups'
    },
    {
      id: 'usage-billing',
      title: 'Manage Usage & Billing',
      description: 'Activate usage-based billing to avoid hitting your quota.',
      timeEstimate: '10 min',
      completed: false,
      section: 'admin',
      link: 'https://elevenlabs.io/docs/product-guides/administration/billing'
    },
    {
      id: 'service-status',
      title: 'Monitor Service Status',
      description: 'Subscribe for real-time updates.',
      timeEstimate: '5 min',
      completed: false,
      section: 'admin',
      link: 'https://status.elevenlabs.io/'
    },
    {
      id: 'api-keys',
      title: 'API Keys Generation / Management',
      description: 'Generate and manage your API keys securely.',
      timeEstimate: '10 min',
      completed: false,
      section: 'admin',
      link: 'https://elevenlabs.io/docs/api-reference/authentication'
    },
    {
      id: 'labsy-call',
      title: 'Optional: Give "Labsy" a call for personalized assistance',
      description: 'Contact our support team for personalized help with your implementation.',
      timeEstimate: '20 min',
      completed: false,
      section: 'admin'
    },
  ];
};

// Common general information items
const getCommonGeneralItems = (): ChecklistItem[] => {
  return [
    {
      id: 'learn-models',
      title: 'Learn About Our Models',
      description: 'Understand the different voice models available and their specific use cases.',
      timeEstimate: '20 min',
      completed: false,
      section: 'general',
      link: 'https://elevenlabs.io/docs/models'
    },
    {
      id: 'api-best-practices',
      title: 'Learn about Enterprise API Best Practices',
      description: 'Understand best practices for enterprise API integration and scaling.',
      timeEstimate: '25 min',
      completed: false,
      section: 'general',
      link: 'https://elevenlabs.io/docs/api-reference/introduction'
    },
  ];
};

// Media industry checklist items
const getMediaChecklistItems = (): ChecklistItem[] => {
  return [
    {
      id: 'review-api-scaling',
      title: 'Review API scaling best practices',
      description: 'Learn how to optimize API usage for high-volume media production environments.',
      timeEstimate: '25 min',
      completed: false,
      section: 'media_usecase',
      link: 'https://elevenlabs.io/docs/api-reference/overview'
    },
    {
      id: 'select-voices',
      title: 'Select the right voices for your content',
      description: 'Choose from pre-designed voices, clone existing ones, or create custom voices to match your brand, characters, or audience needs.',
      timeEstimate: '30 min',
      completed: false,
      section: 'media_usecase',
      link: 'https://elevenlabs.io/voices'
    },
    {
      id: 'create-voice-clones',
      title: 'Create custom voice clones',
      description: 'Develop personalized voice clones using Instant Voice Cloning (IVC) for quick results or Professional Voice Cloning (PVC) for high-accuracy and customization.',
      timeEstimate: '45 min',
      completed: false,
      section: 'media_usecase',
      link: 'https://elevenlabs.io/docs/product-guides/voices/voice-cloning'
    },
    {
      id: 'learn-cloning',
      title: 'Learn instant voice cloning techniques',
      description: 'Master the art of creating quick voice clones for rapid content production and iteration.',
      timeEstimate: '25 min',
      completed: false,
      section: 'media_usecase',
      link: 'https://elevenlabs.io/docs/product-guides/voices/voice-cloning/instant-voice-cloning'
    },
    {
      id: 'setup-tts',
      title: 'Set up high-quality text-to-speech workflows',
      description: 'Configure your text-to-speech settings to deliver natural, high-quality speech for your media content.',
      timeEstimate: '30 min',
      completed: false,
      section: 'media_usecase',
      link: 'https://elevenlabs.io/docs/product-guides/playground/text-to-speech'
    },
    {
      id: 'voice-transformation',
      title: 'Explore voice transformation capabilities',
      description: 'Learn how to transform any voice with Voice Changer for creative audio productions.',
      timeEstimate: '20 min',
      completed: false,
      section: 'media_usecase',
      link: 'https://elevenlabs.io/docs/product-guides/playground/voice-changer'
    },
    {
      id: 'sound-effects',
      title: 'Incorporate AI-generated sound effects',
      description: 'Enhance your media content with AI-generated sound effects for immersive audio experiences.',
      timeEstimate: '25 min',
      completed: false,
      section: 'media_usecase',
      link: 'https://elevenlabs.io/docs/product-guides/playground/sound-effects'
    },
  ];
};

// Conversational AI checklist items
const getConversationalAIChecklistItems = (): ChecklistItem[] => {
  return [
    {
      id: 'review-api-scaling',
      title: 'Review API scaling best practices',
      description: 'Learn how to optimize API usage for conversational AI applications.',
      timeEstimate: '25 min',
      completed: false,
      section: 'conversational_usecase',
      link: 'https://elevenlabs.io/docs/api-reference/overview'
    },
    {
      id: 'schedule-concurrency',
      title: 'Schedule custom concurrency limits discussion',
      description: 'Work with our team to scale real-time voice applications in call centers and customer service.',
      timeEstimate: '30 min',
      completed: false,
      section: 'conversational_usecase'
    },
    
    {
      id: 'select-assistant-voices',
      title: 'Select the right voices for your assistant',
      description: 'Choose voice characteristics that align with your brand identity and use case.',
      timeEstimate: '30 min',
      completed: false,
      section: 'conversational_usecase',
      link: 'https://elevenlabs.io/voices'
    },
    {
      id: 'setup-streaming',
      title: 'Set up voice streaming',
      description: 'Configure your application for high-quality, low-latency voice streaming necessary for conversational systems.',
      timeEstimate: '45 min',
      completed: false,
      section: 'conversational_usecase',
      link: 'https://elevenlabs.io/docs/api-reference/streaming'
    },
    {
      id: 'implement-call-flow',
      title: 'Implement call flow management',
      description: 'Design and implement effective call flows for your voice assistant or call center application.',
      timeEstimate: '60 min',
      completed: false,
      section: 'conversational_usecase',
      link: 'https://elevenlabs.io/docs/guides/conversational-ai'
    },
    {
      id: 'multilingual-support',
      title: 'Configure multilingual support',
      description: 'Set up your conversational AI to support multiple languages for global customer service.',
      timeEstimate: '40 min',
      completed: false,
      section: 'conversational_usecase',
      link: 'https://elevenlabs.io/docs/language-support'
    },
    {
      id: 'call-center-integration',
      title: 'Integrate with existing call center systems',
      description: 'Connect ElevenLabs voice technology with your current call center infrastructure.',
      timeEstimate: '90 min',
      completed: false,
      section: 'conversational_usecase',
      link: 'https://elevenlabs.io/docs/api-reference/overview'
    },
    {
      id: 'fallback-scenarios',
      title: 'Implement fallback scenarios',
      description: 'Design effective fallback mechanisms for when the AI needs to transfer to a human agent.',
      timeEstimate: '60 min',
      completed: false,
      section: 'conversational_usecase',
      link: 'https://elevenlabs.io/docs/guides/conversational-ai'
    },
  ];
};
