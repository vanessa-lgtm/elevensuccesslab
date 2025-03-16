
import React from 'react';
import { Calendar, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type Event = {
  id: string;
  title: string;
  date: string;
  type: 'webinar' | 'workshop' | 'conference';
  url?: string;
};

const upcomingEvents: Event[] = [
  {
    id: '1',
    title: 'Getting Started with Voice AI',
    date: 'June 15, 2023',
    type: 'webinar',
    url: '#',
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
  return (
    <div className="w-full py-4 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Calendar className="h-5 w-5 text-primary mr-2" />
            <span className="font-semibold">Upcoming Events</span>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-2 max-w-full">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="min-w-[220px] max-w-[300px] border-0 shadow-sm bg-background/50 backdrop-blur-sm">
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
                  {event.url && (
                    <Button variant="ghost" size="sm" className="w-full h-7 text-xs" asChild>
                      <a href={event.url} target="_blank" rel="noopener noreferrer">
                        <span>Register</span>
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsWidget;
