
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
      dates: 'May 14',
      title: 'GCP Benelux',
      description: 'Learn how to scale your generative AI stack with ElevenLabs on Google Cloud.',
      location: 'Benelux',
      ctaText: 'Meet us here',
      ctaLink: 'https://r.contact.elevenlabs.io/mk/cl/f/sh/28xHLtxYQ52kJ9bDSob5PkBuK2Rm7DCbpu/d3NQuFiVd_jT'
    },
    {
      id: 2,
      dates: 'May 14',
      title: 'AI Developer Meetup Tokyo',
      description: 'Meet the local AI builder community with ElevenLabs, Cloudflare, and Supabase.',
      location: 'Tokyo',
      ctaText: 'Join here',
      ctaLink: 'https://r.contact.elevenlabs.io/mk/cl/f/sh/28xHLtxYQ53GTkGMELnhwDKUkwjdhA2hGw/rOW9kpub3lLX'
    },
    {
      id: 3,
      dates: 'May 15',
      title: 'CEE Impact Conference',
      description: 'Discuss emerging AI trends in Central and Eastern Europe.',
      location: 'Central & Eastern Europe',
      ctaText: 'Meet us here',
      ctaLink: 'https://impactcee.com/?utm_source=brevo&utm_campaign=March%20Monthly%20Product%20Updates%20Newsletter%20-%20Tech%20Enterprise&utm_medium=email'
    },
    {
      id: 4,
      dates: 'May 29',
      title: 'Dublin Tech Summit',
      description: 'See how ElevenLabs is powering voice-first applications in enterprise and media.',
      location: 'Dublin',
      ctaText: 'Event site here',
      ctaLink: 'https://dublintechsummit.tech/?utm_source=brevo&utm_campaign=March%20Monthly%20Product%20Updates%20Newsletter%20-%20Tech%20Enterprise&utm_medium=email'
    },
    {
      id: 5,
      dates: 'June 9-13',
      title: 'London Tech Week',
      description: 'The GTM and CS teams will be at London Tech Week. See how ElevenLabs is powering voice-first applications in enterprise and media.',
      location: 'London',
      ctaText: 'Event site here',
      ctaLink: 'https://londontechweek.com/'
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
