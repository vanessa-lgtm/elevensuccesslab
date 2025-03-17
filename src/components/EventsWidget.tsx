
import React from 'react';
import { Calendar, ExternalLink, Clock, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

type Event = {
  id: string;
  title: string;
  date: string;
  type: 'webinar' | 'workshop' | 'conference';
  url?: string;
  isHighlighted?: boolean;
  description?: string;
  time?: string;
  location?: string;
};

const upcomingEvents: Event[] = [
  {
    id: '1',
    title: 'ElevenLabs AI in EdTech: Scaling Learning Experiences with Innovation',
    date: 'June 15, 2023',
    type: 'webinar',
    url: 'https://app.livestorm.co/elevenlabs/elevenlabs-ai-in-edtech-scaling-learning-experiences-with-innovation',
    isHighlighted: true,
    description: 'Join us for a deep dive into how AI is transforming education technology.',
    time: '11:00 AM EST',
    location: 'Online'
  },
  {
    id: '2',
    title: 'Advanced AI Implementation Workshop',
    date: 'June 22, 2023',
    type: 'workshop',
    url: '#',
  },
  {
    id: '3',
    title: 'Annual AI Summit',
    date: 'July 10-12, 2023',
    type: 'conference',
    url: '#',
  },
];

const getEventBadgeClasses = (type: Event['type']) => {
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

const EventsWidget = () => {
  const highlightedEvent = upcomingEvents.find(event => event.isHighlighted);
  const otherEvents = upcomingEvents.filter(event => !event.isHighlighted);

  return (
    <div className="w-full py-8 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-primary mr-2" />
            <span className="font-semibold text-xl">Upcoming Events</span>
          </div>
          
          <Button variant="outline" size="sm" asChild>
            <a href="#" className="flex items-center gap-1">
              View All
              <ExternalLink className="h-3 w-3" />
            </a>
          </Button>
        </div>
        
        {highlightedEvent && (
          <div className="mb-6">
            <Card className="overflow-hidden border-primary/20 bg-card/95 backdrop-blur-sm">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-primary/5 p-6 flex flex-col justify-center items-center text-center">
                  <span className={cn('text-xs px-3 py-1 rounded-full font-medium mb-3', getEventBadgeClasses(highlightedEvent.type))}>
                    {highlightedEvent.type.charAt(0).toUpperCase() + highlightedEvent.type.slice(1)}
                  </span>
                  <h3 className="text-lg font-semibold mb-2">{highlightedEvent.date}</h3>
                  {highlightedEvent.time && (
                    <div className="flex items-center justify-center text-sm text-foreground/70 mb-1">
                      <Clock className="h-3 w-3 mr-1" />
                      {highlightedEvent.time}
                    </div>
                  )}
                  {highlightedEvent.location && (
                    <div className="flex items-center justify-center text-sm text-foreground/70">
                      <MapPin className="h-3 w-3 mr-1" />
                      {highlightedEvent.location}
                    </div>
                  )}
                </div>
                
                <div className="md:col-span-2 p-6">
                  <CardTitle className="text-xl mb-2">{highlightedEvent.title}</CardTitle>
                  {highlightedEvent.description && (
                    <CardDescription className="mb-4">{highlightedEvent.description}</CardDescription>
                  )}
                  <Button className="mt-2" asChild>
                    <a href={highlightedEvent.url} target="_blank" rel="noopener noreferrer">
                      Register Now
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}
        
        <div className="flex gap-4 overflow-x-auto pb-4 max-w-full">
          {otherEvents.map((event) => (
            <Link to={`/events/${event.id}`} key={event.id} className="group min-w-[220px] max-w-[300px]">
              <Card className="h-full border-0 shadow-sm bg-background/50 backdrop-blur-sm transition-all duration-200 group-hover:shadow-md group-hover:translate-y-[-2px]">
                <CardHeader className="p-3 pb-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-sm font-medium">{event.title}</CardTitle>
                      <CardDescription className="text-xs mt-1">{event.date}</CardDescription>
                    </div>
                    <span className={cn('text-[10px] px-2 py-1 rounded-full font-medium', getEventBadgeClasses(event.type))}>
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="p-3 pt-2">
                  <Button variant="ghost" size="sm" className="w-full h-7 text-xs">
                    <span>View Details</span>
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsWidget;
