
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LanguageSelector from '@/components/LanguageSelector';
import { CalendarDays, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const UpcomingEvents = () => {
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      title: 'Upcoming Events',
      subtitle: 'We have some exciting events lined up this month. Join us to learn more about ElevenLabs technologies and connect with our community.',
      events: [
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
      ]
    },
    es: {
      title: 'Próximos Eventos',
      subtitle: 'Tenemos algunos eventos emocionantes programados para este mes. Únete a nosotros para aprender más sobre las tecnologías de ElevenLabs y conectar con nuestra comunidad.',
      events: [
        {
          id: 1,
          dates: '14 de Mayo',
          title: 'GCP Benelux',
          description: 'Aprende cómo escalar tu stack de IA generativa con ElevenLabs en Google Cloud.',
          location: 'Benelux',
          ctaText: 'Encuéntranos aquí',
          ctaLink: 'https://r.contact.elevenlabs.io/mk/cl/f/sh/28xHLtxYQ52kJ9bDSob5PkBuK2Rm7DCbpu/d3NQuFiVd_jT'
        },
        {
          id: 2,
          dates: '14 de Mayo',
          title: 'Meetup de Desarrolladores de IA Tokyo',
          description: 'Conoce a la comunidad local de desarrolladores de IA con ElevenLabs, Cloudflare y Supabase.',
          location: 'Tokyo',
          ctaText: 'Únete aquí',
          ctaLink: 'https://r.contact.elevenlabs.io/mk/cl/f/sh/28xHLtxYQ53GTkGMELnhwDKUkwjdhA2hGw/rOW9kpub3lLX'
        },
        {
          id: 3,
          dates: '15 de Mayo',
          title: 'Conferencia de Impacto CEE',
          description: 'Discute las tendencias emergentes de IA en Europa Central y Oriental.',
          location: 'Europa Central y Oriental',
          ctaText: 'Encuéntranos aquí',
          ctaLink: 'https://impactcee.com/?utm_source=brevo&utm_campaign=March%20Monthly%20Product%20Updates%20Newsletter%20-%20Tech%20Enterprise&utm_medium=email'
        },
        {
          id: 4,
          dates: '29 de Mayo',
          title: 'Cumbre Tecnológica de Dublín',
          description: 'Ve cómo ElevenLabs está potenciando aplicaciones de voz en empresas y medios.',
          location: 'Dublín',
          ctaText: 'Sitio del evento aquí',
          ctaLink: 'https://dublintechsummit.tech/?utm_source=brevo&utm_campaign=March%20Monthly%20Product%20Updates%20Newsletter%20-%20Tech%20Enterprise&utm_medium=email'
        },
        {
          id: 5,
          dates: '9-13 de Junio',
          title: 'Semana Tecnológica de Londres',
          description: 'Los equipos de GTM y CS estarán en la Semana Tecnológica de Londres. Ve cómo ElevenLabs está potenciando aplicaciones de voz en empresas y medios.',
          location: 'Londres',
          ctaText: 'Sitio del evento aquí',
          ctaLink: 'https://londontechweek.com/'
        }
      ]
    }
  };

  const currentTranslation = translations[language as keyof typeof translations];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-start mb-8">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-4">{currentTranslation.title}</h1>
              <p className="text-lg max-w-3xl">
                {currentTranslation.subtitle}
              </p>
            </div>
            <div className="ml-4">
              <LanguageSelector 
                currentLanguage={language} 
                onLanguageChange={setLanguage} 
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentTranslation.events.map((event) => (
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
