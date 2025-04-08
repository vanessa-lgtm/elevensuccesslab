import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Newspaper, Globe, MessageCircle, Mic, Headphones, Users, CalendarDays } from 'lucide-react';
import VideoEmbed from '@/components/VideoEmbed';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const ProductUpdates = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Key Product Updates</h1>
            <p className="text-lg text-muted-foreground mb-8">
              The latest innovations from ElevenLabs
            </p>
            
            {/* March 2025 Updates */}
            <Card className="mb-12 border-primary/20 shadow-md">
              <CardHeader className="bg-primary/5 border-b border-primary/10">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">ElevenLabs March Updates</CardTitle>
                    <Badge variant="outline" className="text-primary border-primary/30">Latest</Badge>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground gap-2">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>March 2025</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <Alert className="mb-6 bg-primary/5 border-primary/20">
                  <Newspaper className="h-4 w-4" />
                  <AlertTitle>Hello from the ElevenLabs team!</AlertTitle>
                  <AlertDescription>
                    As we head into April, we're introducing a range of new features, improvements, and upcoming events. Here's a summary of what's new.
                  </AlertDescription>
                </Alert>
                
                <Accordion type="multiple" className="space-y-4">
                  {/* Conversational AI Updates */}
                  <AccordionItem value="conversational-ai" className="border rounded-lg px-4">
                    <AccordionTrigger className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <MessageCircle className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-semibold">Conversational AI Updates</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 px-2">
                      <p className="mb-4">Conversational AI is our platform for deploying human-like voice agents. We've crossed a significant milestone this month, over <strong>500,000 voice conversational agents</strong> have been deployed on the ElevenLabs platform.</p>
                      
                      <p className="mb-3 font-medium">These new Conversational AI features will help you build even more powerful voice agents:</p>
                      <ul className="space-y-2 list-disc pl-5 mb-4">
                        <li><strong>Automatic Language Detection:</strong> Our new system tool automatically detects and switches languages based on user input, making it easier than ever to build multilingual voice agents.</li>
                        <li><strong>Retrieval-Augmented Generation:</strong> We've added native, low-latency RAG to Conversational AI, enabling your voice agents to access and use large knowledge bases in real time.</li>
                        <li><strong>SIP Trunking:</strong> SIP (Session Initiation Protocol) trunking allows you to connect your existing telephony infrastructure directly to ElevenLabs conversational AI agents (route calls to AI agents).</li>
                        <li><strong>HIPAA Compliance:</strong> Conversational AI is now one of ElevenLabs' HIPAA-eligible services, allowing voice agents to handle Protected Health Information (PHI) while ensuring regulatory compliance.</li>
                        <li><strong>Twilio Outbound Calling:</strong> Now, you can use native outbound calling for Twilio-configured numbers, expanding the flexibility of your voice solutions.</li>
                        <li><strong>Post-call Webhooks:</strong> Post-call webhooks allow you to receive detailed information about a call after the analysis is complete. Automate follow-ups, integrate with your CRM, and maintain context across multiple conversations.</li>
                        <li><strong>Client to Server Events:</strong> Your application can now send contextual information (e.g., 'The shopping cart contains 3 items') to the server to improve conversation quality and relevance at any point during the conversation.</li>
                        <li><strong>Cascade LLM:</strong> If your default LLM fails, we now support dynamic dispatch to fallback models. This results in higher latency but prevents the turn from failing.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  {/* Speech to Text / Scribe Updates */}
                  <AccordionItem value="speech-to-text" className="border rounded-lg px-4">
                    <AccordionTrigger className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Mic className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-semibold">Speech to Text / Scribe Updates</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 px-2">
                      <p className="mb-4">Scribe continues to set the standard for transcription, and this month, we've made several key improvements:</p>
                      <ul className="space-y-2 list-disc pl-5">
                        <li><strong>Forced Alignment API:</strong> You can now turn spoken audio and text into a time-aligned transcript. This is ideal for transcripts that need exact timestamps for each word or phrase (e.g., subtitles).</li>
                        <li><strong>HIPAA Compliance:</strong> Available with zero retention mode for those on the appropriate plans, ensuring compliance for healthcare applications.</li>
                        <li><strong>Enhanced Transcription Accuracy:</strong> We've improved diarization for transcribing audio files up to 2 hours long, enhanced repetition handling and optimized Voice Activity Detection (VAD), leading to even more accurate and reliable transcriptions.</li>
                        <li><strong>World's Most Accurate Speech to Text:</strong> According to @ArtificialAnlys, Scribe remains the most accurate model available.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  {/* Text to Speech Updates */}
                  <AccordionItem value="text-to-speech" className="border rounded-lg px-4">
                    <AccordionTrigger className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Headphones className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-semibold">Text to Speech Updates</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 px-2">
                      <ul className="space-y-2 list-disc pl-5">
                        <li><strong>Opus Format Support:</strong> Added support for Opus format with a 48kHz sample rate across multiple bitrates (32-192 kbps), offering improved audio quality and compression.</li>
                        <li><strong>A-law Format Support:</strong> We've introduced A-law format with an 8kHz sample rate for seamless integration with European telephony systems.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  {/* Product Updates */}
                  <AccordionItem value="product-updates" className="border rounded-lg px-4">
                    <AccordionTrigger className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Globe className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-semibold">Product Updates</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 px-2">
                      <ul className="space-y-2 list-disc pl-5">
                        <li><strong>Voice Design:</strong> We've added parameters like loudness, quality, and guidance scale to help you create even better voices.</li>
                        <li><strong>Voice Speed Controls:</strong> Now available across all platforms, including Text to Speech, Studio, and Conversational AI.</li>
                        <li><strong>Dubbing Studio:</strong> Now supports advanced workflows with dubbing_studio enabled, allowing for more than just one-off dubs. It also uses Scribe by default for speech recognition, improving the accuracy of your dubs.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  {/* Community Updates */}
                  <AccordionItem value="community-updates" className="border rounded-lg px-4">
                    <AccordionTrigger className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-semibold">Community Updates</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 px-2">
                      <ul className="space-y-4 list-none">
                        <li className="border-b pb-3">
                          <p className="font-medium">Twilio</p>
                          <p>Twilio integrates ElevenLabs' AI Voices into ConversationRelay for more natural customer interactions</p>
                        </li>
                        <li className="border-b pb-3">
                          <p className="font-medium">Supernova</p>
                          <p>Supernova launches AI English tutor that actually talks to you. Making learning feel human with ElevenLabs</p>
                        </li>
                        <li className="border-b pb-3">
                          <p className="font-medium">Lex Fridman</p>
                          <p>A three hour interview with Narendra Modi dubbed into English with ElevenLabs' audio AI</p>
                        </li>
                        <li className="border-b pb-3">
                          <p className="font-medium">Google Cloud</p>
                          <p>We've partnered with Google Cloud to bring our AI tools to a wider audience</p>
                        </li>
                        <li>
                          <p className="font-medium">Deutsche Telekom</p>
                          <p>Strengthening our strategic partnership with cutting-edge voice AI solutions for Magenta AI</p>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  {/* Upcoming Events */}
                  <AccordionItem value="upcoming-events" className="border rounded-lg px-4">
                    <AccordionTrigger className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <CalendarDays className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-semibold">Upcoming Events</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 px-2">
                      <p className="mb-3">We have some exciting events lined up this month:</p>
                      <ul className="space-y-3 list-none">
                        <li className="flex gap-2">
                          <div className="font-medium min-w-[90px]">April 6-9</div>
                          <div>
                            <strong>NAB Show:</strong> Join us in Las Vegas to explore AI Audio applications in Media & Entertainment. 
                            <Button variant="link" className="h-auto p-0 text-primary" asChild>
                              <a href="https://nabshow.com/" target="_blank" rel="noopener noreferrer">Register here</a>
                            </Button>
                          </div>
                        </li>
                        <li className="flex gap-2">
                          <div className="font-medium min-w-[90px]">April 9</div>
                          <div>
                            <strong>Dublin Event:</strong> Connect with the Irish AI community and participate in an Agentic AI workshop. 
                            <Button variant="link" className="h-auto p-0 text-primary" asChild>
                              <a href="#" target="_blank" rel="noopener noreferrer">RSVP here</a>
                            </Button>
                          </div>
                        </li>
                        <li className="flex gap-2">
                          <div className="font-medium min-w-[90px]">April 9-11</div>
                          <div>
                            <strong>Google Cloud Next:</strong> Learn how to build with ElevenLabs on Google Cloud. 
                            <Button variant="link" className="h-auto p-0 text-primary" asChild>
                              <a href="https://cloud.withgoogle.com/next" target="_blank" rel="noopener noreferrer">Sign up here</a>
                            </Button>
                          </div>
                        </li>
                        <li className="flex gap-2">
                          <div className="font-medium min-w-[90px]">April 17</div>
                          <div>
                            <strong>Documentation Agents Webinar:</strong> Learn how to integrate Conversational AI into your documentation. 
                            <Button variant="link" className="h-auto p-0 text-primary" asChild>
                              <a href="https://elevenlabs.io/webinars" target="_blank" rel="noopener noreferrer">Join here</a>
                            </Button>
                          </div>
                        </li>
                        <li className="flex gap-2">
                          <div className="font-medium min-w-[90px]">April 24</div>
                          <div>
                            <strong>Artist and the Machine - NYC:</strong> Join us at the AI & Creativity Summit to see tech demos from Gen AI artists. 
                            <Button variant="link" className="h-auto p-0 text-primary" asChild>
                              <a href="#" target="_blank" rel="noopener noreferrer">Get tickets here</a>
                            </Button>
                          </div>
                        </li>
                        <li className="flex gap-2">
                          <div className="font-medium min-w-[90px]">April 25</div>
                          <div>
                            <strong>Customer Support Agents Webinar:</strong> Learn how to create effective customer support agents with AI. 
                            <Button variant="link" className="h-auto p-0 text-primary" asChild>
                              <a href="https://elevenlabs.io/webinars" target="_blank" rel="noopener noreferrer">Register here</a>
                            </Button>
                          </div>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <div className="text-center mt-6">
                  <p className="text-muted-foreground italic">
                    We are dedicated to providing you with the best AI Audio solutions to meet your needs and thank you for partnering with us.
                  </p>
                  <p className="mt-2 font-medium">The ElevenLabs team</p>
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-8">
              {/* Scribe Update */}
              <Card>
                <CardHeader>
                  <div className="space-y-1">
                    <CardTitle className="text-2xl">Scribe: Advanced Speech-to-Text Technology</CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground gap-2">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>March 2025</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Introducing Scribe, our state-of-the-art speech-to-text model that rivals OpenAI's 4o 
                    speech-to-text capabilities. Scribe delivers exceptional transcription accuracy across 
                    multiple languages, with enhanced punctuation, formatting, and speaker diarization.
                  </CardDescription>
                  <div className="mt-4">
                    <img 
                      src="/lovable-uploads/199e69b1-12be-4de7-b1b2-ebf2fc007809.png" 
                      alt="Scribe Speech-to-Text Feature" 
                      className="rounded-lg w-full object-cover" 
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" asChild className="gap-1">
                    <a 
                      href="https://elevenlabs.io/blog/scribe-comparison-to-openais-4o-speech-to-text-model" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Learn more about Scribe <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>

              {/* Actor Mode Update */}
              <Card>
                <CardHeader>
                  <div className="space-y-1">
                    <CardTitle className="text-2xl">Actor Mode: Voice-Guided AI Delivery</CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground gap-2">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>March 2025</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Actor Mode has launched for everyone in Studio, allowing you to use your own voice to guide 
                    the delivery of scripts spoken by our AI voices. This unlocks an entirely new dimension of 
                    creative control for content creators, voice actors, and storytellers.
                  </CardDescription>
                  <div className="mt-4">
                    <VideoEmbed 
                      videoId="Kj2dgXITrPw" 
                      title="Actor Mode Demonstration" 
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" asChild className="gap-1">
                    <a 
                      href="https://twitter.com/elevenlabsio/status/1905653402429723110" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      See the Twitter announcement <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            {/* All Updates Widget */}
            <div className="mt-12 text-center">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="py-6">
                  <div className="flex flex-col items-center gap-4">
                    <Newspaper className="h-10 w-10 text-primary" />
                    <div>
                      <h3 className="text-xl font-medium mb-2">Want to see more?</h3>
                      <p className="text-muted-foreground mb-4">
                        Explore all product and company updates from the ElevenLabs team
                      </p>
                    </div>
                    <Button asChild>
                      <a 
                        href="https://elevenlabs.io/blog" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="gap-2"
                      >
                        See All Updates <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductUpdates;
