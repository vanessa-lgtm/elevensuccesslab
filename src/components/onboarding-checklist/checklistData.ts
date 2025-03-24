
import { ChecklistItem } from './types';

export const getSectionTitle = (section: string): string => {
  const sectionTitles: Record<string, string> = {
    'admin': 'Administration',
    'general': 'Product General Information',
    'usecase': 'Use Case Specific Steps',
    'media_usecase': 'Media & Entertainment Use Cases',
    'conversational_usecase': 'Conversational AI Use Cases',
    'usecase_specific': 'Use Case Specific Steps'
  };
  
  return sectionTitles[section] || section;
};

export const getDefaultChecklistItems = (industry: string = 'media'): ChecklistItem[] => {
  // Get the common use case specific steps
  const useCaseSpecificSteps = getUseCaseSpecificSteps();
  
  // Return the appropriate checklist items based on industry
  if (industry === 'conversational_ai') {
    return [...getConversationalAIChecklistItems(), ...useCaseSpecificSteps];
  }
  
  // Default to media industry checklist items
  return [...getMediaChecklistItems(), ...useCaseSpecificSteps];
};

const getUseCaseSpecificSteps = (): ChecklistItem[] => {
  return [
    {
      id: 'voice-selection',
      title: 'Selecting the Right Voice',
      description: 'Choose from pre-designed voices, clone existing ones, or create custom voices to match your brand, character, or audience needs.',
      timeEstimate: '30 min',
      completed: false,
      section: 'usecase_specific',
      link: 'https://elevenlabs.io/voices'
    },
    {
      id: 'voice-cloning-overview',
      title: 'Creating Custom Voice Clones',
      description: 'Develop personalized voice clones using Instant Voice Cloning (IVC) for quick results or Professional Voice Cloning (PVC) for high-accuracy and customization.',
      timeEstimate: '45 min',
      completed: false,
      section: 'usecase_specific',
      link: 'https://elevenlabs.io/docs/product-guides/voices/voice-cloning'
    },
    {
      id: 'instant-voice-cloning',
      title: 'Learn Instant Voice Cloning Techniques',
      description: 'Master the art of creating quick voice clones for rapid content production and iteration.',
      timeEstimate: '25 min',
      completed: false,
      section: 'usecase_specific',
      link: 'https://elevenlabs.io/docs/product-guides/voices/voice-cloning/instant-voice-cloning'
    },
    {
      id: 'tts-workflow',
      title: 'Delivering Natural, High-Quality Speech',
      description: 'Configure your text-to-speech settings to deliver natural, high-quality speech for your content.',
      timeEstimate: '30 min',
      completed: false,
      section: 'usecase_specific',
      link: 'https://elevenlabs.io/docs/product-guides/playground/text-to-speech'
    },
    {
      id: 'voice-transformation',
      title: 'Transform Any Voice with Voice Changer',
      description: 'Learn how to transform any voice with Voice Changer for creative audio productions.',
      timeEstimate: '20 min',
      completed: false,
      section: 'usecase_specific',
      link: 'https://elevenlabs.io/docs/product-guides/playground/voice-changer'
    },
    {
      id: 'sound-effects',
      title: 'Enhancing Content with AI-Generated Sound Effects',
      description: 'Enhance your content with AI-generated sound effects for immersive audio experiences.',
      timeEstimate: '25 min',
      completed: false,
      section: 'usecase_specific',
      link: 'https://elevenlabs.io/docs/product-guides/playground/sound-effects'
    },
  ];
};

