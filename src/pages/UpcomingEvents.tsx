
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CalendarDays, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      dates: 'April 6-9',
      title: 'NAB Show',
      description: 'Join us in Las Vegas to explore AI Audio applications in Media & Entertainment.',
      location: 'Las Vegas',
      ctaText: 'Register here',
      ctaLink: 'https://nabshow.com/2024/elevenlabs/'
    },
    {
      id: 2,
      dates: 'April 9',
      title: 'Dublin Event',
      description: 'Connect with the Irish AI community and participate in an Agentic AI workshop.',
      location: 'Dublin',
      ctaText: 'RSVP here',
      ctaLink: 'https://www.eventbrite.com/e/elevenlabs-dublin-drinks-ai-workshop-tickets-873710174077'
    },
    {
      id: 3,
      dates: 'April 9-11',
      title: 'Google Cloud Next',
      description: 'Learn how to build with ElevenLabs on Google Cloud.',
      location: 'Online',
      ctaText: 'Sign up here',
      ctaLink: 'https://cloud.withgoogle.com/next'
    },
    {
      id: 4,
      dates: 'April 17',
      title: 'Documentation Agents Webinar',
      description: 'Learn how to integrate Conversational AI into your documentation.',
      location: 'Online',
      ctaText: 'Join here',
      ctaLink: 'https://app.livestorm.co/elevenlabs/documentation-agents'
    },
    {
      id: 5,
      dates: 'April 24',
      title: 'Artist and the Machine - NYC',
      description: 'Join us at the AI & Creativity Summit to see tech demos from Gen AI artists.',
      location: 'New York City',
      ctaText: 'Get tickets here',
      ctaLink: 'https://www.theartist.ai/'
    },
    {
      id: 6,
      dates: 'April 25',
      title: 'Customer Support Agents Webinar',
      description: 'Learn how to create effective customer support agents with AI.',
      location: 'Online',
      ctaText: 'Register here',
      ctaLink: 'https://app.livestorm.co/elevenlabs/customer-support-agents'
    },
    {
      id: 7,
      dates: 'April 25',
      title: 'Getting Started with ElevenLabs: Onboarding Webinar',
      description: 'Learn the basics of getting started with ElevenLabs.',
      location: 'Online',
      ctaText: 'Register here',
      ctaLink: 'https://app.livestorm.co/elevenlabs/getting-started-with-elevenlabs'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Upcoming Events</h1>
          <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
            We have some exciting events lined up this month. Join us to learn more about ElevenLabs technologies
            and connect with our community.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card key={event.id} className="p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <CalendarDays className="h-4 w-4" />
                  <span className="font-semibold">{event.dates}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex items-center gap-2 text-gray-500 mb-4">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
                <Button variant="outline" className="w-full flex items-center justify-center gap-2" asChild>
                  <a href={event.ctaLink} target="_blank" rel="noopener noreferrer">
                    {event.ctaText} <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UpcomingEvents;
