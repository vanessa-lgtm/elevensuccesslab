
import { ChecklistItem } from './types';

export const getSectionTitle = (section: string): string => {
  const sectionTitles: Record<string, string> = {
    'admin': 'Administration',
    'general': 'Product General Information',
    'usecase': 'Media & Entertainment Use Cases',
    'basics': 'The Basics',
    'implementation': 'Implementation Steps'
  };
  
  return sectionTitles[section] || section;
};

export const getDefaultChecklistItems = (industry: string): ChecklistItem[] => {
  if (industry === "media") {
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
        title: 'Set up your Workspace',
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
        title: 'Set up product update notifications',
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
        section: 'usecase',
        link: 'https://elevenlabs.io/voices'
      },
      {
        id: '11',
        title: 'Create custom voice clones',
        description: 'Develop personalized voice clones using Instant Voice Cloning (IVC) for quick results or Professional Voice Cloning (PVC) for high-accuracy and customization.',
        timeEstimate: '45 min',
        completed: false,
        section: 'usecase',
        link: 'https://elevenlabs.io/docs/product-guides/voices/voice-cloning'
      },
      {
        id: '12',
        title: 'Learn instant voice cloning techniques',
        description: 'Master the art of creating quick voice clones for rapid content production and iteration.',
        timeEstimate: '25 min',
        completed: false,
        section: 'usecase',
        link: 'https://elevenlabs.io/docs/product-guides/voices/voice-cloning/instant-voice-cloning'
      },
      {
        id: '13',
        title: 'Set up high-quality text-to-speech workflows',
        description: 'Configure your text-to-speech settings to deliver natural, high-quality speech for your media content.',
        timeEstimate: '30 min',
        completed: false,
        section: 'usecase',
        link: 'https://elevenlabs.io/docs/product-guides/playground/text-to-speech'
      },
      {
        id: '14',
        title: 'Explore voice transformation capabilities',
        description: 'Learn how to transform any voice with Voice Changer for creative audio productions.',
        timeEstimate: '20 min',
        completed: false,
        section: 'usecase',
        link: 'https://elevenlabs.io/docs/product-guides/playground/voice-changer'
      },
      {
        id: '15',
        title: 'Incorporate AI-generated sound effects',
        description: 'Enhance your media content with AI-generated sound effects for immersive audio experiences.',
        timeEstimate: '25 min',
        completed: false,
        section: 'usecase',
        link: 'https://elevenlabs.io/docs/product-guides/playground/sound-effects'
      },
    ];
  } else if (industry === "conversational_ai") {
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
        title: 'Set up your Workspace',
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
        title: 'Set up product update notifications',
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
        title: 'Learn about voice AI models',
        description: 'Understand the different voice models available and their specific use cases for conversational AI.',
        timeEstimate: '20 min',
        completed: false,
        section: 'general',
        link: 'https://elevenlabs.io/docs/models'
      },
      {
        id: '8',
        title: 'Understand voice API capabilities',
        description: 'Learn how the voice API works for real-time conversational applications.',
        timeEstimate: '25 min',
        completed: false,
        section: 'general',
        link: 'https://elevenlabs.io/docs/api-reference/overview'
      },
      {
        id: '9',
        title: 'Plan your conversational design',
        description: 'Learn the principles of effective conversation design for voice assistants.',
        timeEstimate: '30 min',
        completed: false,
        section: 'general',
        link: 'https://elevenlabs.io/docs/conversation-design'
      },
      
      {
        id: '10',
        title: 'Set up your first voice agent',
        description: 'Configure a basic conversational agent with voice capabilities.',
        timeEstimate: '45 min',
        completed: false,
        section: 'usecase',
        link: 'https://elevenlabs.io/docs/agent-overview'
      },
      {
        id: '11',
        title: 'Configure call center integration',
        description: 'Set up the necessary connections between your call center platform and ElevenLabs.',
        timeEstimate: '60 min',
        completed: false,
        section: 'usecase',
        link: 'https://elevenlabs.io/docs/call-center-integration'
      },
      {
        id: '12',
        title: 'Implement customer service workflows',
        description: 'Create voice-based workflows for handling common customer service scenarios.',
        timeEstimate: '90 min',
        completed: false,
        section: 'usecase',
        link: 'https://elevenlabs.io/docs/customer-service-workflows'
      },
      {
        id: '13',
        title: 'Test conversation performance',
        description: 'Evaluate your conversational AI implementation with real-world testing scenarios.',
        timeEstimate: '45 min',
        completed: false,
        section: 'usecase',
        link: 'https://elevenlabs.io/docs/testing-conversations'
      },
      {
        id: '14',
        title: 'Set up analytics and monitoring',
        description: 'Configure analytics to track conversation metrics and performance.',
        timeEstimate: '30 min',
        completed: false,
        section: 'usecase',
        link: 'https://elevenlabs.io/docs/conversation-analytics'
      },
      {
        id: '15',
        title: 'Implement multilingual support',
        description: 'Extend your voice assistants to support multiple languages.',
        timeEstimate: '60 min',
        completed: false,
        section: 'usecase',
        link: 'https://elevenlabs.io/docs/multilingual-support'
      },
    ];
  } else {
    return [
      {
        id: '1',
        title: 'Create your account',
        description: 'Set up your personal profile and customize your account settings.',
        timeEstimate: '5 min',
        completed: false,
        section: 'basics',
      },
      {
        id: '9',
        title: 'Verify billing information',
        description: 'Make sure your billing is set up with the correct payment method and your billing contact on file is correct (you can verify this with customer support).',
        timeEstimate: '5 min',
        completed: false,
        section: 'basics',
      },
      {
        id: '2',
        title: 'Complete the AI readiness assessment',
        description: 'Answer a few questions to help us understand your current AI maturity level.',
        timeEstimate: '10 min',
        completed: false,
        section: 'general',
      },
      {
        id: '3',
        title: 'Set up your first project',
        description: 'Create your first AI project and define your objectives.',
        timeEstimate: '15 min',
        completed: false,
        section: 'general',
      },
      {
        id: '4',
        title: 'Connect your data sources',
        description: 'Integrate your existing data sources to power your AI solutions.',
        timeEstimate: '20 min',
        completed: false,
        section: 'implementation',
      },
      {
        id: '5',
        title: 'Configure your first AI model',
        description: 'Select and configure an AI model that matches your business needs.',
        timeEstimate: '30 min',
        completed: false,
        section: 'implementation',
      },
      {
        id: '6',
        title: 'Test your implementation',
        description: 'Run initial tests to ensure your AI solution is working correctly.',
        timeEstimate: '15 min',
        completed: false,
        section: 'implementation',
      },
      {
        id: '7',
        title: 'Invite team members',
        description: 'Add your colleagues to collaborate on your AI projects.',
        timeEstimate: '5 min',
        completed: false,
        section: 'admin',
      },
      {
        id: '8',
        title: 'Schedule your first training session',
        description: 'Book a session with our experts to get the most out of ElevenLabs.',
        timeEstimate: '10 min',
        completed: false,
        section: 'admin',
      },
    ];
  }
};