const getMediaChecklistItems = (): ChecklistItem[] => {
  return [
    {
      id: '1',
      title: 'Set up your account',
      description: 'Configure your workspace settings and user profile information.',
      timeEstimate: '10 min',
      completed: false,
      section: 'admin',
      link: 'https://elevenlabs.io/docs/product-guides/administration/workspaces/overview'
    },
    {
      id: '2',
      title: 'Invite workspace users',
      description: 'Set up user groups and permission levels for your team members.',
      timeEstimate: '15 min',
      completed: false,
      section: 'admin',
      link: 'https://elevenlabs.io/docs/product-guides/administration/workspaces/user-groups'
    },
    {
      id: '3',
      title: 'Share resources with your team',
      description: 'Invite team members to your Enterprise Workspace and set up resource sharing.',
      timeEstimate: '10 min',
      completed: false,
      section: 'admin',
      link: 'https://elevenlabs.io/docs/product-guides/administration/workspaces/sharing-resources'
    },
    {
      id: '4',
      title: 'Manage usage & billing',
      description: 'Activate usage-based billing to avoid hitting your quota and set up usage alerts.',
      timeEstimate: '10 min',
      completed: false,
      section: 'admin',
      link: 'https://elevenlabs.io/docs/product-guides/administration/billing'
    },
    {
      id: '5',
      title: 'Stay updated with product improvements',
      description: 'Configure your notification preferences to stay updated with the latest product improvements.',
      timeEstimate: '5 min',
      completed: false,
      section: 'admin'
    },
    {
      id: '6',
      title: 'Monitor service status',
      description: 'Subscribe to the ElevenLabs status page for real-time service updates.',
      timeEstimate: '5 min',
      completed: false,
      section: 'admin',
      link: 'https://status.elevenlabs.io/'
    },
    
    {
      id: '7',
      title: 'Learn about AI voice models',
      description: 'Understand the different voice models available and their specific use cases for media productions.',
      timeEstimate: '20 min',
      completed: false,
      section: 'general',
      link: 'https://elevenlabs.io/docs/models'
    },
    {
      id: '8',
      title: 'Review API scaling best practices',
      description: 'Learn how to optimize API usage for high-volume media production environments.',
      timeEstimate: '25 min',
      completed: false,
      section: 'general',
      link: 'https://elevenlabs.io/docs/api-reference/overview'
    },
    {
      id: '9',
      title: 'Schedule custom concurrency limits discussion',
      description: 'Work with our team to scale high-throughput applications for your media content generation needs.',
      timeEstimate: '30 min',
      completed: false,
      section: 'general'
    },
    
    {
      id: '10',
      title: 'Select the right voices for your content',
      description: 'Choose from pre-designed voices, clone existing ones, or create custom voices to match your brand, characters, or audience needs.',
      timeEstimate: '30 min',
      completed: false,
      section: 'media_usecase',
      link: 'https://elevenlabs.io/voices'
    },
    {
      id: '11',
      title: 'Create custom voice clones',
      description: 'Develop personalized voice clones using Instant Voice Cloning (IVC) for quick results or Professional Voice Cloning (PVC) for high-accuracy and customization.',
      timeEstimate: '45 min',
      completed: false,
      section: 'media_usecase',
      link: 'https://elevenlabs.io/docs/product-guides/voices/voice-cloning'
    },
    {
      id: '12',
      title: 'Learn instant voice cloning techniques',
      description: 'Master the art of creating quick voice clones for rapid content production and iteration.',
      timeEstimate: '25 min',
      completed: false,
      section: 'media_usecase',
      link: 'https://elevenlabs.io/docs/product-guides/voices/voice-cloning/instant-voice-cloning'
    },
    {
      id: '13',
      title: 'Set up high-quality text-to-speech workflows',
      description: 'Configure your text-to-speech settings to deliver natural, high-quality speech for your media content.',
      timeEstimate: '30 min',
      completed: false,
      section: 'media_usecase',
      link: 'https://elevenlabs.io/docs/product-guides/playground/text-to-speech'
    },
    {
      id: '14',
      title: 'Explore voice transformation capabilities',
      description: 'Learn how to transform any voice with Voice Changer for creative audio productions.',
      timeEstimate: '20 min',
      completed: false,
      section: 'media_usecase',
      link: 'https://elevenlabs.io/docs/product-guides/playground/voice-changer'
    },
    {
      id: '15',
      title: 'Incorporate AI-generated sound effects',
      description: 'Enhance your media content with AI-generated sound effects for immersive audio experiences.',
      timeEstimate: '25 min',
      completed: false,
      section: 'media_usecase',
      link: 'https://elevenlabs.io/docs/product-guides/playground/sound-effects'
    },
  ];
};

