
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WebinarPopup from '@/components/WebinarPopup';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Calendar, MapPin, Users, ExternalLink } from 'lucide-react';

type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'webinar' | 'workshop' | 'conference';
  description: string;
  agenda: string[];
  speakers: {
    name: string;
    role: string;
  }[];
  registrationUrl: string;
};

// Mock data for events
const eventsData: Event[] = [
  {
    id: '1',
    title: 'Getting Started with Voice AI',
    date: 'June 15, 2023',
    time: '10:00 AM - 11:30 AM PST',
    location: 'Online Webinar',
    type: 'webinar',
    description: 'Join us for an introductory session on Voice AI technology. Learn the basics of how voice AI works, current applications, and how to start implementing it in your projects.',
    agenda: [
      'Introduction to Voice AI technology',
      'Understanding the voice synthesis pipeline',
      'Common use cases and applications',
      'Hands-on demonstration with basic implementation',
      'Q&A session'
    ],
    speakers: [
      {
        name: 'Sarah Johnson',
        role: 'AI Product Manager'
      },
      {
        name: 'Michael Chen',
        role: 'Voice AI Engineer'
      }
    ],
    registrationUrl: 'https://example.com/register'
  },
  {
    id: '2',
    title: 'Advanced AI Implementation Workshop',
    date: 'June 22, 2023',
    time: '9:00 AM - 4:00 PM PST',
    location: 'Tech Hub Conference Center, San Francisco',
    type: 'workshop',
    description: 'This hands-on workshop will guide you through advanced implementation techniques for AI voice technology. Bring your laptop and prepare to code along as we build sophisticated voice applications.',
    agenda: [
      'Advanced voice customization techniques',
      'Building conversational interfaces',
      'Integration with existing applications',
      'Performance optimization and scaling',
      'Hands-on implementation exercises'
    ],
    speakers: [
      {
        name: 'Dr. Alicia Rodriguez',
        role: 'Chief AI Scientist'
      },
      {
        name: 'Thomas Wright',
        role: 'Senior Developer Advocate'
      }
    ],
    registrationUrl: 'https://example.com/workshop'
  },
  {
    id: '3',
    title: 'Annual AI Summit',
    date: 'July 10-12, 2023',
    time: 'All day event',
    location: 'Grand Convention Center, New York City',
    type: 'conference',
    description: 'The Annual AI Summit brings together industry leaders, researchers, and practitioners for three days of insightful presentations, panels, and networking opportunities focused on the future of artificial intelligence.',
    agenda: [
      'Day 1: Future of Voice AI Technology',
      'Day 2: Industry Applications and Case Studies',
      'Day 3: Ethical Considerations and Responsible AI',
      'Evening networking events',
      'Startup showcase and demos'
    ],
    speakers: [
      {
        name: 'Prof. Emily Chang',
        role: 'AI Ethics Researcher'
      },
      {
        name: 'Mark Davidson',
        role: 'CTO, FutureVoice Inc.'
      },
      {
        name: 'Sophia Williams',
        role: 'Director of Innovation'
      }
    ],
    registrationUrl: 'https://example.com/summit'
  }
];

const getEventTypeColor = (type: Event['type']) => {
  switch (type) {
    case 'webinar':
      return 'bg-primary/10 text-primary';
    case 'workshop':
      return 'bg-orange-500/10 text-orange-500';
    case 'conference':
      return 'bg-blue-500/10 text-blue-500';
    default:
      return 'bg-slate-500/10 text-slate-500';
  }
};

const EventDetails = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const event = eventsData.find(e => e.id === eventId);

  if (!event) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Event Not Found</h1>
          <p className="mb-8">The event you're looking for doesn't exist or has been removed.</p>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-sm font-medium mb-6 hover:text-primary transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`px-3 py-1 text-xs rounded-full font-medium ${getEventTypeColor(event.type)}`}>
                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                </span>
                <span className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-1 h-4 w-4" />
                  {event.date}
                </span>
                <span className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="mr-1 h-4 w-4" />
                  {event.location}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{event.title}</h1>
              <p className="text-lg text-muted-foreground">{event.description}</p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Event Agenda</h2>
              <ul className="space-y-2">
                {event.agenda.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center rounded-full bg-primary/10 text-primary w-6 h-6 text-sm mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Speakers</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {event.speakers.map((speaker, index) => (
                  <Card key={index} className="p-4 flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                      {speaker.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-medium">{speaker.name}</h3>
                      <p className="text-sm text-muted-foreground">{speaker.role}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Registration</h2>
              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="text-sm font-medium mb-1">Date & Time</h3>
                  <p className="text-sm flex items-center text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    {event.date}, {event.time}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-1">Location</h3>
                  <p className="text-sm flex items-center text-muted-foreground">
                    <MapPin className="mr-2 h-4 w-4" />
                    {event.location}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-1">Event Type</h3>
                  <p className="text-sm flex items-center text-muted-foreground">
                    <Users className="mr-2 h-4 w-4" />
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </p>
                </div>
              </div>
              
              <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
                <Button className="w-full">
                  Register Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
      <WebinarPopup />
    </div>
  );
};

export default EventDetails;
