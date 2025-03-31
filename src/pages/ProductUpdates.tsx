
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ChevronRight, ArrowRight, Calendar, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Mock product update data
const productUpdates = [
  {
    id: 1,
    title: "New Voice Cloning API Release",
    description: "Our new Voice Cloning API allows you to create high-quality voice clones with just 1 minute of audio.",
    date: "June 15, 2024",
    author: "Product Team",
    category: "API",
    url: "https://elevenlabs.io/blog/voice-cloning-api"
  },
  {
    id: 2,
    title: "Improved Dubbing Features",
    description: "We've enhanced our dubbing capabilities with better timing control and lip syncing options.",
    date: "May 28, 2024",
    author: "Engineering Team",
    category: "Features",
    url: "https://elevenlabs.io/blog/dubbing-enhancements"
  },
  {
    id: 3,
    title: "Speech to Speech Translation in 28 Languages",
    description: "Translate speech in real-time across 28 languages while preserving the original speaker's voice.",
    date: "May 10, 2024",
    author: "Research Team",
    category: "Translation",
    url: "https://elevenlabs.io/blog/speech-to-speech-translation"
  },
  {
    id: 4,
    title: "Voice Design Studio Beta Access",
    description: "We're opening beta access to our new Voice Design Studio, allowing for unprecedented control over voice characteristics.",
    date: "April 22, 2024",
    author: "Design Team",
    category: "Tools",
    url: "https://elevenlabs.io/blog/voice-design-studio"
  },
  {
    id: 5,
    title: "Voice Library Expansion: 50 New Premade Voices",
    description: "We've added 50 new high-quality premade voices to our voice library, spanning various accents and demographics.",
    date: "April 5, 2024",
    author: "Content Team",
    category: "Voices",
    url: "https://elevenlabs.io/blog/voice-library-expansion"
  }
];

const ProductUpdates = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const [filteredUpdates, setFilteredUpdates] = useState(productUpdates);
  
  // Extract unique categories for filter
  const categories = ['All', ...Array.from(new Set(productUpdates.map(update => update.category)))];
  
  useEffect(() => {
    // Filter updates based on selected category
    if (filter === 'All') {
      setFilteredUpdates(productUpdates);
    } else {
      setFilteredUpdates(productUpdates.filter(update => update.category === filter));
    }
  }, [filter]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Product Updates</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Stay informed about the latest features and improvements to ElevenLabs' voice AI technology.
            </p>
            
            <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
              {categories.map(category => (
                <Button 
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(category)}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="space-y-6">
              {filteredUpdates.map(update => (
                <Card key={update.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <div className="space-y-1">
                        <CardTitle className="text-xl">{update.title}</CardTitle>
                        <div className="flex items-center text-sm text-muted-foreground gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>{update.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="h-3.5 w-3.5" />
                            <span>{update.author}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        {update.category}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {update.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" asChild className="gap-1">
                      <a href={update.url} target="_blank" rel="noopener noreferrer">
                        Read full update <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild>
                <a href="https://elevenlabs.io/blog?category=product" target="_blank" rel="noopener noreferrer" className="gap-1">
                  View all product updates <ChevronRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductUpdates;