const getConversationalAIChecklistItems = (): ChecklistItem[] => {
  return [
    {
      id: '1',
      title: 'Set up your account',
      description: 'Configure your workspace settings and user profile information.',
      timeEstimate: '10 min',
      completed: false,
      section: 'admin',
      link: 'https://elevenlabs.io/docs/product-guides/administration/workspaces/overview'
    },
    {
      id: '2',
      title: 'Invite workspace users',
      description: 'Set up user groups and permission levels for your team members.',
      timeEstimate: '15 min',
      completed: false,
      section: 'admin',
      link: 'https://elevenlabs.io/docs/product-guides/administration/workspaces/user-groups'
    },
    {
      id: '3',
      title: 'Share resources with your team',
      description: 'Invite team members to your Enterprise Workspace and set up resource sharing.',
      timeEstimate: '10 min',
      completed: false,
      section: 'admin',
      link: 'https://elevenlabs.io/docs/product-guides/administration/workspaces/sharing-resources'
    },
    {
      id: '4',
      title: 'Manage usage & billing',
      description: 'Activate usage-based billing to avoid hitting your quota and set up usage alerts.',
      timeEstimate: '10 min',
      completed: false,
      section: 'admin',
      link: 'https://elevenlabs.io/docs/product-guides/administration/billing'
    },
    {
      id: '5',
      title: 'Stay updated with product improvements',
      description: 'Configure your notification preferences to stay updated with the latest product improvements.',
      timeEstimate: '5 min',
      completed: false,
      section: 'admin'
    },
    {
      id: '6',
      title: 'Monitor service status',
      description: 'Subscribe to the ElevenLabs status page for real-time service updates.',
      timeEstimate: '5 min',
      completed: false,
      section: 'admin',
      link: 'https://status.elevenlabs.io/'
    },
    
    {
      id: '7',
      title: 'Learn about AI voice models',
      description: 'Understand different voice models for conversational AI systems.',
      timeEstimate: '20 min',
      completed: false,
      section: 'general',
      link: 'https://elevenlabs.io/docs/models'
    },
    {
      id: '8',
      title: 'Review API scaling best practices',
      description: 'Learn how to optimize API usage for conversational AI applications.',
      timeEstimate: '25 min',
      completed: false,
      section: 'general',
      link: 'https://elevenlabs.io/docs/api-reference/overview'
    },
    {
      id: '9',
      title: 'Schedule custom concurrency limits discussion',
      description: 'Work with our team to scale real-time voice applications in call centers and customer service.',
      timeEstimate: '30 min',
      completed: false,
      section: 'general'
    },
    
    {
      id: '10',
      title: 'Select the right voices for your assistant',
      description: 'Choose voice characteristics that align with your brand identity and use case.',
      timeEstimate: '30 min',
      completed: false,
      section: 'conversational_usecase',
      link: 'https://elevenlabs.io/voices'
    },
    {
      id: '11',
      title: 'Set up voice streaming',
      description: 'Configure your application for high-quality, low-latency voice streaming necessary for conversational systems.',
      timeEstimate: '45 min',
      completed: false,
      section: 'conversational_usecase',
      link: 'https://elevenlabs.io/docs/api-reference/streaming'
    },
    {
      id: '12',
      title: 'Implement call flow management',
      description: 'Design and implement effective call flows for your voice assistant or call center application.',
      timeEstimate: '60 min',
      completed: false,
      section: 'conversational_usecase',
      link: 'https://elevenlabs.io/docs/guides/conversational-ai'
    },
    {
      id: '13',
      title: 'Configure multilingual support',
      description: 'Set up your conversational AI to support multiple languages for global customer service.',
      timeEstimate: '40 min',
      completed: false,
      section: 'conversational_usecase',
      link: 'https://elevenlabs.io/docs/language-support'
    },
    {
      id: '14',
      title: 'Integrate with existing call center systems',
      description: 'Connect ElevenLabs voice technology with your current call center infrastructure.',
      timeEstimate: '90 min',
      completed: false,
      section: 'conversational_usecase',
      link: 'https://elevenlabs.io/docs/api-reference/overview'
    },
    {
      id: '15',
      title: 'Implement fallback scenarios',
      description: 'Design effective fallback mechanisms for when the AI needs to transfer to a human agent.',
      timeEstimate: '60 min',
      completed: false,
      section: 'conversational_usecase',
      link: 'https://elevenlabs.io/docs/guides/conversational-ai'
    },
  ];
};
