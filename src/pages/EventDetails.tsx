
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Event = {
  id: string;
  title: string;
  date: string;
  type: 'webinar' | 'workshop' | 'conference';
  description: string;
  location: string;
  time: string;
  url?: string;
};

const eventsData: Record<string, Event> = {
  '1': {
    id: '1',
    title: 'Getting Started with Voice AI',
    date: 'June 15, 2023',
    type: 'webinar',
    description: 'Join us for an introductory session on Voice AI technology. Learn the basics of voice recognition, natural language processing, and how to implement simple voice commands in your applications.',
    location: 'Online',
    time: '1:00 PM - 2:30 PM EST',
    url: '#',
  },
  '2': {
    id: '2',
    title: 'Advanced AI Implementation Workshop',
    date: 'June 22, 2023',
    type: 'workshop',
    description: 'This hands-on workshop will guide you through implementing advanced AI features in your products. Topics include multimodal AI, context awareness, and optimizing for performance.',
    location: 'Tech Hub, San Francisco',
    time: '9:00 AM - 4:00 PM PST',
    url: '#',
  },
  '3': {
    id: '3',
    title: 'Annual AI Summit',
    date: 'July 10-12, 2023',
    type: 'conference',
    description: 'Our flagship conference featuring keynotes from industry leaders, technical workshops, and networking opportunities. Discover the latest trends and innovations in AI technology.',
    location: 'Convention Center, New York',
    time: 'All day',
    url: '#',
  },
};

const EventDetails = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const event = eventId ? eventsData[eventId] : null;

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
        <p className="mb-8">The event you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary/5 py-8">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-sm text-primary mb-6 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{event.title}</h1>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="mr-2 h-4 w-4" />
              {event.date}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="mr-2 h-4 w-4" />
              {event.time}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="mr-2 h-4 w-4" />
              {event.location}
            </div>
          </div>
          
          <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-slate mx-auto">
            <h2 className="text-xl font-semibold mb-4">About This Event</h2>
            <p className="mb-8">{event.description}</p>
            
            {event.url && (
              <Button className="mt-6" asChild>
                <a href={event.url} target="_blank" rel="noopener noreferrer">
                  Register Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
