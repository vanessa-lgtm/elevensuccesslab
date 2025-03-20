
import { Film, MicVocal, Music, Code, Globe, BookOpen, Shield } from 'lucide-react';
import React from 'react';
import { KeyActionStep } from '@/components/onboarding/KeyActionItem';
import { ResourceItem } from '@/components/onboarding/ResourceCard';

export const mediaKeyActionSteps: KeyActionStep[] = [
  {
    id: 'api-request',
    title: 'Make Your First API Request',
    description: 'Start integrating ElevenLabs into your applications and workflows.',
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
    id: 'add-voice',
    title: 'Add a Voice to Your Library',
    description: 'Choose from our diverse catalog of pre-made voices for your productions.',
    icon: React.createElement(Globe, { className: "h-8 w-8 text-primary" }),
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
    icon: React.createElement(Globe, { className: "h-8 w-8 text-primary" }),
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
    icon: React.createElement(Music, { className: "h-8 w-8 text-primary" }),
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
    icon: React.createElement(MicVocal, { className: "h-8 w-8 text-primary" }),
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

export const mediaResources: ResourceItem[] = [
  {
    title: 'Product Guide',
    description: 'Comprehensive guide for implementing ElevenLabs in media production workflows.',
    icon: React.createElement(Film, { className: "h-6 w-6 text-primary" }),
    link: 'https://elevenlabs.io/docs/guides/media'
  },
  {
    title: 'Voice Cloning Best Practices',
    description: 'Learn techniques for getting the best results with voice cloning technology.',
    icon: React.createElement(MicVocal, { className: "h-6 w-6 text-primary" }),
    link: 'https://elevenlabs.io/docs/product-guides/voices/voice-cloning'
  },
  {
    title: 'API Integration for Media Applications',
    description: 'Technical documentation for integrating with the ElevenLabs API.',
    icon: React.createElement(BookOpen, { className: "h-6 w-6 text-primary" }),
    link: 'https://elevenlabs.io/docs/api-reference/overview'
  },
  {
    title: 'Security & Compliance Guide',
    description: 'Information about our security features and compliance certifications.',
    icon: React.createElement(Shield, { className: "h-6 w-6 text-primary" }),
    link: 'https://elevenlabs.io/docs/guides/security'
  },
  {
    title: 'Customer Story: Bertelsmann',
    description: 'Learn how Bertelsmann is using ElevenLabs to transform their media business.',
    icon: React.createElement(BookOpen, { className: "h-6 w-6 text-primary" }),
    link: 'https://elevenlabs.io/blog/bertelsmann'
  },
  {
    title: 'Customer Story: Star Sports',
    description: 'See how Star Sports leverages AI voice technology for sports broadcasting.',
    icon: React.createElement(Film, { className: "h-6 w-6 text-primary" }),
    link: 'https://elevenlabs.io/blog/starsports'
  }
];
